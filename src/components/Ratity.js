import React from 'react';
import rarityImage1 from '../assets/images/11.png';
import rarityImage2 from '../assets/images/12.png';
import rarityImage3 from '../assets/images/13.png';

const Ratity = () => {
  return (
    <>
      <div className='rarity mt-24 pt-12' id='about'>
        <div className='container mx-auto px-4 lg:px-0'>
          <div className='grid lg:grid-cols-2 gap-6 lg:gap-40 items-center'>
            <div className='rarity__left'>
              <h3 className=' text-4xl font-bold text-white'>About Us</h3>
              <p className='py-12 text-primary text-lg'>
                The Babbling Baboons have been found roaming around causing
                havoc! We need your help to capture and tame these silly things
                before it’s too late. Although we love to have fun and joke
                around, this project is not going to be a mint and resell but an
                ongoing development and formation of a community that we would
                love to keep growing and improve for all holders. We take it
                upon ourselves to prove that the Babbling Baboon Club consists
                of much more than "just jpegs" and will provide future utility.
                Utilities mentioned in the roadmap are only the beginning of
                what we want to do and give to you but we cannot jump to that
                straight away and will be an ongoing but rewarding process.
                Babbling Baboons are not just a club but a family &lt; 3 We
                welcome all and are looking forward to you and the future… Now
                let’s catch these fools!
              </p>
              {/* <div className='bg-gradient-to-r from-gradientright to-gradientleft text-center py-4 px-8 max-w-[12rem] rounded-lg font-medium text-white'>
                <a href='http://' target='_blank' rel='noopener noreferrer'>
                  Learn more
                </a>
              </div> */}
            </div>
            <div className='rarity__right'>
              <div className='flex gap-8 items-center'>
                <div className=''>
                  <img src={rarityImage1} alt='' className='rounded-lg' />
                </div>
                <div className='flex flex-col gap-8'>
                  <img src={rarityImage2} alt='' className='rounded-lg' />
                  <img src={rarityImage3} alt='' className='rounded-lg w-40' />
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
