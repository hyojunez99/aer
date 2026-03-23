import { Link } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-inner">
        <div className="footer-left">
          <h2>AER</h2>
          <p>Essential Minimal Wear</p>
        </div>

        <div className="footer-center">
          <Link to="/collection">Collection</Link>
          <Link to="/about">About</Link>
          <Link to="/featured">Featured</Link>
        </div>

        <div className="footer-right">
          <p>Contact</p>
          <span>hello@aer.com</span>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 AER. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
