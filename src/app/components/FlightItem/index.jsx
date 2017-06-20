import React from 'react';
import moment from 'moment';

const style = require('./style.css');

export const FlightItem = (props) => (
    <div className={style.FlightItem}>
        <h4 className={style.title}>{props.flight.carrier}</h4>
        <div className={style.text}>
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
