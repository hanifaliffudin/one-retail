"use client";

import { Icon } from "@iconify/react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavbarWithCTAButton() {
  const pathname = usePathname();
  const [dropdownProduct, setDropdownProduct] = useState(false);
  const [showProduct, setShowProduct] = useState(1);
  const [menuMobile, setMenuMobile] = useState(false);
  const [subActive, setSubActive] = useState("overview");

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });

    setSubActive(targetId);
  };

  return (
    <>
      <nav
        onMouseLeave={() => setDropdownProduct(false)}
        className={`bg-white fixed w-full z-30 top-0 left-0 ${
          pathname.includes("/products") ? "" : "border-b border-[#EDEDED]"
        }`}
      >
        <div className="max-w-screen-xl relative flex flex-wrap items-center justify-between mx-auto p-4">
          <Link href="/" className="flex items-center">
            <img src="/logo-navbar.svg" className="mr-3" alt="Logo" />
          </Link>
          <div className="flex xl:order-2">
            <div className="xl:flex items-center text-neutral-dark font-semibold mr-6 hidden">
              <Icon icon="carbon:phone-filled" />
              <div className="ml-2 mr-1">Call Us</div>
              <a href="tel:+62821001775">(+62 821001775)</a>
            </div>
            <button className="btn-border-n-40 xl:flex hidden items-center gap-x-2 p-3">
              <img src="/id-lang.svg" alt="id" />
              <Icon icon="carbon:chevron-down" />
            </button>
            <div className="xl:inline-block mx-4 my-2 w-[1px] self-stretch bg-neutral-n-50 hidden"></div>
            <Link
              href="/contact"
              className="btn-primary font-semibold px-7 py-2.5 text-neutral-n-10 hidden xl:block"
            >
              Get Demo
            </Link>
            <button
              onClick={() => setMenuMobile(!menuMobile)}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-neutral-n-100 rounded-lg xl:hidden focus:outline-none ring-[1px] ring-[#CFD1D4]"
            >
              <AnimatePresence initial={false}>
                {!menuMobile && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      transition: { duration: 0.5 },
                    }}
                  >
                    <Icon width={20} icon="ri:menu-fill" />
                  </motion.div>
                )}
              </AnimatePresence>
              <AnimatePresence initial={false}>
                {menuMobile && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      transition: { duration: 0.5 },
                    }}
                  >
                    <img src="/icons/close-red.svg" alt="close" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full xl:flex xl:w-auto xl:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 xl:p-0 mt-4 text-neutral-n-70 font-medium border border-gray-100 rounded-lg bg-gray-50 xl:flex-row xl:space-x-8 xl:mt-0 xl:border-0 xl:bg-white ">
              <li>
                <Link
                  href="/"
                  className={
                    pathname == "/" ? "text-neutral-n-90 font-semibold" : ""
                  }
                >
                  Home
                </Link>
              </li>
              <li>
                <div
                  onMouseEnter={() => setDropdownProduct(true)}
                  className={`flex items-center gap-x-1 cursor-pointer ${
                    pathname.includes("/products/")
                      ? "text-neutral-n-90 font-semibold"
                      : ""
                  }`}
                >
                  Products
                  <Icon icon="carbon:chevron-down" />
                </div>

                <AnimatePresence initial={false}>
                  {dropdownProduct && (
                    <motion.div
                      className="sm:absolute hidden left-28 mt-2 z-50"
                      key="content"
                      initial="collapsed"
                      animate="open"
                      exit="collapsed"
                      variants={{
                        open: { opacity: 1, height: "auto" },
                        collapsed: { opacity: 0, height: 0 },
                      }}
                      transition={{
                        duration: 0.6,
                        ease: [0.04, 0.62, 0.23, 0.98],
                      }}
                    >
                      <div className="grid text-black grid-cols-3 gap-x-2 p-2 bg-neutral-n-30 rounded-xl w-[876px] min-h-[497px] mt-8">
                        <div className="col-span-1 flex flex-col gap-y-4">
                          <div
                            onMouseEnter={() => setShowProduct(1)}
                            className={`flex items-center gap-x-2 ${
                              showProduct == 1 ? "bg-neutral-n-10" : ""
                            } p-3 rounded-lg`}
                          >
                            <img
                              src="/icons/oms-icon-blue.svg"
                              alt="Order Management System"
                            />
                            <div className="font-semibold">
                              Order Management System
                            </div>
                          </div>

                          <div
                            onMouseEnter={() => setShowProduct(2)}
                            className={`flex items-center gap-x-2 ${
                              showProduct == 2 ? "bg-neutral-n-10" : ""
                            } p-3 rounded-lg`}
                          >
                            <img
                              src="/icons/crm-icon-blue.svg"
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
                            <img
                              src="/icons/oa-icon-blue.svg"
                              alt="Office Automation"
                            />
                            <div className="font-semibold">
                              Office Automation
                            </div>
                          </div>

                          <div
                            onMouseEnter={() => setShowProduct(4)}
                            className={`flex items-center gap-x-2 ${
                              showProduct == 4 ? "bg-neutral-n-10" : ""
                            } p-3 rounded-lg`}
                          >
                            <img
                              src="/icons/sm-icon-blue.svg"
                              alt="Supplier Management"
                            />
                            <div className="font-semibold">
                              Supplier Management
                            </div>
                          </div>
                        </div>
                        <div className="col-span-2">
                          <div className="bg-neutral-n-10 h-full rounded-xl px-4 py-5">
                            <div
                              className={`${showProduct == 1 ? "" : "hidden"}`}
                            >
                              <div className="flex gap-x-4 items-start">
                                <img
                                  src="/icons/oms-icon-green.svg"
                                  alt="oms"
                                />
                                <div className="div">
                                  <div className="flex justify-between items-center">
                                    <h2 className="font-medium text-base">
                                      Order Management System
                                    </h2>
                                    <Link
                                      href="/products/order-management-system"
                                      onClick={() => {
                                        setDropdownProduct(!dropdownProduct);
                                        setSubActive("overview");
                                      }}
                                      className="btn-border-primary flex items-center text-xs py-1.5 px-4"
                                    >
                                      Learn more
                                      <Icon
                                        className="ml-1"
                                        icon="ri:arrow-right-line"
                                      />
                                    </Link>
                                  </div>
                                  <p className="text-neutral-n-70 text-sm font-normal mt-2">
                                    An Order Management System (OMS) automates
                                    order fulfillment from capture to tracking.
                                  </p>
                                </div>
                              </div>
                              <hr className="my-5" />
                              <div className="grid grid-cols-2 gap-8">
                                <div className="flex gap-x-3 items-start">
                                  <img src="/icons/pos-icon.svg" alt="pos" />
                                  <div>
                                    <h3 className="text-neutral-n-100 font-semibold text-sm">
                                      Point of Sale (POS)
                                    </h3>
                                    <p className="text-neutral-n-70 font-normal text-sm">
                                      Helps businesses manage sales, inventory,
                                      and customer transactions efficiently
                                    </p>
                                  </div>
                                </div>

                                <div className="flex gap-x-3 items-start">
                                  <img src="/icons/soa-icon.svg" alt="pos" />
                                  <div>
                                    <h3 className="text-neutral-n-100 font-semibold text-sm">
                                      Self Ordering App
                                    </h3>
                                    <p className="text-neutral-n-70 font-normal text-sm">
                                      Maximize customer experience, boost
                                      efficiency, and drive sales growth for
                                      your business.
                                    </p>
                                  </div>
                                </div>

                                <div className="flex gap-x-3 items-start">
                                  <img src="/icons/sco-icon.svg" alt="pos" />
                                  <div>
                                    <h3 className="text-neutral-n-100 font-semibold text-sm">
                                      Self Check-out (SCO)
                                    </h3>
                                    <p className="text-neutral-n-70 font-normal text-sm">
                                      Helps businesses manage sales, inventory,
                                      and customer transactions efficiently
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div
                              className={`${showProduct == 2 ? "" : "hidden"}`}
                            >
                              <div className="flex gap-x-4 items-start">
                                <img
                                  src="/icons/crm-icon-green.svg"
                                  alt="crm"
                                />
                                <div className="div">
                                  <div className="flex justify-between items-center">
                                    <h2 className="font-medium text-base">
                                      Customer Relationship Management
                                    </h2>
                                    <Link
                                      href="/products/crm"
                                      onClick={() => {
                                        setDropdownProduct(!dropdownProduct);
                                        setSubActive("overview");
                                      }}
                                      className="btn-border-primary flex items-center text-xs py-1.5 px-4"
                                    >
                                      Learn more
                                      <Icon
                                        className="ml-1"
                                        icon="ri:arrow-right-line"
                                      />
                                    </Link>
                                  </div>
                                  <p className="text-neutral-n-70 text-sm font-normal mt-2">
                                    Customer Relationship Management (CRM)
                                    systems help businesses manage and optimize
                                    customer interactions by storing and
                                    organizing customer data.
                                  </p>
                                </div>
                              </div>
                              <hr className="my-5" />
                              <div className="grid grid-cols-2 gap-8">
                                <div className="flex gap-x-3 items-start">
                                  <img src="/icons/cml-icon.svg" alt="cml" />
                                  <div>
                                    <h3 className="text-neutral-n-100 font-semibold text-sm">
                                      Customer Management & Loyalty
                                    </h3>
                                    <p className="text-neutral-n-70 font-normal text-sm">
                                      Personalize loyalty programs based on
                                      customer insights to enhance
                                      relationships.
                                    </p>
                                  </div>
                                </div>

                                <div className="flex gap-x-3 items-start">
                                  <img
                                    src="/icons/gamification-icon.svg"
                                    alt="gamification"
                                  />
                                  <div>
                                    <h3 className="text-neutral-n-100 font-semibold text-sm">
                                      Gamification
                                    </h3>
                                    <p className="text-neutral-n-70 font-normal text-sm">
                                      Gamification uses game elements to engage
                                      and motivate people in non-game contexts.
                                    </p>
                                  </div>
                                </div>

                                <div className="flex gap-x-3 items-start">
                                  <img src="/icons/b2b-icon.svg" alt="pos" />
                                  <div>
                                    <h3 className="text-neutral-n-100 font-semibold text-sm">
                                      B2B E-Commerce
                                    </h3>
                                    <p className="text-neutral-n-70 font-normal text-sm">
                                      Provides a global reach, allowing you to
                                      connect with customers beyond geographical
                                      boundaries
                                    </p>
                                  </div>
                                </div>

                                <div className="flex gap-x-3 items-start">
                                  <img src="/icons/b2c-icon.svg" alt="b2c" />
                                  <div>
                                    <h3 className="text-neutral-n-100 font-semibold text-sm">
                                      B2C E-Commerce
                                    </h3>
                                    <p className="text-neutral-n-70 font-normal text-sm">
                                      B2C e-commerce enables businesses to sell
                                      products directly to consumers online.
                                    </p>
                                  </div>
                                </div>

                                <div className="flex gap-x-3 items-start">
                                  <img src="/icons/pim-icon.svg" alt="pos" />
                                  <div>
                                    <h3 className="text-neutral-n-100 font-semibold text-sm">
                                      Product Information Management
                                    </h3>
                                    <p className="text-neutral-n-70 font-normal text-sm">
                                      PIM organizes product data for efficient
                                      management and distribution.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div
                              className={`${showProduct == 3 ? "" : "hidden"}`}
                            >
                              <div className="flex gap-x-4 items-start">
                                <img src="/icons/oa-icon-green.svg" alt="oa" />
                                <div className="div">
                                  <div className="flex justify-between items-center">
                                    <h2 className="font-medium text-base">
                                      Office Automation
                                    </h2>
                                    <Link
                                      href="/products/office-automation"
                                      onClick={() => {
                                        setDropdownProduct(!dropdownProduct);
                                        setSubActive("overview");
                                      }}
                                      className="btn-border-primary flex items-center text-xs py-1.5 px-4"
                                    >
                                      Learn more
                                      <Icon
                                        className="ml-1"
                                        icon="ri:arrow-right-line"
                                      />
                                    </Link>
                                  </div>
                                  <p className="text-neutral-n-70 text-sm font-normal mt-2">
                                    Office automation streamlines tasks and
                                    processes for improved productivity.
                                  </p>
                                </div>
                              </div>
                              <hr className="my-5" />
                              <div className="grid grid-cols-2 gap-8">
                                <div className="flex gap-x-3 items-start">
                                  <img src="/icons/ess-icon.svg" alt="ess" />
                                  <div>
                                    <h3 className="text-neutral-n-100 font-semibold text-sm">
                                      ESS
                                    </h3>
                                    <p className="text-neutral-n-70 font-normal text-sm">
                                      ESS enables employees to manage their
                                      information and tasks independently.
                                    </p>
                                  </div>
                                </div>

                                <div className="flex gap-x-3 items-start">
                                  <img src="/icons/sdo-icon.svg" alt="sdo" />
                                  <div>
                                    <h3 className="text-neutral-n-100 font-semibold text-sm">
                                      Store Daily Operations
                                    </h3>
                                    <p className="text-neutral-n-70 font-normal text-sm">
                                      Store daily operations manage sales,
                                      inventory, and customer service in retail.
                                    </p>
                                  </div>
                                </div>

                                <div className="flex gap-x-3 items-start">
                                  <img src="/icons/rm-icon.svg" alt="rm" />
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

                            <div
                              className={`${showProduct == 4 ? "" : "hidden"}`}
                            >
                              <div className="flex gap-x-4 items-start">
                                <img src="/icons/sm-icon-green.svg" alt="sm" />
                                <div className="div">
                                  <div className="flex justify-between items-center">
                                    <h2 className="font-medium text-base">
                                      Supplier Management
                                    </h2>
                                    <Link
                                      href="/products/supplier-management"
                                      onClick={() => {
                                        setDropdownProduct(!dropdownProduct);
                                        setSubActive("overview");
                                      }}
                                      className="btn-border-primary flex items-center text-xs py-1.5 px-4"
                                    >
                                      Learn more
                                      <Icon
                                        className="ml-1"
                                        icon="ri:arrow-right-line"
                                      />
                                    </Link>
                                  </div>
                                  <p className="text-neutral-n-70 text-sm font-normal mt-2">
                                    Supplier Management enable seamless
                                    collaboration and communication between
                                    companies and their partners.
                                  </p>
                                </div>
                              </div>
                              <hr className="my-5" />
                              <div className="grid grid-cols-2 gap-8">
                                <div className="flex gap-x-3 items-start">
                                  <img src="/icons/pp-icon.svg" alt="pp" />
                                  <div>
                                    <h3 className="text-neutral-n-100 font-semibold text-sm">
                                      Partner Platform
                                    </h3>
                                    <p className="text-neutral-n-70 font-normal text-sm">
                                      Partner Platforms facilitate collaboration
                                      between companies and partners.
                                    </p>
                                  </div>
                                </div>

                                <div className="flex gap-x-3 items-start">
                                  <img src="/icons/ntp-icon.svg" alt="ntp" />
                                  <div>
                                    <h3 className="text-neutral-n-100 font-semibold text-sm">
                                      Non Trade Portal
                                    </h3>
                                    <p className="text-neutral-n-70 font-normal text-sm">
                                      Non-Trade Portals provide information and
                                      services to the general public or
                                      non-profit.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
              <li>
                <Link
                  href="/solutions"
                  className={
                    pathname == "/solutions"
                      ? "text-neutral-n-90 font-semibold"
                      : ""
                  }
                >
                  Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/hardware"
                  className={
                    pathname == "/hardware"
                      ? "text-neutral-n-90 font-semibold"
                      : ""
                  }
                >
                  Hardware
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className={
                    pathname.includes("/blog")
                      ? "text-neutral-n-90 font-semibold"
                      : ""
                  }
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-[#F5F5F5]">
          {pathname.includes("/products/order-management-system") && (
            <div className="max-w-screen-xl mx-auto bg-[#F5F5F5] flex overflow-x-auto max-sm:gap-x-3 items-center px-4 w-full h-[55px] border-t border-t-[#EDEDED]">
              <div className="flex items-center gap-x-5">
                <img
                  className="min-w-[24px]"
                  src="/products/oms/icon-navbar-oms.svg"
                  alt="icon oms"
                />
                <h2 className="text-neutral-n-100 text-lg max-sm:hidden whitespace-nowrap">
                  Order Management System
                </h2>
              </div>

              <div className="inline-block sm:mx-8 max-sm:my-4 my-2 min-w-[1px] self-stretch bg-neutral-n-50"></div>

              <div className="flex items-center gap-x-6 text-[15px] text-neutral-n-70">
                <Link
                  onClick={handleScroll}
                  href="#overview"
                  className={`pt-4 pb-[12px] border-b-[3px] ${
                    subActive == "overview"
                      ? "border-b-[#1F40AE] text-primary"
                      : "border-b-transparent"
                  }`}
                >
                  Overview
                </Link>
                <Link
                  onClick={handleScroll}
                  href="#benefits"
                  className={`pt-4 pb-[12px] border-b-[3px] ${
                    subActive == "benefits"
                      ? "border-b-[#1F40AE] text-primary"
                      : "border-b-transparent"
                  }`}
                >
                  Benefits
                </Link>
                <Link
                  onClick={handleScroll}
                  href="#pos"
                  className={`pt-4 pb-[12px] border-b-[3px] whitespace-nowrap ${
                    subActive == "pos"
                      ? "border-b-[#1F40AE] text-primary"
                      : "border-b-transparent"
                  }`}
                >
                  Point of Sale
                </Link>
                <Link
                  onClick={handleScroll}
                  href="#so"
                  className={`pt-4 pb-[12px] border-b-[3px] whitespace-nowrap ${
                    subActive == "so"
                      ? "border-b-[#1F40AE] text-primary"
                      : "border-b-transparent"
                  }`}
                >
                  Self Ordering
                </Link>
                <Link
                  onClick={handleScroll}
                  href="#sco"
                  className={`pt-4 pb-[12px] border-b-[3px] whitespace-nowrap ${
                    subActive == "sco"
                      ? "border-b-[#1F40AE] text-primary"
                      : "border-b-transparent"
                  }`}
                >
                  Self Check-Out
                </Link>
              </div>
            </div>
          )}

          {pathname.includes("/products/crm") && (
            <div className="max-w-screen-xl mx-auto bg-[#F5F5F5] flex overflow-x-auto max-sm:gap-x-3 items-center px-4 w-full h-[55px] border-t border-t-[#EDEDED]">
              <div className="flex items-center gap-x-5">
                <img
                  className="min-w-[24px]"
                  src="/products/crm/icon-navbar-crm.svg"
                  alt="icon crm"
                />
                <h2 className="text-neutral-n-100 text-lg max-sm:hidden whitespace-nowrap">
                  CRM
                </h2>
              </div>

              <div className="inline-block sm:mx-8 max-sm:my-4 my-2 min-w-[1px] self-stretch bg-neutral-n-50"></div>

              <div className="flex items-center gap-x-6 text-[15px] text-neutral-n-70">
                <Link
                  onClick={handleScroll}
                  href="#overview"
                  className={`pt-4 pb-[12px] border-b-[3px] ${
                    subActive == "overview"
                      ? "border-b-[#1F40AE] text-primary"
                      : "border-b-transparent"
                  }`}
                >
                  Overview
                </Link>
                <Link
                  onClick={handleScroll}
                  href="#benefits"
                  className={`pt-4 pb-[12px] border-b-[3px] ${
                    subActive == "benefits"
                      ? "border-b-[#1F40AE] text-primary"
                      : "border-b-transparent"
                  }`}
                >
                  Benefits
                </Link>
                <Link
                  onClick={handleScroll}
                  href="#el"
                  className={`pt-4 pb-[12px] border-b-[3px] whitespace-nowrap ${
                    subActive == "el"
                      ? "border-b-[#1F40AE] text-primary"
                      : "border-b-transparent"
                  }`}
                >
                  Engagement & Loyalty
                </Link>
                <Link
                  onClick={handleScroll}
                  href="#gamification"
                  className={`pt-4 pb-[12px] border-b-[3px] ${
                    subActive == "gamification"
                      ? "border-b-[#1F40AE] text-primary"
                      : "border-b-transparent"
                  }`}
                >
                  Gamification
                </Link>
                <Link
                  onClick={handleScroll}
                  href="#ec"
                  className={`whitespace-nowrap pt-4 pb-[12px] border-b-[3px] ${
                    subActive == "ec"
                      ? "border-b-[#1F40AE] text-primary"
                      : "border-b-transparent"
                  }`}
                >
                  E-Commerce
                </Link>
                <Link
                  onClick={handleScroll}
                  href="#pim"
                  className={`pt-4 pb-[12px] border-b-[3px] ${
                    subActive == "pim"
                      ? "border-b-[#1F40AE] text-primary"
                      : "border-b-transparent"
                  }`}
                >
                  PIM
                </Link>
              </div>
            </div>
          )}

          {pathname.includes("/products/office-automation") && (
            <div className="max-w-screen-xl mx-auto bg-[#F5F5F5] flex overflow-x-auto max-sm:gap-x-3 items-center px-4 w-full h-[55px] border-t border-t-[#EDEDED]">
              <div className="flex items-center gap-x-5">
                <img
                  className="min-w-[24px]"
                  src="/products/oa/icon-navbar-oa.svg"
                  alt="icon oa"
                />
                <h2 className="text-neutral-n-100 text-lg max-sm:hidden whitespace-nowrap">
                  Office Automation
                </h2>
              </div>

              <div className="inline-block sm:mx-8 max-sm:my-4 my-2 min-w-[1px] self-stretch bg-neutral-n-50"></div>

              <div className="flex items-center gap-x-6 text-[15px] text-neutral-n-70">
                <Link
                  onClick={handleScroll}
                  href="#overview"
                  className={`pt-4 pb-[12px] border-b-[3px] ${
                    subActive == "overview"
                      ? "border-b-[#1F40AE] text-primary"
                      : "border-b-transparent"
                  }`}
                >
                  Overview
                </Link>
                <Link
                  onClick={handleScroll}
                  href="#benefits"
                  className={`pt-4 pb-[12px] border-b-[3px] ${
                    subActive == "benefits"
                      ? "border-b-[#1F40AE] text-primary"
                      : "border-b-transparent"
                  }`}
                >
                  Benefits
                </Link>
                <Link
                  onClick={handleScroll}
                  href="#ees"
                  className={`pt-4 pb-[12px] border-b-[3px] whitespace-nowrap ${
                    subActive == "ees"
                      ? "border-b-[#1F40AE] text-primary"
                      : "border-b-transparent"
                  }`}
                >
                  Employee Self Service
                </Link>
                <Link
                  onClick={handleScroll}
                  href="#sdo"
                  className={`pt-4 pb-[12px] border-b-[3px] whitespace-nowrap ${
                    subActive == "sdo"
                      ? "border-b-[#1F40AE] text-primary"
                      : "border-b-transparent"
                  }`}
                >
                  Store Daily Operation
                </Link>
                <Link
                  onClick={handleScroll}
                  href="#rm"
                  className={`pt-4 pb-[12px] border-b-[3px] whitespace-nowrap ${
                    subActive == "rm"
                      ? "border-b-[#1F40AE] text-primary"
                      : "border-b-transparent"
                  }`}
                >
                  Repair & Maintenance
                </Link>
              </div>
            </div>
          )}

          {pathname.includes("/products/supplier-management") && (
            <div className="max-w-screen-xl mx-auto bg-[#F5F5F5] flex overflow-x-auto max-sm:gap-x-3 items-center px-4 w-full h-[55px] border-t border-t-[#EDEDED]">
              <div className="flex items-center gap-x-5">
                <img
                  className="min-w-[24px]"
                  src="/products/sm/icon-navbar-sm.svg"
                  alt="icon sm"
                />
                <h2 className="text-neutral-n-100 text-lg max-sm:hidden whitespace-nowrap">
                  Supplier Management
                </h2>
              </div>

              <div className="inline-block sm:mx-8 max-sm:my-4 my-2 min-w-[1px] self-stretch bg-neutral-n-50"></div>

              <div className="flex items-center gap-x-6 text-[15px] text-neutral-n-70">
                <Link
                  onClick={handleScroll}
                  href="#overview"
                  className={`pt-4 pb-[12px] border-b-[3px] ${
                    subActive == "overview"
                      ? "border-b-[#1F40AE] text-primary"
                      : "border-b-transparent"
                  }`}
                >
                  Overview
                </Link>
                <Link
                  onClick={handleScroll}
                  href="#benefits"
                  className={`pt-4 pb-[12px] border-b-[3px] ${
                    subActive == "benefits"
                      ? "border-b-[#1F40AE] text-primary"
                      : "border-b-transparent"
                  }`}
                >
                  Benefits
                </Link>
                <Link
                  onClick={handleScroll}
                  href="#pp"
                  className={`pt-4 pb-[12px] border-b-[3px] whitespace-nowrap ${
                    subActive == "pp"
                      ? "border-b-[#1F40AE] text-primary"
                      : "border-b-transparent"
                  }`}
                >
                  Partner Platform
                </Link>
                <Link
                  onClick={handleScroll}
                  href="#ntp"
                  className={`pt-4 pb-[12px] border-b-[3px] whitespace-nowrap ${
                    subActive == "ntp"
                      ? "border-b-[#1F40AE] text-primary"
                      : "border-b-transparent"
                  }`}
                >
                  Non Trade Portal
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* Menu Mobile */}
        <AnimatePresence initial={false}>
          {menuMobile && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { duration: 0.5 },
              }}
              exit={{ opacity: 0 }}
            >
              <div className="h-screen overflow-y-auto bg-white w-full z-[1000] fixed border-t border-[#EDEDED] px-4">
                <div className="w-full h-[calc(100%-80px)] flex text-white flex-col">
                  <div className="flex flex-col">
                    <Link
                      onClick={() => setMenuMobile(!menuMobile)}
                      className={`my-4 ${
                        pathname == "/"
                          ? "font-bold text-neutral-n-100"
                          : "font-medium text-neutral-n-70"
                      }`}
                      href="/"
                    >
                      Home
                    </Link>
                    <div
                      onClick={() => {
                        setDropdownProduct(!dropdownProduct);
                        setSubActive("overview");
                      }}
                      className={`my-4 flex items-center justify-between ${
                        dropdownProduct
                          ? "font-bold text-neutral-n-100"
                          : "font-medium text-neutral-n-70"
                      }`}
                    >
                      Products
                      <Icon icon="carbon:chevron-down" />
                    </div>
                    <AnimatePresence initial={false}>
                      {dropdownProduct && (
                        <motion.div
                          key="content"
                          initial="collapsed"
                          animate="open"
                          exit="collapsed"
                          variants={{
                            open: { opacity: 1, height: "auto" },
                            collapsed: { opacity: 0, height: 0 },
                          }}
                          transition={{
                            duration: 0.6,
                            ease: [0.04, 0.62, 0.23, 0.98],
                          }}
                        >
                          <div className="flex flex-col gap-y-4">
                            <div className="flex items-center justify-between gap-x-4 bg-neutral-n-30 p-3 rounded-lg">
                              <div>
                                <div className="flex items-center gap-x-4 mb-2.5">
                                  <img
                                    src="/icons/oms-icon-blue.svg"
                                    alt="Order Management System"
                                  />
                                  <div className="font-semibold text-black">
                                    Order Management System
                                  </div>
                                </div>
                                <p className="text-neutral-n-70 text-sm mb-3">
                                  Automates order fulfillment from capture to
                                  tracking.
                                </p>
                                <p className="text-primary font-semibold text-sm">
                                  3 Products
                                </p>
                              </div>
                              <div>
                                <Link
                                  onClick={() => setMenuMobile(!menuMobile)}
                                  href="/products/order-management-system"
                                >
                                  <Icon
                                    width={24}
                                    className="text-[#CFD1D4]"
                                    icon="carbon:chevron-right"
                                  />
                                </Link>
                              </div>
                            </div>

                            <div className="flex items-center justify-between gap-x-4 bg-neutral-n-30 p-3 rounded-lg">
                              <div>
                                <div className="flex items-center gap-x-4 mb-2.5">
                                  <img
                                    src="/icons/crm-icon-blue.svg"
                                    alt="Customer Relationship Management"
                                  />
                                  <div className="font-semibold text-black">
                                    Customer Relationship Management
                                  </div>
                                </div>
                                <p className="text-neutral-n-70 text-sm mb-3">
                                  Manage and optimize customer interactions by
                                  storing and organizing customer data.
                                </p>
                                <p className="text-primary font-semibold text-sm">
                                  5 Products
                                </p>
                              </div>
                              <div>
                                <Link
                                  onClick={() => setMenuMobile(!menuMobile)}
                                  href="/products/crm"
                                >
                                  <Icon
                                    width={24}
                                    className="text-[#CFD1D4]"
                                    icon="carbon:chevron-right"
                                  />
                                </Link>
                              </div>
                            </div>

                            <div className="flex items-center justify-between gap-x-4 bg-neutral-n-30 p-3 rounded-lg">
                              <div>
                                <div className="flex items-center gap-x-4 mb-2.5">
                                  <img
                                    src="/icons/oa-icon-blue.svg"
                                    alt="Office Automation"
                                  />
                                  <div className="font-semibold text-black">
                                    Office Automation
                                  </div>
                                </div>
                                <p className="text-neutral-n-70 text-sm mb-3">
                                  Office automation streamlines tasks and
                                  processes for improved productivity.
                                </p>
                                <p className="text-primary font-semibold text-sm">
                                  3 Products
                                </p>
                              </div>
                              <div>
                                <Link
                                  onClick={() => setMenuMobile(!menuMobile)}
                                  href="/products/office-automation"
                                >
                                  <Icon
                                    width={24}
                                    className="text-[#CFD1D4]"
                                    icon="carbon:chevron-right"
                                  />
                                </Link>
                              </div>
                            </div>

                            <div className="flex items-center justify-between gap-x-4 bg-neutral-n-30 p-3 rounded-lg">
                              <div>
                                <div className="flex items-center gap-x-4 mb-2.5">
                                  <img
                                    src="/icons/sm-icon-blue.svg"
                                    alt="Supplier Management"
                                  />
                                  <div className="font-semibold text-black">
                                    Supplier Management
                                  </div>
                                </div>
                                <p className="text-neutral-n-70 text-sm mb-3">
                                  Seamless collaboration and communication
                                  between companies and their partners.
                                </p>
                                <p className="text-primary font-semibold text-sm">
                                  2 Products
                                </p>
                              </div>
                              <div>
                                <Link
                                  onClick={() => setMenuMobile(!menuMobile)}
                                  href="/products/supplier-management"
                                >
                                  <Icon
                                    width={24}
                                    className="text-[#CFD1D4]"
                                    icon="carbon:chevron-right"
                                  />
                                </Link>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <Link
                      onClick={() => setMenuMobile(!menuMobile)}
                      className={`my-4 ${
                        pathname == "/solutions"
                          ? "font-bold text-neutral-n-100"
                          : "font-medium text-neutral-n-70"
                      }`}
                      href="/solutions"
                    >
                      Solutions
                    </Link>
                    <Link
                      onClick={() => setMenuMobile(!menuMobile)}
                      className={`my-4 ${
                        pathname == "/hardware"
                          ? "font-bold text-neutral-n-100"
                          : "font-medium text-neutral-n-70"
                      }`}
                      href="/hardware"
                    >
                      Hardware
                    </Link>
                    <Link
                      onClick={() => setMenuMobile(!menuMobile)}
                      className={`my-4 ${
                        pathname == "/blog"
                          ? "font-bold text-neutral-n-100"
                          : "font-medium text-neutral-n-70"
                      }`}
                      href="/blog"
                    >
                      Blog
                    </Link>
                  </div>
                  <div className="flex-1"></div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center text-neutral-dark font-medium text-sm mr-6 ">
                      <Icon width={18} icon="carbon:phone-filled" />
                      <div className="ml-2 mr-1">Call Us</div>
                      <a href="tel:+62821001775">(+62 821001775)</a>
                    </div>
                    <button className="btn-border-n-40 flex text-black items-center gap-x-2 p-3">
                      <img src="/id-lang.svg" alt="id" />
                      <Icon icon="carbon:chevron-down" />
                    </button>
                  </div>
                  <Link
                    href="/contact"
                    onClick={() => setMenuMobile(!menuMobile)}
                    className="btn-primary font-semibold px-7 py-2.5 text-neutral-n-10 my-4"
                  >
                    Get Demo
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        {/* Menu Mobile */}
      </nav>
    </>
  );
}
