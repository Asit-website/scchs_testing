import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import HeadSEO from "../components/common/Head/head";
import GlobalHeaderFooter from "../utils/common/global-header-footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeadSEO1 from "../components/common/Head/head1";
import Link from "next/link";
import { useRouter } from "next/router";



var settingsMorePhotos = {
    arrows: true,
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
};


export default function cementryrecord(pageProp) {

    const [counties, setCounties] = useState([]);
    const [cemeteries, setCemeteries] = useState([]);
    const [filteredCemeteries, setFilteredCemeteries] = useState([]);
    const [selectedCounty, setSelectedCounty] = useState("All");
    const [selectedCemetery, setSelectedCemetery] = useState("All");
    const [filteredRecords, setFilteredRecords] = useState([]);



    useEffect(() => {
        fetch("https://admin.scchs.co.in/api/counties")
            .then((res) => res.json())
            .then((data) => setCounties(data));
        fetch("https://admin.scchs.co.in/api/cemeteries")
            .then((res) => res.json())
            .then((data) => {
                setCemeteries(data);
                setFilteredCemeteries(data);
            });
    }, []);

    useEffect(() => {
        if (selectedCounty === "All") {
            setFilteredCemeteries(cemeteries);
        } else {
            const normalizedCounty = selectedCounty.toLowerCase().trim();
            setFilteredCemeteries(
                cemeteries.filter((cemetery) => {
                    const countyStr = String(
                        typeof cemetery.county === "object" ? cemetery.county?.name : cemetery.county || ""
                    ).toLowerCase().trim();

                    return countyStr === normalizedCounty;
                })
            );
        }
    }, [selectedCounty, cemeteries]);


    useEffect(() => {
        if (selectedCemetery === "All") {
            setFilteredRecords(filteredCemeteries);
        } else {
            const normalized = selectedCemetery.toLowerCase().trim();
            const filtered = filteredCemeteries.filter(c =>
                c.name.toLowerCase().trim() === normalized
            );
            setFilteredRecords(filtered);
        }
    }, [selectedCemetery, filteredCemeteries]);

    const [surname, setSurname] = useState("");
    const router = useRouter();

    const handleSearch = () => {
        if (surname.trim()) {
            router.push(`/searchsurname?surname=${surname}`);
        }
    };





    return (
        <div className="page_shopping_list sop">
            <HeadSEO title={"memberlogin"} description={"this member is login"} image={null} />

            <HeadSEO1 />



            <div className="event_system_main event_system_main1">
                <div className="event_main">
                    <div className="cemetery-record">
                        <div className="cemetery-wrapper">
                            <div className="cemetery-filters">
                                <div className="filter-group">
                                    <label htmlFor="county">Filter List by County / Region:</label>
                                    <select
                                        value={selectedCounty}
                                        onChange={(e) => setSelectedCounty(e.target.value)}
                                    >
                                        <option>All</option>
                                        {counties.map((county) => (
                                            <option key={county.id} value={county.name}>{county.name}</option>
                                        ))}
                                    </select>

                                    <label htmlFor="cemetery">Select Cemetery:</label>
                                    <select
                                        id="cemetery"
                                        value={selectedCemetery}
                                        onChange={(e) => setSelectedCemetery(e.target.value)}
                                    >
                                        <option>All</option>
                                        {filteredCemeteries.map((cemetery) => (
                                            <option key={cemetery.id} value={cemetery.name}>
                                                {cemetery.name}
                                            </option>
                                        ))}
                                    </select>

                                    <label htmlFor="surname">Search for Surname:</label>
                                    <div className="surname-search">
                                        <input value={surname}
                                            onChange={(e) => setSurname(e.target.value)} type="text" id="surname" />
                                        <button onClick={handleSearch} className="search-button">🔍</button>
                                    </div>
                                </div>
                            </div>

                            {/* <div className="cemetery-list">
                                {filteredCemeteries.slice(0, 4).map((cemetery) => (
                                    <div className="cemetery-item" key={cemetery.id}>
                                        <h3>{cemetery.name}</h3>
                                        <div className="cemetery-links">
                                            <a href="#">View Cemetery Details</a> |
                                            <a href="#"> View Cemetery Records</a>
                                        </div>
                                        {cemetery.short_description && (
                                            <p dangerouslySetInnerHTML={{ __html: cemetery?.short_description }} />


                                        )}
                                    </div>
                                ))}
                            </div> */}
                            <div className="cemetery-list">
                                {filteredRecords.map((cemetery) => (
                                    <div className="cemetery-item" key={cemetery.id}>
                                        <h3>{cemetery.name}</h3>
                                        <div className="cemetery-links">
                                            <Link href={`/cementrydetail?id=${cemetery.id}`}>View Cemetery Details</Link> |
                                            <Link href={`/cementrytable?id=${cemetery.id}`}> View Cemetery Records</Link>
                                        </div>
                                        {cemetery.short_description && (
                                            <p dangerouslySetInnerHTML={{ __html: cemetery?.short_description }} />


                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <style jsx>{`
        .cemetery-wrapper {
          background: white;
          padding: 20px;
        }

        .cemetery-filters {
          display: flex;
          justify-content: flex-start;
          flex-wrap: wrap;
          gap: 20px;
          margin-bottom: 20px;
        }

        .filter-group label {
          display: block;
          margin-top: 10px;
        }

        .surname-search {
          display: flex;
          align-items: center;
        }

        .surname-search input {
          padding: 4px;
          margin-right: 5px;
        }

        .search-button {
          padding: 4px 8px;
        }

        .cemetery-list {
          border-top: 1px solid #ccc;
          padding-top: 20px;
        }

        .cemetery-item {
          margin-bottom: 20px;
        }

        .cemetery-item h3 {
          color: #6d2c2c;
        }

        .cemetery-links a {
          color: green;
          text-decoration: none;
          margin-right: 5px;
        }
      `}</style>
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