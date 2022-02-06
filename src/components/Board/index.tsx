import { Container, BoardBox, InfoTitle, InfoDesc, FilterBox, DropdownBox } from './styles';
import Dropdown from '../Dropdown';
import Toggle from '../Toggle';
import RequestList from '../RequestList';
import Reset from '../Reset';
import { useSelector } from 'react-redux';
import { RootState } from '../../reducers'

const Board = () => {
  const methods: string[] = [
    '밀링',
    '선반'
  ]
  const materials: string[] = [
    '알루미늄',
    '탄소강',
    '구리',
    '합금강',
    '강철'
  ]
  const method = useSelector((state: RootState) => state.request.method)
  const material = useSelector((state: RootState) => state.request.material)
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
            <Dropdown menu={methods} title='가공방식'/>
            <Dropdown menu={materials} title='재료'/>
            {
              method.length !== 0 || material.length !== 0
              ?
              <Reset />
              :
              null
            }
          </DropdownBox>
          <Toggle />
        </FilterBox>
        <RequestList />
      </BoardBox>
    </Container>
  )
};

export default Board;
