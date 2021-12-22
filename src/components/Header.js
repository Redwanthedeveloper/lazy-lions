import React, { useState } from 'react';
import logo from '../assets/images/logo.png';

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <div className='header absolute w-full'>
      <div className='container mx-auto px-4 lg:px-0'>
        <div className='header__wrapper lg:flex justify-between py-6 lg:py-12'>
          <div className='header__main flex justify-between lg:justify-start lg:flex lg:gap-48 items-center relative'>
            <div className=' w-32 lg:w-40'>
              <img src={logo} alt='' />
            </div>
            <div className='block lg:hidden'>
              <button
                onClick={(e) => {
                  setShowNav(!showNav);
                }}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  class='ionicon'
                  viewBox='0 0 512 512'
                  className='text-gradientright h-8 w-8'
                >
                  <path
                    fill='none'
                    stroke='currentColor'
                    stroke-linecap='round'
                    stroke-miterlimit='10'
                    stroke-width='32'
                    d='M80 160h352M80 256h352M80 352h352'
                  />
                </svg>
              </button>
            </div>

            {/* mobile menu  */}
            {showNav && (
              <div className='lg:hidden absolute w-full bg-secondary top-12 left-0'>
                <ul className='flex flex-col w-full gap-8 items-center py-12  text-primary uppercase font-medium'>
                  <li className='hover:text-gradientright'>
                    <a href='#about'>About</a>
                  </li>
                  <li className='hover:text-gradientright'>
                    <a href='#roadmap'>Roadmap</a>
                  </li>
                  <li className='hover:text-gradientright'>
                    <a href='#team'>Team</a>
                  </li>
                </ul>
              </div>
            )}

            <div className='hidden lg:block justify-self-start'>
              <ul className='flex lg:gap-16 text-primary lg:text-lg uppercase font-medium'>
                <li className='hover:text-gradientright'>
                  <a href='#about'>About</a>
                </li>
                <li className='hover:text-gradientright'>
                  <a href='#roadmap'>Roadmap</a>
                </li>
                <li className='hover:text-gradientright'>
                  <a href='#team'>Team</a>
                </li>
              </ul>
            </div>
          </div>

          <div className='header__right hidden lg:block'>
            <div className='bg-gradient-to-r from-gradientright to-gradientleft text-center py-4 px-8 max-w-[12rem] rounded-lg  font-medium text-white'>
              <button>Connect</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
