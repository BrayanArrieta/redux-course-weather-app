import React, {Component} from 'react';
import './App.css';
import {Grid, Row, Col} from 'react-flexbox-grid';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import LocationListContainer from './containers/LocationListContainer';
import ForecastExtendedContainer from './containers/ForecastExtendedContainer';
const cities = ["Buenos Aires,ar", "Bogotá,col", "San Jose,cr"];

class App extends Component {
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
                        <LocationListContainer cities={cities}></LocationListContainer>
                    </Col>
                    <Col xs={12} md={6}>
                        <Paper elevation={4}>
                            <div className='detail'>
                                <ForecastExtendedContainer/> 
                            </div>
                        </Paper>
                    </Col>
                </Row>
            </Grid>
        );
    }
}
export default App;
