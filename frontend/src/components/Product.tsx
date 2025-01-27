import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { OnePerfume, Perfume } from "../types/types";
import axios from "axios";
import { StarIcon, ChevronRight, ChevronLeft } from "lucide-react";
import ShareButton from "./ShareButton";
import useScreenSize from "../hooks/useScreenSize";
import Carousel from "./Carousel";
import Review from "./Review";

export default function Product() {
  const { _id } = useParams();
  const [product, setProduct] = useState<Perfume>();
  const [count, setCount] = useState(1);
  const screen = useScreenSize("(min-width:768px)");

  useEffect(() => {
    axios.get(`http://localhost:3000/product/${_id}`).then((response) => {
      const productResponse = response.data as OnePerfume;
      setProduct(productResponse.response);
    });
  }, []);

  if (!screen) {
    return (
      <>
        <div className="h-full w-full bg-neutral-950 font-sans relative">
          <Header />
          {/** container for main content*/}
          <div className=" h-full w-full bg-neutral-950">
            <Navbar />

            <div className="px-4 md:px-20 pb-5 md:pb-15 flex flex-col gap-6 bg-neutral-100 overflow-x-hidden rounded-b-2xl">
              {/** contains all details of perfume */}
              <div className="w-full flex flex-col gap-4 font-sans py-5 border border-x-0 border-y-neutral-300">
                <p className="text-2xl font-serif">{product?.name}</p>
                <div className="w-full text-lg flex justify-between items-center">
                  <p>Rs. {product?.price[0] + ".00"}</p>
                  <div className="flex gap-2 items-center">
                    <StarIcon className="mt-0.5" color="#e9bb25" size={20} />
                    {product?.rating}
                  </div>
                </div>
                <p className="text-xl">Size:</p>
                <div className="flex gap-4">
                  <button className="md:text-lg rounded-xl  flex items-center gap-1 text-md border-2 border-black p-3 hover:cursor-pointer transition-all duration-200 hover:bg-black hover:text-white">
                    {product?.size[0] + " ml"}
                  </button>

                  <button className="md:text-lg rounded-xl  flex items-center gap-1 text-md border-2 border-black p-3 hover:cursor-pointer transition-all duration-200 hover:bg-black hover:text-white">
                    {product?.size[1] + " ml"}
                  </button>
                </div>
              </div>

              {/** Description of perfume fragrance */}
              <div className="text-center">
                <p>{product?.description}</p>
              </div>

              {/** 'Count', 'Buy Now' and 'Add to Cart' buttons */}
              <div className="flex flex-col w-full gap-4">
                <div className="flex flex-between gap-16">
                  {" "}
                  <button className="border hover:cursor-pointer p-2 w-fit flex gap-3 border-neutral-300 rounded-full">
                    <ChevronLeft
                      onClick={() =>
                        setCount((prev) => {
                          return 1 > prev - 1 ? 1 : prev - 1;
                        })
                      }
                    />
                    {count}
                    <ChevronRight
                      onClick={() => setCount((prev) => prev + 1)}
                    />
                  </button>
                  <button className="border-2 w-full p-2 bg-black text-white rounded-full hover:bg-white hover:text-black transition-all duration-200 hover:cursor-pointer">
                    Add to Cart
                  </button>
                </div>
                <button className="border-2  p-2 rounded-full hover:bg-black hover:text-white transition-all duration-200 hover:cursor-pointer">
                  Buy it now
                </button>
              </div>

              <ShareButton text={product?.name || ""} />

              <Review product={product}/>
            </div>
            <Footer />
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="h-full w-full bg-neutral-950 font-sans relative">
          <Header />
          {/** container for main content*/}

          <Navbar />
          <div className="flex flex-between bg-neutral-100 pb-15 rounded-b-3xl">
            <Carousel />
            <div className=" px-20 flex flex-col gap-6 bg-neutral-100 overflow-x-hidden ">
              {/** contains all details of perfume */}
              <div className="w-full flex flex-col gap-4 font-sans py-5 border-y-neutral-300">
                <p className="text-2xl font-serif">{product?.name}</p>
                <div className="w-full text-lg flex justify-between items-center">
                  <p>Rs. {product?.price[0] + ".00"}</p>
                  <div className="flex gap-2 items-center">
                    <StarIcon className="mt-0.5" color="#e9bb25" size={20} />
                    {product?.rating}
                  </div>
                </div>
                <p className="text-xl">Size:</p>
                <div className="flex gap-4">
                  <button className="md:text-lg rounded-xl  flex items-center gap-1 text-md border-2 border-black p-3 hover:cursor-pointer transition-all duration-200 hover:bg-black hover:text-white">
                    {product?.size[0] + " ml"}
                  </button>

                  <button className="md:text-lg rounded-xl  flex items-center gap-1 text-md border-2 border-black p-3 hover:cursor-pointer transition-all duration-200 hover:bg-black hover:text-white">
                    {product?.size[1] + " ml"}
                  </button>
                </div>
              </div>

              {/** Description of perfume fragrance */}
              <div className="text-center">
                <p>{product?.description}</p>
              </div>

              {/** 'Count', 'Buy Now' and 'Add to Cart' buttons */}
              <div className="flex flex-col w-full gap-4">
                <div className="flex flex-between gap-16">
                  {" "}
                  <button className="border hover:cursor-pointer p-2 w-fit flex gap-3 border-neutral-300 rounded-full">
                    <ChevronLeft
                      onClick={() =>
                        setCount((prev) => {
                          return 1 > prev - 1 ? 1 : prev - 1;
                        })
                      }
                    />
                    {count}
                    <ChevronRight
                      onClick={() => setCount((prev) => prev + 1)}
                    />
                  </button>
                  <button className="border-2 w-full p-2 bg-black text-white rounded-full hover:bg-white hover:text-black transition-all duration-200 hover:cursor-pointer">
                    Add to Cart
                  </button>
                </div>
                <button className="border-2  p-2 rounded-full hover:bg-black hover:text-white transition-all duration-200 hover:cursor-pointer">
                  Buy it now
                </button>
              </div>

              <ShareButton text={product?.name || ""} />
            </div>

          </div>

          <Footer />
        </div>
      </>
    );
  }
}
