import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Container, Company, Hamburger, MenuBox, BuildingBox, SideBar, SideBarBox, SideMenu } from './styles';
import Building from '../../images/building.png'
import DarkBuilding from '../../images/dark_building.png'

const NavBar = () => {
  const [isClicked, setIsClicked] = useState(false)
  function onClick(): void {
    setIsClicked(true)
  }
  function close(): void {
    setIsClicked(false)
  }
  return (
    <Container>
      <Hamburger>
        <FontAwesomeIcon icon={faBars} color="#fff" onClick={onClick}/>
        <SideBar isClicked={isClicked}>
          <Company color='#2196F3'>
            <b>CAPA</b> 파트너스
          </Company>
          <SideMenu>
            <BuildingBox>
              <img src={DarkBuilding} alt="빌딩" />&ensp;<p>파트너정밀가공</p>
            </BuildingBox>
            <p>로그아웃</p>
          </SideMenu>
        </SideBar>
        <SideBarBox isClicked={isClicked} onClick={close}/>
      </Hamburger>
      <Company>
        <b>CAPA</b> 파트너스
      </Company>
      <MenuBox>
        <BuildingBox>
          <img src={Building} alt="빌딩" />
          &ensp;A 가공 업체
        </BuildingBox>
        <div>
          |
        </div>
        <div>
          로그아웃
        </div>
      </MenuBox>
    </Container>
  )
};

export default NavBar;
