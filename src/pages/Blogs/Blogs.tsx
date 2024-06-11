/* eslint-disable jsx-a11y/alt-text */
import { Button, Input } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import { useContext, useEffect, useState } from "react";
import { Form, Modal, Spinner } from "react-bootstrap";
import { FaCommentDots, FaHeart } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Context } from "../..";
import { BASE_URL } from "../../constants/api";
import { IComment } from "../../models/IComment";
import "./Blogs.scss";

const Blogs = () => {
  const { store } = useContext(Context);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [isLiked, setIsLiked] = useState<any>({});

  const [formData, setFormData] = useState({
    title: "",
    content: "",
    images: [] as File[],
    author: "",
    _id: "",
    date: new Date(),
  });

  const [comment, setComment] = useState<IComment>({
    content: "",
    author: store.user.id,
    post: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files !== null) {
      setFormData({
        ...formData,
        images: Array.from(files),
      });
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);

    store.createBlog(formData);

    handleClose();
  };

  useEffect(() => {
    store.getBlogs();

  }, [store]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Получаем все блоги
       

        // Создаем объект isLiked с ключами блогов и всеми значениями false
        const initialIsLiked: any = {};
        store.blogs.forEach(blog => {
          initialIsLiked[blog._id] = false;
        });

        setIsLiked(initialIsLiked);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchData();
  }, [store]);
  console.log(isLiked);

  const handleLikeClick = async (blog: any) => {
    try {
      // Проверяем, лайкнут ли пост
      if (isLiked[blog._id]) {
        await store.unlikePost(blog._id, store.user.id);
        setIsLiked((prevState: any) => ({ ...prevState, [blog._id]: false }));
      } else {
        await store.likePost(blog._id, store.user.id);
        setIsLiked((prevState: any) => ({ ...prevState, [blog._id]: true }));
      }
    } catch (error) {
      console.error('Error toggling like:', error);
    }
  };

  useEffect(() => {
    if (store.user.id) {
      setFormData((prevState) => ({
        ...prevState,
        author: store.user.id,
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

  const deleteHandler = (id: string, userId: string) => {
    const isConfirmed = window.confirm(
      "Вы уверены, что хотите удалить этот пост?"
    );
    if (isConfirmed) {
      store.deleteBLog(id, userId);
    }
  };

  const createComment = (id: string) => {
    let data = {
      post: id,
      author: store.user.id,
      content: comment.content,
    };

    store.createComment(data);
  };

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
                            <FaCommentDots />{" "}
                            <span>{blog.comments.length}</span>
                          </div>

                          <div className="b-card-footer-active-comment">
                            <FaHeart
                              color={isLiked[blog._id] ? "red" : "gray"}
                              onClick={() => {handleLikeClick(blog)}}
                            />{" "}
                            <span>{blog.likes.length}</span>
                          </div>
                        </div>

                        <div className="b-card-footer-share">
                          <div className="b-card-footer-share-in">
                            {store.user.id === blog.author._id && (
                              <MdDelete
                                color="red"
                                onClick={() => {
                                  deleteHandler(blog._id, blog.author._id);
                                }}
                              />
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="b-card-comments">
                        <div className="b-card-comments-in">
                          {blog.comments &&
                            blog.comments.map((comment) => (
                              <div className="comments-user">
                                <div className="comments-user-item">
                                  <img
                                    src={`${BASE_URL}/${comment.author.avatar}`}
                                  />
                                  <div className="comments-user-data">
                                    <p>
                                      {comment.author.name}{" "}
                                      {comment.author.surname}
                                    </p>
                                    <div className="comments-user-data-content">
                                      <p>
                                        <span>{comment.content}</span>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))}
                          <form
                            className="b-card-comments-in-form"
                            onSubmit={() => {
                              createComment(blog._id);
                            }}
                          >
                            <img src="https://lh3.googleusercontent.com/a/ACg8ocIH-5MVVUjcTg53L2V4hUxN7cKzxD88899Z0a7t_9v7=s96-c" />
                            <div className="b-card-comments-in-form-content">
                              <div className="b-card-comments-in-form-content-input">
                                <Input
                                  placeholder="Here is a sample placeholder"
                                  focusBorderColor="#FF4433"
                                  border="none"
                                  name="comment"
                                  onChange={(e) => {
                                    setComment({
                                      ...comment,
                                      content: e.target.value,
                                    });
                                  }}
                                  value={comment.content}
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
                <Form.Control
                  type="file"
                  multiple
                  onChange={handleFileChange}
                />
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
