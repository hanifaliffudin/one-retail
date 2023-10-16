"use client";

import { Icon } from "@iconify/react";
import { useState } from "react";
import { motion } from "framer-motion";
import TalkToUs from "./components/TalkToUs";
import Testimonial from "./components/Testimonial";
import ExploreAccordionItem from "./components/ExploreAccordionItem";
import Link from "next/link";
import FAQ from "./components/FAQ";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import NavbarWithCTAButton from "./components/Navbar";
import FooterWithSocialMediaIcons from "./components/Footer";

export default function Home() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const [imageSlideIndex, setImageSlideIndex] = useState(1);
  const [maxLength, setmaxLength] = useState(3);
  const [exploreIndex, setExploreIndex] = useState(1);
  const [integratedStar, setIntegratedStar] = useState("");
  const [activeExploreAccordion, setActiveExploreAccordion] = useState(1);
  const [integrated, setIntegrated] = useState(0);

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
    <>
      <NavbarWithCTAButton />
      <main className="max-w-screen-2xl mx-auto">
        <section className="bg-white">
          <div className="grid mx-auto lg:gap-12 xl:gap-0 grid-cols-12">
            <div className="lg:ml-12 xl:ml-24 px-4 md:px-0 lg:mt-[112px]  xl:mt-[180px] mt-6 md:mb-7 lg:col-span-6 xl:col-span-5 col-span-12 order-last md:order-first">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  x: [-100, 0],
                  transition: { duration: 0.5 },
                }}
              >
                <h1 className="xl:text-[40px] text-[22px] lg:text-[32px] text-neutral-n-90 sm:leading-[60px] leading-[33px] font-bold md:mb-5 mb-3">
                  Transform Your Business with Advanced Retail Technology
                </h1>

                <p className="xl:text-xl max-sm:text-sm font-extralight md:mb-14 mb-6 text-neutral-n-80 leading-[30px]">
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
                <Link
                  href="/contact"
                  className="btn-primary text-neutral-n-10 py-2.5 px-4 max-sm:text-xs font-semibold mr-5"
                >
                  Let’s Get Demo!
                </Link>
                <Link
                  href="#discover"
                  onClick={handleScroll}
                  className="btn-border-primary py-2.5 px-4 max-sm:text-xs font-semibold"
                >
                  Learn More
                </Link>
                <div className="mt-6 font-semibold text-neutral-dark">
                  <Link
                    className="flex items-center gap-x-1"
                    target="_blank"
                    href="https://api.whatsapp.com/send?phone=+62821001775"
                  >
                    Talk to sales{" "}
                    <Icon width={24} icon="material-symbols:chevron-right" />
                  </Link>
                </div>
              </motion.div>
            </div>
            <div className="xl:mt-20 lg:mt-28 xl:col-span-7 lg:col-span-6 col-span-12 max-sm:mt-20 flex lg:mr-12 xl:mr-0">
              <div className="relative w-screen sm:w-full max-sm:h-[346px]">
                <motion.div
                  className="h-full"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.5, delay: 1 },
                  }}
                >
                  <img
                    className="xl:absolute max-lg:block max-xl:hidden mx-auto xl:mx-0 max-sm:h-[346px] h-[400px] lg:h-1/2 xl:h-full xl:top-1/2 xl:right-36 xl:transform xl:-translate-y-1/2"
                    src="/home/hero-1.svg"
                    alt="hero-1"
                  />
                  <img
                    className="xl:absolute max-lg:hidden xl:hidden mx-auto xl:mx-0 h-full"
                    src="/home/hero-1-lg.svg"
                    alt="hero-1"
                  />
                </motion.div>
                <motion.div
                  className="absolute xl:top-16 top-10 right-0 w-1/2 xl:w-auto"
                  initial={{ position: "absolute", opacity: 0 }}
                  animate={{
                    opacity: 1,
                    x: [100, 0],
                    transition: { duration: 0.5, delay: 2 },
                  }}
                >
                  <img src="/home/hero-2.svg" alt="hero-2" />
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
                  <img src="/home/hero-3.svg" alt="hero-3" />
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white md:my-12 my-10">
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
            <div className="home scroller__wrapper" id="discover">
              <div className="scroller__container">
                <div className="home scroller">
                  <div className="scroller__item">
                    <img src="/home/aeon.svg" alt="aeon" />
                  </div>
                  <div className="scroller__item">
                    <img src="/home/cmhl.svg" alt="cmhl" />
                  </div>
                  <div className="scroller__item">
                    <img src="/home/aeon-wellness.svg" alt="aeon-wellness" />
                  </div>
                  <div className="scroller__item">
                    <img src="/home/aeon-big.svg" alt="aeon-big" />
                  </div>
                  <div className="scroller__item">
                    <img src="/home/pahtama.svg" alt="pahtama" />
                  </div>
                  <div className="scroller__item">
                    <img src="/home/city.svg" alt="city" />
                  </div>
                  <div className="scroller__item">
                    <img src="/home/png.svg" alt="png" />
                  </div>
                  <div className="scroller__item">
                    <img src="/home/kids.svg" alt="kids" />
                  </div>
                  <div className="scroller__item">
                    <img src="/home/komaiso.svg" alt="komaiso" />
                  </div>
                  <div className="scroller__item">
                    <img src="/home/daiso.svg" alt="daiso" />
                  </div>

                  <div className="scroller__item">
                    <img src="/home/aeon.svg" alt="aeon" />
                  </div>
                  <div className="scroller__item">
                    <img src="/home/cmhl.svg" alt="cmhl" />
                  </div>
                  <div className="scroller__item">
                    <img src="/home/aeon-wellness.svg" alt="aeon-wellness" />
                  </div>
                  <div className="scroller__item">
                    <img src="/home/aeon-big.svg" alt="aeon-big" />
                  </div>
                  <div className="scroller__item">
                    <img src="/home/pahtama.svg" alt="pahtama" />
                  </div>
                  <div className="scroller__item">
                    <img src="/home/city.svg" alt="city" />
                  </div>
                  <div className="scroller__item">
                    <img src="/home/png.svg" alt="png" />
                  </div>
                  <div className="scroller__item">
                    <img src="/home/kids.svg" alt="kids" />
                  </div>
                  <div className="scroller__item">
                    <img src="/home/komaiso.svg" alt="komaiso" />
                  </div>
                  <div className="scroller__item">
                    <img src="/home/daiso.svg" alt="daiso" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <section className="md:mb-20 mb-10 relative">
          <div className="absolute bg-[#EDEFF7] w-full -z-10 h-[422px]">
            <motion.div
              className="relative w-full h-full"
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: { duration: 0.5 },
              }}
              viewport={{ once: true }}
            >
              <img
                className="absolute sm:top-[27px]"
                src="/home/Isolation_Mode1.svg"
                alt="Isolation_Mode1"
              />
              <img
                className="absolute sm:bottom-[146px] sm:left-[165px]"
                src="/home/Isolation_Mode2.svg"
                alt="Isolation_Mode2"
              />
              <img
                className="absolute sm:top-[58px] sm:right-[175px]"
                src="/home/Isolation_Mode3.svg"
                alt="Isolation_Mode3"
              />
              <img
                className="absolute sm:right-7 bottom-0"
                src="/home/Isolation_Mode4.svg"
                alt="Isolation_Mode4"
              />
            </motion.div>
          </div>

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
              <h2 className="font-bold text-neutral-n-90 sm:text-[32px] text-xl sm:leading-[48px] mb-5 md:w-[679px]">
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
              <p className="md:w-[679px] max-sm:text-sm text-neutral-n-700">
                Unlock the full potential of your retail business with our
                innovative solutions. Explore the unrivaled benefits that make
                us the ultimate choice for retailers.
              </p>
            </motion.div>
          </div>
          <motion.div
            className="scroll-horizontal"
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              y: [70, 0],
              transition: { duration: 0.6, delay: 1 },
            }}
            viewport={{ once: true }}
          >
            <div className="pb-8 flex flex-nowrap overflow-x-auto xl:gap-12 gap-3 lg:gap-8 px-4 md:px-0">
              <div className="bg-white p-5 rounded-lg min-w-[340px] lg:ml-[43px] xl:ml-[100px] shadow-[0px_2px_12px_0px_rgba(164,164,164,0.25)]">
                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 ">
                  <img src="/icons/ShoppingCart.svg" alt="ShoppingCart" />
                </div>
                <h3 className="mb-3 font-bold">
                  Standard retail operations worldwide
                </h3>
                <p className="text-neutral-n-90 max-sm:text-sm">
                  Has best practices and industry standards tailoring your
                  digital operations to meet your unique business goals and
                  customer needs
                </p>
              </div>
              <div className="bg-white p-5 rounded-lg min-w-[340px] shadow-[0px_2px_12px_0px_rgba(164,164,164,0.25)]">
                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 ">
                  <img src="/icons/Team.svg" alt="Team" />
                </div>
                <h3 className="mb-3 font-bold">
                  Deepen your customer experience
                </h3>
                <p className="text-neutral-n-90 max-sm:text-sm">
                  With One Retail you can enhance the overall satisfaction, and
                  emotional connection to your customers to build strong and
                  long-lasting relationship
                </p>
              </div>
              <div className="bg-white p-5 rounded-lg min-w-[340px] shadow-[0px_2px_12px_0px_rgba(164,164,164,0.25)]">
                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 ">
                  <img src="/icons/FundView.svg" alt="FundView" />
                </div>
                <h3 className="mb-3 font-bold">
                  Valuable data-driven insights
                </h3>
                <p className="text-neutral-n-90 max-sm:text-sm">
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
                <p className="text-neutral-n-90 max-sm:text-sm">
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
                <p className="text-neutral-n-90 max-sm:text-sm">
                  Expand your business to meet customer expectations in a
                  dynamic growth with One Retail CRM
                </p>
              </div>
              <div className="bg-white p-5 rounded-lg min-w-[340px] md:mr-[100px] shadow-[0px_2px_12px_0px_rgba(164,164,164,0.25)]">
                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 ">
                  <img src="/icons/DollarCircle.svg" alt="DollarCircle" />
                </div>
                <h3 className="mb-3 font-bold">Cost saving potentials</h3>
                <p className="text-neutral-n-90 max-sm:text-sm">
                  Implementing cost-saving measures, your business can increase
                  profitability, reinvest your resources into growth
                  initiatives, and gain a competitive edge
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        <section>
          <div className="grid grid-cols-2 xl:gap-x-20 lg:gap-x-[72px] items-center xl:px-24 lg:px-12 px-4 md:mb-16 mb-8">
            <motion.div
              className="col-span-2 md:col-span-1"
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: { duration: 0.5, delay: 1 },
              }}
              viewport={{ once: true }}
            >
              <h2 className="font-bold text-neutral-n-90 sm:text-[32px] text-xl sm:leading-[48px] mb-5 md:mb-0 md:w-[679px]">
                One Retail <span className="text-primary">Integrated</span>{" "}
                system
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
              <p className="text-neutral-n-80 max-sm:text-sm">
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
            <div className="grid grid-cols-12 md:mb-40 mb-10">
              <div className="xl:col-span-7 lg:col-span-6 col-span-12 bg-[#EDEFF7] md:py-10 max-md:pb-5 max-md:pt-3 md:pr-10 xl:pl-24 lg:pl-10 px-4 rounded-r-[20px] order-last md:order-first">
                {integrated == 0 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      transition: { duration: 0.3 },
                    }}
                  >
                    <div className="flex items-center gap-x-4 mb-5">
                      <img
                        className="-ml-3 -mb-2"
                        src="/icons/pos-icon-red.svg"
                        alt=""
                      />
                      <h3>Point of Sale (POS)</h3>
                    </div>
                    <h3 className="text-neutral-n-90 font-bold sm:text-2xl mb-5">
                      Seamless Transactions and{" "}
                      <span className="text-primary">Enhanced</span> Efficiency
                      with Our Point of Sale
                    </h3>
                    <p className="text-neutral-n-90 mb-5 max-sm:text-sm">
                      One Retail Point of Sale is a combination of hardware and
                      software that highly support transaction process. POS
                      accept any payments type such as credit/debit card, cash,
                      vouchers, points.
                    </p>
                    <Link
                      href="#"
                      className="flex items-center gap-x-2 text-sm font-medium text-primary"
                    >
                      Explore Point of Sale (POS)
                      <Icon
                        className="text-primary"
                        icon="ri:arrow-right-line"
                      />
                    </Link>
                  </motion.div>
                )}
                {integrated == 1 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      transition: { duration: 0.3 },
                    }}
                  >
                    <div className="flex items-center gap-x-4 mb-5">
                      <img
                        className="-ml-3 -mb-2"
                        src="/icons/smo-icon-yellow.svg"
                        alt=""
                      />
                      <h3>Self Mobile Ordering</h3>
                    </div>
                    <h3 className="text-neutral-n-90 font-bold sm:text-2xl mb-5">
                      Effortless Ordering at Your{" "}
                      <span className="text-primary">Fingertips</span> with Self
                      Mobile Ordering
                    </h3>
                    <p className="text-neutral-n-90 mb-5 max-sm:text-sm">
                      One Retail Self-order providing deep personalized customer
                      experience by quick scanning the product barcode and allow
                      them to view the menu then can quickly add it to cart.
                    </p>
                    <Link
                      href="#"
                      className="flex items-center gap-x-2 text-sm font-medium text-primary"
                    >
                      Explore Self Mobile Ordering
                      <Icon
                        className="text-primary"
                        icon="ri:arrow-right-line"
                      />
                    </Link>
                  </motion.div>
                )}
                {integrated == 2 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      transition: { duration: 0.3 },
                    }}
                  >
                    <div className="flex items-center gap-x-4 mb-5">
                      <img
                        className="-ml-3 -mb-2"
                        src="/icons/ose-icon-blue.svg"
                        alt=""
                      />
                      <h3>Online Shopping Experience</h3>
                    </div>
                    <h3 className="text-neutral-n-90 font-bold sm:text-2xl mb-5">
                      The Ultimate Online Shopping Destination: Discover{" "}
                      <span className="text-primary">Convenience</span> and
                      Variety
                    </h3>
                    <p className="text-neutral-n-90 mb-5 max-sm:text-sm">
                      nurturing strong and lasting relationships with customers
                      by utilize advanced technology to leverage your business
                      performance in order to enhance customer satisfaction.
                    </p>
                    <Link
                      href="#"
                      className="flex items-center gap-x-2 text-sm font-medium text-primary"
                    >
                      Explore Online Shopping Experience
                      <Icon
                        className="text-primary"
                        icon="ri:arrow-right-line"
                      />
                    </Link>
                  </motion.div>
                )}
                {integrated == 3 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      transition: { duration: 0.3 },
                    }}
                  >
                    <div className="flex items-center gap-x-4 mb-5">
                      <img
                        className="-ml-3 -mb-2"
                        src="/icons/sp-icon-green.svg"
                        alt=""
                      />
                      <h3>Supplier Portal</h3>
                    </div>
                    <h3 className="text-neutral-n-90 font-bold sm:text-2xl mb-5">
                      Efficient Supplier Management Made{" "}
                      <span className="text-primary">Easy</span> : Introducing
                      Our Supplier Portal
                    </h3>
                    <p className="text-neutral-n-90 mb-5 max-sm:text-sm">
                      Streamline tedious manual processes and communications
                      with key business partners through a digital interface.
                    </p>
                    <Link
                      href="#"
                      className="flex items-center gap-x-2 text-sm font-medium text-primary"
                    >
                      Explore Supplier Portal
                      <Icon
                        className="text-primary"
                        icon="ri:arrow-right-line"
                      />
                    </Link>
                  </motion.div>
                )}
                {integrated == 4 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      transition: { duration: 0.3 },
                    }}
                  >
                    <div className="flex items-center gap-x-4 mb-5">
                      <img
                        className="-ml-3 -mb-2"
                        src="/icons/sdo-icon-red.svg"
                        alt=""
                      />
                      <h3>Store Daily Operation</h3>
                    </div>
                    <h3 className="text-neutral-n-90 font-bold sm:text-2xl mb-5">
                      Behind the Scenes:{" "}
                      <span className="text-primary">Managing</span> Store Daily
                      Operations with Excellence
                    </h3>
                    <p className="text-neutral-n-90 mb-5 max-sm:text-sm">
                      Get your store daily operations done smoothly with One
                      Retail Daily Operations that support your team in doing
                      their daily operations in store. Replacing traditional way
                      to save data through manual key in and paper.
                    </p>
                    <Link
                      href="#"
                      className="flex items-center gap-x-2 text-sm font-medium text-primary"
                    >
                      Explore Store Daily Operation
                      <Icon
                        className="text-primary"
                        icon="ri:arrow-right-line"
                      />
                    </Link>
                  </motion.div>
                )}
                {integrated == 5 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      transition: { duration: 0.3 },
                    }}
                  >
                    <div className="flex items-center gap-x-4 mb-5">
                      <img
                        className="-ml-3 -mb-2"
                        src="/icons/api-icon-blue.svg"
                        alt=""
                      />
                      <h3>API Integration</h3>
                    </div>
                    <h3 className="text-neutral-n-90 font-bold sm:text-2xl mb-5">
                      Building Bridges with API Integration: Unleash the{" "}
                      <span className="text-primary">Potential</span> of Your
                      Applications
                    </h3>
                    <p className="text-neutral-n-90 mb-5 max-sm:text-sm">
                      Unlock full potential of One Retail with our powerful API
                      integration, seamlessly connecting your POS, CRM, employee
                      management, and more. Experience streamlined workflows,
                      real-time data synchronization, and endless possibilities
                      for business optimization.
                    </p>
                  </motion.div>
                )}
                {integrated == 6 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      transition: { duration: 0.3 },
                    }}
                  >
                    <div className="flex items-center gap-x-4 mb-5">
                      <img
                        className="-ml-3 -mb-2"
                        src="/icons/ess-icon-green.svg"
                        alt=""
                      />
                      <h3>Employee Self Service</h3>
                    </div>
                    <h3 className="text-neutral-n-90 font-bold sm:text-2xl mb-5">
                      "Putting Employees in the{" "}
                      <span className="text-primary">Driver's Seat</span> :
                      Discover the Power of Self-Service"
                    </h3>
                    <p className="text-neutral-n-90 mb-5 max-sm:text-sm">
                      Streamline automation within your office or workplace
                      environment to enhance your team productivity, efficiency,
                      and collaboration by reducing manual effort . Let's say Hi
                      to automation, Goodbye manual!
                    </p>
                    <Link
                      href="#"
                      className="flex items-center gap-x-2 text-sm font-medium text-primary"
                    >
                      Explore Employee Self Service
                      <Icon
                        className="text-primary"
                        icon="ri:arrow-right-line"
                      />
                    </Link>
                  </motion.div>
                )}
              </div>
              <div className="md:col-span-5 col-span-12 flex justify-center sm:block">
                <div className="relative max-w-[400px] max-h-[400px] h-[490px] lg:ml-12 xl:ml-24">
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
                        onClick={() => setIntegrated(6)}
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
                        onClick={() => setIntegrated(1)}
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
                        onClick={() => setIntegrated(5)}
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
                        onClick={() => setIntegrated(3)}
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
                        onClick={() => setIntegrated(0)}
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
                        onClick={() => setIntegrated(4)}
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
                        onClick={() => setIntegrated(2)}
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
          <div className="xl:px-24 lg:px-12 md:mb-20 mb-10 px-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                y: [-10, 5, 0],
                transition: { duration: 0.3 },
              }}
              viewport={{ once: true }}
            >
              <h2 className="font-bold text-neutral-n-90 sm:text-[32px] text-xl sm:leading-[48px] mb-10 text-center">
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
                    <h3 className="text-primary font-bold sm:text-xl mb-3">
                      Order Management System
                    </h3>
                    <p className="max-sm:text-sm">
                      A way to reduce long queue at your store and faster
                      checkout process!
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
                    <h3 className="text-primary font-bold sm:text-xl mb-3">
                      Customer Relationship Management
                    </h3>
                    <p className="max-sm:text-sm">
                      Leverage technology, analyze customer data, and build
                      strong relationships. Discover with One Retail!
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
                    <h3 className="text-primary font-bold sm:text-xl mb-3">
                      Office Automation
                    </h3>
                    <p className="max-sm:text-sm">
                      Revolutionize retail with our all-in-One solutions.
                      Goodbye manual, Hello efficiency!
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
                    <h3 className="text-primary font-bold sm:text-xl mb-3">
                      Supplier Management
                    </h3>
                    <p className="max-sm:text-sm">
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
                    <div className="flex justify-between xl:mt-10 mt-6 mb-3 items-center">
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
                        <h3 className="text-neutral-n-100 sm:text-xl font-semibold">
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
                    <p className="mb-6 text-neutral-n-90 max-sm:text-sm">
                      {imageSlideIndex == 1 &&
                        "One Retail is a combination of hardware and software that highly support transaction process. POS accept any payments type such as credit/debit card, cash, vouchers, points. Record transaction and payment."}
                      {imageSlideIndex == 2 &&
                        "Optimized customer entire check-out process with One Retail SCO Platform to support adding or scanning item to payment. It’s also integrated with payment system so customer can pay at once with their desired payment method."}
                      {imageSlideIndex == 3 &&
                        "One Retail Self-order providing deep personalized customer experience by quick scanning the product barcode and allow them to view the menu then can quickly add it to cart. This also reduce business cost because customer no longer need server assistance"}
                    </p>
                    <Link
                      href="/products/order-management-system"
                      className="btn-border-primary w-fit flex font-semibold items-center py-2.5 px-4"
                    >
                      Learn more
                    </Link>
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
                              <img
                                src="/icons/gamification-icon.svg"
                                alt="sco"
                              />
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
                        <h3 className="text-neutral-n-100 sm:text-xl font-semibold">
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
                    <p className="mb-6 text-neutral-n-90 max-sm:text-sm">
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
                    <Link
                      href="/products/crm"
                      className="btn-border-primary w-fit flex font-semibold items-center py-2.5 px-4"
                    >
                      Learn more
                    </Link>
                  </div>

                  <div className={exploreIndex == 3 ? "" : "hidden"}>
                    <div className="flex justify-center">
                      <img
                        className="h-[329px] object-cover"
                        src={`/home/oa-new-${imageSlideIndex}.svg`}
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
                        <h3 className="text-neutral-n-100 sm:text-xl font-semibold">
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
                    <p className="mb-6 text-neutral-n-90 max-sm:text-sm">
                      {imageSlideIndex == 1 &&
                        "Empower employees with One Retail ESS: Real-time access to credentials data, online attendance, bookings, and additional features like employee feedback, live chat, e-learning, and more."}
                      {imageSlideIndex == 2 &&
                        "Optimize store operations with One Retail Daily Operations: Streamline audits, monitor temperatures, and receive alerts for efficient management."}
                      {imageSlideIndex == 3 &&
                        "Efficiently manage maintenance with One Retail: Set recurring schedules, submit help requests, track issue status, and ensure prompt resolution for technical issues."}
                    </p>
                    <Link
                      href="/products/office-automation"
                      className="btn-border-primary w-fit flex font-semibold items-center py-2.5 px-4"
                    >
                      Learn more
                    </Link>
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
                        <h3 className="text-neutral-n-100 sm:text-xl font-semibold">
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
                    <p className="mb-6 text-neutral-n-90 max-sm:text-sm">
                      {imageSlideIndex == 1 &&
                        "One Retail Partner Platform system is designed to support suppliers in managing their data and purchases at real time. This also allow company to manages their supplier and allow them to announce any important message to supplier instantly throughs announcement feature"}
                      {imageSlideIndex == 2 &&
                        "One Retail Non Trade Portal supplier support  registration form with level of approval, allow Non Trade Supplier to access their Purchase Order process to end (Invoice). Non Trade Portal integration can track of approvals, rejections, and pending requests along with rejection reasons."}
                    </p>
                    <Link
                      href="/products/supplier-management"
                      className="btn-border-primary w-fit flex font-semibold items-center py-2.5 px-4"
                    >
                      Learn more
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="sm:hidden block">
              <ExploreAccordionItem
                resetSlideIndex={resetSlideIndex}
                setmaxLength={setmaxLength}
                index={1}
                setActiveExploreAccordion={setActiveExploreAccordion}
                isActive={activeExploreAccordion == 1}
                title="Order Management System"
                desc="A way to reduce long queue at your store and faster checkout process!"
                content={
                  <div>
                    <div className="flex justify-center">
                      <Swiper
                        slidesPerView={1}
                        onSlideNextTransitionEnd={slideRight}
                        onSlidePrevTransitionEnd={slideLeft}
                        loop={true}
                      >
                        <SwiperSlide>
                          <img src="/home/oms-1.svg" alt="oms" />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src="/home/oms-2.svg" alt="oms" />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src="/home/oms-3.svg" alt="oms" />
                        </SwiperSlide>
                      </Swiper>
                    </div>
                    <div className="flex justify-between md:mt-4 mb-3 mt-2 items-center">
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
                        <h3 className="text-neutral-n-100 sm:text-xl font-semibold">
                          {imageSlideIndex == 1 && "Point of Sale (POS)"}
                          {imageSlideIndex == 2 && "Self Check-out (SCO)"}
                          {imageSlideIndex == 3 && "Self Ordering"}
                        </h3>
                      </div>
                    </div>
                    <p className="mb-6 text-neutral-n-90 max-sm:text-sm">
                      {imageSlideIndex == 1 &&
                        "One Retail is a combination of hardware and software that highly support transaction process. POS accept any payments type such as credit/debit card, cash, vouchers, points. Record transaction and payment."}
                      {imageSlideIndex == 2 &&
                        "Optimized customer entire check-out process with One Retail SCO Platform to support adding or scanning item to payment. It’s also integrated with payment system so customer can pay at once with their desired payment method."}
                      {imageSlideIndex == 3 &&
                        "One Retail Self-order providing deep personalized customer experience by quick scanning the product barcode and allow them to view the menu then can quickly add it to cart. This also reduce business cost because customer no longer need server assistance"}
                    </p>
                    <div className="flex items-center justify-between">
                      <Link
                        href="/products/order-management-system"
                        className="btn-border-primary flex font-semibold items-center py-2.5 px-4 max-sm:text-xs"
                      >
                        Learn more
                      </Link>
                      <div className="flex items-center gap-x-2">
                        {imageSlideIndex == 1 ? (
                          <img src="/icons/dot-active.svg" alt="active" />
                        ) : (
                          <div
                            // onClick={() => setImageSlideIndex(1)}
                            className="cursor-pointer w-[10px] h-[10px] bg-neutral-n-40 rounded-full"
                          ></div>
                        )}
                        {imageSlideIndex == 2 ? (
                          <img src="/icons/dot-active.svg" alt="active" />
                        ) : (
                          <div
                            // onClick={() => setImageSlideIndex(2)}
                            className="cursor-pointer w-[10px] h-[10px] bg-neutral-n-40 rounded-full"
                          ></div>
                        )}
                        {imageSlideIndex == 3 ? (
                          <img src="/icons/dot-active.svg" alt="active" />
                        ) : (
                          <div
                            // onClick={() => setImageSlideIndex(3)}
                            className="cursor-pointer w-[10px] h-[10px] bg-neutral-n-40 rounded-full"
                          ></div>
                        )}
                      </div>
                    </div>
                  </div>
                }
              />

              <ExploreAccordionItem
                resetSlideIndex={resetSlideIndex}
                setmaxLength={setmaxLength}
                index={2}
                setActiveExploreAccordion={setActiveExploreAccordion}
                isActive={activeExploreAccordion == 2}
                title="Customer Relationship Management"
                desc="Leverage technology, analyze customer data, and build strong relationships. Discover with One Retail!"
                content={
                  <div>
                    <div className="flex justify-center">
                      <Swiper
                        slidesPerView={1}
                        onSlideNextTransitionEnd={slideRight}
                        onSlidePrevTransitionEnd={slideLeft}
                        loop={true}
                      >
                        <SwiperSlide>
                          <img src="/home/crm-1.svg" alt="crm" />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src="/home/crm-2.svg" alt="crm" />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src="/home/crm-3.svg" alt="crm" />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src="/home/crm-4.svg" alt="crm" />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src="/home/crm-5.svg" alt="crm" />
                        </SwiperSlide>
                      </Swiper>
                    </div>
                    <div className="flex justify-between md:mt-4 mb-3 mt-2 items-center">
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
                    <p className="mb-6 text-neutral-n-90 max-sm:text-sm">
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
                    <div className="flex items-center justify-between">
                      <Link
                        href="/products/crm"
                        className="btn-border-primary flex font-semibold items-center py-2.5 px-4 max-sm:text-xs"
                      >
                        Learn more
                      </Link>
                      <div className="flex items-center gap-x-2">
                        {imageSlideIndex == 1 ? (
                          <img src="/icons/dot-active.svg" alt="active" />
                        ) : (
                          <div
                            // onClick={() => setImageSlideIndex(1)}
                            className="cursor-pointer w-[10px] h-[10px] bg-neutral-n-40 rounded-full"
                          ></div>
                        )}
                        {imageSlideIndex == 2 ? (
                          <img src="/icons/dot-active.svg" alt="active" />
                        ) : (
                          <div
                            // onClick={() => setImageSlideIndex(2)}
                            className="cursor-pointer w-[10px] h-[10px] bg-neutral-n-40 rounded-full"
                          ></div>
                        )}
                        {imageSlideIndex == 3 ? (
                          <img src="/icons/dot-active.svg" alt="active" />
                        ) : (
                          <div
                            // onClick={() => setImageSlideIndex(3)}
                            className="cursor-pointer w-[10px] h-[10px] bg-neutral-n-40 rounded-full"
                          ></div>
                        )}
                        {imageSlideIndex == 4 ? (
                          <img src="/icons/dot-active.svg" alt="active" />
                        ) : (
                          <div
                            // onClick={() => setImageSlideIndex(4)}
                            className="cursor-pointer w-[10px] h-[10px] bg-neutral-n-40 rounded-full"
                          ></div>
                        )}
                        {imageSlideIndex == 5 ? (
                          <img src="/icons/dot-active.svg" alt="active" />
                        ) : (
                          <div
                            // onClick={() => setImageSlideIndex(5)}
                            className="cursor-pointer w-[10px] h-[10px] bg-neutral-n-40 rounded-full"
                          ></div>
                        )}
                      </div>
                    </div>
                  </div>
                }
              />

              <ExploreAccordionItem
                resetSlideIndex={resetSlideIndex}
                setmaxLength={setmaxLength}
                index={3}
                setActiveExploreAccordion={setActiveExploreAccordion}
                isActive={activeExploreAccordion == 3}
                title="Office Automation"
                desc="Revolutionize retail with our all-in-One solutions. Goodbye manual, Hello efficiency!"
                content={
                  <div>
                    <div className="flex justify-center">
                      <Swiper
                        slidesPerView={1}
                        onSlideNextTransitionEnd={slideRight}
                        onSlidePrevTransitionEnd={slideLeft}
                        loop={true}
                      >
                        <SwiperSlide>
                          <img src="/home/oa-new-1.svg" alt="oa" />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src="/home/oa-new-2.svg" alt="oa" />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src="/home/oa-new-3.svg" alt="oa" />
                        </SwiperSlide>
                      </Swiper>
                    </div>
                    <div className="flex justify-between md:mt-4 mb-3 mt-2 items-center">
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
                    <p className="mb-6 text-neutral-n-90 max-sm:text-sm">
                      {imageSlideIndex == 1 &&
                        "Empower employees with One Retail ESS: Real-time access to credentials data, online attendance, bookings, and additional features like employee feedback, live chat, e-learning, and more."}
                      {imageSlideIndex == 2 &&
                        "Optimize store operations with One Retail Daily Operations: Streamline audits, monitor temperatures, and receive alerts for efficient management."}
                      {imageSlideIndex == 3 &&
                        "Efficiently manage maintenance with One Retail: Set recurring schedules, submit help requests, track issue status, and ensure prompt resolution for technical issues."}
                    </p>
                    <div className="flex items-center justify-between">
                      <Link
                        href="/products/office-automation"
                        className="btn-border-primary flex font-semibold items-center py-2.5 px-4 max-sm:text-xs"
                      >
                        Learn more
                      </Link>
                      <div className="flex items-center gap-x-2">
                        {imageSlideIndex == 1 ? (
                          <img src="/icons/dot-active.svg" alt="active" />
                        ) : (
                          <div
                            // onClick={() => setImageSlideIndex(1)}
                            className="cursor-pointer w-[10px] h-[10px] bg-neutral-n-40 rounded-full"
                          ></div>
                        )}
                        {imageSlideIndex == 2 ? (
                          <img src="/icons/dot-active.svg" alt="active" />
                        ) : (
                          <div
                            // onClick={() => setImageSlideIndex(2)}
                            className="cursor-pointer w-[10px] h-[10px] bg-neutral-n-40 rounded-full"
                          ></div>
                        )}
                        {imageSlideIndex == 3 ? (
                          <img src="/icons/dot-active.svg" alt="active" />
                        ) : (
                          <div
                            // onClick={() => setImageSlideIndex(3)}
                            className="cursor-pointer w-[10px] h-[10px] bg-neutral-n-40 rounded-full"
                          ></div>
                        )}
                      </div>
                    </div>
                  </div>
                }
              />

              <ExploreAccordionItem
                resetSlideIndex={resetSlideIndex}
                setmaxLength={setmaxLength}
                index={4}
                setActiveExploreAccordion={setActiveExploreAccordion}
                isActive={activeExploreAccordion == 4}
                title="Supplier Management"
                desc="Allows your business to collaborate and interact with suppliers in a centralized and efficient manner through digital interface."
                content={
                  <div>
                    <div className="flex justify-center">
                      <Swiper
                        slidesPerView={1}
                        onSlideNextTransitionEnd={slideRight}
                        onSlidePrevTransitionEnd={slideLeft}
                        loop={true}
                      >
                        <SwiperSlide>
                          <img src="/home/sm-1.svg" alt="sm" />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src="/home/sm-2.svg" alt="sm" />
                        </SwiperSlide>
                      </Swiper>
                    </div>
                    <div className="flex justify-between md:mt-4 mb-3 mt-2 items-center">
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
                    <p className="mb-6 text-neutral-n-90 max-sm:text-sm">
                      {imageSlideIndex == 1 &&
                        "One Retail Partner Platform system is designed to support suppliers in managing their data and purchases at real time. This also allow company to manages their supplier and allow them to announce any important message to supplier instantly throughs announcement feature"}
                      {imageSlideIndex == 2 &&
                        "One Retail Non Trade Portal supplier support  registration form with level of approval, allow Non Trade Supplier to access their Purchase Order process to end (Invoice). Non Trade Portal integration can track of approvals, rejections, and pending requests along with rejection reasons."}
                    </p>
                    <div className="flex items-center justify-between">
                      <Link
                        href="/products/supplier-management"
                        className="btn-border-primary flex font-semibold items-center py-2.5 px-4 max-sm:text-xs"
                      >
                        Learn more
                      </Link>
                      <div className="flex items-center gap-x-2">
                        {imageSlideIndex == 1 ? (
                          <img src="/icons/dot-active.svg" alt="active" />
                        ) : (
                          <div
                            // onClick={() => setImageSlideIndex(1)}
                            className="cursor-pointer w-[10px] h-[10px] bg-neutral-n-40 rounded-full"
                          ></div>
                        )}
                        {imageSlideIndex == 2 ? (
                          <img src="/icons/dot-active.svg" alt="active" />
                        ) : (
                          <div
                            // onClick={() => setImageSlideIndex(2)}
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
          <div className="pb-24 xl:py-24 xl:mb-20">
            <div className="flex justify-between items-center xl:px-24 lg:px-12 px-4 mb-[38px]">
              <div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{
                    opacity: 1,
                    x: [-100, 0],
                    transition: { duration: 0.5 },
                  }}
                  viewport={{ once: true }}
                >
                  <h2 className="mb-3.5 text-[#0A0A0A] font-bold sm:text-[32px]">
                    <span className="text-primary">Browse and explore</span>{" "}
                    your business potential
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
              <div className="grid grid-cols-3 xl:pl-24 lg:px-12 xl:pr-0 max-xl:pr-24 xl:gap-x-20 lg:gap-x-10 gap-x-4">
                <Link className="cool-link pb-4" href="#">
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
                  <p className="line-clamp-3 text-neutral-n-90 mb-8">
                    When we set out to bring product analytics to our business,
                    we knew that analytics for company revenue, in
                    particular,...
                  </p>
                </Link>

                <Link className="cool-link pb-4" href="#">
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
                  <p className="line-clamp-3 text-neutral-n-90 mb-8">
                    Customer journey is one of the most powerful tools for
                    building great experience. An when employed to
                    thoughtfullness and...
                  </p>
                </Link>

                <Link className="cool-link pb-4" href="#">
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
                  <p className="line-clamp-3 text-neutral-n-90 mb-8">
                    When we set out to bring product analytics to our business,
                    we knew that analytics for company revenue, in
                    particular,...
                  </p>
                </Link>
              </div>

              <div className="mx-[24px] max-xl:hidden">
                <div className="flex justify-center items-center rounded-full h-[49px] w-[49px] border border-[#1F40AE]">
                  <Icon
                    width={24}
                    className="text-[#1F40AE]"
                    icon="ri:arrow-right-line"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center gap-x-4 xl:hidden">
              <img src="/home/arrow-left.svg" alt="arrow-left.svg" />
              <img src="/home/arrow-right.svg" alt="arrow-right.svg" />
            </div>
          </div>
        </section>

        <FAQ />

        <TalkToUs />
      </main>
      <FooterWithSocialMediaIcons />
    </>
  );
}
