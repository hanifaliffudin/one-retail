"use client";

import { Icon } from "@iconify/react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Navigation } from "swiper/modules";
import BlogCard from "../components/BlogCard";
import Link from "next/link";

const BlogPage = () => {
  return (
    <main>
      <section>
        <div className="relative h-[158px] mt-[80px]">
          <img
            className="absolute left-0"
            src="/blog/bg-header-blog.svg"
            alt="bg-header-blog"
          />
          <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-medium sm:text-[40px] text-[22px] sm:leading-[62px] leading-[33px] ">
            One Retail <span className="font-bold">Blog</span>
          </h1>
        </div>
      </section>

      <section>
        <div className="sm:px-24 mb-20 mt-10">
          <h2 className="mb-7 font-bold text-neutral-dark sm:text-[32px] text-xl sm:leading-[48px]">
            Popular
          </h2>
          <div className="grid grid-cols-2 gap-x-7">
            <div className="col-span-2 sm:col-span-1">
              <div className="relative h-[430px] ">
                <img
                  className="object-cover absolute"
                  src="/blog/popular-1.svg"
                  alt="popular-1"
                />
                <div className="absolute left-0 bottom-0 text-white p-6">
                  <p className="mb-3 font-semibold">
                    Customer Relationship Management
                  </p>
                  <h2 className="mb-3 font-bold text-[28px] leading-[42px]">
                    How to optimize and expand your business with product
                    analytics
                  </h2>
                  <p className="mb-6 font-medium line-clamp-2">
                    When we set out to bring product analytics to our business,
                    we knew that analytics for company revenue, in
                    particular,...
                  </p>
                  <hr className="mb-6 bg-[#FFFFFF4D]" />
                  <Link
                    href={`/blog/anjay`}
                    className="flex font-semibold items-center gap-x-1"
                  >
                    Read more
                    <Icon className="cursor-pointer" icon="bxs:chevron-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <div className="bg-[#F5F5F5] rounded-md px-6 py-[26px] flex flex-col gap-y-6">
                <div className="flex gap-x-4">
                  <img src="/blog/popular-2.svg" alt="popular-2" />
                  <div className="">
                    <p className="mb-3 text-sm text-primary-p-80">
                      Office Automation
                    </p>
                    <h3 className="font-semibold text-xl text-neutral-dark mb-5 line-clamp-2">
                      How to optimize and expand your business with product
                      analytics
                    </h3>
                    <hr />
                  </div>
                </div>
                <div className="flex gap-x-4">
                  <img src="/blog/popular-3.svg" alt="popular-3" />
                  <div className="">
                    <p className="mb-3 text-sm text-primary-p-80">
                      Supplier Management
                    </p>
                    <h3 className="font-semibold text-xl text-neutral-dark mb-5 line-clamp-2">
                      How to optimize and expand your business with product
                      analytics
                    </h3>
                    <hr />
                  </div>
                </div>
                <div className="flex gap-x-4">
                  <img src="/blog/popular-4.svg" alt="popular-4" />
                  <div className="">
                    <p className="mb-3 text-sm text-primary-p-80">
                      Order Management System
                    </p>
                    <h3 className="font-semibold text-xl text-neutral-dark mb-5 line-clamp-2">
                      How to optimize and expand your business with product
                      analytics
                    </h3>
                    <hr />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr />

      <section>
        <div className="my-20">
          <div className="relative">
            <div className="sm:px-24 flex justify-between items-center mb-7">
              <h2 className="mb-7 font-bold text-neutral-dark sm:text-[32px] text-xl sm:leading-[48px]">
                <span className="font-medium">Blog</span> Order Management
                System
              </h2>
              <div className="flex items-center">
                <div className="w-2.5 h-2.5 bg-primary rounded-full mr-2.5"></div>
                <div className="w-2.5 h-2.5 bg-[#D9D9D9] rounded-full mr-5"></div>
                <img
                  className="mr-4 swiper-button image-swiper-button-prev cursor-pointer"
                  src="/blog/LeftCircle.svg"
                  alt="LeftCircle"
                />
                <img
                  className="swiper-button image-swiper-button-next cursor-pointer"
                  src="/blog/RightCircle.svg"
                  alt="RightCircle"
                />
              </div>
            </div>
            <Swiper
              slidesPerView={4.4}
              onSwiper={(swiper) => console.log(swiper)}
              navigation={{
                nextEl: ".image-swiper-button-next",
                prevEl: ".image-swiper-button-prev",
                disabledClass: "swiper-button-disabled",
              }}
              modules={[Navigation]}
              slidesOffsetAfter={160}
            >
              <SwiperSlide className="ml-24">
                <BlogCard
                  imageThumbnail="/blog/oms-1.svg"
                  category="Order Management System"
                  title="How to optimize and expand your business with product
                      analytics"
                  paragraph="When we set out to bring product analytics to our
                  business, we knew..."
                />
              </SwiperSlide>
              <SwiperSlide>
                <BlogCard
                  imageThumbnail="/blog/oms-1.svg"
                  category="Order Management System"
                  title="How to optimize and expand your business with product
                      analytics"
                  paragraph="When we set out to bring product analytics to our
                  business, we knew..."
                />
              </SwiperSlide>
              <SwiperSlide>
                <BlogCard
                  imageThumbnail="/blog/oms-1.svg"
                  category="Order Management System"
                  title="How to optimize and expand your business with product
                      analytics"
                  paragraph="When we set out to bring product analytics to our
                  business, we knew..."
                />
              </SwiperSlide>
              <SwiperSlide>
                <BlogCard
                  imageThumbnail="/blog/oms-1.svg"
                  category="Order Management System"
                  title="How to optimize and expand your business with product
                      analytics"
                  paragraph="When we set out to bring product analytics to our
                  business, we knew..."
                />
              </SwiperSlide>
              <SwiperSlide>
                <BlogCard
                  imageThumbnail="/blog/oms-1.svg"
                  category="Order Management System"
                  title="How to optimize and expand your business with product
                      analytics"
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
            <div className="sm:px-24 flex justify-between items-center mb-7">
              <h2 className="mb-7 font-bold text-neutral-dark sm:text-[32px] text-xl sm:leading-[48px]">
                <span className="font-medium">Blog</span> Customer Relationship
                Management
              </h2>
              <div className="flex items-center">
                <div className="w-2.5 h-2.5 bg-primary rounded-full mr-2.5"></div>
                <div className="w-2.5 h-2.5 bg-[#D9D9D9] rounded-full mr-5"></div>
                <img
                  className="mr-4 swiper-button image-swiper-button-prev-crm cursor-pointer"
                  src="/blog/LeftCircle.svg"
                  alt="LeftCircle"
                />
                <img
                  className="swiper-button image-swiper-button-next-crm cursor-pointer"
                  src="/blog/RightCircle.svg"
                  alt="RightCircle"
                />
              </div>
            </div>
            <Swiper
              slidesPerView={4.4}
              onSwiper={(swiper) => console.log(swiper)}
              navigation={{
                nextEl: ".image-swiper-button-next-crm",
                prevEl: ".image-swiper-button-prev-crm",
                disabledClass: "swiper-button-disabled",
              }}
              modules={[Navigation]}
              slidesOffsetAfter={160}
            >
              <SwiperSlide className="ml-24">
                <BlogCard
                  imageThumbnail="/blog/oms-1.svg"
                  category="Order Management System"
                  title="How to optimize and expand your business with product
                      analytics"
                  paragraph="When we set out to bring product analytics to our
                  business, we knew..."
                />
              </SwiperSlide>
              <SwiperSlide>
                <BlogCard
                  imageThumbnail="/blog/oms-1.svg"
                  category="Order Management System"
                  title="How to optimize and expand your business with product
                      analytics"
                  paragraph="When we set out to bring product analytics to our
                  business, we knew..."
                />
              </SwiperSlide>
              <SwiperSlide>
                <BlogCard
                  imageThumbnail="/blog/oms-1.svg"
                  category="Order Management System"
                  title="How to optimize and expand your business with product
                      analytics"
                  paragraph="When we set out to bring product analytics to our
                  business, we knew..."
                />
              </SwiperSlide>
              <SwiperSlide>
                <BlogCard
                  imageThumbnail="/blog/oms-1.svg"
                  category="Order Management System"
                  title="How to optimize and expand your business with product
                      analytics"
                  paragraph="When we set out to bring product analytics to our
                  business, we knew..."
                />
              </SwiperSlide>
              <SwiperSlide>
                <BlogCard
                  imageThumbnail="/blog/oms-1.svg"
                  category="Order Management System"
                  title="How to optimize and expand your business with product
                      analytics"
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
            <div className="sm:px-24 flex justify-between items-center mb-7">
              <h2 className="mb-7 font-bold text-neutral-dark sm:text-[32px] text-xl sm:leading-[48px]">
                <span className="font-medium">Blog</span> Office Automation
              </h2>
              <div className="flex items-center">
                <div className="w-2.5 h-2.5 bg-primary rounded-full mr-2.5"></div>
                <div className="w-2.5 h-2.5 bg-[#D9D9D9] rounded-full mr-5"></div>
                <img
                  className="mr-4 swiper-button image-swiper-button-prev-oa cursor-pointer"
                  src="/blog/LeftCircle.svg"
                  alt="LeftCircle"
                />
                <img
                  className="swiper-button image-swiper-button-next-oa cursor-pointer"
                  src="/blog/RightCircle.svg"
                  alt="RightCircle"
                />
              </div>
            </div>
            <Swiper
              slidesPerView={4.4}
              onSwiper={(swiper) => console.log(swiper)}
              navigation={{
                nextEl: ".image-swiper-button-next-oa",
                prevEl: ".image-swiper-button-prev-oa",
                disabledClass: "swiper-button-disabled",
              }}
              modules={[Navigation]}
              slidesOffsetAfter={160}
            >
              <SwiperSlide className="ml-24">
                <BlogCard
                  imageThumbnail="/blog/oms-1.svg"
                  category="Order Management System"
                  title="How to optimize and expand your business with product
                      analytics"
                  paragraph="When we set out to bring product analytics to our
                  business, we knew..."
                />
              </SwiperSlide>
              <SwiperSlide>
                <BlogCard
                  imageThumbnail="/blog/oms-1.svg"
                  category="Order Management System"
                  title="How to optimize and expand your business with product
                      analytics"
                  paragraph="When we set out to bring product analytics to our
                  business, we knew..."
                />
              </SwiperSlide>
              <SwiperSlide>
                <BlogCard
                  imageThumbnail="/blog/oms-1.svg"
                  category="Order Management System"
                  title="How to optimize and expand your business with product
                      analytics"
                  paragraph="When we set out to bring product analytics to our
                  business, we knew..."
                />
              </SwiperSlide>
              <SwiperSlide>
                <BlogCard
                  imageThumbnail="/blog/oms-1.svg"
                  category="Order Management System"
                  title="How to optimize and expand your business with product
                      analytics"
                  paragraph="When we set out to bring product analytics to our
                  business, we knew..."
                />
              </SwiperSlide>
              <SwiperSlide>
                <BlogCard
                  imageThumbnail="/blog/oms-1.svg"
                  category="Order Management System"
                  title="How to optimize and expand your business with product
                      analytics"
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
            <div className="sm:px-24 flex justify-between items-center mb-7">
              <h2 className="mb-7 font-bold text-neutral-dark sm:text-[32px] text-xl sm:leading-[48px]">
                <span className="font-medium">Blog</span> Supplier Management
              </h2>
              <div className="flex items-center">
                <div className="w-2.5 h-2.5 bg-primary rounded-full mr-2.5"></div>
                <div className="w-2.5 h-2.5 bg-[#D9D9D9] rounded-full mr-5"></div>
                <img
                  className="mr-4 swiper-button image-swiper-button-prev-sm cursor-pointer"
                  src="/blog/LeftCircle.svg"
                  alt="LeftCircle"
                />
                <img
                  className="swiper-button image-swiper-button-next-sm cursor-pointer"
                  src="/blog/RightCircle.svg"
                  alt="RightCircle"
                />
              </div>
            </div>
            <Swiper
              slidesPerView={4.4}
              onSwiper={(swiper) => console.log(swiper)}
              navigation={{
                nextEl: ".image-swiper-button-next-sm",
                prevEl: ".image-swiper-button-prev-sm",
                disabledClass: "swiper-button-disabled",
              }}
              modules={[Navigation]}
              slidesOffsetAfter={160}
            >
              <SwiperSlide className="ml-24">
                <BlogCard
                  imageThumbnail="/blog/oms-1.svg"
                  category="Order Management System"
                  title="How to optimize and expand your business with product
                      analytics"
                  paragraph="When we set out to bring product analytics to our
                  business, we knew..."
                />
              </SwiperSlide>
              <SwiperSlide>
                <BlogCard
                  imageThumbnail="/blog/oms-1.svg"
                  category="Order Management System"
                  title="How to optimize and expand your business with product
                      analytics"
                  paragraph="When we set out to bring product analytics to our
                  business, we knew..."
                />
              </SwiperSlide>
              <SwiperSlide>
                <BlogCard
                  imageThumbnail="/blog/oms-1.svg"
                  category="Order Management System"
                  title="How to optimize and expand your business with product
                      analytics"
                  paragraph="When we set out to bring product analytics to our
                  business, we knew..."
                />
              </SwiperSlide>
              <SwiperSlide>
                <BlogCard
                  imageThumbnail="/blog/oms-1.svg"
                  category="Order Management System"
                  title="How to optimize and expand your business with product
                      analytics"
                  paragraph="When we set out to bring product analytics to our
                  business, we knew..."
                />
              </SwiperSlide>
              <SwiperSlide>
                <BlogCard
                  imageThumbnail="/blog/oms-1.svg"
                  category="Order Management System"
                  title="How to optimize and expand your business with product
                      analytics"
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
