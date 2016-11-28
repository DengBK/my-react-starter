import React from 'react';
import { Carousel} from 'react-bootstrap';
import image01 from './img/img1.png';
import image02 from './img/img2.png'

export  default class MyCarousel extends React.Component{
    render(){
        return (
            <Carousel>
                <Carousel.Item>
                    <img width={1280} height={230} alt="pic1" src={image01}/>
                </Carousel.Item>
                <Carousel.Item>
                    <img width={1280} height={230} alt="pic2" src={image02}/>
                </Carousel.Item>
            </Carousel>
        );
    }
}