import React, {Component} from 'react';
import './Header.css';

class Header extends Component {
    render(){
        return(
        <div className="Header">
            <img src="image1.jpg" alt="domki"/>
            <div className="title">
                <p id="firstline">Witaj na</p>
                <p id="secondline">domki letniskowe</p>
                <p id="thirdline">NA MALOWNICZYM ROZTOCZU</p>
            </div>
        </div>);
    }
}

export default Header;
