import React, { Fragment } from "react";
import Logo from "@/components/Svgs/Logo";
import HomeIcon from "@/components/Svgs/HomeIcon";
import ChatIcon from "@/components/Svgs/ChatIcon";
import CreateIcon from "@/components/Svgs/CreateIcon";
import CommunityIcon from "@/components/Svgs/Community";
import CollectionIcon from "@/components/Svgs/CollectionIcon";
import BountyIcon from "@/components/Svgs/Bounty";
import LearnIcon from "@/components/Svgs/Learn";
import FluxIcon from "@/components/Svgs/Flux";
import DoublePlayIcon from "@/components/Svgs/Play";

const navigation = [
  { name: "Home", href: "#", icon: HomeIcon, current: false },
  { name: "Chat", href: "#", icon: ChatIcon, current: false },
  { name: "Create", href: "#", icon: CreateIcon, current: true },
  { name: "Community", href: "#", icon: CommunityIcon, current: false },
  { name: "Collections", href: "#", icon: CollectionIcon, current: false },
  { name: "Bounty", href: "#", icon: BountyIcon, current: false },
  { name: "Learn", href: "#", icon: LearnIcon, current: false },
  { name: "Flux", href: "#", icon: FluxIcon, current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Layout = (props) => {
  return (
    <Fragment>
      <div className="fixed inset-y-0 left-0 z-50 block w-20 overflow-y-auto bg-[#2E3033] lg:pb-4">
        <img
          className={"absolute top-0 z-10 right-0"}
          src="/images/Bar.png"
          alt=""
        />

        <div className="flex h-16 shrink-0 items-center justify-center">
          <Logo />
        </div>
        <nav className="mt-[70px] z-20 relative">
          <ul
            role="list"
            className="flex flex-col pl-2.5 items-center space-y-3"
          >
            {navigation.map((item) => (
              <li
                key={item.name}
                className="w-20 flex items-center justify-center "
              >
                <a
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "linear-bg text-white"
                      : "text-gray-400 hover:text-white hover-linear-bg",
                    "group  rounded-xl px-2 py-2.5  w-[54px] flex items-center justify-center  text-sm leading-6 font-semibold"
                  )}
                >
                  {/* <item.icon className="h-6 w-6 shrink-0" aria-hidden="true" /> */}
                  <div className=" flex gap-y-1 items-center justify-center  flex-col">
                    <item.icon />
                    <span className="text-[10px] leading-none inline-block flex-none font-normal">
                      {item.name}
                    </span>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="absolute flex items-center justify-center w-full  h-24 bottom-0">
          <DoublePlayIcon />
        </div>
      </div>

      {/* Main Content Goes here */}
      <div className="pl-20">
      {props.children}

      </div>
    </Fragment>
  );
};

export default Layout;
