import React from "react";
import Link from "../../components/LinkSection/Link";
import "./shop.css";
import { useState } from "react";
import dish from "../../assets/dishes2_1.png";
import Navbar from "../../components/Navbar/Navbar";


const Shop = () => {
  const [value, setValue] = useState(50);

  return (
    <>
    <Navbar/>
      <Link name={"SHOP"} />

      <section className="shop_conatiner">
        {/* <h1 className="shop_heading">HERE WE WILL SEE THE TITLES</h1> */}
        <div className="shop_main_container">

          <div className="side_bar">
            <div className="cards">
              <h1>SEARCH </h1>
              <input type="search" />
            </div>

            <div className="cards option_card2">
              <h1>CATEGROY </h1>
              <div>
                <input type="checkbox" />
                <label htmlFor="">Chicken</label>
              </div>
              <div>
                <input type="checkbox" />
                <label htmlFor="">Burger</label>
              </div>
              <div>
                <input type="checkbox" />
                <label htmlFor="">Pizza</label>
              </div>
              <div>
                <input type="checkbox" />
                <label htmlFor="">Toast</label>
              </div>
            </div>

            <div className="cards option_card3">
              <h1>PRICE: ${value}</h1>
              <input
                type="range"
                min="0"
                max="100"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
            </div>
          </div>

          <div className="shop_items">
            
            <div className="item">
              <img src={dish} alt="" />
              <div className="info">
                <h1>Chicken</h1>
                <p>The Registration fee</p>
                <h3>$58</h3>
                <button>order now</button>
              </div>
            </div>
           
            
            <div className="item">
              <img src={dish} alt="" />
              <div className="info">
                <h1>Chicken</h1>
                <p>The Registration fee</p>
                <h3>$58</h3>
                <button>order now</button>
              </div>
            </div>
            
            <div className="item">
              <img src={dish} alt="" />
              <div className="info">
                <h1>Chicken</h1>
                <p>The Registration fee</p>
                <h3>$58</h3>
                <button>order now</button>
              </div>
            </div>
            
            <div className="item">
              <img src={dish} alt="" />
              <div className="info">
                <h1>Chicken</h1>
                <p>The Registration fee</p>
                <h3>$58</h3>
                <button>order now</button>
              </div>
            </div>
            
            <div className="item">
              <img src={dish} alt="" />
              <div className="info">
                <h1>Chicken</h1>
                <p>The Registration fee</p>
                <h3>$58</h3>
                <button>order now</button>
              </div>
            </div>
            
            <div className="item">
              <img src={dish} alt="" />
              <div className="info">
                <h1>Chicken</h1>
                <p>The Registration fee</p>
                <h3>$58</h3>
                <button>order now</button>
              </div>
            </div>
            
            <div className="item">
              <img src={dish} alt="" />
              <div className="info">
                <h1>Chicken</h1>
                <p>The Registration fee</p>
                <h3>$58</h3>
                <button>order now</button>
              </div>
            </div>
            
            <div className="item">
              <img src={dish} alt="" />
              <div className="info">
                <h1>Chicken</h1>
                <p>The Registration fee</p>
                <h3>$58</h3>
                <button>order now</button>
              </div>
            </div>
            
            <div className="item">
              <img src={dish} alt="" />
              <div className="info">
                <h1>Chicken</h1>
                <p>The Registration fee</p>
                <h3>$58</h3>
                <button>order now</button>
              </div>
            </div>
            
            

            
          </div>
        </div>
      </section>
    </>
  );
};

export default Shop;
