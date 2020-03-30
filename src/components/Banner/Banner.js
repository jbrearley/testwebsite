import React from 'react';
import './Banner.scss';

const Banner = () => {
  return (
    <section className='section-banner'>
      <div className='wrapper flex to-end'>
        <ul className='banner-ul'>
          <li>
            <a
              href='https://www.linkedin.com/in/josh-brearley-4a2b04187/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i
                className='fab fa-linkedin fa-lg banner-fa-res'
                style={{ color: '#1DA1F1' }}
              ></i>
            </a>
          </li>
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
      </div>
    </section>
  );
};

export default Banner;