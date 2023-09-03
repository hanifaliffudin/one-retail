"use client";

import Testimonial from "../components/Testimonial";
import FAQ from "../components/FAQ";
import TalkToUs from "../components/TalkToUs";
import Link from "next/link";
import { useState } from "react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import SwiperSolutionsTabs from "../components/SwiperSolutionsTabs";

import "swiper/css";

const SolutionsPage = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const [indexTabs, setIndexTabs] = useState(0);

  return (
    <main className="max-w-screen-2xl mx-auto">
      <section>
        <div className="mt-44 flex-col items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 0.5 },
            }}
          >
            <p className="mb-5 text-center text-neutral-n-80 px-4 max-sm:text-sm">
              One Retail : Smart Retail Platform builder made special for Your
              business
            </p>
            <div className="flex justify-center px-4">
              <h1 className="mb-10 text-center text-neutral-n-90 font-bold sm:text-[40px] text-[22px] sm:leading-[50px] leading-[33px] md:w-[683px]">
                <span className="text-primary">Simplify</span> Your Day-to-day
                Operations to Scale Up Your Business
              </h1>
            </div>
            <div className="flex justify-center mb-20">
              <Link
                onClick={handleScroll}
                href="#revolutionize"
                className="btn-border-primary max-sm:text-xs py-2.5 px-4 font-semibold"
              >
                Learn More
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 0.5, delay: 1 },
            }}
          >
            <div className="solutions scroller__wrapper">
              <div className="scroller__container">
                <div className="scroller">
                  <div className="scroller__item">
                    <div className="ml-4 mr-2 mb-[44PX] text-sm rounded-xl px-4 py-5 shadow-[0_2px_12px_0px_rgba(164,164,164,0.25)]">
                      <p className="font-medium mb-7 ">
                        “One of the best retail service for me. Loved the
                        community too. Very helpful.”
                      </p>
                      <div className="flex gap-x-3">
                        <img
                          className="!w-10 !h-10 rounded-full"
                          src="/solutions/avatar.svg"
                          alt="avatar"
                        />
                        <div>
                          <p className="font-semibold">John Doe</p>
                          <p className="text-neutral-n-70">CEO of P&G</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="scroller__item">
                    <img src="/solutions/slider-1.svg" alt="image" />
                  </div>
                  <div className="scroller__item">
                    <img src="/solutions/slider-2.svg" alt="image" />
                  </div>
                  <div className="scroller__item">
                    <img src="/solutions/slider-3.svg" alt="image" />
                  </div>
                  <div className="scroller__item">
                    <div className="bg-[#0A153A] mb-[51px] text-left text-white py-2 px-6 rounded-xl h-[139px]">
                      <p className="font-bold text-[40px] mb-2.5">24</p>
                      <p className="mb-2 font-semibold">
                        happy <br /> customers
                      </p>
                    </div>
                  </div>

                  <div className="scroller__item">
                    <div className="ml-4 mr-2 mb-[44PX] text-sm rounded-xl px-4 py-5 shadow-[0_2px_12px_0px_rgba(164,164,164,0.25)]">
                      <p className="font-medium mb-7 ">
                        “One of the best retail service for me. Loved the
                        community too. Very helpful.”
                      </p>
                      <div className="flex gap-x-3">
                        <img
                          className="!w-10 !h-10 rounded-full"
                          src="/solutions/avatar.svg"
                          alt="avatar"
                        />
                        <div>
                          <p className="font-semibold">John Doe</p>
                          <p className="text-neutral-n-70">CEO of P&G</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="scroller__item">
                    <img src="/solutions/slider-1.svg" alt="image" />
                  </div>
                  <div className="scroller__item">
                    <img src="/solutions/slider-2.svg" alt="image" />
                  </div>
                  <div className="scroller__item">
                    <img src="/solutions/slider-3.svg" alt="image" />
                  </div>
                  <div className="scroller__item">
                    <div className="bg-[#0A153A] mb-[51px] text-left text-white py-2 px-6 rounded-xl h-[139px]">
                      <p className="font-bold text-[40px] mb-2.5">24</p>
                      <p className="mb-2 font-semibold">
                        happy <br /> customers
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="revolutionize">
        <div className="py-20 px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { duration: 0.5, delay: 0.3 },
            }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col items-center">
              <h2 className="font-bold text-center text-neutral-n-90 sm:text-[32px] text-xl sm:leading-[48px] mb-5 md:w-[824px]">
                Revolutionize your business operations with{" "}
                <span className="text-primary">All-in-One</span> Retail
                Solutions Platform
              </h2>
              <p className="text-center max-sm:text-sm text-neutral-n-90 mb-16 md:w-[824px]">
                Advanced technological solutions that integrate various digital
                tools and data-driven systems to enhance your overall retail
                productivity and customer experience
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-3 gap-6 sm:px-[155px]">
            <motion.div
              className="border border-[#E0E0E0] rounded-lg p-5 col-span-3 sm:col-span-1"
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                x: [-100, 0],
                transition: { duration: 0.8, delay: 0.3 },
              }}
              viewport={{ once: true }}
            >
              <p className="text-primary-p-50 font-semibold mb-3 max-sm:text-xs">
                Satisfaction with Digital Shopping
              </p>
              <p className="text-primary-p-50 font-bold text-[32px] mb-5 max-sm:text-2xl">
                79-85%
              </p>
              <p className="text-neutral-n-90 mb-11 max-sm:text-sm">
                Customers satisfied with online digital shopping experience.
              </p>
              <p className="text-neutral-n-70 text-xs">
                *data based on Statista and eMarketer in 2020
              </p>
            </motion.div>

            <motion.div
              className="border border-[#E0E0E0] rounded-lg p-5 col-span-3 sm:col-span-1"
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                y: [100, 0],
                transition: { duration: 0.8, delay: 0.3 },
              }}
              viewport={{ once: true }}
            >
              <p className="text-primary-p-50 font-semibold mb-3 max-sm:text-xs">
                Strengthen Competitiveness
              </p>
              <p className="text-primary-p-50 font-bold text-[32px] mb-5 max-sm:text-2xl">
                70%
              </p>
              <p className="text-neutral-n-90 mb-11 max-sm:text-sm">
                Reporting high in digital transformation for business can
                improve competitive insights
              </p>
              <p className="text-neutral-n-70 text-xs">
                *data based on Fujitsu
              </p>
            </motion.div>

            <motion.div
              className="border border-[#E0E0E0] rounded-lg p-5 col-span-3 sm:col-span-1"
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                x: [100, 0],
                transition: { duration: 0.8, delay: 0.3 },
              }}
              viewport={{ once: true }}
            >
              <p className="text-primary-p-50 font-semibold mb-3 max-sm:text-xs">
                Enhance efficiency, Reduce costs
              </p>
              <p className="text-primary-p-50 font-bold text-[32px] mb-5 max-sm:text-2xl">
                69%
              </p>
              <p className="text-neutral-n-90 mb-11 max-sm:text-sm">
                Digital transformation on retail can improve efficiency and
                reducing cost at the same time
              </p>
              <p className="text-neutral-n-70 text-xs">
                *data based on Fujitsu
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section>
        <div className="md:px-24">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { duration: 0.5, delay: 0.3 },
            }}
            viewport={{ once: true }}
          >
            <p className="text-center max-sm:text-xs text-primary font-semibold mb-5">
              Business Solutions
            </p>
            <div className="flex flex-col items-center px-4">
              <h2 className="font-bold text-center text-neutral-n-90 sm:text-[32px] text-xl sm:leading-[48px] mb-5 md:w-[824px]">
                Powerful tools to deliver{" "}
                <span className="text-primary">world-class</span> customer
                experiences
              </h2>
              <p className="text-center max-sm:text-sm text-neutral-n-90 mb-16 px-4 md:w-[824px]">
                Unleash the power of our One Retail solutions to create
                exceptional customer experiences. Elevate your business with our
                powerful tools and drive growth in the competitive retail
                landscape.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { duration: 0.5, delay: 0.3 },
            }}
            viewport={{ once: true }}
          >
            <Swiper
              className="!flex !flex-col"
              slidesPerView={1}
              allowTouchMove={false}
              onSlideChangeTransitionStart={(e) => setIndexTabs(e.activeIndex)}
            >
              <SwiperSolutionsTabs />

              <SwiperSlide>
                <div className="img-hover-zoom flex rounded-lg max-sm:px-4">
                  <img
                    className="h-full object-cover w-full"
                    src="/solutions/retail.svg"
                    alt="retail"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="img-hover-zoom flex rounded-lg max-sm:px-4">
                  <img
                    className="h-full object-cover w-full"
                    src="/solutions/cafe.svg"
                    alt="cafe"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="img-hover-zoom flex rounded-lg max-sm:px-4">
                  <img
                    className="h-full object-cover w-full"
                    src="/solutions/restaurant.svg"
                    alt="restaurant"
                  />
                </div>
              </SwiperSlide>

              {indexTabs == 0 && (
                <motion.div
                  className="grid grid-cols-3 gap-6 mt-10 mb-20 px-4 sm:px-0"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.3 },
                  }}
                >
                  <div className="border border-[#E0E0E0] rounded-lg p-5 col-span-3 sm:col-span-1">
                    <div className="flex gap-x-4 items-center">
                      <img src="/icons/pos-icon.svg" alt="pos" />
                      <h4 className="font-bold text-neutral-n-100 max-sm:text-sm">
                        Point of Sales
                      </h4>
                    </div>
                    <p className="my-5 text-neutral-n-90 max-sm:text-sm">
                      Simplify sales, accept diverse payments, and integrate
                      loyalty programs with our versatile POS system. Boost
                      efficiency and customer satisfaction.
                    </p>
                    <Link
                      href="#"
                      className="flex items-center text-primary font-medium text-sm max-sm:text-xs"
                    >
                      Explore product{" "}
                      <Icon className="ml-2" icon="ri:arrow-right-line" />
                    </Link>
                  </div>

                  <div className="border border-[#E0E0E0] rounded-lg p-5 col-span-3 sm:col-span-1">
                    <div className="flex gap-x-4 items-center">
                      <img src="/icons/sco-icon.svg" alt="sco" />
                      <h4 className="font-bold text-neutral-n-100 max-sm:text-sm">
                        Self-checkout (SCO)
                      </h4>
                    </div>
                    <p className="my-5 text-neutral-n-90 max-sm:text-sm">
                      Revolutionize the checkout experience with our Self Check
                      Out (SCO) feature, enabling customers to scan and pay for
                      items themselves, reducing queues and enhancing
                      convenience.
                    </p>
                    <Link
                      href="#"
                      className="flex items-center text-primary font-medium text-sm max-sm:text-xs"
                    >
                      Explore product{" "}
                      <Icon className="ml-2" icon="ri:arrow-right-line" />
                    </Link>
                  </div>

                  <div className="border border-[#E0E0E0] rounded-lg p-5 col-span-3 sm:col-span-1">
                    <div className="flex gap-x-4 items-center">
                      <img src="/icons/so-icon.svg" alt="so" />
                      <h4 className="font-bold text-neutral-n-100 max-sm:text-sm">
                        Self-ordering
                      </h4>
                    </div>
                    <p className="my-5 text-neutral-n-90 max-sm:text-sm">
                      Empower retail customers with seamless self-ordering—scan,
                      browse, and shop effortlessly. Enhance efficiency, reduce
                      wait times, and deliver a personalized experience.
                    </p>
                    <Link
                      href="#"
                      className="flex items-center text-primary font-medium text-sm max-sm:text-xs"
                    >
                      Explore product{" "}
                      <Icon className="ml-2" icon="ri:arrow-right-line" />
                    </Link>
                  </div>

                  <div className="border border-[#E0E0E0] rounded-lg p-5 col-span-3 sm:col-span-1">
                    <div className="flex gap-x-4 items-center">
                      <img src="/icons/cel-icon.svg" alt="cel" />
                      <h4 className="font-bold text-neutral-n-100 max-sm:text-sm">
                        Customer Relationship Management
                      </h4>
                    </div>
                    <p className="my-5 text-neutral-n-90 max-sm:text-sm">
                      Strengthen customer relationships with advanced CRM
                      technology, leveraging data analysis to enhance business
                      performance and satisfaction.
                    </p>
                    <Link
                      href="#"
                      className="flex items-center text-primary font-medium text-sm max-sm:text-xs"
                    >
                      Explore product{" "}
                      <Icon className="ml-2" icon="ri:arrow-right-line" />
                    </Link>
                  </div>

                  <div className="border border-[#E0E0E0] rounded-lg p-5 col-span-3 sm:col-span-1">
                    <div className="flex gap-x-4 items-center">
                      <img src="/icons/ess-icon.svg" alt="ess" />
                      <h4 className="font-bold text-neutral-n-100 max-sm:text-sm">
                        Office Automation
                      </h4>
                    </div>
                    <p className="my-5 text-neutral-n-90 max-sm:text-sm">
                      Streamline your office operations. Automate inventory
                      management, order processing, and sales reporting to
                      improve efficiency and collaboration among your retail
                      team.
                    </p>
                    <Link
                      href="#"
                      className="flex items-center text-primary font-medium text-sm max-sm:text-xs"
                    >
                      Explore product{" "}
                      <Icon className="ml-2" icon="ri:arrow-right-line" />
                    </Link>
                  </div>
                </motion.div>
              )}

              {indexTabs == 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.3 },
                  }}
                >
                  <div className="grid grid-cols-3 gap-6 mt-10 mb-20 px-4 sm:px-0">
                    <div className="border border-[#E0E0E0] rounded-lg p-5 col-span-3 sm:col-span-1">
                      <div className="flex gap-x-4 items-center">
                        <img src="/icons/pos-icon.svg" alt="pos" />
                        <h4 className="font-bold text-neutral-n-100 max-sm:text-sm">
                          Point of Sales
                        </h4>
                      </div>
                      <p className="my-5 text-neutral-n-90 max-sm:text-sm">
                        Streamline operations, accept payments, and integrate
                        loyalty programs with our intuitive POS system. Enhance
                        customer experience and increase revenue.
                      </p>
                      <Link
                        href="#"
                        className="flex items-center text-primary font-medium text-sm max-sm:text-xs"
                      >
                        Explore product{" "}
                        <Icon className="ml-2" icon="ri:arrow-right-line" />
                      </Link>
                    </div>

                    <div className="border border-[#E0E0E0] rounded-lg p-5 col-span-3 sm:col-span-1">
                      <div className="flex gap-x-4 items-center">
                        <img src="/icons/sco-icon.svg" alt="sco" />
                        <h4 className="font-bold text-neutral-n-100 max-sm:text-sm">
                          Self-checkout (SCO)
                        </h4>
                      </div>
                      <p className="my-5 text-neutral-n-90 max-sm:text-sm">
                        Enhance efficiency with our Self-checkout! allowing
                        patrons to self-scan and pay for their orders,
                        minimizing wait times and promoting a seamless dining
                        experience.
                      </p>
                      <Link
                        href="#"
                        className="flex items-center text-primary font-medium text-sm max-sm:text-xs"
                      >
                        Explore product{" "}
                        <Icon className="ml-2" icon="ri:arrow-right-line" />
                      </Link>
                    </div>

                    <div className="border border-[#E0E0E0] rounded-lg p-5 col-span-3 sm:col-span-1">
                      <div className="flex gap-x-4 items-center">
                        <img src="/icons/sdo-icon.svg" alt="ess" />
                        <h4 className="font-bold text-neutral-n-100 max-sm:text-sm">
                          Store Daily Operations
                        </h4>
                      </div>
                      <p className="my-5 text-neutral-n-90 max-sm:text-sm">
                        Streamline daily operations with our feature, empowering
                        staff to efficiently manage tasks, replace manual data
                        entry, and eliminate paperwork for a seamless cafe
                        operation.
                      </p>
                      <Link
                        href="#"
                        className="flex items-center text-primary font-medium text-sm max-sm:text-xs"
                      >
                        Explore product{" "}
                        <Icon className="ml-2" icon="ri:arrow-right-line" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )}

              {indexTabs == 2 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.3 },
                  }}
                >
                  <div className="grid grid-cols-3 gap-6 mt-10 mb-20 px-4 sm:px-0">
                    <div className="border border-[#E0E0E0] rounded-lg p-5 col-span-3 sm:col-span-1">
                      <div className="flex gap-x-4 items-center">
                        <img src="/icons/pos-icon.svg" alt="pos" />
                        <h4 className="font-bold text-neutral-n-100 max-sm:text-sm">
                          Point of Sales
                        </h4>
                      </div>
                      <p className="my-5 text-neutral-n-90 max-sm:text-sm">
                        Enhance your restaurant operations with our POS system.
                        Record transactions, and efficiently manage sales.
                        Integrate loyalty programs for customer discounts and
                        loyalty points.
                      </p>
                      <Link
                        href="#"
                        className="flex items-center text-primary font-medium text-sm max-sm:text-xs"
                      >
                        Explore product{" "}
                        <Icon className="ml-2" icon="ri:arrow-right-line" />
                      </Link>
                    </div>

                    <div className="border border-[#E0E0E0] rounded-lg p-5 col-span-3 sm:col-span-1">
                      <div className="flex gap-x-4 items-center">
                        <img src="/icons/sco-icon.svg" alt="sco" />
                        <h4 className="font-bold text-neutral-n-100 max-sm:text-sm">
                          Self-checkout (SCO)
                        </h4>
                      </div>
                      <p className="my-5 text-neutral-n-90 max-sm:text-sm">
                        Streamline the ordering process and expedite payment
                        with our Self-checkout! Empowering diners to self-scan
                        and settle their bills, ensuring faster service and a
                        smoother dining experience.
                      </p>
                      <Link
                        href="#"
                        className="flex items-center text-primary font-medium text-sm max-sm:text-xs"
                      >
                        Explore product{" "}
                        <Icon className="ml-2" icon="ri:arrow-right-line" />
                      </Link>
                    </div>

                    <div className="border border-[#E0E0E0] rounded-lg p-5 col-span-3 sm:col-span-1">
                      <div className="flex gap-x-4 items-center">
                        <img src="/icons/so-icon.svg" alt="so" />
                        <h4 className="font-bold text-neutral-n-100 max-sm:text-sm">
                          Self-ordering
                        </h4>
                      </div>
                      <p className="my-5 text-neutral-n-90 max-sm:text-sm">
                        Allowing patrons to easily scan product barcodes, view
                        the menu, and add items to their cart, resulting in a
                        personalized and efficient ordering experience.
                      </p>
                      <Link
                        href="#"
                        className="flex items-center text-primary font-medium text-sm max-sm:text-xs"
                      >
                        Explore product{" "}
                        <Icon className="ml-2" icon="ri:arrow-right-line" />
                      </Link>
                    </div>

                    <div className="border border-[#E0E0E0] rounded-lg p-5 col-span-3 sm:col-span-1">
                      <div className="flex gap-x-4 items-center">
                        <img src="/icons/cml-icon.svg" alt="crm" />
                        <h4 className="font-bold text-neutral-n-100 max-sm:text-sm">
                          Customer Relationship Management
                        </h4>
                      </div>
                      <p className="my-5 text-neutral-n-90 max-sm:text-sm">
                        Personalize customer experiences, leveraging CRM
                        technology to gather and analyze data, driving business
                        performance and ensuring customer satisfaction.
                      </p>
                      <Link
                        href="#"
                        className="flex items-center text-primary font-medium text-sm max-sm:text-xs"
                      >
                        Explore product{" "}
                        <Icon className="ml-2" icon="ri:arrow-right-line" />
                      </Link>
                    </div>

                    <div className="border border-[#E0E0E0] rounded-lg p-5 col-span-3 sm:col-span-1">
                      <div className="flex gap-x-4 items-center">
                        <img src="/icons/sdo-icon.svg" alt="sdo" />
                        <h4 className="font-bold text-neutral-n-100 max-sm:text-sm">
                          Store Daily Operations
                        </h4>
                      </div>
                      <p className="my-5 text-neutral-n-90 max-sm:text-sm">
                        Enabling restaurant staff to effortlessly manage tasks,
                        digitize data entry, and eliminate paper-based processes
                        for a smooth restaurant operation.
                      </p>
                      <Link
                        href="#"
                        className="flex items-center text-primary font-medium text-sm max-sm:text-xs"
                      >
                        Explore product{" "}
                        <Icon className="ml-2" icon="ri:arrow-right-line" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )}
            </Swiper>
          </motion.div>
        </div>
      </section>

      <Testimonial />

      <FAQ />

      <TalkToUs />
    </main>
  );
};

export default SolutionsPage;
