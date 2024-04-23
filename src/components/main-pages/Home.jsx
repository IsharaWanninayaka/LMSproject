import React from "react";
import Footer from "./Footer";
import "../../css/home.css";
import holi1 from "../../images/Holi 1.png";
import holi2 from "../../images/Holi 2.png";

export default function Home() {
  return (
    <div className="wrapper">
      <div className="main">
        <div className="title-boxx-1">
          <div className="holi-imgg1">
            <img src={holi2} alt="Holi1" />
          </div>

          <div className="holi-imgg2">
            <img src={holi1} alt="Holi2" />
          </div>

          <div className="title-boxx-2">
            <p className="title-namee1 font-montserat">YOUR GATEWAY TO </p>
            <p className="title-namee-2 font-montserat">INTERACTIVE EDUCATION</p>
          </div>
        </div>

        <div className="user-friendly">
          <div className="bdge-text">
            <div className="bdge">
              <p>01</p>
            </div>
            <div className="text">
              <p className="font-montserat">User-Friendly Interface</p>
            </div>
          </div>
          <div className="description">
            <p className="font-montserat">
              The website should have an intuitive design that makes it easy for
              user to navigate and access course materials.
            </p>
          </div>
        </div>

        <div className="diverse">
          <div className="bdge-text">
            <div className="bdge">
              <p>02</p>
            </div>
            <div className="text">
              <p className="font-montserat">Diverse Course Offerings</p>
            </div>
          </div>
          <div className="description">
            <p className="font-montserat">
              Provide a wide range of courses covering various subject and skill
              levels to cater to different interests and learning needs.
            </p>
          </div>
        </div>

        <div className="interactive">
          <div className="bdge-text">
            <div className="bdge">
              <p>03</p>
            </div>
            <div className="text">
              <p className="font-montserat">Interactive Learning Tools</p>
            </div>
          </div>
          <div className="description">
            <p className="font-montserat">
              Incorporate interactive elements such as qizzes,similations and
              multimeadia content to enhance engagement and learning outcomes.
            </p>
          </div>
        </div>

        <div className="bottom-headder">
          <Footer />
        </div>
      </div>
    </div>
  );
}
