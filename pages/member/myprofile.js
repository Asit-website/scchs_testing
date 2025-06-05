import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import HeadSEO from "../../components/common/Head/head";
import GlobalHeaderFooter from "../../utils/common/global-header-footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeadSEO1 from "../../components/common/Head/head1";
import { toast } from "react-toastify";



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

    // const [activeTab, setActiveTab] = useState("Member Info");

    const [activeTab, setActiveTab] = useState(tabList[0]);

    useEffect(() => {
        const savedTab = localStorage.getItem("activeTab");
        if (savedTab && tabList.includes(savedTab)) {
            setActiveTab(savedTab);
        }
    }, []);

    const handleTabClick = (tab) => {
        setActiveTab(tab);
        localStorage.setItem("activeTab", tab);
    };


    const [memberships, setMemberships] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [instaUser, setInstaUser] = useState(null);

    const [displayData1, setDisplayData1] = useState({});

    useEffect(() => {
        const storedUser = localStorage.getItem("scchs_User");
        if (storedUser) {
            setInstaUser(JSON.parse(storedUser));
        }
    }, []);

    useEffect(() => {
        if (!instaUser?.id) return;

        const fetchMemberships = async () => {
            try {
                const res = await fetch(`https://admin.scchs.co.in/api/user-memberships/${instaUser.id}`);
                if (!res.ok) {
                    throw new Error('Failed to fetch');
                }
                const json = await res.json();
                console.log(json)
                setMemberships(json.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchMemberships();
    }, [instaUser]);

    const [donations, setDonations] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("https://admin.scchs.co.in/api/donaction/payment/history", {
                    method: "GET",
                    headers: {
                        'Content-Type': 'application/json',
                        "Authorization": `Bearer ${JSON?.parse(localStorage.getItem("scchs_Access"))}`
                    }
                });
                const data = await res.json();
                console.log(data)
                setDonations(data.data);
            } catch (error) {
                console.error("Failed to fetch donation history", error);
            }
        };

        fetchData();
    }, []);

    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState({
        seasonal: '',
        from_year: '',
        to_year: '',
        from_day_month: '',
        to_day_month: '',
        phone: '',
        intl_phone: '',
        preferred: '',
        address: '',
        address2: '',
        city: '',
        state: '',
        postal_code: '',
        email: ''
    });

    const userId = instaUser?.id;


    const [open1, setOpen1] = useState(false);
    const [formData1, setFormData1] = useState({
        address: '',
        address2: '',
        mobile_number: '',
        cell_phone: '',
        int_phone: '',
        city: '',
        preferred: '',
        state: '',
        postal_code: '',
        email: '',
        website: '',
        country: ''

    });

    const handleEditClick1 = async () => {
        setOpen1(true);
        try {
            const res = await fetch('https://admin.scchs.co.in/api/contact-info', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', "Authorization": `Bearer ${JSON?.parse(localStorage.getItem("scchs_Access"))}` },
                body: JSON.stringify({ userId })
            });

            if (res.ok) {
                const data = await res.json();
                if (data.data) setFormData1(data.data);
            }
        } catch (err) {
            console.error('Fetch error:', err);
        }
    };

    const handleChange1 = (e) => {
        setFormData1(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSave1 = async () => {
        try {
            const res = await fetch('https://admin.scchs.co.in/api/contact-info', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', "Authorization": `Bearer ${JSON?.parse(localStorage.getItem("scchs_Access"))}` },
                body: JSON.stringify({ userId, ...formData1 })
            });

            if (res.ok) {
                toast.success('Saved successfully!');
                window.location.href = "/member/myprofile"
                setOpen1(false);
            } else {
                toast.success('Failed to save.');
            }
        } catch (err) {
            console.error('Save error:', err);
        }
    };

    const handleEditClick = async () => {
        setOpen(true);
        try {
            const res = await fetch(`https://admin.scchs.co.in/api/alt-contact-info`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', "Authorization": `Bearer ${JSON?.parse(localStorage.getItem("scchs_Access"))}` },
                body: JSON.stringify({ userId })
            });

            if (res.ok) {
                const result = await res.json();
                if (result.data) setFormData(result.data); // fix: use result.data
            }
        } catch (err) {
            console.error('Fetch error:', err);
        }
    };
    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };
    const handleSave = async () => {
        try {
            const res = await fetch(`https://admin.scchs.co.in/api/alt-contact-info`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', "Authorization": `Bearer ${JSON?.parse(localStorage.getItem("scchs_Access"))}` },
                body: JSON.stringify({ userId, ...formData })
            });

            if (res.ok) {
                toast.success('Saved successfully!');
                setOpen(false);
            } else {
                toast.error('Failed to save.');
            }
        } catch (err) {
            console.error('Save error:', err);
        }
    };





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
                                {
                                    memberships?.map((val, index) => {
                                        return (
                                            <div key={index} className="info-card">
                                                <p><strong>Membership Plan :</strong>{val?.plan.name}</p>
                                                <p><strong>Membership # :</strong>{val?.membership_plan_id}</p>
                                            </div>
                                        )
                                    })
                                }

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
                                        <div><strong className="lable1">Expiration Date  :</strong>{memberships[0]?.end_date}</div>
                                        <div><strong className="lable1">Amount Paid       :</strong>{memberships[0]?.plan?.monthly_price}$</div>
                                        <div><strong className="lable1">Donation             :</strong>{donations[0]?.donation_amount}</div>
                                        <div><strong className="lable1">Date                      :</strong>{new Date(donations[0]?.created_at).toLocaleString("en-US", {
                                            year: "numeric",
                                            month: "long",
                                            day: "numeric",
                                            // hour: "numeric",
                                            // minute: "2-digit",
                                            // hour12: true,
                                        })}</div>
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
                                    onClick={() => handleTabClick(tab)}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>
                        {
                            activeTab === "Member Info" &&
                            <div className="card cardissso">
                                <div className="grid-2col">
                                    <div><strong className="lable1">Member Active:</strong>{memberships[0]?.status === "active" ? "Yes" : "No"}</div>
                                    {/* <div><strong className="lable1">Address :</strong> Yes <span className="edit-icon edit-icon1"><img width={24} height={24} src="https://res.cloudinary.com/dgif730br/image/upload/v1744636032/Mask_group_gzjnak.png" /></span></div> */}
                                    <div><strong className="lable1">Join Date:</strong>{memberships[0]?.start_date}</div>
                                    <div><strong className="lable1">Prefix:</strong>{memberships[0]?.prefix}</div>
                                    <div><strong className="lable1">First Name:</strong>{memberships[0]?.user.first_name}</div>
                                    <div><strong className="lable1">Last Name:</strong>{memberships[0]?.user.last_name}</div>
                                    <div><strong className="lable1">Preferred Name:</strong>{memberships[0]?.user.preferred_name}</div>
                                    <div><strong className="lable1">Middle:</strong>{memberships[0]?.user.middle}</div>
                                    <div><strong className="lable1">Maiden Name:</strong>{memberships[0]?.user.maiden_name}</div>
                                    {/* maiden_name */}
                                    <div><strong className="lable1">Use Maiden Name:</strong>{memberships[0]?.user.maiden_name}</div>
                                    <div><strong className="lable1">Suffix:</strong>{memberships[0]?.user.suffix}</div>
                                    <div><strong className="lable1">Photo:</strong> No</div>
                                    <div><strong className="lable1">Date of birth:</strong>{memberships[0]?.user.dobMonth} {memberships[0]?.user.dob}{memberships[0]?.user.dobYear}</div>
                                </div>
                            </div>
                        }
                        {
                            activeTab === "Contact Info" && <div className="card cardissso">
                                <div className="grid-2col">
                                    <div><strong className="lable1">Address:</strong>{memberships[0]?.user?.address}</div>
                                    <div><strong className="lable1">Phone :</strong> {memberships[0]?.user?.mobile_number} <span onClick={handleEditClick1} className="edit-icon edit-icon1"><img width={24} height={24} src="https://res.cloudinary.com/dgif730br/image/upload/v1744636032/Mask_group_gzjnak.png" /></span></div>
                                    <div>
                                        <div><strong className="lable1">Address 2:</strong>{memberships[0]?.user?.address2}  </div>
                                        <div><strong className="lable1">Cell Phone:</strong> {memberships[0]?.user.cell_phone}</div>
                                    </div>

                                    <div><strong className="lable1">City:</strong>{memberships[0]?.user?.city}</div>
                                    <div><strong className="lable1">Int'l. Phone:</strong>{memberships[0]?.user?.
                                        int_phone
                                    }</div>
                                    <div><strong className="lable1">State / Province:</strong>{memberships[0]?.user?.
                                        state}</div>
                                    <div><strong className="lable1">Preferred #:</strong>{memberships[0]?.user?.
                                        preferred
                                    }</div>
                                    {/* preferred */}
                                    <div><strong className="lable1">Postal Code:</strong>{memberships[0]?.user?.
                                        postal_code
                                    }</div>
                                    <div><strong className="lable1">Country:</strong>{memberships[0]?.user?.country}</div>
                                    <div><strong className="lable1">Email:</strong>{memberships[0]?.user?.email}</div>
                                    <div><strong className="lable1">Website:</strong>{memberships[0]?.user?.website}</div>

                                </div>
                            </div>
                        }

                        {open1 && (
                            <div className="alt-popup-overlay">
                                <div className="alt-popup-content">
                                    <h2 className="alt-popup-title">Edit Contact Info</h2>
                                    <div className="alt-popup-form">
                                        <div className="alt-popup-field">
                                            <label>Address:</label>
                                            <input type="text" name="address" value={formData1?.address} onChange={handleChange1} className="alt-popup-input" />
                                        </div>
                                        <div className="alt-popup-field">
                                            <label>Phone:</label>
                                            <input type="text" name="mobile_number" value={formData1?.mobile_number} onChange={handleChange1} className="alt-popup-input" />
                                        </div>
                                        <div className="alt-popup-field">
                                            <label>Address 2:</label>
                                            <input type="text" name="address2" value={formData1?.address2} onChange={handleChange1} className="alt-popup-input" />
                                        </div>
                                        <div className="alt-popup-field">
                                            <label>Cell Phone:</label>
                                            <input type="text" name="cell_phone" value={formData1?.cell_phone} onChange={handleChange1} className="alt-popup-input" />
                                        </div>
                                        <div className="alt-popup-field">
                                            <label>City:</label>
                                            <input type="text" name="city" value={formData1?.city} onChange={handleChange1} className="alt-popup-input" />
                                        </div>
                                        <div className="alt-popup-field">
                                            <label>Int'l Phone:</label>
                                            <input type="text" name="int_phone" value={formData1?.int_phone} onChange={handleChange1} className="alt-popup-input" />
                                        </div>
                                        <div className="alt-popup-field">
                                            <label>State:</label>
                                            <input type="text" name="state" value={formData1?.state} onChange={handleChange1} className="alt-popup-input" />
                                        </div>
                                        <div className="alt-popup-field">
                                            <label>Preferred #:</label>
                                            <input type="text" name="preferred" value={formData1?.preferred} onChange={handleChange1} className="alt-popup-input" />
                                        </div>
                                        <div className="alt-popup-field">
                                            <label>Postal Code:</label>
                                            <input type="text" name="postal_code" value={formData1?.postal_code} onChange={handleChange1} className="alt-popup-input" />
                                        </div>
                                        <div className="alt-popup-field">
                                            <label>Country:</label>
                                            <input type="text" name="country" value={formData1?.country} onChange={handleChange1} className="alt-popup-input" />
                                        </div>
                                        <div className="alt-popup-field">
                                            <label>Email:</label>
                                            <input type="email" name="email" value={formData1?.email} onChange={handleChange1} className="alt-popup-input" />
                                        </div>
                                        <div className="alt-popup-field">
                                            <label>Website:</label>
                                            <input type="text" name="website" value={formData1?.website} onChange={handleChange1} className="alt-popup-input" />
                                        </div>
                                    </div>
                                    <div className="alt-popup-buttons">
                                        <button onClick={() => setOpen1(false)} className="alt-cancel-btn">Cancel</button>
                                        <button onClick={handleSave1} className="alt-save-btn">Save</button>
                                    </div>
                                </div>
                            </div>
                        )}
                        {
                            activeTab === "Alt. Contact Info" && <div className="card cardissso">
                                <div className="grid-2col">
                                    <div><strong className="lable1">Seasonal Use:</strong>{memberships[0]?.user.
                                        alt_contact_infos[0]?.seasonal}</div>
                                    <div><strong className="lable1">Address :</strong> {memberships[0]?.user.
                                        alt_contact_infos[0]?.address} <span onClick={handleEditClick} className="edit-icon edit-icon1"><img width={24} height={24} src="https://res.cloudinary.com/dgif730br/image/upload/v1744636032/Mask_group_gzjnak.png" /></span></div>
                                    <div>
                                        <div><strong className="lable1">From:</strong>{memberships[0]?.user.
                                            alt_contact_infos[0]?.from_day_month} {memberships[0]?.user.
                                                alt_contact_infos[0]?.from_year} </div>
                                        <div><strong className="lable1">To:</strong> {memberships[0]?.user.
                                            alt_contact_infos[0]?.to_day_month} {memberships[0]?.user.
                                                alt_contact_infos[0]?.to_year}</div>
                                    </div>

                                    <div><strong className="lable1">Phone:</strong>{memberships[0]?.user.
                                        alt_contact_infos[0]?.phone}</div>
                                    <div><strong className="lable1">Address 2:</strong>{memberships[0]?.user.
                                        alt_contact_infos[0]?.address2}</div>
                                    <div><strong className="lable1">Int'l Phone:</strong>{memberships[0]?.user.
                                        alt_contact_infos[0]?.intl_phone}</div>
                                    <div><strong className="lable1">City:</strong>{memberships[0]?.user.
                                        alt_contact_infos[0]?.city}</div>
                                    {/* preferred */}
                                    <div><strong className="lable1">Preferred #:</strong>{memberships[0]?.user.
                                        alt_contact_infos[0]?.preferred}</div>
                                    <div><strong className="lable1">State / Province:</strong>{memberships[0]?.user.
                                        alt_contact_infos[0]?.city}</div>
                                    <div><strong className="lable1">Postal Code:</strong>{memberships[0]?.user.
                                        alt_contact_infos[0]?.postal_code}</div>
                                    <div><strong className="lable1">Country:</strong> No</div>
                                    <div><strong className="lable1">Email:</strong>{memberships[0]?.user.
                                        alt_contact_infos[0]?.email}</div>
                                </div>
                            </div>
                        }


                        {open && (
                            <div className="alt-popup-overlay">
                                <div className="alt-popup-content">
                                    <h2 className="alt-popup-title">Edit Alt Contact Info</h2>
                                    <div className="alt-popup-form">
                                        <div className="alt-popup-field">
                                            <label>Seasonal Use:</label>
                                            <input
                                                type="text"
                                                name="seasonal"
                                                value={formData.seasonal}
                                                onChange={handleChange}
                                                className="alt-popup-input"
                                            />
                                        </div>

                                        <div className="alt-popup-field">
                                            <label>From Year:</label>
                                            <input
                                                type="text"
                                                name="from_year"
                                                value={formData.from_year}
                                                onChange={handleChange}
                                                className="alt-popup-input"
                                            />
                                        </div>

                                        <div className="alt-popup-field">
                                            <label>To Year:</label>
                                            <input
                                                type="text"
                                                name="to_year"
                                                value={formData.to_year}
                                                onChange={handleChange}
                                                className="alt-popup-input"
                                            />
                                        </div>

                                        <div className="alt-popup-field">
                                            <label>From Day/Month:</label>
                                            <input
                                                type="text"
                                                name="from_day_month"
                                                value={formData.from_day_month}
                                                onChange={handleChange}
                                                className="alt-popup-input"
                                            />
                                        </div>

                                        <div className="alt-popup-field">
                                            <label>To Day/Month:</label>
                                            <input
                                                type="text"
                                                name="to_day_month"
                                                value={formData.to_day_month}
                                                onChange={handleChange}
                                                className="alt-popup-input"
                                            />
                                        </div>

                                        <div className="alt-popup-field">
                                            <label>Phone:</label>
                                            <input
                                                type="text"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="alt-popup-input"
                                            />
                                        </div>

                                        <div className="alt-popup-field">
                                            <label>Int'l Phone:</label>
                                            <input
                                                type="text"
                                                name="intl_phone"
                                                value={formData.intl_phone}
                                                onChange={handleChange}
                                                className="alt-popup-input"
                                            />
                                        </div>

                                        <div className="alt-popup-field">
                                            <label>Preferred #:</label>
                                            <input
                                                type="text"
                                                name="preferred"
                                                value={formData.preferred}
                                                onChange={handleChange}
                                                className="alt-popup-input"
                                            />
                                        </div>

                                        <div className="alt-popup-field">
                                            <label>Address:</label>
                                            <input
                                                type="text"
                                                name="address"
                                                value={formData.address}
                                                onChange={handleChange}
                                                className="alt-popup-input"
                                            />
                                        </div>

                                        <div className="alt-popup-field">
                                            <label>Address 2:</label>
                                            <input
                                                type="text"
                                                name="address2"
                                                value={formData.address2}
                                                onChange={handleChange}
                                                className="alt-popup-input"
                                            />
                                        </div>

                                        <div className="alt-popup-field">
                                            <label>City:</label>
                                            <input
                                                type="text"
                                                name="city"
                                                value={formData.city}
                                                onChange={handleChange}
                                                className="alt-popup-input"
                                            />
                                        </div>

                                        <div className="alt-popup-field">
                                            <label>State / Province:</label>
                                            <input
                                                type="text"
                                                name="state"
                                                value={formData.state}
                                                onChange={handleChange}
                                                className="alt-popup-input"
                                            />
                                        </div>

                                        <div className="alt-popup-field">
                                            <label>Postal Code:</label>
                                            <input
                                                type="text"
                                                name="postal_code"
                                                value={formData.postal_code}
                                                onChange={handleChange}
                                                className="alt-popup-input"
                                            />
                                        </div>

                                        <div className="alt-popup-field">
                                            <label>Email:</label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="alt-popup-input"
                                            />
                                        </div>
                                    </div>


                                    <div className="alt-popup-buttons">
                                        <button onClick={() => setOpen(false)} className="alt-cancel-btn">Cancel</button>
                                        <button onClick={handleSave} className="alt-save-btn">Save</button>
                                    </div>
                                </div>
                            </div>
                        )}

                        {
                            activeTab === "Custom Data" && <div className="card cardissso">
                                <div className="grid-2col">
                                    <div><strong className="lable1">Company Name:</strong></div>
                                </div>
                            </div>
                        }
                        {
                            activeTab === "Member Setting" && <div>
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
                        }
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