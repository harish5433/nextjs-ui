import OtherTab from "@/views/Others/OtherTab";

export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <OtherTab />
            <section className="bg-gray-100 pb-17.5 lg:pb-20 xl:pb-30">
                <div className="main-section mx-auto w-full max-w-6xl px-4 pt-10 sm:px-5 xl:px-0">
                    <div className="flex gap-7.5">
                        <div className="w-full max-w-210">
                            <div className="rounded-xl bg-white p-10">
                                {children}
                            </div>
                        </div>
                        <div className="sidebar-container hidden w-full max-w-60 duration-200 xl:block">
                            <div className="rounded-xl bg-white p-7"></div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}