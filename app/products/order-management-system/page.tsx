"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import TalkToUs from "@/app/components/TalkToUs";
import NavbarWithCTAButton from "@/app/components/Navbar";
import FooterWithSocialMediaIcons from "@/app/components/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Autoplay } from "swiper/modules";
const OrderManagementSystemPage = () => {
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
      <main className="max-w-screen-2xl mx-auto">
        <section id="overview">
          <div className="mt-[135px] sm:mb-[83px] mb-10 sm:h-[620px] xl:h-[620px] lg:h-[536px] h-[375px] relative">
            <img
              className="absolute max-lg:object-cover lg:hidden max-lg:block xl:block xl:object-cover w-full h-full left-0"
              src="/products/oms/hero.svg"
              alt="hero-1"
            />
            <img
              className="absolute max-lg:object-cover max-lg:hidden xl:hidden xl:object-cover w-full h-full left-0"
              src="/products/oms/hero-lg.svg"
              alt="hero-1"
            />
            <div className="absolute left-0 bg-[#20202099] w-full sm:h-[640px] xl:h-[620px] lg:h-[536px] h-[375px]"></div>

            <div className="xl:max-w-[612px lg:max-w-[475px] absolute top-1/2 lg:left-12 xl:left-24 transform -translate-y-1/2 max-sm:text-center max-lg:px-4">
              <h1 className="xl:text-[40px] lg:text-[32px] text-[22px] text-neutral-n-10 xl:leading-[62px] lg:leading-[48px] leading-[33px] font-bold mb-5">
                Expand Your Possibiities{" "}
                <span className="text-primary-p-40">Intensively</span>
              </h1>
              <p className="xl:text-lg md:mb-6 mb-10 text-neutral-n-10">
                serves you a central hub for managing sales and customer
                transactions for your business, to ensure smooth and accurate
                processing at the moment of purchase
              </p>

              <div className="flex">
                <Link
                  href="/contact"
                  className="max-sm:w-full btn-primary-40 rounded-md text-neutral-n-10 py-2.5 px-4 max-sm:text-xs font-semibold mr-4"
                >
                  Let’s Get Demo!
                </Link>
                <Link
                  id="benefits"
                  href="#benefits"
                  onClick={handleScroll}
                  className="max-sm:w-full border border-[#D2D9EF] rounded-md text-neutral-n-30 py-2.5 px-4 max-sm:text-xs font-semibold"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="xl:mx-24 lg:mx-12 max-sm:mx-4 mx-auto grid grid-cols-4 gap-x-6 gap-y-5 md:pb-20 pb-10 border-b border-b-[#E0E0E0] md:mb-14 mb-10">
            <div className="col-span-4 lg:col-span-1 max-sm:mb-1">
              <h2 className="font-bold xl:text-[36px] lg:text-[28px] lg:leading-[42px] text-xl md:text-3xl xl:leading-[54px] text-neutral-n-90 max-sm:text-center">
                Each products meets a high{" "}
                <span className="text-primary">standard</span>
              </h2>
            </div>
            <div className="col-span-4 lg:col-span-1 pt-5 border-t-[#E0E0E0] border-t-[4px]">
              <h3 className="font-semibold xl:text-xl mb-3 text-neutral-n-90">
                Packed with built-in amazing features
              </h3>
              <p className="text-neutral-n-80 max-sm:text-sm">
                Unleash the power of our packed built-in features designed to
                elevate your experience. Our solution comes fully loaded with a
                comprehensive suite of functionalities that cater to your
                diverse needs
              </p>
            </div>
            <div className="col-span-4 lg:col-span-1 pt-5 border-t-[#E0E0E0] border-t-[4px]">
              <h3 className="font-semibold xl:text-xl mb-3 text-neutral-n-90">
                Optimized for online selling & business
              </h3>
              <p className="text-neutral-n-80 max-sm:text-sm">
                Step into the world of online selling and business success with
                our optimized solution. Packed with powerful features
                specifically designed for the digital marketplace, our solution
                empowers you to thrive in the online space
              </p>
            </div>
            <div className="col-span-4 lg:col-span-1 pt-5 border-t-[#E0E0E0] border-t-[4px]">
              <h3 className="font-semibold xl:text-xl mb-3 text-neutral-n-90">
                Covered with long term support
              </h3>
              <p id="pos" className="text-neutral-n-80 max-sm:text-sm">
                Our commitment to your success goes beyond the initial
                implementation. With our dedicated support team by your side,
                you'll have access to ongoing assistance, updates, and
                enhancements to ensure your continued growth
              </p>
            </div>
          </div>
        </section>

        <section>
          <div className="lg:px-12 xl:px-24 px-4">
            <div className="font-medium sm:text-xl text-sm text-primary mb-3 max-sm:text-center">
              Point of Sale (POS)
            </div>
            <h2 className="max-sm:text-center font-bold sm:text-[36px] text-xl text-neutral-n-90 mb-10">
              Selling the way it should be
            </h2>
            <div className="max-lg:flex lg:grid lg:grid-cols-5 max-lg:flex-wrap lg:gap-x-11 xl:gap-x-[130px] gap-y-6 items-center justify-center">
              <div className="col-span-5 lg:col-span-3">
                <img className="w-full" src="/products/oms/pos.svg" alt="pos" />
              </div>
              <div className="col-span-5 lg:col-span-2">
                <div className="flex flex-col sm:gap-y-10 gap-y-5 xl:max-w-[400px]">
                  <div className="border-l-[#E0E0E0] border-l-4 pl-5">
                    <h3 className="font-semibold sm:text-xl text-neutral-n-90 mb-3">
                      Fast Checkout
                    </h3>
                    <p className="text-neutral-n-80 max-sm:text-sm">
                      Enjoy a seamless and expedited checkout experience that
                      gets your queue way in no time.
                    </p>
                  </div>
                  <div className="border-l-[#E0E0E0] border-l-4 pl-5">
                    <h3 className="font-semibold sm:text-xl text-neutral-n-90 mb-3">
                      Easily Manage Inventories
                    </h3>
                    <p className="text-neutral-n-80 max-sm:text-sm">
                      Seamlessly track stock levels, streamline replenishment,
                      and optimize inventory turnover.
                    </p>
                  </div>
                  <div className="border-l-[#E0E0E0] border-l-4 pl-5">
                    <h3 className="font-semibold sm:text-xl text-neutral-n-90 mb-3">
                      Less Work
                    </h3>
                    <p className="text-neutral-n-80 max-sm:text-sm">
                      Say goodbye to repetitive and time-consuming tasks, as our
                      solution takes care of them for you.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="mt-20 bg-any-business md:pb-20 pb-10 max-sm:px-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                y: [100, 0],
                transition: { duration: 0.3 },
              }}
              viewport={{ once: true }}
            >
              <h2 className="font-bold mb-3 sm:text-[32px] text-xl sm:leading-[48px] text-center text-neutral-n-90">
                Any Business. Any Size. All in{" "}
                <span className="text-primary">One</span> Platform
              </h2>
              <p className="text-neutral-n-90 text-center sm:mb-[46px] mb-10 max-sm:text-sm">
                It’s the power to sell in person backed by the power to sell
                online, all by the world’s best commerce platform.
              </p>
            </motion.div>

            <div className="flex max-lg:flex-wrap lg:px-12 xl:px-24 gap-y-10 max-xl:gap-x-4">
              <motion.div
                className="z-10 lg:mt-10 xl:mt-[113px] max-lg:w-full"
                initial={{ opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  y: [100, 0],
                  transition: { duration: 0.3, delay: 2 },
                }}
                viewport={{ once: true }}
              >
                <img
                  className="mb-5 max-lg:w-full"
                  src="/products/oms/pos-2.svg"
                  alt="pos-2"
                />
                <div className="lg:w-[307px] xl:w-[294px]">
                  <h4 className="mb-2 font-semibold sm:text-xl text-neutral-n-90">
                    Single store
                  </h4>
                  <p className="text-neutral-n-80 max-sm:text-sm lg:max-w-[208px] xl:w-full">
                    Experience the convenience and reliability of our point of
                    sale solution and take your store to new heights
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="lg:-ml-[82px]"
                initial={{ opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  y: [100, 0],
                  transition: { duration: 0.3, delay: 1 },
                }}
                viewport={{ once: true }}
              >
                <img
                  className="mb-5 max-lg:w-full"
                  src="/products/oms/pos-3.svg"
                  alt="pos-3"
                />
                <div className="lg:w-[450px] xl:w-[506px]">
                  <h4 className="mb-2 font-semibold sm:text-xl text-neutral-n-90">
                    Multi store
                  </h4>
                  <p className="text-neutral-n-80 max-sm:text-sm">
                    Designed specifically for multi-location and franchise
                    businesses, our system empowers you to efficiently manage
                    orders, track inventory, and streamline operations across
                    all your restaurant locations
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="lg:ml-1 xl:ml-6 max-lg:w-full"
                initial={{ opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  y: [100, 0],
                  transition: { duration: 0.3, delay: 2 },
                }}
                viewport={{ once: true }}
              >
                <img
                  className="max-lg:w-full mb-5"
                  src="/products/oms/pos-4.svg"
                  alt="pos-4"
                />
                <div className="lg:w-[228px] xl:w-[294px]">
                  <h4 className="mb-2 font-semibold sm:text-xl text-neutral-n-90">
                    Events
                  </h4>
                  <p className="text-neutral-n-80 max-sm:text-sm">
                    Whether you're organizing a conference, concert, or
                    festival, our system is equipped to handle the unique
                    demands of any environments
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="so">
          <div className="lg:mx-12 xl:mx-24 mx-4 md:py-20 py-10 sm:border-b sm:border-b-[#E0E0E0] sm:mb-20">
            <div className="flex max-lg:flex-wrap items-center justify-center">
              <div className="lg:max-w-[332px] xl:max-w-[400px] xl:mr-[130px] lg:mr-[52px]">
                <div className="font-medium sm:text-xl text-sm text-primary mb-3 max-sm:text-center">
                  Self Ordering
                </div>
                <h2 className="max-sm:text-center font-bold lg:text-[28px] xl:text-[36px] lg:leading-[35px] xl:leading-[45px] text-xl text-neutral-n-90 lg:mb-8 xl:mb-10 mb-6">
                  Let your customers choose their way
                </h2>
                <p className="text-neutral-n-90 max-sm:hidden">
                  One Retail Self-order providing deep personalized customer
                  experience by quick scanning the product barcode and allow
                  them to view the menu then can quickly add it to cart. This
                  also reduce business cost because customer no longer need
                  server assistance
                </p>
              </div>

              <div className="bg-[#EDEFF7] px-[22px] pt-6 xl:pt-9 rounded-[20px] overflow-y-auto sm:mr-6 max-sm:mb-5 ">
                <Swiper
                  className="xl:max-h-[605px] lg:max-h-[433px] h-[480px]"
                  slidesPerView={1}
                  direction={"vertical"}
                  autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                  }}
                  speed={500}
                  modules={[Autoplay]}
                  loop
                >
                  <SwiperSlide>
                    <div className="flex flex-col bg-[#EDEFF7] items-center h-full">
                      <img src="/products/oms/icon-so-1.svg" alt="check" />
                      <p className="font-medium text-xl mb-10 max-w-[236px]">
                        Place order yourself just with 3 easy steps
                      </p>
                      <img
                        className=""
                        src="/products/oms/phone-1.svg"
                        alt="phone"
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="flex flex-col bg-[#EDEFF7] items-center">
                      <img src="/products/oms/icon-so-2.svg" alt="qr" />
                      <p className="font-medium text-xl mb-10 max-w-[236px]">
                        First. Scan our QR with your smartphone
                      </p>
                      <img src="/products/oms/phone-2.svg" alt="phone" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="flex flex-col bg-[#EDEFF7] items-center">
                      <img src="/products/oms/icon-so-3.svg" alt="menu" />
                      <p className="font-medium text-xl mb-10 max-w-[236px]">
                        After that, Select your favorite menu
                      </p>
                      <img src="/products/oms/phone-3.svg" alt="phone" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="flex flex-col bg-[#EDEFF7] items-center">
                      <img src="/products/oms/icon-so-4.svg" alt="pay" />
                      <p className="font-medium text-xl mb-10 max-w-[236px]">
                        The latter. Arrange payment for your order
                      </p>
                      <img src="/products/oms/phone-4.svg" alt="phone" />
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>

              <img
                className="max-lg:w-full lg:w-[225px] xl:w-auto"
                src="/products/oms/so-woman.svg"
                alt="woman"
              />
            </div>
          </div>
        </section>

        <section id="sco">
          <div className="lg:px-12 xl:px-24 px-4 bg-any-business sm:mb-20">
            <div className="font-medium sm:text-xl text-sm text-primary mb-3 max-sm:text-center">
              Self Checkout
            </div>
            <h2 className="max-sm:text-center font-bold md:text-3xl xl:text-[36px] text-xl text-neutral-n-90 md:mb-10 mb-6">
              Fast, Convenient, and Contactless
            </h2>
            <img
              className="sm:mb-20 max-sm:h-[240px] max-sm:object-cover max-sm:rounded-lg"
              src="/products/oms/sc-1.svg"
              alt="sc 1"
            />
            <div className="flex max-lg:flex-wrap lg:gap-x-7 xl:gap-x-[106px] gap-y-[72px]">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  x: [-100, 0],
                  transition: { duration: 0.3 },
                }}
                viewport={{ once: true }}
              >
                <div className="mt-10 xl:max-w-[506px]">
                  <div className="flex gap-x-3 mb-3">
                    <img src="/products/oms/visa.svg" alt="visa" />
                    <img src="/products/oms/mastercard.svg" alt="mastercard" />
                    <img src="/products/oms/apple-pay.svg" alt="apple-pay" />
                    <img src="/products/oms/gpay.svg" alt="gpay" />
                  </div>
                  <div className="flex max-sm:justify-center gap-x-3 md:mb-[60px] mb-10">
                    <img src="/products/oms/alipay.svg" alt="alipay" />
                    <img
                      src="/products/oms/american-express.svg"
                      alt="american-express"
                    />
                    <img src="/products/oms/paypal.svg" alt="paypal" />
                  </div>
                  <h2 className="font-bold mb-5 sm:text-[32px] text-xl sm:leading-[48px] max-sm:text-center text-neutral-n-90">
                    Accept <span className="text-primary">various</span> payment
                    for faster checkout.
                  </h2>
                  <p className="max-sm:text-center">
                    Optimized customer entire check-out process with One Retail
                    SCO Platform to support adding or scanning item to payment.
                    Personalized customer self-service that almost same as POS
                    and also can integrated with payment system so customer can
                    pay at once with their desired payment method.
                  </p>
                </div>
              </motion.div>
              <motion.img
                className="max-xl:hidden"
                initial={{ opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  y: [100, 0],
                  transition: { duration: 0.3, delay: 0.3 },
                }}
                viewport={{ once: true }}
                src="/products/oms/sc-2.svg"
                alt="sc-2"
              ></motion.img>
              <motion.img
                className="xl:hidden"
                initial={{ opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  y: [100, 0],
                  transition: { duration: 0.3, delay: 0.3 },
                }}
                viewport={{ once: true }}
                src="/products/oms/sc-2-lg.svg"
                alt="sc-2"
              ></motion.img>
            </div>
          </div>
        </section>

        {/* <TalkToUs /> */}
      </main>
      <FooterWithSocialMediaIcons />
    </>
  );
};

export default OrderManagementSystemPage;
