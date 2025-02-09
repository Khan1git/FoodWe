import React from "react";
import "./hero.css";
import hero from "../../assets/hero.png";
import burger from "../../assets/burger.png";
import about from "../../assets/about.png";
import dish from "../../assets/dishes2_1.png";
import dish2 from "../../assets/dishes2_2.png";
import burger2 from "../../assets/burger2.png";
import dishes from "../../assets/dishes3_1.jpg";
import dishes2 from "../../assets/dishes3_5.jpg";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Hero = () => {
  return (
    <>
      <section id="hero_section">
        <div className="hero_info">
          <h2>WELCOME FRESH MEAT</h2>
          <h1>
            SPICEY FRIED <br /> CHICKEN
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ad,
            cumque quas voluptate deleniti quia ratione fuga voluptas architecto
            perspiciatis.
          </p>
          <button>Order Now</button>
        </div>
        <div className="hero_img">
          <img src={hero} alt="" />
        </div>
      </section>

      {/* CARDS SECTION */}

      <section className="card_section">
        <div className="card_box">
          <div className="card">
            <div className="card_info">
              <p>START PRICE 20$</p>
              <h1>TODAY SPECIAL FOOD</h1>
              <p>LIMITED OFFER</p>
              <button>ORDER NOW</button>
            </div>
            <div className="card_img">
              <img src={burger} alt="" />
            </div>
          </div>
          <div className="card card2">
            <div className="card_info">
              <p>START PRICE 20$</p>
              <h1>TODAY SPECIAL FOOD</h1>
              <p>LIMITED OFFER</p>
              <button>ORDER NOW</button>
            </div>
            <div className="card_img">
              <img src={burger} alt="" />
            </div>
          </div>
          <div className="card card3">
            <div className="card_info">
              <p>START PRICE 20$</p>
              <h1>TODAY SPECIAL FOOD</h1>
              <p>LIMITED OFFER</p>
              <button>ORDER NOW</button>
            </div>
            <div className="card_img">
              <img src={burger} alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="hero_about">
        <div className="hero_about_img">
          <img src={about} alt="" />
        </div>
        <div className="hero_about_info">
          <p>About Us</p>
          <h1>Variety of flavours from american cuisine</h1>
          <p>
            icon iconAbout USicon Variety of flavours from american cuisine
            Every dish is not just prepared it's a crafted with a savor the a
            utmost precision and a deep understanding sdf of flavor harmony. The
            experienced hands of our chefs
          </p>
          <button>ORDER NOW</button>
        </div>
      </section>

      {/* popular food section */}

      <section className="hero_food">
        <h1 className="food_h1">OUR MOST POPULAR FOOD</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta magnam
          quis neque.
        </p>
        <div className="main_box">
          <div className="box">
            <img src={dish} alt="" />
            <div className="info">
              <h1>Chicken</h1>
              <p>The Registration fee</p>
              <h3>$58</h3>
              <button>order now</button>
            </div>
          </div>

          <div className="box">
            <img src={dish2} alt="" />
            <div className="info">
              <h1>Chicken</h1>
              <p>The Registration fee</p>
              <h3>$58</h3>
              <button>order now</button>
            </div>
          </div>

          <div className="box">
            <img src={dish2} alt="" />
            <div className="info">
              <h1>Chicken</h1>
              <p>The Registration fee</p>
              <h3>$58</h3>
              <button>order now</button>
            </div>
          </div>
          <div className="box">
            <img src={dish2} alt="" />
            <div className="info">
              <h1>Chicken</h1>
              <p>The Registration fee</p>
              <h3>$58</h3>
              <button>order now</button>
            </div>
          </div>
          <div className="box">
            <img src={dish2} alt="" />
            <div className="info">
              <h1>Chicken</h1>
              <p>The Registration fee</p>
              <h3>$58</h3>
              <button>order now</button>
            </div>
          </div>
        </div>
      </section>

      {/* SEPCIAL OFFER SECTION  */}

      <section className="today_special_Section">
        <div className="today_special">
          <div className="special_info">
            <h2>WELCOME FRESH</h2>
            <h1>TODAY SPECIAL FOOD</h1>
            <h3>Limited Time Offer</h3>
            <button>ORDER NOW</button>
          </div>
          <div className="special_img">
            <img src={burger2} alt="" />
          </div>
        </div>
      </section>

      {/* FEATURES SECTION*/}
      <section class="food-slider">
        <h1>OUR TOP FEATURED CATEGROIES</h1>
        <div class="slider-container">


          <div class="slide">
            <div class="image-wrapper">
              <img src={dishes} alt="Grilled Chicken" />
              <div className="img_info_top">
                <button>View</button>
              </div>
            </div>
          </div>

          <div class="slide">
            <div class="image-wrapper">
              <img src={dishes} alt="Grilled Chicken" />
              <div className="img_info_top">
                <button>View</button>
              </div>
            </div>
          </div>

          <div class="slide">
            <div class="image-wrapper">
              <img src={dishes} alt="Grilled Chicken" />
              <div className="img_info_top">
                <button>View</button>
              </div>
            </div>
          </div>

          <div class="slide">
            <div class="image-wrapper">
              <img src={dishes} alt="Grilled Chicken" />
              <div className="img_info_top">
                <button>View</button>
              </div>
            </div>
          </div>

          <div class="slide">
            <div class="image-wrapper">
              <img src={dishes} alt="Grilled Chicken" />
              <div className="img_info_top">
                <button>View</button>
              </div>
            </div>
          </div>

          <div class="slide">
            <div class="image-wrapper">
              <img src={dishes} alt="Grilled Chicken" />
              <div className="img_info_top">
                <button>View</button>
              </div>
            </div>
          </div>

          <div class="slide">
            <div class="image-wrapper">
              <img src={dishes} alt="Grilled Chicken" />
              <div className="img_info_top">
                <button>View</button>
              </div>
            </div>
          </div>

         
        </div>
      </section>

      {/* THE CONTACT US SECTION */}

      <section className="contact_container">
        <div className="contact_side1">
          <h1>CONTACT US</h1>
          <form action="">
            <div className="sub_input">
              <input type="text"  placeholder="First Name"/>
              <input type="text"  placeholder="Last Name"/>
            </div>
            <label htmlFor="guest">Type Of Service</label>
            <input type="text" name="guest" id=""  placeholder="Total Guest"/>
            <label htmlFor="guest">Your Message</label>
            <textarea name="" id="" placeholder="Enter You Message"></textarea>
            <button>CONTACT</button>
          </form>
        </div>
        <div className="contact_img"></div>
      </section>

      {/* footer section */}

      

    </>
  );
};

export default Hero;
