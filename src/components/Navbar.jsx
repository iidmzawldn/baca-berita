import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/news.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const toggleNavbar = () => {
    setOpen(!open);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2" src={logo} alt="logo" />
            <span className="text-xl tracking-tight">Baca Berita</span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/referensi">Referensi</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
          </ul>
          <div className="lg:hidden py-4 md-flex flex-col justify-end">
            <button onClick={toggleNavbar}>{open ? <X /> : <Menu />}</button>
          </div>
        </div>
        {open && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/referensi">Referensi</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
