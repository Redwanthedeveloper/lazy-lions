import React from 'react';

const Banner = () => {
  return (
    <div className='banner lg:h-screen h-full'>
      <div className='container mx-auto h-full px-4 lg:px-0'>
        <div className='flex-col flex lg:flex-row h-full gap-20 justify-between items-center'>
          <div className='max-w-2xl flex flex-col justify-center h-full'>
            <div className='text-3xl lg:text-6xl font-bold text-transparent bg-gradient-to-r from-gradientright to-gradientleft bg-clip-text lg:leading-[5rem] lg:pt-24 pt-24'>
              WELCOME TO THE BABBLING BABOON CLUB!
            </div>
            <p className='py-12 text-primary text-lg'>
              NFT Community for all red bottom lovers <br />
              A collection of 2,222 of the most Babbling Baboons <br />
              Mint cost will be 0.04 eth + gas
            </p>
            <div className='bg-gradient-to-r from-gradientright to-gradientleft text-center py-4 px-8 max-w-[12rem] rounded-lg text-xl font-medium text-white'>
              <a href='http://' target='_blank' rel='noopener noreferrer'>
                Join Us
              </a>
            </div>
          </div>
          <div className='card bg-secondary px-8 py-16 rounded-xl'>
            <p className='py-8 font-bold text-center text-white text-lg'>
              Setup your wallet
            </p>
            <p className='text-center text-sm text-white'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              in recusandae earum ea voluptatibus fuga quibusdam
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
