import React, { useState } from "react";
import "./assetCatergorylist.css";
import SideBar from "../../common/sideBar";
import back from "../../images/back.svg";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const AssetCatergorylist = () => {
  const [activeItem, setActiveItem] = useState("assetmanagement");
  const navigate = useNavigate();

  

  const handleClick = () => {
    navigate("/addnewAsset");
  };
  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };

  // Dummy asset details data
  const dummyAssetData = [
    {
      id: "31246",
      assetName: "Dog",
      fileSize: "35mb",
      fileFormat: "glb",
      price: "₹500"
    },
    {
      id: "78456",
      assetName: "Cat",
      fileSize: "25mb",
      fileFormat: "fbx",
      price: "₹600"
    },
    {
      id: "12389",
      assetName: "Bird",
      fileSize: "20mb",
      fileFormat: "obj",
      price: "₹400"
    }
  ];

  return (
    <div className="assetlist-container">
      <SideBar setActiveItem={handleItemClick} activeItem={activeItem} />
      <div className="assetlist-main">
        <div className="assetlist-content">
          <div className="assetlist-heading">
            <div className="assetlist-heading-text">
              <Link to="/assetManagement"><img src={back} alt="Back" /></Link>
              <h1>AssetManagement |</h1>
              <p>Animals & Pets </p>
            </div>
            <div className="assetlist-heading-button">
              <button onClick={handleClick}>Add Asset</button>
            </div>
          </div>
          <div className="assetlist-details-table">
            <div className="assetlist-details">
              {dummyAssetData.map((asset, index) => (
                <div className="assetlist-details-content" key={index}>
                  <h1>{index + 1}</h1>
                  <div className="assetlist-details-content">
                    <h1>Asset Name :</h1>
                    <p>{asset.assetName}</p>
                  </div>
                  <div className="assetlist-details-content">
                    <h1>Id :</h1>
                    <p>{asset.id}</p>
                  </div>
                  <div className="assetlist-details-content">
                    <h1>File Size :</h1>
                    <p>{asset.fileSize}</p>
                  </div>
                  <div className="assetlist-details-content">
                    <h1>File Format :</h1>
                    <p>{asset.fileFormat}</p>
                  </div>
                  <div className="assetlist-details-content">
                    <h1>Price :</h1>
                    <p>{asset.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssetCatergorylist;
