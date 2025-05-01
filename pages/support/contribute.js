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
console.log(records);
const itemsPerPage = 10;
export default function contribute(pageProp) {

    const [contribute, setContribute] = useState(false);

    const handleContribute = () => {
        const filterContribute = setContribute(Math.random());
        const assignMember = setContribute(filterContribute);
        console.log(assignMember);
    }


    return (
        <div className="page_shopping_list sop">
            <HeadSEO title={"memberlogin"} description={"this member is login"} image={null} />

            <HeadSEO1 />

            <div className="event_system_main event_system_main1">
                <div className="event_main">
                    <div className="donation-review-wrapper">
                        <h1 className="donation-title">SCCHS Contributions</h1>

                        <div className="donation-card">
                            <h2 className="donation-subtitle">Review & Confirm Donation</h2>

                            <div className="donation-grid">
                                <div className="donation-label">First Name</div>
                                <div className="donation-separator">:</div>
                                <div className="donation-value">G</div>

                                <div className="donation-label">Last Name</div>
                                <div className="donation-separator">:</div>
                                <div className="donation-value">Walker</div>

                                <div className="donation-label">Organization</div>
                                <div className="donation-separator">:</div>
                                <div className="donation-value">Digital Growth</div>

                                <div className="donation-label">Email Address</div>
                                <div className="donation-separator">:</div>
                                <div className="donation-value">tkwalther56@gmail.com</div>

                                <div className="donation-label">Phone</div>
                                <div className="donation-separator">:</div>
                                <div className="donation-value">(314) 226-3144</div>

                                <div className="donation-label">Donation Amount (USD)</div>
                                <div className="donation-separator">:</div>
                                <div className="donation-value">10.00</div>

                                <div className="donation-label">Donation Type</div>
                                <div className="donation-separator">:</div>
                                <div className="donation-value">One Time</div>
                            </div>

                            <hr className="donation-divider" />

                            <div className="donation-grid donation-anonymous">
                                <div className="donation-label">Anonymous</div>
                                <div className="donation-separator">:</div>
                                <div className="donation-value">
                                    I would like to make this donation anonymously. Please do not publish my name.
                                </div>
                                <div className="donation-label">Donor Comments:</div>
                                <div className="donation-separator">:</div>
                                <div className="donation-value">
                                    Hello
                                </div>
                            </div>

                            <hr className="donation-divider" />

                            <div className="donation-grid donation-anonymous">
                                <div className="donation-label">Address</div>
                                <div className="donation-separator">:</div>
                                <div className="donation-value">
                                    36 Shadowridge Drive
                                </div>
                                <div className="donation-label">Address 2</div>
                                <div className="donation-separator">:</div>
                                <div className="donation-value">
                                    false
                                </div>
                                <div className="donation-label">City</div>
                                <div className="donation-separator">:</div>
                                <div className="donation-value">
                                    St Peters
                                </div>
                                <div className="donation-label">State / Province</div>
                                <div className="donation-separator">:</div>
                                <div className="donation-value">
                                MO
                                </div>
                                <div className="donation-label">Postal Code</div>
                                <div className="donation-separator">:</div>
                                <div className="donation-value">
                                63376
                                </div>
                                <div className="donation-label">Country</div>
                                <div className="donation-separator">:</div>
                                <div className="donation-value">
                                United States
                                </div>
                            </div>

                            <hr className="donation-divider" />
                            <div className="donation-checkbox">
                                <input type="checkbox"/>
                                <p>I am not a robot</p>
                            </div>
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