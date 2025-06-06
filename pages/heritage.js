// pages/your-page.js (or .tsx)
import Image from "next/image";
import React from "react";
import HeadSEO from "../components/common/Head/head";
import HeadSEO1 from "../components/common/Head/head1";
import GlobalHeaderFooter from "../utils/common/global-header-footer";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// 1. Define your dates first
const dates = [
  'December 2024', 'September 2024', 'September 2016', 'February 2024', 'March 2020', 'March 2016',
  'August 2023', 'September 2019', 'September 2015', 'March 2023', 'March 2019', 'March 2015',
  'September 2022', 'September 2018', 'September 2014', 'March 2022', 'March 2018', 'March 2014',
  'September 2021', 'September 2017', 'December 2012', 'March 2021', 'March 2017', 'June 2012',
  'June 2024', 'June 2020', 'June 2016', 'November 2023', 'December 2019', 'December 2015',
  'June 2023', 'June 2019', 'June 2015', 'December 2022', 'December 2018', 'November 2014',
  'June 2022', 'june 2018', 'June 2014', 'December 2021', 'December 2017', 'October 2013',
  'June 2021', 'june 2017', 'September 2012', 'December 2020', 'December 2016', 'March 2012'
];

// 2. Compute the split point
const mid = Math.ceil(dates.length / 2);

export default function DatePage({ navbar, footer }) {
  // 3. Slice into two halves _inside_ your component
  const firstHalf = dates.slice(0, mid);
  const secondHalf = dates.slice(mid);

  return (
    <div className="page_shopping_list sop">
      <HeadSEO title="memberlogin" description="this member is login" image={null} />
      <HeadSEO1 />

      <div className="event_system_main event_system_main1">
      <div className="event_main">
        <section className="date-grid-section">

          {/* Header always on top, centered */}
          <h1 className="current-issues">Membership Newsletter</h1>
          <h2 className="current-issue">
            Current Issue:&nbsp;
            <span>December 2024</span>
          </h2>
          
          <div className="filters-container">
                        <div>
                            <div className="filters-left">
                                <div className="custom_drop">
                                    <select className="dropdown dropdwon_11">
                                        <option>Year</option>
                                    </select>
                                </div>

                                <div className="custom_drop">
                                    <select className="dropdown dropdwon_11">
                                        <option>Month</option>
                                    </select>
                                </div>

                            </div>
                          
                        </div>

                        <div className="filters-right">
                            <div className="listing">
                                <div className="custom_drop custom_drop1">
                                    <select className="dropdown small dropdwon_11">
                                        <option>Past Newsletter</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>

          {/* Grid content below */}
          <div className="date-grid-wrapper">
            <div className="date-col">
              {firstHalf.map(d => (
                <button key={d} className="date-button">{d}</button>
              ))}
            </div>
            <div className="date-col">
              {secondHalf.map(d => (
                <button key={d} className="date-button">{d}</button>
              ))}
            </div>
          </div>
        </section>
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
        navbar: globalSettings.header,
        footer: globalSettings.footer,
      },
    };
  } catch (error) {
    return {
      notFound: true,
      props: {
        page_content: false,
        navbar: false,
        footer: false,
      },
    };
  }
}
