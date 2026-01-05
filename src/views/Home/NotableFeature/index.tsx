"use client";
import { HomeTitle, SmallTitle } from '../Component/HomeTitle'
import Image from 'next/image';
import IMAGE_KEYS from '@/assets/imgconst';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap, ScrollTrigger } from '@/libs/gsap';

interface IFeature {
    title: string;
    subTitle: string;
    image: string;
    features: Array<{ title: string; des: string }>;
}
const featuresData: IFeature[] = [
    {
        title: "Your Ultimate Admin Template",
        subTitle: "7 Unique Dashboards for Various Use-cases",
        image: IMAGE_KEYS.HomeFeature1,
        features: [
            { title: "Dark/Light Mode Support", des: "Allow Users to seamlessly Switch between Dark/Light Mode – Across All React Components and Pages" },
            { title: "Optimized Development Workflow", des: "Effortless Development and Customization with seamless Webpack and NPM support." }
        ]
    },
    {
        title: "Essential UI Components, Elements, and Pages",
        subTitle: "500+ Dashboard Elements for All Your Needs",
        image: IMAGE_KEYS.HomeFeature2,
        features: [
            { title: "Dashboard UI Components", des: "All Essential Tailwind CSS Dashboard Components, Crafted for HTML, React, Next.js, Vue, Angular and Laravel Admin Panel" },
            { title: "Application Pages and UI Kit Elements", des: "Explore UI Kit Elements and 10+ Web Apps with Examples Such as - Mail, Chat, Invoice, Task, Table, Profile Auth, Settings and More ..." }
        ]
    },
    {
        title: "Visualize Data in Your Way",
        subTitle: "Tons of Charts, Graphs, Cards, and Counter Styles",
        image: IMAGE_KEYS.HomeFeature3,
        features: [
            { title: "Charts and Graphs", des: "Select from a Variety of Options to Present Data Your Way, Utilizing Ready-to-Use Charts and Graphs Components." },
            { title: "Maps, Tables and Cards", des: "Represent Rich and Personalized Data by Choosing Various Data Containers, Each Offering Different Variations." }
        ]
    },
    {
        title: "Pre-built AI Pages for Dashboards",
        subTitle: "Build AI Tools in Minutes",
        image: IMAGE_KEYS.HomeFeature4,
        features: [
            { title: "Text, Image, Video, and Code Generators", des: "Create AI Dashboard apps with ready-to-use Tailwind CSS pages. Includes prompts, searchable history, attachments, downloads, and export options." },
            { title: "Customizable AI UI Templates", des: "Adapt pages across HTML, React, Next.js, Vue, Angular and Laravel. Style, structure, and scale AI dashboards with Tailwind CSS." }
        ]
    }
]
const NotableFeature = () => {
    const headingRef = useRef<HTMLDivElement>(null);
    const sectionRef = useRef<HTMLDivElement>(null);
    useGSAP(
        () => {
            if (!headingRef.current || !sectionRef.current) return;
            const mm = gsap.matchMedia();
            mm.add("(min-width: 1024px)", () => {
                ScrollTrigger.create({
                    trigger: sectionRef.current!,
                    start: "top-=80 top",
                    end: "bottom bottom",
                    pin: headingRef.current!,
                    pinSpacing: false,
                });
                const cards = gsap.utils.toArray<HTMLElement>(".card-wrapper");
                const lastCardST = ScrollTrigger.create({
                    trigger: cards[cards.length - 1],
                    start: "bottom bottom",
                });

                const headingHeight = headingRef.current!.getBoundingClientRect().height || 0;
                cards.forEach((card, index) => {
                    gsap.set(card, {
                        x: index * 4,
                        y: index * 4,
                        zIndex: cards.length + index,
                    });

                    ScrollTrigger.create({
                        trigger: card,
                        start: `top top+=${80 + headingHeight + 20 + index * 4}px`,
                        end: () => lastCardST.start,
                        pin: true,
                        pinSpacing: false
                    });
                });
                return () => {
                    ScrollTrigger.getAll().forEach(st => st.kill());
                };
            });
        },
        { scope: sectionRef }
    );
    return (
        <section className='relative z-10 bg-white py-16 md:py-24 lg:py-30'>
            <div ref={sectionRef}>
                <div className='app-container'>
                    <div className='mx-auto mb-12 w-full max-w-117.5 text-center lg:mb-15' ref={headingRef}>
                        <SmallTitle title="Other Notable Features" />
                        <HomeTitle title="Build Admin Panel Effortlessly" />
                    </div>
                </div>
                <div className='app-container'>
                    <div className='mx-auto flex flex-col w-full max-w-292.5 gap-y-16 md:gap-y-24 lg:gap-y-32 lg:[&>div:nth-child(even)>div:nth-child(2)]:order-first'>
                        {featuresData?.map((feature) => (
                            <FeatureCard key={feature.title} feature={feature} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

const FeatureCard = ({ feature }: { feature: IFeature }) => {
    const { title, subTitle, image, features } = feature;
    return (
        <div className='card-wrapper p-3 flex items-center justify-between gap-15 max-lg:flex-col max-lg:gap-y-10 xl:gap-24 border-2 border-gray-300 shadow-feature bg-white rounded-3xl'>
            <div className='w-full'>
                <h3 className='mb-4.5 text-lg font-medium text-primary'>{title}</h3>
                <h4 className='text-2xl font-semibold text-title-color xl:text-4xl'>{subTitle}</h4>
                <div className='mt-8 flex flex-col gap-8'>
                    {features?.map((feature) => (
                        <div key={feature.title}>
                            <div className='mb-2 text-xl font-semibold text-text-color'>{feature.title}</div>
                            <div className='text-base text-text-color-secondary'>{feature.des}</div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='block w-full'>
                <div className='relative aspect-570/408 max-w-142.5 overflow-hidden rounded-3xl border border-gray-100 shadow-feature bg-[#fcfcfc] lg:ml-auto'>
                    <Image src={image} alt={feature.title} width={570} height={408} className='object-cover' />
                </div>
            </div>
        </div>
    )
}

export default NotableFeature