"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

const tabData = [
    { title: "TailAdmin License", href: "/license" },
    { title: "Privacy Policy", href: "/privacy-policy" },
    { title: "Refund Policy", href: "/refund-policy" }
]
const OtherTab = () => {
    const pathname = usePathname();
    return (
        <div className="z-50 sticky top-17.5 w-full border-y border-[#F4F2FF] bg-white py-5">
            <div className="mx-auto w-full max-w-6xl px-4 xl:px-0">
                <ul className="inline-flex flex-wrap items-center rounded-full bg-gray-100 p-1">
                    {tabData?.map((tab) => (
                        <li key={tab.title}><Link href={tab.href} className={`inline-flex rounded-full px-4 py-2.5 text-sm font-medium ${pathname === tab?.href ? "bg-white text-title-color" : "text-text-color-secondary"}`}>{tab?.title}</Link></li>
                    ))}</ul>
            </div>
        </div>
    )
}

export default OtherTab