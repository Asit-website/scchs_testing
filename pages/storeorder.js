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



export default function storeorder(pageProp) {
    const [quantity, setQuantity] = useState(1);
    const price = 15;
    const shipping = 6;

    const increase = () => setQuantity(q => q + 1);
    const decrease = () => setQuantity(q => (q > 1 ? q - 1 : 1));

    return (
        <div className="page_shopping_list sop">
            <HeadSEO title={"Store"} description={"This is store"} image={null} />

            <HeadSEO1 />

            <div className="event_system_main">
                <div className="event_main">
                    <div className="order-info-container">
                    <div className="order-info-containerr">
                        <h2 className="order-info-title">Order Information</h2>
                        <button className="order-btnn">Back</button>
                        </div>
                        <div className="order-info-table">
                            <div className="order-info-header">
                                <div className="item-col">Item</div>
                                <div className="qty-col">Quantity</div>
                                <div className="price-col price-col11">Price</div>
                            </div>

                            <div className="order-info-row">
                                <div className="item-col">
                                    <img src="https://res.cloudinary.com/dgif730br/image/upload/v1745412566/image_3_qhe6b5.png" alt="print" className="order-info-image" />
                                    <div className="order-info-details">
                                        <div className="item-title">Print "The Meeting Place"</div>
                                        <div className="item-desc">Street car (interurban) terminal,<br />St.Charles, MO</div>
                                    </div>
                                </div>

                                <div className="qty-col with-border">
                                    {/* <div className="qty-control">
                                        <button onClick={decrease}>−</button>
                                        <span>{quantity}</span>
                                        <button onClick={increase}>+</button>
                                    </div> */}
                                    <div className="qty-selector qty-select11">
                                        <button onClick={decrease}>−</button>
                                        <span>{quantity}</span>
                                        <button onClick={increase}>+</button>
                                    </div>
                                </div>

                                <div className="price-col with-border">
                                    <div className="price-line">
                                        <span>@ ${price.toFixed(2)} :</span>
                                        <strong>${(price * quantity).toFixed(2)}</strong>
                                    </div>
                                    <div className="price-line price-line2">
                                        <span>S & H :</span>
                                        <strong>${shipping.toFixed(2)}</strong>
                                    </div>
                                    <div className="price-line">
                                        <span>Item Total:</span>
                                        <strong>{quantity}</strong>
                                    </div>

                                </div>

                            </div>
                            <div className="total-due">
                                Total Due: <strong>${(price * quantity + shipping).toFixed(2)}</strong>
                            </div>
                        </div>

                        <div className="order-info-footer">

                            <div className="order-info-buttons">
                                <button className="btn-secondarys">Continue Shopping</button>
                                <button className="btn-primarys">Checkout</button>
                            </div>
                        </div>
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