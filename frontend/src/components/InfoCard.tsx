import { MoveRight } from "lucide-react";

export default function InfoCard() {
  return (
    <div className="font-sans px-7 flex flex-col items-start gap-5">
      <p className="font-sans text-2xl font-medium ">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 from-0% to-10% to-orange-500">
          46
        </span>{" "}
        STORES ACROSS INDIA
      </p>
      <button className="rounded-xl mt-2 flex items-center gap-1 text-md border-2 border-black p-3 hover:cursor-pointer transition-all duration-200 hover:bg-black hover:text-white">
        Locate Our Stores{" "}
        <MoveRight className="mt-1" strokeWidth={1} size={18} />
      </button>

      <p className="mt-7 text-md font-sans text-neutral-400">
        Make Your Own Perfume (MYOP) is India's pioneering perfume bar offering
        top-notch, value for money fragrances with exceptional expertise in the
        art & science of perfumery. 
        <span className="text-transparent mt-2 bg-clip-text bg-gradient-to-r from-red-500 from-0% to-10% to-orange-500 font-medium block">INDIA'S FIRST PERFUME BAR.</span>
      </p>
      
    </div>
  );
}
