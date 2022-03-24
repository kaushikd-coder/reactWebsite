import React from "react";
import Common from './Common';
import img from '../img/450.jpg';
const Home = () => {
  return (
    <>
         <Common
          name = 'Grow your business with'
          imgsrc = {img}
          visit = './services'
          btname = 'Get Started'
          />
        </>
  );
};

export default Home;
