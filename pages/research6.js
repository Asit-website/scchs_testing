import React from 'react'
import Link from "next/link";
import { useState } from 'react';
import GlobalHeaderFooter from "../utils/common/global-header-footer";

const data = [
    {
        title: "Volume 04 No 1",
        description: "Jan 1986, 12 pages, 2 MB",
        uploaded: "19 May 2016",
        pdf: "https://scchs.org/upload/St__Charles_Heritage/Vol4No1_1462029162.pdf",
    },
    {
        title: "Volume 04 No 2",
        description: "April 1986, 16 pages, 2.24 MB",
        uploaded: "19 May 2016",
        pdf: "https://scchs.org/upload/St__Charles_Heritage/Vol4No2_1462029272.pdf",
    },
    {
        title: "Volume 04 No 3",
        description: "July 1986, 16 pages, 2.7 MB",
        uploaded: "19 May 2016",
        pdf: "https://scchs.org/upload/St__Charles_Heritage/Vol4No3_1462029326.pdf",
    },
    {
        title: "Volume 04 No 4",
        description: "October 1986, 12 pages, 1.9 MB",
        uploaded: "19 May 2016",
        pdf: "https://scchs.org/upload/St__Charles_Heritage/Vol4No4_1462029344.pdf",
    },
    {
        title: "Volume 05 No 1",
        description: "January 1987, 16 pages, 2.6 MB",
        uploaded: "19 May 2016",
        pdf: "https://scchs.org/upload/St__Charles_Heritage/Vol5No1_1462029367.pdf",
    },
    {
        title: "Volume 05 No 2",
        description: "April 1987, 16 pages, 2.68 MB",
        uploaded: "20 May 2016",
        pdf: "https://scchs.org/upload/St__Charles_Heritage/Vol5No2_1462029400.pdf",
    },
    {
        title: "Volume 05 No 3",
        description: "July 1987, 20 pages, 3.66 MB",
        uploaded: "20 May 2016",
        pdf: "https://scchs.org/upload/St__Charles_Heritage/Vol5No3_1462029421.pdf",
    },
    {
        title: "Volume 05 No 4",
        description: "October 1987, 16 pages, 2.74 MB",
        uploaded: "20 May 2016",
        pdf: "https://scchs.org/upload/St__Charles_Heritage/Vol5No4_1462029440.pdf",
    },
    {
        title: "Volume 06 No 1",
        description: "January 1988, 20 pages, 3.59 MB",
        uploaded: "20 May 2016",
        pdf: "https://scchs.org/upload/St__Charles_Heritage/Vol6No1_1462029471.pdf",
    },
    {
        title: "Volume 06 No 2",
        description: "April 1988, 24 pages, 4.24 MB",
        uploaded: "20 May 2016",
        pdf: "https://scchs.org/upload/St__Charles_Heritage/Vol6No2_1462029495.pdf",
    },
    {
        title: "https://scchs.org/upload/St__Charles_Heritage/Vol6No3_1462029520.pdf",
        description: "July 1988, 16 pages, 3.17 MB",
        uploaded: "20 May 2016",
        pdf: "/pdfs/placeholder.pdf",
    },
    {
        title: "Volume 06 No 4",
        description: "October 1988, 24 pages, 4.54 MB",
        uploaded: "20 May 2016",
        pdf: "https://scchs.org/upload/St__Charles_Heritage/Vol6No4_1462029691.pdf",
    },
    {
        title: "Volume 07 No 1",
        description: "January 1989, 20 pages, 3.93 MB",
        uploaded: "20 May 2016",
        pdf: "https://scchs.org/upload/St__Charles_Heritage/Vol7No1_1462029725.pdf",
    },
    {
        title: "Volume 07 No 2",
        description: "April 1989, 32 pages, 7.53 MB",
        uploaded: "21 April 2019",
        pdf: "https://scchs.org/upload/St__Charles_Heritage/Vol7No2_1555857833.pdf",
    },
    {
        title: "Volume 07 No 3",
        description: "July 1989, 28 pages, 8.43 MB",
        uploaded: "21 April 2019",
        pdf: "https://scchs.org/upload/St__Charles_Heritage/Vol7No3_1555858392.pdf",
    },
    {
        title: "Volume 07 No 4",
        description: "October 1989, 24 pages, 7.21 MB",
        uploaded: "21 April 2019",
        pdf: "/https://scchs.org/upload/St__Charles_Heritage/Vol7No4_1555857969.pdf",
    },
    {
        title: "Volume 08 No 1",
        description: "January 1990, 28 pages, 5.35 MB",
        uploaded: "20 May 2016",
        pdf: "https://scchs.org/upload/St__Charles_Heritage/Vol8No1_1462029789.pdf",
    },
    {
        title: "Volume 08 No 2",
        description: "April 1990, 28 pages, 5.49 MB",
        uploaded: "20 May 2016",
        pdf: "https://scchs.org/upload/St__Charles_Heritage/Vol8No2_1462029818.pdf",
    },
    {
        title: "Volume 08 No 3",
        description: "July 1990, 32 pages, 6.14 MB",
        uploaded: "20 May 2016",
        pdf: "https://scchs.org/upload/St__Charles_Heritage/Vol8No3_1462029848.pdf",
    },
    {
        title: "Volume 08 No 4",
        description: "October 1990, 32 pages, 6.04 MB",
        uploaded: "20 May 2016",
        pdf: "https://scchs.org/upload/St__Charles_Heritage/Vol8No4_1462029876.pdf",
    },
    {
        title: "Volume 09 No 1",
        description: "January 1991, 28 pages, 5.19 MB",
        uploaded: "20 May 2016",
        pdf: "https://scchs.org/upload/St__Charles_Heritage/Vol9No1_1462029953.pdf",
    },
    {
        title: "Volume 09 No 2",
        description: "April 1991, 28 pages, 5.06 MB",
        uploaded: "20 May 2016",
        pdf: "https://scchs.org/upload/St__Charles_Heritage/Vol9No2_1462029990.pdf",
    },
    {
        title: "Volume 09 No 3",
        description: "July 1991, 28 pages, 4.37 MB",
        uploaded: "20 May 2016",
        pdf: "https://scchs.org/upload/St__Charles_Heritage/Vol9No3_1462030015.pdf",
    },
    {
        title: "Volume 09 No 4",
        description: "October 1991, 36 pages, 5.35 MB",
        uploaded: "20 May 2016",
        pdf: "https://scchs.org/upload/St__Charles_Heritage/Vol9No4_1462030044.pdf",
    },
    {
        title: "Volume 10",
        description: "1992, 116 pages, 20.3 MB",
        uploaded: "30 April 2016",
        pdf: "https://scchs.org/upload/St__Charles_Heritage/Vol10_1462030229.pdf",
    },
    {
        title: "Volume 11",
        description: "1993, 132 pages, 22.6 MB",
        uploaded: "30 April 2016",
        pdf: "https://scchs.org/upload/St__Charles_Heritage/Vol11_1462030574.pdf",
    },
    {
        title: "Volume 12",
        description: "1994, 184 pages, 28.3 MB",
        uploaded: "30 April 2016",
        pdf: "https://scchs.org/upload/St__Charles_Heritage/Vol12_1462033110.pdf",
    },
    {
        title: "Volume 13",
        description: "1995, 144 pages, 21.4 MB",
        uploaded: "30 April 2016",
        pdf: "https://scchs.org/upload/St__Charles_Heritage/Vol13_1462033228.pdf",
    },
    {
        title: "Volume 14",
        description: "1996, 164 pages, 24.9 MB",
        uploaded: "30 April 2016",
        pdf: "https://scchs.org/upload/St__Charles_Heritage/Vol14_1462033340.pdf",
    },
    // ... aur baaki volumes isi tarah add kar sakta hai
    {
        title: "Volume 15",
        description: "1997, 160 pages, 23.6 MB",
        uploaded: "30 April 2016",
        pdf: "https://scchs.org/upload/St__Charles_Heritage/Vol15_1462033519.pdf",
      },
      {
        title: "Volume 16",
        description: "1998, 172 pages, 25.8 MB",
        uploaded: "30 April 2016",
        pdf: "https://scchs.org/upload/St__Charles_Heritage/Vol16_1462033840.pdf",
      },
      {
        title: "Volume 17",
        description: "1999, 164 pages, 25.8 MB",
        uploaded: "30 April 2016",
        pdf: "https://scchs.org/upload/St__Charles_Heritage/Vol17_1462033965.pdf",
      },
      {
        title: "Volume 18",
        description: "2000, 168 pages, 26.3 MB",
        uploaded: "30 April 2016",
        pdf: "https://scchs.org/upload/St__Charles_Heritage/Vol18_1462034067.pdf",
      },
      {
        title: "Volume 19",
        description: "2001, 176 pages, 38.5 MB",
        uploaded: "30 April 2016",
        pdf: "https://scchs.org/upload/St__Charles_Heritage/Vol19_1462038924.pdf",
      },
      {
        title: "Volume 20",
        description: "2002, 160 pages, 42.3 MB",
        uploaded: "30 April 2016",
        pdf: "#",
      },
      {
        title: "Volume 21",
        description: "2003, 160 pages, 44.5 MB",
        uploaded: "30 April 2016",
        pdf: "#",
      },
      {
        title: "Volume 22",
        description: "2004, 164 pages, 89.7 MB",
        uploaded: "30 April 2016",
        pdf: "#",
      },
      {
        title: "Volume 23",
        description: "2005, 178 pages, 118 MB",
        uploaded: "30 April 2016",
        pdf: "#",
      },
      {
        title: "Volume 24",
        description: "2006, 168 pages, 95.8 MB",
        uploaded: "30 April 2016",
        pdf: "#",
      },
      {
        title: "Volume 25",
        description: "2007, 176 pages, 101 MB",
        uploaded: "30 April 2016",
        pdf: "#",
      },
      {
        title: "Volume 26",
        description: "2008, 164 pages, 90.1 MB",
        uploaded: "30 April 2016",
        pdf: "#",
      },
      {
        title: "Volume 27",
        description: "2009, 224 pages, 116 MB",
        uploaded: "30 April 2016",
        pdf: "#",
      },
      {
        title: "Volume 28",
        description: "2010, 172 pages, 91.8 MB",
        uploaded: "30 April 2016",
        pdf: "#",
      },
      {
        title: "Volume 29",
        description: "2011, 182 pages, 44.1 MB, includes images and text",
        uploaded: "30 June 2018",
        pdf: "#",
      },
      {
        title: "Volume 30",
        description: "2012, 168 pages, 37.6 MB, includes images and text",
        uploaded: "30 June 2018",
        pdf: "#",
      },
      {
        title: "Volume 31",
        description: "2013, 168 pages, 37.8 MB, includes images and text",
        uploaded: "30 June 2018",
        pdf: "#",
      },
      {
        title: "Volume 32",
        description: "2014, 164 pages, 36.5 MB, includes images and text",
        uploaded: "30 June 2018",
        pdf: "#",
      },
      {
        title: "Volume 33",
        description: "2015, 172 pages, 38.7 MB, includes images and text",
        uploaded: "30 June 2018",
        pdf: "#",
      },
      {
        title: "Volume 34",
        description: "2016, 160 pages, 37.6 MB, includes images and text",
        uploaded: "30 June 2018",
        pdf: "#",
      },
      {
        title: "Volume 35 No 1",
        description: "January 2017, 44 pages, 21.7 MB",
        uploaded: "21 February 2018",
        pdf: "#",
      },
      {
        title: "Volume 35 No 2",
        description: "April 2017, 44 pages, 36.6 MB",
        uploaded: "21 February 2018",
        pdf: "#",
      },
      {
        title: "Volume 35 No 3",
        description: "July 2017, 44 pages, 63.8 MB",
        uploaded: "21 February 2018",
        pdf: "#",
      },
      {
        title: "Volume 35 No 4",
        description: "October 2017, 44 pages, 18.1 MB",
        uploaded: "21 February 2018",
        pdf: "#",
      },
      {
        title: "Volume 36 No 1",
        description: "January 2018, 44 pages, 19.4 MB",
        uploaded: "13 August 2018",
        pdf: "#",
      },
      {
        title: "Volume 36 No 2",
        description: "April 2018, 44 pages, 9.9 MB",
        uploaded: "26 April 2019",
        pdf: "#",
      },
      {
        title: "Volume 36 No 3",
        description: "July 2018, 44 pages, 26.6 MB",
        uploaded: "13 August 2018",
        pdf: "#",
      },
      {
        title: "Volume 36 No 4",
        description: "October 2018, 44 pages, 23.1 MB",
        uploaded: "14 November 2018",
        pdf: "#",
      },
      {
        title: "Volume 37 No 1",
        description: "Jan 2019, 44 pages, 44.7 MB",
        uploaded: "14 April 2019",
        pdf: "#",
      },
      {
        title: "Volume 37 No 2",
        description: "April 2019, 44 pages, 4.9 MB",
        uploaded: "26 April 2019",
        pdf: "#",
      },
      {
        title: "Volume 37 No 3",
        description: "July 2019, 44 pages, 19.8 MB",
        uploaded: "15 November 2019",
        pdf: "#",
      },
      {
        title: "Volume 37 No 4",
        description: "October 2019, 44 pages, 17.1 MB",
        uploaded: "15 November 2019",
        pdf: "#",
      },
      {
        title: "Volume 38 No 1",
        description: "Jan 2020, 44 pages, 10.3 MB",
        uploaded: "30 January 2020",
        pdf: "#",
      },
      {
        title: "Volume 38 No 2",
        description: "Apr 2020, 44 pages, 10.3 MB",
        uploaded: "17 July 2020",
        pdf: "#",
      },
      {
        title: "Volume 38 No 3",
        description: "July 2020, 44 pages, 10.3 MB",
        uploaded: "17 July 2020",
        pdf: "#",
      },
      {
        title: "Volume 38 No 4",
        description: "October 2020, 44 pages, 9.4 MB",
        uploaded: "26 November 2020",
        pdf: "#",
      },
      {
        title: "Volume 39 No 1",
        description: "Jan 2021, 44 pages, 11.7 MB",
        uploaded: "2 May 2021",
        pdf: "#",
      },
      {
        title: "Volume 39 No 2",
        description: "Apr 2021, 44 pages, 12.7 MB",
        uploaded: "2 May 2021",
        pdf: "#",
      },
      {
        title: "Volume 39 No 3",
        description: "July 2021, 44 pages, 19.9 MB",
        uploaded: "6 August 2021",
        pdf: "#",
      },
      {
        title: "Volume 39 No 4",
        description: "October 2021, 44 pages, 35.6 MB",
        uploaded: "9 December 2021",
        pdf: "#",
      },
      {
        title: "Volume 40 No 1",
        description: "Jan 2022, 44 pages, 38.9 MB",
        uploaded: "13 January 2022",
        pdf: "#",
      },
      {
        title: "Volume 40 No 2",
        description: "Apr 2022, 44 pages, 33.6 MB",
        uploaded: "27 May 2022",
        pdf: "#",
      },
      {
        title: "Volume 40 No 3",
        description: "July 2022, 44 pages, 16.8 MB",
        uploaded: "16 October 2022",
        pdf: "#",
      },
      {
        title: "Volume 40 No 4",
        description: "October 2022, 44 pages, 16.4 MB",
        uploaded: "16 October 2022",
        pdf: "#",
      },
      {
        title: "Volume 41 No 1",
        description: "January 2023, 44 pages, 21.7 MB",
        uploaded: "10 July 2023",
        pdf: "#",
      },
      {
        title: "Volume 41 No 2",
        description: "April 2023, 44 pages, 5.60 MB",
        uploaded: "10 July 2023",
        pdf: "#",
      },
      {
        title: "Volume 41 No 3",
        description: "July 2023, 44 pages, 82.6 MB",
        uploaded: "26 July 2023",
        pdf: "#",
      },
      {
        title: "Volume 41 No 4",
        description: "October 2023, 44 pages, 37.3 MB",
        uploaded: "15 December 2023",
        pdf: "#",
      },
      {
        title: "Volume 42 No 1",
        description: "January 2024, 44 pages, 19,112 KB",
        uploaded: "21 February 2024",
        pdf: "#",
      },
      {
        title: "Volume 42 No 2",
        description: "April 2024, 44 pages, 30,731 KB",
        uploaded: "16 October 2024",
        pdf: "#",
      },
      {
        title: "Volume 42 No 3",
        description: "July 2024, 44 pages, 27,502 KB",
        uploaded: "16 October 2024",
        pdf: "#",
      },
      {
        title: "Volume 42 No 4",
        description: "October 2024, 44 pages, 10,237 KB",
        uploaded: "16 October 2024",
        pdf: "#",
      },
      {
        title: "Volume 43 No 1",
        description: "January 2025, 44 pages, 27,014 KB",
        uploaded: "1 April 2025",
        pdf: "#",
      },
      {
        title: "Volume 43 No 2",
        description: "April 2025, 44 pages, 36,965 KB",
        uploaded: "1 April 2025",
        pdf: "#",
      },

];


export default function Page() {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);

    const totalPages = Math.ceil(data.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentItems = data.slice(startIndex, startIndex + itemsPerPage);

    const handleClick = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    const handlePerPageChange = (e) => {
        setItemsPerPage(Number(e.target.value));
        setCurrentPage(1); // Reset to first page
    };
    return (
        <div className="ress1Section">


            <div className="listingTop">
                <div className="leftBox">
                    <h1 className="ress1Title">Volume/issues</h1>
                </div>

                <div className="rightBox">
                    <button className="backBtnn" onClick={() => window.history.back()}>
                        ↩
                    </button>

                    <div className="dropdownWrapper"
                        onChange={(e) => {
                            setItemsPerPage(Number(e.target.value));
                            setCurrentPage(1); // reset to page 1
                        }}
                        value={itemsPerPage}
                    >
                        <label htmlFor="perPage">Listings Per Page:</label>
                        <select id="perPage" className="dropdownnn">
                            <option value="100">100</option>
                            <option value="50">50</option>
                            <option value="25">25</option>
                            <option value="25">10</option>
                        </select>
                    </div>

                    <p className="fileCount">
                        File Listings: {startIndex + 1} to {Math.min(startIndex + itemsPerPage, data.length)} of {data.length}
                    </p>
                </div>
            </div>


            <div className="ress1Wrapper">

                {currentItems.map((item, i) => (
                    <div key={i} className="ress1Item">
                        <div className="ress1Heading">{item.title}</div>
                        <div className="ress1Desc">{item.description}</div>
                        <div className="ress1Uploaded">Uploaded: {item.uploaded}</div>
                        <Link
                            href={item.pdf}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ress1Download"
                        >
                            Download PDF
                        </Link>
                    </div>
                ))}

                <div className="custom-pagination">
                    {[...Array(totalPages)].map((_, i) => (
                        <button
                            key={i}
                            className={`page-btn ${currentPage === i + 1 ? 'active' : ''}`}
                            onClick={() => handleClick(i + 1)}
                        >
                            {i + 1}
                        </button>
                    ))}

                    <button
                        className="page-btn next-btn1"
                        onClick={() => handleClick(currentPage + 1)}
                        disabled={currentPage === totalPages}
                    >
                        <span>Next</span>
                        <svg width="6" height="12" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.13115 0.5L0.368652 2.2625L6.09365 8L0.368652 13.7375L2.13115 15.5L9.63115 8L2.13115 0.5Z" fill="#666D76" />
                        </svg>

                    </button>
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