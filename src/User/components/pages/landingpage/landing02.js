import React from "react";
import "./landing02.css"
import img1 from "../../image/fox.svg";
import { Link } from "react-router-dom";
 
const Our3DModels = () => {
  return (
    <div className="container01">
      <div className="card-container" >
        <div className="card-con-heading">
          <div className="card-con01">
            <h1>Our 3D Models</h1>
            <Link to={"/category"}><p>View All</p></Link>
          </div>
          <div className="card-con02">
            <div className="card">
              <img src={img1} />
              <p>Animals & Pets</p>
            </div>
            <div className="card">
              <img src={img1} />
              <p>Foods</p>
            </div>
            <div className="card">
              <img src={img1} />
              <p>Plants & Trees</p>
            </div>
            <div className="card">
              <img src={img1} />
              <p>Furniture & Home</p>
            </div>
          </div>
        </div>
      </div>
      <div className="detail-container">
        <div className="detail-con1">
          <h3>500+</h3>
          <p>3D Assets</p>
        </div>
        <div className="detail-con1">
          <h3>400+</h3>
          <p>Downloads</p>
        </div>
        <div className="detail-con1">
          <h3>15+</h3>
          <p>Categories</p>
        </div>
      </div>
    </div>
  );
};
 
export default Our3DModels;