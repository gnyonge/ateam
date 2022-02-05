import styled from "styled-components";
export const Container = styled.div`
  height: max-content;
`
export const Button = styled.button`
  background-color: ${props => props.color === '#FFFFFF' ? '#2196F3' : '#FFFFFF'};
  border: solid 1px #2196F3;
  border-radius: 4px;
  color: ${props => props.color};
  font-size: 14px;
  padding: 6px 12px;
  margin-right: 7px;
  font-weight: 500;
  :hover {
    cursor: pointer;
  }
`

