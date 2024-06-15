import { GiHamburgerMenu } from 'react-icons/gi';
import { BsFillMoonStarsFill } from 'react-icons/bs';

const Navbar = () => {
  return (
    <nav className="py-10 mb-12 flex justify-between">
      <h1 className="px-2 text-2xl"><BsFillMoonStarsFill /></h1>
      <ul className="flex items-center nav-list">
        <li className="p-2"><a href="#">Home</a></li>
        <li className="p-2"><a href="#about">About</a></li>
        <li className="p-2"><a href="#projects">Projects</a></li>
        <li className="p-2"><a href="#contact">Contact</a></li>
      </ul>
      <details className="dropdown toggler">
        <summary className="m-1 btn text-2xl"><GiHamburgerMenu /></summary>
        <ul className="shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </details>
    </nav>
  );
};

export default Navbar;
