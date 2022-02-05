import React from 'react';
import { Container } from './styles';

const Dropdown = () => {
  return (
    <Container>
      <select name="choice">
        <option value="banana">바나나</option>
        <option value="apple">사과</option>
        <option value="orange">오렌지</option>
      </select>
    </Container>
  )
};

export default Dropdown;
