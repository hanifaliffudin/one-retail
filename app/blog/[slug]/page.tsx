"use client";

import FooterWithSocialMediaIcons from "@/app/components/Footer";
import NavbarWithCTAButton from "@/app/components/Navbar";
import Link from "next/link";
import { useRouter } from "next/navigation";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { A11y, Navigation, Pagination } from "swiper/modules";
import BlogCard from "@/app/components/BlogCard";
import { useEffect, useState } from "react";

const ViewBlogPage = ({ params }: { params: { slug: string } }) => {
  const [imageBlog, setImageBlog] = useState("");
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  let url = "http://localhost:3000/blog/" + params.slug;

  useEffect(() => {
    setIsLoading(true);
    fetch("http://localhost:3000/api/blogs/" + params.slug)
      .then((res) => res.json())
      .then((data) => {
        setImageBlog(data.blog.imageBlog);
        setCategory(data.blog.category);
        switch (data.blog.category) {
          case "OMS":
            setCategory("Order Management System");
            break;
          case "CRM":
            setCategory("Customer Relationship Management");
            break;
          case "OS":
            setCategory("Office Automation");
            break;
          case "SM":
            setCategory("Supplier Management");
            break;
          default:
            break;
        }
        setTitle(data.blog.title);
        setContent(data.blog.content);
        setTags(data.blog.tags);
      });
    setIsLoading(false);
  }, []);

  const router = useRouter();

  return (
    <>
      <NavbarWithCTAButton />
      <main>
        <section>
          <div className="mt-[112px] lg:mx-12 xl:mx-24 mx-4 relative sm:mb-16 mb-8">
            <img
              className="rounded-[20px] max-sm:h-[284px] xl:h-[510px] h-[502px] w-full object-cover"
              src={imageBlog}
              alt={imageBlog}
            />
            <div className="absolute left-0 top-0 rounded-[20px] overlay-blog w-full h-full max-sm:min-h-[284px]"></div>
            <div className="grid grid-cols-4 lg:gap-x-4 xl:gap-x-16 max-sm:top-0 px-6 max-sm:pt-4 max-sm:gap-y-[43px]  absolute sm:bottom-[46px] sm:px-16 text-white">
              <div className="sm:col-span-1 col-span-4">
                <div className="flex flex-col gap-y-3">
                  <img
                    className="sm:w-12 w-8"
                    src="/icons/crm-icon-blue.svg"
                    alt="Customer Relationship Management"
                  />
                  <p className="font-medium">{category}</p>
                </div>
              </div>
              <div className="sm:col-span-3 col-span-4">
                <h1 className="font-bold sm:text-[36px] text-[22px] sm:leading-[54px] line-clamp-4">
                  {title}
                </h1>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="grid grid-cols-4 xl:gap-x-16 gap-x-8 xl:px-40 lg:px-12 px-4 gap-y-6 sm:mb-[100px] mb-10">
            <div className="xl:col-span-1 col-span-4 relative h-full order-last sm:order-first">
              <div className="xl:sticky xl:top-24 lg:flex xl:block lg:items-center lg:justify-between">
                <div
                  onClick={() => router.back()}
                  className="sticky top-0 cursor-pointer max-sm:hidden flex items-center gap-x-2 font-semibold text-neutral-dark"
                >
                  <img src="/blog/SwapLeft.svg" alt="SwapLeft" />
                  Back
                </div>
                <hr className="my-8 max-xl:hidden" />
                <div className="lg:flex xl:flex-col lg:items-center xl:items-start gap-2">
                  <p className="xl:mb-4 max-sm:mb-4 text-neutral-n-80 font-medium">
                    Tag
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {tags?.map((tag, i) => {
                      return (
                        <div
                          key={i}
                          className="bg-[#F5F5F5] rounded border border-[#EDEDED] py-1 px-2 text-sm text-neutral-n-70"
                        >
                          #{tag}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <hr className="mt-4 xl:hidden" />
            </div>
            <div className="xl:col-span-3 col-span-4 ">
              <div
                className="xl:mb-24 mb-8 content-blog"
                dangerouslySetInnerHTML={{ __html: content }}
              ></div>

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

        <section className="max-xl:hidden">
          <div className="bg-[#F5F5F5] lg:px-12 xl:px-24 px-4 lg:py-10 xl:py-16 py-4">
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

        <section className="xl:hidden">
          <div className="md:mt-20 max-md:mt-10 max-md:py-7 md:py-16 bg-[#F5F5F5] ">
            <div className="grid grid-cols-4">
              <div className="lg:col-span-3 col-span-4">
                <h2 className="xl:mb-7 lg:pl-12 xl:pl-24 px-4 max-xl:mb-6 max-xl:col-span-2 font-bold text-neutral-dark xl:text-[32px] text-xl md:text-3xl xl:leading-[48px]">
                  More from One Retail
                </h2>
              </div>

              <div className="lg:col-span-1 col-span-4 max-lg:order-last max-sm:mt-2">
                <div className="flex lg:justify-end max-lg:justify-center lg:pr-12 xl:pr-24 px-4 items-center gap-x-5">
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

              <div className="sm:col-span-4 col-span-4 more-blog">
                <Swiper
                  breakpoints={{
                    100: {
                      slidesPerView: 1.4,
                    },
                    640: {
                      slidesPerView: 2,
                    },
                    1000: {
                      slidesPerView: 3.1,
                    },
                    1400: {
                      slidesPerView: 4,
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
                  <SwiperSlide className="xl:ml-24 lg:ml-12 ml-4">
                    <BlogCard
                      imageThumbnail="/blog/oms-1.svg"
                      category="Order Management System"
                      title="Customer Journey : Definitions, analysis and best practices"
                      paragraph="When we set out to bring product analytics to our
                  business, we knew..."
                      slug="/blog/oms-1.svg"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <BlogCard
                      imageThumbnail="/blog/oms-1.svg"
                      category="Order Management System"
                      title="How to optimize and expand your business with product analytics"
                      paragraph="When we set out to bring product analytics to our
                  business, we knew..."
                      slug="/blog/oms-1.svg"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <BlogCard
                      imageThumbnail="/blog/oms-1.svg"
                      category="Order Management System"
                      title="How to optimize and expand your business with product analytics"
                      paragraph="When we set out to bring product analytics to our
                  business, we knew..."
                      slug="/blog/oms-1.svg"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <BlogCard
                      imageThumbnail="/blog/oms-1.svg"
                      category="Order Management System"
                      title="How to optimize and expand your business with product analytics"
                      paragraph="When we set out to bring product analytics to our
                  business, we knew..."
                      slug="/blog/oms-1.svg"
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

export default ViewBlogPage;
