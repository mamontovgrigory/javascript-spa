import React from 'react';

const style = require('./style.less');

export const Button1 = (props) => (
    <button className={style.Button}>{props.label}</button>
)