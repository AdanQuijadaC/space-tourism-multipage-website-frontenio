import { Link } from "react-router";

export default function MobileMenu() {
  return (
    <>
      <div className="w-full min-h-screen fixed top-0 right-0 ">
        <div className="flex flex-col w-[60%] bg-white/4 backdrop-blur-[81px] h-screen ml-auto p-6">
          <ul className="flex flex-col mt-24 uppercase text-white">
            <li className={`py-4`}>
              <Link className="flex gap-2" to={"/"}>
                <span>00</span>home
              </Link>
            </li>
            <li className={`py-4`}>
              <Link className="flex gap-2" to={"/destination"}>
                <span>01</span>destination
              </Link>
            </li>
            <li className={`py-4`}>
              <Link className="flex gap-2" to={"/crew"}>
                <span>02</span>crew
              </Link>
            </li>
            <li className={`py-4`}>
              <Link className="flex gap-2" to={"/technology"}>
                <span>03</span>technology
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
