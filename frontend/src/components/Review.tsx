import useScreenSize from "../hooks/useScreenSize";
import { StarIcon } from "lucide-react";
import { Perfume } from "../types/types";
import { useState } from "react";
import axios from "axios";
import Comments from "./Comments";

export default function Review({ product }: { product: Perfume | undefined }) {
  const screen = useScreenSize("(min-width:768px)");
  const [writeReview, setWriteReview] = useState(false);
  const [prevReview, setPrevReveiw] = useState(false);

  // state variable to keep track of reviews
  const [highlight, setHiglight] = useState(4);
  const [comments, setComments] = useState("");


  // handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(product?._id);
    const response = await axios.post(
      `http://localhost:3000/product/${product?._id}`,
      {
        comments: `${comments}`,
        rating: `${highlight + 1}`,
      },
      {
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
    console.log(response);
  };

  let stars = [];
  const reviewStars = Array(5).fill(1);

  for (let i = 1; i <= 5; i++) {
    if (i <= (product?.rating || 0))
      stars.push(<StarIcon size={17} color="#e9bb25" />);
    else stars.push(<StarIcon size={17} color="#000000" />);
  }
  //if screen == true, render desktop view
  if (screen) {
    return (
      <div className="flex flex-col items-center gap-4 rounded-b-3xl">
        <p className="text-3xl font-light font-sans">CUSTOMER REVIEWS</p>

        <div className="flex gap-3 items-center">
          <div className="flex gap-1 items-center">{stars}</div>
          <p>{(product?.rating || 0).toFixed(2)} out of 5</p>
        </div>

        <p>
          Based on {product?.count}{" "}
          {(product?.count || 0) > 1 ? "reviews" : "review"}
        </p>

        <div className="w-full p-10 flex flex-col gap-5">
          <button
            className="w-full border-2 py-1 hover:cursor-pointer"
            onClick={() => {
              setWriteReview((prev) => !prev);
            }}
          >
            Write a Review
          </button>
          {writeReview ? (
            <div className="flex flex-col items-center py-10 w-full">
              <p>Please rate us!</p>
              <div className="flex gap-1 mt-3">
                {reviewStars.map((_, index) => {
                  return (
                    <StarIcon
                      className="hover:cursor-pointer"
                      color={`${index > highlight ? `#000000` : `#e9bb25`}`}
                      key={index}
                      size={20}
                      onMouseEnter={() => setHiglight(index)}
                      onClick={() => setHiglight(index)}
                    />
                  );
                })}
              </div>
              <form
                className="flex flex-col gap-2 py-10 items-center w-full"
                onSubmit={(e) => handleSubmit(e)}
              >
                <label className="text-lg">Review</label>
                <textarea
                  rows={5}
                  className="border p-3 w-full"
                  placeholder="Please write your comments here"
                  value={comments}
                  onChange={(e) => setComments(e.target.value)}
                ></textarea>

                <button className="w-fit border-2 py-1 px-7 mt-10 hover:cursor-pointer">
                  Submit
                </button>
              </form>
            </div>
          ) : (
            <></>
          )}

          <button
            className="w-full border-2 py-1 hover:cursor-pointer"
            onClick={() => {
              setPrevReveiw((prev) => !prev);
            }}
          >
            Show Reveiws
          </button>
          {prevReview ? (
            <div>
              {product?.review.map((element, index) => {
                return <Comments index={index} review={element} />;
              })}
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    );
  }
   //if screen == false, render mobile view 
  else {
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

        <div className="w-full p-10 flex flex-col gap-5">
          <button
            className="w-full border-2 py-1 hover:cursor-pointer"
            onClick={() => {
              setWriteReview((prev) => !prev);
            }}
          >
            Write a Review
          </button>
          {writeReview ? (
            <div className="flex flex-col items-center py-10 w-full">
              <p>Please rate us!</p>
              <div className="flex gap-1 mt-3">
                {reviewStars.map((_, index) => {
                  return (
                    <StarIcon
                      className="hover:cursor-pointer"
                      color={`${index > highlight ? `#000000` : `#e9bb25`}`}
                      key={index}
                      size={20}
                      onMouseEnter={() => setHiglight(index)}
                      onClick={() => setHiglight(index)}
                    />
                  );
                })}
              </div>
              <form
                className="flex flex-col gap-2 py-10 items-center w-full"
                onSubmit={(e) => handleSubmit(e)}
              >
                <label className="text-lg">Review</label>
                <textarea
                  rows={5}
                  className="border p-3 w-full"
                  placeholder="Please write your comments here"
                  value={comments}
                  onChange={(e) => setComments(e.target.value)}
                ></textarea>

                <button className="w-fit border-2 py-1 px-7 mt-10 hover:cursor-pointer">
                  Submit
                </button>
              </form>
            </div>
          ) : (
            <></>
          )}

          <button
            className="w-full border-2 py-1 hover:cursor-pointer"
            onClick={() => {
              setPrevReveiw((prev) => !prev);
            }}
          >
            Show Reveiws
          </button>
          {prevReview ? (
            <div>
              {product?.review.map((element, index) => {
                return <Comments index={index} review={element} />;
              })}
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    );
  }
}
