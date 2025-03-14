import { useMemo, useState } from "react";
import Header from "../components/Header";
import { useApp } from "../hooks/useApp";
import type { Destinations } from "../data";

export default function Destination() {
  const { openMenu, setOpenMenu, url, data } = useApp();
  const [currentDestination, setCurrentDestination] = useState<string>("Moon");
  const destination = useMemo<Destinations>(() => {
    return data.destinations.filter((item) => item.name === currentDestination)[0];
  }, [currentDestination, data.destinations]);

  return (
    <>
      <div className="min-h-screen background-destination-mobile background-destination-tablet background-destination-desktop">
        <div className="max-w-[1440px] mx-auto">
          <Header openMenu={openMenu} setOpenMenu={setOpenMenu} url={url}></Header>
          <p className="mt-10 nav-text !text-white uppercase flex justify-center gap-4 md:justify-normal md:ml-28">
            <span className="opacity-25 font-bold">01</span>
            Pick your destination
          </p>
          <section className="grid grid-cols-1 px-6 mx-auto lg:grid-cols-2">
            <div className="lg:col-span-1">
              <div>
                <img
                  className="mt-10 w-[170px] mx-auto md:w-[300px] lg:w-[445px]"
                  src={destination.images.png}
                  alt={destination.name}
                  title={destination.name}
                />
              </div>
            </div>
            <div className="lg:col-span-1">
              <div className="max-w-[445px] mx-auto lg:ml-auto">
                <div className="pb-10 border-b border-[#383B4B]">
                  <ul className="mt-10 flex justify-center gap-4 text-white lg:justify-normal">
                    <li
                      className={`cursor-pointer sub-heading-2 uppercase ${
                        currentDestination === "Moon" ? "active" : "active-off blue-color-100"
                      }`}
                      onClick={() => setCurrentDestination("Moon")}
                    >
                      moon
                    </li>
                    <li
                      className={`cursor-pointer sub-heading-2 uppercase ${
                        currentDestination === "Mars" ? "active" : "active-off blue-color-100"
                      }`}
                      onClick={() => setCurrentDestination("Mars")}
                    >
                      mars
                    </li>
                    <li
                      className={`cursor-pointer sub-heading-2 uppercase ${
                        currentDestination === "Europa" ? "active" : "active-off blue-color-100"
                      }`}
                      onClick={() => setCurrentDestination("Europa")}
                    >
                      europa
                    </li>
                    <li
                      className={`cursor-pointer sub-heading-2 uppercase ${
                        currentDestination === "Titan" ? "active" : "active-off blue-color-100"
                      }`}
                      onClick={() => setCurrentDestination("Titan")}
                    >
                      titan
                    </li>
                  </ul>
                  <div className="min-h-[250px]">
                    <h3 className="uppercase text-center lg:text-left">{destination.name}</h3>
                    <p className="blue-color-100 text-center lg:text-left">
                      {destination.description}
                    </p>
                  </div>
                </div>
                <div className="mt-10 md:flex md:justify-center md:items-baseline md:gap-24 lg:justify-normal">
                  <div className="text-center lg:text-left">
                    <p className="sub-heading-2 uppercase blue-color-100">avg. distance</p>
                    <h5 className="uppercase">{destination.distance}</h5>
                  </div>
                  <div className="text-center mt-6 lg:text-left">
                    <p className="sub-heading-2 uppercase blue-color-100">est. travel time</p>
                    <h5 className="uppercase">{destination.travel}</h5>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
