import { Container, BoardBox, InfoTitle, InfoDesc, FilterBox, DropdownBox } from './styles';
import Dropdown from '../Dropdown';
import Toggle from '../Toggle';
import RequestList from '../RequestList';

const Board = () => {
  return (
    <Container>
      <BoardBox>
        <InfoTitle>
          들어온 요청
        </InfoTitle>
        <InfoDesc>
          파트너님에게 딱 맞는 요청서를 찾아보세요.
        </InfoDesc>
        <FilterBox>
          <DropdownBox>
            <Dropdown />
            <Dropdown />
          </DropdownBox>
          <Toggle />
        </FilterBox>
        <RequestList />
      </BoardBox>
    </Container>
  )
};

export default Board;
