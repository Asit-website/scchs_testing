import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import HeadSEO from "../components/common/Head/head";
import GlobalHeaderFooter from "../utils/common/global-header-footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeadSEO1 from "../components/common/Head/head1";



var settingsMorePhotos = {
    arrows: true,
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
};


const records = [
    {
        title: "Baue Funeral Home Records Index - IN PROCESS",
        description:
            "The information copied from the records includes the death date and place, birth date and place, parents (if known), residence at time of death, occupation, military if applicable, spouse, date of burial and place, and usually the survivors of the deceased. Not all information is in all the records. An index of the surnames (those of survivors, spouses, parents etc) included in the book of the full records has been added for cross-reference. Relationships can be proven using this information.",
        updated: "22 November 2023",
        category: "Obituaries",
    },
    {
        title: "Burial or Removal Permits",
        description:
            "An index to burial or removal permits issued in St. Charles County for the years 1927 - 1942. The original documents, maintained at the St. Charles County Historical Society Archives, typically include the full name of the deceased, age, cause of death, date of death, place of burial, undertaker, signature of the sexton at the cemetery where the burial took place, and date of interment.",
        updated: "15 July 2016",
        category: "City/State/Federal Records",
    },
    {
        title: "Burials By Church - IN PROCESS",
        description:
            "This index of old St. Charles churches is offered as a finding tool. While the actual records are held by the individual churches, St. Charles County Historical Society has indexes of these church records which will include more information for you; typical information might be the names of the deceased, burial date, and cause of death. Sometimes information about the deceased's family is given. If you see your family name listed in a church's burial records, you may want to also check the entire index of that church for marriage and burial information. Locating their church may pinpoint the region of St. Charles County where your family resided.",
        updated: " 08 November 2023",
        category: " Church Records",
    },
    {
        title: "Business & Industry Files Index",
        description:
            `Additions are made to these "drop files" on a rolling basis - news clippings, pamphlets, and other relevant documents are "dropped" into the appropriate file as they are discovered. Please note that the contents of most of these files relate specifically to St. Charles City and/or St. Charles County, though occasionally included items may pertain to large entities, such as the state of Missouri as a whole.`,
        updated: " 26 March 2021",
        category: " City/State/Federal Records",
    },
    {
        title: "Cemeteries in St. Charles County",
        description:
            "",
        updated: " 10 May 2022",
        category: " Cemeteries",
    },
    {
        title: "Cemetery Records (St. Charles County)",
        description:
            "",
        updated: "10 May 2022",
        category: "Cemeteries",
    },

    {
        title: "Census, St. Charles County, 1876",
        description:
            "1876 State Census, St. Charles County, Missouri.",
        updated: "10 May 2022",
        category: "Cemeteries",
    },

    {
        title: "Circuit Court Index 1805-1893",
        description:
            "Includes sessions held from 1805 through 1893 (includes the period St. Charles served as Missouri's state capital), is to original records that are stored at the SCCHS Archives, and may be searched free at MO Judicial Archives as part of the Missouri Judicial Records Collection (select Saint Charles in the County box). The original documents are at the St. Charles County Historical Society Archives.",
        updated: " 08 November 2023",
        category: " City/State/Federal Records",
    },

    {
        title: "Deed Records Related To Smith Chapel Cemetery",
        description:
            "Deed records related Smith Chapel Cemetery.",
        updated: "  07 August 2020",
        category: "Cemeteries",
    },
    {
        title: "Family Files",
        description:
            "An index of family files that may include documents such as genealogy charts, photographs, death certificates, newspaper articles, etc. New documents are added to the files as they are discovered.",
        updated: "20 March 2024",
        category: "Family History",
    },
];

const itemsPerPage = 3;
export default function research(pageProp) {
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

            <div className="schss_research">
                <div className="schss_research_inner">
                    <h2>SCCHS Research</h2>
                    <div className="rest_para">
                    <p>
                        The <span>St. Charles County Historical Society's</span> Archives has an extensive collection of County and City records. Over the years, a number of the research items have been indexed by various volunteers to enable researchers to more readily locate information for genealogical or family history.
                    </p>
                    <p>
                    Please note that the <span>original documents</span> referenced by the indexes on our website are not available online.  For more information about an original document please submit a <span className="research_req">RESEARCH REQUEST.</span>
                    </p>
                    </div>
                </div>
            </div>

            <div className="event_system_main event_system_main1">
                <div className="event_main">
                    <div className="memberList_filter research_filter" >
                        <div className="event-title-filter memberlist-title-filter res-title-filter">
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
                    <div className="record-box-section">
                        {currentItems.map((record, index) => (
                            <div key={index} className="record-box-card">
                                <h2 className="record-box-title">{record.title}</h2>
                                <p className="record-box-description">{record.description}</p>
                                <div className="record-box-meta">
                                    <span className="record-box-updated">
                                        <strong>Last Updated:</strong> {record.updated}
                                    </span>
                                    <span className="record-box-separator">|</span>
                                    <span className="record-box-category">
                                        <strong>Located in Category:</strong> {record.category}
                                    </span>
                                </div>
                                <button className="record-box-button">Know More</button>
                            </div>
                        ))}
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
                              <span style={{ color: "#333" }}>Next</span>
                                <svg width="6" height="12" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.13115 0.5L0.368652 2.2625L6.09365 8L0.368652 13.7375L2.13115 15.5L9.63115 8L2.13115 0.5Z" fill="#666D76" />
                                </svg>

                            </button>
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