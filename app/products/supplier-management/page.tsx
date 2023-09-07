"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import FAQ from "@/app/components/FAQ";

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
    <main className="max-w-screen-2xl mx-auto">
      <section>
        <div className="mt-[183px] mb-[54px] h-[510px] rounded-[20px] bg-diamond-gradient sm:mx-12 relative">
          <img
            className="absolute bottom-0"
            src="/products/sm/hero-1.svg"
            alt="hero-1"
          />
          <img
            className="absolute right-0"
            src="/products/sm/hero-2.svg"
            alt="hero-2"
          />
          <div className="max-w-[430px] absolute top-12 left-24">
            <h1 className="sm:text-[40px] text-[22px] text-neutral-n-10 sm:leading-[62px] leading-[33px] font-bold mb-5">
              Optimize Your Stock by Enhance Your Procurement Process
            </h1>
            <p className="sm:text-lg mb-16 text-neutral-n-10">
              Automate your manual stocking with Supplier Portal that can
              optimize your procurement process, strengthens supplier
              relationships, promotes collaboration and efficiency to your
              business
            </p>
            <motion.div
              className="flex"
              id="whyus"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { duration: 0.5, delay: 1 },
              }}
            >
              <Link
                href="/contact"
                className="btn-primary-50 rounded-md text-neutral-n-10 py-2.5 px-4 max-sm:text-xs font-semibold mr-4"
              >
                Let’s Get Demo!
              </Link>
              <Link
                href="#whyus"
                onClick={handleScroll}
                className="border border-[#4460BB] rounded-md text-neutral-n-30 py-2.5 px-4 max-sm:text-xs font-semibold"
              >
                Learn More
              </Link>
            </motion.div>
          </div>
        </div>

        <div className=" sm:px-24 mb-[100px]">
          <h2 className="font-bold text-neutral-n-60 ">TRUSTED BY</h2>
          <div className="flex ">
            <img src="/home/aeon.svg" alt="aeon" />
            <img src="/home/pahtama.svg" alt="pahtama" />
            <img src="/home/cmhl.svg" alt="cmhl" />
          </div>
          <div className="flex justify-between border-b-[#F0F0F0] border-b">
            <div className="flex">
              <img src="/home/city.svg" alt="city" />
              <img src="/home/daiso.svg" alt="daiso" />
              <img src="/home/aeon-big.svg" alt="aeon-big" />
            </div>
            <div className="flex items-end gap-x-1 ">
              <div className="flex bg-[#F0F1F7] h-[128px] rounded-t-[20px] px-[30px] pt-[30px] text-neutral-dark">
                <h3 className="font-bold text-[32px] mr-4">93%</h3>
                <p className="font-medium w-[129px] text-[15px]">
                  Average Conversation Rate
                </p>
              </div>

              <div className="flex bg-[#F0F1F7] h-[148px] rounded-t-[20px] px-[30px] py-[50px] text-neutral-dark">
                <h3 className="font-bold text-[32px] mr-4">50M+</h3>
                <p id="benefits" className="font-medium w-[75px] text-[15px]">
                  Traffic Generated
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="sm:px-24 mb-[100px]">
          <div className="flex gap-x-[76px] mb-10">
            <div className="w-[624px] pr-10 text-neutral-dark flex">
              <div className=" w-[16px] mr-10 rounded-xl bg-grad"></div>
              <div className="my-10">
                <h2 className="font-bold text-[28px] leading-[42px] mb-4">
                  Streamline Tedious Manual Processes and Communications with
                  Your Key Business Partner
                </h2>
                <p className="font-medium text-lg">
                  Allows your business to collaborate and interact with
                  suppliers in a centralized and efficient manner through
                  digital interface.
                </p>
              </div>
            </div>

            <div className="shadow-[0px_2px_40px_0px_rgba(8,4,64,0.08)] px-10 py-16 w-[548px] rounded-[20px]">
              <div className="flex items-center gap-x-4 mb-4">
                <img src="/products/sm/myspace-1.svg" alt="myspace-1" />
                <h3 className="font-semibold text-[22px] text-neutral-dark">
                  Fosters Collaboration and Transparency
                </h3>
              </div>
              <p className="text-neutral-n-70">
                Efficient communication leads to quicker response times,
                improved clarity, and reduced errors in order processing. This
                will allows you to track all of responses that can improve all
                processes more transparent
              </p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-x-10">
            <div className="col-span-3 sm:col-span-1">
              <div className="shadow-[0px_2px_40px_0px_rgba(8,4,64,0.08)] p-10 rounded-[20px] h-full">
                <div className="flex items-center gap-x-4 mb-4">
                  <img src="/products/sm/myspace-2.svg" alt="myspace-2" />
                  <h3 className="font-semibold text-[22px] text-neutral-dark">
                    Streamline Your Stock Management
                  </h3>
                </div>
                <p className="text-neutral-n-70">
                  Keep track on your key business partners directly on your
                  Supplier portal to ensure timely delivery of goods or
                  services. to your inventory management
                </p>
              </div>
            </div>
            <div className="col-span-3 sm:col-span-1">
              <div className="shadow-[0px_2px_40px_0px_rgba(8,4,64,0.08)] p-10 rounded-[20px] h-full">
                <div className="flex items-center gap-x-4 mb-4">
                  <img src="/products/sm/myspace-3.svg" alt="myspace-3" />
                  <h3 className="font-semibold text-[22px] text-neutral-dark">
                    Monitoring Partner Performance Indicators
                  </h3>
                </div>
                <p className="text-neutral-n-70">
                  You can easily monitor and evaluate metrics such as on-time
                  delivery, quality, and responsiveness, fostering continuous
                  improvement and driving supplier accountability
                </p>
              </div>
            </div>
            <div className="col-span-3 sm:col-span-1">
              <div className="shadow-[0px_2px_40px_0px_rgba(8,4,64,0.08)] p-10 rounded-[20px] h-full">
                <div className="flex items-center gap-x-4 mb-4">
                  <img src="/products/sm/myspace-4.svg" alt="myspace-4" />
                  <h3 className="font-semibold text-[22px] text-neutral-dark">
                    Optimize Your Payment Process
                  </h3>
                </div>
                <p className="text-neutral-n-70">
                  Easily track your invoice and payment statuses on your portal
                  to streamline your financial operations while reducing product
                  stockout.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="pp">
        <div className="bg-[#EDEFF7] sm:px-24 relative h-[791px]">
          <div className="absolute top-8 left-24 text-[100px] leading-[180px] font-bold text-[#F7F9FFB2]">
            PARTNER PLATFOR
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F7F9FFB2] to-[#F2F5FF00]">
              M
            </span>
          </div>
          <div className="absolute z-10 top-[130px] left-24">
            <p className="font-medium text-xl leading-9 text-justify max-w-[948px]">
              One Retail <span className="font-bold">Partner Platform</span>{" "}
              system is designed to support suppliers in managing their data and
              purchases at real time. This also allow company to manages their
              supplier and allow them to announce any important message to
              supplier instantly throughs announcement feature
            </p>
            <div className="flex gap-x-[27px]">
              <div className="mt-[43px] text-neutral-dark">
                <p className="mb-6 font-semibold">Some of other feature are:</p>
                <p className="bg-feature-sm w-[336px] py-2.5 px-3 rounded-l-lg mb-4">
                  1. Purchase Order to Invoice (Payment)
                </p>
                <p className="bg-feature-sm w-[336px] py-2.5 px-3 rounded-l-lg mb-4">
                  2. Price Change (Internal/Oversea)
                </p>
                <p className="bg-feature-sm w-[336px] py-2.5 px-3 rounded-l-lg mb-4">
                  3. Repair & Return
                </p>
                <p className="bg-feature-sm w-[336px] py-2.5 px-3 rounded-l-lg mb-4">
                  4. Supplier Live Chat
                </p>
              </div>
              <img
                className="mt-[3px]"
                src="/products/sm/pp.svg"
                alt="dashboard"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="ntp">
        <div className="sm:px-24 relative h-[796px] mb-[140px]">
          <div className="absolute w-full text-center top-8 left-1/2 transform -translate-x-1/2 text-[100px] leading-[180px] font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#EDEFF7B2] to-[#EDEFF700]">
            NON TRADE PORTAL
          </div>
          <div className="absolute z-10 top-[140px] w-full sm:px-24 left-1/2 transform -translate-x-1/2">
            <p className="font-medium text-xl leading-9 text-center mb-12">
              One Retail <span className="font-bold">Non Trade Portal</span>{" "}
              supplier support comprehensive registration form with level of
              approval, allow Non Trade Supplier to access their Purchase Order
              process to end (Invoice). Non Trade Portal integration can track
              of approvals, rejections, and pending requests along with
              rejection reasons. Support integration with third-party finance
              systems such as SAP via web service.
            </p>
            <div className="relative">
              <img
                className="absolute top-0 left-0"
                src="/products/sm/ntp-1.svg"
                alt="dashboard"
              />
            </div>
          </div>
          <img
            className="absolute w-[1036px] -bottom-[89px] right-[92px] z-10"
            src="/products/sm/ntp-2.svg"
            alt="dashboard"
          />
        </div>
      </section>

      <FAQ />

      <section>
        <div className="relative h-[576px] mb-[136px]">
          <img
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            src="/products/sm/bg-testi.svg"
            alt="bg testimonial"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[632px] py-16 px-[54px] bg-white shadow-md rounded-[20px]">
            <p>
              Payments, inventory, and e-Commerce are just the start. One Retail
              POS is your smart partner to connect every tool that keeps your
              business moving — so you can shape what’s next.
            </p>
            <div className="flex items-center justify-center gap-x-4 mt-12">
              <img
                className="rounded-full p-[5px] ring-[1px] ring-[#1F40AE]"
                src="/products/sm/avatar.svg"
                alt="avatar"
              />
              <div className="">
                <p className="font-semibold text-neutral-n-80 mb-1">
                  Jenny Wilson
                </p>
                <p className="text-neutral-n-70 text-sm">
                  CEO & Co-Founder of Jolla.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-grad py-12 relative h-[252px] mb-8">
          <img
            className="absolute left-0 bottom-0"
            src="/products/sm/g10.svg"
            alt="g10"
          />
          <div className="absolute flex flex-col items-center w-full">
            <h3 className="font-bold text-white sm:text-[32px] text-xl sm:leading-[48px] mb-2">
              Get in Touch Today!
            </h3>
            <p className="text-[#EDEDED] mb-8">
              Reach Out and Experience Our Stellar Customer Support: We're Here
              to Serve You!
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
      </section>
    </main>
  );
};

export default SupplierManagementPage;
