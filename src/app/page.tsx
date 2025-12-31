import Blogs from "@/views/Home/Blogs";
import HeroSection from "@/views/Home/HeroSection";
import CustomerInfo from "@/views/Home/CustomerInfo";
import CoreFeature from "@/views/Home/CoreFeature";
import NotableFeature from "@/views/Home/NotableFeature";
import DashboardVariants from "@/views/Home/DashboardVariants";
import PowerfullToolkits from "@/views/Home/PowerfullToolkits";
import JoinBox from "@/views/Home/JoinBox";

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <CustomerInfo/>
      <CoreFeature />
      <NotableFeature />
      <DashboardVariants />
      <PowerfullToolkits/>
      <JoinBox/>
      <Blogs />
    </div>
  );
}
