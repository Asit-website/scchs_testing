import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import style from "./css/shoppings-lists.module.scss";
import Link from "next/link";

import HeadSEO from "../components/common/Head/head";
import GlobalHeaderFooter from "../utils/common/global-header-footer";
import Navbar from '../components/common/Navbar/Navbar'
//Slider css files
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ShoppingProductSlider from "../components/common/shopping/product-slider";
import { MdKeyboardArrowDown } from "react-icons/md";

import ShoppingCollections from "../components/common/shopping/collections";
import Head from "next/head";
import HeadSEO1 from "../components/common/Head/head1";



var settingsMorePhotos = {
    arrows: true,
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
};

const products = new Array(8).fill({
    title: 'Print "The Meeting Place"',
    subtitle: "Street car (interurban) terminal, St.Charles",
    location: "MO 1918",
    updated: "11 December 2021",
    inStock: false,
});

products[1].inStock = true; // Example of "Out Of Stock"


const ITEMS_PER_PAGE = 3;

export default function store(pageProp) {





    return (
        <div className="page_shopping_list sop">
            <HeadSEO title={"Store"} description={"This is store"} image={null} />

            <HeadSEO1 />

            <div className="event_system_main">
                <div className="store_heading">
                   <h2>SCCHS Store</h2>
                   <p>Members must be logged-in to receive a 10% or greater discount on items in the bookstore. The discount does not apply to events. If you are not a member and would like information about becoming one <Link href="/member/memberlogin"><span>CLICK HERE</span></Link></p>
                </div>
                <div className="event_main">
                    <div className="filters-container">
                        <div className="filters111">
                            <div className="filters-left">
                                {/* <div className="custom_drop">
                                    <select className="dropdown">
                                        <option>Filter by Category</option>
                                    </select>
                                </div>

                                <div className="custom_drop">
                                    <select className="dropdown">
                                        <option>Timeframe</option>
                                    </select>
                                </div> */}

                            </div>
                            <div className="event-title-filter ev_tight_fill">
                                <div className="custom_drop">
                                    <select className="dropdown small">
                                        <option>Filter by category</option>
                                    </select>
                                </div>
                                {/* <span className="for-label">FOR:</span>
                                <input type="text" className="search-input" /> */}
                                <button className="search-button">
                                    <img width="28" src="https://res.cloudinary.com/dgif730br/image/upload/v1744279927/Mask_group_zicocm.png" alt="this is search image" />
                                </button>
                            </div>
                        </div>

                        <div className="filters-right">
                            <div className="listing">
                                <label>Listing Per Page</label>
                                <div className="custom_drop custom_drop1">
                                    <select className="dropdown small">
                                        <option>50</option>
                                    </select>
                                </div>
                            </div>
                            <div className="record-info">
                                Records : <span>1 to 4 of </span> 4
                            </div>
                        </div>
                    </div>

                    <div className="custom-grid-container">
                        {products.map((product, index) => (
                            <div className="custom-card" key={index}>
                               <Link href="/storedetail"><img
                                    className="custom-card-image"
                                    src="https://res.cloudinary.com/dgif730br/image/upload/v1745405452/image_1_ip1mnv.png"
                                    alt="Product"
                                /></Link>
                                <div className="custom-card-content">
                                    <h3 className="custom-card-title">{product.title}</h3>
                                    <p className="custom-card-subtitle">{product.subtitle}</p>
                                    <p className="custom-card-location">{product.location}</p>
                                    <p className="custom-card-updated">
                                        <span>Last Updated:</span> {product.updated}
                                    </p>
                                    <button
                                        className={`custom-card-button ${!product.inStock ? "out-stock" : ""
                                            }`}
                                    >
                                        {product.inStock ? "Add To Cart" : "Out Of Stock"}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>


                </div>
            </div>


        </div>
    );
}

export async function getServerSideProps(context) {
    try {

        const globalSettings = await GlobalHeaderFooter();
        return {
            props: {
                page_content: false,
                navbar: globalSettings?.header,
                footer: globalSettings?.footer
            },
        };

    } catch (error) {

        return {
            props: {
                page_content: false,
                navbar: false,
                footer: false
            },
            notFound: true
        };

    }
}