"use client";

import { Navbar } from "flowbite-react";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { motion } from "framer-motion";

export default function NavbarWithCTAButton() {
  const [dropdownProduct, setDropdownProduct] = useState(0);
  const [showProduct, setShowProduct] = useState(1);

  return (
    <Navbar
      onMouseLeave={() => setDropdownProduct(0)}
      fluid
      rounded
      className="border-b-[#EDEDED] border-b"
    >
      <Navbar.Brand href="/">
        <img alt="Logo" className="mr-3 h-6 sm:h-9" src="/logo-navbar.svg" />
      </Navbar.Brand>
      <div className="flex items-center md:order-2">
        <div className="flex items-center text-neutral-dark font-semibold mr-6">
          <Icon icon="carbon:phone-filled" />
          <div className="ml-2 mr-1">Call Us</div>
          <a href="tel:+62821001775">(+62 821001775)</a>
        </div>
        <button className="btn-border-n-40 flex items-center gap-x-2 p-3">
          <img src="/id-lang.svg" alt="id" />
          <Icon icon="carbon:chevron-down" />
        </button>
        <div className="inline-block mx-4 my-2 w-[1px] self-stretch bg-neutral-n-50"></div>
        <button className="btn-primary font-semibold px-7 py-2.5 text-neutral-n-10">
          Get Demo
        </button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse className="relative text-base">
        <Navbar.Link className="text-neutral-n-90" href="#">
          <p>Home</p>
        </Navbar.Link>
        <Navbar.Link
          onMouseEnter={() => setDropdownProduct(1)}
          className="text-neutral-n-70 flex items-center gap-x-1"
          href="#"
        >
          Products
          <Icon icon="carbon:chevron-down" />
        </Navbar.Link>
        <Navbar.Link className="text-neutral-n-70" href="#">
          Solutions
        </Navbar.Link>
        <Navbar.Link className="text-neutral-n-70" href="#">
          Hardware
        </Navbar.Link>
        <Navbar.Link className="text-neutral-n-70" href="#">
          Blog
        </Navbar.Link>

        <div className={`${true ? "" : "hidden"} absolute left-0 mt-8`}>
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: dropdownProduct ? 1 : 0 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{
              duration: 0.3,
            }}
          >
            <div className="grid grid-cols-3 gap-x-2 p-2 bg-neutral-n-30 rounded-xl w-[876px] min-h-[497px] mt-8">
              <div className="col-span-1 flex flex-col gap-y-4">
                <div
                  onMouseEnter={() => setShowProduct(1)}
                  className={`flex items-center gap-x-2 ${
                    showProduct == 1 ? "bg-neutral-n-10" : ""
                  } p-3 rounded-lg`}
                >
                  <img src="/oms-icon-blue.svg" alt="Order Management System" />
                  <div className="font-semibold">Order Management System</div>
                </div>

                <div
                  onMouseEnter={() => setShowProduct(2)}
                  className={`flex items-center gap-x-2 ${
                    showProduct == 2 ? "bg-neutral-n-10" : ""
                  } p-3 rounded-lg`}
                >
                  <img
                    src="/crm-icon-blue.svg"
                    alt="Customer Relationship Management"
                  />
                  <div className="font-semibold">
                    Customer Relationship Management
                  </div>
                </div>

                <div
                  onMouseEnter={() => setShowProduct(3)}
                  className={`flex items-center gap-x-2 ${
                    showProduct == 3 ? "bg-neutral-n-10" : ""
                  } p-3 rounded-lg`}
                >
                  <img src="/oa-icon-blue.svg" alt="Office Automation" />
                  <div className="font-semibold">Office Automation</div>
                </div>

                <div
                  onMouseEnter={() => setShowProduct(4)}
                  className={`flex items-center gap-x-2 ${
                    showProduct == 4 ? "bg-neutral-n-10" : ""
                  } p-3 rounded-lg`}
                >
                  <img src="/sm-icon-blue.svg" alt="Supplier Management" />
                  <div className="font-semibold">Supplier Management</div>
                </div>
              </div>
              <div className="col-span-2">
                <div className="bg-neutral-n-10 h-full rounded-xl px-4 py-5">
                  <div className={`${showProduct == 1 ? "" : "hidden"}`}>
                    <div className="flex gap-x-4 items-start">
                      <img src="/oms-icon-green.svg" alt="oms" />
                      <div className="div">
                        <div className="flex justify-between items-center">
                          <h2 className="font-medium text-base">
                            Order Management System
                          </h2>
                          <button className="btn-border-primary flex items-center text-xs py-1.5 px-4">
                            Learn more
                            <Icon className="ml-1" icon="ri:arrow-right-line" />
                          </button>
                        </div>
                        <p className="text-neutral-n-70 text-sm font-normal mt-2">
                          An Order Management System (OMS) automates order
                          fulfillment from capture to tracking.
                        </p>
                      </div>
                    </div>
                    <hr className="my-5" />
                    <div className="grid grid-cols-2 gap-8">
                      <div className="flex gap-x-3 items-start">
                        <img src="pos-icon.svg" alt="pos" />
                        <div>
                          <h3 className="text-neutral-n-100 font-semibold text-sm">
                            Point of Sale (POS)
                          </h3>
                          <p className="text-neutral-n-70 font-normal text-sm">
                            Helps businesses manage sales, inventory, and
                            customer transactions efficiently
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-x-3 items-start">
                        <img src="soa-icon.svg" alt="pos" />
                        <div>
                          <h3 className="text-neutral-n-100 font-semibold text-sm">
                            Self Ordering App
                          </h3>
                          <p className="text-neutral-n-70 font-normal text-sm">
                            Maximize customer experience, boost efficiency, and
                            drive sales growth for your business.
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-x-3 items-start">
                        <img src="sco-icon.svg" alt="pos" />
                        <div>
                          <h3 className="text-neutral-n-100 font-semibold text-sm">
                            Self Check-out (SCO)
                          </h3>
                          <p className="text-neutral-n-70 font-normal text-sm">
                            Helps businesses manage sales, inventory, and
                            customer transactions efficiently
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={`${showProduct == 2 ? "" : "hidden"}`}>
                    <div className="flex gap-x-4 items-start">
                      <img src="/crm-icon-green.svg" alt="crm" />
                      <div className="div">
                        <div className="flex justify-between items-center">
                          <h2 className="font-medium text-base">
                            Customer Relationship Management
                          </h2>
                          <button className="btn-border-primary flex items-center text-xs py-1.5 px-4">
                            Learn more
                            <Icon className="ml-1" icon="ri:arrow-right-line" />
                          </button>
                        </div>
                        <p className="text-neutral-n-70 text-sm font-normal mt-2">
                          Customer Relationship Management (CRM) systems help
                          businesses manage and optimize customer interactions
                          by storing and organizing customer data.
                        </p>
                      </div>
                    </div>
                    <hr className="my-5" />
                    <div className="grid grid-cols-2 gap-8">
                      <div className="flex gap-x-3 items-start">
                        <img src="/cml-icon.svg" alt="cml" />
                        <div>
                          <h3 className="text-neutral-n-100 font-semibold text-sm">
                            Customer Management & Loyalty
                          </h3>
                          <p className="text-neutral-n-70 font-normal text-sm">
                            Personalize loyalty programs based on customer
                            insights to enhance relationships.
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-x-3 items-start">
                        <img src="/gamification-icon.svg" alt="gamification" />
                        <div>
                          <h3 className="text-neutral-n-100 font-semibold text-sm">
                            Gamification
                          </h3>
                          <p className="text-neutral-n-70 font-normal text-sm">
                            Gamification uses game elements to engage and
                            motivate people in non-game contexts.
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-x-3 items-start">
                        <img src="/b2b-icon.svg" alt="pos" />
                        <div>
                          <h3 className="text-neutral-n-100 font-semibold text-sm">
                            B2B E-Commerce
                          </h3>
                          <p className="text-neutral-n-70 font-normal text-sm">
                            Provides a global reach, allowing you to connect
                            with customers beyond geographical boundaries
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-x-3 items-start">
                        <img src="/b2c-icon.svg" alt="b2c" />
                        <div>
                          <h3 className="text-neutral-n-100 font-semibold text-sm">
                            B2C E-Commerce
                          </h3>
                          <p className="text-neutral-n-70 font-normal text-sm">
                            B2C e-commerce enables businesses to sell products
                            directly to consumers online.
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-x-3 items-start">
                        <img src="/pim-icon.svg" alt="pos" />
                        <div>
                          <h3 className="text-neutral-n-100 font-semibold text-sm">
                            Product Information Management
                          </h3>
                          <p className="text-neutral-n-70 font-normal text-sm">
                            PIM organizes product data for efficient management
                            and distribution.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={`${showProduct == 3 ? "" : "hidden"}`}>
                    <div className="flex gap-x-4 items-start">
                      <img src="/oa-icon-green.svg" alt="oa" />
                      <div className="div">
                        <div className="flex justify-between items-center">
                          <h2 className="font-medium text-base">
                            Office Automation
                          </h2>
                          <button className="btn-border-primary flex items-center text-xs py-1.5 px-4">
                            Learn more
                            <Icon className="ml-1" icon="ri:arrow-right-line" />
                          </button>
                        </div>
                        <p className="text-neutral-n-70 text-sm font-normal mt-2">
                          Office automation streamlines tasks and processes for
                          improved productivity.
                        </p>
                      </div>
                    </div>
                    <hr className="my-5" />
                    <div className="grid grid-cols-2 gap-8">
                      <div className="flex gap-x-3 items-start">
                        <img src="/ess-icon.svg" alt="ess" />
                        <div>
                          <h3 className="text-neutral-n-100 font-semibold text-sm">
                            ESS
                          </h3>
                          <p className="text-neutral-n-70 font-normal text-sm">
                            ESS enables employees to manage their information
                            and tasks independently.
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-x-3 items-start">
                        <img src="/sdo-icon.svg" alt="sdo" />
                        <div>
                          <h3 className="text-neutral-n-100 font-semibold text-sm">
                            Store Daily Operations
                          </h3>
                          <p className="text-neutral-n-70 font-normal text-sm">
                            Store daily operations manage sales, inventory, and
                            customer service in retail.
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-x-3 items-start">
                        <img src="/rm-icon.svg" alt="rm" />
                        <div>
                          <h3 className="text-neutral-n-100 font-semibold text-sm">
                            Repair and Management
                          </h3>
                          <p className="text-neutral-n-70 font-normal text-sm">
                            Repair and management ensure optimal asset
                            performance and longevity.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={`${showProduct == 4 ? "" : "hidden"}`}>
                    <div className="flex gap-x-4 items-start">
                      <img src="/sm-icon-green.svg" alt="sm" />
                      <div className="div">
                        <div className="flex justify-between items-center">
                          <h2 className="font-medium text-base">
                            Supplier Management
                          </h2>
                          <button className="btn-border-primary flex items-center text-xs py-1.5 px-4">
                            Learn more
                            <Icon className="ml-1" icon="ri:arrow-right-line" />
                          </button>
                        </div>
                        <p className="text-neutral-n-70 text-sm font-normal mt-2">
                          Supplier Management enable seamless collaboration and
                          communication between companies and their partners.
                        </p>
                      </div>
                    </div>
                    <hr className="my-5" />
                    <div className="grid grid-cols-2 gap-8">
                      <div className="flex gap-x-3 items-start">
                        <img src="/pp-icon.svg" alt="pp" />
                        <div>
                          <h3 className="text-neutral-n-100 font-semibold text-sm">
                            Partner Platform
                          </h3>
                          <p className="text-neutral-n-70 font-normal text-sm">
                            Partner Platforms facilitate collaboration between
                            companies and partners.
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-x-3 items-start">
                        <img src="/ntp-icon.svg" alt="ntp" />
                        <div>
                          <h3 className="text-neutral-n-100 font-semibold text-sm">
                            Non Trade Portal
                          </h3>
                          <p className="text-neutral-n-70 font-normal text-sm">
                            Non-Trade Portals provide information and services
                            to the general public or non-profit.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}
