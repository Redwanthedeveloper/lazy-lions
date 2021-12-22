import React from 'react';
import Slider from 'react-slick';
import sliderImage1 from '../assets/images/18.png';
import sliderImage2 from '../assets/images/19.png';
import sliderImage3 from '../assets/images/20.png';
import sliderImage7 from '../assets/images/24.png';
import sliderImage8 from '../assets/images/25.png';
import sliderImage9 from '../assets/images/26.png';
import sliderImage10 from '../assets/images/27.png';
import sliderImage11 from '../assets/images/28.png';
import sliderImage12 from '../assets/images/29.png';
import sliderImage13 from '../assets/images/30.png';
import sliderImage14 from '../assets/images/31.png';
import sliderImage15 from '../assets/images/32.png';
import sliderImage16 from '../assets/images/33.png';
import sliderImage17 from '../assets/images/34.png';
import sliderImage18 from '../assets/images/35.png';
import sliderImage19 from '../assets/images/36.png';
import sliderImage20 from '../assets/images/37.png';
import sliderImage21 from '../assets/images/38.png';
import sliderImage22 from '../assets/images/39.png';

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
    dots: false,
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
              <img
                src={sliderImage1}
                alt=''
                className='max-w-full rounded-xl'
              />
            </div>

            <div className='p-4 lg:p-8'>
              <img
                src={sliderImage2}
                alt=''
                className='max-w-full rounded-xl'
              />
            </div>

            <div className='p-4 lg:p-8'>
              <img
                src={sliderImage3}
                alt=''
                className='max-w-full rounded-xl'
              />
            </div>

            <div className='p-4 lg:p-8'>
              <img
                src={sliderImage7}
                alt=''
                className='max-w-full rounded-xl'
              />
            </div>

            <div className='p-4 lg:p-8'>
              <img
                src={sliderImage8}
                alt=''
                className='max-w-full rounded-xl'
              />
            </div>

            <div className='p-4 lg:p-8'>
              <img
                src={sliderImage9}
                alt=''
                className='max-w-full rounded-xl'
              />
            </div>

            <div className='p-4 lg:p-8'>
              <img
                src={sliderImage10}
                alt=''
                className='max-w-full rounded-xl'
              />
            </div>

            <div className='p-4 lg:p-8'>
              <img
                src={sliderImage11}
                alt=''
                className='max-w-full rounded-xl'
              />
            </div>

            <div className='p-4 lg:p-8'>
              <img
                src={sliderImage12}
                alt=''
                className='max-w-full rounded-xl'
              />
            </div>

            <div className='p-4 lg:p-8'>
              <img
                src={sliderImage13}
                alt=''
                className='max-w-full rounded-xl'
              />
            </div>

            <div className='p-4 lg:p-8'>
              <img
                src={sliderImage14}
                alt=''
                className='max-w-full rounded-xl'
              />
            </div>

            <div className='p-4 lg:p-8'>
              <img
                src={sliderImage15}
                alt=''
                className='max-w-full rounded-xl'
              />
            </div>

            <div className='p-4 lg:p-8'>
              <img
                src={sliderImage16}
                alt=''
                className='max-w-full rounded-xl'
              />
            </div>

            <div className='p-4 lg:p-8'>
              <img
                src={sliderImage17}
                alt=''
                className='max-w-full rounded-xl'
              />
            </div>

            <div className='p-4 lg:p-8'>
              <img
                src={sliderImage18}
                alt=''
                className='max-w-full rounded-xl'
              />
            </div>

            <div className='p-4 lg:p-8'>
              <img
                src={sliderImage19}
                alt=''
                className='max-w-full rounded-xl'
              />
            </div>

            <div className='p-4 lg:p-8'>
              <img
                src={sliderImage20}
                alt=''
                className='max-w-full rounded-xl'
              />
            </div>

            <div className='p-4 lg:p-8'>
              <img
                src={sliderImage21}
                alt=''
                className='max-w-full rounded-xl'
              />
            </div>

            <div className='p-4 lg:p-8'>
              <img
                src={sliderImage22}
                alt=''
                className='max-w-full rounded-xl'
              />
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default ImageSlider;
