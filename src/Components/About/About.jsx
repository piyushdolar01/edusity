import React from "react";
import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play_icon.png";

const About = ({ setPlayState }) => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img
          src={play_icon}
          alt=""
          className="play-icon"
          onClick={() => {
            setPlayState(true);
          }}
        />
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique
          laborum est rem libero laboriosam ea atque nostrum minima corporis
          perspiciatis dolorem facere ipsam mollitia voluptatibus unde amet sit,
          consequatur nisi?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga
          temporibus, fugit sit minima doloribus excepturi itaque labore
          explicabo distinctio sapiente quo corporis voluptates praesentium
          harum corrupti nemo porro dignissimos atque.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
          magnam facilis? Pariatur necessitatibus, eos nisi impedit minima
          distinctio architecto laborum quo incidunt animi. Ratione quibusdam
          dicta, repudiandae eos delectus explicabo nesciunt incidunt nulla quo
          aspernatur.
        </p>
      </div>
    </div>
  );
};

export default About;
