import React from 'react';
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';
import './Timeline.scss';
 
const TimelineComp = () => {
  return (
    <Timeline lineColor={'#ddd'}>
      <TimelineItem
        key='001'
        dateText='Feb 2020 – Present'
        dateInnerStyle={{ background: '#2c4d6e', color: '#fff' }}
      >
        <h3 className='padding-bottom-sm'>
          Junior Developer in Training, Code Nation
        </h3>
        <p>
          • Learning the fundamentals of frontend & backend development including but not limited to; HTML5, CSS3, JavaScript,
          ReactJS, MongoDB, SQL & Git. Training to understand & build reusable, scalable code to ensure readiness for a corperate 
          setting once graduated. (Graduation date may be affected by Covid-19). 
        </p>
        <p>
          • Specialising in ReactJS. 
        </p>
        <p>
          • Articles on my journey into tech with code nation can be found <a href="https://www.linkedin.com/in/josh-brearley-4a2b04187/detail/recent-activity/posts/"> 
          here.</a>
        </p>
      </TimelineItem>
      <TimelineItem
        key='002'
        dateText='July 2019 – Jan 2020'
        dateInnerStyle={{ background: '#2c4d6e', color: '#fff' }}
        bodyContainerStyle={{
          background: '#ddd',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)'
        }}
      >
        <h3 className='padding-bottom-sm'>IT Recruitment Consultant, Maxwell Bond</h3>
        <h4>JavaScript/.Net/PHP</h4>
        <p>
          • Originally started out in the .Net market before moving over to frontend. References can be found on my Linked In page.
        </p>
      </TimelineItem>
      <TimelineItem
        key='003'
        dateText='Sep 2016 – July 2019'
        dateInnerStyle={{ background: '#2c4d6e', color: '#fff' }}
      >
        <h3 className='padding-bottom-sm'>
          Bachelor's Degree, Business Administration, Management & Operations.
        </h3>
        <h4>The Manchester Metropolitan University | 2:1</h4>
        <p>• Covered Globalisation, Administration, Entrepreneurship, Accountancy & Finance, Economics, Business & Technology.
        </p>
      </TimelineItem>
      <TimelineItem
        key='004'
        dateText='Sep 2014 –  June 2016'
        dateInnerStyle={{ background: '#2c4d6e', color: '#fff' }}
        bodyContainerStyle={{
          background: '#ddd',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)'
        }}
      >
        <h3 className='padding-bottom-sm'>
          Business Studies, Economics & Accountancy. 
        </h3>
        <h4>Runshaw College</h4>
        <p>• Achieved A, A, A.</p>
      </TimelineItem>
      <TimelineItem
        key='005'
        dateText='2008 – 2013'
        dateInnerStyle={{ background: '#2c4d6e', color: '#fff' }}
      >
        <h3 className='padding-bottom-sm'>
          Parklands Academy
        </h3>
        <p>
          GCSE: 
          • English – A 
          • Maths - A 
          • Science – C 
          • ICT - A 
          • Graphics - C 
          • R.E - A 
          • Music - C 
        </p>
      </TimelineItem>
    </Timeline>
  );
};

export default TimelineComp;