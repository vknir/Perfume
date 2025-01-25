import { useState, useEffect } from "react";
import axios from "axios";
import { Perfume, AllPerfume } from "../types/types";
import Card from "./Card";

export default function PerfumeCardContainer() {
  // useState hook is used to store data
  const [perfume, setPerfume] = useState<Perfume[]>([]);
  const [loading, setLoading] = useState(false);

  // useEffect hook is used fetch data from node.js server

  useEffect(() => {
    setLoading(true);
    axios.get("http://localhost:3000").then((response) => {
      const perfumeData = response.data as AllPerfume;
      setPerfume(perfumeData.allPerfume);
      setLoading(false);
    });
  }, []);

  return (
    <div className="bg-neutral-100 px-7 overflow-x-hidden">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="flex flex-col gap-6 relative">
          <p className="font-sans text-2xl font-medium ">
            DISCOVER{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
              OUR BESTSELLERS
            </span>
          </p>
          {
            <div className="grid grid-cols-5 gap-44 w-screen bg-neutral-100 py-10 pr-20 overflow-x-scroll scrollbar-hide">
              {perfume.map((item) => (
                <Card
                  key={item._id}
                  name={item.name}
                  price={item.price}
                  primary_img={item.primary_img}
                  description={item.description}
                  _id={item._id}
                  rating={item.rating}
                />
              ))}
            </div>
          }
        </div>
      )}
    </div>
  );
}
