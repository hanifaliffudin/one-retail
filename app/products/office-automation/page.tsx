"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import FAQ from "@/app/components/FAQ";

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
    <main id="overview" className="max-w-screen-2xl mx-auto">
      <section>
        <div className="relative h-[692px] mt-[135px]">
          <img
            className="absolute w-full"
            src="/products/oa/bg-hero-oa.svg"
            alt="hero"
          />
          <img
            className="absolute top-[276px] right-[197px] w-full"
            src="/products/oa/bg-hero-oa-2.svg"
            alt="hero"
          />
          <div className="absolute grid mx-auto lg:gap-8 xl:gap-0 grid-cols-12">
            <div className="md:ml-24 px-4 md:px-0 md:mt-[167px] mt-6 mb-7 place-self-center lg:col-span-6 col-span-12 order-last md:order-first">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  x: [-100, 0],
                  transition: { duration: 0.5 },
                }}
              >
                <h1 className="sm:text-[40px] text-[22px] text-neutral-n-10 sm:leading-[60px] leading-[33px] font-bold mb-5">
                  Simplify Your Collaboration Team with Office Automation
                </h1>

                <p className="max-sm:text-sm font-extralight mb-14 text-neutral-n-30 leading-[30px]">
                  Leveraging your business routines can improve your team
                  productivity and achieve greater operational effectiveness.
                  Say goodbye to manual tasks and embrace a new era of
                  streamlined workflows.
                </p>
              </motion.div>
              <motion.div
                id="whyus"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.5, delay: 1 },
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
            <div className="lg:col-span-6 col-span-12 mt-[92px]">
              <div className="relative w-screen sm:w-full">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.5, delay: 1 },
                  }}
                >
                  <img
                    className="absolute right-0"
                    src="/products/oa/Mac-Studio.svg"
                    alt="hero-1"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="grid grid-cols-12 mt-20 px-24">
          <div className="col-span-12 sm:col-span-7">
            <img src="/products/oa/why-us.svg" alt="dashboard" />
          </div>
          <div className="col-span-12 sm:col-span-5 md:w-[507px] flex items-center">
            <div className="">
              <p className="text-primary-p-40 font-bold mb-3">Why Us?</p>
              <h2 className="font-bold text-neutral-n-90 sm:text-[32px] text-xl sm:leading-[48px] mb-4">
                Simplify Your{" "}
                <span className="text-primary">Collaboration</span> Team with
                Office Automation
              </h2>
              <p className="text-neutral-dark mb-4">
                Embrace the strategic advantage of optimizing your business
                routines, empowering your team to exceed their potential while
                driving consistent growth.
              </p>
              <div id="benefits" className="flex">
                <Link
                  href="/contact"
                  className="btn-primary text-neutral-n-10 py-2.5 px-4 max-sm:text-xs font-semibold mr-5"
                >
                  Let’s Get Demo!
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="relative">
          <img
            className="absolute top-12 -z-10"
            src="/products/oa/bg-benefits.svg"
            alt="bg benefits"
          />
          <div className="grid grid-cols-12 mt-20 px-24 mb-[60px]">
            <div className="col-span-12 sm:col-span-7 sm:max-w-[574px] flex items-center">
              <div className="">
                <p className="text-primary-p-40 font-bold mb-3">Benefits</p>
                <h2 className="font-bold text-neutral-n-90 sm:text-[32px] text-xl sm:leading-[48px] mb-4 md:w-[507px]">
                  Goodbye Manual Effort,{" "}
                  <span className="text-primary">Hi Automation!</span>
                </h2>
                <p className="text-neutral-dark mb-4">
                  Embrace the strategic advantage of optimizing your business
                  routines, empowering your team to exceed their potential while
                  driving consistent growth.
                </p>
              </div>
            </div>
            <div className="col-span-12 sm:col-span-5">
              <img src="/products/oa/benefits.svg" alt="benefits" />
            </div>
          </div>

          <div className="mb-20">
            <div className="flex sm:px-24 gap-x-11 mb-6">
              <div className="w-[349px] bg-white shadow-[0px_2px_12px_0px_rgba(164,164,164,0.25)] py-6 px-5 rounded-lg border">
                <div className="flex justify-between mb-3">
                  <h3 className="font-bold text-xl text-neutral-n-90 mr-5">
                    Improve Efficient Workflow
                  </h3>
                  <img src="/products/oa/core-1.svg" alt="core-1" />
                </div>
                <p className="text-neutral-n-80">
                  No more manual effort, you can easily saving time and let your
                  team focusing on critical and valueadded activities.
                </p>
              </div>

              <div className="w-[349px] bg-white shadow-[0px_2px_12px_0px_rgba(164,164,164,0.25)] py-6 px-5 rounded-lg border">
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
            </div>
            <div className="flex sm:px-24 gap-x-11">
              <div className="flex w-[349px] h-[192px] justify-center items-center">
                <img src="/products/oa/OneRetailLogo.svg" alt="OneRetailLogo" />
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
                  resources, and operational expenses for increased productivity
                  and financial efficiency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-[100px]">
        <div className="mx-auto max-w-screen-xl px-4">
          <h2 className="mb-2.5 font-bold text-center text-neutral-n-80 ">
            Been Trusted By
          </h2>
        </div>

        <div className="flex gap-x-6 justify-center">
          <img src="/home/aeon.svg" alt="aeon" />
          <img src="/home/aeon-wellness.svg" alt="aeon-wellness" />
          <img src="/home/pahtama.svg" alt="pahtama" />
          <img src="/home/png.svg" alt="png" />
        </div>
      </section>

      <section>
        <p className="text-center max-sm:text-xs text-primary-p-40 font-bold mb-4">
          Features
        </p>
        <div className="flex flex-col items-center px-4">
          <h2 className="font-bold text-center text-[#0A0A0A] sm:text-[32px] text-xl sm:leading-[48px] mb-4 md:w-[986px]">
            All-In-One Retail <span className="text-primary">Solutions</span> to
            Gain a Competitive Edge in Today's Customer-centric Market
          </h2>
          <p
            id="ees"
            className="text-center max-sm:text-sm text-[#667085] mb-16 px-4 md:w-[824px]"
          >
            Unlock powerful customer relationships with harness the potential of
            our Customer Relationship Management for unparalleled growth and
            customer satisfaction
          </p>
        </div>

        <div className="sm:pl-24">
          <div className="grid grid-cols-12 mb-10">
            <div className="col-span-12 sm:col-span-6 flex items-center">
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
                  credentials data, online attendance, bookings, and additional
                  features like employee feedback, live chat, e-learning, and
                  more.
                </p>
              </div>
            </div>
            <div className="col-span-12 sm:col-span-6">
              <div className="flex justify-center items-center">
                <img src="/products/oa/ess.svg" alt="ess" />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-12 mb-10">
            <div className="col-span-12 sm:col-span-7">
              <img src="/products/oa/sdo.svg" alt="sdo" />
            </div>
            <div className="col-span-12 sm:col-span-5 flex items-center">
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
                  Optimize store operations with One Retail Daily Operations:
                  Streamline audits, monitor temperatures, and receive alerts
                  for efficient management.
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-12 mb-10">
            <div className="col-span-12 sm:col-span-6 flex items-center">
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
                  Efficiently manage maintenance with One Retail: Set recurring
                  schedules, submit help requests, track issue status, and
                  ensure prompt resolution for technical issues.
                </p>
              </div>
            </div>
            <div className="col-span-12 sm:col-span-6">
              <div className="flex justify-center items-center">
                <img src="/products/oa/rm.svg" alt="rm" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-[#EDEFF7] flex gap-x-[100px] items-center sm:px-24 py-10">
          <img src="/products/oa/testimonial.svg" alt="testimonial" />
          <div className="">
            <img src="/products/oa/quote.svg" alt="quote" />
            <p className="font-bold text-2xl text-base-02 my-9">
              Lorem ipsum dolor sit amet consectetur. Venenatis dictum in
              bibendum in nisi lectus nullam sit tincidunt. Massa bibendum nunc
              arcu eget nam.
            </p>
            <div className="flex items-center">
              <p className="mr-3 font-bold text-base-02">Jenny Wilson</p>
              <p className="mr-4 text-gray-600">Co-Founder of</p>
              <img src="/products/oa/waverio.svg" alt="waverio" />
            </div>
          </div>
        </div>
      </section>

      <FAQ />

      <section>
        <div className="rounded-[20px] relative bg-[#1A3591] sm:mx-24 p-10 mb-[152px]">
          <img
            className="absolute right-0 top-0 rounded-[20px]"
            src="/products/oa/Hole.svg"
            alt="Hole"
          />
          <div className="grid grid-cols-12">
            <div className="col-span-12 sm:col-span-6 text-white sm:max-w-[503px] flex items-center">
              <div className="">
                <h3 className="font-bold sm:text-[32px] text-xl sm:leading-[48px]">
                  Experience Exceptional Support: Get in Touch Today!
                </h3>
                <p className="text-[#EDEDED] my-4">
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
            <div className="col-span-12 sm:col-span-6">
              <div className="relative w-[565px] h-[329px]">
                <img
                  className="absolute right-0 top-0 z-10"
                  src="/products/oa/cta-1.svg"
                  alt="cta-1"
                />
                <img
                  className="absolute left-0 bottom-0 z-[11]"
                  src="/products/oa/cta-2.svg"
                  alt="cta-2"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default OfficeAutomationPage;
