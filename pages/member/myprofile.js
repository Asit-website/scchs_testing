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

const tabList = [
    "Member Info",
    "Contact Info",
    "Alt. Contact Info",
    "Custom Data",
    "Surnames",
    "Member Setting"
];

export default function myprofile(pageProp) {

    const [activeTab, setActiveTab] = useState("Member Setting");

    return (
        <div className="page_shopping_list sop">
            <HeadSEO title={"memberprofile"} description={"this is member profile"} image={null} />

            <HeadSEO1 />

            <div className="event_system_main event_system_main2">
                <div className="event_main">
                    <div className="membership_info">
                        <div className="membership_info_left">
                            <svg width="34" height="34" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="22" cy="22" r="22" fill="#AB0635" />
                                <path d="M21.616 25.672L21.208 20.776V13.96H23.296V20.776L22.888 25.672H21.616ZM23.488 30.664C23.152 31.016 22.736 31.192 22.24 31.192C21.744 31.192 21.32 31.016 20.968 30.664C20.632 30.312 20.464 29.888 20.464 29.392C20.464 28.912 20.64 28.496 20.992 28.144C21.344 27.776 21.76 27.592 22.24 27.592C22.72 27.592 23.136 27.776 23.488 28.144C23.84 28.496 24.016 28.912 24.016 29.392C24.016 29.888 23.84 30.312 23.488 30.664Z" fill="white" />
                            </svg>

                        </div>
                        <div className="membership_info_right">
                           <p><span>Password Note :</span>Only letters and numbers, please. Special characters like punctuation will not be saved, and you will not be able to</p>
                           <p>log in with a password like that.</p>
                        </div>
                    </div>
                    <div className="membership-container">
                        <div className="section-header">Membership Info</div>

                        <div className="card-wrapper">
                            <div className="info-section info-section1">
                                <div className="info-header info-header22">Membership :</div>
                                <div className="info-card">
                                    <p><strong>Membership Plan :</strong> Individual</p>
                                    <p><strong>Membership # :</strong> </p>
                                </div>
                            </div>

                            <div className="info-section info-section2">
                                <div className="info-header">Mailing Information :</div>
                                <div className="info-card">
                                    <p><strong>Send Mail To :</strong></p>
                                    <p><strong>Always Mail Pubs :</strong> No</p>
                                       {/* <div className="grid-2col">
                                        <div><strong className="lable1">Send Mail To:</strong></div>
                                        <div><strong className="lable1">Always Mail Pubs:</strong> </div>
                                    </div> */}
                                </div>
                            </div>

                            <div className="info-section info-section3">
                                <div className="info-header info-header11">Dues & Renewal :</div>
                                {/* <div className="info-card">
                                    <p><strong>Expiration Date :</strong> 2026 Feb 25 <span> | </span>  <strong>Amount Paid :</strong> 30.00</p>
                                    <p><strong>Donation :</strong> <span>0.00</span>  <span> | </span> <strong>Date :</strong> 2025 Feb 26</p>
                                    <p><strong>Payment Type :</strong> Paypal <span> | </span> <strong>Comment :</strong> GWalker</p>
                                </div> */}
                                <div className="info-card">
                                    <div className="grid-2col">
                                        <div><strong className="lable1">Expiration Date  :</strong>2026 Feb </div>
                                        <div><strong className="lable1">Amount Paid       :</strong> 30.00</div>
                                        <div><strong className="lable1">Donation             :</strong>0.00</div>
                                        <div><strong className="lable1">Date                      :</strong> 2025 Feb </div>
                                        <div><strong className="lable1">Payment Type    :</strong>Paypal</div>
                                        <div><strong className="lable1">Comment            :</strong> No</div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>



                    <div className="member-settings-wrapper">
                        <div className="ms-tabs">
                            {tabList.map((tab) => (
                                <button
                                    key={tab}
                                    className={`ms-tab ${activeTab === tab ? "selected" : ""}`}
                                    onClick={() => setActiveTab(tab)}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>
                        <div className="card-section">
                            <h2 className="section-title">Site Access :</h2>
                            <div className="site-access-grid">
                                <div className="access-box">
                                    <span className="label">Login Name :</span>
                                    <span className="value">GWalker  <span className="edit-icon"><img width={24} height={24} src="https://res.cloudinary.com/dgif730br/image/upload/v1744636032/Mask_group_gzjnak.png" alt="" /></span></span>

                                </div>
                                <div className="access-box">
                                    <span className="label">Password :</span>
                                    <span className="value">Null  <span className="edit-icon"><img width={24} height={24} src="https://res.cloudinary.com/dgif730br/image/upload/v1744636032/Mask_group_gzjnak.png" alt="" /></span></span>

                                </div>
                            </div>
                        </div>

                        <div className="card-section">
                            <h2 className="section-title">Membership List :</h2>
                            <div className="card-row">
                                <div className="card">
                                    <div className="grid-2col">
                                        <div><strong className="lable1">Show Name :</strong> Yes</div>
                                        <div><strong className="lable1">Address :</strong> Yes <span className="edit-icon edit-icon1"><img width={24} height={24} src="https://res.cloudinary.com/dgif730br/image/upload/v1744636032/Mask_group_gzjnak.png" /></span></div>
                                        <div><strong className="lable1">Telephone :</strong> Yes</div>
                                        <div><strong className="lable1">Email Address :</strong> Yes</div>
                                        <div><strong className="lable1">Website :</strong> Yes</div>
                                        <div><strong className="lable1">Photo :</strong> No</div>
                                    </div>
                                </div>

                                <div className="card card11">
                                    <h2 className="section-title">Receive Email Now :</h2>
                                    <div className="grid-2col grid-2col11">
                                        <div><strong className="lable1">General Notices :</strong> Yes <span className="edit-icon edit-icon1"><img width={24} height={24} src="https://res.cloudinary.com/dgif730br/image/upload/v1744636032/Mask_group_gzjnak.png" alt="" /></span></div>
                                        <div><strong className="lable1">Event Reminders :</strong> Yes</div>
                                        <div><strong className="lable1">News Letters :</strong> Yes</div>
                                        <div><strong className="lable1">Surname Inquiries :</strong> Yes</div>
                                    </div>
                                </div>
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
        console.log(context);
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