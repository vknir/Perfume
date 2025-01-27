import { Menu, Search, ShoppingCart } from "lucide-react";
import {Link} from 'react-router-dom'

export default function Navabar() {
  return (
    <div className="p-4 md:px-20 md:pt-10 mt-2 rounded-t-2xl md:rounded-t-3xl bg-neutral-100 flex justify-between items-center">
      {/** import menu icon  */}
      <Menu strokeWidth={1} size={24} />

      {/** get img from url*/}
      <Link to='/'>
        <img
          className="h-7 md:h-10"
          alt="logo"
          src={`https://myop.in/cdn/shop/files/MYOP_LOGO_All_1.png?v=1709801663&width=330`}
        ></img>
      </Link>

      {/** icon container containing search and shopping cart icon on right side*/}
      <div className="flex gap-7">
        <Search strokeWidth={1} size={26} />
        <ShoppingCart strokeWidth={1} size={26} />
      </div>
    </div>
  );
}
