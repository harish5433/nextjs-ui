import { HomeTitle, SmallTitle } from '../Component/HomeTitle';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import IMAGE_KEYS from "@/assets/imgconst";

const variants = [
    { title: "E-commerce", image: IMAGE_KEYS.ecommerce, link: "/" },
    { title: "Analytic", image: IMAGE_KEYS.analytics, link: "/" },
    { title: "Marketing", image: IMAGE_KEYS.marketing, link: "/" },
    { title: "CRM", image: IMAGE_KEYS.crm, link: "/" },
    { title: "Stocks", image: IMAGE_KEYS.stocks, link: "/" },
    { title: "SaaS", image: IMAGE_KEYS.saas, link: "/" },
    { title: "Logistics", image: IMAGE_KEYS.logistics, link: "/" }
]

const DashboardVariants = () => {
    return (
        <section className="bg-gray-50 py-16 md:py-24 lg:py-27.5">
            <div className="app-container">
                <div className='mx-auto mb-12 w-full max-w-220 text-center lg:mb-15'>
                    <SmallTitle title="7 Dashboard Variations" />
                    <HomeTitle title="E-Commerce, Analytics, Marketing, CRM, Analytics, Stocks, SaaS, Logistics and More!" />
                </div>
            </div>
            <div className="app-container">
                <div className='mb-20 grid sm:grid-cols-2 gap-5 sm:gap-7.5 xl:gap-12.5'>
                    {variants?.map((ele, index) => (
                        <div key={ele.title} className='mobilegroup relative rounded-3xl border border-stroke-secondary bg-white p-2 pb-4 text-center md:p-4 md:pb-6'>
                            <div className='relative overflow-hidden rounded-xl'>
                                <div className='relative aspect-530/330 w-full border border-stroke-secondary rounded-xl overflow-hidden'>
                                    <Image src={ele.image} fill priority={false} className="object-cover" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 530px" alt={ele.title} />
                                </div>
                                <div className='invisible absolute bottom-0 left-0 right-0 top-0 flex items-center justify-center rounded-xl border border-stroke-secondary bg-[rgba(152,162,179,0.32)] opacity-0 backdrop-blur-xs duration-200 mobilegroup-hover:visible mobilegroup-hover:opacity-100'>
                                    <Link href={ele.link} className='inline-flex items-center justify-center gap-1 rounded-lg bg-primary px-10 py-3.5 text-sm font-medium text-white duration-200 hover:bg-primary-600'>Preview <ArrowUpRight size={16} /></Link>
                                </div>
                            </div>
                            <h3 className='mt-6 flex items-center justify-center gap-2 text-lg font-medium text-text-color duration-200 hover:text-primary'>
                                <Link href={ele.link}>{ele.title}</Link>
                            </h3>
                        </div>
                    ))}
                </div>
                <div className='mx-auto w-full max-w-142.5 text-center'>
                    <p className='mb-5 text-base text-text-color-secondary'>Discover the full range of available pages and components, designed to meet your needs and enhance your project effortlessly.</p>
                    <Link href="/" className='inline-flex items-center gap-2 rounded-lg border border-stroke-tertiary bg-white px-6 py-3 text-base font-medium text-text-color shadow-xs duration-200 hover:bg-gray-50 hover:text-gray-800'>Explore All Components
                        <ArrowRight size={20}/>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default DashboardVariants