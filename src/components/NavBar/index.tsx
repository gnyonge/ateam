import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Container, Company, Hamburger, MenuBox, BuildingBox, SideBar, SideBarBox } from './styles';
import Building from '../../images/building.png'

const NavBar = () => {
  const [isClicked, setIsClicked] = useState(false)
  function onClick(): void {
    console.log('클릭함')
    setIsClicked(!isClicked)
  }
  return (
    <Container>
      <Hamburger>
        <FontAwesomeIcon icon={faBars} color="#fff" onClick={onClick}/>
        <SideBarBox isClicked={isClicked}>
          <SideBar isClicked={isClicked}>ss</SideBar>
        </SideBarBox>
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
