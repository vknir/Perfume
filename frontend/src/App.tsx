import Carousel from "./components/Carousel";
import Navbar from "./components/Navbar";
import PerfumeCardContainer from "./components/PerfumeCardContainer";
import { Truck } from "lucide-react";

function App() {
  return (
    <>
      <div className="h-full w-full bg-neutral-950 font-sans relative">
        {/** text that is to be hidden on scroll*/}
        <div className="w-fit h-fit text-sm m-auto py-3 flex items-center gap-2">
          <Truck
            className="text-white scale-x-[-1]"
            strokeWidth={1}
            size={26}
          />
          <p className="text-white">
            <span className="text-rose-200">Free shipping </span>on All Orders
          </p>
        </div>

        {/** container for main content*/}
        <div className="absolute h-full w-full bg-neutral-950 ">
          <div className="relative flex flex-col gap-6 bg-neutral-100">
            <Navbar />
            <Carousel />
            <PerfumeCardContainer/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
