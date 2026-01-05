import { HomeTitle, SmallTitle } from "../Component/HomeTitle";
import { ArrowRight, Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import IMAGE_KEYS from "@/assets/imgconst";

const blogData = [
  { image: IMAGE_KEYS.Blog1, date: "31 Aug 2025", title: "15+ Best Laravel Dashboard Templates for 2026", des: "Explore the 15+best Larael Dashboard Templates for 2026. Build a modern, fast, and responsive admin dashboard in hours!" },
  { image: IMAGE_KEYS.Blog2, date: "27 Nov 2025", title: "Introducing TailAdmin Laravel", des: "TailAdmin Laravel is here. Build responsive Tailwind Laravel dashboards with 500+ Dashboard UI components, 7 Variations, Blade layouts, pages, and more." },
  { image: IMAGE_KEYS.Blog3, date: "11 Dec 2025", title: "Introducing TailAdmin Angular", des: "TailAdmin Angular is here! Build responsive dashboards with 500+ Angular UI components, 7 dashboards, example pages, and more styled with Tailwind CSS." }
]

const Blogs = () => {
  return (
    <section className="py-16 md:py-24 lg:pt-30">
      <div className="app-container">
        <div className='mx-auto mb-12 w-full max-w-220 text-center lg:mb-15'>
          <SmallTitle title="Blogs and Updates" />
          <HomeTitle title="Our Latest Blogs" />
        </div>
      </div>
      <div className="app-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7.5">
          {blogData.map((ele) => (
            <div key={ele.title} className="flex flex-col rounded-3xl border border-stroke bg-white p-2">
              <Link href="/blog/laravel-dashboard-templates" aria-label="blog detail" className="relative block aspect-443/224 overflow-hidden rounded-2xl">
                <Image src={ele.image} fill loading="lazy" decoding="async" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw,443px" alt="" />
              </Link>
              <div className="flex-1 p-5">
                <div className="mb-4 inline-flex gap-2 text-sm font-medium text-text-color-tertiary">
                  <Calendar size={16}/><time>{ele.date}</time>
                </div>
                <h3><Link href="/blog/laravel-dashboard-templates" aria-label="blog detail" className="mb-2 line-clamp-2 text-xl font-semibold text-title-color duration-200 hover:text-primary">{ele.title}</Link></h3>
                <p className="mb-5 line-clamp-4 text-base text-text-color-secondary">{ele.des}</p>
              </div>
              <div className="pb-5 px-5">
                <Link href="/blog/laravel-dashboard-templates" aria-label="blog detail" className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-medium text-white duration-200 hover:bg-primary-600">
                  Read more
                  <ArrowRight className="size-5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blogs