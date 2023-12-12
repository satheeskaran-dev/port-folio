import { FC } from "react";
import NavLink from "./NavLink";

const MenuOverlay: FC<{ links: string[] }> = ({ links }) => {
  return (
    <ul className="flex flex-col items-center p-4">
      {links.map((item) => (
        <li key={item}>
          <NavLink name={item} path={`#${item.toLowerCase()}`} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
