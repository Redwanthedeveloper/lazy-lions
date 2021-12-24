import React from 'react';

const NotFoundScreen = () => {
  return (
    <>
      <div className='notfound'>
        <div className='container mx-auto lg:px-0 px-4'>
          <div className='lg:h-[100vh] h-[100vh]'>
            <div className='flex-col flex  h-full gap-20 justify-between items-center'>
              <div className=' flex flex-col justify-center items-center h-full'>
                <div className='text-3xl lg:text-6xl font-bold text-transparent bg-gradient-to-r from-gradientright to-gradientleft bg-clip-text lg:leading-[5rem] lg:pt-24 pt-24'>
                  404 Your requested content was not found!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFoundScreen;
