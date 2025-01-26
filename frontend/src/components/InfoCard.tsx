import { MoveRight } from "lucide-react";
import useScreenSize from "../hooks/useScreensize";

export default function InfoCard() {
   // screen hook to get width of the screen
  const screen = useScreenSize("(min-width:768px)");


  // screen == true, small screen is rendered 
  if (!screen)
    return (
      <div
        className={`font-sans px-7 md:px-20 flex flex-col items-start gap-5`}
      >
        {/**Store location info text */}
        <p className="font-sans text-2xl md:text-4xl font-medium ">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 from-0% to-10% to-orange-500">
            46
          </span>{" "}
          STORES ACROSS INDIA
        </p>

        {/** store poiter button */}
        <button className="md:text-lg rounded-xl mt-2 flex items-center gap-1 text-md border-2 border-black p-3 hover:cursor-pointer transition-all duration-200 hover:bg-black hover:text-white">
          Locate Our Stores{" "}
          <MoveRight className="mt-1" strokeWidth={1} size={18} />
        </button>

        <p className="mt-7 text-lg md:text-xl font-sans text-neutral-400">
          Make Your Own Perfume (MYOP) is India's pioneering perfume bar
          offering top-notch, value for money fragrances with exceptional
          expertise in the art & science of perfumery.
          <span className="text-transparent mt-2 bg-clip-text bg-gradient-to-r from-red-500 from-0% to-10% to-orange-500 font-bold block">
            INDIA'S FIRST PERFUME BAR.
          </span>
        </p>
      </div>
    );

 
    // screen == false, large screen is rendered 
    else {
    return (
      <div className="px-16 w-full gap-20 items-start flex justify-between">
        {/** left section of large screen InfoCard */}
        <div className="flex flex-col gap-5 w-96">
          <p className="font-sans text-2xl md:text-4xl font-medium ">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500  to-orange-400">
              46
            </span>{" "}
            STORES ACROSS INDIA
          </p>
          <button className="md:text-lg w-fit rounded-xl mt-2 flex items-center gap-1 text-md border-2 border-black p-3 hover:cursor-pointer transition-all duration-200 hover:bg-black hover:text-white">
            Locate Our Stores{" "}
            <MoveRight className="mt-1" strokeWidth={1} size={18} />
          </button>
        </div>

        {/** right section of large screen InfoCard */}
        <p className="text-lg md:text-xl font-sans text-neutral-400 w-[600px]">
          Make Your Own Perfume (MYOP) is India's pioneering perfume bar
          offering top-notch, value for money fragrances with exceptional
          expertise in the art & science of perfumery.
          <span className="text-transparent mt-2 md:mt-8 md:text-2xl bg-clip-text bg-gradient-to-r from-red-500 from-0% to-10% to-orange-500 font-bold block">
            INDIA'S FIRST PERFUME BAR.
          </span>
        </p>
      </div>
    );
  }
}
