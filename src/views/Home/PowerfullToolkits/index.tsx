import Image from 'next/image'
import { HomeTitle, SmallTitle } from '../Component/HomeTitle'
import { toolkit } from './toolkitData'

const PowerfullToolkits = () => {
  return (
    <section className="bg-white pt-16 md:pt-24 lg:pt-30">
      <div className="app-container">
        <div className='mx-auto mb-12 w-full max-w-192.5 text-center lg:mb-15'>
          <SmallTitle title="Powerful Toolkit" />
          <HomeTitle title="Customized Plugins and Add-ons" />
        </div>
      </div>
      <div className="app-container">
        <div className='grid grid-cols-1 gap-7.5 sm:grid-cols-2 lg:grid-cols-3'>
          {toolkit?.map((ele) => (
            <div key={ele.tool} className='rounded-3xl border border-stroke-secondary bg-gray-50 p-1 duration-200 hover:border-primary-200 hover:bg-primary-25 md:p-2'>
              <div className='h-full rounded-2xl border border-[#F2F4F7] bg-white p-6'>
                <div className='mb-5 aspect-square w-11 flex items-center justify-center'>
                  <Image src={ele.icon} width={88} height={88} alt="" />
                </div>
                <h3 className='mb-3 text-2xl font-semibold text-title-color'>{ele.tool}</h3>
                <p className='text-base leading-normal! text-text-color-secondary line-clamp-2'>{ele.des}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PowerfullToolkits