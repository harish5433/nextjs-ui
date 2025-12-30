const HomeTitle = ({ title }: { title: string }) => {
    return (
        <h2 className='text-3xl font-bold leading-1.2! text-title-color md:text-[40px]'>{title}</h2>
    )
}
const SmallTitle = ({ title }: { title: string }) => (
    <span className="mb-5 inline-block text-lg font-medium text-primary">{title}</span>
)
const MainHeading = ({ title }: { title: string }) => (
    <span className="mx-auto mb-4 w-full max-w-202.5 text-3xl font-bold text-title-color sm:text-4xl lg:text-5xl">{title}</span>
)
export { MainHeading, HomeTitle, SmallTitle }