import Carousel from "./Carousel";
import Footer from "./Footer";
import Header from "./Header";
import InfoCard from "./InfoCard";
import Navbar from "./Navbar";
import PerfumeCardContainer from "./PerfumeCardContainer";

export default function Home() {
  return (
    <>
      <div className="h-full w-full bg-neutral-950 font-sans relative">
        
        <Header/>
        {/** container for main content*/}
        <div className=" h-full w-full bg-neutral-950">
          <Navbar />
          <div className="relative pb-5 md:pb-15 flex flex-col gap-6 bg-neutral-100 overflow-x-hidden rounded-b-2xl md:rounded-b-3xl">
            <Carousel />
            <PerfumeCardContainer />
            <InfoCard />
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}
