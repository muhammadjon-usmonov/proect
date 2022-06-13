import { Link } from "react-router-dom";

import Button from "../Button/Button";

import "./Workshops.scss";

const Workshops = () => {
  return (
    <section className="workshops">
      <div className="container">
        <div className="workshops__info">
          <h2 className="workshops__heading">Upcoming Free Workshops</h2>

          <p className="workshops__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros
            elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
            commodo diam libero vitae erat.
          </p>

          <Button className={"workshops__button"}>View All Workshops</Button>
        </div>

        <ul className="workshops__list">
          <li className="workshops__item">
            <div className="workshops__item__inner">
              <h3 className="workshops__item__heading">Photography Basics</h3>

              <p className="workshops__item__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet
                luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non
                enim praesent elementum facilisis leo.
              </p>

              <Link className="workshops__item__link" to="/#">
                Learn More
              </Link>
            </div>
          </li>

          <li className="workshops__item">
            <div className="workshops__item__inner">
              <h3 className="workshops__item__heading">Business 101</h3>

              <p className="workshops__item__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet
                luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non
                enim praesent elementum facilisis leo.
              </p>

              <Link className="workshops__item__link" to="/#">
                Learn More
              </Link>
            </div>
          </li>

          <li className="workshops__item">
            <div className="workshops__item__inner">
              <h3 className="workshops__item__heading">Social Networking Camp</h3>

              <p className="workshops__item__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet
                luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non
                enim praesent elementum facilisis leo.
              </p>

              <Link className="workshops__item__link" to="/#">
                Learn More
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default Workshops;
