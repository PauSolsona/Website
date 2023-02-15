import React from "react";
import Image from "./images/aimpark.png";
import "./index.css";

export const App = () => {
  return (
    <section>
      <div className="hero">
        <div className="ida">
          <h1 className="heading">Ida</h1>
          <p className="text">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here,
          </p>
        </div>
        <div>
          <img className="image" src={Image} alt="logo of aimo park"></img>
        </div>
      </div>
      <div className="anything">
        <div>
          <h2 className="head2">about</h2>
          <p className="text">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here,
          </p>
        </div>
        <div>
          <h2 className="head2">info</h2>
          <p className="text">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here,
          </p>
        </div>
      </div>
      <div className="basically">
        <div>
          <h2 className="head2">Headline</h2>
          <p className="text">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here,
          </p>
        </div>
      </div>
    </section>
  );
};
