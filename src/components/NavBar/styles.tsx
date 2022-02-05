import styled from "styled-components";
export const Container = styled.div`
  background-color: #1565C0;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3%;
  @media screen and (max-width: 900px) {
    height: 44px;
    justify-content: start;
}
`
export const Hamburger = styled.div`
  display: none;
  @media screen and (max-width: 900px) {
    display: inline-block;
    margin-right: 3%;
    :hover {
      cursor: pointer;
    }
}
`
export const SideBar = styled.div<{ isClicked: boolean }>`
  position: fixed;
  width: 280px;
  height: 100%;
  background-color: white;
  top: 0;
  left: ${props => props.isClicked ? '0' : '-280px'};
  /* z-index: 2; */
  transition: all .3s;
`
export const SideBarBox = styled.div<{ isClicked: boolean }>`
  /* display: ${props => props.isClicked ? 'block' : 'none'}; */
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: ${props => props.isClicked ? 'rgba(0, 0, 0, 0.5)' : 'null'};
  /* z-index: ${props => props.isClicked ? '1' : '0'}; */
`
export const Company = styled.div`
  font-size: 20px;
  color: white;
  @media screen and (max-width: 900px) {
    font-size: 12px;
}
`
export const MenuBox = styled.div`
  font-size: 14px;
  color: rgb(255, 255, 255);
  width: 188px;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 900px) {
    display: none;
}
`
export const BuildingBox = styled.div`
  display: flex;
  img {
    margin-top: 2px;
    height: max-content;
  }
`