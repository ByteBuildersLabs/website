import React from 'react';
import StakeBox from '../../components/StakeBox/index';
import ManageRewards from '../../components/ManageRewards/index';
import MintRewards from '../../components/MintRewards/index';
import './main.css';

function Game() {
  return (
    <>
      <div className="game">
        <div className="section-title title-style-two text-center mb-60">
          <span>Stake</span>
          <h2>Block your Orbs <span className="d-block">Earn APY each month</span></h2>
        </div>

        <StakeBox />
        <ManageRewards />
        <MintRewards />
      </div>
    </>
  )
}

export default Game;
