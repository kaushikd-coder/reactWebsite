import React from 'react';
import Common from './Common';
import img from '../img/iconic_45.png';
const About = () =>{
    return(
        <>
         <Common
          name = 'Welcome to About Page'
          imgsrc = {img}
          visit = './contact'
          btname = 'Contact Now'
          />
        </>
    )
}

export default About;

