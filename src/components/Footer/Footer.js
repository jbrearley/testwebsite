import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Footer.scss';

const Footer = () => (
  <footer>
    <div className='wrapper flex footer-container'>
      <article>
        <h4 className='footer-header'>Site</h4>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/experience'>Experience</Link>
          </li>
          <li>
            <Link to='/projects'>Projects</Link>
          </li>
          <li>
            <Link to='/events'>Events</Link>
          </li>
        </ul>
      </article>
      <article>
        <h4 className='footer-header'>Follow me</h4>
        <ul className='footer-ul'>
          <li>
            <a
              href='https://github.com/jbrearley'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fab fa-github fa-lg'></i>
            </a>
          </li>
        </ul>
      </article>
    </div>
  </footer>
);

export default withRouter(Footer);