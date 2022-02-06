import { Container, Text } from './styles';
import Switch from '@mui/material/Switch';
import { useDispatch, useSelector } from 'react-redux';
import { setToggle, setRequests, setMethod, setMaterial } from '../../reducers/request';
import { RootState } from '../../reducers'

const Toggle = () => {
  const checked = useSelector((state: RootState) => state.request.toggled)
  const data = useSelector((state: RootState) => state.request.data)
  const dispatch = useDispatch();

  const handleChange = () => {
    dispatch(setToggle(!checked));
    if (!checked) {
      const filtered = data.filter((request) => request.status === '상담중')
      dispatch(setMethod(''))
      dispatch(setMaterial(''))
      dispatch(setRequests(filtered))
    } else {
      dispatch(setMethod(''))
      dispatch(setMaterial(''))
      dispatch(setRequests(data))
    }
  };
  return (
    <Container>
      <Switch
        checked={checked}
        onChange={handleChange}
      />
      <Text>상담 중인 요청만 보기</Text>
    </Container>
  )
};

export default Toggle;
