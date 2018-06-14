import React from 'react';
import classNames from 'classnames';

require('./style.less');

export const Button1 = (props) => (
    <button className={classNames({'Button': true, 'Button__disabled': props.disabled})}>{props.label}</button>
)