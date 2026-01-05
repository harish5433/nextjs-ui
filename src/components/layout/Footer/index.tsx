import { Logo } from '@/assets/SvgIcon';
import { Boxes } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="relative overflow-hidden bg-[#101828] text-[#98A2B3] pt-16 md:pt-24 lg:pt-30">
            <div className="app-container">
                <div className="flex gap-10 max-xl:flex-wrap lg:justify-between">
                    <div className="max-w-sm">
                        <Link href="/" aria-label='home' className="mb-6 inline-block"><Logo className="text-white!" /></Link>
                        <p className="mb-10 text-base text-[#98A2B3]">Free and Open-Source Tailwind CSS Admin Dashboard Template, now available for - HTML, React, Next.js, Vue Angular and Laravel</p>
                        <div className="flex gap-1.5">
                            <Link href="/" className="inline-flex items-center justify-center rounded-full bg-white/5 px-5 py-2.5 text-[#98A2B3] duration-200 hover:bg-white/15 hover:text-white"><Boxes size={20} /></Link>
                            <Link href="/" className="inline-flex items-center justify-center rounded-full bg-white/5 px-5 py-2.5 text-[#98A2B3] duration-200 hover:bg-white/15 hover:text-white"><Boxes size={20} /></Link>
                            <Link href="/" className="inline-flex items-center justify-center rounded-full bg-white/5 px-5 py-2.5 text-[#98A2B3] duration-200 hover:bg-white/15 hover:text-white"><Boxes size={20} /></Link>
                        </div>
                    </div>
                    <div className="w-full sm:w-auto">
                        <div>
                            <h4 className="mb-7 text-xl font-medium text-white">Useful Links</h4>
                            <ul className="flex flex-col gap-3">
                                <li>
                                    <Link href="/" className="text-base font-medium text-[#98A2B3] duration-200 hover:text-white hover:underline">
                                        Documentation
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/" className="text-base font-medium text-[#98A2B3] duration-200 hover:text-white hover:underline">
                                        Download Pro Update
                                    </Link>
                                </li><li>
                                    <Link href="/" className="text-base font-medium text-[#98A2B3] duration-200 hover:text-white hover:underline">
                                        Blog
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/" className="text-base font-medium text-[#98A2B3] duration-200 hover:text-white hover:underline">
                                        Update Logs
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full sm:w-auto">
                        <div>
                            <h4 className="mb-7 text-xl font-medium text-white">About</h4>
                            <ul className="flex flex-col gap-3">
                                <li>
                                    <Link href="/privacy-policy" className="text-base font-medium text-[#98A2B3] duration-200 hover:text-white hover:underline">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/refund-policy" className="text-base font-medium text-[#98A2B3] duration-200 hover:text-white hover:underline">
                                        Refund Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/license" className="text-base font-medium text-[#98A2B3] duration-200 hover:text-white hover:underline">
                                        License and Terms
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/" className="text-base font-medium text-[#98A2B3] duration-200 hover:text-white hover:underline">
                                        Support
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full max-w-xs">
                        <div>
                            <h4 className="mb-7 text-xl font-medium text-white">Newsletter</h4>
                            <p className="text-base text-[#98A2B3]">
                                Subscribe for the latest updates
                            </p>
                            <div className="mt-6">
                                <form>
                                    <div className="relative flex">
                                        <input type="email" id="email" placeholder="Enter your email" className="h-12 w-full rounded-full border border-white/10 bg-white/5 pl-6 pr-25 text-sm text-[#98A2B3] placeholder-gray-400 shadow-xs outline-none duration-200 focus:text-white" />
                                        <button type="submit" className="flex min-w-12 items-center justify-center bg-primary text-white duration-200 hover:bg-primary-600 focus:border-primary-300 focus:shadow-focused absolute right-1 h-10 top-1/2 -translate-y-1/2 py-3 px-4 rounded-full font-medium text-sm">Subscribe</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pt-22.5 mb-5">
                    <div className="flex flex-col items-center justify-center gap-4">
                        <p className="text-base">TailAdmin available in</p>
                        <div className="flex flex-wrap items-center justify-center gap-2">
                            <Link href="/" className="group flex items-center gap-2 hover:bg-white/10 py-1 pl-2 pr-2.5 rounded-lg transition-colors duration-200"><p className="text-sm text-gray-400 group-hover:text-white">HTML</p></Link>
                            <Link href="/" className="group flex items-center gap-2 hover:bg-white/10 py-1 pl-2 pr-2.5 rounded-lg transition-colors duration-200"><p className="text-sm text-gray-400 group-hover:text-white">React</p></Link>
                            <Link href="/" className="group flex items-center gap-2 hover:bg-white/10 py-1 pl-2 pr-2.5 rounded-lg transition-colors duration-200"><p className="text-sm text-gray-400 group-hover:text-white">Next.js</p></Link>
                            <Link href="/" className="group flex items-center gap-2 hover:bg-white/10 py-1 pl-2 pr-2.5 rounded-lg transition-colors duration-200"><p className="text-sm text-gray-400 group-hover:text-white">Vue.js</p></Link>
                            <Link href="/" className="group flex items-center gap-2 hover:bg-white/10 py-1 pl-2 pr-2.5 rounded-lg transition-colors duration-200"><p className="text-sm text-gray-400 group-hover:text-white">Angular</p></Link>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center gap-4 py-8 max-sm:flex-col">
                    <p className="text-base">@2025 TailAdmin - All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer