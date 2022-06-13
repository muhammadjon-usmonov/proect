import Button from "../Button/Button";

import HeroImage from "../../Assets/Images/HeroImage.png";

import "./Hero.scss";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__info">
          <span className="hero__top__text">Featured Course</span>

          <h1 className="hero__heading">Run your own online learning platform</h1>

          <p className="hero__description">
            A deep-dive on the Instagram algorythm, hashtags, content strategy, and branding.
          </p>

          <span className="hero__bottom__text">Kathryn Murphy</span>

          <Button className={"hero__button"}>Learn More</Button>
        </div>

        <img className="hero__image" src={HeroImage} alt="hero" width={754} height={725} />
      </div>
    </section>
  );
};

export default Hero;
