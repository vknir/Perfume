import { Share2Icon } from "lucide-react";
import { RWebShare } from "react-web-share";

export default function ShareButton({ text }: { text: string }) {
  const url = window.location.toString();

  return (
    <RWebShare
      data={{
        title: "Make Your Own Perfume",
        text,
        url,
      }}
    >
      <div className="flex gap-2 hover:cursor-pointer">
        <Share2Icon />
        <p className="underline ">Share</p>
      </div>
    </RWebShare>
  );
}
