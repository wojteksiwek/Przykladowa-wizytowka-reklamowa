import React, {Component} from 'react';
import './Attractions.css';

class Attractions extends Component {
    render(){
        return(
        <div className="Attractions">
            <div className="AttractionsDescription">
                <p className="AttractionDescFirstLine">Lokalne</p>
                <p className="AttractionDescSecondLine">ATRAKCJE</p>
                <p className="AttractionDesctext">Położenie domków w centrum Krasnobrodzkiego Parku Krajobrazowego, rzeki Wieprz, oraz bliskość takich osobliwości przyrodniczych jak Roztoczański Park Narodowy, rezerwat Szumy, Dolina św.Rocha, szlak geoturystyczny roztocza, zachęca wręcz do odwiedzenia tych miejsc.</p>
                <p className="AttractionDescMoreButton">CZYTAJ WIĘCEJ</p>
            </div>
            <div className="AttractionsPhoto">
            <img src="./Attraction1.jpg" alt="zdjęcie pierwszej atrakcji"/>
            <img src="./Attraction2.jpg" alt="zdjęcie drugiej atrakcji"/>
            <img src="./Attraction3.jpg" alt="zdjęcie trzeciej atrakcji"/>
            <img src="./Attraction4.jpg" alt="zdjęcie czwartej atrakcji"/>
            </div>
        </div>);
    }
}

export default Attractions;