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



const data = {
    surname: "Alferman",
    city: "St. Charles",
    county: "St. Charles",
    state: "Missouri",
    country: "USA",
    beginYear: "1801",
    endYear: "1960",
    alternateSpellings: "Alfermann",
};

export default function surenamelook(pageProp) {



    return (
        <div className="page_shopping_list sop">
            <HeadSEO title={"memberlogin"} description={"this member is login"} image={null} />

            <HeadSEO1 />

            <div className="event_system_main event_system_main1">
                <div className="event_main">
                    <div className="surname-btn-group">
                        <button className="btn-primary">Print</button>
                       <Link href={"/surenamelook"}><button className="btn-outline">Back</button></Link>
                    </div>
                    <div className="surname-details-wrapper">
                        <div className="surname-details-grid">
                            <div>Surname</div>
                            <div>: <strong><a href="#">{data.surname}</a></strong></div>

                            <div>City</div>
                            <div>: <strong><a href="#">{data.city}</a></strong></div>

                            <div>County</div>
                            <div>: <strong><a href="#">{data.county}</a></strong></div>

                            <div>State/Prov./Rgn</div>
                            <div>: <strong><a href="#">{data.state}</a></strong></div>

                            <div>Country</div>
                            <div>: <strong><a href="#">{data.country}</a></strong></div>

                            <div>Being Year</div>
                            <div>: <strong><a href="#">{data.beginYear}</a></strong></div>

                            <div>End Year</div>
                            <div>: <strong><a href="#">{data.endYear}</a></strong></div>

                            <div>Alternate Spellings</div>
                            <div>: <strong><a href="#">{data.alternateSpellings}</a></strong></div>
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