"use client";

import FooterWithSocialMediaIcons from "@/app/components/Footer";
import NavbarWithCTAButton from "@/app/components/Navbar";
import Link from "next/link";
import { useRouter } from "next/navigation";

const ViewBlogPage = ({ params }: { params: { slug: string } }) => {
  let url =
    "https://caards.codesupply.co/firmware/2023/02/09/the-top-smart-home-devices-for-home-security/";

  const router = useRouter();

  return (
    <>
      <NavbarWithCTAButton />
      <main>
        <section>
          <div className="mt-[112px] xl:mx-24 mx-4 relative sm:mb-16 mb-8">
            <img
              className="rounded-[20px] max-sm:min-h-[284px] object-cover"
              src="/blog/hero-blog-1.svg"
              alt="hero"
            />
            <div className="absolute left-0 top-0 rounded-[20px] overlay-blog w-full h-full max-sm:min-h-[284px]"></div>
            <div className="grid grid-cols-4 gap-x-16 max-sm:top-0 px-6 max-sm:pt-4 max-sm:gap-y-[43px]  absolute sm:bottom-[46px] sm:px-16 text-white">
              <div className="sm:col-span-1 col-span-4">
                <div className="flex flex-col gap-y-3">
                  <img
                    className="sm:w-12 w-8"
                    src="/icons/crm-icon-blue.svg"
                    alt="Customer Relationship Management"
                  />
                  <p className="font-medium">
                    Customer Relationship Management
                  </p>
                </div>
              </div>
              <div className="sm:col-span-3 col-span-4">
                <h1 className="font-bold sm:text-[36px] text-[22px] sm:leading-[54px] line-clamp-4">
                  How to optimize and expand your business with product
                  analytics
                </h1>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="grid grid-cols-4 xl:gap-x-16 gap-x-8 xl:px-40 px-4 gap-y-6 sm:mb-[100px] mb-10">
            <div className="sm:col-span-1 col-span-4 relative h-full order-last sm:order-first">
              <div className="sm:sticky sm:top-24 ">
                <div
                  onClick={() => router.back()}
                  className="sticky top-0 cursor-pointer max-sm:hidden flex items-center gap-x-2 font-semibold text-neutral-dark"
                >
                  <img src="/blog/SwapLeft.svg" alt="SwapLeft" />
                  Back
                </div>
                <hr className="my-8 max-sm:hidden" />
                <p className="mb-4 text-neutral-n-80 font-medium">Tag</p>
                <div className="flex flex-wrap gap-1">
                  <div className="bg-[#F5F5F5] rounded border border-[#EDEDED] py-1 px-2 text-sm text-neutral-n-70">
                    #Customer
                  </div>
                  <div className="bg-[#F5F5F5] rounded border border-[#EDEDED] py-1 px-2 text-sm text-neutral-n-70">
                    #Management
                  </div>
                  <div className="bg-[#F5F5F5] rounded border border-[#EDEDED] py-1 px-2 text-sm text-neutral-n-70">
                    #Product
                  </div>
                  <div className="bg-[#F5F5F5] rounded border border-[#EDEDED] py-1 px-2 text-sm text-neutral-n-70">
                    #Analytics
                  </div>
                </div>
              </div>
            </div>
            <div className="sm:col-span-3 col-span-4 ">
              <div className="sm:mb-24 mb-10">
                <p>
                  Gadgets have been a part of our lives for centuries. From the
                  first mechanical clock to the latest smartphone, gadgets have
                  transformed the way we live, work, and play. As we continue to
                  embrace new technologies and innovations, gadgets are becoming
                  more sophisticated and powerful than ever before.
                </p>
                <p>
                  One of the most significant ways that gadgets have evolved is
                  through the rise of digital technology. Digital gadgets, such
                  as smartphones, laptops, and tablets, have transformed the way
                  we communicate, access information, and even entertain
                  ourselves.
                  <br />
                  <br />
                  With digital gadgets, we can access the internet from just
                  about anywhere in the world, stream movies and TV shows, and
                  even control our home appliances with a simple voice command.
                  Digital gadgets have also made it easier than ever to work
                  remotely, collaborate with colleagues, and stay connected with
                  friends and family.
                  <br />
                  <br />
                  As technology continues to evolve, so too do digital gadgets.
                  From foldable phones to smartwatches, digital gadgets are
                  becoming more versatile, powerful, and convenient than ever
                  before.
                </p>
              </div>

              <div className="bg-[#F0F1F7] rounded-lg sm:py-5 py-3 sm:px-20 px-4">
                <h3 className="text-center text-neutral-dark font-semibold text-lg mb-3">
                  Share this blog
                </h3>
                <div className="flex">
                  <input
                    type="text"
                    value={url}
                    className="rounded-none text-neutral-n-80 font-medium rounded-l-md block flex-1 min-w-0 w-full text-sm border-0 bg-white p-2.5 pr-0 "
                  />
                  <span
                    onClick={() => {
                      navigator.clipboard.writeText(url);
                    }}
                    className="inline-flex items-center p-2.5 text-sm rounded-r-lg bg-white border-l cursor-pointer"
                  >
                    <img src="/icons/copy-icon-blue.svg" alt="copy-icon-blue" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="bg-[#F5F5F5] sm:px-24 px-4 sm:py-16 py-4 mb-8">
            <h2 className="mb-7 font-bold text-neutral-dark sm:text-[32px] text-xl sm:leading-[48px]">
              More from One Retail
            </h2>
            <div className="flex flex-wrap justify-center gap-5">
              <Link href="/blog/slug" className="col-span-4 sm:col-span-1">
                <div className="shadow-[0px_20px_40px_0px_rgba(160,160,160,0.1)] sm:w-[297px] rounded-b-lg">
                  <img
                    className="rounded-t-lg w-full object-cover"
                    src="/blog/oms-1.svg"
                    alt="oms 1"
                  />
                  <div className="px-3 pt-3 pb-[22px]">
                    <p className="font-semibold text-primary mb-2.5">CRM</p>
                    <h3 className="font-semibold text-xl text-neutral-n-90 mb-2">
                      How to optimize and expand your business with product
                      analytics
                    </h3>
                    <p className="text-neutral-n-90 line-clamp-2">
                      When we set out to bring product analytics to our
                      business, we knew...
                    </p>
                  </div>
                </div>
              </Link>
              <Link href="/blog/slug" className="col-span-4 sm:col-span-1">
                <div className="shadow-[0px_20px_40px_0px_rgba(160,160,160,0.1)] sm:w-[297px] rounded-b-lg">
                  <img
                    className="rounded-t-lg w-full object-cover"
                    src="/blog/oms-1.svg"
                    alt="oms 1"
                  />
                  <div className="px-3 pt-3 pb-[22px]">
                    <p className="font-semibold text-primary mb-2.5">
                      Office Automation
                    </p>
                    <h3 className="font-semibold text-xl text-neutral-n-90 mb-2">
                      How to optimize and expand your business with product
                      analytics
                    </h3>
                    <p className="text-neutral-n-90 line-clamp-2">
                      When we set out to bring product analytics to our
                      business, we knew...
                    </p>
                  </div>
                </div>
              </Link>
              <Link href="/blog/slug" className="col-span-4 sm:col-span-1">
                <div className="shadow-[0px_20px_40px_0px_rgba(160,160,160,0.1)] sm:w-[297px] rounded-b-lg">
                  <img
                    className="rounded-t-lg w-full object-cover"
                    src="/blog/oms-1.svg"
                    alt="oms 1"
                  />
                  <div className="px-3 pt-3 pb-[22px]">
                    <p className="font-semibold text-primary mb-2.5">
                      Supplier Management
                    </p>
                    <h3 className="font-semibold text-xl text-neutral-n-90 mb-2">
                      How to optimize and expand your business with product
                      analytics
                    </h3>
                    <p className="text-neutral-n-90 line-clamp-2">
                      When we set out to bring product analytics to our
                      business, we knew...
                    </p>
                  </div>
                </div>
              </Link>
              <Link href="/blog/slug" className="col-span-4 sm:col-span-1">
                <div className="shadow-[0px_20px_40px_0px_rgba(160,160,160,0.1)] sm:w-[297px] rounded-b-lg">
                  <img
                    className="rounded-t-lg w-full object-cover"
                    src="/blog/oms-1.svg"
                    alt="oms 1"
                  />
                  <div className="px-3 pt-3 pb-[22px]">
                    <p className="font-semibold text-primary mb-2.5">
                      Order Management System
                    </p>
                    <h3 className="font-semibold text-xl text-neutral-n-90 mb-2">
                      How to optimize and expand your business with product
                      analytics
                    </h3>
                    <p className="text-neutral-n-90 line-clamp-2">
                      When we set out to bring product analytics to our
                      business, we knew...
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <FooterWithSocialMediaIcons />
    </>
  );
};

export default ViewBlogPage;
