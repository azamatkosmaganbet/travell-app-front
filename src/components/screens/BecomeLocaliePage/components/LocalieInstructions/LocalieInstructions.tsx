import React from 'react'
import './LocalieInstructions.scss';
const LocalieInstructions = () => {
  return (
    <div className="instructions">
      <div className="instructions-content">
        <div className="instructions-text">
          <h2>Что делать, если я хочу стать локали?</h2>
          <div className="instructions-info">
            <div className="instructions-info-step">
              <span>1</span>
              <h6>Оставьте заявку</h6>
              <p>
                Обязательно добавьте ссылки на свои соцсети и контакты локали,
                если решили присоединиться к нам по рекомендации участника
                сообщества.{" "}
              </p>
            </div>

            <div className="instructions-info-step">
              <span>2</span>
              <h6>Бэкграунд-чек</h6>
              <p>
                Мы внимательно проверяем все заявки, смотрим соц сети. Если нам
                понравится ваша заявка, мы свяжемся по e-mail и пригласим вас на
                видеоинтервью.{" "}
              </p>
            </div>

            <div className="instructions-info-step">
              <span>3</span>
              <h6>Интервью</h6>
              <p>
                Отличный способ познакомиться! Во время звонка мы поговорим
                подробнее о платформе, ответим на вопросы, а вы расскажете о
                себе и своем городе.{" "}
              </p>
            </div>

            <div className="instructions-info-step">
              <span>4</span>
              <h6>Вы локали!</h6>
              <p>
                Если вы прошли интервью, то сразу получите доступ к Локали.
                Заполните профиль, опубликуйте и, вуаля, вы — один из нас!{" "}
              </p>
            </div>
          </div>
          <div className="instructions-submit">
            <a>Подать заявку</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LocalieInstructions