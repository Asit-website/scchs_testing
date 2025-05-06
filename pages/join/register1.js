import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import HeadSEO from "../../components/common/Head/head";
import GlobalHeaderFooter from "../../utils/common/global-header-footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeadSEO1 from "../../components/common/Head/head1";
import Link from "next/link";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

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
        setStep((prev) => prev + 1)
    }

    const handlePrevious = () => {
        setStep((prev) => prev - 1)
    }

    const router = useRouter();

    const [formData, setFormData] = useState({
        prefix: '', first_name: '', preferred_name: '', middle: '', maiden_name: '', use_maiden: '', last_name: '', suffix: '',
        dob: '', dobMonth: '', dobYear: '',
        address: '', address2: '', city: '', state: '', postal_code: '', country: '', phone: '', cell_phone: '', int_phone: '',
        preferred: '', email: '', website: '',
        username: '', password: '', password_confirmation: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
        setErrors({ ...errors, [e.target.name]: "" }); // Clear error on type
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.first_name) newErrors.first_name = "FirstName is required";
        if (!formData.password) newErrors.password = "Password is required";
        if (!formData.password_confirmation) newErrors.password_confirmation = "Confirm your password";
        if (formData.password && formData.password_confirmation && formData.password !== formData.password_confirmation)
          newErrors.password_confirmation = "Passwords do not match";
        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            toast.error("Please fix the form errors.");
            return;
        }

        // if (formData.password !== formData.password_confirmation) {
        //     alert("Passwords do not match!");
        //     return;
        // }

        try {
            const response = await fetch('https://admin.kmiroofing.com/api/registration', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            console.log(result);

            //   if (!response.ok) {
            //     throw new Error(result.message || 'Registration failed.');
            //   }

            //   alert('Registration successful!');
            toast.success("Registered successfully!");
            setFormData({
                prefix: '', first_name: '', preferred_name: '', middle: '', maiden_name: '', use_maiden: '', last_name: '', suffix: '',
                dob: '', dobMonth: '', dobYear: '',
                address: '', address2: '', city: '', state: '', postal_code: '', country: '', phone: '', cell_phone: '', int_phone: '',
                preferred: '', email: '', website: '',
                username: '', password: '', password_confirmation: ''
            });

            router.push("/member/memberlogin");

        } catch (error) {
            console.error('Error:', error);
            //   alert(error.message || 'Something went wrong!');
            toast.error(error.message || 'Something went wrong!');
        }
    };

    return (
        <div className="page_shopping_list sop">
            <HeadSEO title={"memberlogin"} description={"this member is login"} image={null} />

            <HeadSEO1 />

            <div className="event_system_main event_system_main1">
                <div className="event_main">
                    <form onSubmit={handleSubmit}>
                        {
                            // step === 1 && <div className="scchs-wrapper">

                            //     <div className="scchs-new-membership">
                            //         <h2 className="scchs-title">New Membership</h2>
                            //         <p className="scchs-non-refundable">
                            //             ANNUAL MEMBERSHIP DUES ARE NOT REFUNDABLE
                            //         </p>
                            //         <p className="scchs-note">
                            //             NOTE: If you are already a member you should{" "}
                            //             <a href="/signin" className="scchs-sign-in-link">
                            //                 SIGN IN
                            //             </a>{" "}
                            //             and do an Online Renew instead of an Online Join.
                            //         </p>
                            //         <p className="scchs-business-note">
                            //             If you are purchasing a <strong>Business Membership</strong>, please
                            //             enter the name of your company when asked to do so. Otherwise, please
                            //             enter N/A as a company name.
                            //         </p>
                            //         <button type="button" onClick={handleNext} className="scchs-next-btn">Next</button>
                            //     </div>

                            //     <div className="scchs-membership-plan">
                            //         <h3 className="scchs-plan-title">Membership Plan</h3>
                            //         <select className="scchs-plan-dropdown">
                            //             <option>Select Membership Plan</option>
                            //             <option>Individual Membership</option>
                            //             <option>Business Membership</option>
                            //         </select>
                            //     </div>

                            //     <div className="table-container">
                            //         <h2 className="table-title">Membership Plans Offered</h2>


                            //         <div className="scch-table-container scch_sety">
                            //             <table className="scch-member-table ss_mem_tb">
                            //                 <thead>
                            //                     <tr>
                            //                         <th className="nh1">Plan Name</th>
                            //                         <th className="nh1">For</th>
                            //                         <th>Maximum Associated Members</th>
                            //                         <th>Annual Fee</th>
                            //                         {/* <th>Description</th> */}
                            //                     </tr>
                            //                 </thead>
                            //                 <tbody>
                            //                     {plans.map((item, idx) => (
                            //                         <tr key={idx}>
                            //                             <td>{item.name}</td>
                            //                             <td>{item.for}</td>
                            //                             <td>
                            //                                 {item?.members}
                            //                             </td>
                            //                             <td>
                            //                                 {item?.fee}
                            //                             </td>
                            //                             {/* <td>
                            //                                 {item?.description}
                            //                             </td> */}
                            //                         </tr>
                            //                     ))}

                            //                 </tbody>
                            //             </table>
                            //         </div>
                            //         <button type="button" onClick={handleNext} className="scchs_hj_btn">Next</button>
                            //     </div>
                            // </div>
                        }
                        {
                            step === 1 && (
                                <>
                                    <div className="form_scch_btn">
                                        <h2>New Membership</h2>
                                        {/* {step>1 &&  <button type="button" onClick={handlePrevious}>Back</button>}    */}
                                    </div>
                                    <div className="nameform-container">
                                        <h2>Primary Member Information</h2>
                                        <div className="nameform-group nams_group">

                                            <input onChange={handleChange} name="prefix" value={formData.prefix} className="nameform-input" type="text" placeholder="Prefix" />
                                        </div>
                                        <div className="nameform-group">

                                            <input onChange={handleChange} name="first_name" value={formData.first_name} className="nameform-input" type="text" placeholder="First Name*" />
                                            {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}
                                        </div>

                                        <div className="nameform-group">

                                            <input onChange={handleChange} name="preferred_name" value={formData?.preferred_name} className="nameform-input" type="text" placeholder="Preferred Name" />
                                        </div>

                                        <div className="nameform-group">

                                            <input onChange={handleChange} name="middle" value={formData?.middle} className="nameform-input" type="text" placeholder="Middle" />
                                        </div>

                                        <div className="nameform-group">

                                            <input onChange={handleChange} name="maiden_name" value={formData?.maiden_name} className="nameform-input" type="text" placeholder="Maiden Name" />
                                        </div>

                                        <div className="nameform-group nameformis">
                                            <select onChange={handleChange} name="use_maiden" value={formData?.use_maiden} className="nameform-input">
                                                <option >Use Maiden</option>
                                                <option>Yes</option>
                                                <option>No</option>
                                            </select>
                                            <span className="nameform-note">If Applicable</span>
                                        </div>

                                        <div className="nameform-group">
                                            <input onChange={handleChange} name="last_name" value={formData?.last_name} className="nameform-input" type="text" placeholder="Last Name" />
                                        </div>

                                        <div className="nameform-group">

                                            <select onChange={handleChange} name="suffix" value={formData?.suffix} className="nameform-input">
                                                <option >Suffix</option>
                                                <option >Jr.</option>
                                                <option >Sr.</option>
                                                <option >II</option>
                                                <option >III</option>
                                            </select>
                                        </div>

                                        <div className="nameform-group nameform-date-group">
                                            <input onChange={handleChange} name="dob" value={formData?.dob} className="nameform-input" type="text" placeholder="DD" />
                                            <select name="dobMonth" value={formData?.dobMonth} onChange={handleChange} className="nameform-input">
                                                <option>MM</option>
                                                <option>01</option>
                                                <option>02</option>
                                                <option>03</option>
                                                {/* More months */}
                                            </select>
                                            <select onChange={handleChange} name="dobYear" value={formData?.dobYear} className="nameform-input">
                                                <option>YY</option>
                                                <option>1990</option>
                                                <option>1991</option>
                                                <option>1992</option>
                                                {/* More years */}
                                            </select>
                                        </div>
                                    </div>
                                    {
                                        step < 3 && <button type="button" onClick={() => {
                                            console.log("step", step);
                                            handleNext()
                                        }} className="scchs_hj_btn">Next</button>
                                    }
                                    {/* <button type="button" onClick={handleNext} className="scchs_hj_btn">Next</button> */}
                                </>
                            )
                        }
                        {
                            step === 2 && (
                                <>
                                    <div className="form_scch_btn">
                                        <h2>New Membership</h2>
                                        {step > 1 && <button type="button" onClick={handlePrevious}>Back</button>}
                                    </div>
                                    <div className="nameform-container">
                                        <h2>Main Contact Information</h2>
                                        <div className="nameform-group nams_group">

                                            <input onChange={handleChange} name="address" value={formData?.address} className="nameform-input" type="text" placeholder="Address" />
                                        </div>

                                        <div className="nameform-group">

                                            <input name="address2" onChange={handleChange} value={formData?.address2} className="nameform-input" type="text" placeholder="Address2" />
                                        </div>

                                        <div className="nameform-group">

                                            <input onChange={handleChange} name="city" value={formData?.city} className="nameform-input" type="text" placeholder="City" />
                                        </div>

                                        <div className="nameform-group">

                                            <input onChange={handleChange} name="state" value={formData?.state} className="nameform-input" type="text" placeholder="State/ Province*" />
                                        </div>

                                        <div className="nameform-group">

                                            <input name="postal_code" onChange={handleChange} value={formData?.postal_code} className="nameform-input" type="text" placeholder="Postal Code*" />
                                        </div>

                                        <div className="nameform-group">
                                            <input name="country" onChange={handleChange} value={formData?.country} className="nameform-input" type="text" placeholder="Country" />
                                        </div>

                                        <div className="nameform-group nameformis nameformis1">
                                            <input onChange={handleChange} name="phone" value={formData?.phone} className="nameform-input" type="text" placeholder="Phone" />
                                            <span className="nameform-note name_int">(Phone or Cell Phone is Required, Format as (XXX) XXX-XXXX)</span>
                                        </div>
                                        <div className="nameform-group nameformis nameformis1" >
                                            <input onChange={handleChange} name="cell_phone" value={formData?.cell_phone} className="nameform-input" type="text" placeholder="Cell Phone" />
                                            <span className="nameform-note name_int">(Phone or Cell Phone is Required, Format as (XXX) XXX-XXXX)</span>
                                        </div>
                                        <div className="nameform-group nameformis nameformis1">
                                            <input onChange={handleChange} name="int_phone" value={formData?.int_phone} className="nameform-input" type="text" placeholder="Int'l. Phone:" />
                                            <span className="nameform-note name_int">Unformatted</span>
                                        </div>



                                        <div className="nameform-group">

                                            <select onChange={handleChange} name="preferred_name" value={formData?.preferred_name} className="nameform-input">
                                                <option >
                                                    Preferred #:</option>
                                                <option >Jr.</option>
                                                <option>Sr.</option>
                                                <option>II</option>
                                                <option>III</option>
                                            </select>
                                        </div>

                                        <div className="nameform-group">
                                            <input name="email" onChange={handleChange} value={formData?.email} className="nameform-input" type="text" placeholder="Email*" />

                                        </div>

                                        <div className="nameform-group">
                                            <input onChange={handleChange} name="website" value={formData?.website} className="nameform-input" type="text" placeholder="Website" />
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
                                        {
                                            step < 3 && <button type="button" onClick={() => {
                                                console.log("step", step);
                                                handleNext()
                                            }} className="scchs_hj_btn">Next</button>
                                        }
                                        {/* <button type="button" onClick={handleNext} className="scchs_hj_btn thhy">Next</button> */}
                                    </div>
                                </>
                            )
                        }
                        {
                            step === 3 && (
                                <>
                                    <div className="form_scch_btn">
                                        <h2>New Membership</h2>
                                        {step > 1 && <button type="button" onClick={handlePrevious}>Back</button>}
                                    </div>
                                    <div className="nameform-container">
                                        <h2>Primary Member Information</h2>
                                        <div className="nameform-group nams_group">

                                            <input onChange={handleChange} name="username" value={formData?.username} className="nameform-input" type="text" placeholder="UserName" />
                                        </div>
                                        <div className="nameform-group">

                                            <input onChange={handleChange} name="password" value={formData?.password} className="nameform-input" type="password" placeholder="Password" />
                                        </div>

                                        <div className="nameform-group">

                                            <input name="password_confirmation" onChange={handleChange} value={formData?.password_confirmation} className="nameform-input" type="password" placeholder="Confirm Password" />
                                        </div>

                                    </div>
                                    {
                                        step < 3 && <button type="button" onClick={() => {
                                            console.log("step", step);
                                            handleNext()
                                        }} className="scchs_hj_btn">Next</button>
                                    }

                                    {/* <button type="button" onClick={handleNext} className="scchs_hj_btn">Next</button> */}
                                </>
                            )
                        }


                        {
                            step === 3 && <button type="submit" className="scchs_hj_btn">Submit</button>
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