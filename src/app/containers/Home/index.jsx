import * as React from 'react';
const {connect} = require('react-redux');

import { getFlights } from '../../redux/modules/avia';
import { Button1, Button2, FlightItem } from '../../components';
require('./style.less');

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.handleCarriersSelectChange = this.handleCarriersSelectChange.bind(this);
        this.state = {
            activeFlights: []
        };
    }

    componentWillMount(){
        const {dispatch} = this.props;
        dispatch(getFlights());
    }

    handleCarriersSelectChange(e) {
        const {flights} = this.props;
        const activeFlights = flights.filter((flight) => {
            return flight.carrier === e.target.value;
        });
        this.setState({
            activeFlights
        });
    }

    render() {
        const {carriers} = this.props;
        const {activeFlights} = this.state;
        return (
            <div className="Home">
                <div className="select_wrapper">
                    <select onChange={this.handleCarriersSelectChange}>
                        <option>Выберите компанию</option>
                        {carriers.map((c, index) => <option key={index} value={c.name}>{c.name}</option>)}
                    </select>
                </div>
                <div className="content">
                    {activeFlights.map((flight, index) => <FlightItem key={index} flight={flight}/>)}
                </div>
                <div className="content">
                    <Button1 label="Disabled" disabled/>
                    <Button1 label="Button 1"/>
                    <Button2 label="Button 2"/>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const {flights} = state.avia;
    const {carriers} = state.avia;

    return {flights, carriers};
}

export default connect(mapStateToProps)(Home);
