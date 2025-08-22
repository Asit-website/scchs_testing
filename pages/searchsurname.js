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


export default function searchsurname(pageProp) {

    const router = useRouter();
    const { surname, cemetery_id } = router.query;

    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (surname) {
            let apiUrl = "";
            if (cemetery_id) {
                apiUrl = `https://uat.scchs.co.in/api/cemetert/surname/search?cemetery_id=${cemetery_id}&surname=${encodeURIComponent(surname)}`;
            } else {
                apiUrl = `https://uat.scchs.co.in/api/people/search?surname=${encodeURIComponent(surname)}`;
            }
            fetch(apiUrl)
                .then((res) => res.json())
                .then((data) => {
                    setSearchResults(data);
                    setLoading(false);
                });
        }
    }, [surname, cemetery_id]);

    console.log(searchResults[0])

    if (loading) return <div>Loading...</div>;

    return (
        <div className="page_shopping_list sop">
            <HeadSEO title={"memberlogin"} description={"this member is login"} image={null} />

            <HeadSEO1 />



            <div className="event_system_main event_system_main1">
                <div className="event_main">
                    <div style={{marginBottom:"10px"}} className="back-button-wrapper">
                        <button onClick={() => router.back()} className="back-btn">← Back</button>
                    </div>
                    <div className="cemetery-records-wrapper">
                        <h2>Search Results for: <strong>{surname}</strong></h2>

                        <div style={{ overflowX: "auto" }}>
                            <table className="cemetery-table w-full border-collapse border border-gray-300" style={{ minWidth: "800px" }}>
                                <thead>
                                    <tr className="bg-gray-100">
                                        <th className="px-4 py-2 border border-gray-300 text-left">Actions</th>
                                        <th className="px-4 py-2 border border-gray-300 text-left">Surname</th>
                                        <th className="px-4 py-2 border border-gray-300 text-left">Given Name</th>
                                        <th className="px-4 py-2 border border-gray-300 text-center">Age</th>
                                        <th className="px-4 py-2 border border-gray-300 text-center">Birth Year</th>
                                        <th className="px-4 py-2 border border-gray-300 text-center">Death Year</th>
                                        <th className=" dominate px-8 py-2 border border-gray-300 text-center ">Burial Year</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {searchResults.map((person) => (
                                        <tr key={person.id} className="hover:bg-gray-50">
                                            <td className="px-4 py-2 border border-gray-300 text-center">
                                                <Link href={`/cementrytabledetail?id=${person.cemetery_id}&personId=${person.index}`} className="text-blue-600 hover:text-blue-800">👁</Link>
                                            </td>
                                            <td className="px-4 py-2 border border-gray-300">{person.surname}</td>
                                            <td className="px-4 py-2 border border-gray-300">{person.name}</td>
                                            <td className="px-4 py-2 border border-gray-300 text-center">{person.age}</td>
                                            <td className="px-4 py-2 border border-gray-300 text-center">{person.birth_year}</td>
                                            <td className="px-4 py-2 border border-gray-300 text-center">{person.death_year}</td>
                                            <td className="dominate px-8 py-2 border border-gray-300 text-center ">{person.burial_year}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
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