/* eslint-disable jsx-a11y/alt-text */
import { Button, Input } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import { useContext, useEffect, useState } from "react";
import { Form, Modal, Spinner } from "react-bootstrap";
import { FaCommentDots, FaHeart } from "react-icons/fa";
import { GoShare } from "react-icons/go";
import { Context } from "../..";
import { BASE_URL } from "../../constants/api";
import "./Blogs.scss";
import IterateUplaod from "../../components/IterateUpload/IterateUpload";

const Blogs = () => {
  const { store } = useContext(Context);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [formData, setFormData] = useState({
    title: "",
    content: "",
    images: [] as File[],
    author: "",
    _id: "",
    date: new Date(),
  });

  console.log(formData)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files!== null) {
      setFormData({
       ...formData,
        images: Array.from(files),
      });
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 
    console.log(formData)

    store.createBlog(formData);

    handleClose()
  };

  useEffect(() => {
    store.getBlogs();
  }, [store]);


  useEffect(() => {
    if (store.user.id) {
      setFormData(prevState => ({
        ...prevState,
        author: store.user.id
      }));
    }
  }, [store.user.id]);

  if (store.isLoading) {
    return (
      <div className="city container text-center">
        <Spinner className="text-center text-primary" />
      </div>
    );
  }

  return (
    <div className="blogs">
      <div className="b-flex">
        <div className="b-top"></div>
        <div className="b-content">
          <div className="b-divider">
            <div className="b-news">
              <Button
                onClick={handleShow}
                color={"#fff"}
                marginBottom={"50px"}
                background={"orange"}
              >
                Добавить свою историю
              </Button>
              <div className="b-article">
                <div className="b-inner">
                  {store.blogs.map((blog) => (
                    <div className="b-card">
                      <div className="b-card-header">
                        <div className="b-card-header-content">
                          <img src={`${BASE_URL}/${blog.author.avatar}`} />
                          <div className="b-card-header-content-info">
                            <div className="b-card-header-content-info-title">
                              <p>
                                {blog.author.name} {blog.author.surname}
                              </p>
                            </div>
                            <div className="b-card-header-content-info-desc">
                              <p>{new Date(blog.date).toLocaleDateString()}</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="b-card-content">
                        <p className="b-card-content-title">{blog.title}</p>
                        <p className="b-card-content-desc">{blog.content}</p>
                      </div>

                      <div className="b-card-body">
                        {blog.images.map((image) => (
                          <div className="b-card-body-image">
                            <img src={`${BASE_URL}${image}`} />
                          </div>
                        ))}
                      </div>

                      <div className="b-card-footer">
                        <div className="b-card-footer-active">
                          <div className="b-card-footer-active-comment">
                            <FaCommentDots />
                          </div>

                          <div className="b-card-footer-active-comment">
                            <FaHeart /> <span>1</span>
                          </div>
                        </div>

                        <div className="b-card-footer-share">
                          <div className="b-card-footer-share-in">
                            <GoShare />
                          </div>
                        </div>
                      </div>

                      <div className="b-card-comments">
                        <div className="b-card-comments-in">
                          <form className="b-card-comments-in-form">
                            <img src="https://lh3.googleusercontent.com/a/ACg8ocIH-5MVVUjcTg53L2V4hUxN7cKzxD88899Z0a7t_9v7=s96-c" />
                            <div className="b-card-comments-in-form-content">
                              <div className="b-card-comments-in-form-content-input">
                                <Input
                                  placeholder="Here is a sample placeholder"
                                  focusBorderColor="#FF4433"
                                  border="none"
                                />
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="modal-header" closeButton>
          <Modal.Title className="modal-review-title">
            <h1>Добавить историю</h1> <p>Раскажите о своей поездке 😉</p>
          </Modal.Title>

          <Modal.Body className="modal-review-body">
            <form onSubmit={handleSubmit}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>
                  <h6>
                    <b>О чем ваша история?</b>
                    
                  </h6>
                </Form.Label>
                <Form.Control
                  name="title"
                  type="text"
                  placeholder=""
                  size="lg"
                  value={formData.title}
                  onChange={handleInputChange}
                />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>
                  <h6>
                    <b>Опиши как можно подробнее вашу историю</b>
                  </h6>
                </Form.Label>
                <Form.Control
                  name="content"
                  type="text"
                  placeholder=""
                  as="textarea"
                  size="lg"
                  value={formData.content}
                  onChange={handleInputChange}
                />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput3"
              >
                <Form.Label>
                  <h6>
                    <b>Добавьте фотографии</b>
                  </h6>
                </Form.Label>
                <Form.Control type="file" multiple onChange={handleFileChange}/>
              </Form.Group>


              <Button
                type="submit"
                marginTop={"20px"}
                colorScheme="orange"
                size="lg"
              >
                Добавить новости
              </Button>
            </form>
          </Modal.Body>
        </Modal.Header>
      </Modal>
    </div>
  );
};

export default observer(Blogs);
