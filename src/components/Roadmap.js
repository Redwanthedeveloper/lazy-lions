import React from 'react';

const Roadmap = () => {
  return (
    <>
      <div className='roadmap mt-24 pt-12' id='roadmap'>
        <div className='container mx-auto px-4 lg:px-0'>
          <div className='roadmap__wrapper grid  lg:grid-cols-3 gap-10 lg:gap-20'>
            <div className='roadmap__brief md:col-span-2 lg:col-span-2'>
              <h3 className=' text-4xl font-bold text-white'>The Roadmap</h3>
              <p className='py-12 text-primary text-lg'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptatem ab porro expedita voluptate praesentium dignissimos,
                magnam est saepe labore. Officia!
              </p>
            </div>
            <div className='roadmap__item '>
              <div className='count '>
                <h1 className='font-bold text-3xl bg-gradient-to-r  from-gradientright to-gradientleft w-12 text-center text-white rounded-full h-12 flex items-center justify-center'>
                  1
                </h1>
              </div>
              <h3 className='text-left font-bold text-white text-2xl py-6'>
                Create NFT with ease
              </h3>
              <p className='text-primary'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea hic
                atque nostrum accusantium commodi temporibus ad quas
                voluptatibus minus quibusdam.
              </p>
            </div>

            <div className='roadmap__item '>
              <div className='count '>
                <h1 className='font-bold text-3xl bg-gradient-to-r  from-gradientright to-gradientleft w-12 text-center text-white rounded-full h-12 flex items-center justify-center'>
                  2
                </h1>
              </div>
              <h3 className='text-left font-bold text-white text-2xl py-6'>
                Create NFT with ease
              </h3>
              <p className='text-primary'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea hic
                atque nostrum accusantium commodi temporibus ad quas
                voluptatibus minus quibusdam.
              </p>
            </div>

            <div className='roadmap__item '>
              <div className='count '>
                <h1 className='font-bold text-3xl bg-gradient-to-r  from-gradientright to-gradientleft w-12 text-center text-white rounded-full h-12 flex items-center justify-center'>
                  3
                </h1>
              </div>
              <h3 className='text-left font-bold text-white text-2xl py-6'>
                Create NFT with ease
              </h3>
              <p className='text-primary'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea hic
                atque nostrum accusantium commodi temporibus ad quas
                voluptatibus minus quibusdam.
              </p>
            </div>

            <div className='roadmap__item '>
              <div className='count '>
                <h1 className='font-bold text-3xl bg-gradient-to-r  from-gradientright to-gradientleft w-12 text-center text-white rounded-full h-12 flex items-center justify-center'>
                  4
                </h1>
              </div>
              <h3 className='text-left font-bold text-white text-2xl py-6'>
                Create NFT with ease
              </h3>
              <p className='text-primary'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea hic
                atque nostrum accusantium commodi temporibus ad quas
                voluptatibus minus quibusdam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Roadmap;
