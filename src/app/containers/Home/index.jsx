import * as React from 'react';
const {connect} = require('react-redux');

import { getFlights } from '../../redux/modules/avia';
import { FlightItem } from '../../components';
const style = require('./style.css');

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
            <div className={style.Home}>
                <div className={style.select_wrapper}>
                    <select onChange={this.handleCarriersSelectChange}>
                        <option>Выберите компанию</option>
                        {carriers.map((c, index) => <option key={index} value={c.name}>{c.name}</option>)}
                    </select>
                </div>
                <div className={style.content}>
                    {activeFlights.map((flight, index) => <FlightItem key={index} flight={flight}/>)}
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
