"use client";

import { Icon } from "@iconify/react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { A11y, Navigation, Pagination } from "swiper/modules";
import BlogCard from "../components/BlogCard";
import Link from "next/link";
import NavbarWithCTAButton from "../components/Navbar";
import FooterWithSocialMediaIcons from "../components/Footer";
import { useEffect, useState } from "react";

type Blog = {
  _id: string;
  imageBlog: string;
  category: string;
  title: string;
  content: string;
  tags: string[];
  slug: string;
};

const BlogPage = () => {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [omsBlog, setOmsBlog] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/blogs")
      .then((res) => res.json())
      .then((data) => {
        setData(data.blogs);
        setLoading(false);

        let omsBlogs = data.blogs
          .filter(function (blog: Blog) {
            return blog.category === "OMS";
          })
          .map(function (blog: Blog) {
            return blog;
          });

        console.log(omsBlogs);
      });
  }, []);

  return (
    <>
      <NavbarWithCTAButton />
      <main>
        <section>
          <div className="relative max-sm:h-[86px] h-[158px] mt-[80px]">
            <img
              className="absolute object-cover w-full max-sm:h-[86px] h-[158px] left-0"
              src="/blog/bg-header-blog.svg"
              alt="bg-header-blog"
            />
            <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-medium sm:text-[40px] text-[22px] sm:leading-[62px] leading-[33px] ">
              One Retail <span className="font-bold">Blog</span>
            </h1>
          </div>
        </section>

        <section>
          <div className="xl:px-24 px-4 md:mb-20 mb-6 md:mt-10 mt-8">
            <h2 className="mb-7 font-bold text-neutral-dark sm:text-[32px] text-xl sm:leading-[48px]">
              Popular
            </h2>
            <div className="grid grid-cols-2 gap-x-7 gap-y-6">
              <div className="col-span-2 lg:col-span-1">
                <div className="relative sm:h-[430px] img-hover-zoom-blog-popular-big-container">
                  <div className="img-hover-zoom-blog-popular-big sm:h-[430px] h-[346px] rounded-xl">
                    <img
                      className="object-cover h-full w-full"
                      src="/blog/popular-1.svg"
                      alt="popular-1"
                    />
                  </div>

                  <div className="absolute left-0 bottom-0 text-white sm:p-6 px-4">
                    <p className="mb-3 font-semibold">
                      Customer Relationship Management
                    </p>
                    <h2 className="mb-3 font-bold sm:text-[28px] text-xl sm:leading-[42px]">
                      How to optimize and expand your business with product
                      analytics
                    </h2>
                    <p className="mb-6 font-medium max-sm:text-sm line-clamp-2">
                      When we set out to bring product analytics to our
                      business, we knew that analytics for company revenue, in
                      particular,...
                    </p>
                    <hr className="mb-6 max-sm:mb-[46px] bg-[#FFFFFF4D]" />
                    <Link
                      href={`/blog/anjay`}
                      className="flex font-semibold max-sm:text-sm max-sm:mb-4 items-center gap-x-1"
                    >
                      Read more
                      <Icon
                        className="cursor-pointer"
                        icon="bxs:chevron-right"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-span-2 lg:col-span-1">
                <div className="bg-[#F5F5F5] rounded-md sm:px-6 px-4 sm:py-[26px] py-5 flex flex-col gap-y-6">
                  <Link
                    href="/blog/slug"
                    className="flex max-sm:flex-col gap-x-4 gap-y-4 img-hover-zoom-blog-popular-small-container"
                  >
                    <div className="img-hover-zoom-blog-popular-small min-h-[110px] min-w-[110px] sm:max-h-[110px] sm:max-w-[110px] overflow-hidden rounded-md">
                      <img
                        className="object-cover min-h-[110px] min-w-[110px] max-h-[110px] sm:max-w-[110px] rounded max-sm:w-full"
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
                    className="flex max-sm:flex-col gap-x-4 gap-y-4 img-hover-zoom-blog-popular-small-container"
                  >
                    <div className="img-hover-zoom-blog-popular-small min-h-[110px] min-w-[110px] sm:max-h-[110px] sm:max-w-[110px] overflow-hidden rounded-md">
                      <img
                        className="object-cover min-h-[110px] min-w-[110px] max-h-[110px] sm:max-w-[110px] rounded max-sm:w-full"
                        src="/blog/popular-3.svg"
                        alt="popular-3"
                      />
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
                    className="flex max-sm:flex-col gap-x-4 gap-y-4 img-hover-zoom-blog-popular-small-container"
                  >
                    <div className="img-hover-zoom-blog-popular-small min-h-[110px] min-w-[110px] sm:max-h-[110px] sm:max-w-[110px] overflow-hidden rounded-md">
                      <img
                        className="object-cover min-h-[110px] min-w-[110px] max-h-[110px] sm:max-w-[110px] rounded max-sm:w-full"
                        src="/blog/popular-4.svg"
                        alt="popular-4"
                      />
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

        <hr className="max-sm:hidden" />

        <section>
          <div className="md:my-20 my-10">
            <div className="grid grid-cols-4">
              <div className="xl:col-span-2 col-span-4">
                <h2 className="xl:mb-7 xl:px-24 px-4 max-xl:mb-6 max-xl:col-span-2 font-bold text-neutral-dark xl:text-[32px] text-xl md:text-3xl xl:leading-[48px]">
                  <span className="font-medium">Blog</span> Order Management
                  System
                </h2>
              </div>

              <div className="xl:col-span-2 col-span-4 max-xl:order-last">
                <div className="flex xl:justify-end max-xl:justify-center xl:px-24 px-4 items-center gap-x-5">
                  <div className="my-custom-pagination-div !w-fit flex " />
                  <div className="flex items-center">
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
              </div>

              <div className="sm:col-span-4 col-span-4">
                <Swiper
                  breakpoints={{
                    100: {
                      slidesPerView: 1.4,
                    },
                    640: {
                      slidesPerView: 2,
                      slidesOffsetAfter: 160,
                    },
                    1000: {
                      slidesPerView: 3,
                      slidesOffsetAfter: 160,
                    },
                    1400: {
                      slidesPerView: 4.4,
                      slidesOffsetAfter: 160,
                    },
                  }}
                  modules={[Navigation, Pagination, A11y]}
                  navigation={{
                    nextEl: ".image-swiper-button-next",
                    prevEl: ".image-swiper-button-prev",
                    disabledClass: "swiper-button-disabled",
                  }}
                  pagination={{
                    el: ".my-custom-pagination-div",
                    clickable: true,
                    renderBullet: (index, className) => {
                      className == "";
                      return '<span class="' + className + '">' + "</span>";
                    },
                  }}
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
                  {/* {data.map((blog: Blog, index) => {
                    return (
                      <SwiperSlide className="sm:ml-24">
                        <BlogCard
                          key={index}
                          imageThumbnail={`http://localhost:3000/blog/${blog.imageBlog}`}
                          category={blog.category}
                          title={blog.title}
                          paragraph={blog.content}
                        />
                      </SwiperSlide>
                    );
                  })} */}
                </Swiper>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="md:my-20 my-10">
            <div className="grid grid-cols-4">
              <div className="xl:col-span-2 col-span-4">
                <h2 className="xl:mb-7 xl:px-24 px-4 max-xl:mb-6 max-xl:col-span-2 font-bold text-neutral-dark xl:text-[32px] text-xl md:text-3xl xl:leading-[48px]">
                  <span className="font-medium">Blog</span> Customer
                  Relationship Management
                </h2>
              </div>

              <div className="xl:col-span-2 col-span-4 max-xl:order-last">
                <div className="flex xl:justify-end max-xl:justify-center xl:px-24 px-4 items-center gap-x-5">
                  <div className="my-custom-pagination-div-crm !w-fit flex " />
                  <div className="flex items-center">
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
              </div>

              <div className="sm:col-span-4 col-span-4">
                <Swiper
                  breakpoints={{
                    100: {
                      slidesPerView: 1.4,
                    },
                    640: {
                      slidesPerView: 2,
                      slidesOffsetAfter: 160,
                    },
                    1000: {
                      slidesPerView: 3,
                      slidesOffsetAfter: 160,
                    },
                    1400: {
                      slidesPerView: 4.4,
                      slidesOffsetAfter: 160,
                    },
                  }}
                  modules={[Navigation, Pagination, A11y]}
                  navigation={{
                    nextEl: ".image-swiper-button-next-crm",
                    prevEl: ".image-swiper-button-prev-crm",
                    disabledClass: "swiper-button-disabled",
                  }}
                  pagination={{
                    el: ".my-custom-pagination-div-crm",
                    clickable: true,
                    renderBullet: (index, className) => {
                      className == "";
                      return '<span class="' + className + '">' + "</span>";
                    },
                  }}
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
          </div>
        </section>

        <section>
          <div className="md:my-20 my-10">
            <div className="grid grid-cols-4">
              <div className="xl:col-span-2 col-span-4">
                <h2 className="xl:mb-7 xl:px-24 px-4 max-xl:mb-6 max-xl:col-span-2 font-bold text-neutral-dark xl:text-[32px] text-xl md:text-3xl xl:leading-[48px]">
                  <span className="font-medium">Blog</span> Office Automation
                </h2>
              </div>

              <div className="xl:col-span-2 col-span-4 max-xl:order-last">
                <div className="flex xl:justify-end max-xl:justify-center xl:px-24 px-4 items-center gap-x-5">
                  <div className="my-custom-pagination-div-oa !w-fit flex " />
                  <div className="flex items-center">
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
              </div>

              <div className="sm:col-span-4 col-span-4">
                <Swiper
                  breakpoints={{
                    100: {
                      slidesPerView: 1.4,
                    },
                    640: {
                      slidesPerView: 2,
                      slidesOffsetAfter: 160,
                    },
                    1000: {
                      slidesPerView: 3,
                      slidesOffsetAfter: 160,
                    },
                    1400: {
                      slidesPerView: 4.4,
                      slidesOffsetAfter: 160,
                    },
                  }}
                  modules={[Navigation, Pagination, A11y]}
                  navigation={{
                    nextEl: ".image-swiper-button-next-oa",
                    prevEl: ".image-swiper-button-prev-oa",
                    disabledClass: "swiper-button-disabled",
                  }}
                  pagination={{
                    el: ".my-custom-pagination-div-oa",
                    clickable: true,
                    renderBullet: (index, className) => {
                      className == "";
                      return '<span class="' + className + '">' + "</span>";
                    },
                  }}
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
          </div>
        </section>

        <section>
          <div className="md:my-20 my-10">
            <div className="grid grid-cols-4">
              <div className="xl:col-span-2 col-span-4">
                <h2 className="xl:mb-7 xl:px-24 px-4 max-xl:mb-6 max-xl:col-span-2 font-bold text-neutral-dark xl:text-[32px] text-xl md:text-3xl xl:leading-[48px]">
                  <span className="font-medium">Blog</span> Supplier Management
                </h2>
              </div>

              <div className="xl:col-span-2 col-span-4 max-xl:order-last">
                <div className="flex xl:justify-end max-xl:justify-center xl:px-24 px-4 items-center gap-x-5">
                  <div className="my-custom-pagination-div-sm !w-fit flex " />
                  <div className="flex items-center">
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
              </div>

              <div className="sm:col-span-4 col-span-4">
                <Swiper
                  breakpoints={{
                    100: {
                      slidesPerView: 1.4,
                    },
                    640: {
                      slidesPerView: 2,
                      slidesOffsetAfter: 160,
                    },
                    1000: {
                      slidesPerView: 3,
                      slidesOffsetAfter: 160,
                    },
                    1400: {
                      slidesPerView: 4.4,
                      slidesOffsetAfter: 160,
                    },
                  }}
                  modules={[Navigation, Pagination, A11y]}
                  navigation={{
                    nextEl: ".image-swiper-button-next-sm",
                    prevEl: ".image-swiper-button-prev-sm",
                    disabledClass: "swiper-button-disabled",
                  }}
                  pagination={{
                    el: ".my-custom-pagination-div-sm",
                    clickable: true,
                    renderBullet: (index, className) => {
                      className == "";
                      return '<span class="' + className + '">' + "</span>";
                    },
                  }}
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
          </div>
        </section>
      </main>
      <FooterWithSocialMediaIcons />
    </>
  );
};

export default BlogPage;
