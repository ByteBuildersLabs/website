import React from 'react';
import github from '../../assets/img/github-sign.png';
import twitter from '../../assets/img/twitter.png';
import unity from '../../assets/img/unity.png';
import './main.css';

function Footer() {
  return (
    <>
      <div className="footer">
        <a href='https://github.com/orgs/ByteBuildersLabs/repositories' target='_blank'>
          <img src={github} className='footer-logo' />
        </a>
        <a href='https://x.com/bytebuilderslab' target='_blank'>
          <img src={twitter} className='footer-logo' />
        </a>
        <a href='https://unity.com/' target='_blank'>
          <img src={unity} className='footer-logo' />
        </a>
        <a href='https://www.dojoengine.org/' target='_blank'>
          <img src='https://book.dojoengine.org/dojo-logo.svg' height={18} />
        </a>
      </div>
    </>
  )
}

export default Footer;
