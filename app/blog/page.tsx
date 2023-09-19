"use client";

import { Icon } from "@iconify/react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Navigation } from "swiper/modules";
import BlogCard from "../components/BlogCard";
import Link from "next/link";
import { useState } from "react";

const BlogPage = () => {
  const [endOms, setEndOms] = useState(false);
  const [endCrm, setEndCrm] = useState(false);
  const [endOa, setEndOa] = useState(false);
  const [endSm, setEndSm] = useState(false);
  return (
    <main>
      <section>
        <div className="relative h-[158px] mt-[80px]">
          <img
            className="absolute object-cover max-sm:min-h-[158px] left-0"
            src="/blog/bg-header-blog.svg"
            alt="bg-header-blog"
          />
          <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-medium sm:text-[40px] text-[22px] sm:leading-[62px] leading-[33px] ">
            One Retail <span className="font-bold">Blog</span>
          </h1>
        </div>
      </section>

      <section>
        <div className="sm:px-24 px-4 mb-20 mt-10">
          <h2 className="mb-7 font-bold text-neutral-dark sm:text-[32px] text-xl sm:leading-[48px]">
            Popular
          </h2>
          <div className="grid grid-cols-2 gap-x-7 gap-y-6">
            <div className="col-span-2 sm:col-span-1">
              <div className="relative sm:h-[430px] img-hover-zoom-blog-popular-big-container">
                <div className="img-hover-zoom-blog-popular-big sm:w-[620px] sm:h-[430px] rounded-xl">
                  <img
                    className="object-cover h-full w-full"
                    src="/blog/popular-1.svg"
                    alt="popular-1"
                  />
                </div>

                <div className="absolute left-0 bottom-0 text-white p-6">
                  <p className="mb-3 font-semibold">
                    Customer Relationship Management
                  </p>
                  <h2 className="mb-3 font-bold sm:text-[28px] text-xl sm:leading-[42px]">
                    How to optimize and expand your business with product
                    analytics
                  </h2>
                  <p className="mb-6 font-medium max-sm:text-sm line-clamp-2">
                    When we set out to bring product analytics to our business,
                    we knew that analytics for company revenue, in
                    particular,...
                  </p>
                  <hr className="mb-6 bg-[#FFFFFF4D]" />
                  <Link
                    href={`/blog/anjay`}
                    className="flex font-semibold max-sm:text-sm items-center gap-x-1"
                  >
                    Read more
                    <Icon className="cursor-pointer" icon="bxs:chevron-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <div className="bg-[#F5F5F5] rounded-md px-6 py-[26px] flex flex-col gap-y-6">
                <Link
                  href="/blog/slug"
                  className="flex gap-x-4 img-hover-zoom-blog-popular-small-container"
                >
                  <div className="img-hover-zoom-blog-popular-small rounded-md">
                    <img
                      className="object-cover"
                      src="/blog/popular-2.svg"
                      alt="popular-2"
                    />
                  </div>
                  <div className="">
                    <p className="mb-3 text-sm text-primary-p-80">
                      Office Automation
                    </p>
                    <h3 className="title font-semibold sm:text-xl text-lg text-neutral-dark mb-5 line-clamp-2">
                      How to optimize and expand your business with product
                      analytics
                    </h3>
                    <hr />
                  </div>
                </Link>
                <Link
                  href="/blog/slug"
                  className="flex gap-x-4 img-hover-zoom-blog-popular-small-container"
                >
                  <div className="img-hover-zoom-blog-popular-small rounded-md">
                    <img src="/blog/popular-3.svg" alt="popular-3" />
                  </div>
                  <div className="">
                    <p className="mb-3 text-sm text-primary-p-80">
                      Supplier Management
                    </p>
                    <h3 className="title font-semibold sm:text-xl text-lg text-neutral-dark mb-5 line-clamp-2">
                      How to optimize and expand your business with product
                      analytics
                    </h3>
                    <hr />
                  </div>
                </Link>
                <Link
                  href="/blog/slug"
                  className="flex gap-x-4 img-hover-zoom-blog-popular-small-container"
                >
                  <div className="img-hover-zoom-blog-popular-small rounded-md">
                    <img src="/blog/popular-4.svg" alt="popular-4" />
                  </div>
                  <div className="">
                    <p className="mb-3 text-sm text-primary-p-80">
                      Order Management System
                    </p>
                    <h3 className="title font-semibold sm:text-xl text-lg text-neutral-dark mb-5 line-clamp-2">
                      How to optimize and expand your business with product
                      analytics
                    </h3>
                    <hr />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr />

      <section>
        <div className="my-20">
          <div className="relative">
            <div className="sm:px-24 px-4 flex max-sm:grid max-sm:grid-cols-3 justify-between items-center mb-7">
              <h2 className="sm:mb-7 max-sm:col-span-2 font-bold text-neutral-dark sm:text-[32px] text-xl sm:leading-[48px]">
                <span className="font-medium">Blog</span> Order Management
                System
              </h2>
              <div className="flex items-center max-sm:justify-end">
                <div
                  className={`w-2.5 h-2.5 ${
                    endOms ? "bg-[#D9D9D9]" : "bg-primary"
                  } rounded-full mr-2.5 max-sm:hidden`}
                ></div>
                <div
                  className={`w-2.5 h-2.5 ${
                    endOms ? "bg-primary" : "bg-[#D9D9D9]"
                  } rounded-full mr-5 max-sm:hidden`}
                ></div>
                <img
                  onClick={() => setEndOms(false)}
                  className="mr-4 swiper-button image-swiper-button-prev cursor-pointer"
                  src="/blog/LeftCircle.svg"
                  alt="LeftCircle"
                />
                <img
                  onClick={() => setEndOms(true)}
                  className="swiper-button image-swiper-button-next cursor-pointer"
                  src="/blog/RightCircle.svg"
                  alt="RightCircle"
                />
              </div>
            </div>
            <Swiper
              breakpoints={{
                400: {
                  slidesPerView: 1,
                },
                1000: {
                  slidesPerView: 4.4,
                },
              }}
              onSwiper={(swiper) => console.log(swiper)}
              navigation={{
                nextEl: ".image-swiper-button-next",
                prevEl: ".image-swiper-button-prev",
                disabledClass: "swiper-button-disabled",
              }}
              modules={[Navigation]}
              slidesOffsetAfter={160}
            >
              <SwiperSlide className="sm:ml-24">
                <BlogCard
                  imageThumbnail="/blog/oms-1.svg"
                  category="Order Management System"
                  title="How to optimize and expand your business with product analytics"
                  paragraph="When we set out to bring product analytics to our
                  business, we knew..."
                />
              </SwiperSlide>
              <SwiperSlide>
                <BlogCard
                  imageThumbnail="/blog/oms-1.svg"
                  category="Order Management System"
                  title="Customer Journey : Definitions, analysis and best practices"
                  paragraph="When we set out to bring product analytics to our
                  business, we knew..."
                />
              </SwiperSlide>
              <SwiperSlide>
                <BlogCard
                  imageThumbnail="/blog/oms-1.svg"
                  category="Order Management System"
                  title="How to optimize and expand your business with product analytics"
                  paragraph="When we set out to bring product analytics to our
                  business, we knew..."
                />
              </SwiperSlide>
              <SwiperSlide>
                <BlogCard
                  imageThumbnail="/blog/oms-1.svg"
                  category="Order Management System"
                  title="How to optimize and expand your business with product analytics"
                  paragraph="When we set out to bring product analytics to our
                  business, we knew..."
                />
              </SwiperSlide>
              <SwiperSlide>
                <BlogCard
                  imageThumbnail="/blog/oms-1.svg"
                  category="Order Management System"
                  title="How to optimize and expand your business with product analytics"
                  paragraph="When we set out to bring product analytics to our
                  business, we knew..."
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>

      <section>
        <div className="my-20">
          <div className="relative">
            <div className="sm:px-24 px-4 flex max-sm:grid max-sm:grid-cols-3 justify-between items-center mb-7">
              <h2 className="sm:mb-7 max-sm:col-span-2 font-bold text-neutral-dark sm:text-[32px] text-xl sm:leading-[48px]">
                <span className="font-medium">Blog</span> Customer Relationship
                Management
              </h2>
              <div className="flex items-center max-sm:justify-end">
                <div
                  className={`w-2.5 h-2.5 ${
                    endCrm ? "bg-[#D9D9D9]" : "bg-primary"
                  } rounded-full mr-2.5 max-sm:hidden`}
                ></div>
                <div
                  className={`w-2.5 h-2.5 ${
                    endCrm ? "bg-primary" : "bg-[#D9D9D9]"
                  } rounded-full mr-5 max-sm:hidden`}
                ></div>
                <img
                  onClick={() => setEndCrm(false)}
                  className="mr-4 swiper-button image-swiper-button-prev-crm cursor-pointer"
                  src="/blog/LeftCircle.svg"
                  alt="LeftCircle"
                />
                <img
                  onClick={() => setEndCrm(true)}
                  className="swiper-button image-swiper-button-next-crm cursor-pointer"
                  src="/blog/RightCircle.svg"
                  alt="RightCircle"
                />
              </div>
            </div>
            <Swiper
              breakpoints={{
                400: {
                  slidesPerView: 1,
                },
                1000: {
                  slidesPerView: 4.4,
                },
              }}
              onSwiper={(swiper) => console.log(swiper)}
              navigation={{
                nextEl: ".image-swiper-button-next-crm",
                prevEl: ".image-swiper-button-prev-crm",
                disabledClass: "swiper-button-disabled",
              }}
              modules={[Navigation]}
              slidesOffsetAfter={160}
            >
              <SwiperSlide className="sm:ml-24">
                <BlogCard
                  imageThumbnail="/blog/oms-1.svg"
                  category="CRM"
                  title="How to optimize and expand your business with product analytics"
                  paragraph="When we set out to bring product analytics to our
                  business, we knew..."
                />
              </SwiperSlide>
              <SwiperSlide>
                <BlogCard
                  imageThumbnail="/blog/oms-1.svg"
                  category="CRM"
                  title="Customer Journey : Definitions, analysis and best practices"
                  paragraph="When we set out to bring product analytics to our
                  business, we knew..."
                />
              </SwiperSlide>
              <SwiperSlide>
                <BlogCard
                  imageThumbnail="/blog/oms-1.svg"
                  category="CRM"
                  title="How to optimize and expand your business with product analytics"
                  paragraph="When we set out to bring product analytics to our
                  business, we knew..."
                />
              </SwiperSlide>
              <SwiperSlide>
                <BlogCard
                  imageThumbnail="/blog/oms-1.svg"
                  category="CRM"
                  title="How to optimize and expand your business with product analytics"
                  paragraph="When we set out to bring product analytics to our
                  business, we knew..."
                />
              </SwiperSlide>
              <SwiperSlide>
                <BlogCard
                  imageThumbnail="/blog/oms-1.svg"
                  category="CRM"
                  title="How to optimize and expand your business with product analytics"
                  paragraph="When we set out to bring product analytics to our
                  business, we knew..."
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>

      <section>
        <div className="my-20">
          <div className="relative">
            <div className="sm:px-24 px-4 flex max-sm:grid max-sm:grid-cols-3 justify-between items-center mb-7">
              <h2 className="sm:mb-7 max-sm:col-span-2 font-bold text-neutral-dark sm:text-[32px] text-xl sm:leading-[48px]">
                <span className="font-medium">Blog</span> Office Automation
              </h2>
              <div className="flex items-center max-sm:justify-end">
                <div
                  className={`w-2.5 h-2.5 ${
                    endOa ? "bg-[#D9D9D9]" : "bg-primary"
                  } rounded-full mr-2.5 max-sm:hidden`}
                ></div>
                <div
                  className={`w-2.5 h-2.5 ${
                    endOa ? "bg-primary" : "bg-[#D9D9D9]"
                  } rounded-full mr-5 max-sm:hidden`}
                ></div>
                <img
                  onClick={() => setEndOa(false)}
                  className="mr-4 swiper-button image-swiper-button-prev cursor-pointer"
                  src="/blog/LeftCircle.svg"
                  alt="LeftCircle"
                />
                <img
                  onClick={() => setEndOa(true)}
                  className="swiper-button image-swiper-button-next cursor-pointer"
                  src="/blog/RightCircle.svg"
                  alt="RightCircle"
                />
              </div>
            </div>
            <Swiper
              breakpoints={{
                400: {
                  slidesPerView: 1,
                },
                1000: {
                  slidesPerView: 4.4,
                },
              }}
              onSwiper={(swiper) => console.log(swiper)}
              navigation={{
                nextEl: ".image-swiper-button-next-oa",
                prevEl: ".image-swiper-button-prev-oa",
                disabledClass: "swiper-button-disabled",
              }}
              modules={[Navigation]}
              slidesOffsetAfter={160}
            >
              <SwiperSlide className="sm:ml-24">
                <BlogCard
                  imageThumbnail="/blog/oms-1.svg"
                  category="Office Automation"
                  title="How to optimize and expand your business with product analytics"
                  paragraph="When we set out to bring product analytics to our
                  business, we knew..."
                />
              </SwiperSlide>
              <SwiperSlide>
                <BlogCard
                  imageThumbnail="/blog/oms-1.svg"
                  category="Office Automation"
                  title="Customer Journey : Definitions, analysis and best practices"
                  paragraph="When we set out to bring product analytics to our
                  business, we knew..."
                />
              </SwiperSlide>
              <SwiperSlide>
                <BlogCard
                  imageThumbnail="/blog/oms-1.svg"
                  category="Office Automation"
                  title="How to optimize and expand your business with product analytics"
                  paragraph="When we set out to bring product analytics to our
                  business, we knew..."
                />
              </SwiperSlide>
              <SwiperSlide>
                <BlogCard
                  imageThumbnail="/blog/oms-1.svg"
                  category="Office Automation"
                  title="How to optimize and expand your business with product analytics"
                  paragraph="When we set out to bring product analytics to our
                  business, we knew..."
                />
              </SwiperSlide>
              <SwiperSlide>
                <BlogCard
                  imageThumbnail="/blog/oms-1.svg"
                  category="Office Automation"
                  title="How to optimize and expand your business with product analytics"
                  paragraph="When we set out to bring product analytics to our
                  business, we knew..."
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>

      <section>
        <div className="my-20">
          <div className="relative">
            <div className="sm:px-24 px-4 flex max-sm:grid max-sm:grid-cols-3 justify-between items-center mb-7">
              <h2 className="sm:mb-7 max-sm:col-span-2 font-bold text-neutral-dark sm:text-[32px] text-xl sm:leading-[48px]">
                <span className="font-medium">Blog</span> Supplier Management
              </h2>
              <div className="flex items-center max-sm:justify-end">
                <div
                  className={`w-2.5 h-2.5 ${
                    endSm ? "bg-[#D9D9D9]" : "bg-primary"
                  } rounded-full mr-2.5 max-sm:hidden`}
                ></div>
                <div
                  className={`w-2.5 h-2.5 ${
                    endSm ? "bg-primary" : "bg-[#D9D9D9]"
                  } rounded-full mr-5 max-sm:hidden`}
                ></div>
                <img
                  onClick={() => setEndSm(false)}
                  className="mr-4 swiper-button image-swiper-button-prev cursor-pointer"
                  src="/blog/LeftCircle.svg"
                  alt="LeftCircle"
                />
                <img
                  onClick={() => setEndSm(true)}
                  className="swiper-button image-swiper-button-next cursor-pointer"
                  src="/blog/RightCircle.svg"
                  alt="RightCircle"
                />
              </div>
            </div>
            <Swiper
              breakpoints={{
                400: {
                  slidesPerView: 1,
                },
                1000: {
                  slidesPerView: 4.4,
                },
              }}
              onSwiper={(swiper) => console.log(swiper)}
              navigation={{
                nextEl: ".image-swiper-button-next-sm",
                prevEl: ".image-swiper-button-prev-sm",
                disabledClass: "swiper-button-disabled",
              }}
              modules={[Navigation]}
              slidesOffsetAfter={160}
            >
              <SwiperSlide className="sm:ml-24">
                <BlogCard
                  imageThumbnail="/blog/oms-1.svg"
                  category="Supplier Management"
                  title="How to optimize and expand your business with product analytics"
                  paragraph="When we set out to bring product analytics to our
                  business, we knew..."
                />
              </SwiperSlide>
              <SwiperSlide>
                <BlogCard
                  imageThumbnail="/blog/oms-1.svg"
                  category="Supplier Management"
                  title="Customer Journey : Definitions, analysis and best practices"
                  paragraph="When we set out to bring product analytics to our
                  business, we knew..."
                />
              </SwiperSlide>
              <SwiperSlide>
                <BlogCard
                  imageThumbnail="/blog/oms-1.svg"
                  category="Supplier Management"
                  title="How to optimize and expand your business with product analytics"
                  paragraph="When we set out to bring product analytics to our
                  business, we knew..."
                />
              </SwiperSlide>
              <SwiperSlide>
                <BlogCard
                  imageThumbnail="/blog/oms-1.svg"
                  category="Supplier Management"
                  title="How to optimize and expand your business with product analytics"
                  paragraph="When we set out to bring product analytics to our
                  business, we knew..."
                />
              </SwiperSlide>
              <SwiperSlide>
                <BlogCard
                  imageThumbnail="/blog/oms-1.svg"
                  category="Supplier Management"
                  title="How to optimize and expand your business with product analytics"
                  paragraph="When we set out to bring product analytics to our
                  business, we knew..."
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BlogPage;
