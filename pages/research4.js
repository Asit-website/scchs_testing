import React from 'react'
import Link from 'next/link';
import GlobalHeaderFooter from "../utils/common/global-header-footer";

export default function ResearchHeritageSection() {
    return (
        <section className="researchh-section">
            <h2 className="researchh-heading">
                The SCCHS Heritage Journal is published quarterly in
                <br /> January, April, July and October.
            </h2>

            <h3 className="researchh-subheading">The Heritage Needs Your Memories!</h3>

            <p className="researchh-paragraph">
                Everyone has a story to tell, including you ---{" "}
                <a href="#" className="researchh-link">
                    click here to share your memories.
                </a>
            </p>

            <div className="researchh-button-group">
                <Link href="/research5" className="researchh-button">Index</Link>
                <Link href="/research6" className="researchh-button">Volume/issues</Link>
            </div>
        </section>
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