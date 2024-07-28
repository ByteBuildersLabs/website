import React from 'react';
import monster from '../../assets/img/logo.jpg';
import './main.css';

function Homescreen() {
  return (
    <>
      <div className="homescreen">
        <div className="breadcrumb-content text-right">
          <h2><span>Welcome to Byte Beasts </span>OnChain Mobile Unity Game</h2>
        </div>
        <div className="breadcrumb-content text-left">
          <img src={monster} width="112" height="112" />
          <p>Connect your wallet and <span>Let's start</span></p>
        </div>
      </div>
    </>
  )
}

export default Homescreen;
