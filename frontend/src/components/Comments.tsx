import { User2Icon } from "lucide-react";
export default function Comments({
  review,
  index,
}: {
  review: string;
  index: number;
}) {
  return (
    <div className="flex flex-col gap-4 mt-4">
      <div className="flex gap-2 items-center text-lg">
        <User2Icon />
        <p>User {index + 1}</p>
      </div>
      <p className="p-4 bg-neutral-300 rounded">{review}</p>
    </div>
  );
}
