import dynamic from "next/dynamic";
import { Metadata } from "next";

import HeroSection from "@/views/Home/HeroSection";
import CustomerInfo from "@/views/Home/CustomerInfo";
import CoreFeature from "@/views/Home/CoreFeature";

const NotableFeature = dynamic(() => import("@/views/Home/NotableFeature"));
const DashboardVariants = dynamic(() => import("@/views/Home/DashboardVariants"));
const PowerfullToolkits = dynamic(() => import("@/views/Home/PowerfullToolkits"));
const JoinBox = dynamic(() => import("@/views/Home/JoinBox"));
const Blogs = dynamic(() => import("@/views/Home/Blogs"));

export const metadata: Metadata = {
  title: "Free Tailwind CSS Admin Dashboard Template - TailAdmin",
  description: "TailAdmin is a Free and Open Source Tailwind CSS Admin Dashboard Template, provides developers with everything need to create a complete, data-driven back-end, dashboard, or admin panel solution for upcoming web projects.",
};
export default function Home() {
  return (
    <div>
      <HeroSection />
      <CustomerInfo />
      <CoreFeature />
      <NotableFeature />
      <DashboardVariants />
      <PowerfullToolkits />
      <JoinBox />
      <Blogs />
    </div>
  );
}
