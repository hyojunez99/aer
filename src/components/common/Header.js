import { Link } from "react-router-dom";
import { useState } from "react";
import LogoImg from "../../assets/images/logo-img.png";
import "./Header.scss";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={menuOpen ? "active" : ""}>
      <div className="header-inner">
        <h1 className="header-logo">
          <Link to="/">
            <img src={LogoImg} alt="로고 이미지" />
          </Link>
        </h1>

        {/* 햄버거 */}
        <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
        </button>

        {/* 모바일 메뉴 */}
        <nav className={`header-nav ${menuOpen ? "open" : ""}`}>
          <Link to="/collection" onClick={() => setMenuOpen(false)}>
            Collection
          </Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>
            About
          </Link>
        </nav>

        <div className="header-right">
          <Link to="/cart">Cart</Link>
        </div>

      </div>
    </header>
  );
};

export default Header;
