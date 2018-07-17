import React, {Component} from 'react';
import './App.css';
import LocationList from './components/LocationList';
import {Grid, Row, Col} from 'react-flexbox-grid';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ForecastExtended from './components/ForecastExtended';
import {setCity} from './actions';
import {connect} from 'react-redux';

const cities = ["Buenos Aires,ar", "Bogotá,col", "San Jose,cr"];

class App extends Component {

    constructor() {
        super();
        this.state = {
            city: null
        }
    }
    handleSelectedLocation = (city) => {
        this.setState({city: city});
        this
            .props
            .setCity(city);
    }
    render() {
        const {city} = this.state;
        return (
            <Grid>
                <Row>
                    <AppBar position="static">
                        <Toolbar>
                            <IconButton className='menuButton' color="inherit" aria-label="Menu">
                                <MenuIcon/>
                            </IconButton>
                            <Typography variant="title" color="inherit" className='flex'>
                                Weather App
                            </Typography>
                        </Toolbar>
                    </AppBar>
                </Row>
                <Row>
                    <Col xs={12} md={6}>
                        <LocationList cities={cities} onSelectedLocation={this.handleSelectedLocation}/>
                    </Col>
                    <Col xs={12} md={6}>
                        <Paper elevation={4}>
                            <div className='detail'>
                                {city
                                    ? <ForecastExtended city={city}/>
                                    : null}
                            </div>
                        </Paper>
                    </Col>
                </Row>
            </Grid>
        );
    }
}
//return a object with the action identifier and the action to dispatch
//In addition can receive more functions
const mapDispatchToProps = (dispatch) => ({
    setCity: value => dispatch(setCity)
});
//for connect react and redux
// convert the class and connect to the store and return a new class with this specifications
const AppConnected = connect(null, mapDispatchToProps)(App);
//export the new class connected to the store and redux
export default AppConnected;
