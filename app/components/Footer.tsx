"use client";

import { Icon } from "@iconify/react";
import { Footer } from "flowbite-react";
import Link from "next/link";

export default function FooterWithSocialMediaIcons() {
  return (
    <>
      <div className="w-full bg-neutral-n-90 py-10 md:px-24 px-4 text-neutral-n-10">
        <div className="grid max-w-screen-xl mx-auto w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div className="flex flex-col justify-between mb-6">
            <img
              className="max-h-16 w-fit"
              alt="One Retail Logo"
              src="/logo-footer.svg"
            />
            <div className="mt-4 sm:flex hidden gap-x-3 sm:mt-0">
              <Link
                href="https://instagram.com"
                className="flex justify-center items-center rounded-full h-[40px] w-[40px] border border-white"
              >
                <Icon icon="ri:instagram-fill" color="white" />
              </Link>
              <Link
                href="https://instagram.com"
                className="flex justify-center items-center rounded-full h-[40px] w-[40px] border border-white"
              >
                <Icon icon="ri:facebook-fill" color="white" />
              </Link>
            </div>
          </div>
          <div></div>
          <div className="flex flex-col gap-y-2 mb-6">
            <h2 className="mb-2 font-semibold">Solutions</h2>
            <Link href="/">Home</Link>
            <a href="#">Solutions</a>
            <a href="#">Contact Us</a>
            <a href="#">Blog</a>
          </div>
          <div className="flex flex-col gap-y-2 mb-6">
            <h2 className="mb-2 font-semibold">Products</h2>
            <a href="/">Order Management System</a>
            <a href="#">Customer Relationship Management</a>
            <a href="#">Office Automation</a>
            <a href="#">Supplier Management</a>
            <a href="#">Hardware</a>
          </div>
          <div className="flex flex-col gap-y-2">
            <h2 className="mb-2 font-semibold">Contact</h2>
            <div className="flex items-center gap-x-2">
              <Icon icon="ri:whatsapp-fill" color="white" />
              <a href="tel:+6285217175461">(+62) 852 1717 5461</a>
            </div>
            <div className="flex items-center gap-x-2">
              <Icon icon="fluent:mail-28-filled" color="white" />
              <a href="mailto:hello@theoneretail.com">hello@theoneretail.com</a>
            </div>
          </div>
          <div className="my-10 flex sm:hidden gap-x-3 sm:mt-0">
            <Link
              href="https://instagram.com"
              className="flex justify-center items-center rounded-full h-[40px] w-[40px] border border-white"
            >
              <Icon icon="ri:instagram-fill" color="white" />
            </Link>
            <Link
              href="https://instagram.com"
              className="flex justify-center items-center rounded-full h-[40px] w-[40px] border border-white"
            >
              <Icon icon="ri:facebook-fill" color="white" />
            </Link>
          </div>
        </div>
        <Footer.Divider />
        <div className="sm:hidden flex flex-col gap-y-4 mb-4">
          <a href="#">Terms & Condition</a>
          <a href="#">Privacy</a>
        </div>
        <div className="w-full sm:flex sm:items-center sm:justify-center">
          © 2023 One Retail. All rights reserved
        </div>
      </div>
    </>
  );
}
