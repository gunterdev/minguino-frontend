import { NavItem } from "./NavItem";
import Image from "next/image";
import { PropsWithChildren } from "react";

function Header({ children }: PropsWithChildren<{}>) {
  return (
    <header className="sticky top-0 h-full hidden sm:block md:w-auto px-4">
      <h1 className="py-5">
        <a
          href="#"
          className="p-2 inline-block rounded-full ease-in-out duration-200 hover:bg-slate-200"
        >
          <Image src="logo.svg" alt="minguino logo" width={25} height={25} />
        </a>
      </h1>
      <nav>
        <ul className="flex flex-col gap-2">
          <NavItem
            text="Home"
            icon={
              <Image
                src="icon-home.svg"
                alt="Home icon"
                width={25}
                height={25}
              />
            }
            isActive
          />
          <NavItem
            text="Notifications"
            icon={
              <Image
                src="icon-notification-bell.svg"
                alt="Notifications icon"
                width={25}
                height={25}
              />
            }
          />
          <NavItem
            text="Profile"
            icon={
              <Image
                src="icon-profile.svg"
                alt="Profile icon"
                width={25}
                height={25}
              />
            }
          />
        </ul>
      </nav>
    </header>
  );
}

export default Header;
