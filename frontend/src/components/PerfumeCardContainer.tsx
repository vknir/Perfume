import { useState, useEffect } from "react";
import axios from "axios";
import { Perfume, AllPerfume } from "../types/types";


export default function PerfumeCardContainer() {

  // useState hook is used to store data   
  const [perfume, setPerfume] = useState<Perfume[]>();
  
  // useEffect hook is used fetch data from node.js server
  useEffect(() => {
    axios.get("http://localhost:3000").then((response) => {
        const perfumeData= response.data as AllPerfume
        setPerfume(perfumeData.allPerfume)
    });
  }, []);

  
  return (
    <div className="bg-neutral-100 px-7 w-full">
      <p className="font-sans text-2xl font-medium">
        DISCOVER{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
          OUR BESTSELLERS
        </span>
      </p>
    </div>
  );
}
