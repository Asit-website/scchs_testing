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
export default function donation(pageProp) {

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
            <div className="terros">
            <div className="container111">
                <h2 className="donation-heading">Donations</h2>
                <p className="donation-paragraph">
                    The primary mission of the St. Charles County Historical Society is to
                    preserve, interpret and make publicly available the rich historical record
                    of St. Charles County. Up until 2016 the Society has accepted donations of
                    items of all sorts that are historically significant to St. Charles
                    County. Over the sixty years of our existence we have accumulated an
                    enormous collection of artifacts ranging from quilts to uniforms to type
                    frames to theater ephemera. This is in addition to the many photographs,
                    letters, family histories, church vital records, maps, census records and
                    other official records of the county such as circuit court and immigration
                    documents. Because of space limitations and our inability to display the
                    objects in our collection, we have decided to de-accession these items and
                    transfer them to the St. Charles County Heritage Museum where it is hoped
                    they will be available for public viewing on a more regular basis.
                </p>
                <p className="welcome-your-donation">
                    <strong>
                        We are a 501(c)(3) non-profit organization and welcome your donations.
                    </strong>
                </p>
                <div className="box_1">
                    <p className="box-paragraph">You may make an online donation.</p>
                    <a href="#fghj">Click Here</a>
                </div>
                <p className="donation-of-papers">
                    Donations of papers, photographs, books and other miscellaneous documents
                    will be gladly accepted as they pertain to St. Charles County. People
                    desiring to donate historical artifacts will now be referred to the
                    Heritage Museum. We stand ready and willing to assist parties in making
                    such donations as our interest in the preservation of St. Charles County
                    history remains undiminished.
                </p>
                <p className="we-all-accept">
                    We also accept financial donations in a variety of forms from cash to
                    equities to real estate. In fact, we rely on these types of donations for
                    a substantial portion of our yearly operating revenue.
                </p>
            </div>
            <section className="scchs-contribution">
                <div className="note-section">
                    <h3>SCCHS Contributions</h3>
                    <p className="note">
                        Please complete the form below to make an online CONTRIBUTION.
                    </p>
                    <p className="note">
                        <strong>NOTE:</strong> If you are trying to{" "}
                        <strong>become a member</strong> please exit this section and click on{" "}
                        <strong>JOIN</strong> at the top of the HOME page. If you are trying{" "}
                        <br /> to <strong>renew your membership</strong> please exit this
                        section and click on <strong>SIGN IN</strong> at the top of the HOME
                        page
                    </p>
                </div>
                <form>
                <div className="container-1"id="fghj">
                    <div className="form-title">Place a Donation:</div>
                    {/* <form> */}
                        <input
                            className="donation-input"
                            type="text"
                            id="name"
                            placeholder="First Name*"
                        />
                        <input
                            className="donation-input"
                            type="text"
                            id="name"
                            placeholder="Last Name*"
                        />
                        <input
                            className="donation-input"
                            type="text"
                            placeholder="Organization"
                        />
                        <input
                            className="donation-input"
                            type="text"
                            id="name"
                            placeholder="Email Address* "
                        />
                        <input className="small-input-1" type="text" placeholder="Phone" />
                        <div className="warning">Required, formatted as (000) 000-0000</div>
                        <input
                            className="small-input"
                            type="text"
                            placeholder="Donation Amount (USD):"
                        />
                        <div className="warning">
                            Required, $10.00 Minimum Donation, Format as 123.45
                        </div>
                        <select className="hgjg">
                            <option>Donation Type</option>
                            <option>Phone</option>
                            <option>Cell</option>
                            <option>Int'l</option>
                        </select>
                        <textarea
                            className="textarea"
                            name=""
                            id=""
                            placeholder="Donor Comments"
                            defaultValue={""}
                        />
                        <div className="chek-box-parent">
                            <input className="checkbox" type="checkbox" />
                            <span>
                                I would like to make this donation anonymously. Please do not
                                publish my name.
                            </span>
                        </div>
                    {/* </form> */}
                </div>
                <div className="container-2">
                    {/* <form action=""> */}
                        <input
                            className="donation-input"
                            type="text"
                            id="name"
                            placeholder="Address*"
                        />
                        <input className="donation-input" type="text" placeholder="Address 2" />
                        <input
                            className="donation-input"
                            type="text"
                            id="name"
                            placeholder="City*"
                        />
                        <input
                            className="donation-input"
                            type="text"
                            id="name"
                            placeholder="State / Province*"
                        />
                        <input
                            className="donation-input"
                            type="text"
                            id="name"
                            placeholder="Postal Code*"
                        />
                        <input className="donation-input" type="text" placeholder="Country" />
                    {/* </form> */}
                </div>
                   <div className="submit_donation">
                        <button>Submit Donation</button>
                   </div>
                </form>
            </section>
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