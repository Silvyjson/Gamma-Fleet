import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import backgroundImg from "../../assets/Images.png"


function HeaderSection() {
  const navigate = useNavigate();

  return (
    <header className="header_section">
      <div className="header_container">
        <div className="header_content">
          <h1>
            Streamline Your Fleet Operations!
          </h1>
          <p>
            This is where innovation drives the road! Monitor, analyze, and elevate your fleet&apos;s performance. Maximize efficiency, minimize costs!
          </p>

          <div className="button" onClick={() => navigate("/Gamma-Fleet/signUp-page")}>
            <button>Get Started</button>
            <p>Trusted by 50k+ users</p>
            <div className="rate-section">
              <i>
                {[1, 2, 3, 4, 5].map((star) => (
                  <FontAwesomeIcon
                    key={star}
                    icon={"fa-solid fa-star"}
                    className="star-icon"
                  />
                ))}
              </i>
              <p>4.1/5 (14k Reviews)</p>
            </div>
          </div>
        </div>
      </div>
      <div className="header-image">
        <img src={backgroundImg} alt="photos of pages" />
      </div>
    </header>
  );
}

export default HeaderSection;