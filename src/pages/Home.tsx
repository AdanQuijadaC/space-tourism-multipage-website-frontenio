import Header from "../components/Header";
import { useApp } from "../hooks/useApp";

export default function Home() {
  const { openMenu, setOpenMenu, url, navigate } = useApp();

  return (
    <>
      <div className="min-h-screen background-home-mobile background-home-tablet background-home-desktop">
        <div className={`max-w-[1440px] mx-auto`}>
          <Header openMenu={openMenu} setOpenMenu={setOpenMenu} url={url}></Header>
          <section className="grid grid-cols-1 mt-10 px-6 mx-auto lg:grid-cols-2">
            <div className="lg:col-span-1">
              <p className="nav-text text-center">SO, YOU WANT TO TRAVEL TO</p>
              <h1 className="text-center">SPACE</h1>
              <p className="!text-[#D0D6F9] text-center">
                Let’s face it; if you want to go to space, you might as well genuinely go to outer
                space and not hover kind of on the edge of it. Well sit back, and relax because
                we’ll give you a truly out of this world experience!
              </p>
            </div>
            <div className="mt-20 lg:col-span-1">
              <div className="text-center md:rounded-full  md:mx-auto md:flex md:items-center md:justify-center md:w-[340px] md:h-[340px] hover:md:bg-[#ffffff0a] hover:md:backdrop-blur-[81.55px]">
                <button
                  className="bg-white w-[150px] h-[150px] cursor-pointer rounded-full hover:animate-pulse  md:w-[242px] md:h-[242px]"
                  type="button"
                  onClick={() => navigate("/destination")}
                >
                  <span className="text-[#0B0D17] mx-auto text-[20px] bellefair-regular uppercase  md:text-[32px]">
                    explore
                  </span>
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
