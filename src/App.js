import React, {Component} from 'react';
import './App.css';
import LocationList from './components/LocationList';

const cities = ["Buenos Aires,ar", "Bogotá,col", "San Jose,cr"];
class App extends Component {
    render() {
        return (
            <div className="App">
                <LocationList cities={cities}/>
            </div>
        );
    }
}

export default App;
