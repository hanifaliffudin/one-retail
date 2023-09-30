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
          <div className="relative sm:h-[692px] h-[520px] mt-[135px]">
            <img
              className="absolute object-cover w-full max-sm:h-[552px] top-0 left-0"
              src="/products/oa/bg-hero-oa.svg"
              alt="hero"
            />
            <motion.img
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                x: [-500, 0],
                transition: { duration: 0.5 },
              }}
              className="absolute bottom-0 object-cover sm:top-[276px] sm:right-[197px] w-full max-sm:hidden"
              src="/products/oa/bg-hero-oa-2.svg"
              alt="hero"
            ></motion.img>
            <div className="absolute top-0 left-0 grid mx-auto lg:gap-8 xl:gap-0 grid-cols-12">
              <div className="md:ml-24 px-4 md:px-0 md:mt-[167px] mt-6 mb-7 place-self-center lg:col-span-6 col-span-12">
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
                    href="#whyus"
                    onClick={handleScroll}
                    className="border border-[#F5F5F5] rounded-md text-neutral-n-30 py-2.5 px-4 max-sm:text-xs font-semibold"
                  >
                    Learn More
                  </Link>
                </motion.div>
              </div>
              <div className="lg:col-span-6 col-span-12 sm:mt-[92px]">
                <div className="relative w-screen sm:w-full max-sm:h-[298px]">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      x: [200, 0],
                      transition: { duration: 0.5, delay: 1 },
                    }}
                  >
                    <img
                      className="absolute sm:right-0 max-sm:hidden"
                      src="/products/oa/Mac-Studio.svg"
                      alt="hero-1"
                    />
                    <img
                      className="absolute left-1/2 transform -translate-x-1/2 sm:hidden bottom-0"
                      src="/products/oa/Mac-Studio-Mobile.svg"
                      alt="hero-1"
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="grid grid-cols-12 mt-20 sm:px-24 px-4 gap-y-6">
            <div className="col-span-12 sm:col-span-7 order-last sm:order-first ">
              <motion.div
                className="relative h-full w-full"
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
              </motion.div>
            </div>
            <div className="col-span-12 sm:col-span-5 md:w-[507px] flex items-center">
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
                className="absolute top-12 -z-10"
                src="/products/oa/bg-benefits.svg"
                alt="bg benefits"
              />
            </motion.div>

            <div className="grid grid-cols-12 mt-20 sm:px-24 px-4 mb-[60px]">
              <div className="col-span-12 sm:col-span-7 sm:max-w-[574px] flex items-center">
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
              <div className="col-span-12 sm:col-span-5">
                <motion.img
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

            <div className="mb-20">
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
                <div className="sm:w-[349px] bg-white shadow-[0px_2px_12px_0px_rgba(164,164,164,0.25)] py-6 px-5 rounded-lg border">
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

                <div className="sm:w-[349px] bg-white shadow-[0px_2px_12px_0px_rgba(164,164,164,0.25)] py-6 px-5 rounded-lg border">
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
                className="flex max-sm:flex-wrap gap-y-5 sm:px-24 px-4 gap-x-11"
                initial={{ opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  x: [100, 0],
                  transition: { duration: 0.5 },
                }}
                viewport={{ once: true }}
              >
                <div className="flex max-sm:hidden sm:w-[349px] h-[192px] justify-center items-center">
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

                <div className="w-[406px] bg-white shadow-[0px_2px_12px_0px_rgba(164,164,164,0.25)] py-6 px-5 rounded-lg border">
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
                <div className="w-[406px] bg-white shadow-[0px_2px_12px_0px_rgba(164,164,164,0.25)] py-6 px-5 rounded-lg border">
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

            <div className="grid sm:grid-flow-col sm:auto-cols-max max-sm:grid-cols-2 gap-x-6 gap-y-5 justify-center max-sm:px-4">
              <img src="/home/aeon.svg" alt="aeon" />
              <img src="/home/aeon-wellness.svg" alt="aeon-wellness" />
              <img src="/home/pahtama.svg" alt="pahtama" />
              <img src="/home/png.svg" alt="png" />
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
              <h2 className="font-bold text-center text-[#0A0A0A] sm:text-[32px] text-xl sm:leading-[48px] mb-4 md:w-[986px]">
                All-In-One Retail{" "}
                <span className="text-primary">Solutions</span> to Gain a
                Competitive Edge in Today's Customer-centric Market
              </h2>
              <p
                id="ees"
                className="text-center max-sm:text-sm text-[#667085] mb-16 px-4 md:w-[824px]"
              >
                Unlock powerful customer relationships with harness the
                potential of our Customer Relationship Management for
                unparalleled growth and customer satisfaction
              </p>
            </div>
          </motion.div>

          <div className="sm:pl-24 px-4">
            <div className="grid grid-cols-12 mb-10 gap-y-5">
              <div className="col-span-12 sm:col-span-6 flex items-center">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{
                    opacity: 1,
                    x: [-100, 0],
                    transition: { duration: 0.5 },
                  }}
                  viewport={{ once: true }}
                >
                  <div className="sm:max-w-[591px]">
                    <div className="rounded-full h-[70px] w-[70px] bg-[#FAFAFA] relative">
                      <div className="flex justify-center items-center rounded-full h-[60px] w-[60px] bg-[#EDEFF7] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <img
                          className="w-[33px]"
                          src="/icons/ess-icon.svg"
                          alt="ess"
                        />
                      </div>
                    </div>
                    <h2 className="my-4 font-bold text-neutral-n-100 sm:text-[32px] text-xl sm:leading-[48px]">
                      Employee Self Service
                    </h2>
                    <p id="sdo" className="text-neutral-n-90">
                      Empower employees with One Retail ESS: Real-time access to
                      credentials data, online attendance, bookings, and
                      additional features like employee feedback, live chat,
                      e-learning, and more.
                    </p>
                  </div>
                </motion.div>
              </div>
              <div className="col-span-12 sm:col-span-6">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{
                    opacity: 1,
                    x: [100, 0],
                    transition: { duration: 0.5 },
                  }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-center items-center">
                    <img src="/products/oa/ess.svg" alt="ess" />
                  </div>
                </motion.div>
              </div>
            </div>
            <div className="grid grid-cols-12 mb-10">
              <div className="col-span-12 sm:col-span-7 order-last sm:order-first">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{
                    opacity: 1,
                    x: [-100, 0],
                    transition: { duration: 0.5 },
                  }}
                  viewport={{ once: true }}
                >
                  <img src="/products/oa/sdo.svg" alt="sdo" />
                </motion.div>
              </div>
              <div className="col-span-12 sm:col-span-5 flex items-center">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{
                    opacity: 1,
                    x: [100, 0],
                    transition: { duration: 0.5 },
                  }}
                  viewport={{ once: true }}
                >
                  <div className="sm:max-w-[463px]">
                    <div className="rounded-full h-[70px] w-[70px] bg-[#FAFAFA] relative">
                      <div className="flex justify-center items-center rounded-full h-[60px] w-[60px] bg-[#EDEFF7] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <img
                          className="w-[33px]"
                          src="/icons/sdo-icon.svg"
                          alt="sdo"
                        />
                      </div>
                    </div>
                    <h2 className="my-4 font-bold text-neutral-n-100 sm:text-[32px] text-xl sm:leading-[48px]">
                      Store Daily Operation
                    </h2>
                    <p id="rm" className="text-neutral-n-90">
                      Optimize store operations with One Retail Daily
                      Operations: Streamline audits, monitor temperatures, and
                      receive alerts for efficient management.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
            <div className="grid grid-cols-12 mb-10">
              <div className="col-span-12 sm:col-span-6 flex items-center">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{
                    opacity: 1,
                    x: [-100, 0],
                    transition: { duration: 0.5 },
                  }}
                  viewport={{ once: true }}
                >
                  <div className="sm:max-w-[591px]">
                    <div className="rounded-full h-[70px] w-[70px] bg-[#FAFAFA] relative">
                      <div className="flex justify-center items-center rounded-full h-[60px] w-[60px] bg-[#EDEFF7] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <img
                          className="w-[33px]"
                          src="/icons/rm-icon.svg"
                          alt="rm"
                        />
                      </div>
                    </div>
                    <h2 className="my-4 font-bold text-neutral-n-100 sm:text-[32px] text-xl sm:leading-[48px]">
                      Repair and Maintenance
                    </h2>
                    <p className="text-neutral-n-90">
                      Efficiently manage maintenance with One Retail: Set
                      recurring schedules, submit help requests, track issue
                      status, and ensure prompt resolution for technical issues.
                    </p>
                  </div>
                </motion.div>
              </div>
              <div className="col-span-12 sm:col-span-6">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{
                    opacity: 1,
                    x: [100, 0],
                    transition: { duration: 0.5 },
                  }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-center items-center">
                    <img src="/products/oa/rm.svg" alt="rm" />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="bg-[#EDEFF7] flex justify-center max-sm:flex-wrap gap-x-[100px] items-center sm:px-24 py-10">
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
                  Lorem ipsum dolor sit amet consectetur. Venenatis dictum in
                  bibendum in nisi lectus nullam sit tincidunt. Massa bibendum
                  nunc arcu eget nam.
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
          <div className="sm:rounded-[20px] bg-[#1A3591] sm:mx-24 sm:p-10 relative">
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: { duration: 0.5 },
              }}
              viewport={{ once: true }}
              className="absolute max-sm:hidden right-0 top-0 rounded-[20px]"
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
              className="absolute w-[215px] right-0 bottom-0 sm:hidden"
              src="/products/oa/Hole-Mobile.svg"
              alt="Hole-Mobile"
            ></motion.img>

            <div className="grid grid-cols-12 gap-y-6 max-sm:px-4 max-sm:pt-8">
              <div className="col-span-12 sm:col-span-6 max-sm:text-center text-white sm:max-w-[503px] flex items-center">
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
                    <h3 className="font-bold sm:text-[32px] text-xl sm:leading-[48px]">
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
                    <div className="flex max-sm:justify-center">
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
              <div className="col-span-12 sm:col-span-6 max-sm:pb-8">
                <div className="relative sm:w-[565px] sm:h-[329px] h-[199px]">
                  <motion.img
                    initial={{ opacity: 0 }}
                    whileInView={{
                      opacity: 1,
                      y: [-100, 0],
                      transition: { duration: 0.5, delay: 2 },
                    }}
                    viewport={{ once: true }}
                    className="absolute max-sm:w-[289.09px] right-0 top-0 z-10"
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
                    className="absolute max-sm:w-[172px] left-0 bottom-0 z-[11]"
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
