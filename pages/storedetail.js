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
import { useRouter } from 'next/router';


var settingsMorePhotos = {
    arrows: true,
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
};



export default function storedetail(pageProp) {
    const [quantity, setQuantity] = useState(1);

    const increase = () => setQuantity(prev => prev + 1);
    const decrease = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

    const router = useRouter();
    const { id } = router.query;

    const [productdetail, setProductDetails] = useState({});

    const fetchProductDetails = async () => {
        try {

            const resp = await fetch(`https://admin.kmiroofing.com/api/products/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            if (resp.status === 200) {
                const formateddata = await resp.json();
                setProductDetails(formateddata?.product);
                // setReviews(formateddata?.reviews);

            }

        } catch (error) {

            console.error("There was an error fetching the categories:", error);
        }
    };

    useEffect(() => {
        if (id) {
            fetchProductDetails();
        }
        else {
            console.log("error");
        }
    }, [id])


    return (
        <div className="page_shopping_list sop">
            <HeadSEO title={"Store"} description={"This is store"} image={null} />

            <HeadSEO1 />

            <div className="event_system_main">
                <div className="event_main">
                    <div className="product-detail-wrapper">
                        <div className="product-detail-container">
                            <img
                                className="product-detail-image"
                                src={productdetail?.images}
                                alt="Print"
                            />

                            <div className="product-detail-info">
                                <h2 className="product-title">{productdetail?.product_name}</h2>
                                <p className="product-subtitle">
                                    {/* Street car (interurban) terminal, St.Charles, */}
                                    {productdetail?.slug}
                                </p>

                                <div className="price-box">
                                    <p>
                                        <span>Price :</span> ${productdetail?.price}
                                    </p>
                                    <p>
                                        <span>Shipping / Handling :</span> ${productdetail?.sale_price}
                                    </p>
                                </div>

                                <div className="quantity-row">
                                    <div className="qty-selector">
                                        <button onClick={decrease}>−</button>
                                        <span>{quantity}</span>
                                        <button onClick={increase}>+</button>
                                    </div>

                                    <button className="add-to-cart-btn">Add To Cart</button>
                                </div>
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