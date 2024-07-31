import React from 'react';
import { Link } from "react-router-dom";
import { useWeb3React } from '@web3-react/core';
import { useMysticsAnimalsData } from '../../hooks/useMysticAnimalsData';
import { useTribesMasksData } from '../../hooks/useTribeMasksData';
import rewardPic from '../../assets/img/vault.gif';
import './main.css';

interface nftMetaData {
  name: any,
  image: any,
  tokenId: any,
  owner: any,
}

function NftHall() {
  const { account, active } = useWeb3React();
  const { animals } = useMysticsAnimalsData();
  const { masks } = useTribesMasksData();

  return (
    <>
      {<>
        <div className="nft-box section-tab yellow-border">
          <div className="d-flex align-items-center">
            <div className="col-8">
              <p className={'title'}>
                This is your vault <span>Your Byte Beasts live here</span> You'll see It here
              </p>
            </div>
            <div className="col-4 d-flex justify-content-end">
              <img src={rewardPic} className="section-tab-pet" alt="" />
            </div>
          </div>
          <div className="collection row">
            {
              animals.map(({ name, image, tokenId, owner }: nftMetaData) => {
                if (owner === account) {
                  return <Link key={tokenId} to={`/nftroom/mysticAnimals/${tokenId}`} className="col-4 yellow">
                    <div className="nft-card">
                      <img src={image} alt="" />
                      <p>{name}</p>
                    </div>
                  </Link>
                }
              })
            }
          </div>
          <div className="collection row">
            {
              masks.map(({ name, image, tokenId, owner }: nftMetaData) => {
                if (owner === account) {
                  return <Link key={tokenId} to={`/nftroom/tribeMasks/${tokenId}`} className="col-4 yellow">
                    <div className="nft-card">
                      <img src={image} alt="" />
                      <p>{name}</p>
                    </div>
                  </Link>
                }
              })
            }
          </div>
        </div>
      </>
      }
    </>
  )
}

export default NftHall;