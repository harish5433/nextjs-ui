import Blogs from "@/views/Home/Blogs";
import HeroSection from "@/views/Home/HeroSection";
import CustomerInfo from "@/views/Home/CustomerInfo";
import CoreFeature from "@/views/Home/CoreFeature";
import NotableFeature from "@/views/Home/NotableFeature";
import DashboardVariants from "@/views/Home/DashboardVariants";
import PowerfullToolkits from "@/views/Home/PowerfullToolkits";
import JoinBox from "@/views/Home/JoinBox";
import { Metadata } from "next";

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
