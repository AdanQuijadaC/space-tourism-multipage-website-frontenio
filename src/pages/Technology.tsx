import { useMemo, useState } from "react";
import Header from "../components/Header";
import type { Technology } from "../data";
import { useApp } from "../hooks/useApp";

export default function Technology() {
  const { openMenu, setOpenMenu, url, data, widthSize } = useApp();
  const [currentTechnology, setCurrentTechnology] = useState<string>("Launch vehicle");
  const technology = useMemo<Technology>(() => {
    return data.technology.filter((item) => item.name === currentTechnology)[0];
  }, [currentTechnology, data.technology]);

  return (
    <>
      <div className="min-h-screen background-technology-mobile background-technology-tablet background-technology-desktop">
        <div className="max-w-[1440px] mx-auto">
          <Header openMenu={openMenu} setOpenMenu={setOpenMenu} url={url}></Header>
          <p className="mt-10 nav-text !text-white uppercase flex justify-center gap-4 md:justify-normal md:ml-28">
            <span className="opacity-25 font-bold">03</span>
            SPACE LAUNCH 101
          </p>
          <section className="grid grid-cols-1 mx-auto lg:grid-cols-2 lg:items-center">
            <div className="lg:col-span-1 lg:order-1">
              <div>
                <img
                  className="mt-10 w-full lg:w-auto lg:ml-auto"
                  src={widthSize < 1024 ? technology.images.landscape : technology.images.portrait}
                  alt={technology.name}
                  title={technology.name}
                />
              </div>
            </div>
            <div className="lg:col-span-1 lg:h-[400px]">
              <div className="mx-6 md:mx-40 lg:mx-10 lg:flex lg:gap-24">
                <div className="mt-10">
                  <ul className="flex justify-center gap-6 lg:flex-col">
                    <li
                      className={`w-[40px] h-[40px] cursor-pointer rounded-full flex justify-center items-center bg-white bellefair-regular slate-color-950 text-[16px] tracking-[1px] border md:w-[60px] md:h-[60px] md:text-[24px] ${
                        technology.name === "Launch vehicle"
                          ? "border-white"
                          : "!bg-transparent !text-white border-white/25 hover:border-white"
                      }`}
                      onClick={() => setCurrentTechnology("Launch vehicle")}
                    >
                      1
                    </li>
                    <li
                      className={`w-[40px] h-[40px] cursor-pointer rounded-full flex justify-center items-center bg-white bellefair-regular slate-color-950 text-[16px] tracking-[1px] border md:w-[60px] md:h-[60px] md:text-[24px] ${
                        technology.name === "Spaceport"
                          ? "border-white"
                          : "!bg-transparent !text-white border-white/25 hover:border-white"
                      }`}
                      onClick={() => setCurrentTechnology("Spaceport")}
                    >
                      2
                    </li>
                    <li
                      className={`w-[40px] h-[40px] cursor-pointer rounded-full flex justify-center items-center bg-white bellefair-regular slate-color-950 text-[16px] tracking-[1px] border md:w-[60px] md:h-[60px] md:text-[24px] ${
                        technology.name === "Space capsule"
                          ? "border-white"
                          : "!bg-transparent !text-white border-white/25 hover:border-white"
                      }`}
                      onClick={() => setCurrentTechnology("Space capsule")}
                    >
                      3
                    </li>
                  </ul>
                </div>
                <div className="text-center mt-10 lg:text-left">
                  <span className="blue-color-100 text-[14px] bellefair-regular-condensed tracking-[2.36px] md:text-[16px]">
                    THE TERMINOLOGY…
                  </span>
                  <h5 className="!text-[24px] uppercase md:!text-[40px] lg:!text-[56px]">
                    {technology.name}
                  </h5>
                  <p className="blue-color-100 mt-6">{technology.description}</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
