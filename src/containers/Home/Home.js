import React from 'react';

import Banner from '../../components/Banner/Banner';
import './Home.scss';

function Home() {
  return (
    <React.Fragment>
      <Banner />
      <section className='section'>
        <div className='wrapper'>
          <article className='home-container'>
            <h2>Test Website - Learning purposes only.</h2>
            <p>
                I am currently training to become a JavaScript engineer at Code Nation & have aquired the following skills; HTML5,
                CSS, JavaScript, ReactJS & Git. 
              Diverse set of skills ranging from; HTML5, CSS/SCSS(Sass),
              JavaScript (Express, Node.js, Angular.js, Vue.js, React.js
              (Redux), TypeScript) jQuery, Python, AWS, PHP, SQL, and basic
              knowledge of other languages...
            </p>
          </article>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Home;