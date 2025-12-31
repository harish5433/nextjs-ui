import IMAGE_KEYS from '@/assets/imgconst'
import Image from 'next/image'
import Link from 'next/link'

const JoinBox = () => {
    return (
        <section className='overflow-hidden bg-white pt-16 md:pt-14 lg:pt-30'>
            <div className='app-container'>
                <div className='relative z-10 w-full justify-between overflow-hidden rounded-3xl bg-gray-800 px-8 pt-20 md:pl-15 md:pr-10 lg:flex'>
                    <div className='self-center pb-13 lg:max-w-md'>
                        <span className='mb-3 block text-base text-gray-400'></span>
                        <h2 className='mb-9 text-2xl font-semibold text-white md:text-3xl'>
                            Join thousands using the <br className='max-sm:hidden' /> #1 Tailwind CSS Admin Dashboard on the market!
                        </h2>
                        <div className='mb-17.5 flex flex-wrap gap-3'>
                            <Link href="/" className='inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3.5 text-base font-medium text-white shadow-xs duration-200 hover:bg-primary-600 max-sm:w-full'>Download Now</Link>
                            <Link href="/" className='inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-gray-600 bg-transparent px-5 py-3.5 text-base font-medium text-white shadow-xs duration-200 hover:border-gray-400 max-sm:w-full'>Live Preview</Link>
                        </div>
                    </div>
                    <div className='relative max-w-3xl self-end rounded-t-xl lg:ml-auto'>
                        <Image src={IMAGE_KEYS.joinImage} width={1356} height={870} alt="join-image" className='h-full' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default JoinBox