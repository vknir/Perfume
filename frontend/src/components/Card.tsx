import { CardProps } from "../types/types";
import useScreenSize from "../hooks/useScreensize";
import { Link } from "react-router-dom";
import { StarIcon } from "lucide-react";

export default function Card({
  name,
  _id,
  price,
  description,
  rating,
  primary_img,
}: CardProps) {
  const screen = useScreenSize("(min-width:768px)");

  return (
    <Link to={`/products/${_id}`}>
      <div className="relative rounded-md font-light w-40 md:w-64 pb-2 hover:scale-105 transition-all duration-200 hover:cursor-pointer shadow group">
        {/** image of perfume */}
        <img className="rounded-t-md h-44 md:h-auto" src={primary_img}></img>

        {/** details of perfume */}
        <div className="rounded-b-md p-3 pb-2 gap-3 flex flex-col justify-between">
          <p className="flex w-full md:text-lg justify-between items-center font-normal">
            {name}

            {/** price is conditionally rendered */}
            {/** if screen is large, render price in heading*/}
            {screen ? (
              <p className="text-xs md:text-sm">Rs. {price[0]}</p>
            ) : (
              <></>
            )}
          </p>

          {/** if screen is small, render price below heading*/}
          {screen ? <></> : <p className="text-sm">Rs. {price[0]}</p>}

          <p className="text-xs md:text-sm ">{description}</p>
        </div>

        <p className="absolute flex items-center gap-2 z-10 top-5 right-5 p-1 px-2 bg-white opacity-80 rounded">
          {rating}
          <StarIcon color="#FFD700" size={14}/>
        </p>
      </div>
    </Link>
  );
}
