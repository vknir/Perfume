import { CardProps } from "../types/types";

export default function Card({
  name,
  _id,
  price,
  description,
  rating,
  primary_img,
}: CardProps) {
  return (
    <div className="rounded-md font-light w-40 hover:scale-105 transition-all duration-200 hover:cursor-pointer shadow group">
      <img className="rounded-t-md " src={primary_img}></img>
      <div className="rounded-b-md p-3 pb-2 gap-3 flex flex-col justify-between">
        <p className="text-lg font-normal">{name}</p>
        <p className="hidden group-hover:block transition-all duration-1000 text-sm">
          From <span className="text-lg">Rs. {price[0]}</span>
        </p>
        <p className="text-xs group-hover:hidden">{description}</p>
      </div>
      
    </div>
  );
}
