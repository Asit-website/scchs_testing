import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import HeadSEO from "../components/common/Head/head";
import GlobalHeaderFooter from "../utils/common/global-header-footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeadSEO1 from "../components/common/Head/head1";
import Link from "next/link";



var settingsMorePhotos = {
    arrows: true,
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
};

const records = [
    { surename: 'Almeling, Dan and Christy', country: 'd56da@aol.com', stage: "MO", country1: "USA", begin: "1801", end: "1899" },
    { surename: 'Almeling, Dan and Christy', country: 'd56da@aol.com', stage: "MO", country1: "USA", begin: "1801", end: "1899" },
    { surename: 'Almeling, Dan and Christy', country: 'd56da@aol.com', stage: "MO", country1: "USA", begin: "1801", end: "1899" },
    { surename: 'Almeling, Dan and Christy', country: 'd56da@aol.com', stage: "MO", country1: "USA", begin: "1801", end: "1899" },
    { surename: 'Almeling, Dan and Christy', country: 'd56da@aol.com', stage: "MO", country1: "USA", begin: "1801", end: "1899" },
    { surename: 'Almeling, Dan and Christy', country: 'd56da@aol.com', stage: "MO", country1: "USA", begin: "1801", end: "1899" },
    { surename: 'Almeling, Dan and Christy', country: 'd56da@aol.com', stage: "MO", country1: "USA", begin: "1801", end: "1899" },
    { surename: 'Almeling, Dan and Christy', country: 'd56da@aol.com', stage: "MO", country1: "USA", begin: "1801", end: "1899" },
    { surename: 'Almeling, Dan and Christy', country: 'd56da@aol.com', stage: "MO", country1: "USA", begin: "1801", end: "1899" },
    { surename: 'Almeling, Dan and Christy', country: 'd56da@aol.com', stage: "MO", country1: "USA", begin: "1801", end: "1899" },
    { surename: 'Almeling, Dan and Christy', country: 'd56da@aol.com', stage: "MO", country1: "USA", begin: "1801", end: "1899" },
    { surename: 'Almeling, Dan and Christy', country: 'd56da@aol.com', stage: "MO", country1: "USA", begin: "1801", end: "1899" },
    { surename: 'Almeling, Dan and Christy', country: 'd56da@aol.com', stage: "MO", country1: "USA", begin: "1801", end: "1899" },
    { surename: 'Almeling, Dan and Christy', country: 'd56da@aol.com', stage: "MO", country1: "USA", begin: "1801", end: "1899" },
    { surename: 'Almeling, Dan and Christy', country: 'd56da@aol.com', stage: "MO", country1: "USA", begin: "1801", end: "1899" },
    // Add more for testing pagination
];

const itemsPerPage = 10;

export default function surenamelook(pageProp) {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(records.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentItems = records.slice(startIndex, startIndex + itemsPerPage);

    const handleClick = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };


    const [openIndex, setOpenIndex] = useState(null);
    const dropdownRefs = useRef([]);

    const handleOutsideClick = (event) => {
        if (
            dropdownRefs.current.every(
                (ref) => ref && !ref.contains(event.target)
            )
        ) {
            setOpenIndex(null);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleOutsideClick);
        return () => document.removeEventListener('mousedown', handleOutsideClick);
    }, []);

    const toggleDropdown = (index) => {
        setOpenIndex((prev) => (prev === index ? null : index));
    };


    return (
        <div className="page_shopping_list sop">
            <HeadSEO title={"memberlogin"} description={"this member is login"} image={null} />

            <HeadSEO1 />

            <div className="event_system_main event_system_main1">
                <div className="event_main">
                    <div className="surname-container">
                        <div className="content-wrapper">
                            <h1>How To Look Up A Surname</h1>
                            <p>
                                The SCCHS Surname Directory is a collaborative tool giving all users a way to search for surnames of interest and to contact the SCCHS member who is researching the surname. There is no cost to use our Surname Directory and you do not need to be an SCCHS member to conduct a search.
                            </p>
                            <p>
                                To search the Directory, enter the surname you wish to search and then click on the magnifying glass icon -- you also have the option of flipping through the list using the page view.
                            </p>
                            <p>
                                Click on the eye icon and a new window will open with the Surname Detail (which can be printed). If you have a potential match, click the envelope icon, which opens the Surname Inquiry Emailer, and send an email to the member who posted the information to explore and collaborate.
                            </p>

                            <div className="image-section">
                                <img src="https://res.cloudinary.com/dgif730br/image/upload/v1745331971/image_ae6xyi.png" alt="Old street view" />
                            </div>

                            <div className="button-section">
                                <div className="label-box">To begin your search.</div>
                                <button className="start-btn">Click Here</button>
                            </div>

                            <div className="instructions">
                                <p>If you are a member, you may add a surname to the SCCHS Surname Directory by doing the following:</p>
                                <ol>
                                    <li>Open the <strong>MEMBERS</strong> page and login</li>
                                    <li>Open your Profile page,</li>
                                    <li>Open the <strong>Surnames</strong> tab,</li>
                                    <li>Select the + box and add the information about the surname you are researching,</li>
                                    <li>Click <strong>Save</strong> button (upper R/H corner of screen) to save your information.</li>
                                </ol>
                            </div>

                            <div className="instructions1">
                                <p><span>IMPORTANT NOTE TO MEMBERS:</span> The "Surname Inquiry Emailer" reveals no personal information (e.g., member's name or e-mail address) about the member.  All identification takes place after the email has been submitted to the server, where the necessary lookups can be done without concern and the inquiry sent to the member.</p>
                            </div>
                        </div>
                    </div>

                    <div className="memberList_filter" >
                        <div className="event-title-filter memberlist-title-filter tyile_filter">
                            <input type="text" className="search-input serach_inpp" placeholder="Search Surname" />
                            <button className="search-button">
                                <img width="28" src="https://res.cloudinary.com/dgif730br/image/upload/v1744279927/Mask_group_zicocm.png" alt="this is search image" />
                            </button>
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


                            <div className="listing">
                                <label>Jump to Page</label>
                                <div className="custom_drop custom_drop1">
                                    <select className="dropdown small">
                                        <option>50</option>
                                    </select>
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className="record-info mem-record-info">
                        Records : <span>1 to 200 of </span> 976
                    </div>

                    <div className="scch-table-container">
                        <table className="scch-member-table">
                            {/* <colgroup>
                                <col style={{ width: "25%" }} />
                                <col style={{ width: "30%" }} />
                                <col style={{ width: "45%" }} />
                            </colgroup> */}
                            <thead>
                                <tr>
                                    <th className="nh1">Surname</th>
                                    <th className="nh1">Country</th>
                                    <th>Stage/Prov./Rgn</th>
                                    <th>Country</th>
                                    <th>Begin Year</th>
                                    <th>End Year</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentItems.map((item, idx) => (
                                    <tr key={idx}>
                                        <td>{item.surename}</td>
                                        <td>{item.country}</td>
                                        <td>
                                            <p> {item?.stage}</p>
                                        </td>
                                        <td>
                                            {item?.country1}
                                        </td>
                                        <td>
                                            {item?.begin}
                                        </td>
                                        <td>
                                            {item?.end}
                                        </td>
                                        <td ref={(el) => (dropdownRefs.current[idx] = el)} className="action-col">
                                            <button onClick={() => toggleDropdown(idx)} className="action-btn">
                                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M0.5 4C0.5 2.067 2.067 0.5 4 0.5H28C29.933 0.5 31.5 2.067 31.5 4V28C31.5 29.933 29.933 31.5 28 31.5H4C2.067 31.5 0.5 29.933 0.5 28V4Z" stroke="#AB0635" />
                                                    <path d="M16 14C14.9 14 14 14.9 14 16C14 17.1 14.9 18 16 18C17.1 18 18 17.1 18 16C18 14.9 17.1 14 16 14ZM16 8C14.9 8 14 8.9 14 10C14 11.1 14.9 12 16 12C17.1 12 18 11.1 18 10C18 8.9 17.1 8 16 8ZM16 20C14.9 20 14 20.9 14 22C14 23.1 14.9 24 16 24C17.1 24 18 23.1 18 22C18 20.9 17.1 20 16 20Z" fill="#49515C" />
                                                </svg>

                                            </button>
                                            {openIndex === idx && (
                                                <div className="action-dropdown">
                                                   <Link style={{textDecoration:"none"}} href={"/surenamedetail"}><div className="act_btn">
                                                        <img width={18} height={18} src="https://res.cloudinary.com/dgif730br/image/upload/v1745394773/Mask_group_1_u2msed.svg" />
                                                       <p>View</p>
                                                    </div></Link>
                                                    <div className="act_btn">
                                                        <img width={18} height={18} src="https://res.cloudinary.com/dgif730br/image/upload/v1745394773/Mask_group_3_zsyixz.svg" />
                                                        <p>Mail</p>
                                                    </div>
                                                </div>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                                {/* <tr>
                                    <td>1st Mo St Capitol, State Historic Site</td>
                                    <td />
                                    <td>sue.love@dnr.mo.gov</td>
                                </tr> */}
                                {/* <tr>
                                    <td>Achelpohl, John</td>
                                    <td>1118 Perry St. Saint. Charles, MO 63301-2904</td>
                                    <td />
                                </tr>
                                <tr>
                                    <td>Ackmann, Mark</td>
                                    <td />
                                    <td />
                                </tr>
                                <tr>
                                    <td>Adams, Amanda</td>
                                    <td />
                                    <td>adamsamanda1@hotmail.com</td>
                                </tr>
                                <tr>
                                    <td>Adams, Kathy</td>
                                    <td>1330 Jonathans Trl Vero Beach, FL 32963-2367</td>
                                    <td>adamsiumd@bellsouth.net</td>
                                </tr>
                                <tr>
                                    <td>Adams, Rick</td>
                                    <td />
                                    <td>rrrussell@centurytel.net</td>
                                </tr>
                                <tr>
                                    <td>Adams, William T.</td>
                                    <td />
                                    <td>adams_terry@att.net</td>
                                </tr>
                                <tr>
                                    <td>Adamson, Steve &amp; Carolyn</td>
                                    <td>1253 Warren St. Placentia, CA 92870-3640</td>
                                    <td>
                                        (714) 996-9511
                                        <br />
                                        cjwadamson@gmail.com
                                    </td>
                                </tr> */}
                            </tbody>
                        </table>

                    </div>


                    <div className="custom-pagination">
                        {[...Array(totalPages)].map((_, i) => (
                            <button
                                key={i}
                                className={`page-btn ${currentPage === i + 1 ? 'active' : ''}`}
                                onClick={() => handleClick(i + 1)}
                            >
                                {i + 1}
                            </button>
                        ))}

                        <button
                            className="page-btn next-btn1"
                            onClick={() => handleClick(currentPage + 1)}
                            disabled={currentPage === totalPages}
                        >
                            <span>Next</span>
                            <svg width="6" height="12" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.13115 0.5L0.368652 2.2625L6.09365 8L0.368652 13.7375L2.13115 15.5L9.63115 8L2.13115 0.5Z" fill="#666D76" />
                            </svg>

                        </button>
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