import { useMemo, useState } from "react";
import Header from "../components/Header";
import type { Crew } from "../data";
import { useApp } from "../hooks/useApp";

export default function Crew() {
  const { openMenu, setOpenMenu, url, data } = useApp();
  const [currentCrew, setCurrentCrew] = useState<string>("Douglas Hurley");
  const crew = useMemo<Crew>(() => {
    return data.crew.filter((item) => item.name === currentCrew)[0];
  }, [currentCrew, data.crew]);

  return (
    <>
      <div className="min-h-screen background-crew-mobile background-crew-tablet background-crew-desktop">
        <div className="max-w-[1440px] mx-auto">
          <Header openMenu={openMenu} setOpenMenu={setOpenMenu} url={url}></Header>
          <main className="mx-28">
            <p className="mt-10 nav-text !text-white uppercase flex justify-center gap-4 md:justify-normal">
              <span className="opacity-25 font-bold">02</span>
              Meet your crew
            </p>
            <section className="grid grid-cols-1 mx-auto lg:grid-cols-2">
              <div className="lg:col-span-1 md:order-2">
                <div className="border-b border-[#383B4B] md:border-none">
                  <img
                    className="mt-10 w-[170px] h-[230px] mx-auto lg:mx-0 lg:ml-auto md:w-[300px] md:h-[360px] lg:w-[445px] lg:h-[490px]"
                    src={crew.images.png}
                    alt={crew.name}
                    title={crew.name}
                  />
                </div>
              </div>
              <div className="lg:col-span-1 md:order-1">
                <div className="mt-10 md:flex md:flex-col md:mx-20 lg:mx-0">
                  <ul className="flex justify-center gap-6 md:order-1 md:mt-10 lg:justify-normal">
                    <li
                      className={`w-[10px] h-[10px] cursor-pointer rounded-full lg:w-[15px] lg:h-[15px]  ${
                        crew.name === "Douglas Hurley"
                          ? "bg-white"
                          : "bg-white/17 hover:bg-white/50"
                      }`}
                      onClick={() => setCurrentCrew("Douglas Hurley")}
                    ></li>
                    <li
                      className={`w-[10px] h-[10px] cursor-pointer rounded-full lg:w-[15px] lg:h-[15px]  ${
                        crew.name === "Mark Shuttleworth"
                          ? "bg-white"
                          : "bg-white/17 hover:bg-white/50"
                      }`}
                      onClick={() => setCurrentCrew("Mark Shuttleworth")}
                    ></li>
                    <li
                      className={`w-[10px] h-[10px] cursor-pointer rounded-full lg:w-[15px] lg:h-[15px]  ${
                        crew.name === "Victor Glover" ? "bg-white" : "bg-white/17 hover:bg-white/50"
                      }`}
                      onClick={() => setCurrentCrew("Victor Glover")}
                    ></li>
                    <li
                      className={`w-[10px] h-[10px] cursor-pointer rounded-full lg:w-[15px] lg:h-[15px]  ${
                        crew.name === "Anousheh Ansari"
                          ? "bg-white"
                          : "bg-white/17 hover:bg-white/50"
                      }`}
                      onClick={() => setCurrentCrew("Anousheh Ansari")}
                    ></li>
                  </ul>
                  <div className="text-center mt-10 md:min-h-[300px] lg:text-left lg:min-h-[350px]">
                    <span className="text-white/50 bellefair-regular uppercase text-[24px] lg:text-[32px]">
                      {crew.role}
                    </span>
                    <h4 className="!text-[56px] uppercase">{crew.name}</h4>
                    <p className="blue-color-100">{crew.bio}</p>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
}
