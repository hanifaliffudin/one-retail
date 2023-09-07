"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import FAQ from "@/app/components/FAQ";
import TalkToUs from "@/app/components/TalkToUs";

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
    <main className="max-w-screen-2xl mx-auto">
      <section>
        <div className="mt-[135px] mb-[83px] h-[640px] relative">
          <img
            className="absolute left-0"
            src="/products/oms/hero.svg"
            alt="hero-1"
          />
          <div className="absolute left-0 bg-[#20202099] w-full h-[640px]"></div>

          <div className="max-w-[612px] absolute top-1/2 left-24 transform -translate-y-1/2">
            <h1 className="sm:text-[40px] text-[22px] text-neutral-n-10 sm:leading-[62px] leading-[33px] font-bold mb-5">
              Expand Your Sales in Our Cutting-Edge{" "}
              <span className="text-primary-p-40">
                Point of Sale Technology
              </span>
            </h1>
            <p className="sm:text-lg mb-6 text-neutral-n-10">
              serves you a central hub for managing sales and customer
              transactions for your business, to ensure smooth and accurate
              processing at the moment of purchase
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
                className="btn-primary-40 rounded-md text-neutral-n-10 py-2.5 px-4 max-sm:text-xs font-semibold mr-4"
              >
                Let’s Get Demo!
              </Link>
              <Link
                href="#whyus"
                onClick={handleScroll}
                className="border border-[#D2D9EF] rounded-md text-neutral-n-30 py-2.5 px-4 max-sm:text-xs font-semibold"
              >
                Learn More
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section>
        <div className="sm:mx-24 mx-auto grid grid-cols-4 gap-x-6 pb-20 border-b border-b-[#E0E0E0] mb-14">
          <div className="col-span-4 sm:col-span-1">
            <h2 className="font-bold sm:text-[36px] text-xl sm:leading-[54px] text-neutral-n-90">
              Each products meets a high{" "}
              <span className="text-primary">standard</span>
            </h2>
          </div>
          <div className="col-span-4 sm:col-span-1 pt-5 border-t-[#E0E0E0] border-t-[4px]">
            <h3 className="font-semibold text-xl mb-3 text-neutral-n-90">
              Packed with built-in amazing features
            </h3>
            <p className="text-neutral-n-80">
              Unleash the power of our packed built-in features designed to
              elevate your experience. Our solution comes fully loaded with a
              comprehensive suite of functionalities that cater to your diverse
              needs
            </p>
          </div>
          <div className="col-span-4 sm:col-span-1 pt-5 border-t-[#E0E0E0] border-t-[4px]">
            <h3 className="font-semibold text-xl mb-3 text-neutral-n-90">
              Optimized for online selling & business
            </h3>
            <p className="text-neutral-n-80">
              Step into the world of online selling and business success with
              our optimized solution. Packed with powerful features specifically
              designed for the digital marketplace, our solution empowers you to
              thrive in the online space
            </p>
          </div>
          <div className="col-span-4 sm:col-span-1 pt-5 border-t-[#E0E0E0] border-t-[4px]">
            <h3 className="font-semibold text-xl mb-3 text-neutral-n-90">
              Covered with long term support
            </h3>
            <p className="text-neutral-n-80">
              Our commitment to your success goes beyond the initial
              implementation. With our dedicated support team by your side,
              you'll have access to ongoing assistance, updates, and
              enhancements to ensure your continued growth
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="sm:px-24">
          <div className="font-medium text-xl text-primary mb-3">
            Point of Sale (POS)
          </div>
          <h2 className="font-bold sm:text-[36px] text-xl text-neutral-n-90 mb-10">
            Selling the way it should be
          </h2>
          <div className="flex gap-x-[130px] items-center">
            <img src="/products/oms/pos.svg" alt="pos" />
            <div className="flex flex-col gap-y-10">
              <div className="border-l-[#E0E0E0] border-l-4 pl-5">
                <h3 className="font-semibold text-xl text-neutral-n-90 mb-3">
                  Fast Checkout
                </h3>
                <p className="text-neutral-n-80">
                  Enjoy a seamless and expedited checkout experience that gets
                  your queue way in no time.
                </p>
              </div>
              <div className="border-l-[#E0E0E0] border-l-4 pl-5">
                <h3 className="font-semibold text-xl text-neutral-n-90 mb-3">
                  Easily Manage Inventories
                </h3>
                <p className="text-neutral-n-80">
                  Seamlessly track stock levels, streamline replenishment, and
                  optimize inventory turnover.
                </p>
              </div>
              <div className="border-l-[#E0E0E0] border-l-4 pl-5">
                <h3 className="font-semibold text-xl text-neutral-n-90 mb-3">
                  Less Work
                </h3>
                <p className="text-neutral-n-80">
                  Say goodbye to repetitive and time-consuming tasks, as our
                  solution takes care of them for you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mt-20 bg-any-business pb-20">
          <h2 className="font-bold mb-3 sm:text-[32px] text-xl sm:leading-[48px] text-center text-neutral-n-90">
            Any Business. Any Size. All in{" "}
            <span className="text-primary">One</span> Platform
          </h2>
          <p className="text-neutral-n-90 text-center mb-[46px]">
            It’s the power to sell in person backed by the power to sell online,
            all by the world’s best commerce platform.
          </p>

          <div className="flex sm:px-24">
            <div className="z-10 mt-[113px]">
              <img className="mb-5" src="/products/oms/pos-2.svg" alt="pos-2" />
              <div className="w-[294px]">
                <h4 className="mb-2 font-semibold text-xl text-neutral-n-90">
                  Single store
                </h4>
                <p className="text-neutral-n-80">
                  Experience the convenience and reliability of our point of
                  sale solution and take your store to new heights
                </p>
              </div>
            </div>
            <div className="-ml-[82px]">
              <img className="mb-5" src="/products/oms/pos-3.svg" alt="pos-3" />
              <div className="w-[506px]">
                <h4 className="mb-2 font-semibold text-xl text-neutral-n-90">
                  Multi store
                </h4>
                <p className="text-neutral-n-80">
                  Designed specifically for multi-location and franchise
                  businesses, our system empowers you to efficiently manage
                  orders, track inventory, and streamline operations across all
                  your restaurant locations
                </p>
              </div>
            </div>
            <div className="ml-6">
              <img className="mb-5" src="/products/oms/pos-4.svg" alt="pos-4" />
              <div className="w-[294px]">
                <h4 className="mb-2 font-semibold text-xl text-neutral-n-90">
                  Events
                </h4>
                <p className="text-neutral-n-80">
                  Whether you're organizing a conference, concert, or festival,
                  our system is equipped to handle the unique demands of any
                  environments
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="sm:mx-24 mx-auto py-20 border-b border-b-[#E0E0E0] mb-20">
          <div className="flex items-center">
            <div className="max-w-[400px] mr-[130px]">
              <div className="font-medium text-xl text-primary mb-3">
                Self Ordering
              </div>
              <h2 className="font-bold sm:text-[36px] sm:leading-[45px] text-xl text-neutral-n-90 mb-10">
                Let your customers choose their way
              </h2>
              <p className="text-neutral-n-90">
                One Retail Self-order providing deep personalized customer
                experience by quick scanning the product barcode and allow them
                to view the menu then can quickly add it to cart. This also
                reduce business cost because customer no longer need server
                assistance
              </p>
            </div>

            <div className="bg-[#EDEFF7] px-[22px] pt-9 rounded-[20px] flex flex-col items-center mr-6">
              <img src="/products/oms/icon-so-1.svg" alt="check" />
              <p className="font-medium text-xl mb-10 max-w-[236px]">
                Place order yourself just with 3 easy steps
              </p>
              <img src="/products/oms/phone-1.svg" alt="phone" />
            </div>

            <img src="/products/oms/so-woman.svg" alt="woman" />
          </div>
        </div>
      </section>

      <section>
        <div className="sm:px-24 bg-any-business mb-20">
          <div className="font-medium text-xl text-primary mb-3">
            Self Checkout
          </div>
          <h2 className="font-bold sm:text-[36px] text-xl text-neutral-n-90 mb-10">
            Fast, Convenient, and Contactless
          </h2>
          <img className="mb-20" src="/products/oms/sc-1.svg" alt="sc 1" />
          <div className="flex gap-x-[106px]">
            <div className="mt-10 max-w-[506px]">
              <div className="flex gap-x-3 mb-3">
                <img src="/products/oms/visa.svg" alt="visa" />
                <img src="/products/oms/mastercard.svg" alt="mastercard" />
                <img src="/products/oms/apple-pay.svg" alt="apple-pay" />
                <img src="/products/oms/gpay.svg" alt="gpay" />
              </div>
              <div className="flex gap-x-3 mb-[60px]">
                <img src="/products/oms/alipay.svg" alt="alipay" />
                <img
                  src="/products/oms/american-express.svg"
                  alt="american-express"
                />
                <img src="/products/oms/paypal.svg" alt="paypal" />
              </div>
              <h2>Accept various payment for faster checkout.</h2>
              <p>
                Optimized customer entire check-out process with One Retail SCO
                Platform to support adding or scanning item to payment.
                Personalized customer self-service that almost same as POS and
                also can integrated with payment system so customer can pay at
                once with their desired payment method.
              </p>
            </div>
            <img src="/products/oms/sc-2.svg" alt="sc-2" />
          </div>
        </div>
      </section>

      <TalkToUs />
    </main>
  );
};

export default OrderManagementSystemPage;
