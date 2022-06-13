import Star from "../Lib/Icons/Star";

import "./Review.scss";

const Review = () => {
  return (
    <section className="review">
      <div className="review__top">
        <div className="container">
          <ul className="review__rating">
            <li className="review__rating__star">
              <Star />
            </li>
            <li className="review__rating__star">
              <Star />
            </li>
            <li className="review__rating__star">
              <Star />
            </li>
            <li className="review__rating__star">
              <Star />
            </li>
            <li className="review__rating__star">
              <Star />
            </li>
          </ul>

          <p className="review__description">
            “Kate’s courses are a game changer. She’s thorough, organized, and explains things in a
            no-nonsense way that makes it easy for anyone—beginners to experts—to learn something
            from her courses and take their game to the next level.”
          </p>

          <span className="review__description__author">James Brown, Influencer</span>

          <div className="review__pagination">
            <span className="review__pagination__item review__pagination__item--active"></span>
            <span className="review__pagination__item"></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;
