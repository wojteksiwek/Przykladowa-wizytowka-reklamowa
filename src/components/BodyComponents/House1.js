import React, {Component} from 'react';
import './House.css';

class House1 extends Component {
    render(){
        return(
        <div className="House House1">
            <div className="House-description">
                <p className="houseDescFirstLine">Poznaj</p>
                <p className="houseDescSecondLine">DOMEK ROZŁOŻYSTY</p>
                <p className="HouseDesctext">Domki są 6 osobowe w pełni wyposażone. W salonie jest aneks kuchenny (kuchenka+ lodówka+ naczynia), stół z krzesłami, komoda z telewizorem oraz kanapa rozkładana. Z salonu są drzwi do łazienki z prysznic i wc. Ponadto jest drugi pokój z dwoma łóżkami piętrowymi i szafeczką nocną. Na tarasie jest grill oraz komplet mebli ogrodowych.</p>
                <p className="HouseDescMoreButton">więcej</p>
            </div>
            <div className="House-photo">
                <img src="./House1-1.jpg" alt="zdjęcie domu ujęcie pierwsze"/>
                <img src="./House1-2.jpg" alt="zdjęcie 2 domu pierwszegoasa"/>
            </div>
        </div>);
    }
}

export default House1;
