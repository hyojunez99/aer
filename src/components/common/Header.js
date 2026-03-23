import { Link } from "react-router-dom";
import LogoImg from "../../assets/images/logo-img.png";
import "./Header.scss";

const Header = () => {
  return (
    <header>
      <div className="header-inner">
        <h1 className="header-logo">
          <Link to="/">
            <img src={LogoImg} alt="로고 이미지" />
          </Link>
        </h1>

        <nav className="header-nav">
          <Link to="/collection">Collection</Link>
          <Link to="/about">About</Link>
        </nav>

        <div className="header-right">
          <Link to="/cart">Cart</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
