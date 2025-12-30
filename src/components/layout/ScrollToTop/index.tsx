"use client";
import { ArrowUp } from "lucide-react"
import { useEffect, useState } from "react";

const ScrollToTop = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        function onScroll() {
            setVisible(window.scrollY > 200);
        }
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", onScroll);
        }
    }, []);
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div className="z-99 fixed bottom-8 left-8">
            <button onClick={scrollToTop} aria-label="scroll to top" className={`inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-md bg-primary text-white shadow-md hover:bg-primary/80 transition-all duration-300 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
                <ArrowUp />
            </button>
        </div>
    )
}

export default ScrollToTop