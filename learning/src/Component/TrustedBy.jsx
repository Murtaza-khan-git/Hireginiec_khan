import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import logo from '../images/hire.png'
import customer1 from  '../images/customer-1.png'
import customer2 from  '../images/customer-3.png'
import customer3 from  '../images/customer-4.png'
import customer4 from  '../images/customer-5.png'
import customer6 from  '../images/customer-6.png'
import customer7 from  '../images/customer-7.png'
import customer8 from  '../images/customer-8.png'
import customer9 from  '../images/customer-9.png'
import customer11 from  '../images/customer-11.png'
import customer12 from  '../images/customer-12.png'
import customer13 from  '../images/customer-13.png'
import customer14 from  '../images/customer-14.png'
import customer15 from  '../images/customer-15.png'
import customer16 from  '../images/customer-16.png'
const TrustedBy = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-blue-500 py-8">
      <h2 className="text-center text-white font-bold text-2xl mb-6">
        Trusted By
      </h2>
      <div className="px-6">
        <Slider {...settings}>
          {/* LOGOS */}
          <div className="flex justify-center">
            <img src={customer1} alt="Target" className="h-20" />
          </div>
          <div className="flex justify-center">
            <img src={customer2} alt="Ola" className="h-20" />
          </div>
          <div className="flex justify-center">
            <img src={customer3} alt="Ivy" className="h-20" />
          </div>
          <div className="flex justify-center">
            <img src={customer4} alt="IG" className="h-20" />
          </div>
          <div className="flex justify-center">
            <img src={customer6} alt="Broadridge" className="h-20" />
          </div>
          <div className="flex justify-center">
            <img src={customer7} alt="Broadridge" className="h-20" />
          </div>
          <div className="flex justify-center">
            <img src={customer8} alt="Broadridge" className="h-20" />
          </div>
          <div className="flex justify-center">
            <img src={customer9} alt="Broadridge" className="h-20" />
          </div>
          <div className="flex justify-center">
            <img src={customer11} alt="Broadridge" className="h-20" />
          </div>
          <div className="flex justify-center">
            <img src={customer12} alt="Broadridge" className="h-20" />
          </div>
          <div className="flex justify-center">
            <img src={customer13} alt="Broadridge" className="h-20" />
          </div>
          <div className="flex justify-center">
            <img src={customer14} alt="Broadridge" className="h-20" />
          </div>
          <div className="flex justify-center">
            <img src={customer15} alt="Broadridge" className="h-20" />
          </div>
          <div className="flex justify-center">
            <img src={customer16} alt="Broadridge" className="h-20" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default TrustedBy;