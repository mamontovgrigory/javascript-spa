export const GET_FLIGHTS_SUCCESS = 'avia/GET_FLIGHTS_SUCCESS';
export const GET_CARRIERS_SUCCESS = 'avia/GET_CARRIERS_SUCCESS';

const initialState = {
    flights: [],
    carriers: []
};

export function aviaReducer(state = initialState, action) {
    switch (action.type) {
        case GET_CARRIERS_SUCCESS:
            const {carriers} = action;
            return Object.assign({}, state, {carriers});
        case GET_FLIGHTS_SUCCESS:
            const {flights} = action;
            return Object.assign({}, state, {flights});
        default:
            return state;
    }
}

export function getFlightsSuccess(flights) {
    return {
        type: GET_FLIGHTS_SUCCESS,
        flights
    };
}

export function getCarriersSuccess(carriers) {
    return {
        type: GET_CARRIERS_SUCCESS,
        carriers
    };
}

export function getFlights() {
    return async (dispatch) => {
        const flights = await require('./data.json').flights;
        dispatch(getFlightsSuccess(flights));
        dispatch(getCarriers(flights));
    };
}

export function getCarriers(flights) {
    return (dispatch) => {
        const carriers = flights.map((flight) => {
            return flight.carrier;
        }).filter((elem, pos, arr) => {
            return arr.indexOf(elem) === pos;
        }).map((carrierName) => {
            return {
                name: carrierName
            };
        });
        dispatch(getCarriersSuccess(carriers));
    };
}
