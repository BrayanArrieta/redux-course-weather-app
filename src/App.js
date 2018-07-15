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
const cities = ["Buenos Aires,ar", "Bogotá,col", "San Jose,cr"];

class App extends Component {
    handleSelectedLocation = (city) => {
        console.log(city);

    }
    render() {

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
                            <div className='detail'></div>
                        </Paper>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default App;