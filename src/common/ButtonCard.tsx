import { Button } from "@mui/material";
import Link from "next/link";

interface ButtonValue {
  name: string;
  icon: React.ReactElement;
  link: string;
}

const ButtonCard = ({ icon, name, link }: ButtonValue) => {
  return (
    <div className="flex gap-2 items-center py-1">
      <p className="font-semibold grow">{name}</p>
      <Link href={link}>
        <Button className="h-12 w-12 rounded-full bg-neutral-600 hover:bg-neutral-500 p-2">
          {icon}
        </Button>
      </Link>
    </div>
  );
};

export default ButtonCard;
