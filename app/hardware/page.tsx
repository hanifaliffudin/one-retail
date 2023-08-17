"use client";

import Testimonial from "../components/Testimonial";
import FAQ from "../components/FAQ";
import TalkToUs from "../components/TalkToUs";
import Link from "next/link";
import { useState } from "react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

const SolutionsPage = () => {
  const [solution, setSolution] = useState(0);

  return (
    <main>
      <section>
        <div className="mt-44 flex-col items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 0.5 },
            }}
          >
            <p className="mb-5 text-center text-neutral-n-80 px-4">
              Unleash the Power of High-Performance Solutions for Retail
              Business
            </p>
            <div className="flex justify-center px-4">
              <h1 className="mb-10 text-center text-neutral-n-90 font-bold text-[40px] leading-[50px] md:w-[683px]">
                <span className="text-primary">Advanced</span> your business
                operations with high-performance
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 0.5, delay: 1 },
            }}
          >
            <div className="flex gap-x-7 items-end overflow-x-auto">
              <img src="/hardware/hardware-1.svg" alt="image" />
              <img src="/hardware/hardware-2.svg" alt="image" />
              <img src="/hardware/hardware-3.svg" alt="image" />
              <img src="/hardware/hardware-4.svg" alt="image" />
              <img
                className="mb-[51px]"
                src="/hardware/hardware-5.svg"
                alt="image"
              />
              <img
                className="mb-6"
                src="/hardware/hardware-6.svg"
                alt="image"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section>
        <div className="py-20 sm:px-24 px-4">
          <div className="grid grid-cols-2 mb-11 text-neutral-n-90">
            <h2 className="col-span-2 sm:col-span-1 text-[32px] leading-[40px] font-semibold">
              One Retail is open with <br className="hidden sm:block" /> variety
              of ways
            </h2>
            <p className="col-span-2 sm:col-span-1">
              Get hardware by your own, buy in your local stores, or you can
              fully drop your full services to us. It's all up to you! We are
              open with variety of ways that will suit you best.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              y: [100, 0],
              transition: { duration: 0.5, delay: 1 },
            }}
          >
            <div className="grid grid-cols-3 divide-y sm:divide-y-0 sm:divide-x">
              <div className="col-span-3 sm:col-span-1 sm:pr-10 sm:py-0 py-2.5">
                <img
                  className="mb-5"
                  src="/hardware/point-of-sale.svg"
                  alt="pos"
                />
                <h3 className="font-semibold text-xl text-neutral-n-90 mb-3">
                  Get your own?
                </h3>
                <p className="text-neutral-n-80">
                  One Retail works with worldwidestandard point of sale system,
                  including printers, cash drawer and barcode scanner. We can
                  work together with your preferences hardware.
                </p>
              </div>
              <div className="col-span-3 sm:col-span-1 sm:px-10 sm:py-0 py-2.5">
                <img className="mb-5" src="/hardware/store.svg" alt="store" />
                <h3 className="font-semibold text-xl text-neutral-n-90 mb-3">
                  Buy on your local store?
                </h3>
                <p className="text-neutral-n-80">
                  Don't worry, One Retail can support and work with any
                  preferences hardware that you choose.
                </p>
              </div>
              <div className="col-span-3 sm:col-span-1 sm:pl-10 sm:py-0 py-2.5">
                <img
                  className="mb-5"
                  src="/hardware/customer-service.svg"
                  alt="customer service"
                />
                <h3 className="font-semibold text-xl text-neutral-n-90 mb-3">
                  Full service on us?
                </h3>
                <p className="text-neutral-n-80">
                  Definitely can, you can freely talk to us what you need and we
                  will quickly provide it for you.
                </p>
              </div>
            </div>
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
