import React, { useState , useRef } from "react";
import AdminNavBar from "../../common/topBar";
import "./adminCategory.css";
import SideBar from "../../common/sideBar";
import blank from "../../images/blank.svg";
import create from "../../images/create.svg";
import fox from "../../images/admin01.svg";
import delet from "../../images/delete.svg";
import edit from "../../images/edit.svg";

const AdminCategory = () => {
  const [activeItem, setActiveItem] = useState("category");
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  const [isPopUpDelete, setIsPopUpDelete] = useState(false);
  const togglePopUp = () => {
    setIsPopUpOpen(!isPopUpOpen);
  };

  const togglePopUpDelete = () => {
    setIsPopUpDelete(!isPopUpDelete);
  };

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };

  return (
    <div className="admin-category-container">
      <SideBar setActiveItem={handleItemClick} activeItem={activeItem} />
      <div className="admin-category-main">
        <div className="admin-category-content">
          <div className="admin-category-heading">
            <h1>Category</h1>
          </div>
          <div className="admin-category-card">
            <img
              className="admin-category-card-img"
              src={blank}
              alt="Background"
            />
            <div className="admin-category-card-create" onClick={togglePopUp}>
              <img
                className="admin-category-create"
                src={create}
                alt="Create"
              />
              <h1 className="admin-category-create-text">Create</h1>
            </div>
          </div>
          <div className="admin-category-card">
            <img
              className="admin-category-card-img"
              src={fox}
              alt="Background"
            />
            <div className="admin-category-card-create">
              <h1 className="admin-category-create-text">Animals & Pets</h1>
              <img className="admin-category-create" src={edit} alt="Edit" />
              <h1 className="admin-category-create-text">|</h1>
              <img
                className="admin-category-create"
                src={delet}
                alt="Delete"
                onClick={togglePopUpDelete}
              />
            </div>
          </div>
        </div>
      </div>
      {isPopUpOpen && <PopUpComponent onClose={togglePopUp} />}
      {isPopUpDelete && <PopUpComponentDelete onClose={togglePopUpDelete} />}
    </div>
  );
};

const PopUpComponent = ({ onClose }) => {
  const fileInputRef = useRef(null);

  // Function to cancel image upload
  function cancelImageUpload() {
    // Clear the selected file
    if (fileInputRef.current) {
      fileInputRef.current.value = null;
    }
    console.log("Image upload cancelled");
  }
  return (
    <div className="admin-category-popup-container">
      <div className="admin-category-popup-main">
        <h2>Create Category</h2>
        <form>
          <div className="admin-category-popup-form-group">
            <label
              htmlFor="categoryName"
              className="admin-category-popup-form-label"
            >
              Category Name
            </label>
            <input
              type="text"
              className="admin-category-popup-form-input"
              id="categoryName"
            />
          </div>
          <div className="admin-category-popup-form-group">
            <label
              htmlFor="categoryName"
              className="admin-category-popup-form-label"
            >
              Upload Image
            </label>
            <input
              type="file"
              className="admin-category-popup-form-input-upload"
              id="categoryName"
              ref={fileInputRef}
            />
           <button
              type="button" 
              className="admin-category-cancel-button"
              onClick={cancelImageUpload}
            >
              Cancel Upload
            </button>
          </div>
          <div className="admin-category-popup-button">
            <button className="admin-category-create-button">Create</button>
            <button className="admin-category-cancel-button" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const PopUpComponentDelete = ({ onClose }) => {
  return (
    <div className="admin-category-popup-container">
      <div className="admin-category-popup-main">
        <h2>Remove Category</h2>
        <div className="admin-category-popup-content">
          <div><p>Are you sure you want to delete this category?</p></div>
          <div className="admin-category-popup-button">
            <button className="admin-category-create-button">Remove</button>
            <button className="admin-category-cancel-button" onClick={onClose}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminCategory;
