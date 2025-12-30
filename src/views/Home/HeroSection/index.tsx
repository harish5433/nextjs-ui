import { FigmaIcon, NextjsIcon, ReactIcon, TailWindIcon } from "@/assets/SvgIcon"
import { MainHeading } from "../Component/HomeTitle"
import Link from "next/link"
import Image from "next/image"
import IMAGE_KEYS from "@/assets/imgconst"
import { Contact } from "lucide-react"

const IconData = [
    { icon: TailWindIcon, title: "Tailwind" },
    { icon: FigmaIcon, title: "Figma" },
    { icon: TailWindIcon, title: "HTML5" },
    { icon: ReactIcon, title: "React.js" },
    { icon: NextjsIcon, title: "Next.js" },
    { icon: NextjsIcon, title: "Vue.js" },
    { icon: NextjsIcon, title: "Angular" },
    { icon: NextjsIcon, title: "Laravel" },
    { icon: NextjsIcon, title: "JavaScript" },
    { icon: TailWindIcon, title: "Alpine.js" }
]

const HeroSection = () => {
    return (
        <section className='px-4 sm:px-8 xl:px-12.5'>
            <div className='relative z-10 overflow-hidden rounded-3xl bg-gray-50 pt-12 md:pt-14 lg:pt-20 flex flex-col justify-center items-center text-center'>
                <div className='mb-4.5 rounded-[30px] bg-primary-50 px-4 py-2 text-sm font-medium text-primary flex max-md:flex-col justify-center items-center gap-3'>
                   <Contact size={20}/> Industry-leading Tailwind CSS Dashboard Kit with Multi-Framework Support
                </div>
                <MainHeading title="Open-Source Tailwind CSS Admin Dashboard Template" />
                <p className="mx-auto mb-9 w-full max-w-272.5 text-text-color-secondary">TailAdmin is a Tailwind CSS-based Admin Dashboard Template that provides developers with everything they need to create feature-rich back-ends, dashboards, and admin panels for web projects. Empowering developers with essential UI components, elements, and pages required to build a complete Dashboard or Admin panel – Now available for HTML, React, Next.js, Vue, Angular and Laravel!</p>
                <ul className="flex flex-wrap items-center justify-center gap-4">
                    {IconData?.map((ele) => {
                        const Icon = ele.icon;
                        return (
                            <li key={ele.title} className="flex flex-col items-center justify-center gap-1.5 text-center">
                                <Link href="/" aria-label="Framework" className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white drop-shadow-[0px_12px_20px_rgba(166,175,195,0.12)] max-md:p-2 md:h-12 md:w-12"><Icon /></Link>
                                <span className="text-xs font-medium text-text-color-secondary">{ele.title}</span>
                            </li>
                        );
                    })}
                </ul>
                <div className="mt-9 flex flex-wrap justify-center gap-3.5">
                    <Link href="/" className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-base font-medium text-white shadow-xs duration-200 hover:bg-primary-600 max-xs:w-full">Download Now</Link>
                    <Link href="/" className="inline-flex items-center justify-center gap-2 rounded-lg border border-stroke-tertiary bg-white px-6 py-3 text-base font-medium text-text-color shadow-xs duration-200 hover:bg-gray-50 hover:text-gray-800 max-xs:w-full">Live Preview</Link>
                </div>
                <div className="mt-15 relative mx-auto w-full max-w-186.25 max-lg:px-10">
                    <div className="mx-auto relative overflow-hidden rounded-t-xl border-8 border-white bg-white shadow-[0px_0px_0px_1px_#E4E7EC,0px_18.824px_100px_0px_rgba(16,24,40,0.12)]">
                        <Image
                            src={IMAGE_KEYS.HeroImg}
                            alt="Hero Image"
                            width={1004}
                            height={686}
                            priority
                            fetchPriority="high"
                            className="w-full h-auto object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection