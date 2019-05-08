import React, {Component} from 'react';
import './Nav.css';

class Nav extends Component {
    render(){
        return(
        <div className="Nav">
            <div className="logo">
                <img src="logo.jpg" alt="logo"/>
            </div>
            <ul>
                <li>HOME</li>
                <li>DOMEK TRÓJKĄTNY</li>
                <li>DOMEK ROZŁOŻYSTY</li>
                <li>WIRTUALNY SPACER</li>
                <li>ATRAKCJE</li>
                <li>KAJAKI</li>
                <li>KONTAKT</li>                
            </ul>
        </div>
        );
    }
}

export default Nav;
