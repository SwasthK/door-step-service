import { Link, useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChartNoAxesCombined, HeartHandshake, Menu, User } from "lucide-react";

const navItems = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Categories",
    link: "/categories",
  },
  {
    name: "About",
    link: "/about",
  },
];

export function Navigation() {
  const nav = useNavigate();
  return (
    <div className="fixed w-full top-0 flex items-center justify-end gap-4 px-4 sm:px-28 py-5  z-10 ">
      <div className="flex py-2 px-1 justify-around items-center w-full  max-w-xl bg-black/60 shadow-lg rounded-md">
        {navItems.map((item: any) => (
          <Link
            to={item.link}
            className="hover:bg-white hover:text-black text-white px-4 py-1 rounded-full transition-colors duration-200 ease-in"
          >
            {item.name}
          </Link>
        ))}
      </div>
      <DropdownMenu>
        <div className=" py-[0.7rem] flex items-start justify-center rounded-md px-3 bg-black/60">
          <DropdownMenuTrigger>
            <Menu className="text-white"></Menu>
          </DropdownMenuTrigger>
        </div>
        <DropdownMenuContent>
          <DropdownMenuItem onClick={() => nav("/signup")}>
            <User className="inline-block mr-2"></User>
            Signup
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => nav("/career")}>
            <ChartNoAxesCombined className="inline-block mr-2" />
            Career
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => nav("/support")}>
          <HeartHandshake className="inline-block mr-2"/>
            Support
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
