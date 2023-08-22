"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";

const ContactPage = () => {
  return (
    <main>
      <div className="sm:w-[540px] sm:h-[540px] -z-10 rounded-full blur-xl bg-[#A9B3D626] absolute -top-[187px] -left-[105px]"></div>
      <section>
        <div className="mt-44 grid grid-cols-2 md:px-24">
          <div className="col-span-2 sm:col-span-1 text-neutral-dark sm:w-[338px]">
            <h1 className="text-[32px] leading-[48px] mb-7 font-bold">
              Talk to Us and See How One Retail Work for Your Business
            </h1>
            <p>Give us a call if you need help picking a One Retail product.</p>

            <div className="sm:mt-[205px] flex gap-x-[50px]">
              <Link
                href="https://instagram.com"
                className="flex gap-x-4 items-center"
              >
                <div className="flex justify-center items-center rounded-full h-[40px] w-[40px] text-primary border border-[#1F40AE]">
                  <Icon icon="ri:instagram-fill" />
                </div>
                <div className="font-semibold text-neutral-dark">
                  oneretail.id
                </div>
              </Link>
              <Link
                href="https://instagram.com"
                className="flex gap-x-4 items-center"
              >
                <div className="flex justify-center items-center rounded-full h-[40px] w-[40px] border border-[#1F40AE]">
                  <Icon icon="ri:facebook-fill" />
                </div>
                <div className="font-semibold text-neutral-dark">
                  One Retail
                </div>
              </Link>
            </div>
          </div>
          <div className="col-span-2 sm:col-span-1 flex justify-center">
            <img src="/contact/contact-hero.svg" alt="hero" />
          </div>
        </div>
      </section>
      <section>
        <div className="grid grid-cols-2 md:px-24 pb-32 mb-8 bg-[#F5F5F5] relative">
          <div className="absolute -z-10 -mt-24 top-0 right-0 w-2/3 h-[100px]">
            <img src="/contact/trapesium.svg" alt="trapesium" />
            {/* <div className="relative bg-[#F5F5F5] w-full h-full">
              <div className="absolute top-0 left-0 border-solid rotate-45 border-r-black border-r-8 border-y-transparent border-y-8 border-l-0"></div>
            </div> */}
          </div>

          <div className="col-span-2 sm:col-span-1 text-neutral-dark sm:w-[338px] pt-[108px]">
            <h3 className="text-neutral-dark font-semibold text-[22px] mb-8">
              Contact
            </h3>
            <div className="flex items-center justify-between border border-[#E0E0E0] rounded-lg p-5 mb-8">
              <div className="flex gap-x-6 items-center">
                <div className="flex justify-center items-center rounded-full h-[48px] w-[48px] text-primary bg-[#D2D9EF]">
                  <Icon width={28} icon="ant-design:phone-filled" />
                </div>

                <p className="font-semibold text-neutral-n-100">
                  0852 6654 1121
                </p>
              </div>
              <div>
                <Icon color="#cfd1d4" width={28} icon="carbon:chevron-right" />
              </div>
            </div>
            <div className="flex items-center justify-between border border-[#E0E0E0] rounded-lg p-5 mb-8">
              <div className="flex gap-x-6 items-center">
                <div className="flex justify-center items-center rounded-full h-[48px] w-[48px] text-primary bg-[#D2D9EF]">
                  <Icon width={28} icon="ri:mail-open-fill" />
                </div>

                <p className="font-semibold text-neutral-n-100">
                  example@gmail.com
                </p>
              </div>
              <div>
                <Icon color="#cfd1d4" width={28} icon="carbon:chevron-right" />
              </div>
            </div>
          </div>
          <div className="col-span-2 sm:col-span-1 ">
            <div className="-mt-40 w-full bg-white rounded-xl shadow-[0px_20px_40px_0px_rgba(31,64,174,0.1)] px-12 py-14">
              <form action="">
                <div className="grid grid-cols-2 gap-6">
                  <div className="col-span-2 md:col-span-1">
                    <label
                      htmlFor="firstName"
                      className="block mb-1.5 text-sm font-medium text-gray-900 "
                    >
                      First name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="border placeholder:text-neutral-n-60 border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      placeholder="Enter first name"
                      required
                    />
                  </div>
                  <div className="col-span-2 md:col-span-1">
                    <label
                      htmlFor="lastName"
                      className="block mb-1.5 text-sm font-medium text-gray-900 "
                    >
                      Last name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="border placeholder:text-neutral-n-60 border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      placeholder="Enter last name"
                      required
                    />
                  </div>
                  <div className="col-span-2 md:col-span-1">
                    <label
                      htmlFor="email"
                      className="block mb-1.5 text-sm font-medium text-gray-900 "
                    >
                      Work Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="border placeholder:text-neutral-n-60 border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      placeholder="you@company.com"
                      required
                    />
                  </div>
                  <div className="col-span-2 md:col-span-1">
                    <label
                      htmlFor="companyName"
                      className="block mb-1.5 text-sm font-medium text-gray-900 "
                    >
                      Company name
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      className="border placeholder:text-neutral-n-60 border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      placeholder="Enter name"
                      required
                    />
                  </div>
                  <div className="col-span-2">
                    <label
                      htmlFor="phone"
                      className="block mb-1.5 text-sm font-medium text-gray-900 "
                    >
                      Phone number
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                        <img src="/id-lang.svg" alt="id" />
                        <Icon icon="carbon:chevron-down" />
                      </div>
                      <input
                        type="tel"
                        id="phone"
                        className="border placeholder:text-neutral-n-100 border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-16 p-2.5"
                        placeholder="+62 (555) 000-0000"
                      />
                    </div>
                  </div>

                  <div className="col-span-2">
                    <label
                      htmlFor="message"
                      className="block mb-1.5 text-sm font-medium text-gray-900 "
                    >
                      Message
                    </label>
                    <textarea
                      rows={4}
                      className="border placeholder:text-neutral-n-60 border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      placeholder="Enter your message "
                    />
                  </div>

                  <button
                    type="submit"
                    className="col-span-2 btn-primary mt-14 w-full text-neutral-n-10 py-2.5 px-4 font-semibold md:mr-5"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
