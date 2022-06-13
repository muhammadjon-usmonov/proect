import { Link } from "react-router-dom";

import Button from "../Button/Button";

import FavoritesFirst from "../../Assets/Images/FavoritesFirst.jpg";
import FavoritesSecond from "../../Assets/Images/FavoritesSecond.jpg";
import FavoritesThird from "../../Assets/Images/FavoritesThird.jpg";

import "./Favorites.scss";

const Favorites = () => {
  return (
    <section className="favorites">
      <div className="container">
        <div className="favorites__info">
          <h2 className="favorites__heading">Featured Courses</h2>

          <p className="favorites__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros
            elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
            commodo diam libero vitae erat.
          </p>

          <Button className={"favorites__button"}>View All Courses</Button>
        </div>

        <ul className="favorites__list">
          <li className="favorites__item">
            <img
              className="favorites__item__image"
              src={FavoritesFirst}
              alt=""
              width={393}
              height={197}
            />

            <div className="favorites__item__info">
              <h3 className="favorites__item__heading">
                How to Increase Your Engagement on Instagram
              </h3>

              <span className="favorites__item__username">Katie Murphy</span>

              <div className="favorites__item__prices">
                <strong className="favorites__item__price">$ 59.99 USD</strong>
              </div>

              <Link className="favorites__item__link" to="/#">
                Learn More
              </Link>
            </div>
          </li>

          <li className="favorites__item">
            <img
              className="favorites__item__image"
              src={FavoritesSecond}
              alt=""
              width={393}
              height={197}
            />

            <div className="favorites__item__info">
              <h3 className="favorites__item__heading">Business 101: Setting up Your Taxes</h3>

              <span className="favorites__item__username">Bessie Cooper</span>

              <div className="favorites__item__prices">
                <strong className="favorites__item__price favorites__item__price--old">
                  $ 69.99 USD
                </strong>
                <strong className="favorites__item__price">$ 39.99 USD</strong>
              </div>

              <Link className="favorites__item__link" to="/#">
                Learn More
              </Link>
            </div>
          </li>

          <li className="favorites__item">
            <img
              className="favorites__item__image"
              src={FavoritesThird}
              alt=""
              width={393}
              height={197}
            />

            <div className="favorites__item__info">
              <h3 className="favorites__item__heading">
                iPhone Photography: Tips, Tricks and Best Practices
              </h3>

              <span className="favorites__item__username">Dianne Russell</span>

              <div className="favorites__item__prices">
                <strong className="favorites__item__price favorites__item__price--old">
                  $ 69.99 USD
                </strong>
                <strong className="favorites__item__price">$ 39.99 USD</strong>
              </div>

              <Link className="favorites__item__link" to="/#">
                Learn More
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Favorites;
