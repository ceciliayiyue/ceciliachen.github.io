import React from "react";
import "./stars.scss";
import Typed from "react-typed";

class Intro extends React.Component {
  render() {
    return (
      // <div id="home" className="intro route bg-image " style={{backgroundImage: "url("+bigImage+")"}}>
      <div id="home" className="intro route bg-image background">
        {/* <div id="stars" />
        <div id="stars2" />
        <div id="stars3" /> */}

        <div className="intro-content display-table">
          <div className="table-cell">
            <div className="container">
              <h1 className="intro-title mb-4">Hi, I'm Cecilia</h1>
              <p className="intro-subtitle">
                <span className="text-slider-items">I am a </span>
                <strong className="text-slider">
                  <Typed
                    strings={[
                      
                      "Coder",
                      "Photographer",
                      "Adventurer",
                      
                    ]}
                    typeSpeed={80}
                    backDelay={1100}
                    backSpeed={30}
                    loop
                  />
                </strong>
              </p>
            
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Intro;
