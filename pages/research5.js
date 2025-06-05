import React from 'react'
import Link from "next/link";
import GlobalHeaderFooter from "../utils/common/global-header-footer";

const data = [
    {
        title: "Index Vol 4-42 (Sorted by Author)",
        description: "1986 - 2024 Sorted by Author",
        uploaded: "16 October 2024",
        pdf: "https://view.officeapps.live.com/op/view.aspx?src=https%3A%2F%2Fscchs.org%2Fupload%2FIndex%2FSCCHS_Heritage_Vol_4_42_1986_2024_Sort_by_Author_1729096838.xls&wdOrigin=BROWSELINK",
    },
    {
        title: "Index Vol 4-42 (Sorted by Subject)",
        description: "1986 - 2024 Sorted by Subject",
        uploaded: "16 October 2024",
        pdf: "https://view.officeapps.live.com/op/view.aspx?src=https%3A%2F%2Fscchs.org%2Fupload%2FIndex%2FSCCHS_Heritage_Vol_4_42_1986_2024_Sort_by_Subject_1729097138.xls&wdOrigin=BROWSELINK",
    },
    {
        title: "Index Vol 4-42 (Sorted by Title)",
        description: "1986 - 2024 Sorted by Title",
        uploaded: "16 October 2024",
        pdf: "https://view.officeapps.live.com/op/view.aspx?src=https%3A%2F%2Fscchs.org%2Fupload%2FIndex%2FSCCHS_Heritage_Vol_4_42_1986_2024_Sort_by_Title_1729097068.xls&wdOrigin=BROWSELINK",
    },
    {
        title: "Index Vol 4-42 (Sorted by Vol & No)",
        description: "1986 - 2024 Sorted by Vol & No.",
        uploaded: "16 October 2024",
        pdf: "https://view.officeapps.live.com/op/view.aspx?src=https%3A%2F%2Fscchs.org%2Fupload%2FIndex%2FSCCHS_Heritage_Vol_4_42_1986_2024_Sort_by_Vol_No_1729096998.xls&wdOrigin=BROWSELINK",
    },
    {
        title: "Index Vol 4-8",
        description:
            "1986-1990, 14 pages, 2 MB. A five-year cumulative index covering volumes 4-8 by Author, Title and Subject.",
        uploaded: "20 May 2016",
        pdf: "https://scchs.org/upload/Index/IndexVol04-08_1463740553.pdf",
    },
];

export default function Page() {
    return (
        <div className="ress1Section">


<div className="listingTop">
  <div className="leftBox">
    <h1 className="ress1Title">Index</h1>
  </div>

  <div className="rightBox">
    <button className="backBtnn" onClick={() => window.history.back()}>
      ↩
    </button>

    <div className="dropdownWrapper">
      <label htmlFor="perPage">Listings Per Page:</label>
      <select id="perPage" className="dropdownnn">
        <option value="100">100</option>
        <option value="50">50</option>
        <option value="25">25</option>
        <option value="25">10</option>
      </select>
    </div>

    <p className="fileCount">File Listings: 1 to {data.length} of {data.length}</p>
  </div>
</div>


            <div className="ress1Wrapper">

                {data.map((item, i) => (
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