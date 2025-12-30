import { HomeTitle, SmallTitle } from '../Component/HomeTitle'
import { coreBoxData, coreFeatures } from './data'

const CoreFeature = () => {
    return (
        <section className='relative z-10 bg-core-feature py-16 md:py-24 lg:py-30'>
            <div className='app-container'>
                <div className='mx-auto mb-12 w-full max-w-220 text-center lg:mb-15'>
                    <SmallTitle title="Core Features" />
                    <HomeTitle title="Ultimate Tailwind Dashboard – Crafted for your favourite Tech Stack" />
                </div>
            </div>
            <div className='app-container'>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 xl:gap-7.5'>
                    {coreBoxData.map((core) => (
                        <FeatureBox key={core.title} core={core} />
                    ))}
                </div>
                <div className='mt-12.5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-7.5 xl:gap-y-6'>
                    {coreFeatures.map((coreFeature) => {
                        const Icon = coreFeature.icon;
                        return (
                            <div key={coreFeature.text} className='flex items-center gap-4 rounded-3xl border border-stroke-secondary bg-white px-4 py-3 duration-200 hover:border-primary-200 hover:bg-primary-25 md:px-7.5 md:py-6'>
                                <div className='text-primary'><Icon /></div>
                                <h4 className='text-lg font-semibold text-text-color md:text-xl lg:text-lg xl:text-xl'>{coreFeature.text}</h4>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

const FeatureBox = ({ core }: { core: typeof coreBoxData[number] }) => {
     const Icon = core.icon;
    return (
    <div className='rounded-3xl border border-stroke-secondary bg-gray-50 p-1 duration-200 hover:border-primary-200 hover:bg-primary-25 md:p-2'>
        <div className='h-full rounded-2xl border border-[#F2F4F7] bg-white p-4 md:p-6 flex flex-col gap-7.5'>
            <div className='text-primary'><Icon className="size-12" /></div>
            <div className='flex-1'>
                <h3 className='mb-4 text-xl font-semibold text-title-color md:text-2xl lg:text-xl xl:text-2xl'>{core.title}</h3>
                <p className='text-base leading-normal! text-text-color-secondary'>{core.des}</p>
            </div>
        </div>
    </div>
)}

export default CoreFeature