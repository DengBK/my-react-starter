/*** Created by Homer on 2016/11/28.*/

import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Home from './route/Home';
import {Router, Route, hashHistory} from 'react-router'

class App extends React.Component {
    constructor() {
        super();
    }
    componentDidMount(){
    }
    render() {
        //JSX here!
        return (
            <Router history={hashHistory}>
                <Route path="/" component={Home}/>
            </Router>
        );
    }
}

const app = document.createElement('div');
$('body').append(app);
ReactDOM.render(<App />, app);