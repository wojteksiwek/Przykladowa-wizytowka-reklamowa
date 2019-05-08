import React, {Component} from 'react';
import './Body.css';
import House1 from './BodyComponents/House1';
import House2 from './BodyComponents/House2';
import Attractions from './BodyComponents/Attractions';

class Body extends Component {
    render(){
        return(
        <div className='Body'>
            <House1/>
            <House2/>
            <Attractions/>
        </div>);
    }
}

export default Body;
