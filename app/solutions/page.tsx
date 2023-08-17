"use client";

import Testimonial from "../components/Testimonial";
import FAQ from "../components/FAQ";
import TalkToUs from "../components/TalkToUs";
import Link from "next/link";
import { useState } from "react";
import { Icon } from "@iconify/react";

const SolutionsPage = () => {
  const [solution, setSolution] = useState(0);

  return (
    <main>
      <section>
        <div className="mt-44 flex-col items-center">
          <p className="mb-5 text-center text-neutral-n-80">
            One Retail : Smart Retail Platform builder made special for Your
            business
          </p>
          <div className="flex justify-center">
            <h1 className="mb-10 text-center text-neutral-n-90 font-bold sm:text-[40px] sm:leading-[50px] md:w-[683px]">
              <span className="text-primary">Simplify</span> your day-to-day
              operations to scale up your business
            </h1>
          </div>
          <div className="flex justify-center mb-20">
            <Link
              href="#"
              className="btn-border-primary py-2.5 px-4 font-semibold"
            >
              Learn More
            </Link>
          </div>
          <div className="flex gap-x-7 items-end">
            <div className="w-[250px] mb-[44PX] ml-7 text-sm rounded-xl px-4 py-5 shadow-[0_2px_12px_0px_rgba(164,164,164,0.25)]">
              <p className="font-medium mb-7">
                “One of the best retail service for me. Loved the community too.
                Very helpful.”
              </p>
              <div className="flex gap-x-3">
                <img
                  className="w-10 h-10 rounded-full"
                  src="/solutions/avatar.svg"
                  alt="avatar"
                />
                <div>
                  <p className="font-semibold">John Doe</p>
                  <p className="text-neutral-n-70">CEO of P&G</p>
                </div>
              </div>
            </div>

            <img src="/solutions/slider-1.svg" alt="image" />
            <img src="/solutions/slider-2.svg" alt="image" />
            <img src="/solutions/slider-3.svg" alt="image" />

            <div className="bg-[#0A153A] mb-[51px] text-left text-white py-2 px-6 rounded-xl h-[139px]">
              <p className="font-bold text-[40px] mb-2.5">24</p>
              <p className="mb-2 font-semibold">
                happy <br /> customers
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="py-20">
          <div className="flex justify-center">
            <h2 className="font-bold text-center text-neutral-n-90 text-[32px] leading-[48px] mb-5 md:w-[824px]">
              Revolutionize your business operations with{" "}
              <span className="text-primary">All-in-One</span> Retail Solutions
              Platform
            </h2>
          </div>
          <p className="text-center text-neutral-n-90 mb-16">
            Advanced technological solutions that integrate various digital
            tools and data-driven systems to enhance your overall retail
            productivity and customer experience
          </p>
          <div className="grid grid-cols-3 gap-x-6 sm:px-[155px]">
            <div className="border border-[#E0E0E0] rounded-lg p-5">
              <p className="text-primary-p-50 font-semibold mb-3">
                Satisfaction with Digital Shopping
              </p>
              <p className="text-primary-p-50 font-bold text-[32px] mb-5">
                79-85%
              </p>
              <p className="text-neutral-n-90 mb-11">
                Customers satisfied with online digital shopping experience.
              </p>
              <p className="text-neutral-n-70 text-xs">
                *data based on Statista and eMarketer in 2020
              </p>
            </div>

            <div className="border border-[#E0E0E0] rounded-lg p-5">
              <p className="text-primary-p-50 font-semibold mb-3">
                Strengthen Competitiveness
              </p>
              <p className="text-primary-p-50 font-bold text-[32px] mb-5">
                70%
              </p>
              <p className="text-neutral-n-90 mb-11">
                Reporting high in digital transformation for business can
                improve competitive insights
              </p>
              <p className="text-neutral-n-70 text-xs">
                *data based on Fujitsu
              </p>
            </div>

            <div className="border border-[#E0E0E0] rounded-lg p-5">
              <p className="text-primary-p-50 font-semibold mb-3">
                Enhance efficiency, Reduce costs
              </p>
              <p className="text-primary-p-50 font-bold text-[32px] mb-5">
                69%
              </p>
              <p className="text-neutral-n-90 mb-11">
                Digital transformation on retail can improve efficiency and
                reducing cost at the same time
              </p>
              <p className="text-neutral-n-70 text-xs">
                *data based on Fujitsu
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="md:px-24">
          <p className="text-center text-primary font-semibold mb-5">
            Business Solutions
          </p>
          <div className="flex justify-center">
            <h2 className="font-bold text-center text-neutral-n-90 text-[32px] leading-[48px] mb-5 md:w-[824px]">
              Powerful tools to deliver{" "}
              <span className="text-primary">world-class</span> customer
              experiences
            </h2>
          </div>
          <p className="text-center text-neutral-n-90 mb-16">
            Unleash the power of our One Retail solutions to create exceptional
            customer experiences. Elevate your business with our powerful tools
            and drive growth in the competitive retail landscape.
          </p>

          <div className="flex justify-center uppercase mb-10">
            <p
              onClick={() => setSolution(0)}
              className={`w-[162px] cursor-pointer pb-3 text-center text-sm ${
                solution == 0
                  ? "font-bold text-primary border-b border-[#1F40AE]"
                  : "font-semibold text-neutral-n-50"
              }`}
            >
              retail
            </p>
            <p
              onClick={() => setSolution(1)}
              className={`w-[162px] cursor-pointer pb-3 text-center text-sm ${
                solution == 1
                  ? "font-bold text-primary border-b border-[#1F40AE]"
                  : "font-semibold text-neutral-n-50"
              }`}
            >
              cafe
            </p>
            <p
              onClick={() => setSolution(2)}
              className={`w-[162px] cursor-pointer pb-3 text-center text-sm ${
                solution == 2
                  ? "font-bold text-primary border-b border-[#1F40AE]"
                  : "font-semibold text-neutral-n-50"
              }`}
            >
              Restaurant
            </p>
          </div>

          {solution == 0 && (
            <img className="w-full" src="/solutions/retail.svg" alt="retail" />
          )}
          {solution == 1 && (
            <img className="w-full" src="/solutions/cafe.svg" alt="cafe" />
          )}
          {solution == 2 && (
            <img
              className="w-full"
              src="/solutions/restaurant.svg"
              alt="restaurant"
            />
          )}

          <div className="grid grid-cols-3 gap-6 mt-10 mb-20">
            <div className="border border-[#E0E0E0] rounded-lg p-5">
              <div className="flex gap-x-4 items-center">
                <img src="/icons/pos-icon.svg" alt="pos" />
                <h4 className="font-bold text-neutral-n-100">Point of Sales</h4>
              </div>
              <p className="my-5 text-neutral-n-90">
                Simplify sales, accept diverse payments, and integrate loyalty
                programs with our versatile POS system. Boost efficiency and
                customer satisfaction.
              </p>
              <Link
                href={"#"}
                className="flex items-center text-primary font-medium text-sm"
              >
                Explore product{" "}
                <Icon className="ml-2" icon="ri:arrow-right-line" />
              </Link>
            </div>

            <div className="border border-[#E0E0E0] rounded-lg p-5">
              <div className="flex gap-x-4 items-center">
                <img src="/icons/sco-icon.svg" alt="sco" />
                <h4 className="font-bold text-neutral-n-100">
                  Self-checkout (SCO)
                </h4>
              </div>
              <p className="my-5 text-neutral-n-90">
                Revolutionize the checkout experience with our Self Check Out
                (SCO) feature, enabling customers to scan and pay for items
                themselves, reducing queues and enhancing convenience.
              </p>
              <Link
                href={"#"}
                className="flex items-center text-primary font-medium text-sm"
              >
                Explore product{" "}
                <Icon className="ml-2" icon="ri:arrow-right-line" />
              </Link>
            </div>

            <div className="border border-[#E0E0E0] rounded-lg p-5">
              <div className="flex gap-x-4 items-center">
                <img src="/icons/so-icon.svg" alt="so" />
                <h4 className="font-bold text-neutral-n-100">Self-ordering</h4>
              </div>
              <p className="my-5 text-neutral-n-90">
                Empower retail customers with seamless self-ordering—scan,
                browse, and shop effortlessly. Enhance efficiency, reduce wait
                times, and deliver a personalized experience.
              </p>
              <Link
                href={"#"}
                className="flex items-center text-primary font-medium text-sm"
              >
                Explore product{" "}
                <Icon className="ml-2" icon="ri:arrow-right-line" />
              </Link>
            </div>

            <div className="border border-[#E0E0E0] rounded-lg p-5">
              <div className="flex gap-x-4 items-center">
                <img src="/icons/cel-icon.svg" alt="cel" />
                <h4 className="font-bold text-neutral-n-100">
                  Customer Relationship Management
                </h4>
              </div>
              <p className="my-5 text-neutral-n-90">
                Strengthen customer relationships with advanced CRM technology,
                leveraging data analysis to enhance business performance and
                satisfaction.
              </p>
              <Link
                href={"#"}
                className="flex items-center text-primary font-medium text-sm"
              >
                Explore product{" "}
                <Icon className="ml-2" icon="ri:arrow-right-line" />
              </Link>
            </div>

            <div className="border border-[#E0E0E0] rounded-lg p-5">
              <div className="flex gap-x-4 items-center">
                <img src="/icons/ess-icon.svg" alt="ess" />
                <h4 className="font-bold text-neutral-n-100">
                  Office Automation
                </h4>
              </div>
              <p className="my-5 text-neutral-n-90">
                Streamline your office operations. Automate inventory
                management, order processing, and sales reporting to improve
                efficiency and collaboration among your retail team.
              </p>
              <Link
                href={"#"}
                className="flex items-center text-primary font-medium text-sm"
              >
                Explore product{" "}
                <Icon className="ml-2" icon="ri:arrow-right-line" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Testimonial />

      <FAQ />

      <TalkToUs />
    </main>
  );
};

export default SolutionsPage;
