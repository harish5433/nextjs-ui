"use client";

import IMAGE_KEYS from "@/assets/imgconst";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const LogoMarquee = () => {
  return (
    <Marquee play style={{ maskImage: "linear-gradient(to right, transparent, black 20%, black 80%, transparent)" }}>{IMAGE_KEYS.Marqee.map((ele, index) => (<div key={index} className="px-6 relative h-9.5 w-auto"><Image src={IMAGE_KEYS.Marqee[index]} height={38} width={120} className="object-contain w-full h-9.5" alt="" /></div>))}</Marquee>
  )
}

export default LogoMarquee