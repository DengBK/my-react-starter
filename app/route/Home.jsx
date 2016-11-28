/**
 * Created by Homer on 2016/11/28.
 */
import React from 'react';
import {Button} from 'react-bootstrap' ;
import MyCarousel from '../components/MyCarousel';

export default class Home extends React.Component{
    render(){
        return(
            <div>
                <p>home</p>
                <Button bsStyle="info">some</Button>
                <button>something</button>
                <MyCarousel/>
            </div>

        );
    }
}