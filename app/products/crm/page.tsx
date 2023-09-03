"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import FAQ from "@/app/components/FAQ";

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
    <main id="overview" className="max-w-screen-2xl mx-auto">
      <section>
        <div className="relative h-[867px] mt-[135px]">
          <img
            className="absolute w-full -top-[133px] opacity-60"
            src="/products/crm/bg-hero-crm.svg"
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
                <p className="font-medium text-neutral-n-80 text-lg mb-3">
                  Transforming relationships with One Retail CRM
                </p>
                <h1 className="sm:text-[40px] text-[22px]  sm:leading-[60px] leading-[33px] font-bold mb-5">
                  Build Stronger Connection with Your Customer
                </h1>

                <p className="max-sm:text-sm font-extralight mb-14  leading-[30px]">
                  Bring new experiences to your customers by enabling shopping
                  across different mediums,leading your business to competitive
                  advantage in the market.
                </p>
              </motion.div>
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
              </motion.div>

              <div className="mt-[78px]">
                <h2 className="mb-2.5 font-bold text-neutral-n-80 ">
                  Been Trusted By
                </h2>

                <div className="flex ">
                  <img src="/home/aeon.svg" alt="aeon" />
                  <img src="/home/aeon-wellness.svg" alt="aeon-wellness" />
                  <img src="/home/pahtama.svg" alt="pahtama" />
                </div>
                {/* <div className="flex gap-x-6 justify-center">
                  <img src="/home/cmhl.svg" alt="cmhl" />
                  <img src="/home/city.svg" alt="city" />
                  <img src="/home/kids.svg" alt="kids" />
                </div> */}
              </div>
            </div>
            <div className="lg:col-span-6 col-span-12 mt-[92px] relative">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.5, delay: 1 },
                }}
              >
                <img
                  className="absolute right-0 top-0"
                  src="/products/crm/hero-1.svg"
                  alt="hero-1"
                />
                <img
                  className="absolute top-36 -left-24"
                  src="/products/crm/hero-2.svg"
                  alt="hero-2"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="grid grid-cols-12 mt-20 px-24">
          <div className="col-span-12 sm:col-span-7 relative">
            <img
              className="absolute"
              src="/products/crm/bg-nurturing.svg"
              alt="bg-nurturing"
            />
            <img
              className="absolute"
              src="/products/crm/nurturing.svg"
              alt="nurturing"
            />
          </div>
          <div className="col-span-12 sm:col-span-5 md:w-[507px] flex items-center">
            <div className="">
              <h2 className="font-bold sm:text-[36px] text-xl sm:leading-[54px] mb-3">
                Nurturing Strong Relationship with Customers
              </h2>
              <p className="text-gray-600 mb-8">
                By utilize advanced technology to gather and analyze all
                customer data to leverage your business performance in order to
                enhance customer satisfaction. Let's get to know your customer
                together with One Retail!
              </p>
              <div id="benefits" className="flex mb-[72px]">
                <Link
                  href="/contact"
                  className="btn-primary text-neutral-n-10 py-2.5 px-4 max-sm:text-xs font-semibold mr-5"
                >
                  Let’s Get Demo!
                </Link>
              </div>
              <hr />
              <div className="flex gap-x-10 mt-6 items-center">
                <div className="w-[187px]">
                  <h2 className="font-bold text-[28px] leading-[38px] text-[#0F172A] mb-2.5">
                    16+
                  </h2>
                  <p className="text-[#4B5262]">
                    Businesses are using & it’s growing everyday
                  </p>
                </div>
                <div className="inline-block my-6 w-[1px] self-stretch bg-[#E5EAF1]"></div>
                <div className="w-[187px]">
                  <h2 className="font-bold text-[28px] leading-[38px] text-[#0F172A] mb-2.5">
                    24+
                  </h2>
                  <p className="text-[#4B5262]">
                    Features that helps your business gain customers
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="flex justify-center my-20">
          <div className="w-[541px] text-center">
            <h2 className="font-bold sm:text-[36px] text-xl sm:leading-[54px] mb-3">
              Unlock Powerful Benefits of Our CRM
            </h2>
            <p className="text-[#52525B]">
              Supercharge your business with our CRM Solution.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 sm:px-24 text-center gap-x-[90px]">
          <div className="col-span-3 sm:col-span-1">
            <h3 className="font-bold text-2xl mb-4">
              Streamline customer data
            </h3>
            <p className="text-neutral-n-80 mb-7">
              Organize and access customer information in one place, gaining a
              comprehensive view for personalized engagement
            </p>
            <img src="/products/crm/benefit-1.svg" alt="benefit 1" />
          </div>

          <div className="col-span-3 sm:col-span-1">
            <h3 className="font-bold text-2xl mb-4">Enhance relationship</h3>
            <p className="text-neutral-n-80 mb-7">
              Nurture customer connections through timely follow-ups and deep
              understanding of preferences
            </p>
            <img src="/products/crm/benefit-2.svg" alt="benefit 2" />
          </div>

          <div className="col-span-3 sm:col-span-1">
            <h3 className="font-bold text-2xl mb-4">Gain insights</h3>
            <p className="text-neutral-n-80 mb-7">
              Utilize reporting and analytics to make data-driven decisions,
              uncovering customer behavior and sales trends
            </p>
            <img src="/products/crm/benefit-3.svg" alt="benefit 3" />
          </div>
        </div>
      </section>

      <section>
        <div className="relative h-[2300px]">
          <img
            className="absolute -top-32"
            src="/products/crm/bg-engagement.svg"
            alt=""
          />
          <img
            className="absolute z-10 right-0"
            src="/products/crm/mockup-1.svg"
            alt=""
          />
          <img
            className="absolute z-10 top-48 right-1/4"
            src="/products/crm/mockup-2.svg"
            alt=""
          />
          <div className="absolute z-10 top-40 px-24 w-full">
            <div className="w-[436px] mt-48">
              <h2 className="text-white font-bold sm:text-[36px] text-xl sm:leading-[54px] mb-3">
                Customer Engagement & Loyalty
              </h2>
              <p className="text-neutral-n-50">
                Boost customer engagement with One Retail CRM: Utilize rewards
                such as points earning and redemption, tiered membership, and
                other powerful features to encourage repeat purchases and foster
                long-term loyalty.
              </p>
            </div>

            <div className="flex justify-center mt-[419px]">
              <div className="w-[557px] text-center">
                <h2 className="text-white font-bold sm:text-[36px] text-xl sm:leading-[54px] mb-3">
                  Level-Up Engagement with Gamification
                </h2>
                <p className="text-neutral-n-50">
                  Gamification creates an interactive and rewarding experience
                  that keeps customers engaged, motivated, and loyal to your
                  brand.
                </p>
              </div>
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
                    href={"/contact"}
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
                  className="absolute left-0 bottom-0 z-20"
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

export default CRMPage;
