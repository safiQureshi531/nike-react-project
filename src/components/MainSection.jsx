import React from "react";

function MainSection() {
  return (
    <main className="main container">
      <div className="main-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>

        <div className="main-btn">
          <button>Shop Now </button>
          <button className="secondary-btn">Catogary</button>
        </div>

        <div className="shopping">
          <p>Also Available On</p>

          <div className="brand-icons">
            <img src="/images/amazon.png" alt="amazon-logo"></img>
            <img src="/images/flipkart.png" alt="flipkart-logo"></img>
          </div>
        </div>
      </div>
      
      <div className="main-image">
        <img src="/images/shoe_image.png" alt="shoe-logo"></img>
      </div>
    </main>
  );
}

export default MainSection;
