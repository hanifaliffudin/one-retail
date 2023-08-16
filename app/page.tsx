"use client";

import { Icon } from "@iconify/react";
import { useState } from "react";
import { motion } from "framer-motion";
import TalkToUs from "./components/TalkToUs";
import Testimonial from "./components/Testimonial";
import ExploreAccordionItem from "./components/ExploreAccordionItem";

export default function Home() {
  const [imageSlideIndex, setImageSlideIndex] = useState(1);
  const [maxLength, setmaxLength] = useState(3);
  const [exploreIndex, setExploreIndex] = useState(1);
  const [integratedStar, setIntegratedStar] = useState("");
  const [activeExploreAccordion, setActiveExploreAccordion] = useState(1);

  const slideRight = () => {
    imageSlideIndex + 1 == maxLength + 1
      ? setImageSlideIndex(1)
      : setImageSlideIndex(imageSlideIndex + 1);
  };

  const slideLeft = () => {
    imageSlideIndex - 1 == 0
      ? setImageSlideIndex(maxLength)
      : setImageSlideIndex(imageSlideIndex - 1);
  };

  const resetSlideIndex = () => {
    setImageSlideIndex(1);
  };

  return (
    <main className="">
      <section className="bg-white">
        <div className="grid mx-auto lg:gap-8 xl:gap-0 grid-cols-12">
          <div className="md:ml-24 px-4 md:px-0 md:mt-[180px] mt-6 mb-7 place-self-center lg:col-span-5 col-span-12 order-last md:order-first">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                x: [-100, 0],
                transition: { duration: 0.5 },
              }}
            >
              <h1 className="text-[40px] text-neutral-n-90 leading-[60px] font-bold mb-5">
                Transform Your Business with Advanced Retail Technology
              </h1>

              <p className="text-xl font-extralight mb-14 text-neutral-n-80 leading-[30px]">
                Designed to optimize your business operations with tools that
                help you enhance operational efficiency, improve customer
                experiences, and drive business growth with competitive
                landscape.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { duration: 0.5, delay: 1 },
              }}
            >
              <a
                href="#"
                className="btn-primary text-neutral-n-10 py-2.5 px-4 font-semibold mr-5"
              >
                Let’s Get Demo!
              </a>
              <a
                href="#"
                className="btn-border-primary py-2.5 px-4 font-semibold"
              >
                Learn More
              </a>
              <div className="mt-6 font-semibold text-neutral-dark">
                <a className="flex items-center gap-x-1" href="#">
                  Talk to sales{" "}
                  <Icon width={24} icon="material-symbols:chevron-right" />
                </a>
              </div>
            </motion.div>
          </div>
          <div className="mt-20 lg:col-span-7 col-span-12 flex">
            <div className="relative w-screen sm:w-full">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.5, delay: 1 },
                }}
              >
                <img
                  className="xl:absolute mx-auto xl:mx-0 h-[400px] xl:h-full xl:top-1/2 xl:right-36 xl:transform xl:-translate-y-1/2"
                  src="/home/hero-1.svg"
                  alt="hero-1"
                />
              </motion.div>
              <motion.div
                className="absolute xl:top-16 top-10 right-0 w-1/2 xl:w-auto"
                initial={{ position: "absolute", opacity: 0 }}
                animate={{
                  opacity: 1,
                  // x: [100, 0],
                  transition: { duration: 0.5, delay: 2 },
                }}
              >
                <img className="" src="/home/hero-2.svg" alt="hero-2" />
              </motion.div>
              <motion.div
                className="absolute xl:bottom-24 bottom-10 xl:right-[340px] w-1/2 xl:w-auto"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  x: [-100, 0],
                  transition: { duration: 0.5, delay: 2 },
                }}
              >
                <img className="" src="/home/hero-3.svg" alt="hero-3" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white my-12">
        <div className="mx-auto max-w-screen-xl px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              y: [-20, 0],
              transition: { duration: 0.5, delay: 3 },
            }}
          >
            <h2 className="text-2xl mb-2.5 font-medium text-center text-neutral-n-90 ">
              Been Trusted By
            </h2>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            y: [20, 0],
            transition: { duration: 0.5, delay: 3 },
          }}
        >
          <div className="flex gap-x-8 items-center overflow-x-auto">
            <img src="/home/aeon.svg" alt="aeon" />
            <img src="/home/cmhl.svg" alt="cmhl" />
            <img src="/home/aeon-wellness.svg" alt="aeon-wellness" />
            <img src="/home/aeon-big.svg" alt="aeon-big" />
            <img src="/home/pahtama.svg" alt="pahtama" />
            <img src="/home/city.svg" alt="city" />
            <img src="/home/png.svg" alt="png" />
            <img src="/home/kids.svg" alt="kids" />
            <img src="/home/komaiso.svg" alt="komaiso" />
            <img src="/home/daiso.svg" alt="daiso" />
          </div>
        </motion.div>
      </section>

      <section className="mb-20">
        <div className="absolute bg-[#EDEFF7] w-full -z-10 h-[422px]"></div>
        <div className="pt-[34px] px-4 md:px-0 text-center flex flex-col items-center mb-11">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              y: [-20, 0],
              transition: { duration: 0.5, delay: 1 },
            }}
            viewport={{ once: true }}
          >
            <h2 className="font-bold text-neutral-n-90 text-[32px] leading-[48px] mb-5 md:w-[679px]">
              Discover The Power of{" "}
              <span className="text-primary">One Retail</span> and Transform
              Your Business Today!
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              y: [20, 0],
              transition: { duration: 0.5, delay: 1 },
            }}
            viewport={{ once: true }}
          >
            <p className="md:w-[679px] text-neutral-n-700">
              Unlock the full potential of your retail business with our
              innovative solutions. Explore the unrivaled benefits that make us
              the ultimate choice for retailers.
            </p>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            y: [70, 0],
            transition: { duration: 0.6, delay: 1 },
          }}
          viewport={{ once: true }}
        >
          <div className="pb-8 flex flex-nowrap overflow-x-auto gap-12 px-4 md:px-0">
            <div className="bg-white p-5 rounded-lg min-w-[340px] md:ml-[100px] shadow-[0px_2px_12px_0px_rgba(164,164,164,0.25)]">
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 ">
                <img src="/icons/ShoppingCart.svg" alt="ShoppingCart" />
              </div>
              <h3 className="mb-3 font-bold">
                Standard retail operations worldwide
              </h3>
              <p className="text-neutral-n-90">
                Has best practices and industry standards tailoring your digital
                operations to meet your unique business goals and customer needs
              </p>
            </div>
            <div className="bg-white p-5 rounded-lg min-w-[340px] shadow-[0px_2px_12px_0px_rgba(164,164,164,0.25)]">
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 ">
                <img src="/icons/Team.svg" alt="Team" />
              </div>
              <h3 className="mb-3 font-bold">
                Deepen your customer experience
              </h3>
              <p className="text-neutral-n-90">
                With One Retail you can enhance the overall satisfaction, and
                emotional connection to your customers to build strong and
                long-lasting relationship
              </p>
            </div>
            <div className="bg-white p-5 rounded-lg min-w-[340px] shadow-[0px_2px_12px_0px_rgba(164,164,164,0.25)]">
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 ">
                <img src="/icons/FundView.svg" alt="FundView" />
              </div>
              <h3 className="mb-3 font-bold">Valuable data-driven insights</h3>
              <p className="text-neutral-n-90">
                Meaningful and actionable information extracted from data
                analysis that can drive informed decision-making and improve
                business outcomes
              </p>
            </div>
            <div className="bg-white p-5 rounded-lg min-w-[340px] shadow-[0px_2px_12px_0px_rgba(164,164,164,0.25)]">
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 ">
                <img src="/icons/Partition.svg" alt="Partition" />
              </div>
              <h3 className="mb-3 font-bold">
                Seamless business operations flow
              </h3>
              <p className="text-neutral-n-90">
                One Retail can help you ensuring tasks, information, and
                resources move seamlessly from through one step to another
              </p>
            </div>
            <div className="bg-white p-5 rounded-lg min-w-[340px] shadow-[0px_2px_12px_0px_rgba(164,164,164,0.25)]">
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 ">
                <img src="/icons/LineChart.svg" alt="LineChart" />
              </div>
              <h3 className="mb-3 font-bold">
                Drive business growth in a rapidly evolving retail landscapes
              </h3>
              <p className="text-neutral-n-90">
                Expand your business to meet customer expectations in a dynamic
                growth with One Retail CRM
              </p>
            </div>
            <div className="bg-white p-5 rounded-lg min-w-[340px] md:mr-[100px] shadow-[0px_2px_12px_0px_rgba(164,164,164,0.25)]">
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 ">
                <img src="/icons/DollarCircle.svg" alt="DollarCircle" />
              </div>
              <h3 className="mb-3 font-bold">Cost saving potentials</h3>
              <p className="text-neutral-n-90">
                Implementing cost-saving measures, your business can increase
                profitability, reinvest your resources into growth initiatives,
                and gain a competitive edge
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      <section>
        <div className="grid grid-cols-2 gap-x-20 md:px-24 px-4 md:mb-16 mb-8">
          <motion.div
            className="col-span-2 md:col-span-1"
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { duration: 0.5, delay: 1 },
            }}
            viewport={{ once: true }}
          >
            <h2 className="font-bold text-neutral-n-90 text-[32px] leading-[48px] mb-5 md:mb-0 md:w-[679px]">
              One Retail <span className="text-primary">Integrated</span> system
              <br className="hidden md:block" /> Bringing All Together
            </h2>
          </motion.div>
          <motion.div
            className="col-span-2 md:col-span-1"
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              x: [100, 0],
              transition: { duration: 0.5, delay: 1 },
            }}
            viewport={{ once: true }}
          >
            <p className="text-neutral-n-80">
              Integrated system will allows you maintain seamless workflow
              across many stakeholders. We will help and guide your team
              understanding how easy all can be.
            </p>
          </motion.div>
        </div>
      </section>

      <section>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            y: [100, 0],
            transition: { duration: 0.6, delay: 1 },
          }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-12 mb-40">
            <div className="md:col-span-7 col-span-12 bg-[#EDEFF7] py-10 md:pr-10 md:pl-24 px-4 rounded-r-[20px] order-last md:order-first">
              <div className="flex items-center gap-x-4 mb-5">
                <img
                  className="-ml-3"
                  src="/icons/pos-icon-red.svg"
                  alt="pos"
                />
                <h3>Point of Sale (POS)</h3>
              </div>
              <h3 className="text-neutral-n-90 font-bold text-2xl mb-5">
                Seamless Transactions and{" "}
                <span className="text-primary">Enhanced</span> Efficiency with
                Our Point of Sale
              </h3>
              <p className="text-neutral-n-90 mb-5">
                One Retail Point of Sale is a combination of hardware and
                software that highly support transaction process. POS accept any
                payments type such as credit/debit card, cash, vouchers, points.{" "}
              </p>
              <div className="flex items-center gap-x-2 text-sm font-medium text-primary">
                Explore Point of Sale (POS){" "}
                <Icon className="text-primary" icon="ri:arrow-right-line" />
              </div>
            </div>
            <div className="md:col-span-5 col-span-12 flex justify-center sm:block">
              <div className="relative max-w-[400px] max-h-[400px] h-[490px] md:ml-24">
                <img
                  className="absolute w-10 sm:w-auto top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  src="/home/logo-integrated.svg"
                  alt=""
                />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 sm:w-[176px] sm:h-[176px] w-[56px] h-[56px] rounded-full border-[4px] border-[#8F9FD6]"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 sm:w-[300px] sm:h-[300px] w-[180px] h-[180px] rounded-full border-[4px] border-[#B4BFE4]"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 sm:w-[400px] sm:h-[400px] w-[280px] h-[280px] rounded-full border-[4px] border-dashed border-[#D2D9EF]">
                  <div className="relative h-full w-full">
                    <img
                      onMouseEnter={() => setIntegratedStar("ESS")}
                      onMouseOut={() => setIntegratedStar("")}
                      className="absolute sm:top-16 sm:left-11 top-7 left-11 cursor-pointer "
                      src="/icons/Integrated-Star-ESS.svg"
                      alt=""
                    />
                    {integratedStar == "ESS" && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{
                          opacity: 1,
                          transition: { duration: 0.25 },
                        }}
                      >
                        <div className="absolute text-sm z-[999] top-36 left-1 bg-green-600 rounded-md text-white p-2 border-white border">
                          Employee Self Service
                        </div>
                      </motion.div>
                    )}
                    <img
                      onMouseEnter={() => setIntegratedStar("SMO")}
                      onMouseOut={() => setIntegratedStar("")}
                      className="absolute sm:right-16 sm:top-11 right-11 top-7 cursor-pointer"
                      src="/icons/Integrated-Star-SMO.svg"
                      alt=""
                    />
                    {integratedStar == "SMO" && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{
                          opacity: 1,
                          transition: { duration: 0.25 },
                        }}
                      >
                        <div className="absolute text-sm z-[999] top-32 right-7 bg-yellow-400 rounded-md text-white p-2 border-white border">
                          Self Mobile Ordering
                        </div>
                      </motion.div>
                    )}
                    <img
                      onMouseEnter={() => setIntegratedStar("API")}
                      onMouseOut={() => setIntegratedStar("")}
                      className="absolute sm:left-5 sm:bottom-24 left-4 bottom-16 cursor-pointer"
                      src="/icons/Integrated-Star-API.svg"
                      alt=""
                    />
                    {integratedStar == "API" && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{
                          opacity: 1,
                          transition: { duration: 0.25 },
                        }}
                      >
                        <div className="absolute text-sm z-[999] bottom-[122px] left-24 bg-blue-800 rounded-md text-white p-2 border-white border">
                          API Integration
                        </div>
                      </motion.div>
                    )}
                    <img
                      onMouseEnter={() => setIntegratedStar("SP")}
                      onMouseOut={() => setIntegratedStar("")}
                      className="absolute sm:right-12 sm:bottom-14 right-7 bottom-12 cursor-pointer"
                      src="/icons/Integrated-Star-Supplier.svg"
                      alt=""
                    />
                    {integratedStar == "SP" && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{
                          opacity: 1,
                          transition: { duration: 0.25 },
                        }}
                      >
                        <div className="absolute text-sm z-[999] bottom-20 right-32 bg-green-500 rounded-md text-white p-2 border-white border">
                          Supplier Portal
                        </div>
                      </motion.div>
                    )}
                    <img
                      onMouseEnter={() => setIntegratedStar("POS")}
                      onMouseOut={() => setIntegratedStar("")}
                      className="absolute -top-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
                      src="/icons/Integrated-Star-POS.svg"
                      alt=""
                    />
                    {integratedStar == "POS" && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{
                          opacity: 1,
                          transition: { duration: 0.25 },
                        }}
                      >
                        <div className="absolute text-sm z-[999] -top-5 right-10 bg-red-700 rounded-md text-white p-2 border-white border">
                          Point of Sales
                        </div>
                      </motion.div>
                    )}
                    <img
                      onMouseEnter={() => setIntegratedStar("SDO")}
                      onMouseOut={() => setIntegratedStar("")}
                      className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
                      src="/icons/Integrated-Star-SDO.svg"
                      alt=""
                    />
                    {integratedStar == "SDO" && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{
                          opacity: 1,
                          transition: { duration: 0.25 },
                        }}
                      >
                        <div className="absolute text-sm z-[999] -bottom-5 bg-red-700 rounded-md text-white p-2 border-white border">
                          Store Daily Operation
                        </div>
                      </motion.div>
                    )}
                    <img
                      onMouseEnter={() => setIntegratedStar("OSE")}
                      onMouseOut={() => setIntegratedStar("")}
                      className="absolute top-1/2 -right-8 transform -translate-y-1/2 cursor-pointer"
                      src="/icons/Integrated-Star-OSE.svg"
                      alt=""
                    />
                    {integratedStar == "OSE" && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{
                          opacity: 1,
                          transition: { duration: 0.25 },
                        }}
                      >
                        <div className="absolute text-sm z-[999] bottom-[170px] right-10 bg-[#449cbb] rounded-md text-white p-2 border-white border">
                          Online Shopping <br /> Experience
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section>
        <div className="md:px-24 mb-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              y: [-10, 5, 0],
              transition: { duration: 0.3 },
            }}
            viewport={{ once: true }}
          >
            <h2 className="font-bold text-neutral-n-90 text-[32px] leading-[48px] mb-10 text-center">
              Explore All You Can Do with{" "}
              <span className="text-primary">One Retail</span>
            </h2>
          </motion.div>
          <motion.div
            className="hidden sm:block"
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { duration: 0.5, delay: 0.6 },
            }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-12">
              <div className="col-span-5 flex flex-col gap-y-6 mr-10">
                <div
                  className={`py-3 px-5 ${
                    exploreIndex == 1
                      ? "bg-[#F6FAFF] border-l-[4px] border-[#1A3591]"
                      : "cursor-pointer border-l-[4px] border-transparent"
                  } `}
                  onClick={() => {
                    setExploreIndex(1);
                    resetSlideIndex();
                    setmaxLength(3);
                  }}
                >
                  <h3 className="text-primary font-bold text-xl mb-3">
                    Order Management System
                  </h3>
                  <p>
                    A way to reduce long queue at your store and faster checkout
                    process!
                  </p>
                </div>
                <div
                  className={`py-3 px-5 ${
                    exploreIndex == 2
                      ? "bg-[#F6FAFF] border-l-[4px] border-[#1A3591]"
                      : "cursor-pointer border-l-[4px] border-transparent"
                  } `}
                  onClick={() => {
                    setExploreIndex(2);
                    resetSlideIndex();
                    setmaxLength(5);
                  }}
                >
                  <h3 className="text-primary font-bold text-xl mb-3">
                    Customer Relationship Management
                  </h3>
                  <p>
                    Leverage technology, analyze customer data, and build strong
                    relationships. Discover with One Retail!
                  </p>
                </div>
                <div
                  className={`py-3 px-5 ${
                    exploreIndex == 3
                      ? "bg-[#F6FAFF] border-l-[4px] border-[#1A3591]"
                      : "cursor-pointer border-l-[4px] border-transparent"
                  } `}
                  onClick={() => {
                    setExploreIndex(3);
                    resetSlideIndex();
                    setmaxLength(3);
                  }}
                >
                  <h3 className="text-primary font-bold text-xl mb-3">
                    Office Automation
                  </h3>
                  <p>
                    Revolutionize retail with our all-in-One solutions. Goodbye
                    manual, Hello efficiency!
                  </p>
                </div>
                <div
                  className={`py-3 px-5 ${
                    exploreIndex == 4
                      ? "bg-[#F6FAFF] border-l-[4px] border-[#1A3591]"
                      : "cursor-pointer border-l-[4px] border-transparent"
                  } `}
                  onClick={() => {
                    setExploreIndex(4);
                    resetSlideIndex();
                    setmaxLength(2);
                  }}
                >
                  <h3 className="text-primary font-bold text-xl mb-3">
                    Supplier Management
                  </h3>
                  <p>
                    Allows your business to collaborate and interact with
                    suppliers in a centralized and efficient manner through
                    digital interface.
                  </p>
                </div>
              </div>
              <div className="col-span-7 border-l border-[#E0E0E0] px-10">
                <div className={exploreIndex == 1 ? "" : "hidden"}>
                  <div className="flex justify-center">
                    <img
                      className="h-[329px] object-cover"
                      src={`/home/oms-${imageSlideIndex}.svg`}
                      alt=""
                    />
                  </div>
                  <div className="flex justify-between mt-10 mb-3 items-center">
                    <div className="flex gap-x-3 items-center">
                      <div className="rounded-full h-[54px] w-[54px] bg-[#FAFAFA] relative">
                        <div className="flex justify-center items-center rounded-full h-[40px] w-[40px] bg-[#EDEFF7] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                          {imageSlideIndex == 1 && (
                            <img src="/icons/pos-icon.svg" alt="pos" />
                          )}
                          {imageSlideIndex == 2 && (
                            <img src="/icons/sco-icon.svg" alt="sco" />
                          )}
                          {imageSlideIndex == 3 && (
                            <img src="/icons/so-icon.svg" alt="so" />
                          )}
                        </div>
                      </div>
                      <h3 className="text-neutral-n-100 text-xl font-semibold">
                        {imageSlideIndex == 1 && "Point of Sale (POS)"}
                        {imageSlideIndex == 2 && "Self Check-out (SCO)"}
                        {imageSlideIndex == 3 && "Self Ordering"}
                      </h3>
                    </div>
                    <div className="flex gap-x-2.5 items-center">
                      <Icon
                        width={28}
                        className="cursor-pointer"
                        icon="carbon:chevron-left"
                        onClick={slideLeft}
                      />
                      <div className="flex items-center gap-x-2">
                        {imageSlideIndex == 1 ? (
                          <img src="/icons/dot-active.svg" alt="active" />
                        ) : (
                          <div
                            onClick={() => setImageSlideIndex(1)}
                            className="cursor-pointer w-[10px] h-[10px] bg-neutral-n-40 rounded-full"
                          ></div>
                        )}
                        {imageSlideIndex == 2 ? (
                          <img src="/icons/dot-active.svg" alt="active" />
                        ) : (
                          <div
                            onClick={() => setImageSlideIndex(2)}
                            className="cursor-pointer w-[10px] h-[10px] bg-neutral-n-40 rounded-full"
                          ></div>
                        )}
                        {imageSlideIndex == 3 ? (
                          <img src="/icons/dot-active.svg" alt="active" />
                        ) : (
                          <div
                            onClick={() => setImageSlideIndex(3)}
                            className="cursor-pointer w-[10px] h-[10px] bg-neutral-n-40 rounded-full"
                          ></div>
                        )}
                      </div>
                      <Icon
                        width={28}
                        className="cursor-pointer"
                        icon="carbon:chevron-right"
                        onClick={slideRight}
                      />
                    </div>
                  </div>
                  <p className="mb-6 text-neutral-n-90">
                    {imageSlideIndex == 1 &&
                      "One Retail is a combination of hardware and software that highly support transaction process. POS accept any payments type such as credit/debit card, cash, vouchers, points. Record transaction and payment."}
                    {imageSlideIndex == 2 &&
                      "Optimized customer entire check-out process with One Retail SCO Platform to support adding or scanning item to payment. It’s also integrated with payment system so customer can pay at once with their desired payment method."}
                    {imageSlideIndex == 3 &&
                      "One Retail Self-order providing deep personalized customer experience by quick scanning the product barcode and allow them to view the menu then can quickly add it to cart. This also reduce business cost because customer no longer need server assistance"}
                  </p>
                  <button className="btn-border-primary flex font-semibold items-center py-2.5 px-4">
                    Learn more
                  </button>
                </div>

                <div className={exploreIndex == 2 ? "" : "hidden"}>
                  <div className="flex justify-center">
                    <img
                      className="h-[329px] object-cover"
                      src={`/home/crm-${imageSlideIndex}.svg`}
                      alt=""
                    />
                  </div>
                  <div className="flex justify-between mt-10 mb-3 items-center">
                    <div className="flex gap-x-3 items-center">
                      <div className="rounded-full h-[54px] w-[54px] bg-[#FAFAFA] relative">
                        <div className="flex justify-center items-center rounded-full h-[40px] w-[40px] bg-[#EDEFF7] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                          {imageSlideIndex == 1 && (
                            <img src="/icons/cel-icon.svg" alt="pos" />
                          )}
                          {imageSlideIndex == 2 && (
                            <img src="/icons/gamification-icon.svg" alt="sco" />
                          )}
                          {imageSlideIndex == 3 && (
                            <img src="/icons/b2b-icon.svg" alt="so" />
                          )}
                          {imageSlideIndex == 4 && (
                            <img src="/icons/b2c-icon.svg" alt="so" />
                          )}
                          {imageSlideIndex == 5 && (
                            <img src="/icons/pim-icon.svg" alt="so" />
                          )}
                        </div>
                      </div>
                      <h3 className="text-neutral-n-100 text-xl font-semibold">
                        {imageSlideIndex == 1 &&
                          "Customer Engagement & Loyalty"}
                        {imageSlideIndex == 2 && "Gamification"}
                        {imageSlideIndex == 3 && "B2B E-Commerce"}
                        {imageSlideIndex == 4 && "B2C E-Commerce"}
                        {imageSlideIndex == 5 &&
                          "Product Information Management (PIM)"}
                      </h3>
                    </div>
                    <div className="flex gap-x-2.5 items-center">
                      <Icon
                        width={28}
                        className="cursor-pointer"
                        icon="carbon:chevron-left"
                        onClick={slideLeft}
                      />
                      <div className="flex items-center gap-x-2">
                        {imageSlideIndex == 1 ? (
                          <img src="/icons/dot-active.svg" alt="active" />
                        ) : (
                          <div
                            onClick={() => setImageSlideIndex(1)}
                            className="cursor-pointer w-[10px] h-[10px] bg-neutral-n-40 rounded-full"
                          ></div>
                        )}
                        {imageSlideIndex == 2 ? (
                          <img src="/icons/dot-active.svg" alt="active" />
                        ) : (
                          <div
                            onClick={() => setImageSlideIndex(2)}
                            className="cursor-pointer w-[10px] h-[10px] bg-neutral-n-40 rounded-full"
                          ></div>
                        )}
                        {imageSlideIndex == 3 ? (
                          <img src="/icons/dot-active.svg" alt="active" />
                        ) : (
                          <div
                            onClick={() => setImageSlideIndex(3)}
                            className="cursor-pointer w-[10px] h-[10px] bg-neutral-n-40 rounded-full"
                          ></div>
                        )}
                        {imageSlideIndex == 4 ? (
                          <img src="/icons/dot-active.svg" alt="active" />
                        ) : (
                          <div
                            onClick={() => setImageSlideIndex(4)}
                            className="cursor-pointer w-[10px] h-[10px] bg-neutral-n-40 rounded-full"
                          ></div>
                        )}
                        {imageSlideIndex == 5 ? (
                          <img src="/icons/dot-active.svg" alt="active" />
                        ) : (
                          <div
                            onClick={() => setImageSlideIndex(5)}
                            className="cursor-pointer w-[10px] h-[10px] bg-neutral-n-40 rounded-full"
                          ></div>
                        )}
                      </div>
                      <Icon
                        width={28}
                        className="cursor-pointer"
                        icon="carbon:chevron-right"
                        onClick={slideRight}
                      />
                    </div>
                  </div>
                  <p className="mb-6 text-neutral-n-90">
                    {imageSlideIndex == 1 &&
                      "One Retail is a combination of hardware and software that highly support transaction process. POS accept any payments type such as credit/debit card, cash, vouchers, points. Record transaction and payment."}
                    {imageSlideIndex == 2 &&
                      "Provide game-like elements and dynamics inside app such as Gacha, Spin the Wheel, Lucky Draw, Duck Hunt, and customized games also can increase user participation inside your loyalty app. Let's get your customer engaged with One Retail Gamification"}
                    {imageSlideIndex == 3 &&
                      "Business to Business (B2B) E-commerce support selling process between businesses. B2B provide order and payment report for business to track the overall sales data and activity, these all features can lead your business to get customer long term relation and repeat bulk purchases"}
                    {imageSlideIndex == 4 &&
                      "With One Retail's B2C E-commerce solution, businesses can effortlessly sell to end-customers around the clock, eliminating the need for physical store visits. Integrated with loyalty programs, customers can enjoy rewards and stay updated on the latest promotions and discounts."}
                    {imageSlideIndex == 5 &&
                      "Effortlessly centralize and update complex product data with One Retail PIM. Streamline your operations, improve collaboration, and deliver exceptional customer experiences with real-time, automated communication."}
                  </p>
                  <button className="btn-border-primary flex font-semibold items-center py-2.5 px-4">
                    Learn more
                  </button>
                </div>

                <div className={exploreIndex == 3 ? "" : "hidden"}>
                  <div className="flex justify-center">
                    <img
                      className="h-[329px] object-cover"
                      src={`/home/oa-${imageSlideIndex}.svg`}
                      alt=""
                    />
                  </div>
                  <div className="flex justify-between mt-10 mb-3 items-center">
                    <div className="flex gap-x-3 items-center">
                      <div className="rounded-full h-[54px] w-[54px] bg-[#FAFAFA] relative">
                        <div className="flex justify-center items-center rounded-full h-[40px] w-[40px] bg-[#EDEFF7] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                          {imageSlideIndex == 1 && (
                            <img src="/icons/ess-icon.svg" alt="ess" />
                          )}
                          {imageSlideIndex == 2 && (
                            <img src="/icons/sdo-icon.svg" alt="sdo" />
                          )}
                          {imageSlideIndex == 3 && (
                            <img src="/icons/rm-icon.svg" alt="so" />
                          )}
                        </div>
                      </div>
                      <h3 className="text-neutral-n-100 text-xl font-semibold">
                        {imageSlideIndex == 1 && "Employee Self Service"}
                        {imageSlideIndex == 2 && "Store Daily Operations"}
                        {imageSlideIndex == 3 && "Repair & Maintenance"}
                      </h3>
                    </div>
                    <div className="flex gap-x-2.5 items-center">
                      <Icon
                        width={28}
                        className="cursor-pointer"
                        icon="carbon:chevron-left"
                        onClick={slideLeft}
                      />
                      <div className="flex items-center gap-x-2">
                        {imageSlideIndex == 1 ? (
                          <img src="/icons/dot-active.svg" alt="active" />
                        ) : (
                          <div
                            onClick={() => setImageSlideIndex(1)}
                            className="cursor-pointer w-[10px] h-[10px] bg-neutral-n-40 rounded-full"
                          ></div>
                        )}
                        {imageSlideIndex == 2 ? (
                          <img src="/icons/dot-active.svg" alt="active" />
                        ) : (
                          <div
                            onClick={() => setImageSlideIndex(2)}
                            className="cursor-pointer w-[10px] h-[10px] bg-neutral-n-40 rounded-full"
                          ></div>
                        )}
                        {imageSlideIndex == 3 ? (
                          <img src="/icons/dot-active.svg" alt="active" />
                        ) : (
                          <div
                            onClick={() => setImageSlideIndex(3)}
                            className="cursor-pointer w-[10px] h-[10px] bg-neutral-n-40 rounded-full"
                          ></div>
                        )}
                      </div>
                      <Icon
                        width={28}
                        className="cursor-pointer"
                        icon="carbon:chevron-right"
                        onClick={slideRight}
                      />
                    </div>
                  </div>
                  <p className="mb-6 text-neutral-n-90">
                    {imageSlideIndex == 1 &&
                      "Empower employees with One Retail ESS: Real-time access to credentials data, online attendance, bookings, and additional features like employee feedback, live chat, e-learning, and more."}
                    {imageSlideIndex == 2 &&
                      "Optimize store operations with One Retail Daily Operations: Streamline audits, monitor temperatures, and receive alerts for efficient management."}
                    {imageSlideIndex == 3 &&
                      "Efficiently manage maintenance with One Retail: Set recurring schedules, submit help requests, track issue status, and ensure prompt resolution for technical issues."}
                  </p>
                  <button className="btn-border-primary flex font-semibold items-center py-2.5 px-4">
                    Learn more
                  </button>
                </div>

                <div className={exploreIndex == 4 ? "" : "hidden"}>
                  <div className="flex justify-center">
                    <img
                      className="h-[329px] object-cover"
                      src={`/home/sm-${imageSlideIndex}.svg`}
                      alt=""
                    />
                  </div>
                  <div className="flex justify-between mt-10 mb-3 items-center">
                    <div className="flex gap-x-3 items-center">
                      <div className="rounded-full h-[54px] w-[54px] bg-[#FAFAFA] relative">
                        <div className="flex justify-center items-center rounded-full h-[40px] w-[40px] bg-[#EDEFF7] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                          {imageSlideIndex == 1 && (
                            <img src="/icons/pp-icon.svg" alt="pp" />
                          )}
                          {imageSlideIndex == 2 && (
                            <img src="/icons/ntp-icon.svg" alt="ntp" />
                          )}
                        </div>
                      </div>
                      <h3 className="text-neutral-n-100 text-xl font-semibold">
                        {imageSlideIndex == 1 && "Partner Platform"}
                        {imageSlideIndex == 2 && "Non-Trade Portal"}
                      </h3>
                    </div>
                    <div className="flex gap-x-2.5 items-center">
                      <Icon
                        width={28}
                        className="cursor-pointer"
                        icon="carbon:chevron-left"
                        onClick={slideLeft}
                      />
                      <div className="flex items-center gap-x-2">
                        {imageSlideIndex == 1 ? (
                          <img src="/icons/dot-active.svg" alt="active" />
                        ) : (
                          <div
                            onClick={() => setImageSlideIndex(1)}
                            className="cursor-pointer w-[10px] h-[10px] bg-neutral-n-40 rounded-full"
                          ></div>
                        )}
                        {imageSlideIndex == 2 ? (
                          <img src="/icons/dot-active.svg" alt="active" />
                        ) : (
                          <div
                            onClick={() => setImageSlideIndex(2)}
                            className="cursor-pointer w-[10px] h-[10px] bg-neutral-n-40 rounded-full"
                          ></div>
                        )}
                      </div>
                      <Icon
                        width={28}
                        className="cursor-pointer"
                        icon="carbon:chevron-right"
                        onClick={slideRight}
                      />
                    </div>
                  </div>
                  <p className="mb-6 text-neutral-n-90">
                    {imageSlideIndex == 1 &&
                      "One Retail Partner Platform system is designed to support suppliers in managing their data and purchases at real time. This also allow company to manages their supplier and allow them to announce any important message to supplier instantly throughs announcement feature"}
                    {imageSlideIndex == 2 &&
                      "One Retail Non Trade Portal supplier support  registration form with level of approval, allow Non Trade Supplier to access their Purchase Order process to end (Invoice). Non Trade Portal integration can track of approvals, rejections, and pending requests along with rejection reasons."}
                  </p>
                  <button className="btn-border-primary flex font-semibold items-center py-2.5 px-4">
                    Learn more
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="sm:hidden block">
            <ExploreAccordionItem
              index={1}
              setActiveExploreAccordion={setActiveExploreAccordion}
              isActive={activeExploreAccordion == 1}
              title="Order Management System"
              desc="A way to reduce long queue at your store and faster checkout process!"
              content={
                <div>
                  <div className="flex justify-center">
                    <img
                      className="md:h-[329px] object-cover"
                      src={`/home/oms-${imageSlideIndex}.svg`}
                      alt=""
                    />
                  </div>
                  <div className="flex justify-between mt-4 mb-3 items-center">
                    <div className="flex gap-x-3 items-center">
                      <div className="rounded-full h-[54px] w-[54px] bg-[#FAFAFA] relative">
                        <div className="flex justify-center items-center rounded-full h-[40px] w-[40px] bg-[#EDEFF7] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                          {imageSlideIndex == 1 && (
                            <img src="/icons/pos-icon.svg" alt="pos" />
                          )}
                          {imageSlideIndex == 2 && (
                            <img src="/icons/sco-icon.svg" alt="sco" />
                          )}
                          {imageSlideIndex == 3 && (
                            <img src="/icons/so-icon.svg" alt="so" />
                          )}
                        </div>
                      </div>
                      <h3 className="text-neutral-n-100 text-xl font-semibold">
                        {imageSlideIndex == 1 && "Point of Sale (POS)"}
                        {imageSlideIndex == 2 && "Self Check-out (SCO)"}
                        {imageSlideIndex == 3 && "Self Ordering"}
                      </h3>
                    </div>
                  </div>
                  <p className="mb-6 text-neutral-n-90">
                    {imageSlideIndex == 1 &&
                      "One Retail is a combination of hardware and software that highly support transaction process. POS accept any payments type such as credit/debit card, cash, vouchers, points. Record transaction and payment."}
                    {imageSlideIndex == 2 &&
                      "Optimized customer entire check-out process with One Retail SCO Platform to support adding or scanning item to payment. It’s also integrated with payment system so customer can pay at once with their desired payment method."}
                    {imageSlideIndex == 3 &&
                      "One Retail Self-order providing deep personalized customer experience by quick scanning the product barcode and allow them to view the menu then can quickly add it to cart. This also reduce business cost because customer no longer need server assistance"}
                  </p>
                  <div className="flex items-center justify-between">
                    <button className="btn-border-primary flex font-semibold items-center py-2.5 px-4">
                      Learn more
                    </button>
                    <div className="flex items-center gap-x-2">
                      {imageSlideIndex == 1 ? (
                        <img src="/icons/dot-active.svg" alt="active" />
                      ) : (
                        <div
                          onClick={() => setImageSlideIndex(1)}
                          className="cursor-pointer w-[10px] h-[10px] bg-neutral-n-40 rounded-full"
                        ></div>
                      )}
                      {imageSlideIndex == 2 ? (
                        <img src="/icons/dot-active.svg" alt="active" />
                      ) : (
                        <div
                          onClick={() => setImageSlideIndex(2)}
                          className="cursor-pointer w-[10px] h-[10px] bg-neutral-n-40 rounded-full"
                        ></div>
                      )}
                      {imageSlideIndex == 3 ? (
                        <img src="/icons/dot-active.svg" alt="active" />
                      ) : (
                        <div
                          onClick={() => setImageSlideIndex(3)}
                          className="cursor-pointer w-[10px] h-[10px] bg-neutral-n-40 rounded-full"
                        ></div>
                      )}
                    </div>
                  </div>
                </div>
              }
            />

            <ExploreAccordionItem
              index={2}
              setActiveExploreAccordion={setActiveExploreAccordion}
              isActive={activeExploreAccordion == 2}
              title="Customer Relationship Management"
              desc="Leverage technology, analyze customer data, and build strong relationships. Discover with One Retail!"
              content={
                <div>
                  <div className="flex justify-center">
                    <img
                      className="md:h-[329px] object-cover"
                      src={`/home/crm-${imageSlideIndex}.svg`}
                      alt=""
                    />
                  </div>
                  <div className="flex justify-between mt-4 mb-3 items-center">
                    <div className="flex gap-x-3 items-center">
                      <div className="rounded-full h-[54px] w-[54px] bg-[#FAFAFA] relative">
                        <div className="flex justify-center items-center rounded-full h-[40px] w-[40px] bg-[#EDEFF7] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                          {imageSlideIndex == 1 && (
                            <img src="/icons/cel-icon.svg" alt="cel" />
                          )}
                          {imageSlideIndex == 2 && (
                            <img
                              src="/icons/gamification-icon.svg"
                              alt="gamification"
                            />
                          )}
                          {imageSlideIndex == 3 && (
                            <img src="/icons/b2b-icon.svg" alt="b2b" />
                          )}
                          {imageSlideIndex == 4 && (
                            <img src="/icons/b2c-icon.svg" alt="b2c" />
                          )}
                          {imageSlideIndex == 5 && (
                            <img src="/icons/pim-icon.svg" alt="pim" />
                          )}
                        </div>
                      </div>
                      <h3 className="text-neutral-n-100 text-xl font-semibold">
                        {imageSlideIndex == 1 &&
                          "Customer Engagement & Loyalty"}
                        {imageSlideIndex == 2 && "Gamification"}
                        {imageSlideIndex == 3 && "B2B E-Commerce"}
                        {imageSlideIndex == 4 && "B2C E-Commerce"}
                        {imageSlideIndex == 5 &&
                          "Product Information Management (PIM)"}
                      </h3>
                    </div>
                  </div>
                  <p className="mb-6 text-neutral-n-90">
                    {imageSlideIndex == 1 &&
                      "One Retail is a combination of hardware and software that highly support transaction process. POS accept any payments type such as credit/debit card, cash, vouchers, points. Record transaction and payment."}
                    {imageSlideIndex == 2 &&
                      "Optimized customer entire check-out process with One Retail SCO Platform to support adding or scanning item to payment. It’s also integrated with payment system so customer can pay at once with their desired payment method."}
                    {imageSlideIndex == 3 &&
                      "One Retail Self-order providing deep personalized customer experience by quick scanning the product barcode and allow them to view the menu then can quickly add it to cart. This also reduce business cost because customer no longer need server assistance"}
                  </p>
                  <div className="flex items-center justify-between">
                    <button className="btn-border-primary flex font-semibold items-center py-2.5 px-4">
                      Learn more
                    </button>
                    <div className="flex items-center gap-x-2">
                      {imageSlideIndex == 1 ? (
                        <img src="/icons/dot-active.svg" alt="active" />
                      ) : (
                        <div
                          onClick={() => setImageSlideIndex(1)}
                          className="cursor-pointer w-[10px] h-[10px] bg-neutral-n-40 rounded-full"
                        ></div>
                      )}
                      {imageSlideIndex == 2 ? (
                        <img src="/icons/dot-active.svg" alt="active" />
                      ) : (
                        <div
                          onClick={() => setImageSlideIndex(2)}
                          className="cursor-pointer w-[10px] h-[10px] bg-neutral-n-40 rounded-full"
                        ></div>
                      )}
                      {imageSlideIndex == 3 ? (
                        <img src="/icons/dot-active.svg" alt="active" />
                      ) : (
                        <div
                          onClick={() => setImageSlideIndex(3)}
                          className="cursor-pointer w-[10px] h-[10px] bg-neutral-n-40 rounded-full"
                        ></div>
                      )}
                      {imageSlideIndex == 4 ? (
                        <img src="/icons/dot-active.svg" alt="active" />
                      ) : (
                        <div
                          onClick={() => setImageSlideIndex(4)}
                          className="cursor-pointer w-[10px] h-[10px] bg-neutral-n-40 rounded-full"
                        ></div>
                      )}
                      {imageSlideIndex == 5 ? (
                        <img src="/icons/dot-active.svg" alt="active" />
                      ) : (
                        <div
                          onClick={() => setImageSlideIndex(5)}
                          className="cursor-pointer w-[10px] h-[10px] bg-neutral-n-40 rounded-full"
                        ></div>
                      )}
                    </div>
                  </div>
                </div>
              }
            />

            <ExploreAccordionItem
              index={3}
              setActiveExploreAccordion={setActiveExploreAccordion}
              isActive={activeExploreAccordion == 3}
              title="Office Automation"
              desc="Revolutionize retail with our all-in-One solutions. Goodbye manual, Hello efficiency!"
              content={
                <div>
                  <div className="flex justify-center">
                    <img
                      className="md:h-[329px] object-cover"
                      src={`/home/oa-${imageSlideIndex}.svg`}
                      alt=""
                    />
                  </div>
                  <div className="flex justify-between mt-4 mb-3 items-center">
                    <div className="flex gap-x-3 items-center">
                      <div className="rounded-full h-[54px] w-[54px] bg-[#FAFAFA] relative">
                        <div className="flex justify-center items-center rounded-full h-[40px] w-[40px] bg-[#EDEFF7] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                          {imageSlideIndex == 1 && (
                            <img src="/icons/ess-icon.svg" alt="ess" />
                          )}
                          {imageSlideIndex == 2 && (
                            <img src="/icons/sdo-icon.svg" alt="sdo" />
                          )}
                          {imageSlideIndex == 3 && (
                            <img src="/icons/rm-icon.svg" alt="rm" />
                          )}
                        </div>
                      </div>
                      <h3 className="text-neutral-n-100 text-xl font-semibold">
                        {imageSlideIndex == 1 && "Employee Self Service"}
                        {imageSlideIndex == 2 && "Store Daily Operations"}
                        {imageSlideIndex == 3 && "Repair & Maintenance"}
                      </h3>
                    </div>
                  </div>
                  <p className="mb-6 text-neutral-n-90">
                    {imageSlideIndex == 1 &&
                      "Empower employees with One Retail ESS: Real-time access to credentials data, online attendance, bookings, and additional features like employee feedback, live chat, e-learning, and more."}
                    {imageSlideIndex == 2 &&
                      "Optimize store operations with One Retail Daily Operations: Streamline audits, monitor temperatures, and receive alerts for efficient management."}
                    {imageSlideIndex == 3 &&
                      "Efficiently manage maintenance with One Retail: Set recurring schedules, submit help requests, track issue status, and ensure prompt resolution for technical issues."}
                  </p>
                  <div className="flex items-center justify-between">
                    <button className="btn-border-primary flex font-semibold items-center py-2.5 px-4">
                      Learn more
                    </button>
                    <div className="flex items-center gap-x-2">
                      {imageSlideIndex == 1 ? (
                        <img src="/icons/dot-active.svg" alt="active" />
                      ) : (
                        <div
                          onClick={() => setImageSlideIndex(1)}
                          className="cursor-pointer w-[10px] h-[10px] bg-neutral-n-40 rounded-full"
                        ></div>
                      )}
                      {imageSlideIndex == 2 ? (
                        <img src="/icons/dot-active.svg" alt="active" />
                      ) : (
                        <div
                          onClick={() => setImageSlideIndex(2)}
                          className="cursor-pointer w-[10px] h-[10px] bg-neutral-n-40 rounded-full"
                        ></div>
                      )}
                      {imageSlideIndex == 3 ? (
                        <img src="/icons/dot-active.svg" alt="active" />
                      ) : (
                        <div
                          onClick={() => setImageSlideIndex(3)}
                          className="cursor-pointer w-[10px] h-[10px] bg-neutral-n-40 rounded-full"
                        ></div>
                      )}
                    </div>
                  </div>
                </div>
              }
            />

            <ExploreAccordionItem
              index={4}
              setActiveExploreAccordion={setActiveExploreAccordion}
              isActive={activeExploreAccordion == 4}
              title="Supplier Management"
              desc="Allows your business to collaborate and interact with suppliers in a centralized and efficient manner through digital interface."
              content={
                <div>
                  <div className="flex justify-center">
                    <img
                      className="md:h-[329px] object-cover"
                      src={`/home/sm-${imageSlideIndex}.svg`}
                      alt=""
                    />
                  </div>
                  <div className="flex justify-between mt-4 mb-3 items-center">
                    <div className="flex gap-x-3 items-center">
                      <div className="rounded-full h-[54px] w-[54px] bg-[#FAFAFA] relative">
                        <div className="flex justify-center items-center rounded-full h-[40px] w-[40px] bg-[#EDEFF7] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                          {imageSlideIndex == 1 && (
                            <img src="/icons/pp-icon.svg" alt="pp" />
                          )}
                          {imageSlideIndex == 2 && (
                            <img src="/icons/ntp-icon.svg" alt="ntp" />
                          )}
                        </div>
                      </div>
                      <h3 className="text-neutral-n-100 text-xl font-semibold">
                        {imageSlideIndex == 1 && "Partner Platform"}
                        {imageSlideIndex == 2 && "Non-Trade Portal"}
                      </h3>
                    </div>
                  </div>
                  <p className="mb-6 text-neutral-n-90">
                    {imageSlideIndex == 1 &&
                      "One Retail Partner Platform system is designed to support suppliers in managing their data and purchases at real time. This also allow company to manages their supplier and allow them to announce any important message to supplier instantly throughs announcement feature"}
                    {imageSlideIndex == 2 &&
                      "One Retail Non Trade Portal supplier support  registration form with level of approval, allow Non Trade Supplier to access their Purchase Order process to end (Invoice). Non Trade Portal integration can track of approvals, rejections, and pending requests along with rejection reasons."}
                  </p>
                  <div className="flex items-center justify-between">
                    <button className="btn-border-primary flex font-semibold items-center py-2.5 px-4">
                      Learn more
                    </button>
                    <div className="flex items-center gap-x-2">
                      {imageSlideIndex == 1 ? (
                        <img src="/icons/dot-active.svg" alt="active" />
                      ) : (
                        <div
                          onClick={() => setImageSlideIndex(1)}
                          className="cursor-pointer w-[10px] h-[10px] bg-neutral-n-40 rounded-full"
                        ></div>
                      )}
                      {imageSlideIndex == 2 ? (
                        <img src="/icons/dot-active.svg" alt="active" />
                      ) : (
                        <div
                          onClick={() => setImageSlideIndex(2)}
                          className="cursor-pointer w-[10px] h-[10px] bg-neutral-n-40 rounded-full"
                        ></div>
                      )}
                    </div>
                  </div>
                </div>
              }
            />
          </div>
        </div>
      </section>

      <Testimonial />

      <section className="hidden md:block">
        <div className="py-24 mb-20">
          <div className="flex justify-between items-center px-24 mb-[38px]">
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
                <h2 className="mb-3.5 text-[#0A0A0A] font-bold text-[32px]">
                  <span className="text-primary">Browse and explore</span> your
                  business potential
                </h2>
                <p>
                  Find answers and see how these new views changing your mind.
                  Let’s check out!
                </p>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                x: [100, 0],
                transition: { duration: 0.5 },
              }}
              viewport={{ once: true }}
            >
              <a
                href="#"
                className="btn-border-primary py-2.5 px-4 font-semibold"
              >
                Load More
              </a>
            </motion.div>
          </div>

          <div className="flex items-center">
            <div className="grid grid-cols-3 pl-24 gap-x-20">
              <motion.div
                initial={{ borderBottom: "1px solid transparent" }}
                whileHover={{
                  borderBottom: "1px solid blue",
                  width: [0, 50, 100],
                  transition: { duration: 1 },
                }}
              >
                <a href="#" className="">
                  <img
                    className="w-full h-[236px] rounded-lg mb-5 object-cover"
                    src="/home/article-1.svg"
                    alt="thumbnail"
                  />
                  <p className="text-primary font-semibold mb-2.5">
                    Product Analytics
                  </p>
                  <h3 className="text-neutral-n-90 font-semibold text-xl mb-2.5">
                    How to optimize and expand your business with product
                    analytics
                  </h3>
                  <p className="line-clamp-3 text-neutral-n-90">
                    When we set out to bring product analytics to our business,
                    we knew that analytics for company revenue, in
                    particular,...
                  </p>
                </a>
              </motion.div>

              <a href="#" className="">
                <img
                  className="w-full h-[236px] rounded-lg mb-5 object-cover"
                  src="/home/article-2.svg"
                  alt="thumbnail"
                />
                <p className="text-primary font-semibold mb-2.5">
                  Customer Experience
                </p>
                <h3 className="text-neutral-n-90 font-semibold text-xl mb-2.5">
                  Customer Journey : Definitions, analysis and best practices
                </h3>
                <p className="line-clamp-3 text-neutral-n-90">
                  Customer journey is one of the most powerful tools for
                  building great experience. An when employed to thoughtfullness
                  and...
                </p>
              </a>

              <a href="#" className="">
                <img
                  className="w-full h-[236px] rounded-lg mb-5 object-cover"
                  src="/home/article-1.svg"
                  alt="thumbnail"
                />
                <p className="text-primary font-semibold mb-2.5">
                  Product Analytics
                </p>
                <h3 className="text-neutral-n-90 font-semibold text-xl mb-2.5">
                  How to optimize and expand your business with product
                  analytics
                </h3>
                <p className="line-clamp-3 text-neutral-n-90">
                  When we set out to bring product analytics to our business, we
                  knew that analytics for company revenue, in particular,...
                </p>
              </a>
            </div>

            <div className="mx-[24px]">
              <div className="flex justify-center items-center rounded-full h-[49px] w-[49px] border border-[#1F40AE]">
                <Icon
                  width={24}
                  className="text-[#1F40AE]"
                  icon="ri:arrow-right-line"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <TalkToUs />
    </main>
  );
}
