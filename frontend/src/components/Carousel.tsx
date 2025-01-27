import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useScreenSize from "../hooks/useScreenSize";

export default function Carousel() {
  // set index of image array to 0
  const [index, setIndex] = useState(0);

  // useEffect hook is used to iterate over img array every 4 seconds
  useEffect(() => {
    const clock = setInterval(() => {
      setIndex((prev) => (prev + 1) % 4);
    }, 4000);

    return () => clearInterval(clock);
  }, []);

  const largeScreen = [
    "https://myop.in/cdn/shop/files/BHARTIYA_DESKTOP_BANNER.webp?",
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

  const screen = useScreenSize("(min-width:768px)");

  return (
    <div className="relative mt-10 h-fit w-full bg-neutral-100 px-7 md:px-16 flex justify-between items-center">
      {/** Left arrow button */}
      <button
        className="hover:cursor-pointer"
        onClick={() => setIndex((prev) => (prev + 3) % 4)}
      >
        <ChevronLeft size={40} />
      </button>

      {/** Product Display */}
      {/** Image is displayed conditinally according screen size */}
      <img
        className="rounded-xl h-[450px] animate-fade-in-scale"
        src={screen ? largeScreen[index] : smallScreen[index]}
        alt="carousel"
      ></img>

      {/**Right arrow */}
      <button
        className="hover:cursor-pointer"
        onClick={() => setIndex((prev) => (prev + 1) % 4)}
      >
        <ChevronRight size={40} />
      </button>
    </div>
  );
}
