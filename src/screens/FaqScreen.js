import React from 'react';
import SingleFaq from '../components/SingleFaq';

const FaqScreen = () => {
  return (
    <>
      <div className='faq' id='faq'>
        <div className='px-4 lg:px-0 container mx-auto h-full'>
          <div className='lg:h-[60vh] h-[50vh]'>
            <div className='flex-col flex  h-full gap-20 justify-between items-center'>
              <div className=' flex flex-col justify-center items-center h-full'>
                <div className='text-3xl lg:text-6xl font-bold text-transparent bg-gradient-to-r from-gradientright to-gradientleft bg-clip-text lg:leading-[5rem] lg:pt-24 pt-24'>
                  Frequently Ask Question
                </div>
              </div>
            </div>
          </div>
          <div className='faq__items'>
            <div className='px-4 pt-4 sm:pt-8 mb-6'>
              <div
                className='text-left '
                data-aos='fade-up'
                data-aos-duration='1000'
              >
                <div className='py-4 sm:py-6  w-full text-sm sm:text-lg font-bold text-left focus:outline-none focus-visible:ring focus-visible:ring-opacity-75'>
                  <SingleFaq
                    title='TEXT TEXTTEXTTEXTTEXTTEXTTEXTTEXT'
                    content='TEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXT'
                  />
                </div>
              </div>

              <div
                className='text-left '
                data-aos='fade-up'
                data-aos-duration='1000'
              >
                <div className='py-4 sm:py-6  w-full text-sm sm:text-lg font-bold text-left focus:outline-none focus-visible:ring focus-visible:ring-opacity-75'>
                  <SingleFaq
                    title='TEXT TEXTTEXTTEXTTEXTTEXTTEXTTEXT'
                    content='TEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXT'
                  />
                </div>
              </div>

              <div
                className='text-left '
                data-aos='fade-up'
                data-aos-duration='1000'
              >
                <div className='py-4 sm:py-6  w-full text-sm sm:text-lg font-bold text-left focus:outline-none focus-visible:ring focus-visible:ring-opacity-75'>
                  <SingleFaq
                    title='TEXT TEXTTEXTTEXTTEXTTEXTTEXTTEXT'
                    content='TEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXT'
                  />
                </div>
              </div>

              <div
                className='text-left '
                data-aos='fade-up'
                data-aos-duration='1000'
              >
                <div className='py-4 sm:py-6  w-full text-sm sm:text-lg font-bold text-left focus:outline-none focus-visible:ring focus-visible:ring-opacity-75'>
                  <SingleFaq
                    title='TEXT TEXTTEXTTEXTTEXTTEXTTEXTTEXT'
                    content='TEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXT'
                  />
                </div>
              </div>

              <div
                className='text-left '
                data-aos='fade-up'
                data-aos-duration='1000'
              >
                <div className='py-4 sm:py-6  w-full text-sm sm:text-lg font-bold text-left focus:outline-none focus-visible:ring focus-visible:ring-opacity-75'>
                  <SingleFaq
                    title='TEXT TEXTTEXTTEXTTEXTTEXTTEXTTEXT'
                    content='TEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXT'
                  />
                </div>
              </div>

              <div
                className='text-left '
                data-aos='fade-up'
                data-aos-duration='1000'
              >
                <div className='py-4 sm:py-6  w-full text-sm sm:text-lg font-bold text-left focus:outline-none focus-visible:ring focus-visible:ring-opacity-75'>
                  <SingleFaq
                    title='TEXT TEXTTEXTTEXTTEXTTEXTTEXTTEXT'
                    content='TEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXT'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FaqScreen;
