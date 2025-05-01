import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import HeadSEO from "../../components/common/Head/head";
import GlobalHeaderFooter from "../../utils/common/global-header-footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeadSEO1 from "../../components/common/Head/head1";
import Link from "next/link";



var settingsMorePhotos = {
    arrows: true,
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
};

const plans = [
    { name: 'Individual', for: 'person(s)', members: '1', fee: '$30.00', description: 'this is the system' },
    { name: 'Individual', for: 'person(s)', members: '1', fee: '$30.00', description: 'this is the system' },
    { name: 'Individual', for: 'person(s)', members: '1', fee: '$30.00', description: 'this is the system' },
    { name: 'Individual', for: 'person(s)', members: '1', fee: '$30.00', description: 'this is the system' },
    { name: 'Individual', for: 'person(s)', members: '1', fee: '$30.00', description: 'this is the system' },
];



// const itemsPerPage = 10;
export default function register2(pageProp) {

    // const [currentPage, setCurrentPage] = useState(1);

    // const totalPages = Math.ceil(records.length / itemsPerPage);
    // const startIndex = (currentPage - 1) * itemsPerPage;
    // const currentItems = records.slice(startIndex, startIndex + itemsPerPage);

    // const handleClick = (page) => {
    //     if (page >= 1 && page <= totalPages) {
    //         setCurrentPage(page);
    //     }
    // };

    return (
        <div className="page_shopping_list sop">
            <HeadSEO title={"memberlogin"} description={"this member is login"} image={null} />

            <HeadSEO1 />

            <div className="event_system_main event_system_main1">
                <div className="event_main">
                    <div className="form_scch_btn">
                        <h2>New Membership</h2>
                        <Link href="/join/register1"><button>Back</button></Link>
                    </div>
                    <form className="nameform-container">
                        <h2>Primary Member Information</h2>
                        <div className="nameform-group nams_group">

                            <input className="nameform-input" type="text" placeholder="Prefix" />
                        </div>
                        <div className="nameform-group">

                            <input className="nameform-input" type="text" placeholder="First Name*" />
                        </div>

                        <div className="nameform-group">

                            <input className="nameform-input" type="text" placeholder="Preferred Name" />
                        </div>

                        <div className="nameform-group">

                            <input className="nameform-input" type="text" placeholder="Middle" />
                        </div>

                        <div className="nameform-group">

                            <input className="nameform-input" type="text" placeholder="Maiden Name" />
                        </div>

                        <div className="nameform-group nameformis">
                            <select className="nameform-input">
                                <option value="">Use Maiden</option>
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                            <span className="nameform-note">If Applicable</span>
                        </div>

                        <div className="nameform-group">
                            <input className="nameform-input" type="text" placeholder="Last Name" />
                        </div>

                        <div className="nameform-group">

                            <select className="nameform-input">
                                <option value="">Suffix</option>
                                <option value="Jr.">Jr.</option>
                                <option value="Sr.">Sr.</option>
                                <option value="II">II</option>
                                <option value="III">III</option>
                            </select>
                        </div>

                        <div className="nameform-group nameform-date-group">
                            <input className="nameform-input" type="text" placeholder="DD" maxLength={2} />
                            <select className="nameform-input">
                                <option>MM</option>
                                <option>01</option>
                                <option>02</option>
                                <option>03</option>
                                {/* More months */}
                            </select>
                            <select className="nameform-input">
                                <option>YY</option>
                                <option>1990</option>
                                <option>1991</option>
                                <option>1992</option>
                                {/* More years */}
                            </select>
                        </div>
                    </form>

                    <Link style={{ textDecoration: "none" }} href="/join/register3"><button className="scchs_hj_btn">Next</button></Link>
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