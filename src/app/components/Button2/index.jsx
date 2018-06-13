import React from 'react';
import CSSModules from 'react-css-modules';

const style = require('./style.less');

let Button2 = (props) => (
    <button styleName="Button">{props.label}</button>
)

Button2 = CSSModules(Button2, style);

export {Button2};