import LogoSvg from "../assets/logo_large.svg";
import { COLORS } from "../utils/colors";

function Navbar() {
  return (
    <nav className="flex justify-between px-6 py-5">
      <header className="cursor-pointer">
        <a><img src={LogoSvg} alt="logo"/></a>
      </header>
      <ul className="flex gap-x-4 text-base items-center">
        <li className="cursor-pointer">
          <a>Flights</a>
        </li >
        <li className="cursor-pointer">
          <a>Hotels</a>
        </li>
        <li className="cursor-pointer">
          <a>Packages</a>
        </li >
        <li className="cursor-pointer">
          <a>Sign in</a>
        </li>
        <li>
          <a>
            <button className={`bg-[${COLORS.primaryCol}] text-white rounded px-3 py-1`}>Sign up</button>
        </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
