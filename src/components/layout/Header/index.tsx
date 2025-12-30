import Link from 'next/link'
import { GithubSvg, Logo } from '@/assets/SvgIcon'
import { ChevronDown } from 'lucide-react'

const Header = () => {
    return (
        <header className="sticky w-full top-0 z-9999 bg-white shadow transition duration-100">
            <div className="relative xl:flex items-center justify-between px-4 py-4 sm:px-8 xl:gap-7 xl:px-12.5 xl:py-0 2xl:gap-0">
                <Link href="/" aria-label='home'><Logo /></Link>
                <div className="invisible hidden h-0 w-full items-center justify-between lg:w-9/12 xl:visible xl:flex xl:h-auto 2xl:w-10/12">
                    <nav>
                        <ul className="flex flex-col gap-5 xl:flex-row xl:items-center 2xl:gap-8">
                            <li className="group py-7"><a href="/" className="font-medium text-text-color group-hover:text-primary">Components</a></li>
                            <li className="group py-7"><a href="/" className="font-medium text-text-color group-hover:text-primary">Download</a></li>
                            <li className="relative mobilegroup py-7"><button className="font-medium text-text-color mobilegroup-hover:text-primary inline-flex items-center gap-1.5">Products <span className='transition-transform duration-200 xl:mobilegroup-hover:rotate-180'><ChevronDown /></span></button>
                                <ProductsMenu />
                            </li>
                            <li className="relative mobilegroup py-7"><button className="font-medium text-text-color mobilegroup-hover:text-primary inline-flex items-center gap-1.5">Resources <span className='transition-transform duration-200 xl:mobilegroup-hover:rotate-180'><ChevronDown /></span></button>
                                <ResourceMenu />
                            </li>
                        </ul>
                    </nav>
                    <div className="mt-7 flex items-center gap-3 xl:mt-0">
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
    )
}
const ProductsMenu = () => (
    <div className='animate-menu-in  mt-0 block top-full rounded-3xl border border-stroke bg-white p-5 shadow-lg xl:absolute xl:left-[120%] xl:hidden xl:w-296.25 xl:-translate-x-1/2 xl:mobilegroup-hover:block'>
        <div className='gap-7 grid grid-cols-3'>
            <div className='col-span-2'>
                <div className='grid grid-cols-2 gap-1'>
                    <div className='flex flex-col'>
                        {Array(3).fill(0).map((ele, index) => (
                            <div key={index} className='flex w-full items-center gap-5 rounded-2xl p-3 duration-200 hover:bg-gray-100'>
                                <div>
                                    <p className='text-base font-medium text-text-color'>TailAdmin for HTML</p>
                                    <div className='text-sm text-text-color-secondary'>Tailwind CSS Admin Dashboard for HTML</div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='flex flex-col'>
                        {Array(3).fill(0).map((ele, index) => (
                            <div key={index} className='flex w-full items-center gap-5 rounded-2xl p-3 duration-200 hover:bg-gray-100'>
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
    </div>
)
const ResourceMenu = () => (
    <div
        className="animate-menu-in hidden absolute left-[120%] top-full w-67.5 -translate-x-1/2 rounded-2xl border border-stroke bg-white p-3 opacity-0 shadow-lg mobilegroup-hover:block mobilegroup-hover:opacity-100">
        <a target="_self" rel="" className="nested-group flex w-full items-center gap-3 rounded-lg p-3 text-sm font-medium text-text-color-secondary duration-200 hover:bg-gray-100 hover:text-text-color" href="/docs">Documentation</a>
        <a target="_self" rel="" className="nested-group flex w-full items-center gap-3 rounded-lg p-3 text-sm font-medium text-text-color-secondary duration-200 hover:bg-gray-100 hover:text-text-color" href="/support">Support</a>
        <a target="_self" rel="" className="nested-group flex w-full items-center gap-3 rounded-lg p-3 text-sm font-medium text-text-color-secondary duration-200 hover:bg-gray-100 hover:text-text-color" href="/blog">Blog</a>
        <a target="_blank" rel="nofollow" className="nested-group flex w-full items-center gap-3 rounded-lg p-3 text-sm font-medium text-text-color-secondary duration-200 hover:bg-gray-100 hover:text-text-color" href="https://tailadmin.featurebase.app/roadmap/status">Roadmap</a>
    </div>
)
export default Header