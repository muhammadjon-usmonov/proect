import Nav from "../Nav/Nav";

import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header__top">
        <div className="container">
          <span className="header__top__text">
            One week only—50% off all courses with code 50OFF at checkout
          </span>
        </div>
      </div>

      <div className="header__bottom">
        <Nav />
      </div>
    </header>
  );
};

export default Header;
