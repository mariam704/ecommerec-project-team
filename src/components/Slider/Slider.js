import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

class Slider extends Component {
  render() {
    return (
      <Carousel>
        <div>
          <img
            src={require("../Slider/sliderImages/2n.jpg")}
            style={{ width: "80%", maxHight: 500 }}
            alt="product1"
          />
          {/* <p className="legend">Legend 1</p> */}
        </div>
        <div>
          <img
            src={require("../Slider/sliderImages/1n.jpg")}
            style={{ width: "80%", maxHight: 500 }}
            alt="product2"
          />
          {/* <p className="legend">Legend 1</p> */}
        </div>
        <div>
          <img
            src={require("../Slider/sliderImages/3n.jpg")}
            style={{ width: "80%", maxHight: 500 }}
            alt="product3"
          />
          {/* <p className="legend">Legend 1</p> */}
        </div>

        <div>
          <img
            src={require("../Slider/sliderImages/2.png")}
            style={{ width: "80%", maxHight: 500 }}
            alt="product4"
          />
          {/* <p className="legend">Legend 2</p> */}
        </div>
        <div>
          <img
            src={require("../Slider/sliderImages/3.png")}
            style={{ width: "80%", maxHeight: 500 }}
            alt="product5"
          />
          {/* <p className="legend">Legend 3</p> */}
        </div>
        {/* <div>
                    <img src={require('../Slider/sliderImages/4n.jpg')} />
                    <p className="legend">Legend 3</p>
                </div> */}
      </Carousel>
    );
  }
}

export default Slider;
