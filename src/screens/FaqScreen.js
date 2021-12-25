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
                className='text-left border-b-[1px] border-bsecondary border-opacity-30'
                data-aos='fade-up'
                data-aos-duration='1000'
              >
                <div className='py-4 sm:py-6  w-full text-sm sm:text-lg font-bold text-left focus:outline-none focus-visible:ring focus-visible:ring-opacity-75'>
                  <SingleFaq
                    title='What inspired babbling baboon club Hive?'
                    content='This project has been created by a team of NFT & Nature enthusiasts. We believe in NFTs as an expressional way to provide charitable contribution through utility benefits for the holders. Furthermore, as an instrument to develop support networks for charitable contribution and conservation efforts.'
                  />
                </div>
              </div>

              <div
                className='text-left border-b-[1px] border-bsecondary border-opacity-30'
                data-aos='fade-up'
                data-aos-duration='1000'
              >
                <div className='py-4 sm:py-6  w-full text-sm sm:text-lg font-bold text-left focus:outline-none focus-visible:ring focus-visible:ring-opacity-75'>
                  <SingleFaq
                    title='What are babbling baboon club NFTs?'
                    content='babbling baboon club NFTs are a collection of 8,000 digital art pieces of bees minted on the Solana blockchain. Owning a babbling baboon club NFT will give you access to very exclusive events and features : charity donations, hive sponsoring, P2E Blockchain game, percentage of royalties, community DAO, free access to a respected artist collection, NFT staking, Exclusive babbling baboon club Merchandise and Giveaways.'
                  />
                </div>
              </div>

              <div
                className='text-left border-b-[1px] border-bsecondary border-opacity-30'
                data-aos='fade-up'
                data-aos-duration='1000'
              >
                <div className='py-4 sm:py-6  w-full text-sm sm:text-lg font-bold text-left focus:outline-none focus-visible:ring focus-visible:ring-opacity-75'>
                  <SingleFaq
                    title='How many Traits and Attributes ?'
                    content={`'Our unique collection has 8 total properties and 100+ traits based around 4 of the world's most famous bees (BumbleBee, Honey Bee, Leaf Cutter Bee, AND Killer Bee) . Which hive will you join?'`}
                  />
                </div>
              </div>

              <div
                className='text-left border-b-[1px] border-bsecondary border-opacity-30'
                data-aos='fade-up'
                data-aos-duration='1000'
              >
                <div className='py-4 sm:py-6  w-full text-sm sm:text-lg font-bold text-left focus:outline-none focus-visible:ring focus-visible:ring-opacity-75'>
                  <SingleFaq
                    title='When will I be able to own my own babbling baboon club NFT?'
                    content='The bees will be released from The Hive in February, no specific date yet.'
                  />
                </div>
              </div>

              <div
                className='text-left border-b-[1px] border-bsecondary border-opacity-30'
                data-aos='fade-up'
                data-aos-duration='1000'
              >
                <div className='py-4 sm:py-6  w-full text-sm sm:text-lg font-bold text-left focus:outline-none focus-visible:ring focus-visible:ring-opacity-75'>
                  <SingleFaq
                    title='Where can I get my babbling baboon club NFT?'
                    content='You can get your hands on a babbling baboon club NFT on the Solana Marketplace.'
                  />
                </div>
              </div>

              <div
                className='text-left border-b-[1px] border-bsecondary border-opacity-30'
                data-aos='fade-up'
                data-aos-duration='1000'
              >
                <div className='py-4 sm:py-6  w-full text-sm sm:text-lg font-bold text-left focus:outline-none focus-visible:ring focus-visible:ring-opacity-75'>
                  <SingleFaq
                    title='What is the cost of a mint?'
                    content='0.5 Sol Pre sale, 1 sol Public Sale'
                  />
                </div>
              </div>

              <div
                className='text-left border-b-[1px] border-bsecondary border-opacity-30'
                data-aos='fade-up'
                data-aos-duration='1000'
              >
                <div className='py-4 sm:py-6  w-full text-sm sm:text-lg font-bold text-left focus:outline-none focus-visible:ring focus-visible:ring-opacity-75'>
                  <SingleFaq
                    title='Are babbling baboon club supporting charities?'
                    content='Yes! The babbling baboon club Foundation will allocate up to 20% of sales & royalties. managed through a DAO, to help worldwide bees. Join the Discord server to make an impact and learn more.'
                  />
                </div>
              </div>

              <div
                className='text-left border-b-[1px] border-bsecondary border-opacity-30'
                data-aos='fade-up'
                data-aos-duration='1000'
              >
                <div className='py-4 sm:py-6  w-full text-sm sm:text-lg font-bold text-left focus:outline-none focus-visible:ring focus-visible:ring-opacity-75'>
                  <SingleFaq
                    title='How can I get in touch?'
                    content='Follow us on Discord, Twitter, and Instagram. The best place for regular updates and announcements is the babbling baboon club Discord!'
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
