/**
 * Created by Homer on 2016/11/28.
 */
import React from 'react';
import {Button} from 'react-bootstrap' ;
import MyCarousel from '../components/MyCarousel';

export default class Home extends React.Component{
    handleClick(){
        alert('click');
    }
    render(){
        return(
            <div>
                <p onClick={this.handleClick.bind(this)}>home</p>
                <Button bsStyle="info" onClick={this.handleClick.bind(this)}>some</Button>
                <MyCarousel/>
            </div>

        );
    }
}