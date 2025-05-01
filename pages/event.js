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

const cards = [
    {
        date: "March 29, 2025",
        time: "10am - 7pm",
        title: "ROCK N ROLL BINGO",
        image: "https://res.cloudinary.com/dgif730br/image/upload/v1744273279/1740627457_bingo_d7m6tj.png", // use your actual image
        description: `ROCK 'N' ROLL BINGO Presented By The Saint Charles County Historical Society SATURDAY, MARCH 29, 2025 - DOORS OPEN AT 6:00PM, EVENT STARTS AT 7:00PM $200 PER TABLE OF 8 OR $25 PER PERSON Free Soda And Water, BYO`
    },
    {
        date: "March 29, 2025",
        time: "10am - 7pm",
        title: "ROCK N ROLL BINGO",
        image: "https://res.cloudinary.com/dgif730br/image/upload/v1744273279/1740627457_bingo_d7m6tj.png", // use your actual image
        description: `ROCK 'N' ROLL BINGO Presented By The Saint Charles County Historical Society SATURDAY, MARCH 29, 2025 - DOORS OPEN AT 6:00PM, EVENT STARTS AT 7:00PM $200 PER TABLE OF 8 OR $25 PER PERSON Free Soda And Water, BYO`
    },
    {
        date: "March 29, 2025",
        time: "10am - 7pm",
        title: "ROCK N ROLL BINGO",
        image: "https://res.cloudinary.com/dgif730br/image/upload/v1744273279/1740627457_bingo_d7m6tj.png", // use your actual image
        description: `ROCK 'N' ROLL BINGO Presented By The Saint Charles County Historical Society SATURDAY, MARCH 29, 2025 - DOORS OPEN AT 6:00PM, EVENT STARTS AT 7:00PM $200 PER TABLE OF 8 OR $25 PER PERSON Free Soda And Water, BYO`
    },

    {
        date: "March 29, 2025",
        time: "10am - 7pm",
        title: "ROCK N ROLL BINGO",
        image: "https://res.cloudinary.com/dgif730br/image/upload/v1744273279/1740627457_bingo_d7m6tj.png", // use your actual image
        description: `ROCK 'N' ROLL BINGO Presented By The Saint Charles County Historical Society SATURDAY, MARCH 29, 2025 - DOORS OPEN AT 6:00PM, EVENT STARTS AT 7:00PM $200 PER TABLE OF 8 OR $25 PER PERSON Free Soda And Water, BYO`
    },
    {
        date: "March 29, 2025",
        time: "10am - 7pm",
        title: "ROCK N ROLL BINGO",
        image: "https://res.cloudinary.com/dgif730br/image/upload/v1744273279/1740627457_bingo_d7m6tj.png", // use your actual image
        description: `ROCK 'N' ROLL BINGO Presented By The Saint Charles County Historical Society SATURDAY, MARCH 29, 2025 - DOORS OPEN AT 6:00PM, EVENT STARTS AT 7:00PM $200 PER TABLE OF 8 OR $25 PER PERSON Free Soda And Water, BYO`
    },
    {
        date: "March 29, 2025",
        time: "10am - 7pm",
        title: "ROCK N ROLL BINGO",
        image: "https://res.cloudinary.com/dgif730br/image/upload/v1744273279/1740627457_bingo_d7m6tj.png", // use your actual image
        description: `ROCK 'N' ROLL BINGO Presented By The Saint Charles County Historical Society SATURDAY, MARCH 29, 2025 - DOORS OPEN AT 6:00PM, EVENT STARTS AT 7:00PM $200 PER TABLE OF 8 OR $25 PER PERSON Free Soda And Water, BYO`
    },
    {
        date: "March 29, 2025",
        time: "10am - 7pm",
        title: "ROCK N ROLL BINGO",
        image: "https://res.cloudinary.com/dgif730br/image/upload/v1744273279/1740627457_bingo_d7m6tj.png", // use your actual image
        description: `ROCK 'N' ROLL BINGO Presented By The Saint Charles County Historical Society SATURDAY, MARCH 29, 2025 - DOORS OPEN AT 6:00PM, EVENT STARTS AT 7:00PM $200 PER TABLE OF 8 OR $25 PER PERSON Free Soda And Water, BYO`
    },
    {
        date: "March 29, 2025",
        time: "10am - 7pm",
        title: "ROCK N ROLL BINGO",
        image: "https://res.cloudinary.com/dgif730br/image/upload/v1744273279/1740627457_bingo_d7m6tj.png", // use your actual image
        description: `ROCK 'N' ROLL BINGO Presented By The Saint Charles County Historical Society SATURDAY, MARCH 29, 2025 - DOORS OPEN AT 6:00PM, EVENT STARTS AT 7:00PM $200 PER TABLE OF 8 OR $25 PER PERSON Free Soda And Water, BYO`
    },
    {
        date: "March 29, 2025",
        time: "10am - 7pm",
        title: "ROCK N ROLL BINGO",
        image: "https://res.cloudinary.com/dgif730br/image/upload/v1744273279/1740627457_bingo_d7m6tj.png", // use your actual image
        description: `ROCK 'N' ROLL BINGO Presented By The Saint Charles County Historical Society SATURDAY, MARCH 29, 2025 - DOORS OPEN AT 6:00PM, EVENT STARTS AT 7:00PM $200 PER TABLE OF 8 OR $25 PER PERSON Free Soda And Water, BYO`
    },
    // repeat for other cards
];

const ITEMS_PER_PAGE = 3;

export default function events(pageProp) {

    const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

    const handleLoadMore = () => {
        setVisibleCount(prev => prev + ITEMS_PER_PAGE);
    }

    const product = pageProp.page_content.product;
    const customFields = product?.customFields;



    const [allNewsCat, setAllNewsCat] = useState([]);
    const [alnews, setalnews] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(6);




    // const fetchcats = async () => {
    //     try {

    //         const resp = await fetch("https://admin.instacertify.com/api/get-news-category", {
    //             method: 'GET',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             }
    //         });

    //         if (resp.status === 200) {
    //             const formateddata = await resp.json();
    //             setAllNewsCat(formateddata?.categories)

    //         }


    //     } catch (error) {

    //         console.error("There was an error fetching the categories:", error);
    //     }
    // };

    // const fetchAllNews = async (page = 1) => {
    //     try {
    //         const resp = await fetch(`https://admin.instacertify.com/api/get-news?page=${page}&limit=${itemsPerPage}`, {
    //             method: 'GET',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             }
    //         });

    //         if (resp.status === 200) {
    //             const formateddata = await resp.json();
    //             setalnews(formateddata?.news);
    //             setTotalPages(Math.ceil(formateddata?.news?.length / itemsPerPage)); // Calculate total pages
    //         }
    //     } catch (error) {
    //         console.error("There was an error fetching the news:", error);
    //     }
    // };

    // const fetchNewsByCat = async (slug, page = 1) => {
    //     try {
    //         const resp = await fetch(`https://admin.instacertify.com/api/get-news-by-category/${slug}?page=${page}&limit=${itemsPerPage}`, {
    //             method: 'GET',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             }
    //         });

    //         if (resp.status === 200) {
    //             const formateddata = await resp.json();
    //             console.log(formateddata);
    //             setalnews(formateddata?.news);
    //             setTotalPages(Math.ceil(formateddata?.news?.length / itemsPerPage)); // Update total pages for categories
    //         }
    //     } catch (error) {
    //         console.error("There was an error fetching the news by category:", error);
    //     }
    // };


    // useEffect(() => {
    //     fetchcats();
    //     fetchAllNews(currentPage);
    // }, [])


    // console.log("allnew ", alnews)

    // const [cards,setCards] = useState([]);

    // const fetchAllNews = async (page = 1) => {
    //     try {
    //         const resp = await fetch(`https://admin.kmiroofing.com/api/get-event`, {
    //             method: 'GET',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             }
    //         });

    //         if (resp.status === 200) {
    //             const formateddata = await resp.json();
    //             setCards(formateddata?.events);
    //             // setTotalPages(Math.ceil(formateddata?.news?.length / itemsPerPage)); // Calculate total pages
    //         }
    //     } catch (error) {
    //         console.error("There was an error fetching the news:", error);
    //     }
    // };

    // useEffect(()=>{
    //   fetchAllNews();
    // },[])



    return (
        <div className="page_shopping_list sop">
            <HeadSEO title={product?.seo?.pageTitle == "" ? product?.name : product?.seo?.pageTitle} description={product?.seo?.metaDescription} image={null} />

            <HeadSEO1 />

            <div className="event_system_main">

                <div className="event_main">
                    
                    <div className="filters-container">
                        <div>
                            <div className="filters-left">
                                <div className="custom_drop">
                                    <select className="dropdown">
                                        <option>Filter by Category</option>
                                    </select>
                                </div>

                                <div className="custom_drop">
                                    <select className="dropdown">
                                        <option>Timeframe</option>
                                    </select>
                                </div>

                            </div>
                            <div className="event-title-filter">
                                <div className="custom_drop">
                                    <select className="dropdown small">
                                        <option>Event Title</option>
                                    </select>
                                </div>
                                <span className="for-label">FOR:</span>
                                <input type="text" className="search-input" />
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

                    {/* slice(0, visibleCount) */}
                    <div className="card-grid">
                        {cards.map((card, index) => (
                            <div className="event-card" key={index}>
                                <div className="card-header">
                                    <span>{card.date}</span>
                                    <span>{card.time}</span>
                                </div>
                                <img src={card.image} alt="Event" className="card-image" />
                                <div className="card-content">
                                    <h3>{card.title}</h3>
                                    <p>{card.description}</p>
                                    <Link href="/eventdetail"><button className="info-btn">
                                        More Info <span className="arrow-icon"></span>
                                    </button></Link>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* {
                        visibleCount < cards.length && (
                            <div className="load-more-wrapper">
                                <button onClick={handleLoadMore} className="load-more-btn">
                                    Load More
                                    <span className="arrow-wrap">
                                        <img width="12" src="https://res.cloudinary.com/dgif730br/image/upload/v1744279126/Group_1171280891_zvryne.png" />
                                    </span>
                                </button>
                            </div>
                        )
                    } */}

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