import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Carousel() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const clock = setInterval(() => {
      setIndex((prev) => (prev + 1) % 4);
    }, 4000);

    return () => clearInterval(clock);
  }, []);

  
  const largeScreen = [
    " https://myop.in/cdn/shop/files/BHARTIYA_DESKTOP_BANNER.webp?",
    "https://myop.in/cdn/shop/files/new_website_b2g1_desktop_jan.webp?",
    "https://myop.in/cdn/shop/files/DESKTOP_021a2812-f1f3-419b-95cd-0a2e2096a1f9.jpg?",
    "https://myop.in/cdn/shop/files/AFTERPART_banner_desktop_1e8f21f8-59d1-48ff-aeb7-f3bdf504e652.webp?",
  ];
  const smallScreen = [
    "https://myop.in/cdn/shop/files/new_website_b2g1_phone_jan.webp?v=1737107160&width=800",
    "https://myop.in/cdn/shop/files/DESKTOP_copy.jpg?v=1718101101&width=800",
    "https://myop.in/cdn/shop/files/BHARTIYA_PHONEBANNER.webp?v=1737107201&width=800",
    "https://myop.in/cdn/shop/files/afterparty_banner_mobile.webp?v=1736494918&width=800",
  ];
  

  return (
    <div className="relative h-fit w-full bg-neutral-100 px-4 flex justify-between items-center">
      <button className="hover:cursor-pointer" onClick={()=> setIndex( prev=> (prev +3)%4)}>
        <ChevronLeft size={40}/>
      </button>
      <img
        className="rounded-xl h-[450px] animate-fade-in-scale"
        src={smallScreen[index]}
        alt="carousel"
      ></img>
     <button className="hover:cursor-pointer" onClick={()=> setIndex( prev=> (prev +1)%4)}>
        <ChevronRight  size={40}/>
      </button>
    </div>
  );
}
