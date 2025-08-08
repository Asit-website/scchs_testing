import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import style from "./css/cart.module.scss";
import Link from "next/link";
import Cookies from "js-cookie";
import { useRouter } from 'next/router';
import { useSession } from "next-auth/react";
import HeadSEO from "../components/common/Head/head";
import GlobalHeaderFooter from "../utils/common/global-header-footer";
import Navbar from '../components/common/Navbar/Navbar'
//Slider css files
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ShoppingProductSlider from "../components/common/shopping/product-slider";
import { MdKeyboardArrowDown } from "react-icons/md";

import ShoppingCollections from "../components/common/shopping/collections";
import Head from "next/head";
import HeadSEO1 from "../components/common/Head/head1";
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { FaUser, FaMapMarkedAlt, FaBuilding, FaCity, FaGlobe, FaFlag, FaMapPin, FaPhone } from "react-icons/fa";

import { toast } from "react-toastify";



var settingsMorePhotos = {
  arrows: true,
  dots: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1
};



export default function orderhistory(pageProp) {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const [membershipStatus, setMembershipStatus] = useState("loading");

  const [instaUser, setInstaUser] = useState(null);

  useEffect(() => {
      if (typeof window !== "undefined") { // Ensures code only runs in the browser
          const storedInstaUser = localStorage.getItem("scchs_User");
          setInstaUser(storedInstaUser ? JSON.parse(storedInstaUser) : null);
      }
  }, []);

  useEffect(() => {
      const storedUser = localStorage.getItem("scchs_User");
      if (storedUser) {
          setInstaUser(JSON.parse(storedUser));
      }
  }, []);

  useEffect(() => {
    const fetchMembership = async () => {
        if (!instaUser?.id) return;

        try {
            const res = await fetch(`https://uat.scchs.co.in/api/user-memberships/${instaUser.id}`);
            const data = await res.json();

            console.log(data)

            const today = new Date();

            // Filter all active (not expired) plans
            const activePlans = (data?.data || []).filter(plan => {
                // Check for lifetime membership in various possible locations
                const isLifetime = plan.is_lifetime === 1 || 
                                 plan.isLifetime === 1 || 
                                 plan.lifetime === 1 ||
                                 plan.plan?.is_lifetime === 1 ||
                                 plan.plan?.isLifetime === 1;
                
                // If it's a lifetime membership, always consider it active
                if (isLifetime) {
                    return true;
                }
                
                // For non-lifetime memberships, check the status and end date
                const isActive = plan.status === "active";
                const endDate = new Date(plan.grace_end_date);
                return isActive && endDate >= today;
            });

            setMembershipStatus(activePlans.length > 0 ? "active" : "none");
        } catch (err) {
            console.error("Error fetching membership:", err);
            setMembershipStatus("none");
        }
    };

    fetchMembership();
}, [instaUser]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const token = JSON.parse(localStorage.getItem("scchs_Access"));
        const res = await fetch('https://uat.scchs.co.in/api/orders', {
          headers: {
            "Authorization": `Bearer ${token}`
          }
        });

        const json = await res.json();
        console.log(json);
        setOrders(json.orders || []);
      } catch (error) {
        console.error('Error fetching orders:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);


  return (
    <div className="page_shopping_list sop">
      <HeadSEO title={"Store"} description={"This is store"} image={null} />

      <HeadSEO1 />

      <div className="event_system_main">
        <div className="event_main">


          <div className="order-history-wrapper">
            <h1 className="order-history-title">Your Orders</h1>

            {loading ? (
              <p className="order-loading">Loading orders...</p>
            ) : orders.length === 0 ? (
              <p className="order-empty">No orders found.</p>
            ) : (

              // <div className="order-list">
              //   {orders.map((order) => (
              //     <div key={order.id} className="order-card">
              //       <div className="order-card-header">
              //         <div>
              //           <h2>Order #{order.id}</h2>
              //           <p>Placed on {new Date(order.created_at).toLocaleDateString()}</p>
              //            <p>Shipping Cost {order?.shipping_cost}</p>
              //          {order?.total_tax && <p>Total Tax {order?.total_tax}</p>}     
              //         </div>
              //         <div className="order-total">Order amount: ${order.order_amount}</div>

              //       </div>

              //       <div className="product-items">
              //         {order?.order_items?.map((item) => (
              //           <div key={item.id} className="product-item">
              //             <img
              //               src={`https://uat.scchs.co.in//ecommerce/products/${item.product.images[0]}`}
              //               alt={item.product.product_name}
              //               className="product-image"
              //             />
              //             <div className="product-info">
              //               <h3>{item.product.product_name}</h3>
              //               <p>SKU: {item.product.sku_name}</p>
              //               <p className="product-price">${item.sale_price} × {item.qty}</p>
              //             </div>
              //           </div>
              //         ))}
              //       </div>
              //     </div>
              //   ))}
              // </div>
              <div className="order-list">
                {orders.map((order) => (
                  <div key={order.id} className="order-card">
                    <div className="order-card-header">
                      <div>
                        <h2>Order #{order.id}</h2>
                        <p>Placed on {new Date(order.created_at).toLocaleDateString()}</p>
                        <p>Shipping Cost: ${order?.order?.shipping_cost}</p>
                        {order?.order?.total_tax && <p>Total Tax: ${order?.order?.total_tax}</p>}
                      </div>
                      <div className="order-total">Order amount: ${order.amount}</div>
                    </div>

                    <div className="product-items">
                      {order?.order?.order_items?.map((item) => {
                        const product = item.product;
                        
                        // Determine which price to show based on user membership status
                        let displayPrice;
                        let priceLabel;
                        
                        // Check if it's a member store product (has membership_price but no sale_price)
                        const isMemberStoreProduct = product?.membership_price && !product?.sale_price;
                        
                        if (membershipStatus === "active") {
                          // User has active membership - show member price for member store products
                          if (isMemberStoreProduct) {
                            displayPrice = product?.membership_price || product?.price || 0;
                            priceLabel = "Member Price";
                          } else {
                            // Normal product - show sale price
                            displayPrice = item?.sale_price || product?.sale_price || product?.price || 0;
                            priceLabel = "Price";
                          }
                        } else {
                          // User doesn't have active membership - show normal price for all products
                          displayPrice = item?.sale_price || product?.sale_price || product?.price || 0;
                          priceLabel = "Price";
                        }

                        return (
                          <div key={item.id} className="product-item">
                            <img
                              src={`https://uat.scchs.co.in//ecommerce/products/${product.images[0]}`}
                              alt={product.product_name}
                              className="product-image"
                              style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                            />
                            <div className="product-info">
                              <h3>{product.product_name}</h3>
                              <p><strong>{priceLabel}:</strong> ${parseFloat(displayPrice).toFixed(2)} × {item.qty}</p>
                              <div
                                className="product-description"
                                dangerouslySetInnerHTML={{ __html: product.product_detail }}
                              />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}

              </div>




            )}
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