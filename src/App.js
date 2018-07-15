import React, {Component} from 'react';
import './App.css';
import LocationList from './components/LocationList';
import {Grid, Row, Col} from 'react-flexbox-grid';
const cities = ["Buenos Aires,ar", "Bogotá,col", "San Jose,cr"];
class App extends Component {
    handleSelectedLocation = (city) => {
        console.log(city);

    }
    render() {

        return (
            <Grid>
                <Row>
                    Titulo
                </Row>
                <Row>
                    <Col xs={12} md={6}>
                        <LocationList cities={cities} onSelectedLocation={this.handleSelectedLocation}/>
                    </Col>
                    <Col xs={12} md={6}>
                        <div className='detail'></div>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default App;