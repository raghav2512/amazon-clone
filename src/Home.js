import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import Product from "./Product";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <Carousel className="home__image" showThumbs={false} autoPlay={true}>
          <div>
            <img
              className="home__image"
              src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="home__image"
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/kitchen/Herotators/XCM_Manual_1231691_1222782_IN_in_x999_store_in_en_3179209_1500x600_en_IN._CB410654551_.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="home__image"
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Herotator/PCHERO/HeroPC_1500x600_1._CB660417598_.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="home__image"
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Gateway/SuperSale_Herotator_1st-3rdMar/GW_PC_BUNK_1500x600._CB659216141_.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="home__image"
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/1499store/2021/Feb/Hindi/Header_1500x600eng._CB660976519_.jpg"
              alt=""
            />
          </div>
        </Carousel>
        <div className="home__row shadow">
          <Product
            title="Harry Potter and the Philosopher's Stone"
            id="52363483"
            price={249.99}
            image="https://m.media-amazon.com/images/I/81YOuOGFCJL._AC_UL320_.jpg"
            rating={5}
          />
          <Product
            id="49538094"
            title="Apple MacBook Pro (13-inch, 8GB RAM, 256GB SSD, 1.4GHz Quad-core 8th-Generation Intel Core i5 Processor, Magic Keyboard) - Space Grey"
            price={102990.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81mq%2BcwSDwL._SX522_.jpg"
          />
        </div>

        <div className="home__row shadow">
          <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN Killer Smart Watch"
            price={3999.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={3498.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={26598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>

        <div className="home__row shadow">
          <Product
            id="1246783"
            title="Nidhi Sequence Men's Rayon Cotton Lining Digital Printed Stitched Half Sleeve Shirt"
            price={699.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/71XpfdVVJFL._AC_UL320_.jpg"
          />
          <Product
            id="4598408"
            title="Xtore Breathable cotton cloth mask | Reusable | Washable | 2 layer - (Pack of 6) (Peach, Red, Green, Light Blue, Dark Blue, Violet)"
            price={258.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/91I0DxCtqYL._SX569_.jpg"
          />
          <Product
            id="7294014"
            title="Blueberry B-40, 40 Acoustic Guitar Kit with Bag,Belt, One Pack Strings & Picks (Blue)"
            price={3595.0}
            rating={5}
            image="https://m.media-amazon.com/images/I/719jvBWr1NL._AC_UL320_.jpg"
          />
        </div>

        <div className="home__row shadow">
          <Product
            id="90829332"
            title="Samsung 163 cm (65 Inches) Wondertainment Series Ultra HD LED Smart TV UA65TUE60AKXXL (Titan Gray) (2020 model)"
            price={87990.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71tt%2BZeOw%2BL._SX450_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
