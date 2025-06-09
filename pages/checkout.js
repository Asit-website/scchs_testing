import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import HeadSEO from "../components/common/Head/head";
import GlobalHeaderFooter from "../utils/common/global-header-footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeadSEO1 from "../components/common/Head/head1";
import Link from "next/link";



var settingsMorePhotos = {
    arrows: true,
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
};

const staticItems = [
  { id: "home", title: "HOME", link: "/" },
  { id: "contact", title: "CONTACT", link: "/contact" },
  { id: "donate", title: "DONATE", link: "/donate" },
];

const navbarItems = [
    {
        parentId: "1",
        parentItems: { title: "ABOUT US", link: "/about-us" },
        subItems: [
            { id: "1-1", title: "Mission", link: "/about-us/mission" },
            { id: "1-2", title: "Vision", link: "/about-us/vision" },
            { id: "1-3", title: "Team", link: "/about-us/team" },
        ],
    },
    {
        parentId: "2",
        parentItems: { title: "RESEARCH", link: "/research-1" },
        subItems: [
            { id: "2-1", title: "Papers", link: "/research-1/papers" },
            { id: "2-2", title: "Projects", link: "/research-1/projects" },
        ],
    },
    {
        parentId: "3",
        parentItems: { title: "EVENTS", link: "/event" },
        subItems: [],
    },
    {
        parentId: "4",
        parentItems: { title: "STORE", link: "/store" },
        subItems: [],
    },
];


export default function checkout(pageProp) {

    const [query, setQuery] = useState('');
    const [submittedQuery, setSubmittedQuery] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmittedQuery(query); // show iframe only when search is submitted
    };

      const [menuOpen, setMenuOpen] = useState(false);
  const [expanded, setExpanded] = useState(null);




    return (
        <div className="page_shopping_list sop">
            <HeadSEO title={"memberlogin"} description={"this member is login"} image={null} />

            <HeadSEO1 />

            <div style={{ position: "relative" }}>
                <iframe
                    src={`https://scchs.pastperfectonline.com/Search?search_criteria=${encodeURIComponent(
                        submittedQuery
                    )}&onlyimages=false`}
                    className="pp-iframe"
                // style={{ width: "100%", height: "600px" }}
                />
                {/* <a
    href="https://yourcustomlink.com"
    target="_blank"
    rel="noopener noreferrer"
    className="logo-override"
    style={{
      position: "absolute",
      top: "20px",
      left: "20px",
      width: "100px",
      height: "50px",
      zIndex: 10,
    }}
  >
    hiiuuuuu
  
  </a> */}
            </div>

            {/* <div className="event_system_main event_system_main1">
                <div className="event_main">
                    <div className="pp-container">
                        <h1 className="pp-heading">PastPerfect Keyword Search</h1>

                        <form onSubmit={handleSubmit} className="pp-form">
                            <input
                                type="text"
                                placeholder="Enter keyword"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                className="pp-input"
                            />
                            <button type="submit" className="pp-button">
                                Search
                            </button>
                        </form>

                        {submittedQuery && (
                        


                    </div>
                </div>
            </div> */}

           <div className="mobile-navbar-wrapper">
      <div className="mobile-navbar-header">
        <h1>SCCHS</h1>
        <button
          className="mobile-navbar-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✖" : "☰"}
        </button>
      </div>

      <div className={`mobile-navbar-menu ${menuOpen ? "open" : ""}`}>
        {/* Static Items */}
        {staticItems.map((item) => (
          <div key={item.id} className="mobile-navbar-item">
            <div className="mobile-navbar-parent">
              <a href={item.link}>{item.title}</a>
            </div>
          </div>
        ))}

        {/* Dynamic Items */}
        {navbarItems.map((item) => (
          <div key={item.parentId} className="mobile-navbar-item">
            <div
              className="mobile-navbar-parent"
              onClick={() =>
                setExpanded((prev) =>
                  prev === item.parentId ? null : item.parentId
                )
              }
            >
              <a href={item.parentItems.link}>{item.parentItems.title}</a>
              {item.subItems.length > 0 && (
                <span>{expanded === item.parentId ? "▲" : "▼"}</span>
              )}
            </div>
            <div
              className={`mobile-navbar-submenu ${
                expanded === item.parentId ? "expanded" : ""
              }`}
            >
              {item.subItems.map((sub) => (
                <a key={sub.id} href={sub.link}>
                  {sub.title}
                </a>
              ))}
            </div>
          </div>
        ))}
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