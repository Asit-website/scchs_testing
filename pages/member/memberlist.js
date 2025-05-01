import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import HeadSEO from "../../components/common/Head/head";
import GlobalHeaderFooter from "../../utils/common/global-header-footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeadSEO1 from "../../components/common/Head/head1";



var settingsMorePhotos = {
    arrows: true,
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
};


const records = [
    { name: 'Almeling, Dan and Christy', email: 'd56da@aol.com' },
    { name: 'Anderson, Evan', email: 'eja2100@aol.com' },
    { name: 'Angell, Natalie', address: '202 Sandfort Ln. St. Charles, MO 63301-4411', phone: '(636) 947-6970', email: 'natalie.angell20@gmail.com' },
    { name: 'Archer, Hillary', email: 'hillaryarcher47@gmail.com' },
    { name: 'Arens, Dan [Dan] Robert', email: 'drarens@yahoo.com' },
    { name: 'Armantrout, F. John', email: 'kayak910@outlook.com' },
    { name: 'Almeling, Dan and Christy', email: 'd56da@aol.com' },
    { name: 'Anderson, Evan', email: 'eja2100@aol.com' },
    { name: 'Angell, Natalie', address: '202 Sandfort Ln. St. Charles, MO 63301-4411', phone: '(636) 947-6970', email: 'natalie.angell20@gmail.com' },
    { name: 'Archer, Hillary', email: 'hillaryarcher47@gmail.com' },
    { name: 'Arens, Dan [Dan] Robert', email: 'drarens@yahoo.com' },
    { name: 'Armantrout, F. John', email: 'kayak910@outlook.com' },
    { name: 'Almeling, Dan and Christy', email: 'd56da@aol.com' },
    { name: 'Anderson, Evan', email: 'eja2100@aol.com' },
    { name: 'Angell, Natalie', address: '202 Sandfort Ln. St. Charles, MO 63301-4411', phone: '(636) 947-6970', email: 'natalie.angell20@gmail.com' },
    { name: 'Archer, Hillary', email: 'hillaryarcher47@gmail.com' },
    { name: 'Arens, Dan [Dan] Robert', email: 'drarens@yahoo.com' },
    { name: 'Armantrout, F. John', email: 'kayak910@outlook.com' },
    { name: 'Almeling, Dan and Christy', email: 'd56da@aol.com' },
    { name: 'Anderson, Evan', email: 'eja2100@aol.com' },
    { name: 'Angell, Natalie', address: '202 Sandfort Ln. St. Charles, MO 63301-4411', phone: '(636) 947-6970', email: 'natalie.angell20@gmail.com' },
    { name: 'Archer, Hillary', email: 'hillaryarcher47@gmail.com' },
    { name: 'Arens, Dan [Dan] Robert', email: 'drarens@yahoo.com' },
    { name: 'Armantrout, F. John', email: 'kayak910@outlook.com' },
    // Add more for testing pagination
];

const itemsPerPage = 10;
export default function memberlist(pageProp) {

    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(records.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentItems = records.slice(startIndex, startIndex + itemsPerPage);

    const handleClick = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    return (
        <div className="page_shopping_list sop">
            <HeadSEO title={"memberlogin"} description={"this member is login"} image={null} />

            <HeadSEO1 />

            <div className="event_system_main event_system_main1">
                <div className="event_main">
                    <div className="memberList_filter" >
                        <div className="event-title-filter memberlist-title-filter">
                            <div className="custom_drop">
                                <select className="dropdown small">
                                    <option>Last / Org. Name</option>
                                </select>
                            </div>
                            <span className="for-label">FOR:</span>
                            <input type="text" className="search-input" />
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


                            <div className="listing" id="listingg">
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
                            <colgroup>
                                <col style={{ width: "25%" }} />
                                <col style={{ width: "30%" }} />
                                <col style={{ width: "45%" }} />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th className="nh1">Member Name</th>
                                    <th className="nh1">Address</th>
                                    <th>Telephone / Email / Website</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentItems.map((item, idx) => (
                                    <tr key={idx}>
                                        <td>{item.name}</td>
                                        <td>{item.address || ''}</td>
                                        <td>
                                            {item.phone && <div>{item.phone}</div>}
                                            {item.email}
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