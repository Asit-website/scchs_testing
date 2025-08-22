import React, { useState, useEffect } from "react";
import GlobalHeaderFooter from "../utils/common/global-header-footer";
import { FiEye, FiEyeOff } from "react-icons/fi";

import { useRouter } from "next/navigation";

const UserProfile = () => {
  const [form, setForm] = useState({});
  const [isEdit] = useState(true); // Always edit mode
  const [loading, setLoading] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const [passwords, setPasswords] = useState({
    current_password: "",
    new_password: "",
    confirm_password: "",
  });
  const [showPasswords, setShowPasswords] = useState({
    current: false,
    new: false,
    confirm: false,
  });
  const toggleShow = (field) => {
    setShowPasswords((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  }

  useEffect(() => {
    const storedUser = localStorage.getItem("scchs_User");
    if (storedUser) {
      try {
        setForm(JSON.parse(storedUser));
      } catch (err) {
        console.error("Failed to parse stored user", err);
      }
    } else {
      fetchUserProfile();
    }
    setLoading(false);
  }, []);

  const fetchUserProfile = async () => {
    try {
      const res = await fetch("https://uat.scchs.co.in/api/user-profile", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${JSON?.parse(localStorage.getItem("scchs_Access"))}`,
        },
      });
      const data = await res.json();
      if (data.status) {
        setForm({ ...data.data });
        localStorage.setItem("scchs_User", JSON.stringify(data.data));
      }
    } catch (err) {
      console.error("Fetch error:", err);
    }
  };

  const validatePassword = () => {
    const { new_password, confirm_password } = passwords;
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

    if (!passwordRegex.test(new_password)) {
      alert("Password must include atleast one capital letter, one number, one special character (e.g., !@#$%^&*), and be at least 8 characters long.");
      return false;
    }

    if (new_password !== confirm_password) {
      alert("Passwords do not match.");
      return false;
    }

    return true;
  };

  const updatePasswordApi = async () => {
    const { current_password, new_password } = passwords;

    try {
      const res = await fetch("https://uat.scchs.co.in/api/login-password-update", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${JSON?.parse(localStorage.getItem("scchs_Access"))}`,
        },
        body: JSON.stringify({
          current_password,
          new_password,
        }),
      });

      const result = await res.json();
      if (result.status) {
        setShowPopup(true);
        setPasswords({
          current_password: "",
          new_password: "",
          confirm_password: "",
        });
        return true;
      } else {
        alert(result?.message || "Password update failed.");
        return false;
      }
    } catch (err) {
      console.error("Password update error:", err);
      return false;
    }
  };

  const updateProfileApi = async () => {
    if (form.email && !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(form.email)) {
      alert("Enter valid email address.");
      return;
    }

    if (passwords.new_password) {
      if (!validatePassword()) return;
      const success = await updatePasswordApi();
      if (!success) return;
    }

    const formData = new FormData();
    Object.entries(form).forEach(([key, val]) => {
      formData.append(key, val ?? "");
    });

    try {
      const res = await fetch("https://uat.scchs.co.in/api/profile-update", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${JSON?.parse(localStorage.getItem("scchs_Access"))}`,
        },
        body: formData,
      });

      const result = await res.json();
      if (result.status) {
        await fetchUserProfile();
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 3000);
      } else {
        alert(result?.message || "Profile update failed.");
      }
    } catch (err) {
      console.error("Update error:", err);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswords((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="profile-container">
      <h1 className="">User Profile</h1>
      <div className="profile-grid">
        {[
          ["Prefix", "prefix"],
          ["First Name", "first_name"],
          ["Middle Name", "middle"],
          ["Last Name", "last_name"],
          ["Preferred Name", "preferred_name"],
          ["Maiden Name", "maiden_name"],
          ["Use Maiden", "use_maiden"],
          ["Suffix", "suffix"],
          ["DOB Year", "dobYear"],
          ["Address", "address"],
          ["Address 2", "address2"],
          ["Postal Code", "postal_code"],
          ["Cell Phone", "cell_phone"],
          ["Mobile Number", "mobile_number"],
          ["Email", "email"],
          ["Username", "username"],
          ["Company", "company"],
          ["Website", "website"],
          ["City", "city"],
          ["State", "state"],
          ["Country", "country"],
        ].map(([label, key]) => (
          <div key={key} className="profile-field">
            <label className="font-medium">{label}</label>
            <input
              type="text"
              name={key}
              value={form?.[key] || ""}
              onChange={handleChange}
              className="border rounded px-2 py-1"
            />
          </div>
        ))}

        {/* Password Fields */}
        {/* Current Password */}
        <div className="profile-field col-span-2 relative">
          <label className="font-medium">Current Password</label>
          <input
            type={showPasswords.current ? "text" : "password"}
            name="current_password"
            value={passwords.current_password}
            onChange={handlePasswordChange}
            className="border rounded px-2 py-1 w-full pr-10"
          />
          <span
            className="newicon"
            onClick={() => toggleShow("current")}
          >
            {showPasswords.current ? <FiEyeOff /> : <FiEye />}
          </span>
        </div>

        {/* New Password */}
        <div className="profile-field col-span-2 relative">
          <label className="font-medium">New Password</label>
          <input
            type={showPasswords.new ? "text" : "password"}
            name="new_password"
            value={passwords.new_password}
            onChange={handlePasswordChange}
            className="border rounded px-2 py-1 w-full pr-10"
          />
          <span
            className="newicon"
            onClick={() => toggleShow("new")}
          >
            {showPasswords.new ? <FiEyeOff /> : <FiEye />}
          </span>
        </div>

        {/* Confirm Password */}
        <div className="profile-field col-span-2 relative">
          <label className="font-medium">Confirm Password</label>
          <input
            type={showPasswords.confirm ? "text" : "password"}
            name="confirm_password"
            value={passwords.confirm_password}
            onChange={handlePasswordChange}
            className="border rounded px-2 py-1 w-full pr-10"
          />
          <span
            className="newicon"
            onClick={() => toggleShow("confirm")}
          >
            {showPasswords.confirm ? <FiEyeOff /> : <FiEye />}
          </span>
        </div>

        

      </div>

      <div className="membership_info">
          <div className="membership_info_left">
            <svg width="34" height="34" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="22" cy="22" r="22" fill="#AB0635" />
              <path d="M21.616 25.672L21.208 20.776V13.96H23.296V20.776L22.888 25.672H21.616ZM23.488 30.664C23.152 31.016 22.736 31.192 22.24 31.192C21.744 31.192 21.32 31.016 20.968 30.664C20.632 30.312 20.464 29.888 20.464 29.392C20.464 28.912 20.64 28.496 20.992 28.144C21.344 27.776 21.76 27.592 22.24 27.592C22.72 27.592 23.136 27.776 23.488 28.144C23.84 28.496 24.016 28.912 24.016 29.392C24.016 29.888 23.84 30.312 23.488 30.664Z" fill="white" />
            </svg>

          </div>
          <div className="membership_info_right">
            <p><span>Password Note :</span>Password must include atleast one capital letter, one number, one special character (e.g., !@#$%^&*), and be at least 8 characters long.</p>
            {/* <p>.</p> */}
          </div>

        </div>

      <div className="button-row mt-4">
        <button
          onClick={updateProfileApi}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Save
        </button>
      </div>

      {showPopup && (
        <div className="mt-4 text-green-600 font-medium">Profile updated!</div>
      )}
    </div>
  );
};

export default UserProfile;

export async function getServerSideProps(context) {
  try {
    const globalSettings = await GlobalHeaderFooter();
    return {
      props: {
        page_content: false,
        navbar: globalSettings?.header,
        footer: globalSettings?.footer,
      },
    };
  } catch (error) {
    return {
      props: {
        page_content: false,
        navbar: false,
        footer: false,
      },
      notFound: true,
    };
  }
}
