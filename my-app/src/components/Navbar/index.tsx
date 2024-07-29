import React from 'react';
import { Link } from 'react-router-dom';
import nftIcon from '../../assets/img/purpleorb.gif';
import investIcon from '../../assets/img/orb.gif';
import stakeIcon from '../../assets/img/greenorb.gif';
import './main.css';

function Navbar() {
  return (
    <>
      <div className="navbar-bottom">
        <div className="container d-flex">
          {/* <Link to="/" className="button">
            <img src={homeIcon} alt="" />
            Home
          </Link> */}
          <Link to="/nftroom" className="button">
            <img src={stakeIcon} alt="" />
            Mint Beast
          </Link>
          <Link to="/game" className="button">
            <img src={investIcon} alt="" />
            Play Game
          </Link>
          <Link to="/roadmap" className="button">
            <img src={nftIcon} alt="" />
            Roadmap
          </Link>
          {/* <Link to="/wallet" className="button">
            <img src={walletIcon} alt="" />
            Wallet
          </Link> */}
        </div>
      </div>
    </>
  )
}

export default Navbar;
