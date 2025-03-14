import { Link } from "react-router";
import IconLogo from "./svg/IconLogo";
import IconHamburger from "./svg/IconHamburger";
import IconClose from "./svg/IconClose";
import { Dispatch, SetStateAction } from "react";
import MobileMenu from "./MobileMenu";
import { useApp } from "../hooks/useApp";

type HeaderProps = {
  openMenu: boolean;
  setOpenMenu: Dispatch<SetStateAction<boolean>>;
  url: string;
};

export default function Header({ openMenu, setOpenMenu, url }: HeaderProps) {
  const { widthSize } = useApp();
  return (
    <>
      <header className="p-6 flex items-center justify-between mx-auto md:py-0 md:pr-0 lg:py-6">
        <div>
          <a title="brand" href={"/"}>
            <figure>
              <IconLogo width="40" height="40"></IconLogo>
            </figure>
          </a>
        </div>
        <div className="hidden bg-white/25 w-full h-[1px] z-10 translate-x-12 lg:block"></div>
        <div className="hidden md:block">
          <div>
            <nav className="bg-white/4 backdrop-blur-[81px] pr-6 pl-32">
              <ul className="flex space-x-10">
                <li className={`py-6 ${url === "/" ? "active" : "active-off"}`}>
                  <Link className="flex gap-2" to={"/"}>
                    <span className="hidden lg:block">00</span>home
                  </Link>
                </li>
                <li className={`py-6 ${url === "/destination" ? "active" : "active-off"}`}>
                  <Link className="flex gap-2" to={"/destination"}>
                    <span className="hidden lg:block">01</span>destination
                  </Link>
                </li>
                <li className={`py-6 ${url === "/crew" ? "active" : "active-off"}`}>
                  <Link className="flex gap-2" to={"/crew"}>
                    <span className="hidden lg:block">02</span>crew
                  </Link>
                </li>
                <li className={`py-6 ${url === "/technology" ? "active" : "active-off"}`}>
                  <Link className="flex gap-2" to={"/technology"}>
                    <span className="hidden lg:block">03</span>technology
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        {!openMenu && (
          <button
            className="cursor-pointer md:hidden"
            type="button"
            title="open"
            onClick={() => setOpenMenu(!openMenu)}
          >
            <figure>
              <IconHamburger width="24" height="21"></IconHamburger>
            </figure>
          </button>
        )}
        {openMenu && (
          <button
            className="cursor-pointer z-20 md:hidden"
            type="button"
            title="close"
            onClick={() => setOpenMenu(!openMenu)}
          >
            <figure>
              <IconClose width="24" height="21"></IconClose>
            </figure>
          </button>
        )}
      </header>
      {openMenu && widthSize < 768 && <MobileMenu></MobileMenu>}
    </>
  );
}
