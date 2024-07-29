import React from 'react';
import Play from '../../components/Play';
import RoadmapMonth from '../../components/RoadmapMonth';
import './main.css';

function Game() {
  return (
    <>
      <div className="game">
        <div className="section-title title-style-two text-center mb-60">
          <span>Byte Builders Labs</span>
          <h2>Check our progress<span className="d-block">Play Byte Beasts</span></h2>
        </div>
        <Play />
        <RoadmapMonth
          completed={false}
          title="Upcoming work - August 2024"
          title2="Create First NFTs Byte Beasts Collection - In Progress"
          subtitle1="NFT Integration: Develop and test the NFT creation and trading system on Starknet"
          subtitle2="Byte Beasts Design: Create the initial set of Byte Beasts, focusing on the five elemental types"
          subtitle3="Art and Graphics: Begin the development of game assets and visual design"
          subtitle4="Team Assembly Mechanism: Implement the feature for players to assemble teams of Byte Beasts"
        />
      </div>
    </>
  )
}

export default Game;
