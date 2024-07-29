import React from 'react';
import dragon2 from '../../assets/img/team.jpg';
import './main.css';

function RoadmapTeam() {
  return (
    <div className="new-contract-box section-tab yellow-border mt-4">
      <div className='d-flex align-items-center mb-2'>
        <p className={'title'}>
          <span className='d-block'>July 2024</span>
          Starknet Hacker House - Brussels 🇧🇪
        </p>
      </div>
      <div>
        <p className={'subtitle'}>
        Our team is back home 🇨🇷 after spending the last two weeks in Brussels attending the Starknet Hacker House and Starknet CC. In this thread, we'll share the main highlights:
        </p>
      </div>
      <div className="new yellow-border mb-3">
        <img src={dragon2} alt="" />
      </div>
      <p className={'subtitle text-center'}>
        Byte Builders Team with Tale Weaver and David Barreto
      </p>
    </div>
  )
}

export default RoadmapTeam;
