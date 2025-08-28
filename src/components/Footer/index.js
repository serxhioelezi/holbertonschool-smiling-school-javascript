import { Container } from 'react-bootstrap';
import logo from "../../images/logo.png";
import facebook from "../../images/facebook.png";
import twitter from "../../images/twitter.png";
import instagram from "../../images/instagram.png";
import "./index.css";

const Footer = () => {
  return (
    <footer className="bg-dark py-5">
      <Container>
        <div className="d-flex justify-content-between align-items-center">
          <img src={logo} alt="logo" height="40" />
          <div className="d-flex gap-3">
            <a href="http://localhost:3000/"><img src={facebook} alt="facebook" height="24" /></a>
            <a href="http://localhost:3000/"><img src={twitter} alt="twitter" height="24" /></a>
            <a href="http://localhost:3000/"><img src={instagram} alt="instagram" height="24" /></a>
          </div>
        </div>
        <p className="text-center text-muted mt-5 mb-0">
          © SmileSchool 2020
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
