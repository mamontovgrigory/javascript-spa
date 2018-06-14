import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background: ${props => props.disabled ? '#898989' : '#01ec81'};
  border: none;
  padding: 15px 30px;
  border-radius: 4px;
  color: #FFFFFF;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  margin-right: 10px;
`;

export const Button2 = (props) => (
    <Button {...props}>{props.label}</Button>
)