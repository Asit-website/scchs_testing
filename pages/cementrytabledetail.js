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


export default function cementrytable(pageProp) {
    const router = useRouter();
    const { id, personId } = router.query;
    const [personData, setPersonData] = useState(null);

    useEffect(() => {
        if (id && personId) {
            fetch(`https://admin.scchs.co.in/api/cemeteries/${id}/people/${personId}`)
                .then((res) => res.json())
                .then((data) => setPersonData(data));
        }
    }, [id, personId]);

    if (!personData) return <p>Loading...</p>;
    return (
        <div className="page_shopping_list sop">
            <HeadSEO title={"memberlogin"} description={"this member is login"} image={null} />

            <HeadSEO1 />



            <div className="event_system_main event_system_main1">
                <div className="event_main">
                    <div className="cemetery-detail-container">
                        <div className="cemetery-detail-header">
                            <h1 className="cemetery-detail-title">Cemetery Record</h1>
                            <div className="cemetery-detail-buttons">
                                <button className="cemetery-btn-print" onClick={() => window.print()}>Print</button>
                                <button className="cemetery-btn-close" onClick={() => router.back()}>Close</button>
                            </div>
                        </div>

                        <div className="cemetery-box">
                            <h3 className="cemetery-box-title">Personal Data:</h3>
                            <p>Surname: <strong>{personData.surname}</strong></p>
                            <p>Given Name: <strong>{personData.given_name}</strong></p>
                            <p>Age: <strong>{personData.age}</strong></p>
                        </div>

                        <div className="cemetery-box">
                            <h3 className="cemetery-box-title">Birth Information:</h3>
                            <p>Year / Mo. / Day: <strong>{personData.birth_info}</strong></p>
                        </div>

                        <div className="cemetery-box">
                            <h3 className="cemetery-box-title">Death Information:</h3>
                            <p>Year / Mo. / Day: <strong>{personData.death_info}</strong></p>
                        </div>

                        <div className="cemetery-box">
                            <h3 className="cemetery-box-title">Interment Information:</h3>
                            <p>Cemetery: <strong>{personData.cemetery}</strong></p>
                        </div>

                        <div className="cemetery-box">
                            <h3 className="cemetery-box-title">Notes / Comments:</h3>
                            <p><strong>{personData.remarks}</strong></p>
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