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
import { State, City } from 'country-state-city';
import zipcodes from 'us-zips';
// import { format } from "path";

var settingsMorePhotos = {
    arrows: true,
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
};

const plans = [
    { name: 'Individual', for: 'person(s)person(s)', users: '1', fee: '$30.00', description: 'See JOIN US > user Benefits section.' },
    // { name: 'Individual - Facebook Group user', for: 'person(s)', users: '1', fee: '$25.00', description: 'See JOIN US > user Benefits section' },
    { name: 'Family', for: 'person(s)', users: '2', fee: '$45.00', description: 'See JOIN US > user Benefits section.' },
    // { name: 'Family - Facebook Group user', for: 'person(s)', users: '2', fee: '$40.00', description: 'See JOIN US > user Benefits section' },
    { name: 'Blanchette', for: 'person(s)', users: '2', fee: '$100.00', description: 'See JOIN US > user Benefits section.' },
    { name: 'DuSable', for: 'person(s)', users: '2', fee: '$175.00', description: 'See JOIN US > user Benefits section.' },
    { name: 'Boone', for: 'person(s)', users: '2', fee: '$250.00', description: 'See JOIN US > user Benefits section.' },
    { name: 'Alexander McNair', for: 'person(s)', users: '2', fee: '$1000.00', description: 'See JOIN US > user Benefits section.' },
    { name: 'Business', for: 'person(s)', users: '1', fee: '$150.00', description: 'See JOIN US > user Benefits section.' },
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



    const router = useRouter();

    const [formData, setFormData] = useState({
        prefix: '', first_name: '', preferred_name: '', middle: '', maiden_name: '', use_maiden: '', last_name: '', suffix: '',
        dob: '', dobMonth: '', dobYear: '',
        address: '', address2: '', city: '', state: '', postal_code: '', country: '', mobile_number: '', cell_phone: '', int_phone: '',
        preferred: '', email: '', website: '',
        username: '', password: '', password_confirmation: ''
    });

    const [errors, setErrors] = useState({});


    const [passwordError, setPasswordError] = useState("");
    const [passwordError1, setPasswordError1] = useState("");



    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
        setErrors((prev) => ({
            ...prev,
            [e.target.name]: '',
        }));
    };


    // ===========for phone number============
    const handlePhoneChange = (e) => {
        let value = e.target.value;
        // Remove non-numeric characters
        value = value.replace(/\D/g, '');
        if (value.length === 0) {
            setFormData((prev) => ({ ...prev, mobile_number: '' }));
        }
        else if (value.length <= 3) {
            value = `(${value}`;
        } else if (value.length <= 6) {
            value = `(${value.slice(0, 3)}) ${value.slice(3)}`;
        } else {
            value = `(${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(6, 10)}`;
        }

        setFormData((prev) => ({
            ...prev,
            mobile_number: value,
        }));
        setErrors((prev) => ({
            ...prev,
            mobile_number: '',
        }));
    };

    const handleCellPhoneChange = (e) => {
        let value = e.target.value;
        // Remove non-numeric characters
        value = value.replace(/\D/g, '');
        if (value.length === 0) {
            setFormData((prev) => ({ ...prev, cell_phone: '' }));
        }
        else if (value.length <= 3) {
            value = `(${value}`;
        } else if (value.length <= 6) {
            value = `(${value.slice(0, 3)}) ${value.slice(3)}`;
        } else {
            value = `(${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(6, 10)}`;
        }

        setFormData((prev) => ({
            ...prev,
            cell_phone: value,
        }));
        setErrors((prev) => ({
            ...prev,
            cell_phone: '',
        }));
    };



    // =================end================

    // ============for usa state city=========
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);

    useEffect(() => {
        const usStates = State.getStatesOfCountry('US');
        setStates(usStates);
    }, []);


    // useEffect(() => {
    //     if (formData.state) {
    //         const stateCities = City.getCitiesOfState('US', formData.state);
    //         setCities(stateCities);
    //         setFormData((prev) => ({
    //             ...prev,
    //             city: '', // reset city when state changes
    //         }));
    //     }
        
    // }, [formData.state]);

    useEffect(() => {
    if (formData.state) {
        // find isoCode from state name
        const stateObj = State.getStatesOfCountry('US').find(
            (s) => s.name === formData.state
        );

        if (stateObj) {
            const stateCities = City.getCitiesOfState('US', stateObj.isoCode);
            setCities(stateCities);
            setFormData((prev) => ({
                ...prev,
                city: '', // reset city when state changes
            }));
        }
    }
}, [formData.state]);

// ===================fetch postal code============
//  const getZipFromCity = (stateCode, cityName) => {
//   const match = Object.entries(zipcodes).find(([zip, data]) => {
//   console.log("Checking:", zip, data); // Add this
//   return data.state === stateCode.toUpperCase() &&
//          data.city.toLowerCase() === cityName.toLowerCase();
// });
//   console.log(match);
//   console.log(zipcodes);
//   return match?.[0] || '';
// };

// useEffect(() => {
//   if (formData.state && formData.city) {
//     const zip = getZipFromCity(formData.state, formData.city);
//     if (zip) {
//       setFormData((prev) => ({ ...prev, postal_code: zip }));
//     }
//   }
// }, [formData.state, formData.city]);

    // ==============================end=================

  


    const validateStep = (step) => {
        const newErrors = {};

        if (step === 1) {
            if (!formData.first_name) newErrors.first_name = 'First name is required';
            if (!formData.last_name) newErrors.last_name = 'Last name is required';
        }

        if (step === 2) {
            if (!formData.email.trim()) {
                newErrors.email = 'Email is required';
               
            } else {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(formData.email)) {
                    newErrors.email = 'Invalid email format';
                }
            }

            // Phone validation (must be US format like (XXX) XXX-XXXX)
            if (!formData.mobile_number.trim()) {
                newErrors.mobile_number = 'Phone number is required';
            } else {
                const cleanPhone = formData.mobile_number.replace(/\D/g, '');

                if (cleanPhone.length !== 10) {
                    newErrors.mobile_number = 'Phone number must be exactly 10 digits';
                } else {
                    const formattedRegex = /^\(\d{3}\) \d{3}-\d{4}$/;
                    if (!formattedRegex.test(formData.mobile_number)) {
                        newErrors.mobile_number = 'Format as (XXX) XXX-XXXX';
                    }
                }
            }

            // ================cell phone validation=============


            // const cleanPhone1 = formData.cell_phone.replace(/\D/g, '');


            if (formData.cell_phone.trim()) {
                const formattedRegex1 = /^\(\d{3}\) \d{3}-\d{4}$/;
                if (!formattedRegex1.test(formData.cell_phone)) {
                    newErrors.cell_phone = 'Format as (XXX) XXX-XXXX';
                }
            }


            if (!formData.address) newErrors.address = "Address is required";
            if (!formData.city) newErrors.city = "City is required";
            if (!formData.state) newErrors.state = "State is required";
            if (!formData.postal_code) {
                newErrors.postal_code = "Postal code is required";
            } else if (!/^\d{5}$/.test(formData.postal_code)) {
                newErrors.postal_code = "Postal code must be exactly 5 digits and should be number";
            }

            if (formData.website?.trim()) {
                const websiteRegex = /^https?:\/\/(www\.)?[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})(\/[\w\-./?%&=]*)?$/;
                if (!websiteRegex.test(formData.website.trim())) {
                    newErrors.website = "Invalid website format";
                }
            }
        }

        if (step === 3) {
            if (!formData.username) newErrors.username = 'Username is required';
            if (!formData.password) newErrors.password = 'Password is required';
            if (!formData.password_confirmation) newErrors.password_confirmation = 'Confirm Password is required';
            if (
                formData.password &&
                formData.password_confirmation &&
                formData.password !== formData.password_confirmation
            ) {
                newErrors.password_confirmation = 'Passwords do not match';
            }
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };





    // const validateStep = (step) => {
    //     const newErrors = {};

    //     if (step === 1) {
    //         if (!formData.first_name) newErrors.first_name = 'First name is required';
    //         if (!formData.last_name) newErrors.last_name = 'Last name is required';
    //     }



    //     if (step === 2) {
    //         if (!formData.email.trim()) {
    //             newErrors.email = 'Email is required';
    //         } else {
    //             const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //             if (!emailRegex.test(formData.email)) {
    //                 newErrors.email = 'Invalid email format';
    //             }
    //         }

    //         if (!formData.mobile_number.trim()) {
    //             newErrors.mobile_number = 'Phone number is required';
    //         } else {
    //             const cleanPhone = formData.mobile_number.replace(/\D/g, '')
    //             // const usPhoneRegex = /^(?:\+1[-.\s]?)?(?:\(?\d{3}\)?[-.\s]?)?\d{3}[-.\s]?\d{4}$/;
    //             if (!cleanPhone.length !== 10) {
    //                 // newErrors.phone = 'Phone number must be exactly 10 digits';
    //             }

    //             // const usPhoneRegex1 = /^\d{10}$/;
    //             // if (!usPhoneRegex1.test(formData.phone)) {
    //             //     newErrors.phone = 'Phone number must be exactly 10 digits';
    //             // }
    //             else {
    //                 const formatted = formData.mobile_number.match(/^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/);
    //                 if (!formatted) {
    //                     newErrors.mobile_number = 'Format as (XXX) XXX-XXXX';
    //                 }
    //             }
    //         }

    //         if (!formData.address) newErrors.address = "Address is required";
    //         if (!formData.city) newErrors.city = "City is required";
    //         if (!formData.state) newErrors.state = "State is required";
    //         if (!formData.postal_code) newErrors.postal_code = "Postal code is required";

    //         if (formData.website?.trim()) {
    //             const websiteRegex = /^https:\/\/[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})(\/[\w\-./?%&=]*)?$/;
    //             if (!websiteRegex.test(formData.website.trim())) {
    //                 newErrors.website = "Invalid website format";
    //             }
    //         }

    //     }

    //     if (step === 3) {
    //         if (!formData.username) newErrors.username = 'Username is required';
    //         if (!formData.password) newErrors.password = 'Password is required';
    //         if (!formData.password_confirmation) newErrors.password_confirmation = 'Confirm Password is required';
    //         if (
    //             formData.password &&
    //             formData.password_confirmation &&
    //             formData.password !== formData.password_confirmation
    //         ) {
    //             newErrors.password_confirmation = 'Passwords do not match';
    //         }
    //     }


    //     setErrors(newErrors);
    //     return Object.keys(newErrors).length === 0;
    // };


 




    const handleNext = () => {
        if (validateStep(step)) {
            console.log(step);
            setStep((prev) => prev + 1);
        }
        else {
            toast.error("fix the form first");
        }

    }

    const handlePrevious = () => {
        setStep((prev) => prev - 1)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        // const newerrors1 = {}


        const passwordRegex = /^(?=[A-Z])(?=.*[a-zA-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/;

        if (formData.password !== formData.password_confirmation) {
            toast.error("Password and confirm password must be the same.");
            return;
        }

        if (!passwordRegex.test(formData.password)) {
            toast.error("Password must start with a capital letter, include a special character, and be at least 8 characters long.");
            return;
        }


        try {
            const response = await fetch('https://admin.scchs.co.in/api/registration', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            console.log(result);

            if (result.status === false) {
                toast.error(result?.message?.email[0]);
                return;
            }

            //   alert('Registration successful!');
            toast.success("Registered successfully!");
            setFormData({
                prefix: '', first_name: '', preferred_name: '', middle: '', maiden_name: '', use_maiden: '', last_name: '', suffix: '',
                dob: '', dobMonth: '', dobYear: '',
                address: '', address2: '', city: '', state: '', postal_code: '', country: '', mobile_number: '', cell_phone: '', int_phone: '',
                preferred: '', email: '', website: '',
                username: '', password: '', password_confirmation: ''
            });

            router.push("/user/userlogin");

        } catch (error) {
            console.error('Error:', error);
            //   alert(error.message || 'Something went wrong!');
            toast.error("username already purchased");
        }
    };



    return (
        <div className="page_shopping_list sop">
            <HeadSEO title={"userlogin"} description={"this user is login"} image={null} />

            <HeadSEO1 />

            <div className="event_system_main event_system_main1">
                <div className="event_main">
                    <form onSubmit={handleSubmit}>
                        {
                            // step === 1 && <div className="scchs-wrapper">

                            //     <div className="scchs-new-usership">
                            //         <h2 className="scchs-title">New usership</h2>
                            //         <p className="scchs-non-refundable">
                            //             ANNUAL userSHIP DUES ARE NOT REFUNDABLE
                            //         </p>
                            //         <p className="scchs-note">
                            //             NOTE: If you are already a user you should{" "}
                            //             <a href="/signin" className="scchs-sign-in-link">
                            //                 SIGN IN
                            //             </a>{" "}
                            //             and do an Online Renew instead of an Online Join.
                            //         </p>
                            //         <p className="scchs-business-note">
                            //             If you are purchasing a <strong>Business usership</strong>, please
                            //             enter the name of your company when asked to do so. Otherwise, please
                            //             enter N/A as a company name.
                            //         </p>
                            //         <button type="button" onClick={handleNext} className="scchs-next-btn">Next</button>
                            //     </div>

                            //     <div className="scchs-usership-plan">
                            //         <h3 className="scchs-plan-title">usership Plan</h3>
                            //         <select className="scchs-plan-dropdown">
                            //             <option>Select usership Plan</option>
                            //             <option>Individual usership</option>
                            //             <option>Business usership</option>
                            //         </select>
                            //     </div>

                            //     <div className="table-container">
                            //         <h2 className="table-title">usership Plans Offered</h2>


                            //         <div className="scch-table-container scch_sety">
                            //             <table className="scch-user-table ss_mem_tb">
                            //                 <thead>
                            //                     <tr>
                            //                         <th className="nh1">Plan Name</th>
                            //                         <th className="nh1">For</th>
                            //                         <th>Maximum Associated users</th>
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
                            //                                 {item?.users}
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
                                        <h2>New user</h2>
                                        {/* {step>1 &&  <button type="button" onClick={handlePrevious}>Back</button>}    */}
                                    </div>
                                    <div className="nameform-container">
                                        <h2>Primary user Information</h2>
                                        <div className="nameform-group nams_group">

                                            {/* <input onChange={handleChange} name="prefix" value={formData.prefix} className="nameform-input" type="text" placeholder="Prefix" /> */}
                                            <select onChange={handleChange} name="prefix" value={formData.prefix} className="nameform-input" type="text" placeholder="Prefix">
                                                <option value={""}>Prefix</option>
                                                <option>Mr.</option>
                                                <option>Mrs.</option>
                                                <option>Ms.</option>
                                                <option>Miss.</option>
                                                <option>Dr.</option>
                                                {/* <option>Dr.</option> */}
                                                <option>Rev.</option>
                                                <option>Mayor</option>
                                                <option>Prof.</option>
                                            </select>
                                        </div>
                                        <div className="nameform-group">

                                            <input onChange={handleChange} name="first_name" value={formData.first_name} className="nameform-input" type="text" placeholder="First Name*" />
                                            {errors.first_name && <p className="text_red">{errors.first_name}</p>}
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
                                            <input onChange={handleChange} name="last_name" value={formData?.last_name} className="nameform-input" type="text" placeholder="Last Name*" />
                                            {errors.last_name && <p className="text_red">{errors.last_name}</p>}
                                        </div>

                                        <div className="nameform-group">

                                            <select onChange={handleChange} name="suffix" value={formData?.suffix} className="nameform-input">
                                                <option value={""}>Suffix</option>
                                                <option >Jr.</option>
                                                <option >Sr.</option>
                                                <option >II</option>
                                                <option >III</option>
                                                <option>Ph.D.</option>
                                                <option>M.D.</option>
                                                <option>Atty.</option>
                                            </select>
                                        </div>

                                        <div className="nameform-group nameform-date-group">
                                            <input onChange={handleChange} name="dobMonth" value={formData?.dobMonth} className="nameform-input" type="text" placeholder="MM" />
                                            <input onChange={handleChange} name="dob" value={formData?.dob} className="nameform-input" type="text" placeholder="DD" />
                                            <input onChange={handleChange} name="dobYear" value={formData?.dobYear} className="nameform-input" type="text" placeholder="YY" />
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
                                        <h2>New user</h2>
                                        {step > 1 && <button type="button" onClick={handlePrevious}>Back</button>}
                                    </div>
                                    <div className="nameform-container">
                                        <h2>Main Contact Information</h2>
                                        <div className="nameform-group nams_group">

                                            <input onChange={handleChange} name="address" value={formData?.address} className="nameform-input" type="text" placeholder="Address*" />

                                            {errors.address && <p className="text_red">{errors.address}</p>}

                                        </div>

                                        <div className="nameform-group">

                                            <input name="address2" onChange={handleChange} value={formData?.address2} className="nameform-input" type="text" placeholder="Address2" />
                                        </div>

                                        <div className="nameform-group">
                                            {/* <input name="country" onChange={handleChange} value={formData?.country} className="nameform-input" type="text" placeholder="Country" /> */}
                                            <select name="country" onChange={handleChange} value={formData?.country} className="nameform-input">
                                                <option value={""}>Country</option>
                                                <option>United States of America</option>
                                            </select>
                                        </div>

                                        <div className="nameform-group">
                                            {/* <input onChange={handleChange} name="state" value={formData?.state} className="nameform-input" type="text" placeholder="State/ Province*" /> */}

                                            {/* <select name="state" value={formData?.state} onChange={handleChange} className="nameform-input">
                                                <option value={""}>Select State*</option>
                                                <option>Alabama</option>
                                                <option>Alaska</option>
                                                <option>Arizona</option>
                                                <option>Arkansas</option>
                                                <option>California</option>
                                                <option>Colorado</option>
                                                <option>Connecticut</option>
                                                <option>Delaware</option>
                                                <option>Florida</option>
                                                <option>Georgia</option>
                                                <option>Hawaii</option>
                                                <option>Idaho</option>
                                                <option>Illinois</option>
                                                <option>Indiana</option>
                                                <option>Iowa</option>
                                                <option>Kansas</option>
                                                <option>Kentucky</option>
                                                <option>Louisiana</option>
                                                <option>Maine</option>
                                                <option>Maryland</option>
                                                <option>Massachusetts</option>
                                                <option>Michigan</option>
                                                <option>Minnesota</option>
                                                <option>Mississippi</option>
                                                <option>Missouri</option>
                                                <option>Montana</option>
                                                <option>Nebraska</option>
                                                <option>Nevada</option>
                                                <option>New Hampshire</option>
                                                <option>New Jersey</option>
                                                <option>New Mexico</option>
                                                <option>New York</option>
                                                <option>North Carolina</option>
                                                <option>North Dakota</option>
                                                <option>Ohio</option>
                                                <option>Oklahoma</option>
                                                <option>Oregon</option>
                                                <option>Pennsylvania</option>
                                                <option>Rhode Island</option>
                                                <option>South Carolina</option>
                                                <option>South Dakota</option>
                                                <option>Tennessee</option>
                                                <option>Texas</option>
                                                <option>Utah</option>
                                                <option>Vermont</option>
                                                <option>Virginia</option>
                                                <option>Washington</option>
                                                <option>West Virginia</option>
                                                <option>Wisconsin</option>
                                                <option>Wyoming</option>
                                            </select> */}

                                            <select name="state" value={formData.state} onChange={handleChange} className="nameform-input">
                                                <option value="">Select State</option>
                                                {states.map((state) => (
                                                    <option key={state.name} value={state.name}>
                                                        {state.name}
                                                    </option>
                                                ))}  
                                            </select>

                                            {errors.state && <p className="text_red">{errors.state}</p>}
                                        </div>

                                        <div className="nameform-group">

                                            {/* <input onChange={handleChange} name="city" value={formData?.city} className="nameform-input" type="text" placeholder="City*" /> */}
                                            {/* <select onChange={handleChange} name="city" value={formData?.city} className="nameform-input">
                                                <option>Select City*</option>
                                                <option>New York</option>
                                                <option>Phoenix</option>
                                                <option>Philadelphia</option>
                                                <option>San Antonio</option>
                                                <option>Meridian</option>
                                                <option>San Francisco</option>
                                                <option>Dearborn</option>
                                                <option>Columbus</option>
                                                <option>Boston</option>
                                                <option>Las Vegas</option>
                                                <option>El Paso</option>
                                                <option>Austin</option>
                                                <option>Los Angeles</option>
                                                <option>San Diego</option>
                                                <option>Boise</option>
                                                <option>Baton Rouge</option>
                                                <option>San Jose</option>
                                                <option>Jacksonville</option>
                                                <option>Indianapolis</option>
                                                <option>Seattle</option>
                                                <option>Baltimore</option>
                                                <option>Chicago</option>
                                                <option>Houston</option>
                                                <option>Dallas</option>
                                                <option>Nampa</option>
                                                <option>Oklahoma City</option>
                                                <option>Montgomery</option>
                                                <option>Charlotte</option>
                                                <option>Fort Worth</option>
                                                <option>Denver</option>
                                                <option>Trenton</option>
                                                <option>Detroit</option>
                                                <option>Kansas City</option>
                                                <option>Santa Ana</option>
                                                <option>Allentown</option>
                                                <option>Anchorage</option>
                                                <option>Aurora</option>
                                                <option>Oakland</option>
                                                <option>Salt Lake City</option>
                                                <option>Albuquerque</option>
                                                <option>Akron</option>
                                                <option>Anaheim</option>
                                                <option>Garland</option>
                                                <option>Abilene</option>
                                                <option>Jersey City</option>
                                                <option>Atlanta</option>
                                                <option>Albany</option>
                                                <option>Arlington</option>
                                                <option>Tucson</option>
                                                <option>Augusta</option>
                                            </select> */}
                                            <select name="city" value={formData.city} onChange={handleChange} className="nameform-input">
                                                <option value="">Select City</option>
                                                {cities.map((city) => (
                                                    <option key={city.name} value={city.name}>
                                                        {city.name}
                                                    </option>
                                                ))}
                                            </select>
                                            {errors.city && <p className="text_red">{errors.city}</p>}
                                        </div>



                                        <div className="nameform-group">

                                            <input name="postal_code" onChange={handleChange} value={formData?.postal_code} className="nameform-input" type="text" placeholder="Postal Code*" />
                                            {errors.postal_code && <p className="text_red">{errors.postal_code}</p>}
                                        </div>



                                        <div className="nameform-group nameformis nameformis1">
                                            <input maxLength={14}
                                                onChange={handlePhoneChange}
                                                name="mobile_number"
                                                value={formData?.mobile_number}
                                                className="nameform-input"
                                                type="text"
                                                placeholder="Phone"

                                            />
                                            {
                                                !errors.mobile_number ? <span className="nameform-note name_int">(Phone or Cell Phone is Required, Format as (XXX) XXX-XXXX)</span> :
                                                    <p style={{ marginLeft: "10px" }} className="text_red">{errors.mobile_number}</p>
                                            }

                                            {/* {errors.phone && } */}
                                        </div>
                                        <div className="nameform-group nameformis nameformis1" >
                                            <input maxLength={14}
                                                onChange={handleCellPhoneChange} name="cell_phone" value={formData?.cell_phone} className="nameform-input" type="text" placeholder="Cell Phone" />
                                            {errors.cell_phone && <p className="text_red">{errors.cell_phone}</p>}
                                            {/* <span className="nameform-note name_int">(Phone or Cell Phone is Required, Format as (XXX) XXX-XXXX)</span> */}
                                        </div>
                                        {/* <div className="nameform-group nameformis nameformis1">
                                            <input onChange={handleChange} name="int_phone" value={formData?.int_phone} className="nameform-input" type="text" placeholder="Int'l. Phone:" />
                                            <span className="nameform-note name_int">Unformatted</span>
                                        </div> */}



                                        {/* <div className="nameform-group">

                                            <select onChange={handleChange} name="preferred_name" value={formData?.preferred_name} className="nameform-input">
                                                <option >
                                                    Preferred #:</option>
                                                <option >Jr.</option>
                                                <option>Sr.</option>
                                                <option>II</option>
                                                <option>III</option>
                                            </select>
                                        </div> */}

                                        <div className="nameform-group">
                                            <input name="email" onChange={handleChange} value={formData?.email} className="nameform-input" type="email" placeholder="Email*" />
                                            {errors.email && <p className="text_red">{errors.email}</p>}
                                        </div>

                                        <div className="nameform-group">
                                            <input onChange={handleChange} name="website" value={formData?.website} className="nameform-input" type="text" placeholder="Website" />
                                            {errors.website && <p className="text_red">{errors.website}</p>}
                                        </div>

                                        <p className="format">Format URL above as <span>https://sitename.com</span> or <span>https://sitename.com</span>/dir/file.html</p>


                                    </div>

                                    <div className="do_have">
                                        {/* <div className="do_left">
                                            <p>Do you have an alternate "Seasonal" address:</p>
                                            <select>
                                                <option>Yes</option>
                                                <option>No</option>
                                            </select>
                                        </div> */}
                                        {
                                            step < 3 && <button type="button" onClick={() => {
                                                console.log("step", step);
                                                handleNext()
                                            }} className="scchs_hj_btn testing_btn111">Next</button>
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
                                        <h2>New user</h2>
                                        {step > 1 && <button type="button" onClick={handlePrevious}>Back</button>}
                                    </div>
                                    <div className="nameform-container">
                                        <h2>Primary user Information</h2>
                                        <div className="nameform-group nams_group">
                                            <input required onChange={handleChange} name="username" value={formData?.username} className="nameform-input" type="text" placeholder="UserName" />
                                            {errors?.username && <p className="text_red">{errors.username}</p>}
                                        </div>
                                        <div className="nameform-group">
                                            <input required onChange={(e) => {
                                                const value = e.target.value;
                                                setFormData({ ...formData, password: value });

                                                const passwordRegex = /^(?=[A-Z])(?=.*[a-zA-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/;

                                                if (value && !passwordRegex.test(value)) {
                                                    setPasswordError(
                                                        "Password must start with a capital letter, include a special character, and be at least 8 characters long."
                                                    );
                                                } else {
                                                    setPasswordError("");
                                                }
                                            }} name="password" value={formData?.password} className="nameform-input" type="password" placeholder="Password" />
                                            {/* {errors?.password && <p className="text_red">{errors.password}</p>} */}
                                            {passwordError && (
                                                <p className="text_red">
                                                    {passwordError}
                                                </p>
                                            )}
                                        </div>

                                        <div className="nameform-group">
                                            <input required name="password_confirmation" onChange={(e) => {
                                                const value = e.target.value;
                                                const updatedFormData = { ...formData, password_confirmation: value };
                                                setFormData(updatedFormData);

                                                if (value && updatedFormData.password !== value) {
                                                    setPasswordError1("Password and confirm password must be same");
                                                } else {
                                                    setPasswordError1("");
                                                }
                                            }} value={formData?.password_confirmation} className="nameform-input" type="password" placeholder="Confirm Password" />
                                            {/* {errors?.password_confirmation && <p className="text_red">{errors.password_confirmation}</p>} */}
                                            {passwordError1 && (
                                                <p className="text_red">
                                                    {passwordError1}
                                                </p>
                                            )}
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