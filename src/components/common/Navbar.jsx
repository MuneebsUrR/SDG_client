// Navbar.js
import { Button } from "@nextui-org/button";
import { ThemeSwitcher } from "./themeSwitcher";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { useSidebarStore } from "./useSidebarStore";
import logo from '../../assets/logo.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const toggleSideNavbar = useSidebarStore((state) => state.toggleSideNavbar);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // Adjust this value as needed
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-30 transition-colors duration-300 ${scrolled ? 'bg-primary' : 'bg-transparent'}`}>
      <div className="bg-transparent flex flex-row justify-between items-center gap-5 px-4 lg:pb-4">
        <a href="/" className="mt-1 transform transition-transform duration-150">
          <img src={logo} alt="" width={70} height={70} />
        </a>

        <h4 className="text-white font-bold text-xl opacity-100 uppercase leading-6 hidden lg:block transition-opacity duration-150">
          BSG for SDG
        </h4>

        <div className="text-white flex flex-row gap-3 lg:gap-5 transition-transform duration-150">
          <ThemeSwitcher />
          <Button
            size="lg"
            className="bg-transparent text-white"
            isIconOnly
            onClick={toggleSideNavbar}
          >
            <Menu size={40} />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
