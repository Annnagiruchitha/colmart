
import React, { useState, useEffect } from 'react';
import "./categories.css"
import { Link } from 'react-router-dom';
import { BASE_URL } from "../../../../constant";
import search from "../../images/icons/01.svg";

// Import your local images
import fox from "../../images/category/04.svg";
import food from "../../images/category/05.svg";
import tree from "../../images/category/06.svg";
import furniture from "../../images/category/07.svg";
import vehicle from "../../images/category/08.svg";
import foxIcon from "../../images/category/09.svg";
import foodIcon from "../../images/category/10.svg";
import treeIcon from "../../images/category/11.svg";
import furnitureIcon from "../../images/category/12.svg";
import vehicleIcon from "../../images/category/13.svg";

const Category = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(BASE_URL + 'category');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const responseData = await response.json();
                const categoriesData = responseData.data; // Extracting the array of categories
                console.log("Fetched data:", categoriesData);
                setCategories(categoriesData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
    
        fetchData();
    }, []);
    
    return (
        <div className='cat-container'>
            <div className='cat-main'>
                <div className='cat-search'>
                    <span className="search-icon"><img src={search} alt="search" /></span>
                    <input type="text" placeholder='Search' className='search-border' />
                </div>
                <h2 className='cat-heading'>Explore Store Categories - Buy Professional 3D Models</h2>
                <div className='cat-image'>
                {categories.map((category, index) => (
                        <Link to={`/assets/${category._id}`} key={index}>
                            <div className='cat-icons'>
                                <div className='icon-container'>
                                   
                                    {renderCategoryIcon(category.categoryType)}
                                    <div className='icon-text'>{category.categoryType}</div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

// Helper function to render category icon based on category type
const renderCategoryIcon = (categoryType) => {
    
    switch (categoryType) {
        case 'Animals & Pets':
            return (
                <>
                    <img className='cat-icon-main' src={fox} alt="Animals & Pets" />
                    <img className='cat-icon-active' src={foxIcon} alt="Animals & Pets Icon" />
                </>
            );
        case 'Foods':
            return (
                <>
                    <img className='cat-icon-main' src={food} alt="Foods" />
                    <img className='cat-icon-active' src={foodIcon} alt="Foods Icon" />
                </>
            );
        case 'Trees & Plants':
            return (
                <>
                    <img className='cat-icon-main' src={tree} alt="Trees & Plants" />
                    <img className='cat-icon-active' src={treeIcon} alt="Trees & Plants Icon" />
                </>
            );
           
        case 'Furniture & Home':
            return (
                <>
                    <img className='cat-icon-main' src={furniture} alt="Furniture & Home" />
                    <img className='cat-icon-active' src={furnitureIcon} alt="Furniture & Home Icon" />
                </>
            );
            case 'Vehicles':
                return (
                    <>
                        <img className='cat-icon-main' src={vehicle} alt="Vehicle" />
                        <img className='cat-icon-active' src={vehicleIcon} alt="Vehicle Icon" />
                    </>
                );
       
        default:
            return null;
    }
};

export default Category;