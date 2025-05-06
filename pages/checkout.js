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

export default function checkout(pageProp) {

    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://www.paypal.com/sdk/js?client-id=AQUoEi-7BxQtfIAz4ulCu1obszrCBZ5NXJQriaMbotUhBEa0_7yJLUrYG7QbTqpOJM-FyoViTuYduBZz";
        script.addEventListener("load", () => {
            window.paypal.Buttons({
                createOrder: (data, actions) => {
                    return actions.order.create({
                        purchase_units: [{
                            amount: {
                                value: '10.00'
                            }
                        }]
                    });
                },
                onApprove: async (data, actions) => {
                    const order = await actions.order.capture();
                    console.log(order);
                    // Send order data to your backend if needed
                }
            }).render('#paypal-button-container');
        });
        document.body.appendChild(script);
    }, []);

    return (
        <div className="page_shopping_list sop">
            <HeadSEO title={"memberlogin"} description={"this member is login"} image={null} />

            <HeadSEO1 />

            <div className="event_system_main event_system_main1">
                <div className="event_main">
                    <div id="paypal-button-container"></div>
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