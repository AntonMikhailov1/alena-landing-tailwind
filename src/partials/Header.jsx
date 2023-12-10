import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Header() {

  const [top, setTop] = useState(true);

  // detect whether user has scrolled the page down by 10px 
  useEffect(() => {
    const scrollHandler = () => {
      window.scrollY > 10 ? setTop(false) : setTop(true)
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);  

  return (
    <header className={`fixed w-full z-99 text-gray-700 tracking-wider md:bg-opacity-90 transition duration-300 ease-in-out} ${!top && 'backdrop-blur-sm shadow-lg'}`}>
      <div className={`max-w-6xl border-b border-gray-200 mx-auto px-5 sm:px-6 ${!top && 'border-b-0'}`}>
        <div className="flex items-center justify-center h-10">
          <nav className="flex flex-grow items-center justify-center">
            <ul className="flex flex-grow flex-wrap items-center justify-center gap-x-8">
              <li>
                <a className='hover:opacity-90 cursor-pointer'>Обо Мне</a>
              </li>
              <li> 
                <a className='hover:opacity-90 cursor-pointer'>Портфолио</a>
              </li>
              <li> 
                <a className='hover:opacity-90 cursor-pointer'>Контакты</a>
              </li>
            </ul>

          </nav>

        </div>
      </div>
    </header>
  );
}

export default Header;
