import React from 'react';
import { Carousel} from 'react-bootstrap';

export  default class MyCarousel extends React.Component{
    render(){
        return (
            <Carousel>
                <Carousel.Item>
                    <img width={900} height={500} alt="900x500" src=""/>
                </Carousel.Item>
                <Carousel.Item>
                    <img width={900} height={500} alt="900x500" src="/img/img2.png"/>
                </Carousel.Item>
            </Carousel>
        );
    }
}