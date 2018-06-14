import React from 'react';
import moment from 'moment';

require('./style.less');

export const FlightItem = (props) => (
    <div className="FlightItem">
        <h4 className="title">{props.flight.carrier}</h4>
        <div className="text">
            <h4>{props.flight.direction.from}<span> - </span>{props.flight.direction.to}</h4>
            <div>
                Туда, {moment(props.flight.arrival).format('DD.MM.YYYY')}
            </div>
            <div>
                <strong>
                    {moment(props.flight.arrival).format('HH:mm:ss')}
                    <span> - </span>
                    {moment(props.flight.departure).format('HH:mm:ss')}
                </strong>
            </div>
        </div>
    </div>
);
