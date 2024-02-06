import { PencilSquareIcon, TrashIcon } from "@heroicons/react/16/solid";
import { Button } from "@mui/material";

const CardEvent = () => {
  return (
    <div className="max-w-md mx-auto mt-2 flex bg-neutral-500 rounded-full ">
      <div className="rounded-full bg-neutral-800 p-3">
        <p className="text-neutral-100 my-auto text-xl">14:30</p>
      </div>
      <div className="flex flex-col w-full px-1 py-1">
        <p className="text-neutral-50 my-auto text-sm">Agenda Meeting ...</p>
        <p className="text-neutral-300 my-auto text-sm">
          50 People, 90 Minutes
        </p>
      </div>
      <div className="px-4">
        <div className="flex gap-2 items-center justify-center h-full">
          <Button className="h-8 w-8 rounded-full bg-neutral-800 hover:bg-neutral-700 p-1">
            <PencilSquareIcon className="text-neutral-50" />
          </Button>
          <Button className="h-8 w-8 rounded-full bg-neutral-800 hover:bg-neutral-700 p-1">
            <TrashIcon className="text-red-500" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CardEvent;
