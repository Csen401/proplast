import React, { useRef } from 'react'
import Slider from 'react-slick';
import Project from './Project';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from 'styled-components';




let data = [
    {
        img : require("../../AllProducts/img1.jpg"),
        disc : "Lolipop Sticks -- any lenght and weight -- price : 70 egp/kg "
    },
    {
      img : require("../../AllProducts/img2.jpg"),
      disc : "Flexible drinking straws -- Diameter 6mm -- lenght 22 cm -- packing 100pieces x 60 bags per carton -- price 400 egp per catron "
    },
    {
      img : require("../../AllProducts/img3.jpg"),
      disc : "awel wahed -- Artistic straws -- dianeter 6mm -- long flexible lenght 30 cm -- packing 100 pieces x 50 bags per carton-- price 600 egp"
    },
    {
      img : require("../../AllProducts/img5.jpg"),
      disc : "5"
    },
    {
      img : require("../../AllProducts/img6.jpg"),
      disc : "6"
    },
    {
      img : require("../../AllProducts/img7.jpg"),
      disc : "7!"
    },
    {
      img : require("../../AllProducts/img8.jpg"),
      disc : "8"
    },
    {
      img : require("../../AllProducts/img9.jpg"),
      disc : "9"
    },
    {
      img : require("../../AllProducts/img10.jpg"),
      disc : "10"
    },
    {
      img : require("../../AllProducts/img11.jpg"),
      disc : "11"
    },
    {
      img : require("../../AllProducts/img12.jpg"),
      disc : "12"
    },
    {
      img : require("../../AllProducts/img13.jpg"),
      disc : "13"
    },
    {
      img : require("../../AllProducts/img14.jpg"),
      disc : "14"
    },
    {
      img : require("../../AllProducts/img16.jpg"),
      disc : "15"
    }
];

var settings = {
    className: "center",
    centerMode: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows : false,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode : false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          centerMode : false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode : false
        }
      }
    ]
  };
const SliderComp = () => {
  const arrowRef = useRef(null);
    let sliderProject = "";
    sliderProject = data.map((item, i) => (
        <Project item = {item} key={i}/>
    ))
  return (
    <Container>
      <Slider ref={arrowRef} {...settings}>
      {sliderProject}
      </Slider>
      <Buttons>
        <button 
        onClick={() => arrowRef.current.slickPrev()}
        className='back'><IoIosArrowBack/></button>
        <button 
        onClick={() => arrowRef.current.slickNext()}
        className='next'><IoIosArrowForward/></button>
      </Buttons>
    </Container>
  )
}

export default SliderComp;

const Container = styled.div`
  position: relative;
`

const Buttons = styled.div`
  button{
    width: 2rem;
    height: 2rem;
    background-color: rgba(0, 0, 0, 0.100);
    cursor: pointer;
    color: #e46c25;
    border: none;
    position: absolute;
    top: 45%;
    right: -1rem;
  }

  .back{
    left: -1rem;
  }
`