import { useState } from "react";
import {
    HashtagIcon,
    MoonIcon,
    SunIcon,
    Bars3Icon,
    XMarkIcon,
} from "@heroicons/react/24/outline";

function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <nav className="bg-white py-4 text-gray-DEFAULT font-dmsans fixed top-0 left-0 w-full z-[9999] shadow-md">
            <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
                {/* Logo & Branding */}
                <div className="flex items-center gap-3">
                    <a href="/" className="text-base font-mono hover:text-orange-400 transition duration-300">
                        #YourTrendRank
                    </a>
                </div>

                {/* Primary Navigation */}
                <div className="hidden lg:flex gap-10 text-base font-mono">
                    <a href="#" className="hover:text-orange-400 transition duration-300">Home</a>
                    <a href="#generate" className="hover:text-orange-400 transition duration-300">Generate</a>
                    <a href="#trending" className="hover:text-orange-400 transition duration-300">Trending</a>
                    <a href="#saved" className="hover:text-orange-400 transition duration-300">Saved Hashtags</a>
                    <a href="#contact" className="hover:text-orange-400 transition duration-300">Contact</a>
                </div>

                {/* Secondary Navigation */}
                <div className="flex gap-6 items-center">
                    <a href="#generate" className="hover:text-orange-400 transition duration-300">
                        <button className="flex text-orange-400 items-center justify-center border-2 border-orange-400 rounded-full py-2 px-4 text-balance md:text-balance font-mono hover:bg-secondary-yellow hover:text-gray-800 transition duration-300 shadow-lg bg-primary-purple focus:ring-2 focus:ring-secondary-yellow focus:outline-none active:scale-95">
                            Generate
                        </button>
                    </a>

                    {/* Mobile Menu Toggle */}
                    <div className="lg:hidden">
                        <button onClick={() => setToggleMenu(!toggleMenu)}>
                            {toggleMenu ? <XMarkIcon className="h-7 animate-spin text-secondary-pink" /> : <Bars3Icon className="h-7 animate-pulse text-secondary-yellow" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            <div
                className={`fixed z-40 w-full bg-secondary-purple flex flex-col gap-6 p-6 text-base font-medium lg:hidden origin-top transform transition-transform duration-700 ${!toggleMenu ? "scale-y-0 h-0 overflow-hidden" : "scale-y-100 h-auto"}`}
            >
                <a href="#" className="border-l-4 border-secondary-yellow pl-4 font-bold">Home</a>
                <a href="#generate" className="pl-4 hover:text-secondary-yellow transition duration-300">Generate</a>
                <a href="#trending" className="pl-4 hover:text-secondary-yellow transition duration-300">Trending</a>
                <a href="#saved" className="pl-4 hover:text-secondary-yellow transition duration-300">Saved Hashtags</a>
                <a href="#contact" className="pl-4 hover:text-secondary-yellow transition duration-300">Contact</a>
            </div>
        </nav>
    );
}

export default Navbar;
