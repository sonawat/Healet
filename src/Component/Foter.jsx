import React from "react";
import "./Foter.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhoneAlt,
  faEnvelope,faArrowLeft, faArrowRight
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Foter = () => {
  return (
    <div>
      <div id="footer">
        <div className="footer1">
          <input type="text" placeholder="Enter email" style={{color:'silver'}}/>
          <button>   <FontAwesomeIcon icon={faArrowRight} /></button>
        </div>
        <div className="footer2">
          <button>
            <FontAwesomeIcon icon={faFacebook} style={{ color: "#4267B2" }} />
          </button>
          <button>
            <FontAwesomeIcon icon={faTwitter} style={{ color: "#1DA1F2" }} />
          </button>
          <button>
            <FontAwesomeIcon icon={faLinkedin} style={{ color: "#0077b5" }} />
          </button>
        </div>
      </div>

      <div className="footmain">
        <div className="foot foot1">
          <h2>Menu</h2> <br />
          <h3>Home</h3>
          <h3>About</h3>
          <h3>Shop</h3>
          <h3>Blog</h3>
        </div>
        <div className="foot foot2">
          <h2>Instagram</h2>
          <br />
          <h3>
            Long established fact
            <br /> that a reader
          </h3>
          <br />
          <h3>
            Long established fact
            <br /> that a reader
          </h3>
        </div>
        <div className="foot foot3">
          <h2>About Us</h2>
          <br />
          <h3>
            When looking at its layout. The <br />
            point of using Lorem Ipsum is <br />
            that it has a more-or-less <br />
            normal distribution of letters, as <br />
            opposed to
          </h3>
        </div>
        <div className="foot foot4">
          <h2>About Us</h2>
          <br />
          <h3>
            <FontAwesomeIcon icon={faMapMarkerAlt} /> Location
          </h3>
          <h3>
            <FontAwesomeIcon icon={faPhoneAlt} /> Call +01 1234567890
          </h3>
          <h3>
            <FontAwesomeIcon icon={faEnvelope} /> demo@gmail.com
          </h3>
          <br />
          <marquee><p>Created By : Aniket Sonawat</p></marquee>
        </div>
      
      </div>
    </div>
  );
};

export default Foter;
