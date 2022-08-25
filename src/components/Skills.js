import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import jsLogo from "../assets/img/logo-js.png";
import cssLogo from "../assets/img/css-logo.png";
import htmlLogo from "../assets/img/html-logo.png";
import reactLogo from '../assets/img/logo-react.png';
import nodeLogo from '../assets/img/logo-nodejs.png';
import reduxLogo from '../assets/img/logo-redux.png';
import githubLogo from '../assets/img/logo-github.png';
import comingLogo from '../assets/img/coming-soon.png';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/banner-bg.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                These are some of my skills.<br></br> I'm still diggin into them, and looking to learn many more!
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img className="logo-css" src={cssLogo} alt="Img" />
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <img className="logo-js" src={jsLogo} alt="Img" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img className="logo-html" src={htmlLogo} alt="Img" />
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <img className="logo-react" src={reactLogo} alt="Img" />
                  <h5>React.js</h5>
                </div>
                <div className="item">
                  <img className="logo-nodejs" src={nodeLogo} alt="Img" />
                  <h5>Node.js</h5>
                </div>
                <div className="item">
                  <img className="logo-redux" src={reduxLogo} alt="Img" />
                  <h5>Redux</h5>
                </div>
                <div className="item">
                  <img className="logo-github" src={githubLogo} alt="Img" />
                  <h5>GitHub</h5>
                </div>
                <div className="item">
                  <img className="coming-soon" src={comingLogo} alt="Img" />
                  <h5>Looking more<br></br> to learn!!</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
