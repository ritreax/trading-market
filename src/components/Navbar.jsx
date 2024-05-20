import React from "react";

function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  return (
    <header className="fixed top-0 w-full clearNav z-50 bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
      <div className="max-w-7xl mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div className="flex flex-row items-center justify-between w-full md:w-auto">
          <a
            href="/"
            className="text-3xl text-white font-medium"
          >
            TradeMarket
          </a>
          <button
            className="text-white cursor-pointer leading-none px-3 py-1 md:hidden outline-none focus:outline-none"
            type="button"
            aria-label="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-menu"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
        <div
          className={
            "md:flex flex-grow items-center" +
            (navbarOpen ? " flex" : " hidden")
          }
        >
          <div className="md:ml-auto md:mr-auto font-4 pt-1 md:pl-14 pl-1 flex flex-wrap items-center md:text-base text-1xl md:justify-center justify-start">
            <a className="mr-5 cursor-pointer text-gray-300 hover:text-white font-semibold tr04" href="/">
              Anasayfa
            </a>
            <a className="mr-5 cursor-pointer text-gray-300 hover:text-white font-semibold tr04" href="/education">
              Eğitim
            </a>
            <a className="mr-5 cursor-pointer text-gray-300 hover:text-white font-semibold tr04" href="/about">
              Hakkımızda
            </a>
            <a className="mr-5 cursor-pointer text-gray-300 hover:text-white font-semibold tr04" href="/contact">
              İletişim
            </a>
            <a className="mr-5 cursor-pointer text-gray-300 hover:text-white font-semibold tr04" href="/chart">
              Chart
            </a>
          </div>
          <div className="flex flex-col md:flex-row items-center">
            <a href="/login" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-500 md:mr-5">
              Giriş Yap
            </a>
            <a href="/register" rel="noopener noreferrer" className="mt-3 md:mt-0">
              <button className="bg-blue-800 rounded p-3 shadow font-sans text-base font-semibold text-gray-100">
                Kayıt Ol
              </button>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;