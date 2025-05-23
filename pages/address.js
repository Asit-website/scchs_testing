import React, { useEffect, useState } from "react";
import style from "./css/cart.module.scss";
import Link from "next/link";
import Cookies from "js-cookie";
import HeadSEO from "../components/common/Head/head";
import CartItemsLoading from "../components/common/Cart/cart-items-loading";
import { useSession } from "next-auth/react";
import CartItems from "../components/common/Cart/cart-items";
import { useRouter } from 'next/router';
import EventDetMinus from "../components/common/svg/eventDetials/minus";
import EventDetPlus from "../components/common/svg/eventDetials/plus";
import GlobalHeaderFooter from "../utils/common/global-header-footer";
import { constrainedMemory } from "process";
import { State, City } from 'country-state-city';
import { toast } from "react-toastify";
export default function Cart(props) {

    // console.log("cartprob",props);

    const { toggleBoolValue, boolValue } = props;

    const [cartLoad, setCartLoad] = useState(true);
    const [cartEnpty, setCartEnpty] = useState(false);
    const [cartUpdate, setCartUpdate] = useState(false);
    const [cartData, setCartData] = useState([]);
    const { data: session, status } = useSession();
    const nx_cart_id = Cookies.get("nx_cart_id");

    const router = useRouter();


    const [count, setCount] = useState(1);

    const [errors, setErrors] = useState({})

    // const [refreshFlag,setrefreshFlag] = useState(false);


    //Get Cart
    // const getCartDetails = async () => {

    //   if (typeof nx_cart_id != "undefined" && nx_cart_id != "") {
    //     const getCart = await fetch(process.env.next.api_url + "cart/get", {
    //       method: "post",
    //       headers: {
    //         Accept: "application/json",
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify({ cart_id: nx_cart_id }),
    //     });
    //     const cartRes = await getCart.json();


    //     if (cartRes?.status && cartRes?.status == 404) {
    //       setCartEnpty(true);
    //       setCartLoad(false);
    //       Cookies.remove("nx_cart_id");
    //       setCartUpdate(false);
    //       return false;
    //     }
    //     if (typeof cartRes?.data != "undefined") {
    //       setCartEnpty(false);
    //       setCartLoad(false);
    //       setCartData(cartRes?.data);
    //       setCartUpdate(false);
    //       return false;
    //     }
    //   }else{
    //     setCartEnpty(true);
    //     setCartLoad(false);
    //     setCartUpdate(false);
    //     Cookies.remove("nx_cart_id");
    //     return false;
    //   }
    // };

    // useEffect(function () {
    //   getCartDetails();
    // }, []);


    //  const []




    const [addressDetail, setAddressDetail] = useState({
        first_name: "",
        last_name: "",
        address1: "",
        address2: "",
        country: "",
        phone: "",
        city: "",
        state: "",
        address_type: "",
        zipcode: "",
        status: "",
        email: "",
        // state: "",
        // city: "",
        // status: "",
        // address1: "",
        // address2: "",
        // pincode: "",
        // landmark: "",
        // phone: "",
        // address_type: ""
    });

    const [addressDetail1, setAddressDetail1] = useState({});

    // const handleAddressChange = (e) => {

    //     const { name, value } = e.target;
    //     setAddressDetail((prevAddressDetail) => ({
    //         ...prevAddressDetail,
    //         [name]: value,
    //     }));

    // };

    //   const handlePhoneChange = (e) => {
    //     let value = e.target.value;
    //     // Remove non-numeric characters
    //     value = value.replace(/\D/g, '');
    //     if (value.length === 0) {
    //         setAddressDetail((prev) => ({ ...prev, mobile_number: '' }));
    //     }
    //     else if (value.length <= 3) {
    //         value = `(${value}`;
    //     } else if (value.length <= 6) {
    //         value = `(${value.slice(0, 3)}) ${value.slice(3)}`;
    //     } else {
    //         value = `(${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(6, 10)}`;
    //     }

    //     setAddressDetail((prev) => ({
    //         ...prev,
    //         phone: value,
    //     }));
    //     setAddressDetail((prev) => ({
    //         ...prev,
    //         phone: '',
    //     }));
    // };


    const handleAddressChange = (e) => {
        const { name, value } = e.target;

        let newValue = value;

        if (name === 'phone') {
            // Remove all non-digit characters
            const digits = value.replace(/\D/g, '');

            // Format as (XXX) XXX-XXXX
            if (digits.length <= 3) {
                newValue = `(${digits}`;
            } else if (digits.length <= 6) {
                newValue = `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
            } else if (digits.length <= 10) {
                newValue = `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
            } else {
                // Ignore anything beyond 10 digits
                newValue = `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6, 10)}`;
            }
        }

        setAddressDetail((prevAddressDetail) => ({
            ...prevAddressDetail,
            [name]: newValue,
        }));
    };

    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);

    useEffect(() => {
        const usStates = State.getStatesOfCountry('US');
        setStates(usStates);
    }, []);

    useEffect(() => {
        if (addressDetail.state) {
            // find isoCode from state name
            const stateObj = State.getStatesOfCountry('US').find(
                (s) => s.name === addressDetail.state
            );

            if (stateObj) {
                const stateCities = City.getCitiesOfState('US', stateObj.isoCode);
                setCities(stateCities);
                // setAddressDetail((prev) => ({
                //     ...prev,
                //     city: '', // reset city when state changes
                // }));
            }
        }
    }, [addressDetail.state]);


    const validateAddressForm = (formData) => {
        const errors = {};

        if (!formData.first_name?.trim()) {
            errors.first_name = 'First name is required';
        }

        if (!formData.last_name?.trim()) {
            errors.last_name = 'Last name is required';
        }

        if (!formData.address1?.trim()) {
            errors.address1 = 'Address1 is required';
        }

        if (!formData.country?.trim()) {
            errors.country = 'Country is required';
        }

        // Phone validation (must be US format like (XXX) XXX-XXXX)
        // if (!formData.phone.trim()) {
        //     errors.phone = 'Phone number is required';
        // } else {
        //     const cleanPhone = formData.phone.replace(/\D/g, '');

        //     if (cleanPhone.length !== 10) {
        //         errors.phone = 'Phone number must be exactly 10 digits';
        //     } else {
        //         const formattedRegex = /^\(\d{3}\) \d{3}-\d{4}$/;
        //         if (!formattedRegex.test(formData.phone)) {
        //             errors.phone = 'Format as (XXX) XXX-XXXX';
        //         }
        //     }
        // }

        if (!formData.city?.trim()) {
            errors.city = 'City is required';
        }

        if (!formData.state?.trim()) {
            errors.state = 'State is required';
        }

        if (!formData.zipcode?.trim()) {
            errors.zipcode = 'ZipCode is required';
        } else if (!/^\d{5}$/.test(formData.zipcode)) {
            errors.zipcode = 'ZipCode must be exactly 5 digits and numeric';
        }

        return errors;
    };



    const handleAddressChange1 = (e) => {

        const { name, value } = e.target;
        setAddressDetail1((prevAddressDetail) => ({
            ...prevAddressDetail,
            [name]: value,
        }));

    };

    const [datas, setDatas] = useState([]);

    const getAddress = async () => {

        try {
            const response = await fetch("https://admin.scchs.co.in/api/listalladdress", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${JSON?.parse(localStorage.getItem("scchs_Access"))}`
                }
            });

            const data1 = await response.json();
            setDatas(data1?.data)
            console.log(data1.data)
            // setData(data1?.data);
            // console.log(data?.user_id);

        } catch (error) {
        }
    };

    useEffect(() => {
        getAddress();
    }, [])

    const [isEditing, setIsEditing] = useState(false);

// useEffect(() => {
//     const editFlag = localStorage.getItem("scchs_editing") === "true";
//     setIsEditing(editFlag);
// }, []);

  useEffect(() => {
    const isEditing = router.query.edit === "true"; // now based on query param
    setIsEditing(isEditing);

    if (isEditing) {
        fetchAddressForEditing();
    }
}, []);

console.log(isEditing)

const fetchAddressForEditing = async () => {
    try {
        const token = JSON.parse(localStorage.getItem("scchs_Access"));
        const res = await fetch("https://admin.scchs.co.in/api/listalladdress", {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });
        const data = await res.json();
        if (data?.data?.length > 0) {
            setAddressDetail(data.data[0]); // assuming first address is default/editable
        }
    } catch (err) {
        console.error("Fetch error:", err);
    }
};


   




   const createAddressHandler = async (e) => {
    e.preventDefault();

    const errors = validateAddressForm(addressDetail);
    if (Object.keys(errors).length > 0) {
        setErrors(errors);
        return;
    }

    try {
        const token = JSON.parse(localStorage.getItem("scchs_Access"));
        const response = await fetch("https://admin.scchs.co.in/api/createaddress", {
            method: 'POST',
            headers: {
                "content-type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(addressDetail),
        });

        const formattedResponse = await response.json();
        console.log("Create Response:", formattedResponse);
        toast.success(formattedResponse?.message);
        // router.push("/storeorder");
    } catch (error) {
        console.error("Create Error:", error);
    }
};

    //    const updateAddressHandler = async (e) => {
    //   e.preventDefault();

    //   try {
    //     const existing = JSON.parse(localStorage.getItem("scchs_addressData"));

    //     const response = await fetch(
    //       `https://admin.scchs.co.in/api/updateaddress/${existing.id}`,
    //       {
    //         method: 'PUT',
    //         headers: {
    //           "Content-Type": "application/json",
    //           "Authorization": `Bearer ${JSON?.parse(localStorage.getItem("scchs_Access"))}`
    //         },
    //         body: JSON.stringify(existing), // Or addressDetail1 if you're editing via state
    //       }
    //     );

    //     const data = await response.json();
    //     console.log(data);
    //     alert(data?.message);

    //     localStorage.removeItem("scchs_editing");
    //     localStorage.setItem("scchs_addressData", JSON.stringify(addressDetail || existing));
    //     router.push("/storeorder");

    //   } catch (error) {
    //     console.error("Update Error:", error);
    //   }
    // };

   const updateAddressHandler = async (e) => {
    e.preventDefault();

    const errors = validateAddressForm(addressDetail);
    if (Object.keys(errors).length > 0) {
        setErrors(errors);
        return;
    }

    try {
        const token = JSON.parse(localStorage.getItem("scchs_Access"));
        if (!addressDetail?.id) {
            toast.error("Address ID missing. Cannot update.");
            return;
        }

        const response = await fetch(
            `https://admin.scchs.co.in/api/updateaddress/${addressDetail.id}`,
            {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify({addressDetail}),
            }
        );

        const data = await response.json();
        console.log(data);
        console.log(data)
        if (!response.ok) {
            toast.error(data?.message || "Update failed.");
            return;
        }

        toast.success(data?.message);
        router.push("/storeorder");
    } catch (error) {
        console.error("Update Error:", error);
        toast.error("Something went wrong.");
    }
};



    const [instaUser, setInstaUser] = useState(null);

    useEffect(() => {
        if (typeof window !== "undefined") { // Ensures code only runs in the browser
            const storedInstaUser = localStorage.getItem("scchs_User");
            setInstaUser(storedInstaUser ? JSON.parse(storedInstaUser) : null);
        }
    }, []);

    return (
        <div className={style.cartBody}>
            <HeadSEO
                title={"Shopping Cart"}
                description={"Shopping Cart"}
                image={false}
            />
            <div className="container">
                {
                    // datas[0]?.id ? <div className="">

                    //     <h1 style={{textAlign:"center"}}>Update Address</h1>

                    //     <div className="form_address suing">
                    //         <form className="form_add nameform-container" onSubmit={updateAddressHandler}>

                    //             <div className="">
                    //                 <div className="address_input nameform-group nams_group">
                    //                     <label htmlFor="first_name">First Name</label>
                    //                     <input id="first_name" name="first_name" onChange={handleAddressChange1} value={addressDetail1?.first_name ? addressDetail1?.first_name : datas[0]?.first_name} className="nameform-input" type="text" placeholder="First Name" />
                    //                 </div>
                    //                 <div className="address_input nameform-group nams_group">
                    //                     <label htmlFor="last_name">LastName</label>
                    //                     <input id="last_name" name="last_name" onChange={handleAddressChange1} value={addressDetail1?.last_name ? addressDetail1?.last_name : datas[0]?.last_name} type="text" placeholder="Landmark" className="nameform-input" />
                    //                 </div>
                    //             </div>
                    //             <div className="">

                    //                 <div className=" address_input nameform-group nams_group">
                    //                     <label htmlFor="address1">Address1</label>
                    //                     <textarea className="nameform-input" id="address1" name="address1" onChange={handleAddressChange1} value={addressDetail1?.address1 ? addressDetail1.address1 : datas[0]?.address1} placeholder="Address1" />
                    //                 </div>
                    //                 <div className="address_input nameform-group nams_group">
                    //                     <label htmlFor="address2">Address2</label>
                    //                     <textarea className="nameform-input" name="address2" onChange={handleAddressChange1} value={addressDetail1?.address2 ? addressDetail1?.address2 : datas[0]?.address2} placeholder="Address2" />
                    //                 </div>
                    //                 <div className="address_input nameform-group nams_group">
                    //                     <label htmlFor="country">Country</label>
                    //                     <select className="nameform-input" name="country" onChange={handleAddressChange1} value={addressDetail1.country ? addressDetail1?.country : datas[0]?.country}>
                    //                         <option value={""}>Select Country</option>
                    //                         <option>United State Of America</option>
                    //                     </select>
                    //                 </div>
                    //             </div>



                    //             <div className="">
                    //                 <div className="address_input nameform-group nams_group">
                    //                     <label htmlFor="phone">Phone</label>
                    //                     <input className="nameform-input" id="phone" name="phone" value={addressDetail1?.phone ? addressDetail1?.phone : datas[0]?.phone} onChange={handleAddressChange1} type="number" placeholder="Phone Number" />
                    //                 </div>
                    //                 <div className="address_input nameform-group nams_group">
                    //                     <label htmlFor="city">City</label>
                    //                     <input className="nameform-input" id="city" name="city" onChange={handleAddressChange1} value={addressDetail1?.city ? addressDetail1?.city : datas[0]?.city} type="text" placeholder="City" />
                    //                 </div>
                    //             </div>


                    //             <div className="">
                    //                 <div className="address_input nameform-group nams_group">
                    //                     <label htmlFor="state">State</label>
                    //                     <input className="nameform-input" id="state" name="state" onChange={handleAddressChange1} value={addressDetail1?.state ? addressDetail1?.state : datas[0]?.state} type="text" placeholder="State" />
                    //                 </div>
                    //                 <div className="address_input nameform-group nams_group">
                    //                     <label htmlFor="zipcode">ZipCode</label>
                    //                     <input className="nameform-input" id="zipcode" value={addressDetail1?.zipcode ? addressDetail1?.zipcode : datas[0]?.zipcode} name="zipcode" onChange={handleAddressChange1} type="text" placeholder="ZipCode" />
                    //                 </div>
                    //                 {/* <div className="address_input nameform-group nams_group">
                    //                     <label htmlFor="email">Email</label>
                    //                     <input className="nameform-input" id="email" value={addressDetail1?.email ? addressDetail1?.email : datas[0]?.email} name="email" onChange={handleAddressChange1} type="text" placeholder="email" />
                    //                 </div> */}
                    //             </div>


                    //             {/* <div className="address_flex">
                    //         <div className="address_input">
                    //             <input name="address_type" value={addressDetail?.address_type} onChange={handleAddressChange} type="text" placeholder="Address_type" />
                    //         </div>
                    //         <div className="address_input">
                    //             <input name="status" value={addressDetail?.status} onChange={handleAddressChange} type="text" placeholder="Status" />
                    //         </div>
                    //     </div> */}

                    //             <button type="submit" className="scchs_hj_btn">Update Address</button>

                    //         </form>

                    //     </div>
                    // </div>
                    //     :
                    <div className="form_address">
                        <h2 style={{ textAlign: "center" }}>Order Information</h2>
                        <form className="form_add nameform-container" onSubmit={isEditing ? updateAddressHandler : createAddressHandler}>

                            <div className="address_flex">
                                <div className="address_input nameform-group nams_group">
                                    <label htmlFor="first_name">First Name</label>
                                    <input className="nameform-input" id="first_name" name="first_name" onChange={handleAddressChange} value={addressDetail?.first_name} type="text" placeholder="First Name" />
                                    {errors.first_name && <p style={{ color: "red" }} className="error-text">{errors.first_name}</p>}
                                </div>
                                <div className="address_input nameform-group nams_group">
                                    <label htmlFor="last_name">LastName</label>
                                    <input className="nameform-input" id="last_name" name="last_name" onChange={handleAddressChange} value={addressDetail?.last_name} type="text" placeholder="Last Name" />
                                    {errors.last_name && <p style={{ color: "red" }} className="error-text">{errors.last_name}</p>}
                                </div>
                            </div>
                            <div className="address_flex">

                                <div className="address_input nameform-group nams_group">
                                    <label htmlFor="address1">Address1</label>
                                    <textarea className="nameform-input" id="address1" name="address1" onChange={handleAddressChange} value={addressDetail?.address1} placeholder="Address1" />
                                    {errors.address1 && <p style={{ color: "red" }} className="error-text">{errors.address1}</p>}
                                </div>
                                <div className="address_input nameform-group nams_group">
                                    <label htmlFor="address2">Address2</label>
                                    <textarea className="nameform-input" name="address2" onChange={handleAddressChange} value={addressDetail?.address2} placeholder="Address2" />
                                </div>
                                <div className="address_input nameform-group nams_group">
                                    <label htmlFor="country">Country</label>
                                    <select className="nameform-input" id="country" name="country" onChange={handleAddressChange} value={addressDetail?.country}>
                                        <option value={""}>Select Country</option>
                                        <option>United State Of America</option>
                                    </select>
                                    {errors.country && <p style={{ color: "red" }} className="error-text">{errors.country}</p>}
                                </div>
                            </div>



                            <div className="address_flex">
                                <div className="address_input nameform-group nams_group">
                                    <label htmlFor="phone">Phone</label>
                                    <input className="nameform-input" id="phone" name="phone" value={addressDetail?.phone} onChange={handleAddressChange} type="text" placeholder="Phone Number" />
                                    {errors.phone && <p style={{ color: "red" }} className="error-text">{errors.phone}</p>}
                                </div>
                                <div className="address_input nameform-group nams_group">
                                    <label htmlFor="state">State</label>
                                    {/* <input className="nameform-input" id="state" name="state" onChange={handleAddressChange} value={addressDetail?.state} type="text" placeholder="State" /> */}
                                    <select name="state" value={addressDetail.state} onChange={handleAddressChange} className="nameform-input">
                                        <option value="">Select State</option>
                                        {states.map((state) => (
                                            <option key={state.name} value={state.name}>
                                                {state.name}
                                            </option>
                                        ))}
                                    </select>

                                    {errors.state && <p style={{ color: "red" }} className="error-text">{errors.state}</p>}
                                </div>

                            </div>


                            <div className="address_flex">

                                <div className="address_input nameform-group nams_group">
                                    <label htmlFor="city">City</label>
                                    {/* <input className="nameform-input" id="city" name="city" onChange={handleAddressChange} value={addressDetail?.city} type="text" placeholder="City" /> */}
                                    <select name="city" value={addressDetail?.city} onChange={handleAddressChange} className="nameform-input">
                                        <option value="">Select City</option>
                                        {cities.map((city) => (
                                            <option key={city.name} value={city.name}>
                                                {city.name}
                                            </option>
                                        ))}
                                    </select>
                                    {errors.city && <p style={{ color: "red" }} className="error-text">{errors.city}</p>}
                                </div>
                                <div className="address_input nameform-group nams_group">
                                    <label htmlFor="zipcode">ZipCode</label>
                                    <input className="nameform-input" id="zipcode" value={addressDetail?.zipcode} name="zipcode" onChange={handleAddressChange} type="text" placeholder="ZipCode" />
                                    {errors.zipcode && <p style={{ color: "red" }} className="error-text">{errors.zipcode}</p>}
                                </div>
                                {/* <div className="address_input">
                                        <label htmlFor="email">Email</label>
                                        <input className="nameform-input" id="email" value={addressDetail?.email} name="email" onChange={handleAddressChange} type="email" placeholder="email" />
                                    </div> */}
                            </div>
                            <button type="submit" className="btn save_address scchs_hj_btn">{isEditing ? "Update address" : "Saved address"}</button>

                        </form>

                    </div>
                }


                {/* ===============update========= */}

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
