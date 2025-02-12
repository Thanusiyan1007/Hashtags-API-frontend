import React from 'react';
import Navbar from './pages/Navbar';
import HeroSection from './pages/HeroSection';
import Generate from './pages/Generate';
import Trending from './pages/Trending';
import SavedHashtags from './pages/SavedHashtags';
import Contact from './pages/Contact';
import Footer from './pages/Footer';

function Pageroute() {
    return (
        <div className="relative">
            {/* Navbar with highest z-index to stay on top */}
            <div className="z-[9999] sticky top-0 left-0 w-full">
                <Navbar />
            </div>

            {/* Sections with Even Spacing */}
            <div className="relative z-[1] pt-[10px] md:pt-[12px] lg:pt-[14px]">
                <HeroSection />
            </div>

            <div >
                <Generate />
            </div>

            <div >
                <Trending />
            </div>

            <div className="relative ">
                <SavedHashtags />
            </div>

            <div className="relative ">
                <Contact />
            </div>

            <div >
                <Footer/>
            </div>
        </div>
    );
}

export default Pageroute;
