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
export default function register3(pageProp) {

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
                        <h2>Main Contact Information</h2>
                        <div className="nameform-group nams_group">

                            <input className="nameform-input" type="text" placeholder="Address" />
                        </div>

                        <div className="nameform-group">

                            <input className="nameform-input" type="text" placeholder="Address2" />
                        </div>

                        <div className="nameform-group">

                            <input className="nameform-input" type="text" placeholder="City" />
                        </div>

                        <div className="nameform-group">

                            <input className="nameform-input" type="text" placeholder="State/ Province*" />
                        </div>

                        <div className="nameform-group">

                            <input className="nameform-input" type="text" placeholder="Postal Code*" />
                        </div>

                        <div className="nameform-group">
                            <input className="nameform-input" type="text" placeholder="Country" />
                        </div>

                        <div className="nameform-group nameformis nameformis1">
                            <input className="nameform-input" type="text" placeholder="Phone" />
                            <span className="nameform-note name_int">(Phone or Cell Phone is Required, Format as (XXX) XXX-XXXX)</span>
                        </div>
                        <div className="nameform-group nameformis nameformis1" >
                            <input className="nameform-input" type="text" placeholder="Cell Phone" />
                            <span className="nameform-note name_int">(Phone or Cell Phone is Required, Format as (XXX) XXX-XXXX)</span>
                        </div>
                        <div className="nameform-group nameformis nameformis1">
                            <input className="nameform-input" type="text" placeholder="Int'l. Phone:" />
                            <span className="nameform-note name_int">Unformatted</span>
                        </div>



                        <div className="nameform-group">

                            <select className="nameform-input">
                                <option value="">
                                    Preferred #:</option>
                                <option value="Jr.">Jr.</option>
                                <option value="Sr.">Sr.</option>
                                <option value="II">II</option>
                                <option value="III">III</option>
                            </select>
                        </div>

                        <div className="nameform-group">
                            <input className="nameform-input" type="text" placeholder="Email*" />

                        </div>

                        <div className="nameform-group">
                            <input className="nameform-input" type="text" placeholder="Website" />
                        </div>

                        <p className="format">Format URL above as <span>https://sitename.com</span> or <span>https://sitename.com</span>/dir/file.html</p>


                    </form>

                    <div className="do_have">
                        <div className="do_left">
                            <p>Do you have an alternate "Seasonal" address:</p>
                            <select>
                                <option>Yes</option>
                                <option>No</option>
                            </select>
                        </div>
                        <Link style={{ textDecoration: "none" }} href="/join/register3"><button className="scchs_hj_btn thhy">Next</button></Link>
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