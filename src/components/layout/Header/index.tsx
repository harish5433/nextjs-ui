"use client";
import Link from 'next/link'
import { GithubSvg, Logo } from '@/assets/SvgIcon'
import { ChevronDown, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react';

const Header = () => {
    const [mobileBar, setMobileBar] = useState<boolean>(false);
    useEffect(() => {
        const header = document.getElementById("header");
        if (!header) return;

        const onScroll = () => {
            header.classList.toggle("bg-white", window.scrollY > 1);
            header.classList.toggle("shadow", window.scrollY > 1);
        };
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const handleOpenMenu = () => {
        setMobileBar(prev => !prev);
    }
    useEffect(() => {
        if (mobileBar) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }
    }, [mobileBar])
    return (
        <>
            <header id="header" className="sticky w-full top-0 z-9999 transition duration-100 ease-out">
                <div className="relative xl:flex items-center justify-between px-4 py-4 sm:px-8 xl:gap-7 xl:px-12.5 xl:py-0 2xl:gap-0">
                    <div className="flex w-full items-center justify-between xl:w-3/12">
                        <div><Link href="/" aria-label='home'><Logo /></Link></div>
                        <div className='xl:hidden'>
                            <button className='ml-auto' aria-label='Open menu' onClick={handleOpenMenu}>
                                {mobileBar ? <X /> : <Menu />}
                            </button>
                        </div>
                    </div>
                    <div className="invisible hidden h-0 w-full items-center justify-between lg:w-9/12 xl:visible xl:flex xl:h-auto 2xl:w-10/12">
                        <nav>
                            <ul className="flex flex-col gap-5 xl:flex-row xl:items-center 2xl:gap-8">
                                <li className="group py-4"><Link href="/" className="font-medium text-text-color group-hover:text-primary">Components</Link></li>
                                <li className="group py-4"><Link href="/" className="font-medium text-text-color group-hover:text-primary">Download</Link></li>
                                <li className="relative mobilegroup py-4"><button className="font-medium text-text-color mobilegroup-hover:text-primary inline-flex items-center gap-1.5">Products <span className='transition-transform duration-200 xl:mobilegroup-hover:rotate-180'><ChevronDown /></span></button>
                                    <ProductsMenu />
                                </li>
                                <li className="relative mobilegroup py-4"><button className="font-medium text-text-color mobilegroup-hover:text-primary inline-flex items-center gap-1.5">Resources <span className='transition-transform duration-200 xl:mobilegroup-hover:rotate-180'><ChevronDown /></span></button>
                                    <ResourceMenu />
                                </li>
                            </ul>
                        </nav>
                        <div className="py-3 flex items-center gap-3 xl:mt-0">
                            <Link className="flex items-center gap-1.25 rounded-full bg-gray-100 p-2 h-8 transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700" href="https://github.com/TailAdmin/tailadmin-free-tailwind-dashboard-template" target="_blank" rel="noopener noreferrer">
                                <GithubSvg />
                                <span className="text-sm font-medium text-text-color">1.8K</span>
                            </Link>
                            <Link href="/" className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-medium text-white duration-200 max-xl:h-13 max-xl:w-full max-xl:rounded-full">Get Pro</Link>
                            <Link className="inline-flex items-center justify-center gap-2 rounded-lg border border-stroke-tertiary bg-white px-4 py-3 text-sm font-medium text-text-color shadow-xs duration-200 hover:bg-gray-50 hover:text-gray-800 max-xl:h-13 max-xl:w-full max-xl:rounded-full" href="/">Login</Link>
                        </div>
                    </div>
                </div>
            </header>
            <MobileMenuBar mobileBar={mobileBar} />
        </>
    )
}
const ProductsMenu = () => (
    <div className='animate-menu-in  mt-0 block top-full rounded-3xl border border-stroke bg-white p-5 shadow-lg xl:absolute xl:left-[120%] xl:hidden xl:w-296.25 xl:-translate-x-1/2 xl:mobilegroup-hover:block'>
        <ProductMenuInner />
    </div>
)
const ProductMenuInner = () => (
    <div className='gap-7 grid grid-cols-3'>
        <div className='col-span-2'>
            <div className='grid grid-cols-2 gap-1'>
                <div className='flex flex-col'>
                    {Array(3).fill(0).map((ele, index) => (
                        <div key={index} className='cursor-pointer flex w-full items-center gap-5 rounded-2xl p-3 duration-200 hover:bg-gray-100'>
                            <div>
                                <p className='text-base font-medium text-text-color'>TailAdmin for HTML</p>
                                <div className='text-sm text-text-color-secondary'>Tailwind CSS Admin Dashboard for HTML</div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='flex flex-col'>
                    {Array(3).fill(0).map((ele, index) => (
                        <div key={index} className='cursor-pointer flex w-full items-center gap-5 rounded-2xl p-3 duration-200 hover:bg-gray-100'>
                            <div>
                                <p className='text-base font-medium text-text-color'>TailAdmin for React</p>
                                <div className='text-sm text-text-color-secondary'>Tailwind CSS Admin Dashboard for React.js</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        <div className='col-span-1'></div>
    </div>
)
const ResourceMenu = () => (
    <div
        className="animate-menu-in hidden absolute left-[120%] top-full w-67.5 -translate-x-1/2 rounded-2xl border border-stroke bg-white p-3 opacity-0 shadow-lg mobilegroup-hover:block mobilegroup-hover:opacity-100">
        <Link className="nested-group flex w-full items-center gap-3 rounded-lg p-3 text-sm font-medium text-text-color-secondary duration-200 hover:bg-gray-100 hover:text-text-color" href="/docs">Documentation</Link>
        <Link className="nested-group flex w-full items-center gap-3 rounded-lg p-3 text-sm font-medium text-text-color-secondary duration-200 hover:bg-gray-100 hover:text-text-color" href="/support">Support</Link>
        <Link className="nested-group flex w-full items-center gap-3 rounded-lg p-3 text-sm font-medium text-text-color-secondary duration-200 hover:bg-gray-100 hover:text-text-color" href="/blog">Blog</Link>
        <a target="_blank" rel="nofollow" className="nested-group flex w-full items-center gap-3 rounded-lg p-3 text-sm font-medium text-text-color-secondary duration-200 hover:bg-gray-100 hover:text-text-color" href="https://tailadmin.featurebase.app/roadmap/status">Roadmap</a>
    </div>
)
const MobileMenuBar = ({ mobileBar }: { mobileBar: boolean }) => {
    const [open, setOpen] = useState<string>("");
    function toggleMenu(menu: string) {
        setOpen(open === menu ? "" : menu);
    }
    return (
        <div className={`fixed inset-0 z-999 h-screen w-full overflow-hidden bg-transparent duration-200 xl:hidden ${mobileBar ? "visible opacity-100" : "opacity-0 hidden"}`}>
            <div className='relative h-full bg-white pt-20 flex flex-col'>
                <div className='max-h-full flex-1 overflow-y-auto custom-scrollbar p-5 pt-0'>
                    <ul>
                        <li className="mobilegroup relative">
                            <Link href="/" className='flex w-full items-center justify-between gap-2 border-b border-stroke p-3 text-base text-text-color duration-200 hover:text-primary'>Components</Link>
                        </li>
                        <li className="mobilegroup relative">
                            <Link href="/" className='flex w-full items-center justify-between gap-2 border-b border-stroke p-3 text-base text-text-color duration-200 hover:text-primary'>Download</Link>
                        </li>
                        <li className="relative mobilegroup">
                            <button onClick={() => toggleMenu("products")} className="flex w-full items-center justify-between gap-2 border-b border-stroke p-3 text-base text-text-color duration-200 hover:text-primary">
                                Products
                                <span className='transition-transform duration-200 xl:mobilegroup-hover:rotate-180'>
                                    <ChevronDown />
                                </span>
                            </button>
                            <div className="grid" style={{ gridTemplateRows: open === "products" ? "1fr" : "0fr", transition: "grid-template-rows 300ms" }}>
                                <div className='overflow-hidden transition-all duration-300'>
                                    <div className='mt-2 rounded-lg border border-stroke p-3'>
                                        <ProductMenuInner />
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="relative mobilegroup">
                            <button onClick={() => toggleMenu("resources")} className="flex w-full items-center justify-between gap-2 border-b border-stroke p-3 text-base text-text-color duration-200 hover:text-primary">
                                Resources
                                <span className={`transition-transform duration-200 ${open === "resources" ? "rotate-180" : ""}`}>
                                    <ChevronDown />
                                </span>
                            </button>
                            <div className="grid" style={{ gridTemplateRows: open === "resources" ? "1fr" : "0fr", transition: "grid-template-rows 300ms" }}>
                                <div className='overflow-hidden transition-all duration-300'>
                                    <div className='mt-2 rounded-lg border border-stroke p-3'>
                                        <Link className="nested-group flex w-full items-center gap-3 rounded-lg p-3 text-sm font-medium text-text-color-secondary duration-200 hover:bg-gray-100 hover:text-text-color" href="/docs">Documentation</Link>
                                        <Link className="nested-group flex w-full items-center gap-3 rounded-lg p-3 text-sm font-medium text-text-color-secondary duration-200 hover:bg-gray-100 hover:text-text-color" href="/support">Support</Link>
                                        <Link className="nested-group flex w-full items-center gap-3 rounded-lg p-3 text-sm font-medium text-text-color-secondary duration-200 hover:bg-gray-100 hover:text-text-color" href="/blog">Blog</Link>
                                        <a target="_blank" rel="nofollow" className="nested-group flex w-full items-center gap-3 rounded-lg p-3 text-sm font-medium text-text-color-secondary duration-200 hover:bg-gray-100 hover:text-text-color" href="https://tailadmin.featurebase.app/roadmap/status">Roadmap</a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="relative mobilegroup">
                            <button onClick={() => toggleMenu("preview")} className="flex w-full items-center justify-between gap-2 border-b border-stroke p-3 text-base text-text-color duration-200 hover:text-primary">
                                Live Preview
                                <span className={`transition-transform duration-200 ${open === "preview" ? "rotate-180" : ""}`}>
                                    <ChevronDown />
                                </span>
                            </button>
                            <div className="grid" style={{ gridTemplateRows: open === "preview" ? "1fr" : "0fr", transition: "grid-template-rows 300ms" }}>
                                <div className='overflow-hidden transition-all duration-300'>
                                    <div className='mt-2 rounded-lg border border-stroke p-3'>
                                        <Link className="nested-group flex w-full items-center gap-3 rounded-lg p-3 text-sm font-medium text-text-color-secondary duration-200 hover:bg-gray-100 hover:text-text-color" href="/docs">Documentation</Link>
                                        <Link className="nested-group flex w-full items-center gap-3 rounded-lg p-3 text-sm font-medium text-text-color-secondary duration-200 hover:bg-gray-100 hover:text-text-color" href="/support">Support</Link>
                                        <Link className="nested-group flex w-full items-center gap-3 rounded-lg p-3 text-sm font-medium text-text-color-secondary duration-200 hover:bg-gray-100 hover:text-text-color" href="/blog">Blog</Link>
                                        <a target="_blank" rel="nofollow" className="nested-group flex w-full items-center gap-3 rounded-lg p-3 text-sm font-medium text-text-color-secondary duration-200 hover:bg-gray-100 hover:text-text-color" href="https://tailadmin.featurebase.app/roadmap/status">Roadmap</a>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className='w-full bg-white p-5'>
                    <div className='grid gap-3 sm:grid-cols-2'>
                        <Link href="/" className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-medium text-white duration-200 max-xl:h-13 max-xl:w-full max-xl:rounded-full">Get Pro</Link>
                        <Link className="inline-flex items-center justify-center gap-2 rounded-lg border border-stroke-tertiary bg-white px-4 py-3 text-sm font-medium text-text-color shadow-xs duration-200 hover:bg-gray-50 hover:text-gray-800 max-xl:h-13 max-xl:w-full max-xl:rounded-full" href="/">Login</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header