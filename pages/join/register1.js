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
    { name: 'Individual', for: 'person(s)person(s)', members: '1', fee: '$30.00', description: 'See JOIN US > Member Benefits section.' },
    // { name: 'Individual - Facebook Group Member', for: 'person(s)', members: '1', fee: '$25.00', description: 'See JOIN US > Member Benefits section' },
    { name: 'Family', for: 'person(s)', members: '2', fee: '$45.00', description: 'See JOIN US > Member Benefits section.' },
    // { name: 'Family - Facebook Group Member', for: 'person(s)', members: '2', fee: '$40.00', description: 'See JOIN US > Member Benefits section' },
    { name: 'Blanchette', for: 'person(s)', members: '2', fee: '$100.00', description: 'See JOIN US > Member Benefits section.' },
    { name: 'DuSable', for: 'person(s)', members: '2', fee: '$175.00', description: 'See JOIN US > Member Benefits section.' },
    { name: 'Boone', for: 'person(s)', members: '2', fee: '$250.00', description: 'See JOIN US > Member Benefits section.' },
    { name: 'Alexander McNair', for: 'person(s)', members: '2', fee: '$1000.00', description: 'See JOIN US > Member Benefits section.' },
    { name: 'Business', for: 'person(s)', members: '1', fee: '$150.00', description: 'See JOIN US > Member Benefits section.' },
];



// const itemsPerPage = 10;
export default function register1(pageProp) {

    // const [currentPage, setCurrentPage] = useState(1);

    // const totalPages = Math.ceil(records.length / itemsPerPage);
    // const startIndex = (currentPage - 1) * itemsPerPage;
    // const currentItems = records.slice(startIndex, startIndex + itemsPerPage);

    // const handleClick = (page) => {
    //     if (page >= 1 && page <= totalPages) {
    //         setCurrentPage(page);
    //     }
    // };

    const [step, setStep] = useState(1);

    const handleNext = () => {
        setStep(step + 1);
    }

    const handlePrevious = () => {
        setStep(step - 1);
    }

    return (
        <div className="page_shopping_list sop">
            <HeadSEO title={"memberlogin"} description={"this member is login"} image={null} />

            <HeadSEO1 />

            <div className="event_system_main event_system_main1">
                <div className="event_main">
                    <form>
                        {
                            step === 1 && <div className="scchs-wrapper">
                                {/* Section: New Membership */}
                                <div className="scchs-new-membership">
                                    <h2 className="scchs-title">New Membership</h2>
                                    <p className="scchs-non-refundable">
                                        ANNUAL MEMBERSHIP DUES ARE NOT REFUNDABLE
                                    </p>
                                    <p className="scchs-note">
                                        NOTE: If you are already a member you should{" "}
                                        <a href="/member/memberlogin" className="scchs-sign-in-link">
                                            SIGN IN
                                        </a>{" "}
                                        and do an Online Renew instead of an Online Join.
                                    </p>
                                    <p className="scchs-business-note">
                                        If you are purchasing a <strong>Business Membership</strong>, please
                                        enter the name of your company when asked to do so. Otherwise, please
                                        enter N/A as a company name.
                                    </p>
                                    <button type="button" onClick={handleNext} className="scchs-next-btn">Next</button>
                                </div>

                                <div className="scchs-membership-plan">
                                    <h3 className="scchs-plan-title">Membership Plan</h3>
                                    <select className="scchs-plan-dropdown">
                                        <option>Select Membership Plan</option>
                                        <option>Individual Membership</option>
                                        <option>Business Membership</option>
                                    </select>
                                </div>

                                <div className="table-container">
                                    <h2 className="table-title">Membership Plans Offered</h2>


                                    <div className="scch-table-container scch_sety">
                                        <table className="scch-member-table ss_mem_tb">
                                            <thead>
                                                <tr>
                                                    <th className="nh1">Plan Name</th>
                                                    <th className="nh1">For</th>
                                                    <th>Maximum Associated Members</th>
                                                    <th>Annual Fee</th>
                                                    {/* <th>Description</th> */}
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {plans.map((item, idx) => (
                                                    <tr key={idx}>
                                                        <td>{item.name}</td>
                                                        <td>{item.for}</td>
                                                        <td>
                                                            {item?.members}
                                                        </td>
                                                        <td>
                                                            {item?.fee}
                                                        </td>
                                                        {/* <td>
                                                            {item?.description}
                                                        </td> */}
                                                    </tr>
                                                ))}

                                            </tbody>
                                        </table>
                                    </div>
                                    <button type="button" onClick={handleNext} className="scchs_hj_btn">Next</button>
                                </div>
                            </div>
                        }
                        {
                            step === 2 && (
                                <>
                                    <div className="form_scch_btn">
                                        <h2>New Membership</h2>
                                        <button type="button" onClick={handlePrevious}>Back</button>
                                    </div>
                                    <div className="nameform-container">
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
                                    </div>

                                    <button type="button" onClick={handleNext} className="scchs_hj_btn">Next</button>
                                </>
                            )
                        }
                        {
                            step === 3 && (
                                <>
                                    <div className="form_scch_btn">
                                        <h2>New Membership</h2>
                                        <button type="button" onClick={handlePrevious}>Back</button>
                                    </div>
                                    <div className="nameform-container">
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


                                    </div>

                                    <div className="do_have">
                                        <div className="do_left">
                                            <p>Do you have an alternate "Seasonal" address:</p>
                                            <select>
                                                <option>Yes</option>
                                                <option>No</option>
                                            </select>
                                        </div>
                                        <button type="button" onClick={handleNext} className="scchs_hj_btn thhy">Next</button>
                                    </div>
                                </>
                            )
                        }
                    </form>
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