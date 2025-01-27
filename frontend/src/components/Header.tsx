import { Truck } from "lucide-react";

export default function Header() {
  return (
    <>
      {/** text that is to be hidden on scroll*/}
      <div className="w-fit h-fit text-sm m-auto py-3 flex items-center gap-2">
        <Truck className="text-white scale-x-[-1]" strokeWidth={1} size={26} />
        <p className="text-white">
          <span className="text-rose-200">Free shipping </span>on All Orders
        </p>
      </div>
    </>
  );
}
