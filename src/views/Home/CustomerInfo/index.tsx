import IMAGE_KEYS from "@/assets/imgconst"
import Image from "next/image"
import Marquee from "react-fast-marquee"

const CustomerInfo = () => {
    return (
        <section className='pt-17.5 app-container'>
            <div>
                <h2 className='mb-8 text-center text-lg font-medium text-text-color'>Trusted by over 80,000 individuals and companies worldwide.</h2>
                <div className="relative mb-13">
                    <Marquee play style={{ maskImage: "linear-gradient(to right, transparent, black 20%, black 80%, transparent)" }}>{IMAGE_KEYS.Marqee.map((ele, index) => (<div key={index} className="px-6 relative h-9.5 w-auto"><Image src={IMAGE_KEYS.Marqee[index]} height={38} width={120} className="object-contain w-full h-9.5" alt="" /></div>))}</Marquee>
                </div>
            </div>
            <div className="flex justify-center">
                <div className='flex items-center justify-between rounded-xl bg-gray-50 p-5 max-md:flex-wrap max-md:justify-center max-md:gap-8'>
                    <div>
                        <h3 className='text-base font-medium text-text-color'><strong className='font-bold'>80k+</strong> Happy Users!</h3>
                        <p className='text-sm text-gray-500'>#1 Tailwind CSS Admin Dashboard</p>
                    </div>
                    <span className="mx-12 h-full w-0.5 bg-gray-200 max-md:hidden" />
                    <div>
                        <h3 className='text-base font-medium text-text-color'><strong className='font-bold'>80k+</strong> Happy Users!</h3>
                        <p className='text-sm text-gray-500'>#1 Tailwind CSS Admin Dashboard</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CustomerInfo