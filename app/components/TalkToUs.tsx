import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

const TalkToUs = () => {
  return (
    <section>
      <div className="grid grid-cols-5 md:py-20 py-10 md:px-[120px] gap-y-4 px-4 mb-16">
        <div className="lg:col-span-2 col-span-5">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              x: [-800, 0],
              transition: { duration: 0.5 },
            }}
            viewport={{ once: true }}
          >
            <div className="bg-[#0F2057] md:h-[588px] h-[366px] relative rounded-xl text-white md:py-10 py-6 md:px-12 px-6">
              <h2 className="font-bold sm:text-[32px] sm:leading-[48px] text-xl text-neutral-n-10 mb-5">
                Talk to us and see how One Retail work for your business
              </h2>
              <p className="max-sm:text-sm">
                Give us a call if you need help picking a One Retail product.
              </p>
              <div className="absolute md:bottom-10 bottom-6 z-10">
                <p className="mb-5 font-semibold sm:text-xl">Contact</p>
                <div className="flex gap-x-3 items-center mb-3 max-sm:text-sm">
                  <Icon icon="ant-design:phone-filled" />
                  0852 6654 1121
                </div>
                <div className="flex gap-x-3 items-center max-sm:text-sm">
                  <Icon icon="ant-design:mail-filled" color="white" />
                  hello@theoneretail.com
                </div>
              </div>
              <img
                className="absolute right-0 bottom-0 rounded-br-xl"
                src="/home/Ellipse-32.svg"
                alt="Ellipse-32"
              />
            </div>
          </motion.div>
        </div>

        <div className="lg:col-span-3 col-span-5 xl:ml-20 lg:ml-10 lg:p-8 md:pt-8 pt-2 lg:pt-0">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              x: [800, 0],
              transition: { duration: 0.5 },
            }}
            viewport={{ once: true }}
          >
            <h3 className="font-bold mb-8 text-[#0A0A0A] text-2xl border-l-[4px] border-[#1F40AE] pl-3">
              Let’s Talk
            </h3>

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

                <button className="col-span-2 md:col-span-1 btn-primary mt-5 md:mt-[124px] text-neutral-n-10 py-2.5 px-4 font-semibold md:mr-5">
                  Get Demo
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TalkToUs;
