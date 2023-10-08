"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import FAQ from "@/app/components/FAQ";
import NavbarWithCTAButton from "@/app/components/Navbar";
import FooterWithSocialMediaIcons from "@/app/components/Footer";

const OfficeAutomationPage = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
      <NavbarWithCTAButton />
      <main id="overview" className="max-w-screen-2xl mx-auto">
        <section>
          <div className="relative md:h-[692px] h-[560px] mt-[135px]">
            <img
              className="absolute w-full h-[682px] object-cover top-0 left-0 max-sm:hidden"
              src="/products/oa/bg-hero-oa.svg"
              alt="hero"
            />
            <img
              className="absolute w-full object-cover top-0 left-0 sm:hidden"
              src="/products/oa/bg-mac.svg"
              alt="hero"
            />
            <motion.img
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                x: [-500, 0],
                transition: { duration: 0.5 },
              }}
              className="absolute bottom-0 object-cover sm:top-[276px] sm:right-[197px] w-full max-lg:hidden"
              src="/products/oa/bg-hero-oa-2.png"
              alt="hero"
            ></motion.img>
            <div className="absolute top-0 top-0 left-0 grid mx-auto md:gap-8 xl:gap-0 grid-cols-12 h-full">
              <div className="lg:ml-24 md:ml-10 px-4 md:px-0 xl:mt-[0px] md:mt-10 mt-6 mb-7 place-self-center md:col-span-6 col-span-12">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.5, delay: 2 },
                  }}
                >
                  <h1 className="sm:text-[40px] text-[22px] text-neutral-n-10 sm:leading-[60px] leading-[33px] font-bold mb-5">
                    Simplify Your Collaboration Team with Office Automation
                  </h1>

                  <p className="max-sm:text-sm font-extralight sm:mb-14 mb-3 text-neutral-n-30 leading-[30px]">
                    Leveraging your business routines can improve your team
                    productivity and achieve greater operational effectiveness.
                    Say goodbye to manual tasks and embrace a new era of
                    streamlined workflows.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    x: [-100, 0],
                    transition: { duration: 0.5, delay: 2.5 },
                  }}
                >
                  <Link
                    href="/contact"
                    className="btn-primary-40 rounded-md text-neutral-n-10 py-2.5 px-4 max-sm:text-xs font-semibold mr-5"
                  >
                    Let’s Get Demo!
                  </Link>
                  <Link
                    id="whyus"
                    href="#whyus"
                    onClick={handleScroll}
                    className="border border-[#F5F5F5] rounded-md text-neutral-n-30 py-2.5 px-4 max-sm:text-xs font-semibold"
                  >
                    Learn More
                  </Link>
                </motion.div>
              </div>
              <div className="md:col-span-6 col-span-12 ">
                <motion.div
                  className="relative w-screen sm:w-full max-md:h-[320px] h-full"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    x: [200, 0],
                    transition: { duration: 0.5, delay: 1 },
                  }}
                >
                  <img
                    className="absolute xl:right-0 bottom-5 max-lg:h-[582px] max-sm:hidden"
                    src="/products/oa/Mac-Studio.svg"
                    alt="hero-1"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="grid grid-cols-12 mt-10 md:mt-20 xl:px-24 px-4 gap-y-6">
            <div className="col-span-12 xl:col-span-7 ">
              {/* <motion.div
                className="relative h-full w-full max-sm:hidden"
                initial={{ opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  x: [-100, 0],
                  transition: { duration: 0.5 },
                }}
                viewport={{ once: true }}
              >
                <div className="border-[3px] absolute w-[600px] ml-3 -mt-1 h-full border-dashed border-[#D2D9EF] rounded-[50%] py-14 px-10"></div>
                <img
                  className="absolute z-10 top-1/2 left-[120px] transform -translate-y-1/2 h-[250px]"
                  src="/products/oa/why-us.svg"
                  alt="dashboard"
                />

                <div className="deform">
                  <div className="rotate">
                    <div className="counterrotate">
                      <div className="inner">
                        <img src="/products/oa/pp-1.svg" alt="pp-1" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="deform-2">
                  <div className="rotate-2">
                    <div className="counterrotate-2">
                      <div className="inner-2">
                        <img src="/products/oa/pp-1.svg" alt="pp-1" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div> */}
            </div>
            <div className="col-span-12 xl:col-span-5 md:w-[507px] flex items-center">
              <div className="">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{
                    opacity: 1,
                    x: [100, 0],
                    transition: { duration: 0.5 },
                  }}
                  viewport={{ once: true }}
                >
                  <p className="text-primary-p-40 font-bold mb-3">Why Us?</p>
                  <h2 className="font-bold text-neutral-n-90 sm:text-[32px] text-xl sm:leading-[48px] mb-4">
                    Unlock Strategic{" "}
                    <span className="text-primary">Excellence</span> for Growth
                  </h2>
                  <p className="text-neutral-dark mb-4">
                    Embrace the strategic advantage of optimizing your business
                    routines, empowering your team to exceed their potential
                    while driving consistent growth.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{
                    opacity: 1,
                    y: [100, 0],
                    transition: { duration: 0.5, delay: 1 },
                  }}
                  viewport={{ once: true }}
                >
                  <div id="benefits" className="flex">
                    <Link
                      href="/contact"
                      className="btn-primary text-neutral-n-10 py-2.5 px-4 max-sm:text-xs font-semibold mr-5"
                    >
                      Let’s Get Demo!
                    </Link>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="relative">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: { duration: 0.5 },
              }}
              viewport={{ once: true }}
            >
              <img
                className="absolute top-12 -z-10 max-sm:hidden"
                src="/products/oa/bg-benefits.svg"
                alt="bg benefits"
              />
            </motion.div>

            <div className="grid grid-cols-12 mt-20 sm:pl-24 mb-[60px] gap-y-4">
              <div className="col-span-12 xl:col-span-6 xl:max-w-[574px] flex max-sm:px-4 items-center">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{
                    opacity: 1,
                    x: [-100, 0],
                    transition: { duration: 0.5, delay: 1 },
                  }}
                  viewport={{ once: true }}
                >
                  <p className="text-primary-p-40 font-bold mb-3">Benefits</p>
                  <h2 className="font-bold text-neutral-n-90 sm:text-[32px] text-xl sm:leading-[48px] mb-4 md:w-[507px]">
                    Goodbye Manual Effort,{" "}
                    <span className="text-primary">Hi Automation!</span>
                  </h2>
                  <p className="text-neutral-dark mb-4">
                    Enhance your team productivity, efficiency, and
                    collaboration by reducing manual effort and start improving
                    communication and information management among many
                    stakeholders
                  </p>
                </motion.div>
              </div>
              <div className="col-span-12 xl:col-span-6">
                <motion.img
                  className="w-full"
                  initial={{ opacity: 0 }}
                  whileInView={{
                    opacity: 1,
                    x: [100, 0],
                    transition: { duration: 0.5, delay: 1 },
                  }}
                  viewport={{ once: true }}
                  src="/products/oa/benefits.svg"
                  alt="benefits"
                ></motion.img>
              </div>
            </div>

            <div className="md:mb-20 mb-10">
              <motion.div
                className="flex flex-wrap sm:px-24 px-4 gap-y-5 gap-x-11 mb-6"
                initial={{ opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  x: [-100, 0],
                  transition: { duration: 0.5 },
                }}
                viewport={{ once: true }}
              >
                <div className="xl:w-[349px] w-full bg-white shadow-[0px_2px_12px_0px_rgba(164,164,164,0.25)] py-6 px-5 rounded-lg border">
                  <div className="flex justify-between mb-3">
                    <h3 className="font-bold text-xl text-neutral-n-90 mr-5">
                      Improve Efficient Workflow
                    </h3>
                    <img src="/products/oa/core-1.svg" alt="core-1" />
                  </div>
                  <p className="text-neutral-n-80">
                    No more manual effort, you can easily saving time and let
                    your team focusing on critical and valueadded activities.
                  </p>
                </div>

                <div className="xl:w-[349px] w-full bg-white shadow-[0px_2px_12px_0px_rgba(164,164,164,0.25)] py-6 px-5 rounded-lg border">
                  <div className="flex justify-between mb-3">
                    <h3 className="font-bold text-xl text-neutral-n-90 mr-5">
                      Improve Better Documentation
                    </h3>
                    <img src="/products/oa/core-2.svg" alt="core-2" />
                  </div>
                  <p className="text-neutral-n-80">
                    Easily manage your documents with your team and eliminating
                    the need for physical paperwork.
                  </p>
                </div>
              </motion.div>
              <motion.div
                className="flex max-xl:flex-wrap gap-y-5 sm:px-24 px-4 gap-x-11"
                initial={{ opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  x: [100, 0],
                  transition: { duration: 0.5 },
                }}
                viewport={{ once: true }}
              >
                <div className="flex max-xl:hidden xl:w-[349px] w-full h-[192px] justify-center items-center">
                  <motion.img
                    initial={{ opacity: 0 }}
                    whileInView={{
                      opacity: 1,
                      transition: { duration: 0.5, delay: 1 },
                    }}
                    viewport={{ once: true }}
                    src="/products/oa/OneRetailLogo.svg"
                    alt="OneRetailLogo"
                  ></motion.img>
                </div>

                <div className="xl:w-[406px] w-full bg-white shadow-[0px_2px_12px_0px_rgba(164,164,164,0.25)] py-6 px-5 rounded-lg border">
                  <div className="flex justify-between mb-3">
                    <h3 className="font-bold text-xl text-neutral-n-90 mr-5">
                      Seamless Collaboration Between Your Team
                    </h3>
                    <img src="/products/oa/core-3.svg" alt="core-3" />
                  </div>
                  <p className="text-neutral-n-80">
                    Optimize your budget with process automation: Streamline
                    operations, save time, and reduce expenses.
                  </p>
                </div>
                <div className="xl:w-[406px] w-full bg-white shadow-[0px_2px_12px_0px_rgba(164,164,164,0.25)] py-6 px-5 rounded-lg border">
                  <div className="flex justify-between mb-3">
                    <h3 className="font-bold text-xl text-neutral-n-90 mr-5">
                      Reduce Expenses, Saving Your Costs
                    </h3>
                    <img src="/products/oa/core-4.svg" alt="core-4" />
                  </div>
                  <p className="text-neutral-n-80">
                    Reduce expenditure through process automation: Save time,
                    resources, and operational expenses for increased
                    productivity and financial efficiency.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="sm:mb-[100px] mb-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { duration: 0.5 },
            }}
            viewport={{ once: true }}
          >
            <div className="mx-auto max-w-screen-xl px-4">
              <h2 className="mb-2.5 font-bold text-center text-neutral-n-80 ">
                Been Trusted By
              </h2>
            </div>

            <div className="grid xl:grid-flow-col xl:auto-cols-max max-xl:grid-cols-2 gap-x-6 gap-y-5 justify-center max-xl:px-4">
              <div className="flex justify-center">
                <img src="/home/aeon.svg" alt="aeon" />
              </div>
              <div className="flex justify-center">
                <img src="/home/aeon-wellness.svg" alt="aeon-wellness" />
              </div>
              <div className="flex justify-center">
                <img src="/home/pahtama.svg" alt="pahtama" />
              </div>
              <div className="flex justify-center">
                <img src="/home/png.svg" alt="png" />
              </div>
            </div>
          </motion.div>
        </section>

        <section>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              y: [-10, 0],
              transition: { duration: 0.5 },
            }}
            viewport={{ once: true }}
          >
            <p className="text-center max-sm:text-xs text-primary-p-40 font-bold mb-4">
              Features
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              y: [100, 0],
              transition: { duration: 0.5 },
            }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col items-center px-4">
              <h2 className="font-bold text-center text-[#0A0A0A] sm:text-[32px] text-xl sm:leading-[48px] mb-4 xl:w-[986px]">
                All-In-One Retail{" "}
                <span className="text-primary">Solutions</span> for <br />
                Customer-centric Market
              </h2>
              <p
                id="ees"
                className="text-center max-sm:text-sm text-[#667085] md:mb-16 mb-6 px-4 xl:w-[824px]"
              >
                Unlock powerful customer relationships with harness the
                potential of our Customer Relationship Management for
                unparalleled growth and customer satisfaction
              </p>
            </div>
          </motion.div>

          <div className="xl:px-24 px-4">
            <div className="grid grid-cols-2 sm:mb-[100px] md:mb-10 mb-6 gap-x-20 gap-y-5">
              <div className="col-span-2 xl:col-span-1 order-last md:order-first">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{
                    opacity: 1,
                    x: [-100, 0],
                    transition: { duration: 0.5 },
                  }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-left max-lg:justify-center items-center">
                    <img
                      className="w-full"
                      src="/products/oa/ess.svg"
                      alt="ess"
                    />
                  </div>
                </motion.div>
              </div>
              <div className="col-span-2 xl:col-span-1 flex items-center">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{
                    opacity: 1,
                    x: [100, 0],
                    transition: { duration: 0.5 },
                  }}
                  viewport={{ once: true }}
                >
                  <div className="xl:max-w-[591px]">
                    <div className="rounded-full md:h-[70px] md:w-[70px] w-12 h-12 bg-[#FAFAFA] relative">
                      <div className="flex justify-center items-center rounded-full md:h-[60px] md:w-[60px] h-10 w-10 bg-[#EDEFF7] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <img
                          className="md:w-[33px] w-8"
                          src="/icons/ess-icon.svg"
                          alt="ess"
                        />
                      </div>
                    </div>
                    <h2 className="my-4 font-bold text-neutral-n-100 sm:text-[32px] text-xl sm:leading-[48px]">
                      Employee Self Service
                    </h2>
                    <p className="text-neutral-n-90 mb-6">
                      Empower employees with One Retail ESS: Real-time access to
                      credentials data, online attendance, bookings, and
                      additional features like employee feedback, live chat,
                      e-learning, and more.
                    </p>
                    <div className="grid grid-cols-2 md:gap-x-8 gap-x-0 gap-y-3 sm:max-w-[399px] whitespace-nowrap">
                      <div className="flex w-fit items-center font-medium text-neutral-dark gap-x-3">
                        <img
                          src="/products/oa/check-circle.svg"
                          alt="check-circle"
                        />
                        Empowerment
                      </div>
                      <div className="flex w-fit items-center font-medium text-neutral-dark gap-x-3">
                        <img
                          src="/products/oa/check-circle.svg"
                          alt="check-circle"
                        />
                        Transparency
                      </div>
                      <div className="flex w-fit items-center font-medium text-neutral-dark gap-x-3">
                        <img
                          src="/products/oa/check-circle.svg"
                          alt="check-circle"
                        />
                        Time Savings
                      </div>
                      <div className="flex w-fit items-center font-medium text-neutral-dark gap-x-3">
                        <img
                          src="/products/oa/check-circle.svg"
                          alt="check-circle"
                        />
                        Payroll Information
                      </div>
                      <div
                        className="flex w-fit items-center font-medium text-neutral-dark gap-x-3"
                        id="sdo"
                      >
                        <img
                          src="/products/oa/check-circle.svg"
                          alt="check-circle"
                        />
                        Convenience
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
            <div className="rounded-full md:h-[70px] md:w-[70px] w-12 h-12 bg-[#FAFAFA] relative mb-4">
              <div className="flex justify-center items-center rounded-full md:h-[60px] md:w-[60px] h-10 w-10 bg-[#EDEFF7] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <img
                  className="md:w-[33px] w-8"
                  src="/icons/sdo-icon.svg"
                  alt="sdo"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-x-3 items-center sm:mb-[60px] mb-10">
              <div className="max-sm:col-span-2">
                <h2 className="font-bold mb-4 text-neutral-n-100 sm:text-[32px] text-xl sm:leading-[48px]">
                  Store Daily Operation
                </h2>
                <p className="text-neutral-n-90">
                  Optimize store operations with One Retail Daily Operations:
                  Streamline audits, monitor temperatures, and receive alerts
                  for efficient management.
                </p>
              </div>
              <div className="max-sm:col-span-2 max-md:hidden">
                <div className="min-h-[1px] w-full self-stretch bg-[#CFD1D4]"></div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-x-10 gap-y-10 mb-10">
              <div className="lg:col-span-1 col-span-2">
                <div className="bg-[#152B74] sm:h-[547px] max-sm:h-[575px]  rounded-2xl relative">
                  <img
                    className="absolute right-0 top-0 rounded-tr-2xl"
                    src="/products/oa/sdo-bg-1.svg"
                    alt="sdo-bg-1"
                  />
                  <img
                    className="absolute sm:left-[39px] left-5 w-full bottom-0 rounded-br-2xl"
                    src="/products/oa/sdo-hp-1.svg"
                    alt="sdo-hp-1"
                  />
                  <div className="absolute py-8 md:px-6 px-5">
                    <h3 className="text-white font-bold text-xl mb-3">
                      Handheld Terminal
                    </h3>
                    <p className="text-neutral-n-30 mb-6">
                      The HHT (Handheld Terminal) combine computing power and
                      data capture capabilities to enable efficient and mobile
                      data management and communication. It’s also has many{" "}
                      <span className="font-bold text-white">benefits</span> of
                      Handheld Terminal:
                    </p>
                    <div className="grid sm:grid-cols-2 max-sm:grid-cols-1 gap-x-8 gap-y-3 sm:max-w-[499px] text-neutral-n-30">
                      <div className="flex items-center font-medium gap-x-3">
                        <img
                          src="/products/oa/check-circle-sdo.svg"
                          alt="check-circle-sdo"
                        />
                        Cost Savings
                      </div>
                      <div className="flex items-center font-medium gap-x-3">
                        <img
                          src="/products/oa/check-circle-sdo.svg"
                          alt="check-circle-sdo"
                        />
                        Increased Mobility
                      </div>
                      <div className="flex items-center font-medium gap-x-3">
                        <img
                          src="/products/oa/check-circle-sdo.svg"
                          alt="check-circle-sdo"
                        />
                        Enhanced Productivity
                      </div>
                      <div className="flex items-center font-medium gap-x-3">
                        <img
                          src="/products/oa/check-circle-sdo.svg"
                          alt="check-circle-sdo"
                        />
                        Real-time Data Access
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-1 col-span-2">
                <div className="bg-[#0A153A] sm:h-[547px] max-sm:h-[580px] rounded-2xl relative">
                  <img
                    className="absolute right-0 top-4 max-sm:hidden"
                    src="/products/oa/sdo-2-dashboard.svg"
                    alt="sdo-2-dashboard"
                  />
                  <img
                    className="absolute right-0 top-4 sm:hidden"
                    src="/products/oa/sdo-2-dashboard-mobile.svg"
                    alt="sdo-2-dashboard-mobile"
                  />
                  <img
                    className="absolute left-0 bottom-0 rounded-bl-2xl"
                    src="/products/oa/bg-sdo-2.svg"
                    alt="bg-sdo-2"
                  />
                  <div className="absolute xl:bottom-[47px] bottom-6 px-6">
                    <h3 className="text-white font-bold text-xl mb-3">
                      Store Closing Opening
                    </h3>
                    <p className="text-neutral-n-30 mb-6">
                      Store closing and opening procedures are critical
                      components of a retail store's daily operations. Store
                      Closing Opening also has many{" "}
                      <span className="font-bold text-white">benefits</span>:
                    </p>
                    <div className="grid sm:grid-cols-2 max-sm:grid-cols-1 gap-x-8 gap-y-3 sm:max-w-[499px] text-neutral-n-30">
                      <div className="flex items-center font-medium gap-x-3">
                        <img
                          src="/products/oa/check-circle-sdo.svg"
                          alt="check-circle-sdo"
                        />
                        Preparation for the Day
                      </div>
                      <div className="flex items-center font-medium gap-x-3">
                        <img
                          src="/products/oa/check-circle-sdo.svg"
                          alt="check-circle-sdo"
                        />
                        Inventory Management
                      </div>
                      <div className="flex items-center font-medium gap-x-3">
                        <img
                          src="/products/oa/check-circle-sdo.svg"
                          alt="check-circle-sdo"
                        />
                        Data Security
                      </div>
                      <div className="flex items-center font-medium gap-x-3">
                        <img
                          src="/products/oa/check-circle-sdo.svg"
                          alt="check-circle-sdo"
                        />
                        Employee Accountability
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#EDEFF7] rounded-xl sm:py-10 py-6 xl:px-20 px-4 md:mb-[100px] mb-6">
              <h3 className="text-neutral-n-100 font-bold md:text-xl mb-6">
                Other features for Daily Operations
              </h3>
              <div className="grid grid-cols-3 gap-y-6 gap-x-4">
                <div className="sm:col-span-1 col-span-3">
                  <div className="flex items-center gap-x-3">
                    <img
                      className="max-sm:w-8"
                      src="/products/oa/sr.svg"
                      alt="sr"
                    />
                    <p className="font-medium text-neutral-n-80 max-sm:text-sm">
                      Supplier Receiving
                    </p>
                  </div>
                </div>
                <div className="sm:col-span-1 col-span-3">
                  <div className="flex items-center gap-x-3">
                    <img
                      className="max-sm:w-8"
                      src="/products/oa/pmm.svg"
                      alt="pmm"
                    />
                    <p className="font-medium text-neutral-n-80 max-sm:text-sm">
                      Product Master Management
                    </p>
                  </div>
                </div>
                <div className="sm:col-span-1 col-span-3">
                  <div className="flex items-center gap-x-3">
                    <img
                      className="max-sm:w-8"
                      src="/products/oa/sst.svg"
                      alt="sst"
                    />
                    <p className="font-medium text-neutral-n-80 max-sm:text-sm">
                      Store Stock Transfer
                    </p>
                  </div>
                </div>
                <div className="sm:col-span-1 col-span-3">
                  <div className="flex items-center gap-x-3">
                    <img
                      className="max-sm:w-8"
                      src="/products/oa/pim.svg"
                      alt="pim"
                    />
                    <p className="font-medium text-neutral-n-80 max-sm:text-sm">
                      Product Information Management
                    </p>
                  </div>
                </div>
                <div className="sm:col-span-1 col-span-3">
                  <div className="flex items-center gap-x-3">
                    <img
                      className="max-sm:w-8"
                      src="/products/oa/grm.svg"
                      alt="grm"
                    />
                    <p
                      className="font-medium text-neutral-n-80 max-sm:text-sm"
                      id="rm"
                    >
                      Goods Receiving Management
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:mb-[100px] mb-10 gap-x-20 gap-y-5">
              <div className="col-span-2 xl:col-span-1 order-last md:order-first">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{
                    opacity: 1,
                    x: [-100, 0],
                    transition: { duration: 0.5 },
                  }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-left items-center">
                    <img
                      className="w-full"
                      src="/products/oa/rm.svg"
                      alt="rm"
                    />
                  </div>
                </motion.div>
              </div>
              <div className="col-span-2 xl:col-span-1 flex items-center">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{
                    opacity: 1,
                    x: [100, 0],
                    transition: { duration: 0.5 },
                  }}
                  viewport={{ once: true }}
                >
                  <div className="xl:max-w-[591px]">
                    <div className="rounded-full md:h-[70px] md:w-[70px] w-12 h-12 bg-[#FAFAFA] relative">
                      <div className="flex justify-center items-center rounded-full md:h-[60px] md:w-[60px] h-10 w-10 bg-[#EDEFF7] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <img
                          className="md:w-[33px] w-8"
                          src="/icons/rm-icon.svg"
                          alt="rm"
                        />
                      </div>
                    </div>
                    <h2 className="my-4 font-bold text-neutral-n-100 sm:text-[32px] text-xl sm:leading-[48px]">
                      Repair and Maintenance
                    </h2>
                    <p className="text-neutral-n-90 mb-6">
                      Efficiently manage maintenance with One Retail: Set
                      recurring schedules, submit help requests, track issue
                      status, and ensure prompt resolution for technical issues.
                    </p>
                    <div className="grid grid-cols-2 md:gap-x-8 gap-x-0 gap-y-3 sm:max-w-[399px] whitespace-nowrap">
                      <div className="flex items-center font-medium text-neutral-dark gap-x-3 ">
                        <img
                          src="/products/oa/check-circle.svg"
                          alt="check-circle"
                        />
                        Asset Longevity
                      </div>
                      <div className="flex items-center font-medium text-neutral-dark gap-x-3">
                        <img
                          src="/products/oa/check-circle.svg"
                          alt="check-circle"
                        />
                        Cost Savings
                      </div>
                      <div className="flex sm:items-center font-medium text-neutral-dark gap-x-3">
                        <img
                          className="h-fit"
                          src="/products/oa/check-circle.svg"
                          alt="check-circle"
                        />
                        Reliability
                      </div>
                      <div className="flex sm:items-center font-medium text-neutral-dark gap-x-3">
                        <img
                          className="h-fit"
                          src="/products/oa/check-circle.svg"
                          alt="check-circle"
                        />
                        Reduced Unplanned <br className="sm:hidden" /> Downtime
                      </div>
                      <div className="flex max-sm:-mt-8 items-center font-medium text-neutral-dark gap-x-3">
                        <img
                          src="/products/oa/check-circle.svg"
                          alt="check-circle"
                        />
                        Energy Efficiency
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="bg-[#EDEFF7] flex justify-center max-lg:flex-wrap xl:gap-x-[100px] gap-x-10 items-center xl:px-24 px-4 py-10 max-md:mb-10">
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                x: [-100, 0],
                transition: { duration: 0.5 },
              }}
              viewport={{ once: true }}
              src="/products/oa/testimonial.svg"
              alt="testimonial"
            ></motion.img>

            <div className="px-4">
              <motion.img
                initial={{ opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  x: [100, 0],
                  transition: { duration: 0.5 },
                }}
                viewport={{ once: true }}
                className="max-sm:w-10"
                src="/products/oa/quote.svg"
                alt="quote"
              ></motion.img>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  y: [100, 0],
                  transition: { duration: 0.5, delay: 1 },
                }}
                viewport={{ once: true }}
              >
                <p className="font-bold sm:text-2xl text-base-02 sm:my-9 my-3 text-sm">
                  Experience the Transformational Power of One Retail POS and
                  Keep Your Business Moving Forward with Confidence!
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  y: [10, 0],
                  transition: { duration: 0.5, delay: 2 },
                }}
                viewport={{ once: true }}
              >
                <div className="flex items-center max-sm:text-sm">
                  <p className="mr-3 font-bold text-base-02">Jenny Wilson</p>
                  <p className="mr-4 text-gray-600">Co-Founder of</p>
                  <img
                    className="max-sm:h-9"
                    src="/products/oa/waverio.svg"
                    alt="waverio"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <FAQ />

        <section>
          <div className="sm:rounded-[20px] bg-[#1A3591] sm:mx-24 sm:p-10 relative md:mb-36 max-md:mt-10">
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: { duration: 0.5 },
              }}
              viewport={{ once: true }}
              className="absolute max-xl:hidden right-0 top-0 rounded-[20px]"
              src="/products/oa/Hole.svg"
              alt="Hole"
            ></motion.img>

            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: { duration: 0.5 },
              }}
              viewport={{ once: true }}
              className="absolute w-[215px] right-0 bottom-0 xl:hidden"
              src="/products/oa/Hole-Mobile.svg"
              alt="Hole-Mobile"
            ></motion.img>

            <div className="grid grid-cols-12 gap-y-6 max-sm:px-4 max-sm:pt-8">
              <div className="col-span-12 xl:col-span-6 max-xl:text-center text-white xl:max-w-[503px] flex max-xl:justify-center items-center">
                <div className="">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{
                      opacity: 1,
                      x: [-100, 0],
                      transition: { duration: 0.5 },
                    }}
                    viewport={{ once: true }}
                  >
                    <h3 className="font-bold xl:text-[32px] text-xl xl:leading-[48px]">
                      Experience Exceptional Support: Get in Touch Today!
                    </h3>
                    <p className="text-[#EDEDED] my-4">
                      Reach Out and Experience Our Stellar Customer Support:
                      We're Here to Serve You!
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{
                      opacity: 1,
                      y: [10, 0],
                      transition: { duration: 0.5, delay: 1 },
                    }}
                    viewport={{ once: true }}
                  >
                    <div className="flex max-xl:justify-center">
                      <Link
                        href="/contact"
                        className="bg-white font-bold py-2.5 px-4 rounded-md text-primary"
                      >
                        Contact Us
                      </Link>
                    </div>
                  </motion.div>
                </div>
              </div>
              <div className="col-span-12 xl:col-span-6 max-xl:pb-8">
                <div className="relative xl:w-[565px] xl:h-[329px] h-[199px]">
                  <motion.img
                    initial={{ opacity: 0 }}
                    whileInView={{
                      opacity: 1,
                      y: [-100, 0],
                      transition: { duration: 0.5, delay: 2 },
                    }}
                    viewport={{ once: true }}
                    className="absolute max-xl:w-[289.09px] right-0 top-0 z-10"
                    src="/products/oa/cta-1.svg"
                    alt="cta-1"
                  ></motion.img>

                  <motion.img
                    initial={{ opacity: 0 }}
                    whileInView={{
                      opacity: 1,
                      y: [100, 0],
                      transition: { duration: 0.5, delay: 2 },
                    }}
                    viewport={{ once: true }}
                    className="absolute max-xl:w-[172px] left-0 bottom-0 z-[11]"
                    src="/products/oa/cta-2.svg"
                    alt="cta-2"
                  ></motion.img>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <FooterWithSocialMediaIcons />
    </>
  );
};

export default OfficeAutomationPage;
