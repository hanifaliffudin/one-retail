"use client";

import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    let value;
    // Get the value from local storage if it exists
    value = localStorage.getItem("token") || "";
    if (value) {
      redirect("/cms/dashboard");
    } else {
      redirect("/cms/login");
    }
  }, []);
}
