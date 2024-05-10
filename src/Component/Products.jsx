import React from "react";
import "./Main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import myImage1 from "./images/product1.png";
import myImage2 from "./images/product2.png";
import myImage3 from "./images/product3.png";
import myImage4 from "./images/product5.png";
import myImage5 from "./images/product6.png";
import myImage6 from "./images/product7.png";
import myImage7 from "./images/product8.png";
import myImage8 from "./images/product10.png";
import myImage9 from "./images/product9.png";

const Product = () => {
  return (
    <section>
      <div className="container">
        <div className="subdiv1">
          <h1>
            Store.{" "}
            <b>
              The best way to buy the <br></br>products you love.
            </b>
          </h1>
        </div>
        <div className="subdiv3">
          <div className="imgblock">
            <img src={myImage1} alt="My Image1" />
            <br />
            <center>
              <label>Mac</label>
            </center>
          </div>
          <div className="imgblock">
            <img src={myImage2} alt="My Image2" />
            <center>
              <label>iPhone</label>
            </center>
          </div>
          <div className="imgblock">
            <img src={myImage3} alt="My Image3" />
            <center>
              <label>iPad</label>
            </center>
          </div>
          <div className="imgblock">
            <img src={myImage4} alt="My Image4" />
            <center>
              <label>AirPods</label>
            </center>
          </div>
          <div className="imgblock">
            <img src={myImage5} alt="My Image5" />
            <center>
              <label>AirTag</label>
            </center>
          </div>
          <div className="imgblock">
            <img src={myImage6} alt="My Image6" />
            <center>
              <label>Apple TV 4K</label>
            </center>
          </div>
          <div className="imgblock">
            <img src={myImage7} alt="My Image7" />
            <center>
              <label>HomePod</label>
            </center>
          </div>
          <div className="imgblock">
            <img src={myImage8} alt="My Image8" />
            <center>
              <label>Accessories</label>
            </center>
          </div>
          <div className="imgblock">
            <img src={myImage9} alt="My Image8" />
            <center>
              <label>Apple Gift Card</label>
            </center>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
