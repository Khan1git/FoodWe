import React from "react";
import "./link.css";


const Link = ({ name }) => {
  return (
    <section id="link_container">
      <h1>{name}</h1>
      <div>
        <span>Home</span> <span>/</span> <span>{name}</span>
      </div>
    </section>
  );
};

export default Link;
