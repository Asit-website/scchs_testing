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
import { toast } from "react-toastify";


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

    const { toggleBoolValue } = pageProp;

    const [allProduct, setAllProduct] = useState([]);
    const [allCategory, setAllCategory] = useState([]);
    const [selectedSlug, setSelectedSlug] = useState('');
    const [hasSearched, setHasSearched] = useState(false);
    const [limit, setLimit] = useState(10);
    const [offset, setOffset] = useState(0);
    const [totalCount, setTotalCount] = useState(0);
    const router = useRouter();
    const fetchProduct = async () => {
        try {
            const resp = await fetch(`https://admin.kmiroofing.com/api/products?limit=${limit}&offset=0&all=1`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });


            if (resp.status === 200) {
                const formateddata = await resp.json();
                console.log(formateddata?.products[0]?.image);
                setAllProduct(formateddata?.products);
            }


        } catch (error) {

            console.error("There was an error fetching the categories:", error);
        }
    };

    const fetchCategory = async () => {
        try {

            const resp = await fetch("https://admin.kmiroofing.com/api/categories", {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            if (resp.status === 200) {
                const formateddata = await resp.json();
                setAllCategory(formateddata)

            }


        } catch (error) {

            console.error("There was an error fetching the categories:", error);
        }
    };

    useEffect(() => {
        fetchCategory();
        fetchProduct();
    }, [])

    const fetchProductByCat = async () => {
        if (!selectedSlug) return;
        setHasSearched(true);
        try {
            const res = await fetch(`https://admin.kmiroofing.com/api/products/category/${selectedSlug}?&offset=0`);
            const data = await res.json();
            console.log(data);
            setAllProduct(data?.products || []);
        } catch (error) {
            console.error('Failed to fetch products:', error);
        }
    };


    const addToCartApi = async (id) => {

        const resp = await fetch('https://admin.kmiroofing.com/api/cart/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${JSON?.parse(localStorage.getItem("scchs_Access"))}`
            },
            body: JSON.stringify({
                product_id: id,
                quantity: 1,
            }),
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                toast.success(data?.message);
                router.push("/storeorder");
                toggleBoolValue();
            })
            .catch(error => console.error('Error:', error));

        // alert(resp)
    }

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
                            </div>
                            <div className="event-title-filter ev_tight_fill">
                                <div className="custom_drop">
                                    <select value={selectedSlug} onChange={(e) => setSelectedSlug(e.target.value)} className="dropdown small">
                                        <option>Filter by category</option>
                                        {
                                            allCategory?.map((item, index) => {
                                                return <option key={item.id} value={item?.slug}>{item?.name}</option>
                                            })
                                        }
                                    </select>
                                </div>
                                {/* <span className="for-label">FOR:</span>
                                <input type="text" className="search-input" /> */}
                                <button type="button" onClick={fetchProductByCat} className="search-button">
                                    <img width="28" src="https://res.cloudinary.com/dgif730br/image/upload/v1744279927/Mask_group_zicocm.png" alt="this is search image" />
                                </button>
                            </div>
                        </div>

                        <div className="filters-right">
                            <div className="listing">
                                <label>Listing Per Page</label>
                                <div className="custom_drop custom_drop1">
                                    <select
                                        value={limit}
                                        onChange={(e) => {
                                            const newLimit = Number(e.target.value);
                                            setLimit(newLimit);
                                            console.log(newLimit)
                                            // Category select ho chuki ho tabhi fetch karo
                                            if (selectedSlug) {
                                                fetch(`https://admin.kmiroofing.com/api/products/category/${selectedSlug}?limit=${newLimit}&offset=0`)
                                                    .then(res => res.json())
                                                    .then(data => {
                                                        console.log(data)
                                                        setAllProduct(data?.products || [2]);
                                                    });
                                            }
                                        }}
                                    >
                                        <option value={2}>2</option>
                                        <option value={4}>4</option>
                                        <option value={6}>6</option>
                                    </select>

                                </div>
                            </div>
                            <div className="record-info">
                                Records : <span>1 to 4 of </span> 4
                            </div>
                        </div>
                    </div>

                    <div className="custom-grid-container">
                        {hasSearched && allProduct.length === 0 && <p>No Products Found</p>}
                        {allProduct.map((product, index) => (
                            <div className="custom-card" key={index}>
                                <Link href={`/storedetail?id=${product?.slug}`}><img
                                    className="custom-card-image"
                                    // https://res.cloudinary.com/dgif730br/image/upload/v1745405452/image_1_ip1mnv.png
                                    src={product?.image}
                                    alt="Product"
                                /></Link>
                                <div className="custom-card-content">
                                    <h3 className="custom-card-title">{product.name}</h3>
                                    <p className="custom-card-subtitle">{product.slug}</p>
                                    {/* <p className="custom-card-location">{product.location}</p> */}
                                    <p className="custom-card-location">MO 1918</p>
                                    <p className="custom-card-updated">
                                        <span>Last Updated:</span> 11 December 2021
                                        {/* {product.updated} */}

                                    </p>
                                    <button
                                        //  out-stock
                                        className="custom-card-button"
                                        onClick={async () => {
                                            const isLoggedIn = JSON?.parse(localStorage.getItem("scchs_Access"));
                                            const productId = product?.id;

                                            if (isLoggedIn) {
                                                await addToCartApi(productId);
                                            }
                                            else {
                                                const cartItems = JSON.parse(sessionStorage.getItem("cartItems")) || [];

                                                const productExit = cartItems?.some(item => item.id === productId);

                                                if (!productExit) {
                                                    product.quantity = 1;
                                                    cartItems.push(product);
                                                }

                                                sessionStorage.setItem("cartItems", JSON.stringify(cartItems));
                                                toast.success("Product successfuly added");
                                                router.push("/storeorder");
                                                toggleBoolValue();

                                            }



                                        }}
                                    >
                                        {product.inStock ? "Out of Stock" : "Add to Cart"}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* <button onClick={() => setOffset(offset - limit)} disabled={offset === 0}>⬅ Prev</button>
                    <span>Page {Math.floor(offset / limit) + 1}</span>
                    <button onClick={() => {
                        if (products.length === limit) setOffset(offset + limit);
                    }} disabled={products.length < limit}>Next ➡</button> */}


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