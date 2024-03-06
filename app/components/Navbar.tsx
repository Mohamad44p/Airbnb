import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { UserNav } from "./UserNav";
import { SearchModalCompnent } from "./SearchComponent";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <nav className="w-full border-b">
      <div className="flex justify-between items-center container mx-auto px-5 lg:px-10 py-5">
        <Link href="/">
          <Image
            src="/airbnb-desktop.png"
            alt="logo"
            width={128}
            height={128}
            className="hidden lg:block"
          />
          <Image
            src="/airbnb-mobile.webp"
            alt="logo"
            width={50}
            height={50}
            className="block lg:hidden"
          />
        </Link>
        <div className="rounded-full border px-5 py-2">
          <SearchModalCompnent />
        </div>

        <div>
          <UserNav/>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
