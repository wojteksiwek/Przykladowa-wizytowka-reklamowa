import React, {Component} from 'react';
import './Header.css';
import $ from 'jquery';

class Header extends Component {

    handleBackground = () => {
        $('#idHeader').css({
            'opacity': 2*(1-$(document).scrollTop()/$('#idHeader').outerHeight())
        });
    }


    componentDidMount(){
        $(document).on("scroll",this.handleBackground);
    }
    
    render(){
        return(
        <div className="Header" id='idHeader'>
            <div className="title">
                <p id="firstline">Witaj na</p>
                <p id="secondline">domki letniskowe</p>
                <p id="thirdline">NA MALOWNICZYM ROZTOCZU</p>
            </div>
        </div>);
    }
}

export default Header;
