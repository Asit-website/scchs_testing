import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import HeadSEO from "../components/common/Head/head";
import GlobalHeaderFooter from "../utils/common/global-header-footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeadSEO1 from "../components/common/Head/head1";
import Link from "next/link";
import { useRouter } from "next/router";



var settingsMorePhotos = {
    arrows: true,
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
};



// const data = {
//     surname: "Alferman",
//     city: "St. Charles",
//     county: "St. Charles",
//     state: "Missouri",
//     country: "USA",
//     beginYear: "1801",
//     endYear: "1960",
//     alternateSpellings: "Alfermann",
// };

export default function surenamelook(pageProp) {

    const { query } = useRouter();

    const data = {
        surname: query.surname || "",
        city: query.city || "",
        county: query.county || "",
        state: query.state || "",
        country: query.country || "",
        beginYear: query.start_year || "",
        endYear: query.end_year || "",
        alternateSpellings: query.alt || "",
        notes: query?.commant
    };

    console.log(data)


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
                            {data?.surname && <><div>Surname</div>
                                <div>: <strong><a href="#">{data.surname}</a></strong></div></>}

                            {
                                data?.city && <>
                                    <div>City</div>
                                    <div>: <strong><a href="#">{data.city}</a></strong></div>
                                </>
                            }

                            {
                                data?.county && <>
                                    <div>County</div>
                                    <div>: <strong><a href="#">{data.county}</a></strong></div>
                                </>
                            }

                            {
                                data?.state && <>
                                    <div>State/Prov./Rgn</div>
                                    <div>: <strong><a href="#">{data.state}</a></strong></div>
                                </>
                            }

                            {
                                data?.country &&
                                <>
                                    <div>Country</div>
                                    <div>: <strong><a href="#">{data.country}</a></strong></div>
                                </>
                            }

                            {
                                data?.beginYear && <>
                                    <div>Being Year</div>
                                    <div>: <strong><a href="#">{data.beginYear}</a></strong></div>
                                </>
                            }
                            {
                                data?.endYear && <>
                                    <div>End Year</div>
                                    <div>: <strong><a href="#">{data.endYear}</a></strong></div>
                                </>
                            }


                            {
                                data?.alternateSpellings && <>
                                    <div>Alternate Spellings</div>
                                    <div>: <strong><a href="#">{data.alternateSpellings}</a></strong></div>
                                </>
                            }

                            {
                                data?.notes && <>
                                    <div>Notes / Comments</div>
                                    <div>: <strong><a href="#">{data.notes}</a></strong></div>
                                </>
                            }

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