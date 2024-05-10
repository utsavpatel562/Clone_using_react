import React from "react";
import "./Main.css";
import myImage1 from "./images/subimg1.jpg";
import myImage2 from "./images/subimg2.jpg";
import myImage3 from "./images/subimg3.jpg";
import myImage4 from "./images/icon1.png";
import myImage5 from "./images/icon2.png";
import myImage6 from "./images/icon3.png";
import myImage7 from "./images/icon4.png";
const Cards = () => {
  return (
    <section>
      <div className="subdiv2">
        <br></br>
        <h3>
          <b>The latest.</b> Take a look at what's new right now.
        </h3>
      </div>
      <div className="card text-bg-dark">
        <img src={myImage1} className="card-img" alt="..."></img>
        <div className="card-img-overlay">
          <h6 className="card-title">IPAD PRO</h6>
          <p className="card-text">
            <b>Thinpossible.</b>
            <br />
            from $1399
          </p>
        </div>
      </div>
      <div className="card text-bg-dark">
        <img src={myImage2} className="card-img" alt="..."></img>
        <div className="card-img-overlay" id="mycardid">
          <h6 className="card-title">IPAD AIR</h6>
          <p className="card-text">
            <b>Fresh Air.</b>
            <br />
            From $799
          </p>
        </div>
      </div>
      <div className="card text-bg-dark">
        <img src={myImage3} className="card-img" alt="..."></img>
        <div className="card-img-overlay">
          <h6 className="card-title">IPHONE 15 PRO</h6>
          <p className="card-text">
            <b>Titanium</b>
            <br />
            from $1449
          </p>
        </div>
      </div>
      <br />
      <div className="subdiv3">
        <br></br>
        <h3>
          <b>The Apple Store difference.</b> Even more reasons to shop with us.
        </h3>
      </div>
      <div class="card" id="myproduct2">
        <div class="card-body">
          <img src={myImage6}></img>
          <p class="card-text">
            Enjoy <b>two-hour delivery</b> from an Apple Store,
            <b>free delivery</b>, or easy pickup.
          </p>
        </div>
      </div>
      <div class="card" id="myproduct2">
        <div class="card-body">
          <img src={myImage7}></img>
          <p class="card-text">
            Pay over time with montly financing.<b> Start Now with Apple</b>.
          </p>
        </div>
      </div>
      <div class="card" id="myproduct2">
        <div class="card-body">
          <img src={myImage5}></img>
          <p class="card-text">
            <b>Choose a case. Pick a band.</b> Make Apple Watch
            <b>all your own.</b>
          </p>
        </div>
      </div>
      <div class="card" id="myproduct2">
        <div class="card-body">
          <img src={myImage4}></img>
          <p class="card-text">
            Make them yours. <b>Mix of emoji, names and numbers for free.</b>
          </p>
        </div>
      </div>
    </section>
  );
};
export default Cards;
