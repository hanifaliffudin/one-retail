"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import FAQ from "@/app/components/FAQ";
import NavbarWithCTAButton from "@/app/components/Navbar";
import FooterWithSocialMediaIcons from "@/app/components/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Autoplay } from "swiper/modules";

const CRMPage = () => {
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
          <div className="relative lg:h-[867px] max-sm:h-[767px] max-lg:h-[1400px] mt-[135px]">
            <img
              className="absolute w-full sm:-top-[133px] -top-10 opacity-60"
              src="/products/crm/bg-hero-crm.svg"
              alt="hero"
            />
            <div className="absolute grid w-full mx-auto lg:gap-8 xl:gap-0 grid-cols-12">
              <div className="xl:ml-24 ml-10 px-4 lg:px-0 max-lg:px-8 lg:mt-[167px] mt-6 mb-7 place-self-center lg:col-span-6 col-span-12">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    x: [-100, 0],
                    transition: { duration: 0.5 },
                  }}
                >
                  <div className="lg:max-w-[533px] ">
                    <p className="sm:font-medium text-neutral-n-80 sm:text-lg max-sm:text-sm mb-3">
                      Transforming relationships with One Retail CRM
                    </p>
                    <h1 className="sm:text-[44px] text-[22px] sm:leading-[62px] leading-[33px] font-bold mb-5">
                      Build Stronger Connection with Your Customer
                    </h1>

                    <p className="max-sm:text-sm mb-14 text-lg text-gray-600">
                      Bring new experiences to your customers by enabling
                      shopping across different mediums,leading your business to
                      competitive advantage in the market.
                    </p>
                  </div>
                  <div className="flex">
                    <Link
                      href="/contact"
                      className="btn-primary text-neutral-n-10 py-2.5 px-4 max-sm:text-xs font-semibold mr-5"
                    >
                      Let’s Get Demo!
                    </Link>
                    <Link
                      href="#nurturing"
                      onClick={handleScroll}
                      className="btn-border-primary py-2.5 px-4 max-sm:text-xs font-semibold"
                    >
                      Learn More
                    </Link>
                  </div>

                  <div className="mt-[78px] max-sm:hidden">
                    <h2
                      className="mb-2.5 font-bold text-neutral-n-80 "
                      id="nurturing"
                    >
                      Been Trusted By
                    </h2>

                    <div className="h-[100px]">
                      <Swiper
                        className="max-h-[100px]"
                        slidesPerView={1}
                        direction={"vertical"}
                        autoplay={{
                          delay: 7000,
                          disableOnInteraction: false,
                        }}
                        speed={1000}
                        modules={[Autoplay]}
                        loop
                      >
                        <SwiperSlide>
                          {" "}
                          <div className="flex overflow-x-auto">
                            <img src="/home/aeon.svg" alt="aeon" />
                            <img
                              src="/home/aeon-wellness.svg"
                              alt="aeon-wellness"
                            />
                            <img src="/home/pahtama.svg" alt="pahtama" />
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className="flex overflow-x-auto">
                            <img src="/home/cmhl.svg" alt="cmhl" />
                            <img src="/home/city.svg" alt="city" />
                            <img src="/home/kids.svg" alt="kids" />
                          </div>
                        </SwiperSlide>
                      </Swiper>
                    </div>
                  </div>
                </motion.div>
              </div>
              <div className="lg:col-span-6 col-span-12 lg:mt-[92px] relative">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    x: [100, 0],
                    transition: { duration: 0.5, delay: 1 },
                  }}
                >
                  <img
                    className="absolute right-0 top-0 max-sm:hidden"
                    src="/products/crm/hero-1.svg"
                    alt="hero-1"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    y: [100, 0],
                    transition: { duration: 0.5, delay: 1 },
                  }}
                >
                  <img
                    className="absolute top-36 -left-24 max-sm:hidden"
                    src="/products/crm/hero-2.svg"
                    alt="hero-2"
                  />
                </motion.div>

                <img
                  className="sm:hidden"
                  src="/products/crm/hero-mobile.svg"
                  alt="hero-mobile"
                />
              </div>
            </div>
          </div>
          <div className="sm:hidden">
            <h2 className="mb-2.5 font-bold text-center text-neutral-n-80 ">
              Been Trusted By
            </h2>

            <div className="flex overflow-x-auto">
              <img src="/home/aeon.svg" alt="aeon" />
              <img src="/home/cmhl.svg" alt="cmhl" />
              <img src="/home/aeon-wellness.svg" alt="aeon-wellness" />
              <img src="/home/city.svg" alt="city" />
              <img src="/home/pahtama.svg" alt="pahtama" />
              <img src="/home/kids.svg" alt="kids" />
            </div>
          </div>
        </section>

        <section>
          <div className="grid grid-cols-2 mt-20 sm:px-24 px-4 gap-x-[107px] gap-y-6">
            <motion.div
              className="col-span-2 lg:col-span-1 relative lg:h-[456px] max-md:h-[340px] md:h-[500px]"
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: { duration: 0.5 },
              }}
              viewport={{ once: true }}
            >
              <img
                className="absolute w-full"
                src="/products/crm/bg-nurturing.svg"
                alt="bg-nurturing"
              />
              <img
                className="absolute w-full"
                src="/products/crm/nurturing.svg"
                alt="nurturing"
              />
            </motion.div>

            <div className="col-span-2 lg:col-span-1 ">
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
                  <h2 className="font-bold sm:text-[36px] text-xl sm:leading-[54px] mb-3">
                    Nurturing Strong <br className="max-xl:hidden" />{" "}
                    Relationship with Customers
                  </h2>
                  <p className="text-gray-600 mb-8">
                    By utilize advanced technology to gather and analyze all
                    customer data to leverage your business performance in order
                    to enhance customer satisfaction. Let's get to know your
                    customer together with One Retail!
                  </p>
                  <div className="flex sm:mb-[72px] mb-6">
                    <Link
                      href="/contact"
                      className="btn-primary text-neutral-n-10 py-2.5 px-4 max-sm:text-xs font-semibold mr-5"
                    >
                      Let’s Get Demo!
                    </Link>
                  </div>
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
                  <hr />
                  <div className="flex gap-x-10 mt-6 items-center">
                    <div className="w-[187px]">
                      <h2 className="font-bold sm:text-[28px] text-[22px] leading-[38px] text-[#0F172A] sm:mb-2.5 mb-1">
                        16+
                      </h2>
                      <p className="text-[#4B5262] max-sm:text-sm">
                        Businesses are using & it’s growing everyday
                      </p>
                    </div>
                    <div className="inline-block my-6 w-[1px] self-stretch bg-[#E5EAF1]"></div>
                    <div className="w-[187px]">
                      <h2 className="font-bold sm:text-[28px] text-[22px] leading-[38px] text-[#0F172A] sm:mb-2.5 mb-1">
                        24+
                      </h2>
                      <p className="text-[#4B5262] max-sm:text-sm">
                        Features that helps your business gain customers
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <section id="benefits">
          <div className="flex justify-center mt-20 sm:mb-20 mb-6 px-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: { duration: 0.5 },
              }}
              viewport={{ once: true }}
            >
              <div className="sm:w-[541px] text-center">
                <h2 className="font-bold sm:text-[36px] text-xl sm:leading-[54px] mb-3">
                  Unlock Powerful Benefits <br className="sm:hidden" /> of Our
                  CRM
                </h2>
                <p className="text-[#52525B] max-sm:text-sm">
                  Supercharge your business with our CRM Solution.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-3 sm:px-24 text-center gap-x-[90px] gap-y-6 px-4">
            <motion.div
              className="col-span-3 lg:col-span-1"
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                x: [-100, 0],
                transition: { duration: 0.3, delay: 1 },
              }}
              viewport={{ once: true }}
            >
              <h3 className="font-bold sm:text-2xl mb-4">
                Streamline customer data
              </h3>
              <p className="text-neutral-n-80 mb-7 max-sm:text-sm">
                Organize and access customer information in one place, gaining a
                comprehensive view for personalized engagement
              </p>
              <img
                className="w-full"
                src="/products/crm/benefit-1.svg"
                alt="benefit 1"
              />
            </motion.div>

            <motion.div
              className="col-span-3 lg:col-span-1"
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                y: [100, 0],
                transition: { duration: 0.3, delay: 1 },
              }}
              viewport={{ once: true }}
            >
              <h3 className="font-bold sm:text-2xl mb-4">
                Enhance relationship
              </h3>
              <p className="text-neutral-n-80 mb-7 max-sm:text-sm">
                Nurture customer connections through timely follow-ups and deep
                understanding of preferences
              </p>
              <img
                className="w-full"
                src="/products/crm/benefit-2.svg"
                alt="benefit 2"
              />
            </motion.div>

            <motion.div
              className="col-span-3 lg:col-span-1"
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                x: [100, 0],
                transition: { duration: 0.3, delay: 1 },
              }}
              viewport={{ once: true }}
            >
              <h3 className="font-bold sm:text-2xl mb-4">Gain insights</h3>
              <p className="text-neutral-n-80 mb-7 max-sm:text-sm">
                Utilize reporting and analytics to make data-driven decisions,
                uncovering customer behavior and sales trends
              </p>
              <img
                className="w-full"
                src="/products/crm/benefit-3.svg"
                alt="benefit 3"
              />
            </motion.div>
          </div>
        </section>

        <section>
          <div
            id="el"
            className="relative max-sm:h-[2300px] max-xl:h-[2450px] h-[2100px]"
          >
            <img
              className="absolute top-0 left-0 max-xl:hidden"
              src="/products/crm/bg-crm.png"
              alt="bg-crm"
            />
            <img
              className="absolute top-0 left-0 xl:hidden w-full h-[2100px] sm:h-[2400px]"
              src="/products/crm/bg-crm-mobile.png"
              alt="bg-crm-mobile"
            />

            <div className="absolute z-10 sm:top-10 lg:px-24 px-4 w-full">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  x: [-100, 0],
                  transition: { duration: 0.5 },
                }}
                viewport={{ once: true }}
              >
                <div className="xl:w-[436px] xl:mt-48 mt-24 max-sm:px-4">
                  <h2 className="text-white font-bold sm:text-[36px] text-xl sm:leading-[54px] mb-3">
                    Customer Engagement & Loyalty
                  </h2>
                  <p className="text-neutral-n-50">
                    Boost customer engagement with One Retail CRM: Utilize
                    rewards such as points earning and redemption, tiered
                    membership, and other powerful features to encourage repeat
                    purchases and foster long-term loyalty.
                  </p>
                </div>
              </motion.div>

              <div className="mt-[34px] xl:hidden relative">
                <img
                  className="absolute -left-4 top-[38px]"
                  src="/products/crm/mockup-1-mobile.svg"
                  alt=""
                />
                <img
                  className="absolute -right-4"
                  src="/products/crm/mockup-2-mobile.svg"
                  alt=""
                />
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  transition: { duration: 0.5, delay: 0.5 },
                }}
                viewport={{ once: true }}
              >
                <div
                  id="gamification"
                  className="flex justify-center sm:mt-[479px] max-sm:mt-[500px] lg:mb-20 mb-6"
                >
                  <div className="w-[557px] text-center">
                    <h2 className="text-white font-bold sm:text-[36px] text-xl sm:leading-[54px] mb-3">
                      Level-Up Engagement with Gamification
                    </h2>
                    <p className="text-neutral-n-50 max-sm:text-sm">
                      Gamification creates an interactive and rewarding
                      experience that keeps customers engaged, motivated, and
                      loyal to your brand.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  transition: { duration: 0.5, delay: 1 },
                }}
                viewport={{ once: true }}
              >
                <div className="flex flex-wrap items-center justify-center gap-x-[59px] gap-y-5 sm:mb-[65px] mb-6 px-4">
                  <img
                    className="order-last xl:order-first"
                    src="/products/crm/levelup-1.svg"
                    alt="level up"
                  />
                  <div className="sm:w-[383px] max-sm:text-center">
                    <h3 className="font-bold text-neutral-n-10 mb-4 sm:text-2xl ">
                      Engaging Game-Like Elements
                    </h3>
                    <p className="text-neutral-n-50 max-sm:text-sm">
                      Integrate exciting features like Gacha, Spin the Wheel,
                      Lucky Draw, and Duck Hunt into your loyalty app. Create a
                      captivating experience that keeps users entertained and
                      motivated to participate.
                    </p>
                  </div>
                </div>
              </motion.div>

              <div className="flex flex-wrap items-center justify-center gap-x-[59px] sm:mb-[65px] mb-6 px-4">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{
                    opacity: 1,
                    x: [-100, 0],
                    transition: { duration: 0.5, delay: 1 },
                  }}
                  viewport={{ once: true }}
                >
                  <div className="sm:w-[383px] max-sm:text-center">
                    <h3 className="font-bold text-neutral-n-10 mb-4 sm:text-2xl">
                      Customized Games
                    </h3>
                    <p className="text-neutral-n-50 max-sm:text-sm">
                      Design and develop unique games tailored to your brand and
                      target audience. Enhance user engagement by offering
                      interactive and enjoyable gaming experiences within your
                      loyalty app.
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{
                    opacity: 1,
                    x: [100, 0],
                    transition: { duration: 0.5, delay: 1 },
                  }}
                  viewport={{ once: true }}
                >
                  <img src="/products/crm/levelup-2.svg" alt="level up" />
                </motion.div>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-x-[59px] sm:mb-[65px] mb-6 px-4">
                <motion.div
                  className="order-last xl:order-first max-sm:mt-4"
                  initial={{ opacity: 0 }}
                  whileInView={{
                    opacity: 1,
                    x: [-100, 0],
                    transition: { duration: 0.5, delay: 1 },
                  }}
                  viewport={{ once: true }}
                >
                  <img src="/products/crm/levelup-3.svg" alt="level up" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{
                    opacity: 1,
                    x: [100, 0],
                    transition: { duration: 0.5, delay: 1 },
                  }}
                  viewport={{ once: true }}
                >
                  <div className="sm:w-[383px] max-sm:text-center">
                    <h3 className="font-bold text-neutral-n-10 mb-4 sm:text-2xl">
                      Boost Customer Participation
                    </h3>
                    <p className="text-neutral-n-50 max-sm:text-sm">
                      Encourage active participation and repeated usage of your
                      loyalty app through gamification. Increase customer
                      engagement, loyalty, and satisfaction by making your
                      loyalty program more fun and interactive.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div
            id="ec"
            className="sm:px-24 px-4 sm:mb-[100px] max-sm:mb-10 max-sm:-mt-32"
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                x: [-100, 0],
                transition: { duration: 0.5 },
              }}
              viewport={{ once: true }}
            >
              <h2 className="font-bold sm:text-[36px] text-xl sm:leading-[54px] mb-3">
                E-Commerce
              </h2>
              <p className="text-gray-600 sm:mb-[58px] mb-8 max-w-[555px]">
                Empower your online business with our powerful One Retail
                e-commerce platform for seamless selling, attracting customers,
                and increasing sales.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                x: [100, 0],
                transition: { duration: 0.5 },
              }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-2 gap-x-10 gap-y-6">
                <div className="col-span-2 xl:col-span-1">
                  <div className="sm:h-[593px] h-[512px] relative bg-[#152B74] sm:py-10 sm:px-[49px] p-6 rounded-3xl">
                    <div className="xl:w-[455px]">
                      <h3 className="text-white mb-4 font-bold sm:text-2xl">
                        Business 2 Business
                      </h3>
                      <p className="text-neutral-n-50 max-sm:text-sm">
                        Business to Business (B2B) E-commerce support selling
                        process between businesses. B2B provide order and
                        payment report for business to track the overall sales
                        data and activity, these all features can lead your
                        business to get customer long term relation and repeat
                        bulk purchases
                      </p>
                    </div>
                    <img
                      className="absolute left-0 bottom-0 rounded-bl-3xl"
                      src="/products/crm/bg-b2b.svg"
                      alt="ecommerce 1"
                    />
                    <img
                      className="absolute right-0 bottom-0 rounded-br-3xl max-sm:hidden"
                      src="/products/crm/ecommerce-1.svg"
                      alt="ecommerce 1"
                    />
                    <img
                      className="absolute right-0 bottom-4 rounded-br-3xl sm:hidden"
                      src="/products/crm/ecommerce-1-mobile.svg"
                      alt="ecommerce 1"
                    />
                  </div>
                </div>

                <div className="col-span-2 xl:col-span-1">
                  <div className="sm:h-[593px] h-[545px] relative bg-[#0A153A] sm:py-10 sm:px-[49px] rounded-3xl">
                    <div className="absolute sm:left-[42px] sm:bottom-[27px] bottom-0 xl:w-[469px] p-6">
                      <h3 className="text-white mb-4 font-bold sm:text-2xl">
                        Business 2 Customer
                      </h3>
                      <p className="text-neutral-n-50 max-sm:text-sm">
                        With One Retail's B2C E-commerce solution, businesses
                        can effortlessly sell to end-customers around the clock,
                        eliminating the need for physical store visits.
                        Integrated with loyalty programs, customers can enjoy
                        rewards and stay updated on the latest promotions and
                        discounts.
                      </p>
                    </div>
                    <img
                      className="absolute left-0 top-0 rounded-tl-3xl"
                      src="/products/crm/bg-b2c.svg"
                      alt="ecommerce 2"
                    />
                    <img
                      className="absolute right-0 sm:top-0 top-[57px] rounded-tr-3xl max-sm:hidden"
                      src="/products/crm/ecommerce-2.svg"
                      alt="ecommerce 2"
                    />
                    <img
                      className="absolute right-0 sm:top-0 top-[57px] rounded-tr-3xl sm:hidden"
                      src="/products/crm/ecommerce-2-mobile.svg"
                      alt="ecommerce 2"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section>
          <div
            id="pim"
            className="grid grid-cols-2 sm:px-24 px-4 gap-x-[90px] gap-y-8 mb-[54px]"
          >
            <div className="col-span-2 xl:col-span-1">
              <h2 className="font-bold sm:text-[36px] text-xl sm:leading-[54px] sm:hidden">
                Centralize Product Data with Product Information Management
                (PIM)
              </h2>
              <motion.div
                className="h-full"
                initial={{ opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  y: [100, 0],
                  transition: { duration: 0.5 },
                }}
                viewport={{ once: true }}
              >
                <img
                  className="h-full object-cover max-sm:mt-4 w-full rounded-2xl"
                  src="/products/crm/pim.svg"
                  alt="pim"
                />
              </motion.div>
            </div>
            <div className="col-span-2 xl:col-span-1 xl:max-w-[488px]">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  x: [100, 0],
                  transition: { duration: 0.5 },
                }}
                viewport={{ once: true }}
              >
                <h2 className="mb-3 font-bold sm:text-[36px] text-xl sm:leading-[54px] max-sm:hidden">
                  Centralize Product Data with Product Information Management
                  (PIM)
                </h2>
                <p className="text-neutral-n-90 mb-10 max-sm:mt-4">
                  Effortlessly centralize and update complex product data with
                  One Retail PIM. Streamline your operations, improve
                  collaboration, and deliver exceptional customer experiences
                  with real-time, automated communication.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  y: [50, 0],
                  transition: { duration: 0.5, delay: 1 },
                }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-x-3 mb-4">
                  <img src="/products/crm/check-circle.svg" alt="check" />
                  <p className="font-bold sm:text-xl text-sm text-neutral-n-100">
                    Organize all your product in one place
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  y: [50, 0],
                  transition: { duration: 0.5, delay: 2 },
                }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-x-3 mb-4">
                  <img src="/products/crm/check-circle.svg" alt="check" />
                  <p className="font-bold sm:text-xl text-sm text-neutral-n-100">
                    Ensure data accuracy and consistency
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  y: [50, 0],
                  transition: { duration: 0.5, delay: 3 },
                }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-x-3">
                  <img src="/products/crm/check-circle.svg" alt="check" />
                  <p className="font-bold sm:text-xl text-sm text-neutral-n-100">
                    Improve operational efficiency
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <FAQ />

        <section>
          <div className="relative cta-crm">
            <div className="grid grid-cols-12 xl:px-[160px] max-xl:pt-4 px-8">
              <div className="col-span-12 xl:col-span-6 text-white xl:max-w-[503px] flex max-xl:justify-center items-center">
                <div className="xl:max-w-[370px] max-sm:text-center max-sm:pt-8">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{
                      opacity: 1,
                      x: [-200, 0],
                      transition: { duration: 0.3 },
                    }}
                    viewport={{ once: true }}
                  >
                    <h3 className="font-bold sm:text-[32px] text-xl sm:leading-[48px] mb-2">
                      Get in Touch Today!
                    </h3>
                    <p className="text-[#EDEDED] mb-8">
                      Reach Out and Experience Our Stellar Customer Support:
                      We're Here to Serve You!
                    </p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{
                      opacity: 1,
                      x: [-200, 0],
                      transition: { duration: 0.3, delay: 1 },
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
              <div className="col-span-12 xl:col-span-6">
                <div className="relative h-[369px] max-sm:h-[300px] max-md:h-[330px] w-full">
                  <motion.div
                    className="w-full h-full"
                    initial={{ opacity: 0 }}
                    whileInView={{
                      opacity: 1,
                      transition: { duration: 0.5 },
                    }}
                    viewport={{ once: true }}
                  >
                    {/* <img
                      className="absolute xl:right-20 xl:-top-[45px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-[20px] max-xl:px-6"
                      src="/products/crm/circle-white.svg"
                      alt="circle-white"
                    /> */}
                    <img
                      className="absolute h-full bottom-0 left-1/2 transform -translate-x-1/2 rounded-[20px] max-xl:px-6"
                      src="/products/crm/circle-mobile.png"
                      alt="circle-mobile"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{
                      opacity: 1,
                      transition: { duration: 0.5, delay: 2 },
                    }}
                    viewport={{ once: true }}
                  >
                    <img
                      className="absolute xl:right-[58px] xl:top-[25px] max-xl:top-1/2 max-xl:left-1/2 max-xl:transform max-xl:-translate-x-1/2 max-xl:-translate-y-1/2 z-10 max-md:hidden"
                      src="/products/crm/cta-1.svg"
                      alt="cta-1"
                    />
                    <img
                      className="absolute md:-right-7 md:bottom-[20px] top-2/3 left-2/3 transform -translate-x-1/2 -translate-y-1/2 z-[20] max-md:hidden"
                      src="/products/crm/cta-2.svg"
                      alt="cta-2"
                    />
                    <img
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 md:hidden"
                      src="/products/crm/cta-mobile.svg"
                      alt="cta-mobile"
                    />
                  </motion.div>
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

export default CRMPage;
