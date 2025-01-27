import useScreenSize from "../hooks/useScreenSize";
import { StarIcon } from "lucide-react";
import { Perfume } from "../types/types";
import { useState } from "react";

export default function Review({ product }: { product: Perfume | undefined }) {
  const screen = useScreenSize("(min-width:768px)");
  const [writeReview, setWriteReview] = useState(false);
  let stars = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= (product?.rating || 0))
      stars.push(<StarIcon size={17} color="#e9bb25" />);
    else stars.push(<StarIcon size={17} color="#000000" />);
  }

  if (screen) {
    return <></>;
  } else {
    return (
      <div className="flex flex-col items-center mt-5 gap-4">
        <p className="text-3xl font-light font-sans">CUSTOMER REVIEWS</p>

        <div className="flex gap-3 items-center">
          <div className="flex gap-1 items-center">{stars}</div>
          <p>{(product?.rating || 0).toFixed(2)} out of 5</p>
        </div>

        <p>
          Based on {product?.count}{" "}
          {(product?.count || 0) > 1 ? "reviews" : "review"}
        </p>

        <div className="w-full p-10">
          <button
            className="w-full border-2 py-1 hover:cursor-pointer"
            onClick={() => {
              setWriteReview((prev) => !prev);
            }}
          >
            Write a Review
          </button>
          {writeReview ? (
            <form className="flex flex-col gap-2 py-10 items-center">
              <label className="text-lg">Review</label>
              <textarea
                rows={5}
                className="border p-3 w-full"
                placeholder="Please write your comments here"
              ></textarea>

              <button
                className="w-fit border-2 py-1 px-7 mt-10 hover:cursor-pointer"
                onClick={() => {
                 
                }}
              >
                Submit
              </button>
            </form>
          ) : (
            <></>
          )}
        </div>
      </div>
    );
  }
}
