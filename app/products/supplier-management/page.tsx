"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import FAQ from "@/app/components/FAQ";
import NavbarWithCTAButton from "@/app/components/Navbar";
import FooterWithSocialMediaIcons from "@/app/components/Footer";

const SupplierManagementPage = () => {
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
          <motion.div
            className="md:mt-[183px] mt-[151px] md:mb-[54px] mb-[90px] xl:max-h-[510px] h-[620px] rounded-[20px] bg-diamond-gradient sm:mx-12 max-sm:mx-4 max-sm:pt-5 relative"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 0.5 },
            }}
          >
            <div className="grid grid-cols-2 h-full xl:max-h-[510px] gap-x-8">
              <div className="col-span-2 lg:col-span-1 max-sm:px-4 sm:py-12 xl::pl-24 sm:pl-10">
                <motion.div
                  className="xl:max-w-[430px]"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    x: [-100, 0],
                    transition: { duration: 0.5 },
                  }}
                >
                  <h1 className="sm:text-[40px] text-[22px] text-neutral-n-10 sm:leading-[62px] leading-[33px] font-bold mb-5">
                    Optimize Your Stock by Enhance Your Procurement Process
                  </h1>
                  <p className="sm:text-lg sm:mb-16 mb-4 text-neutral-n-10">
                    Automate your manual stocking with Supplier Portal that can
                    optimize your procurement process, strengthens supplier
                    relationships, promotes collaboration and efficiency to your
                    business
                  </p>

                  <Link
                    href="/contact"
                    className="btn-primary-50 rounded-md text-neutral-n-10 py-2.5 px-4 max-sm:text-xs font-semibold mr-4"
                  >
                    Let’s Get Demo!
                  </Link>
                  <Link
                    href="#benefits"
                    onClick={handleScroll}
                    className="border border-[#4460BB] rounded-md text-neutral-n-30 py-2.5 px-4 max-sm:text-xs font-semibold"
                  >
                    Learn More
                  </Link>
                </motion.div>
              </div>
              <div className="col-span-2 lg:col-span-1 lg:max-h-[510px]">
                <motion.img
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    x: [100, 0],
                    transition: { duration: 0.5 },
                  }}
                  className="md:-mb-10 -mb-16 md:rounded-tr-[20px] w-full max-sm:hidden"
                  src="/products/sm/hero-2.png"
                  alt="hero-2"
                ></motion.img>
                <motion.img
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    x: [100, 0],
                    transition: { duration: 0.5 },
                  }}
                  className="pl-4 -mb-28 md:rounded-tr-[20px] w-full sm:hidden"
                  src="/products/sm/dashboard.svg"
                  alt="hero-2"
                ></motion.img>
              </div>
            </div>
          </motion.div>

          <div className="sm:px-24 px-4 sm:mb-[100px] mb-10">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                x: [-100, 0],
                transition: { duration: 0.5 },
              }}
              viewport={{ once: true }}
            >
              <h2 className="font-bold text-neutral-n-60 ">TRUSTED BY</h2>
              <div className="grid sm:grid-flow-col max-xl:justify-center sm:auto-cols-max max-sm:grid-cols-3">
                <img src="/home/aeon.svg" alt="aeon" />
                <img src="/home/pahtama.svg" alt="pahtama" />
                <img src="/home/cmhl.svg" alt="cmhl" />
              </div>
            </motion.div>
            <div className="flex flex-wrap gap-y-6 justify-between max-xl:justify-center border-b-[#F0F0F0] border-b">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  x: [-100, 0],
                  transition: { duration: 0.5 },
                }}
                viewport={{ once: true }}
              >
                <div className="grid sm:grid-flow-col sm:auto-cols-max max-sm:grid-cols-3">
                  <img src="/home/city.svg" alt="city" />
                  <img src="/home/daiso.svg" alt="daiso" />
                  <img src="/home/aeon-big.svg" alt="aeon-big" />
                </div>
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
                <div className="flex items-end sm:gap-x-1 gap-x-[1px] max-sm:ml-6">
                  <div className="flex items-center bg-[#F0F1F7] sm:h-[128px] rounded-t-[20px] sm:px-[30px] sm:pt-[30px] max-sm:pb-[30px] px-4 pt-3 text-neutral-dark">
                    <h3 className="font-bold sm:text-[32px] text-[22px] mr-4">
                      93%
                    </h3>
                    <p className="font-medium sm:w-[129px] sm:text-[15px] text-[12px]">
                      Average Conversation Rate
                    </p>
                  </div>

                  <div className="flex items-center bg-[#F0F1F7] sm:h-[148px] rounded-t-[20px] sm:px-[30px] sm:py-[50px] px-4 pt-10 pb-[34px] text-neutral-dark">
                    <h3 className="font-bold sm:text-[32px] text-[22px] mr-4">
                      50M+
                    </h3>
                    <p
                      id="benefits"
                      className="font-medium sm:w-[75px] sm:text-[15px] text-[12px]"
                    >
                      Traffic Generated
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section>
          <div className="sm:px-24 px-4 sm:mb-[100px] mb-10">
            <div className="flex flex-wrap sm:gap-x-[76px] gap-y-6 sm:mb-10 mb-5">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  transition: { duration: 0.5 },
                }}
                viewport={{ once: true }}
              >
                <div className="xl:w-[624px] xl:pr-10 pr-5 text-neutral-dark flex">
                  <div className="max-sm:w-[20px] sm:w-[16px] sm:mr-10 mr-6 rounded-xl bg-grad"></div>
                  <div className="sm:my-10 my-5">
                    <h2 className="font-bold sm:text-[28px] sm:leading-[42px] sm:mb-4 mb-3">
                      Streamline Tedious Manual Processes and Communications
                      with Your Key Business Partner
                    </h2>
                    <p className="font-medium sm:text-lg text-sm">
                      Allows your business to collaborate and interact with
                      suppliers in a centralized and efficient manner through
                      digital interface.
                    </p>
                  </div>
                </div>
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
                <div className="md:shadow-[0px_20px_40px_0px_rgba(8,4,64,0.08)] shadow-[0px_20px_40px_0px_rgba(8,4,64,0.06)] sm:px-10 px-4 sm:py-16 py-6 xl:w-[548px] rounded-[20px]">
                  <div className="flex items-center gap-x-4 mb-4">
                    <img src="/products/sm/myspace-1.svg" alt="myspace-1" />
                    <h3 className="font-semibold sm:text-[22px] text-lg text-neutral-dark">
                      Fosters Collaboration and Transparency
                    </h3>
                  </div>
                  <p className="text-neutral-n-70 max-sm:text-sm">
                    Efficient communication leads to quicker response times,
                    improved clarity, and reduced errors in order processing.
                    This will allows you to track all of responses that can
                    improve all processes more transparent
                  </p>
                </div>
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
              <div className="grid grid-cols-3 gap-x-10 gap-y-5">
                <div className="col-span-3 xl:col-span-1">
                  <div className="md:shadow-[0px_20px_40px_0px_rgba(8,4,64,0.08)] shadow-[0px_20px_40px_0px_rgba(8,4,64,0.06)] sm:p-10 px-4 py-6 rounded-[20px] h-full">
                    <div className="flex items-center gap-x-4 sm:mb-4 mb-3">
                      <img src="/products/sm/myspace-2.svg" alt="myspace-2" />
                      <h3 className="font-semibold sm:text-[22px] text-lg text-neutral-dark">
                        Streamline Your Stock Management
                      </h3>
                    </div>
                    <p className="text-neutral-n-70 max-sm:text-sm">
                      Keep track on your key business partners directly on your
                      Supplier portal to ensure timely delivery of goods or
                      services. to your inventory management
                    </p>
                  </div>
                </div>
                <div className="col-span-3 xl:col-span-1">
                  <div className="md:shadow-[0px_20px_40px_0px_rgba(8,4,64,0.08)] shadow-[0px_20px_40px_0px_rgba(8,4,64,0.06)] sm:p-10 px-4 py-6 rounded-[20px] h-full">
                    <div className="flex items-center gap-x-4 mb-4">
                      <img src="/products/sm/myspace-3.svg" alt="myspace-3" />
                      <h3 className="font-semibold sm:text-[22px] text-lg text-neutral-dark">
                        Monitoring Partner Performance Indicators
                      </h3>
                    </div>
                    <p className="text-neutral-n-70 max-sm:text-sm">
                      You can easily monitor and evaluate metrics such as
                      on-time delivery, quality, and responsiveness, fostering
                      continuous improvement and driving supplier accountability
                    </p>
                  </div>
                </div>
                <div className="col-span-3 xl:col-span-1">
                  <div className="md:shadow-[0px_20px_40px_0px_rgba(8,4,64,0.08)] shadow-[0px_20px_40px_0px_rgba(8,4,64,0.06)] sm:p-10 px-4 py-6 rounded-[20px] h-full">
                    <div className="flex items-center gap-x-4 mb-4">
                      <img src="/products/sm/myspace-4.svg" alt="myspace-4" />
                      <h3 className="font-semibold sm:text-[22px] text-lg text-neutral-dark">
                        Optimize Your Payment Process
                      </h3>
                    </div>
                    <p className="text-neutral-n-70 max-sm:text-sm">
                      Easily track your invoice and payment statuses on your
                      portal to streamline your financial operations while
                      reducing product stockout.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="pp">
          <div className="bg-[#EDEFF7] relative xl:h-[791px] h-[780px] sm:h-[1100px] md:h-[1200px] ">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: { duration: 0.5 },
              }}
              viewport={{ once: true }}
            >
              <div className="absolute max-sm:pl-4 whitespace-nowrap sm:top-8 top-5 sm:left-24 xl:text-[100px] md:text-[50px] text-[34px] sm:leading-[180px] font-bold text-[#F7F9FFB2]">
                PARTNER PLATFOR
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F7F9FFB2] to-[#F2F5FF00]">
                  M
                </span>
              </div>
            </motion.div>

            <div className="absolute z-10 sm:top-[130px] top-10">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  y: [10, 0],
                  transition: { duration: 0.5 },
                }}
                viewport={{ once: true }}
              >
                <p className="font-medium max-md:px-4 px-24 sm:text-xl text-sm sm:leading-9 leading-[25px] text-justify xl:max-w-[948px]">
                  One Retail <span className="font-bold">Partner Platform</span>{" "}
                  system is designed to support suppliers in managing their data
                  and purchases at real time. This also allow company to manages
                  their supplier and allow them to announce any important
                  message to supplier instantly throughs announcement feature
                </p>
              </motion.div>

              <div className="grid grid-cols-4 gap-x-[27px] max-md:px-4 px-24">
                <motion.div
                  className="xl:col-span-1 col-span-4"
                  initial={{ opacity: 0 }}
                  whileInView={{
                    opacity: 1,
                    x: [100, 0],
                    transition: { duration: 0.5 },
                  }}
                  viewport={{ once: true }}
                >
                  <div className="mt-[43px] text-neutral-dark">
                    <p className="mb-6 font-semibold">
                      Some of other feature are:
                    </p>
                    <p className="bg-feature-sm xl:w-[336px] py-2.5 px-3 rounded-l-lg mb-4">
                      1. Purchase Order to Invoice (Payment)
                    </p>
                    <p className="bg-feature-sm xl:w-[336px] py-2.5 px-3 rounded-l-lg mb-4">
                      2. Price Change (Internal/Oversea)
                    </p>
                    <p className="bg-feature-sm xl:w-[336px] py-2.5 px-3 rounded-l-lg mb-4">
                      3. Repair & Return
                    </p>
                    <p className="bg-feature-sm xl:w-[336px] py-2.5 px-3 rounded-l-lg mb-4">
                      4. Supplier Live Chat
                    </p>
                  </div>
                </motion.div>

                <motion.img
                  initial={{ opacity: 0 }}
                  whileInView={{
                    opacity: 1,
                    transition: { duration: 0.5 },
                  }}
                  viewport={{ once: true }}
                  className="xl:col-span-3 flex items-center max-xl:h-full col-span-4 max-xl:w-full mt-[3px]"
                  src="/products/sm/pp.svg"
                  alt="dashboard"
                ></motion.img>
              </div>
            </div>
          </div>
        </section>

        <section id="ntp">
          <motion.div
            className="sm:px-24 relative xl:h-[796px] md:h-[600px] max-sm:mt-10 h-[570px] md:mb-[140px] mb-24 bg-[#F7F9FF]"
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              y: [100, 0],
              transition: { duration: 0.5 },
            }}
            viewport={{ once: true }}
          >
            <div className="absolute w-full text-center md:top-8 left-1/2 transform -translate-x-1/2 sm:text-[100px] text-[34px] leading-[180px] font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#EDEFF7B2] to-[#EDEFF700]">
              NON TRADE PORTAL
            </div>
            <div className="absolute z-10 top-[140px] w-full sm:px-24 left-1/2 transform -translate-x-1/2">
              <p className="font-medium max-sm:px-4 sm:text-xl text-sm leading-9 text-center sm:mb-12 mb-6">
                One Retail <span className="font-bold">Non Trade Portal</span>{" "}
                supplier support comprehensive registration form with level of
                approval, allow Non Trade Supplier to access their Purchase
                Order process to end (Invoice). Non Trade Portal integration can
                track of approvals, rejections, and pending requests along with
                rejection reasons. Support integration with third-party finance
                systems such as SAP via web service.
              </p>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  y: [50, 0],
                  transition: { duration: 0.5, delay: 0.4 },
                }}
                viewport={{ once: true }}
              >
                <div className="relative max-sm:mx-2">
                  <img
                    className="absolute object-cover top-0 left-0 max-sm:hidden"
                    src="/products/sm/ntp-1.svg"
                    alt="dashboard"
                  />
                  <img
                    className="absolute w-full object-cover top-0 left-0 sm:hidden"
                    src="/products/sm/ntp-mobile.svg"
                    alt="dashboard"
                  />
                </div>
              </motion.div>
            </div>
            <img
              className="absolute hidden sm:w-[1036px] w-[298px] sm:-bottom-[64px] bottom-[150px] right-[7px] sm:right-[92px] z-10"
              src="/products/sm/ntp-2.svg"
              alt="dashboard"
            />
          </motion.div>
        </section>

        <FAQ />

        <section>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { duration: 0.5 },
            }}
            viewport={{ once: true }}
          >
            <div className="relative sm:h-[576px] h-[416px] md:mb-[136px] mb-[60px]">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  y: [600, 300],
                  transition: { duration: 0.5, delay: 0.5 },
                }}
                viewport={{ once: true }}
              >
                <img
                  className="absolute object-cover max-sm:min-h-[416px] max-sm:-top-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  src="/products/sm/bg-testi.svg"
                  alt="bg testimonial"
                />
              </motion.div>

              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 sm:w-[632px] w-[343px] p-6 sm:py-16 sm:px-[54px] bg-white shadow-md rounded-[20px]">
                <p className="max-sm:text-sm">
                  Payments, inventory, and e-Commerce are just the start. One
                  Retail POS is your smart partner to connect every tool that
                  keeps your business moving — so you can shape what’s next.
                </p>
                <div className="flex items-center justify-center gap-x-4 sm:mt-12 mt-8">
                  <img
                    className="rounded-full max-sm:w-[43px] p-[5px] ring-[1px] ring-[#1F40AE]"
                    src="/products/sm/avatar.svg"
                    alt="avatar"
                  />
                  <div className="">
                    <p className="font-semibold max-sm:text-[12px] text-neutral-n-80 mb-1">
                      Naila Agung Sarasati
                    </p>
                    <p className="text-neutral-n-70 sm:text-sm text-[11px]">
                      CEO & Co-Founder of Jolla.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <section>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              y: [100, 0],
              transition: { duration: 0.5 },
            }}
            viewport={{ once: true }}
          >
            <div className="bg-grad py-12 relative h-[252px]">
              <img
                className="absolute max-sm:h-full left-0 sm:bottom-0 top-0"
                src="/products/sm/g10.svg"
                alt="g10"
              />
              <div className="absolute max-sm:px-4 flex flex-col items-center w-full">
                <h3 className="font-bold text-white sm:text-[32px] text-xl sm:leading-[48px] mb-2">
                  Get in Touch Today!
                </h3>
                <p className="text-[#EDEDED] mb-8 max-sm:text-center">
                  Reach Out and Experience Our Stellar Customer Support: We're
                  Here to Serve You!
                </p>
                <div className="flex">
                  <Link
                    href="/contact"
                    className="bg-white font-bold py-2.5 px-4 rounded-md text-primary"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </main>
      <FooterWithSocialMediaIcons />
    </>
  );
};

export default SupplierManagementPage;
