import "../styles/Footer.scss";
import { LocationOn, LocalPhone, Email } from "@mui/icons-material";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_left">
        <a href="/">
          <img
            src="https://homesteadrealtynj.com/wp-content/uploads/2023/01/Homestead-logo-no-date.png"
            alt="logo"
          />
        </a>
      </div>

      <div className="footer_center">
        <h3>Useful Links</h3>
        <ul>
          <li>About Us</li>
          <li>Terms and Conditions</li>
          <li>Return and Refund Policy</li>
        </ul>
      </div>

      <div className="footer_right">
        <h3>Contact</h3>
        <div className="footer_right_info">
          <LocalPhone />
          <p>+91 8979005755</p>
        </div>
        <div className="footer_right_info">
          <Email />
          <p>shubhamarela2001@gmail.com</p>
        </div>
        <img src="/assets/payment.png" alt="payment" />
      </div>
      <div className="inform">
        <h2>MAJOR PROJECT</h2>
        <h5>PROJECT NAME - HOMESTEAD HEAVEN REALITY</h5>
        <h5>NAME - SHUBHAM SHARMA</h5>
        <h5>BRANCH - MCA</h5>
        <h5>ENROLL - 0201CA221069</h5>
        <h5>SEMESTER - 4th</h5>
        <h5>YEAR - 2022-2024</h5>
      </div>
    </div>
  );
};

export default Footer;
