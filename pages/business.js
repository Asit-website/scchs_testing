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
    const [timeframe, setTimeframe] = useState("all");
    const [perPage, setPerPage] = useState(10); // default 10
    const [currentPage, setCurrentPage] = useState(1);
    const [search, setSearch] = useState("");
    const [notFound, setNotFound] = useState(false);
    const [results, setResults] = useState([]);

    useEffect(() => {
        const fetchBusinesses = async () => {
            try {
                const res = await fetch("https://uat.scchs.co.in/api/businesses");
                const data = await res.json();
                setBusinesses(data);
            } catch (error) {
                console.error("Error fetching businesses:", error);
            }
        };

        fetchBusinesses();
    }, []);

  
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const res = await fetch("https://uat.scchs.co.in/api/business-categories");
                const data = await res.json();
                setCategories(data);
            } catch (error) {
                console.error("Error fetching categories:", error);
            }
        };

        fetchCategories();
    }, []);

    const isWithinMonths = (dateString, months) => {
        const created = new Date(dateString);
        const now = new Date();
        const pastDate = new Date();
        pastDate.setMonth(now.getMonth() - months);
        return created >= pastDate;
    };

    // const filtered = selectedCategory
    //     ? businesses.filter((biz) => biz.category_id == selectedCategory)
    //     : businesses;

    // Calculate page-wise data
    const displayData = results.length > 0 ? results : businesses;
    
    const startIndex = (currentPage - 1) * perPage;
    const endIndex = startIndex + perPage;
    const paginatedBusinesses = displayData.slice(startIndex, endIndex);

    // Total listings count
    const totalListings = displayData.length;
    const totalPages = Math.ceil(totalListings / perPage);
    
    const handleSearch = () => {
        if (!search.trim()) {
            // If search is empty, show all businesses
            setResults(businesses);
            setNotFound(false);
            return;
        }
        
        const filtered = businesses.filter((item) =>
            (item.title && item.title.toLowerCase().includes(search.toLowerCase())) ||
            (item.description && item.description.toLowerCase().includes(search.toLowerCase())) ||
            (item.category?.name && item.category.name.toLowerCase().includes(search.toLowerCase()))
        );
    
        if (filtered.length > 0) {
            setResults(filtered); 
            setNotFound(false);
        } else {
            setResults([]);
            setNotFound(true);
        }
    };
   
    

        const handleClear = () => {
            setSearch("");
            setResults([]);
            setNotFound(false);
        }


        return (
            <div className="page_shopping_list sop">
                <HeadSEO title={"login"} description={"this is member login page"} image={null} />

                <HeadSEO1 />


                <div className="event_system_main">

                    <div className="event_main" id="eventsynopsis">

                        <div className="pagination-settings">
                            <label>Listings Per Page:&nbsp;</label>
                            <select value={perPage} onChange={(e) => {
                                setPerPage(Number(e.target.value));
                                setCurrentPage(1);
                            }}>
                                <option value="10">10</option>
                                <option value="25">25</option>
                                <option value="50">50</option>
                                <option value="100">100</option>
                            </select>
                        </div>

                        <div style={{ margin: "20px 0", position: "relative", display: "flex", gap: "8px" }}>
                            <input
                                type="text"
                                placeholder="Search businesses..."
                                value={search}
                                onChange={(e) => {
                                    setSearch(e.target.value);
                                }}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") handleSearch();
                                  }}
                                style={{
                                    padding: "8px",
                                    width: "100%",
                                    maxWidth: "400px",
                                    border: "1px solid #ccc",
                                    borderRadius: "4px",
                                }}
                            />

                            {search && (
                                <button
                                    onClick={handleClear}
                                    style={{
                                        backgroundColor: "#aa0033",
                                        color: "white",
                                        border: "none",
                                        padding: "8px 12px",
                                        borderRadius: "4px",
                                        cursor: "pointer",
                                    }}
                                >
                                    Clear
                                </button>
                            )}

                            <button
                                type="submit"
                                onClick={handleSearch}
                                className="searchiconn bg-[#aa0033] px-4 flex items-center justify-center"
                                style={{ borderRadius: "4px", color: "white" }}
                            >
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.7547 13.7078V13.9149L14.9012 14.0614L19.4113 18.5713L18.5724 19.4111L14.0604 14.9006L13.7497 14.59L13.4017 14.8581C11.7892 16.1004 9.76435 16.6824 7.73832 16.4858C5.71229 16.2893 3.83703 15.329 2.49341 13.7999C1.14979 12.2709 0.438561 10.2878 0.504167 8.25341C0.569772 6.21901 1.40729 4.28585 2.84664 2.84656C4.28598 1.40727 6.21921 0.56977 8.2537 0.504166C10.2882 0.438563 12.2714 1.14977 13.8005 2.49335C15.3295 3.83692 16.2899 5.7121 16.4864 7.73805C16.683 9.764 16.101 11.7888 14.8587 13.4012L14.7547 13.5361V13.7064V13.7078ZM18.724 19.5626L18.7236 19.5622C18.7238 19.5625 18.724 19.5627 18.7242 19.5629L18.724 19.5626ZM8.50489 15.9684C9.48508 15.9684 10.4557 15.7753 11.3612 15.4002C12.2668 15.0251 13.0897 14.4754 13.7828 13.7823C14.4759 13.0892 15.0257 12.2664 15.4008 11.3609C15.7759 10.4553 15.9689 9.48475 15.9689 8.50459C15.9689 7.52443 15.7759 6.55386 15.4008 5.64831C15.0257 4.74276 14.4759 3.91996 13.7828 3.22688C13.0897 2.53381 12.2668 1.98403 11.3612 1.60894C10.4557 1.23385 9.48508 1.04079 8.50489 1.04079C6.52531 1.04079 4.6268 1.82715 3.22702 3.22688C1.82724 4.62661 1.04085 6.52506 1.04085 8.50459C1.04085 10.4841 1.82724 12.3826 3.22702 13.7823C4.6268 15.182 6.52531 15.9684 8.50489 15.9684Z" fill="#FD605D" stroke="white"></path></svg>
                            </button>
                        </div>

                        <p style={{ textAlign: "right" }}>
                            Listings: {startIndex + 1} to {Math.min(endIndex, totalListings)} of {totalListings}
                        </p>



                        <div className="flying1-container">
                            {notFound && search.trim() ? (
                                <div style={{ 
                                    textAlign: "center", 
                                    padding: "40px", 
                                    color: "#666",
                                    fontSize: "18px"
                                }}>
                                    No businesses found matching "{search}". Please try a different search term.
                                </div>
                            ) : (
                                paginatedBusinesses?.map((item, index) => {
                                    return <div key={index} className="flying1-box">

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
                            )}

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