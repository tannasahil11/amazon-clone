import React from "react";
import "./Home.css";
import Product from "./Product.js";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home_row">
          <Product
            title="The lean startup"
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
            price={19.99}
            rating={5}
          />
          <Product
            title="Google Pixel Watch 2 - WiFi - Silver/Blue"
            image="https://m.media-amazon.com/images/I/71nEDjUiHGL._AC_SL1500_.jpg"
            price={399.99}
            rating={5}
          />
          {/*product*/}
        </div>
        <div className="home_row">
          <Product
            title="KitchenAid Classic Series 4.5-Quart Tilt-Head Stand Mixer, Onyx Black, K45SSOB"
            image="https://m.media-amazon.com/images/I/51HXid8ExKL.__AC_SX300_SY300_QL70_ML2_.jpg"
            price={264.99}
            rating={3}
          />
          <Product
            title="Introducing Echo Pop | Full sound compact smart speaker with Alexa | Charcoal"
            image="https://m.media-amazon.com/images/I/41isZ6WaV9L._AC_SL1000_.jpg"
            price={24.99}
            rating={5}
          />
          <Product
            title="Logitech G PRO X Superlight Wireless Gaming Mouse, Ultra-Lightweight, Hero 25K Sensor, 25,600 DPI"
            image="https://m.media-amazon.com/images/I/51uy8gOG-iL._AC_SL1400_.jpg"
            price={149.99}
            rating={4}
          />
        </div>
        <div className="home_row">
          <Product
            title="SAMSUNG 70-Inch Class Crystal UHD CU7000 Series PurColor, Object Tracking Sound Lite, Q-Symphony, 4K Upscaling, HDR, Gaming Hub, Smart TV - [UN70CU7000FXZC][Canada Version] (2023)"
            image="https://m.media-amazon.com/images/I/81pUSxpNtQL.__AC_SY300_SX300_QL70_ML2_.jpg"
            price={898.99}
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
