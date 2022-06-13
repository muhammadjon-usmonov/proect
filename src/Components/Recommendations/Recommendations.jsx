import Button from "../Button/Button";

import RecommendationsImage from "../../Assets/Images/Recommendations.jpg";

import "./Recommendations.scss";

const Recommendations = () => {
  return (
    <section className="recommendations">
      <div className="container">
        <img
          className="recommendations__image"
          src={RecommendationsImage}
          alt=""
          width={720}
          height={665}
        />

        <div className="recommendations__info">
          <h2 className="recommendations__heading">Get personalized learning recommendations</h2>

          <p className="recommendations__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet
            luctus venenatis, lectus magna fringilla urnaLorem ipsum dolor sit amet.
          </p>

          <Button className={"recommendations__button"}>Contact Us</Button>
        </div>
      </div>
    </section>
  );
};

export default Recommendations;
