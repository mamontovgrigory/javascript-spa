import React from 'react';

const style = require('./style.less');

export const Button2 = (props) => (
    <button className={style.Button}>{props.label}</button>
)