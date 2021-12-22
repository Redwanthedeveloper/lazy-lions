import React from 'react';
import rarityImage from '../assets/images/item.png';

const Ratity = () => {
  return (
    <>
      <div className='rarity mt-24 pt-12' id='about'>
        <div className='container mx-auto px-4 lg:px-0'>
          <div className='grid lg:grid-cols-2 gap-6 lg:gap-40 items-center'>
            <div className='rarity__left'>
              <h3 className=' text-4xl font-bold text-white'>
                Every lion is a KING.
              </h3>
              <p className='py-12 text-primary text-lg'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptatem ab porro expedita voluptate praesentium dignissimos,
                magnam est saepe labore. Officia!
              </p>
              <div className='bg-gradient-to-r from-gradientright to-gradientleft text-center py-4 px-8 max-w-[12rem] rounded-lg font-medium text-white'>
                <a href='http://' target='_blank' rel='noopener noreferrer'>
                  Learn more
                </a>
              </div>
            </div>
            <div className='rarity__right'>
              <div className='flex gap-8 items-center'>
                <div className=''>
                  <img src={rarityImage} alt='' className='rounded-lg' />
                </div>
                <div className='flex flex-col gap-8'>
                  <img src={rarityImage} alt='' className='rounded-lg' />
                  <img src={rarityImage} alt='' className='rounded-lg w-40' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ratity;
