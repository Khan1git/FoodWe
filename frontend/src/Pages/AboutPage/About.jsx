import React from "react";
import Link from "../../components/LinkSection/Link";
import "./aboutMe.css";

import profile from '../../assets/profile5.jpg'

const About = () => {
  return (
    <>
      <Link name={"About"} />

      <section className="About_me_section">
        {/* <h1>THIS IS NOW ABOUT COTENT</h1> */}
        <div className="top_about_contaier">

          <h3>ABOUT US</h3>
          <h1>Variety of flavours from american cuisine</h1>
          <p>
            It is a long established fact that a reader will be distracted the
            readable contentt
          </p>
          <button>ORDER NOW</button>
        </div>
      </section>

      <section className="about_team_section">
        <h3>OUR CHEEF'S</h3>
        <h1>Meet Our Expert Team</h1>
        {/* <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias amet dolore quibusdam.</p> */}
        <div className="team_container">

          <div className="team">
            <img src={profile} alt="" />
            <div className="team_info">
              <h2>John Doe</h2>
            </div>
          </div>

          <div className="team">
            <img src={profile} alt="" />
            <div className="team_info">
            <h2>John Doe</h2>
            </div>
          </div>

          <div className="team">
            <img src={profile} alt="" />
            <div className="team_info">
              <h2>John Doe</h2>
            </div>
          </div>




        </div>
      </section>
    </>
  );
};

export default About;
