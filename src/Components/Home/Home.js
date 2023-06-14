import React from "react";
import "./Home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Product from "../Product/Product";


const Home = () => {
  return (
    <div className="home">
       <div className="home_carousel_container">
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={4000}
        transitionTime={500}
        
      >
        <div className="home_carousel">
          <img
            className="carousel_img"
            src="https://m.media-amazon.com/images/I/61vFcsM04CL._SX3000_.jpg"
            alt=""
          />
        </div>

        <div className="home_carousel">
          <img
            className="carousel_img"
            src="https://m.media-amazon.com/images/I/613-gA49v1L._SX3000_.jpg"
            alt=""
          />
        </div>

        <div className="home_carousel">
          <img
            className="carousel_img"
            src="https://m.media-amazon.com/images/I/71LbHsact9L._SX3000_.jpg"
            alt=""
          />
        </div>
        
        <div className="home_carousel">
          <img
            className="carousel_img"
            src="https://m.media-amazon.com/images/I/71vdTR50hFL._SX3000_.jpg"
            alt=""
          />
        </div>
        <div className="home_carousel">
          <img
            className="carousel_img"
            src="https://m.media-amazon.com/images/I/71tIrZqybrL._SX3000_.jpg"
            alt=""
          />
        </div>
        <div className="home_carousel">
          <img
            className="carousel_img"
            src="https://m.media-amazon.com/images/I/61elgqtPHbL._SX3000_.jpg"
            alt=""
          />
        </div>
      </Carousel>
      </div>
   
     

      <div className="home_row">
       
       
        <Product
          id={1}
          title="Marcy Dual Action Cross Training Recumbent Exercise Bike with Arm Exercisers, Gym Equipment for Work from Home Fitness, Black JX-7301"
          rating={4}
          price={307.99}
          image="https://m.media-amazon.com/images/I/71E+oh38ZqL._AC_SX425_.jpg"
        />
        <Product
          id={2}
          title="Apple 2022 11-inch iPad Pro (Wi-Fi, 128GB) - Space Gray (4th Generation)"
          rating={4.5}
          price={707.47}
          image="https://m.media-amazon.com/images/I/81gC7frRJyL._AC_UY327_FMwebp_QL65_.jpg"
        />
        
        </div>
        <div className="home_row">
      
        <Product
          id={4}
          title="Smart Watches for Men  Fitness Tracker 100 Sport Modes Heart Rate Blood Oxygen Sleep Monitor  Watch Activity Tracker "
          rating={4}
          price={65}
          image="https://m.media-amazon.com/images/I/71TfghMQSuL._AC_SY355_.jpg"
        />
        <Product
          id={5}
          title="Grandmaster of Demonic Cultivation: Mo Dao Zu Shi (Novel) Vol. 5 (Special Edition)"
          rating={4}
          price={24.23}
          image="https://m.media-amazon.com/images/I/51OJpadQ-LL._SX506_BO1,204,203,200_.jpg"
        />
         <Product
          id={6}
          title="Nikon D3200 24.2 MP CMOS Digital SLR with 18-55mm f/3.5-5.6 AF-S DX NIKKOR Zoom Lens"
          rating={4.5}
          price={549}
          image="https://m.media-amazon.com/images/I/51+JuG2hguL._AC_SY355_.jpg"
        />
        </div>


        <div className="home_row">
        <Product
          id={3}
          title="YSSOA Backrest and Seat Height Adjustable Swivel Recliner Racing Office Computer Ergonomic Video Game Chair"
          rating={4.5}
          price={209}
          image="https://m.media-amazon.com/images/I/81xmjvkCTNL._AC_UL480_FMwebp_QL65_.jpg"
        />
        </div>

        
        <div className="home_row">
      
      
      <Product
        id={7}
        title="SAMSUNG Galaxy Buds Live True Wireless Earbuds US Version Active Noise Cancelling Wireless Charging "
        rating={4.5}
        price={89}
        image="https://m.media-amazon.com/images/I/71bkS3VmJnL._AC_UL480_FMwebp_QL65_.jpg"
      />
      <Product
        id={8}
        title="HP 2022 New 15 Laptop, 15.6 HD LED Display, Intel Dual-Core Processor, 16GB DDR4 RAM, 1TB SSD,  Long Battery Life, Windows 11"
        rating={4.5}
        price={499.00}
        image="https://m.media-amazon.com/images/I/71rmymgVWVL._AC_SY355_.jpg"
      />
      <Product
        id={9}
        title="PS5 Controller Charging Station with Fast Dual Charging Dock PS5 Charger for Playstation 5  Wireless Controller Accessories  "
        rating={4.5}
        price={18}
        image="https://m.media-amazon.com/images/I/71lkbBa83uL._AC_UY327_FMwebp_QL65_.jpg"
      />
    </div> 
    
        <div className="home_row">
      
       <img className="home_adv"
        src="https://m.media-amazon.com/images/G/31/AMS/IN/970X250-_desktop_banner.jpg"
       alt="" />
       
      
        </div>
        
        
        <div className="home_row">
      
      
      <Product
        id={10}
        title="SAMSUNG Galaxy S22 Ultra Cell Phone, 256GB, 8K Camera & Video, Brightest Display Screen, S Pen, Long Battery Life,  Green "
        rating={4.5}
        price={999.89}
        image="https://m.media-amazon.com/images/I/61nhOdlKpDL._AC_SX355_.jpg"
      />
      <Product
        id={11}
        title="HP 2022 New 15 Laptop, 15.6 HD LED Display, Intel Dual-Core Processor, 16GB DDR4 RAM, 1TB SSD,  Long Battery Life, Windows 11"
        rating={4}
        price={499.00}
        image="https://m.media-amazon.com/images/I/71JfNS-dyPL._AC_UX679_.jpg"
      />
      <Product
        id={12}
        title="NVIDIA SHIELD Android TV Streaming Media Player;  Google Assistant Built-In, Works with Alexa"
        rating={4.5}
        price={149}
        image="https://m.media-amazon.com/images/I/51irVXBTIrL._AC_SX425_.jpg"
      />
    </div>
        </div>

   
  );
};

export default Home;
