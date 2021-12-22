import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../redux/data/dataActions';

const Banner = () => {
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);
  const [claimingNft, setClaimingNft] = useState(false);
  const [feedback, setFeedback] = useState(`Click buy to mint your NFT.`);
  const [mintAmount, setMintAmount] = useState(1);
  const [CONFIG, SET_CONFIG] = useState({
    CONTRACT_ADDRESS: '',
    SCAN_LINK: '',
    NETWORK: {
      NAME: '',
      SYMBOL: '',
      ID: 0,
    },
    NFT_NAME: '',
    SYMBOL: '',
    MAX_SUPPLY: 1,
    WEI_COST: 0,
    DISPLAY_COST: 0,
    GAS_LIMIT: 0,
    MARKETPLACE: '',
    MARKETPLACE_LINK: '',
    SHOW_BACKGROUND: false,
  });

  const claimNFTs = () => {
    let cost = CONFIG.WEI_COST;
    let gasLimit = CONFIG.GAS_LIMIT;
    let totalCostWei = String(cost * mintAmount);
    let totalGasLimit = String(gasLimit * mintAmount);
    console.log('Cost: ', totalCostWei);
    console.log('Gas limit: ', totalGasLimit);
    setFeedback(`Minting your ${CONFIG.NFT_NAME}...`);
    setClaimingNft(true);
    blockchain.smartContract.methods
      .mint(CONFIG.CONTRACT_ADDRESS, mintAmount)
      .send({
        gasLimit: String(totalGasLimit),
        to: CONFIG.CONTRACT_ADDRESS,
        from: blockchain.account,
        value: totalCostWei,
      })
      .once('error', (err) => {
        console.log(err);
        setFeedback('Sorry, something went wrong please try again later.');
        setClaimingNft(false);
      })
      .then((receipt) => {
        console.log(receipt);
        setFeedback(
          `WOW, the ${CONFIG.NFT_NAME} is yours! go visit Opensea.io to view it.`
        );
        setClaimingNft(false);
        dispatch(fetchData(blockchain.account));
      });
  };

  const decrementMintAmount = () => {
    let newMintAmount = mintAmount - 1;
    if (newMintAmount < 1) {
      newMintAmount = 1;
    }
    setMintAmount(newMintAmount);
  };

  const incrementMintAmount = () => {
    let newMintAmount = mintAmount + 1;
    if (newMintAmount > 10) {
      newMintAmount = 10;
    }
    setMintAmount(newMintAmount);
  };

  const getData = () => {
    if (blockchain.account !== '' && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
    }
  };

  const getConfig = async () => {
    const configResponse = await fetch('/config/config.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
    const config = await configResponse.json();
    SET_CONFIG(config);
  };

  useEffect(() => {
    getConfig();
  }, []);

  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, [blockchain.account]);

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
              {data.totalSupply} / {CONFIG.MAX_SUPPLY}
            </p>
            {Number(data.totalSupply) >= CONFIG.MAX_SUPPLY ? (
              <>
                <p className='font-bold text-white'>The sale has ended.</p>
                <p className='font-bold text-white'>
                  You can still find {CONFIG.NFT_NAME} on
                </p>

                <a
                  target='_blank'
                  rel='noreferrer'
                  href={CONFIG.MARKETPLACE_LINK}
                >
                  {CONFIG.MARKETPLACE}
                </a>
              </>
            ) : (
              <>
                {blockchain.account === '' ||
                blockchain.smartContract === null ? (
                  <>
                    <p className='text-white font-semibold text-center'>
                      Connect to the {CONFIG.NETWORK.NAME} network
                    </p>
                    {/* <div className='connect  lg:py-4 lg:px-12 py-4 px-8 rounded-full transition-all delay-100 '>
                      <button
                        className='uppercase text-white'
                        onClick={(e) => {
                          e.preventDefault();
                          dispatch(connect());
                          getData();
                        }}
                      >
                        connect
                      </button>
                    </div> */}
                    {blockchain.errorMsg !== '' ? (
                      <>
                        <p className='err__msg text-center text-white'>
                          {blockchain.errorMsg}
                        </p>
                      </>
                    ) : null}
                  </>
                ) : (
                  <>
                    <p className='err__msg text-center text-white py-2'>
                      {feedback}
                    </p>

                    <>
                      <div className='buy__wrapper flex gap-6 items-center justify-center py-4'>
                        <div className=' px-4 py-0.5 rounded-sm text-white font-bold cursor-pointer'>
                          <button
                            className=''
                            disabled={claimingNft ? 1 : 0}
                            onClick={(e) => {
                              e.preventDefault();
                              decrementMintAmount();
                            }}
                          >
                            <span className='text-4xl'>-</span>
                          </button>
                        </div>

                        <p className='text-white font-bold text-xl border px-4 py-0.5 rounded-sm'>
                          {mintAmount}
                        </p>
                        <div className=' px-4 py-0.5 rounded-sm text-white font-bold cursor-pointer'>
                          <button
                            className=''
                            disabled={claimingNft ? 1 : 0}
                            onClick={(e) => {
                              e.preventDefault();
                              incrementMintAmount();
                            }}
                          >
                            <span className='text-2xl'>+</span>
                          </button>
                        </div>
                      </div>
                    </>
                    <>
                      <div>
                        <div className='bg-gradient-to-r from-gradientright to-gradientleft text-center py-4 px-8 max-w-[12rem] rounded-lg text-xl font-medium text-white mx-auto'>
                          <button
                            className='btn mint__btn text-white'
                            disabled={claimingNft ? 1 : 0}
                            onClick={(e) => {
                              e.preventDefault();
                              claimNFTs();
                              getData();
                            }}
                          >
                            <span>{claimingNft ? 'BUSY' : 'MINT'}</span>
                          </button>
                        </div>
                      </div>
                    </>
                  </>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
