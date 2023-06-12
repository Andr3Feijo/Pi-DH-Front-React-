import React from 'react';
import img1Carrossel from '../../images/banner-ip-01.png'
import img2Carrossel from '../../images/banner-ip-02.png'
import img3Carrossel from '../../images/banner-ip-03.png'

const Carrossel = () => {

   return ( <>
    
      
    <div className="index-carrossel">
    
      <a className="slick-slide" href="#">
        <img src={img1Carrossel} alt=""/>
      </a>
       <a className="slick-slide" href="#">
        <img src={img2Carrossel} alt=""/>
      </a>
      <a className="slick-slide" href="#">
        <img src={img3Carrossel} alt=""/>
      </a>
      </div>
      <div className="dots"></div>

     
    </>)

}

export default Carrossel