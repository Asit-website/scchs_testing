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


export default function cementrydetail(pageProp) {

    const router = useRouter();
    const { id } = router.query;

    const [cemetery, setCemetery] = useState(null);

    useEffect(() => {
        if (id) {
            fetch(`https://admin.scchs.co.in/api/cemeteries/${id}`)
                .then((res) => res.json())
                .then((data) => {
                    setCemetery(data);
                });
        }
        console.log(id);
    }, [id]);

    const [surname, setSurname] = useState("");
    
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
                    <div className="cementry_record">
                        <div className="cemetery-wrapper">
                            <div className="cemetery-filters">
                                <div className="filter-group">
                                    {/* <label htmlFor="county">Filter List by County / Region:</label>
                  <select id="county">
                    <option>All</option>
                    <option>St. Charles</option>
                    <option>St. Louis</option>
                  </select>

                  <label htmlFor="cemetery">Select Cemetery:</label>
                  <select id="cemetery">
                    <option>All</option>
                    <option>Abington</option>
                  </select> */}

                                    <label htmlFor="surname">Search for Surname:</label>
                                    <div className="surname-search">
                                        <input value={surname}
                                            onChange={(e) => setSurname(e.target.value)} type="text" id="surname" />
                                        <button onClick={handleSearch} className="search-button">🔍</button>
                                    </div>
                                </div>


                            </div>

                            <div className="cemetery-list">
                                <div className="cemetery-item">
                                    <h3>{cemetery?.name}</h3>
                                    <div className="cemetery-links">
                                        <Link href={`/cementrytable?id=${id}`}>View Cemetery Records</Link> |
                                        <Link href="/cementryrecord"> Return to Cemetery Listings</Link>
                                    </div>
                                    <p dangerouslySetInnerHTML={{ __html: cemetery?.short_description }} />
                                    <p dangerouslySetInnerHTML={{ __html: cemetery?.description }} />
                                </div>




                            </div>

                            <style jsx>{`
        .cemetery-wrapper {
          padding: 20px;
        }

        .cemetery-filters {
          display: flex;
          justify-content: space-between;
          margin-bottom: 20px;
          flex-wrap: wrap;
          gap: 20px;
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

        .filter-controls div {
          margin-bottom: 10px;
        }

        .record-text {
          margin-top: 10px;
          font-weight: bold;
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

        .pagination button {
          margin: 0 5px;
          padding: 4px 8px;
          background: #eee;
          border: 1px solid #ccc;
          cursor: pointer;
        }

        .pagination button.active {
          font-weight: bold;
          background: #ddd;
        }
      `}</style>
                        </div>
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