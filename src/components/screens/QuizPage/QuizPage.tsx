import { observer } from "mobx-react-lite";
import { useContext, useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import ReactSelect from "react-select";
import makeAnimated from "react-select/animated";
import { Context } from "../../..";
import options from "../../../constants/languages";
import QuestionForm from "../../QuestionForm/QuestionForm";
import "./QuizPage.scss";
import {
  FaFacebook,
  FaInstagram,
  FaTelegram,
  FaVk,
  FaYoutube,
} from "react-icons/fa";
import { interests } from "../../../constants/interests";
const QuizPage = () => {
  const { store } = useContext(Context);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [totalQuestion, setTotalQuestion] = useState(6);
  const [isLoading, setIsLoading] = useState(false);
  const animatedComponents = makeAnimated();
  const [value, setValue] = useState({
    name: "",
    email: "",
    description: "",
    languages: [],
    cities: [],
    socialMedia: {
      facebook: "",
      instagram: "",
      telegram: "",
      youtube: "",
      vk: "",
    },
    interests: [],
  });
  const [cities, setCities] = useState<{ label: string; value: string }[]>([]);
  const handleChange = (key: any, selectedOptions: any) => {
    const selectedLanguages = selectedOptions.map(
      (option: any) => option.value
    );
    setValue((prevState) => ({
      ...prevState,
      [key]: selectedLanguages,
    }));
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      store.checkAuth();
    }

    store.getCities().then(() => {
      const citiesOptions = store.cities.map((city) => ({
        label: city.name,
        value: city._id,
      }));
      // Обновление состояния с полученными городами
      setCities(citiesOptions);
    });
  }, []);

  useEffect(() => {
    setValue((prevValue) => ({
      ...prevValue,
      name: store.user.name || "",
      email: store.user.email || "", // Обновите значение name только если store.user.name доступен
    }));
  }, [store.user.name]);

  const progress = (currentQuestion / totalQuestion) * 100;

  const isFirstQuestion = currentQuestion === 1;
  const isLastQuestion = currentQuestion === totalQuestion;

  const onNextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
  };

  const onPrevQuestion = () => {
    setCurrentQuestion(currentQuestion - 1);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let data = {
      userId: store.user.id,
      data: value,
    };

    console.log(data);

    store.createGuideRequest(data);
  };
  return (
    <div className="quiz">
      <div>
        <div className="quiz-content">
          {" "}
          <div className="quiz-modal">
            <div className="quiz-modal-inner">
              <div className="quiz-modal-wrapper">
                <div className="progress">
                  <div
                    className="progress-line"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
                <form className="quiz-form" onSubmit={onSubmit}>
                  <div className="quiz-form-content">
                    {currentQuestion === 0 && (
                      <QuestionForm
                        isFirstQuestion={true}
                        onNextQuestion={onNextQuestion}
                        onPreviousQuestion={onPrevQuestion}
                        question={`Привет! Давай начнем со знакомства. Тебя зовут ${store.user.name} , верно? Если хочешь поменять имя для аккаунта, то
                самое время! Просто введи вместо этого другое.`}
                      >
                        <Form.Group
                          className="mb-3 mt-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Control
                            className=""
                            size="lg"
                            required
                            type="text"
                            onChange={(e) =>
                              setValue({ ...value, name: e.target.value })
                            }
                            value={value.name}
                            defaultValue={store.user.name}
                            placeholder=""
                          />
                        </Form.Group>
                      </QuestionForm>
                    )}

                    {currentQuestion === 1 && (
                      <QuestionForm
                        isFirstQuestion={false}
                        onNextQuestion={onNextQuestion}
                        onPreviousQuestion={onPrevQuestion}
                        question={`Приятно познакомиться, ${store.user.name}! На какую почту мы можем прислать тебе уведомление, что твой профиль опубликован?`}
                      >
                        <Form.Group
                          className="mb-3 mt-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Control
                            className=""
                            size="lg"
                            required
                            type="text"
                            onChange={(e) =>
                              setValue({ ...value, email: e.target.value })
                            }
                            value={value.email}
                            defaultValue={store.user.email}
                            placeholder=""
                          />
                        </Form.Group>
                      </QuestionForm>
                    )}

                    {currentQuestion === 2 && (
                      <QuestionForm
                        isFirstQuestion={false}
                        onNextQuestion={onNextQuestion}
                        onPreviousQuestion={onPrevQuestion}
                        question={`Очень интересно, ${store.user.name}! 🤔 Расскажи о себе чуть подробнее, как в краткой биографии. Чем ты занимаешься?`}
                      >
                        <Form.Group
                          className="mb-3 mt-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Control
                            className=""
                            size="lg"
                            required
                            type="text"
                            onChange={(e) =>
                              setValue({
                                ...value,
                                description: e.target.value,
                              })
                            }
                            value={value.description}
                            defaultValue={value.description}
                            placeholder=""
                          />
                        </Form.Group>
                      </QuestionForm>
                    )}

                    {currentQuestion === 3 && (
                      <QuestionForm
                        isFirstQuestion={false}
                        onNextQuestion={onNextQuestion}
                        onPreviousQuestion={onPrevQuestion}
                        question={`Сейчас мы создаём аккаунт на русском языке, но нам очень интересно узнать, какие ещё языки ты знаешь?`}
                      >
                        <ReactSelect
                          closeMenuOnSelect={false}
                          components={animatedComponents}
                          isMulti
                          name="languages"
                          options={options}
                          onChange={(selectedOptions) =>
                            handleChange("languages", selectedOptions)
                          }
                        />
                      </QuestionForm>
                    )}

                    {currentQuestion === 4 && (
                      <QuestionForm
                        isFirstQuestion={false}
                        onNextQuestion={onNextQuestion}
                        onPreviousQuestion={onPrevQuestion}
                        question={`А где будешь проводить прогулки? Можно выбрать любое количество городов 🏘️`}
                      >
                        <ReactSelect
                          closeMenuOnSelect={false}
                          components={animatedComponents}
                          isMulti
                          name="cities"
                          options={cities}
                          onChange={(selectedOptions) =>
                            handleChange("cities", selectedOptions)
                          }
                        />
                      </QuestionForm>
                    )}

                    {currentQuestion === 5 && (
                      <QuestionForm
                        isFirstQuestion={false}
                        onNextQuestion={onNextQuestion}
                        onPreviousQuestion={onPrevQuestion}
                        question={`Нам интересно чем ты увлекаешься в свободное время )`}
                      >
                        <ReactSelect
                          closeMenuOnSelect={false}
                          components={animatedComponents}
                          isMulti
                          name="interests"
                          options={interests}
                          onChange={(selectedOptions) =>
                            handleChange("interests", selectedOptions)
                          }
                        />
                      </QuestionForm>
                    )}

                    {currentQuestion === 6 && (
                      <QuestionForm
                        isFirstQuestion={false}
                        isLastQuestion={true}
                        isLoading={store.isLoading}
                        // onNextQuestion={onSubmit}
                        // onNextQuestion={onNextQuestion}
                        onPreviousQuestion={onPrevQuestion}
                        question={`Обменяемся социальными сетями? Вот наши каналы`}
                      >
                        <div className="media">
                          <div className="social">
                            <div className="media-container">
                              <div className="media-wrapper">
                                <div className="media-block">
                                  <FaTelegram />
                                  <input
                                    value={value.socialMedia.telegram}
                                    onChange={(e) =>
                                      setValue({
                                        ...value,
                                        socialMedia: {
                                          ...value.socialMedia,
                                          telegram: e.target.value,
                                        },
                                      })
                                    }
                                    placeholder="Твой ник в Telegram"
                                  />
                                </div>
                                <div className="media-block">
                                  <FaFacebook />
                                  <input
                                    value={value.socialMedia.facebook}
                                    onChange={(e) =>
                                      setValue({
                                        ...value,
                                        socialMedia: {
                                          ...value.socialMedia,
                                          facebook: e.target.value,
                                        },
                                      })
                                    }
                                    placeholder="Твой ник в Facebook"
                                  />
                                </div>
                                <div className="media-block">
                                  <FaInstagram />
                                  <input
                                    value={value.socialMedia.instagram}
                                    onChange={(e) =>
                                      setValue({
                                        ...value,
                                        socialMedia: {
                                          ...value.socialMedia,
                                          instagram: e.target.value,
                                        },
                                      })
                                    }
                                    placeholder="Твой ник в Instagram"
                                  />
                                </div>
                                <div className="media-block">
                                  <FaYoutube />
                                  <input
                                    value={value.socialMedia.youtube}
                                    onChange={(e) =>
                                      setValue({
                                        ...value,
                                        socialMedia: {
                                          ...value.socialMedia,
                                          youtube: e.target.value,
                                        },
                                      })
                                    }
                                    placeholder="Твой ник в Youtube"
                                  />
                                </div>
                                <div className="media-block">
                                  <FaVk />
                                  <input
                                    value={value.socialMedia.vk}
                                    onChange={(e) =>
                                      setValue({
                                        ...value,
                                        socialMedia: {
                                          ...value.socialMedia,
                                          vk: e.target.value,
                                        },
                                      })
                                    }
                                    placeholder="Твой ник в VK"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </QuestionForm>
                    )}

                    {/* {currentQuestion === 7 && (
                      <QuestionForm
                        isFirstQuestion={true}
                        isLastQuestion={true}
                        // onNextQuestion={onSubmit}
                        onPreviousQuestion={onPrevQuestion}
                        question={`Отлично! Осталось немного. Наши менеджера уже обрабатывают ваш запрос`}
                      >
                        <div>
                          <p>
                            Мы нигде его не опубликуем, его просмотрят только
                            наши модераторы
                          </p>
                        </div>
                      </QuestionForm>
                    )} */}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default observer(QuizPage);
