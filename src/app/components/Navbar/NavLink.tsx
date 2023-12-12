import { FC } from "react";
import Link from "next/link";

interface NavLinkProps {
  name: string;
  path: string;
}

const NavLink: FC<NavLinkProps> = ({ name, path }) => (
  <Link
    href={path}
    className="block py-2 px-3 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
  >
    {name}
  </Link>
);

export default NavLink;
