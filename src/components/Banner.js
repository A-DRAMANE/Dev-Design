import React from "react";

function Banner() {
  return (
    <div className="banner">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 col-sm-12">
            <h1>
              <span>Le temps d'</span>
            Innover <br/>Différemment
            </h1>
            <p className="">
              Amoureux/se du développement Web, du Web design ou de infographie
              !? Nous Somme là pour partager notre expertise et grandir.
            </p>
          </div>
          <div
            style={{ backgroundImage: "url(./images/bannerBack1.webp)" }}
            className="col-5 myBack d-lg-block d-md-block d-sm-block"
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
