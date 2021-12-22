import React from 'react';
import teamImage from '../assets/images/item.png';

const Team = () => {
  return (
    <>
      <div className='team my-24 pt-12' id='team'>
        <div className='container mx-auto px-4 lg:px-0'>
          <h1 className='text-center text-4xl font-bold text-white'>
            Our Team
          </h1>
          <div className='card__wrapper grid md:grid-cols-2 lg:grid-cols-4 mt-24 gap-16'>
            <div className='card bg-secondary px-8 py-16 rounded-xl  '>
              <img
                src={teamImage}
                alt=''
                className='rounded-full w-40 mx-auto'
              />
              <p className='py-8 font-bold text-center text-white text-lg'>
                Henux
              </p>
              <p className='text-center text-sm text-white'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda in recusandae earum ea voluptatibus fuga quibusdam
              </p>
            </div>

            <div className='card bg-secondary px-8 py-16 rounded-xl  '>
              <img
                src={teamImage}
                alt=''
                className='rounded-full w-40 mx-auto'
              />
              <p className='py-8 font-bold text-center text-white text-lg'>
                Big T
              </p>
              <p className='text-center text-sm text-white'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda in recusandae earum ea voluptatibus fuga quibusdam
              </p>
            </div>

            <div className='card bg-secondary px-8 py-16 rounded-xl  '>
              <img
                src={teamImage}
                alt=''
                className='rounded-full w-40 mx-auto'
              />
              <p className='py-8 font-bold text-center text-white text-lg'>
                Benscuit
              </p>
              <p className='text-center text-sm text-white'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda in recusandae earum ea voluptatibus fuga quibusdam
              </p>
            </div>

            <div className='card bg-secondary px-8 py-16 rounded-xl  '>
              <img
                src={teamImage}
                alt=''
                className='rounded-full w-40 mx-auto'
              />
              <p className='py-8 font-bold text-center text-white text-lg'>
                Rizzle
              </p>
              <p className='text-center text-sm text-white'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda in recusandae earum ea voluptatibus fuga quibusdam
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
