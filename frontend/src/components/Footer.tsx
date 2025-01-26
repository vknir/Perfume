import Facebook from "../assets/facebook.svg";
import Instagram from "../assets/instagram.svg";
import Youtube from "../assets/youtube.svg";
import Pintrest from "../assets/pinterest.svg";
import { MoveRight } from "lucide-react";

export default function Footer() {
  return (
    <div className="flex flex-col  p-7 gap-10 items-center">
      {/** logo */}
      <img
        src={`https://myop.in/cdn/shop/files/MYOP_LOGO_All_1_.pngwhite.png?v=1709801663&width=200`}
        alt="logo"
      ></img>

      {/**icons section */}

      <div className="flex gap-6 bg-neutral-950 w-full border justify-center border-b-neutral-700 pb-4">
        <img
          className="h-6 hover:scale-125 hover:cursor-pointer transition-all duration-200"
          src={Facebook}
        ></img>
        <img
          className="h-6 hover:scale-125 hover:cursor-pointer transition-all duration-200"
          src={Instagram}
        ></img>
        <img
          className="h-6 hover:scale-125 hover:cursor-pointer transition-all duration-200"
          src={Youtube}
        ></img>
        <img
          className="h-6 hover:scale-125 hover:cursor-pointer transition-all duration-200"
          src={Pintrest}
        ></img>
      </div>

      {/** Text Display section*/}
      <div>
        <p className="text-lg font-serif text-white">
          {"Stay in the loop for exciting offers, coupons and much more!".toUpperCase()}
        </p>
      </div>

      {/** input section */}
      <div className="rounded-md bg-neutral-800 p-4 w-full md:max-w-[600px] transition-all duration-200 flex justify-between items-center focus-within:bg-neutral-700">
        <input
          className="placeholder-neutral-400 outline-0 text-white "
          placeholder="Enter your email"
        ></input>
        <MoveRight
          className="mt-1 bg-white rounded-full p-2 h-8 w-8 transition-all duration-200 cursor-pointer hover:scale-110"
          strokeWidth={2}
          size={16}
        />
      </div>

      {/** copyright section */}
      <div className="flex flex-col text-white items-center w-full gap-2 ">
        <p className="text-sm">© 2025 Make Your Own Perfume.</p>
        <div className="flex gap-2 justify-center items-center w-full text-xs px-10">
          <p>Refund Policy</p>
          <p>Privacy Policy</p>
          <p>Shipping Policy</p>
        </div>
      </div>
    </div>
  );
}
