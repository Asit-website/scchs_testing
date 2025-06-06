import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import HeadSEO from "../components/common/Head/head";
import GlobalHeaderFooter from "../utils/common/global-header-footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeadSEO1 from "../components/common/Head/head1";
// import "../css/login.module.scss";
import { toast } from "react-toastify";
var settingsMorePhotos = {
    arrows: true,
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
};

export default function business(pageProp) {

    const [businesses, setBusinesses] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBusinesses = async () => {
            try {
                const res = await fetch("https://admin.scchs.co.in/api/businesses");
                const data = await res.json();
                setBusinesses(data);
            } catch (error) {
                console.error("Error fetching businesses:", error);
            }
        };

        fetchBusinesses();
    }, []);

    // ✅ Get Categories
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const res = await fetch("https://admin.scchs.co.in/api/business-categories");
                const data = await res.json();
                setCategories(data);
            } catch (error) {
                console.error("Error fetching categories:", error);
            }
        };

        fetchCategories();
    }, []);

    const filtered = selectedCategory
        ? businesses.filter((biz) => biz.category_id == selectedCategory)
        : businesses;




    return (
        <div className="page_shopping_list sop">
            <HeadSEO title={"login"} description={"this is member login page"} image={null} />

            <HeadSEO1 />


            <div className="event_system_main">
                <div className="event_main">
                    <div className="filters-left">
                        <div className="custom_drop">
                            <select
                                className="dropdown"
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                            >
                                <option value="">All</option>
                                {categories.map((cat) => (
                                    <option key={cat.id} value={cat.id}>
                                        {cat.name}
                                    </option>
                                ))}

                            </select>
                        </div>
                        <div className="custom_drop">
                            <select className="dropdown">
                                <option>Timeframe</option>
                                {/* <option value="all">All</option> */}
                                <option value="today">Today</option>
                                <option value="thisWeek">This Week</option>
                                <option value="thisMonth">This Month</option>
                            </select>
                        </div>
                    </div>

                    <div className="flying1-container">
                        {
                            filtered?.map((item, index) => {
                                return <div key={index} className="flying1-box">
                                    {/* <div className="flying1-img">
                                    <img
                                        src="https://res.cloudinary.com/djz3wn3fl/image/upload/v1745835404/Group_1171281827_rx2hpl.png"
                                        width="100%"
                                        alt="Al Droste & Sons"
                                    />
                                </div> */}
                                    <div className="flying1-name">
                                        <a href="#">{item?.title}</a>
                                    </div>
                                    <div className="flying1-text">
                                        <p style={{ marginTop: "12px" }} dangerouslySetInnerHTML={{ __html: item.description }}></p>
                                    </div>
                                    <p className="flying1-text-1">
                                        <span>Located in Category:</span> {item.category?.name}
                                    </p>
                                    {
                                        item?.link && <div className="flying1-btn">
                                            <a href={`${item?.link ? item.link : "#"}`} target="_blank" rel="noopener noreferrer">
                                                View Website
                                            </a>
                                        </div>
                                    }

                                </div>
                            })
                        }

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