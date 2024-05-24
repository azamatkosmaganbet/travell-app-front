import { Box, Button, Heading } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { Form, Modal } from "react-bootstrap";
import StarRatings from "react-star-ratings";
import "./Review.scss";
import { ReactComponent as Star } from "../../assets/icons/star.svg";
import { Context } from "../..";
import { useParams } from "react-router-dom";
import IReview from "../../models/IReview";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { observer } from "mobx-react-lite";
import { BASE_URL } from "../../constants/api";

const Review = ({ reviews }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const { store } = useContext(Context);
  const { id } = useParams();
  const onSubmit = () => {
    let data = {
      userId: store.guide._id,
      reviewerId: store.user.id,
      comment: comment,
      rating: rating,
    };
    console.log(data);
    store.createReview(data);

    handleClose();
  };
  

  return (
    <div className="review">
      <Box>
        <Button
          marginBottom={50}
          onClick={handleShow}
          colorScheme="orange"
          size="lg"
        >
          Оставить отзыв
        </Button>
      </Box>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="modal-header" closeButton>
          <Modal.Title className="modal-review-title">
            <h1>Оставить отзыв</h1> <p>Раскажите о своей поездке 😉</p>
          </Modal.Title>

          <Modal.Body className="modal-review-body">
            <form onSubmit={onSubmit}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Что понравилось, а что нет</Form.Label>
                <Form.Control
                  value={comment}
                  onChange={(e) => {
                    setComment(e.target.value);
                  }}
                  name="comment"
                  type="text"
                  placeholder=""
                />
              </Form.Group>

              <StarRatings
                rating={rating}
                changeRating={(newRating) => setRating(newRating)}
                starRatedColor="gold"
                numberOfStars={5}
                name="rating"
              />

              <Button
                type="submit"
                marginTop={"20px"}
                colorScheme="orange"
                size="lg"
              >
                Оставить отзыв
              </Button>
            </form>
          </Modal.Body>
        </Modal.Header>
      </Modal>

      <div className="review-title">
        <div className="review-title-name">
          <Heading as="h3" size="lg">
            Отзывы
          </Heading>
        </div>

        <div className="reviews-data">
          <Star />
          <Heading as={"h2"} size="lg">
            {(reviews?.avg)?.toString()?.substring(0,3)}
          </Heading>
          <p>({reviews.reviews?.length} отзыва)</p>
        </div>
      </div>

      <div className="review-body">
        <div className="review-body-inner">
          <Swiper breakpoints={{
            744: {
              slidesPerView: 2
            },
            0: {
              slidesPerView: 1
            }
          }} spaceBetween={"50px"} slidesPerView={2} modules={[Navigation]}>
            {reviews?.reviews && reviews?.reviews?.map((review) => {
              return (
                <SwiperSlide key={review._id}>
                  <div className="review-card">
                    <div className="review-card-header">
                      <img src={`${BASE_URL}/${review.reviewer?.avatar}`} />
                      <div className="review-card-header-title">
                        <p>
                          {review.reviewer?.name} {review.reviewer?.surname}
                        </p>
                        <div className="review-card-header-title-star">
                          <div className="star-star">
                            <StarRatings
                              rating={rating}
                              starRatedColor="gold"
                              numberOfStars={review.rating}
                              name="rating"
                              starDimension="20px"
                              starSpacing="1"
                            />
                          </div>

                          <p className="review-card-header-title-star-text">
                            <span>
                              {new Date(review.createdAt).toLocaleString()}
                            </span>
                          </p>
                          <p className="review-card-header-title-star-text">
                            Вена
                          </p>
                        </div>
                      </div>
                    </div>
                    <p className="review-comment">{review.comment}</p>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default observer(Review);
