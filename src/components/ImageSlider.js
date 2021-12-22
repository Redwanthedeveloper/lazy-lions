import React from 'react';
import Slider from 'react-slick';
import sliderImage from '../assets/images/item.png';

const ImageSlider = () => {
  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 5,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className='mt-24 pt-12'>
        <div className='container mx-auto px-4 lg:px-0'>
          <h3 className=' text-4xl font-bold text-white'>Our Items</h3>
          <p className='py-12 text-primary text-lg w-full lg:w-2/4'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem
            ab porro expedita voluptate praesentium dignissimos, magnam est
            saepe labore. Officia!
          </p>
          <Slider {...settings}>
            <div className='p-4 lg:p-8'>
              <img src={sliderImage} alt='' className='max-w-full rounded-xl' />
            </div>

            <div className='p-4 lg:p-8'>
              <img src={sliderImage} alt='' className='max-w-full rounded-xl' />
            </div>

            <div className='p-4 lg:p-8'>
              <img src={sliderImage} alt='' className='max-w-full rounded-xl' />
            </div>
            <div className='p-4 lg:p-8'>
              <img src={sliderImage} alt='' className='max-w-full rounded-xl' />
            </div>
            <div className='p-4 lg:p-8'>
              <img src={sliderImage} alt='' className='max-w-full rounded-xl' />
            </div>

            <div className='p-4 lg:p-8'>
              <img src={sliderImage} alt='' className='max-w-full rounded-xl' />
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default ImageSlider;
