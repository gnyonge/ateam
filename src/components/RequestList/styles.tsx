import styled from "styled-components";
export const Container = styled.div`
  border: #C2C2C2 solid 1px;
  border-radius: 4px;
  font-size: 14px;
  color: #939FA5;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const List = styled.div<{len: number}>`
  display: flex;
  justify-content: ${props => props.len % 3 === 2 ? 'flex-start' : 'space-between'};
  flex-wrap: wrap;
  @media screen and (max-width: 1200px) {
    justify-content: space-between;
}
`
