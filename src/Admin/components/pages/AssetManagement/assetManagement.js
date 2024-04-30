import React , { useState } from "react";
import fox from "../../images/admin01.svg";
import "./assetManagement.css";
import { Link } from "react-router-dom";
import SideBar from "../../common/sideBar";

const AssetManagement = () => {
  const [activeItem, setActiveItem] = useState('assetmanagement');
  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
    // setShowProfile(false); 

};
  return (
    <div className="asset-management-container">
            <SideBar setActiveItem={handleItemClick} activeItem={activeItem} />
      <div className="asset-management-main">
        <div className="asset-management-heading">
          <h1>Asset Management</h1>
          <div className="asset-management-content">
            <div className="asset-management-content-assets">
              <Link to ="/assetCategoryList"><div className="asset-image-container">
                <img src={fox} alt="Fox" />
                <p>Animals & Pets</p>
              </div></Link>
              <div className="asset-image-container">
                <img src={fox} alt="Fox" />
                <p>Animals & Pets</p>
              </div>
              <div className="asset-image-container">
                <img src={fox} alt="Fox" />
                <p>Animals & Pets</p>
              </div>
              <div className="asset-image-container">
                <img src={fox} alt="Fox" />
                <p>Animals & Pets</p>
              </div>
              <div className="asset-image-container">
                <img src={fox} alt="Fox" />
                <p>Animals & Pets</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssetManagement;
