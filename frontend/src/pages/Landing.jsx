import React from "react";
import { Link} from "react-router-dom";
import { useRef } from "react"; // Import useRef from react

const Landing = () => {
   
    const nextSectionRef = useRef(null);
    const middleSectionRef = useRef(null);
  return (
    <div className="bg-[#000000]">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;1,100;1,200&display=swap"
        rel="stylesheet"
      />

      <style>
        {`
                    section {
                        font-family: "Poppins", sans-serif;
                    }
                `}
      </style>

      {/* Page Main */}
      <main className="flex flex-col items-center font-Poppins justify-center mt-16">
        <header className="container ">
          {/* Navbar */}
          <nav className="flex justify-between md:justify-around py-4 bg-gray-400/80 backdrop-blur-md shadow-md w-full px-10 fixed top-0 left-0 right-0 z-10 px-8 md:px-3">
            {/* Logo Container */}
            <div className="flex items-center">
              {/* Logo */}
              <Link className="cursor-pointer" to="/">
                <h3 className="text-2xl font-medium text-black-500">
                  {/* <img
                    className="h-10"
                    src="https://stackoverflow.design/assets/img/logos/so/logo-stackoverflow.svg"
                    alt="Store Logo"
                  /> */}
                  UwU CodeGen
                </h3>
              </Link>
            </div>

            {/* Links Section */}
            <div className="items-center text-sm md:space-x-8 justify-center justify-items-start md:justify-items-center md:flex md:pt-2 w-full left-0 top-16 px-15 md:px-10 py-3 md:py-0 border-t md:border-t-0">
              <Link className="flex text-black hover:text-blue-500 cursor-pointer font-semibold transition-colors duration-300" to="/">Home</Link>
              <Link
              to="#Developers"
              onClick={(e) => {
                e.preventDefault();
                nextSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
              }}
                className="flex text-black hover:text-blue-500 cursor-pointer font-semibold transition-colors duration-300"
              >
                Developers
              </Link>
              <Link  to="#About"
                onClick={(e) => {
                    e.preventDefault(); 
                    middleSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
                  }}
              className="flex text-black hover:text-blue-500 cursor-pointer font-semibold transition-colors duration-300">About Us</Link>
            </div>

            {/* Auth Links */}
            <div className="flex items-center space-x-5 text-sm hidden md:flex">

              {/* Login */}
              <Link className="flex text-black text-sm cursor-pointer transition-colors duration-300 hover:text-blue-500 font-semibold text-black" to="/login">
                <svg
                  className="fill-current h-5 w-5 mr-2 mt-0.5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M10,17V14H3V10H10V7L15,12L10,17M10,2H19A2,2 0 0,1 21,4V20A2,2 0 0,1 19,22H10A2,2 0 0,1 8,20V18H10V20H19V4H10V6H8V4A2,2 0 0,1 10,2Z" />
                </svg>
                Login
              </Link>
            </div>

            {/* Hamburger Menu */}
            <button className="w-10 h-10 md:hidden justify-self-end rounded-full hover:bg-gray-100">
              <svg
                className="mx-auto"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
              </svg>
            </button>
          </nav>
        </header>

        {/* Hero */}
        <section className="flex flex-wrap items-center -mx-3 font-sans px-4 mx-auto w-full lg:max-w-screen-lg sm:max-w-screen-sm md:max-w-screen-md pt-28 pb-24">
          {/* Column-1 */}
          <div className="px-3 w-full lg:w-2/5">
            <div className="mx-auto mb-8 max-w-lg text-center lg:mx-0 lg:max-w-md lg:text-left ">
              <h2 className="mb-4 text-3xl text-white font-bold text-left lg:text-5xl">
                Speak Naturally,
                <span className="text-5xl text-blue-500 leading-relaxeds">Code </span>
                UwU
              </h2>

              <p className="visible mx-0 mt-3 mb-0 text-sm leading-relaxed text-left text-slate-400">
                Transform your thoughts into functional, fuzzy-wuzzy UwU programs with AI magic.
              </p>
            </div>

            <div className="text-center lg:text-left">
              <Link
                to="/login"
                className="block visible py-4 px-8 mb-4 text-xs font-semibold tracking-wide leading-none text-white bg-blue-500 rounded cursor-pointer sm:mr-3 sm:mb-0 sm:inline-block"
              >
                Try UwU
              </Link>

              <Link
                to="/signup"
                className="block visible py-4 px-8 text-xs font-semibold leading-none bg-white rounded border border-solid cursor-pointer sm:inline-block border-slate-200 text-slate-500"
              >
                Join Us
              </Link>
            </div>
          </div>

          {/* Column-2 */}
          <div className="px-3 mb-12 w-full lg:mb-0 lg:w-3/5">
            {/* Illustrations Container */}
            <div
              className="flex justify-center object-contain bg-center bg-no-repeat ml-28 items-center "
              style={{
                backgroundImage:
                  "url(https://cdn1.iconfinder.com/data/icons/3d-web-design/512/11._Developer.png)",
                backgroundSize: "contain", // Ensures the whole image fits
                width: "100%",
                height: "400px",
              }}
            ></div>
          </div>
        </section>
        </main>
        {/* Parallax Background */}
        <section
          className="flex flex-col w-full h-[500px] bg-cover bg-fixed bg-center flex justify-center items-center"
          style={{
            backgroundImage: "url(https://static.vecteezy.com/system/resources/previews/022/555/586/non_2x/3d-abstract-red-and-black-background-by-ai-generated-can-be-use-as-facebook-cover-free-photo.jpg)",
          }}
        >
          <h1 className="text-white text-5xl font-semibold mt-20 mb-10">
            Describe. Generate. Run.
          </h1>

          <span className="text-center font-bold my-20 text-white/90">
            <Link
              to="https://egoistdeveloper.github.io/twcss-to-sass-playground/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/90 hover:text-white"
            >
              Type Your Code
            </Link>

            <hr className="my-4" />

            <Link
              to="https://unsplash.com/photos/8Pm_A-OHJGg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/90 hover:text-white"
            >
              Instantly Generated, Perfectly Quirky
            </Link>

            <hr className="my-4" />

            <p>
              <Link
                to="https://github.com/EgoistDeveloper/my-tailwind-components/blob/main/src/templates/parallax-landing-page.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/90 hover:text-white"
              >
                Run On Your Device
              </Link>
            </p>
          </span>
        </section>

        {/* Content */}
        <section className="p-10 space-y-8">
          <h1 className="text-4xl text-center text-gray-500 my-20">Endless Possibilities with UwU Code</h1>

          <p className="text-white text-center">
            Unleash your creativity with AI-generated UwU scripts! Whether you're building basic programs & loops to explore the fundamentals of this adorable esolang or crafting creative projects like text-based art and quirky logic puzzles, our AI-powered tool makes it effortless. Experiment with esolang logic, pushing the boundaries of unconventional programming, or dive into playful coding challenges to see what’s possible. From fun scripts to complex logic flows, the only limit is your imagination. Let AI transform your ideas into fully functional UwU programs—quickly, efficiently, and with creativity.
          </p>

          <h1  className="text-2xl text-center text-gray-500 my-20">UwU Code, Made Simple & Fun!</h1>

          <p ref={middleSectionRef} id="About" className="text-white text-center">
            Tired of complex coding? Our AI-powered UwU Code Generator lets you create functional and quirky programs effortlessly! No syntax struggles—just describe what you need, and AI generates the perfect UwU script instantly. Whether you're a beginner exploring esolang or an expert experimenting with creative logic, our tool makes coding fast, fun, and accessible. Dive into the cutest way to program, unleash your imagination, and bring your ideas to life with ease. Start coding in UwU today—because programming should be playful, not painful!
          </p>
        </section>

        <section  ref={nextSectionRef} id="Developers" className="pb-10">
          <h1 className="text-2xl text-center text-gray-500 my-20">Developers</h1>
          <div className="flex items-center justify-center gap-24">
            <p className="text-white text-center">Sowmik Dey</p>
            <p className="text-white text-center">Siddharth Kumar Mishra</p>
            <p className="text-white text-center">Satyam Srivastava</p>
            <p className="text-white text-center">Ujjwal Shahi</p>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-800 pt-10 sm:mt-10 pt-10 w-full font-Poppins">
          <div className="max-w-6xl m-auto text-gray-800 flex flex-wrap justify-left">
            {/* Col-1 */}
            <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
              {/* Col Title */}
              <div className="text-xs uppercase text-gray-400 font-medium mb-6">
                Getting Started
              </div>

              {/* Links */}
              <Link to="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">Installation</Link>
              <Link to="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">Release Notes</Link>
              <Link to="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">Upgrade Guide</Link>
              <Link to="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">Using with Preprocessors</Link>
              <Link to="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">Optimizing for Production</Link>
              <Link to="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">Browser Support</Link>
              <Link to="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">IntelliSense</Link>
            </div>

            {/* Col-2 */}
            <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
              {/* Col Title */}
              <div className="text-xs uppercase text-gray-400 font-medium mb-6">
                Core Concepts
              </div>

              {/* Links */}
              <Link to="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">Utility-First</Link>
              <Link to="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">Responsive Design</Link>
              <Link to="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">Hover, Focus, & Other States</Link>
              <Link to="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">Dark Mode</Link>
              <Link to="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">Adding Base Styles</Link>
              <Link to="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">Extracting Components</Link>
              <Link to="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">Adding New Utilities</Link>
            </div>

            {/* Col-3 */}
            <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
              {/* Col Title */}
              <div className="text-xs uppercase text-gray-400 font-medium mb-6">
                Customization
              </div>

              {/* Links */}
              <Link to="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">Configuration</Link>
              <Link to="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">Theme Configuration</Link>
              <Link to="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">Breakpoints</Link>
              <Link to="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">Customizing Colors</Link>
              <Link to="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">Customizing Spacing</Link>
              <Link to="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">Configuring Variants</Link>
              <Link to="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">Plugins</Link>
            </div>

            {/* Col-4 */}
            <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
              {/* Col Title */}
              <div className="text-xs uppercase text-gray-400 font-medium mb-6">
                Community
              </div>

              {/* Links */}
              <Link to="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">GitHub</Link>
              <Link to="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">Discord</Link>
              <Link to="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">Twitter</Link>
              <Link to="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">YouTube</Link>
            </div>
          </div>

          {/* Copyright Bar */}
          <div className="pt-2">
            <div className="flex pb-5 px-3 m-auto pt-5 border-t border-gray-500 text-gray-400 text-sm flex-col md:flex-row max-w-6xl">
              <div className="mt-2">© Copyright 2025-year. All Rights Reserved.</div>

              {/* Required Unicons (if you want) */}
              <div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
                <Link to="#" className="w-6 mx-1">
                  <i className="uil uil-facebook-f"></i>
                </Link>
                <Link to="#" className="w-6 mx-1">
                  <i className="uil uil-twitter-alt"></i>
                </Link>
                <Link to="#" className="w-6 mx-1">
                  <i className="uil uil-youtube"></i>
                </Link>
                <Link to="#" className="w-6 mx-1">
                  <i className="uil uil-linkedin"></i>
                </Link>
                <Link to="#" className="w-6 mx-1">
                  <i className="uil uil-instagram"></i>
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
  );
};

export default Landing;