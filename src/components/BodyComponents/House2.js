import React, {Component} from 'react';
import './House.css';

class House2 extends Component {
    render(){
        return(
        <div className="House House2">
             <div className="House-photo">
                <img src="./House2-1.jpg" alt="zdjęcie domu ujęcie pierwsze"/>
                <img src="./House2-2.jpg" alt="zdjęcie 2 domu pierwszegoasa"/>
            </div>
            <div className="House-description">
                <p className="houseDescFirstLine">Poznaj</p>
                <p className="houseDescSecondLine">DOMEK TRÓJKĄTNY</p>
                <p className="HouseDesctext">Domki są 4-5 osobowe w pełni wyposażone. Na parterze znajduje się łazienka, aneks kuchenny (kuchenka +lodówka +naczynia), stół z krzesłami, szafka na buty, komoda z telewizorem oraz kanapa rozkładana. Natomiast na piętrze znajdują się 3 pojedyncze łóżka z szafeczką nocną. Na tarasie jest stolik biesiadny.</p>
                <p className="HouseDescMoreButton">więcej</p>
            </div>

        </div>);
    }
}

export default House2;
