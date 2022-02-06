import { Container, Button, Text } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { setMethod, setRequests, setMaterial } from '../../reducers/request';
import { RootState } from '../../reducers'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRedo } from "@fortawesome/free-solid-svg-icons";

const Reset = () => {
  const data = useSelector((state: RootState) => state.request.data)
  const dispatch = useDispatch();

  const reset = () => {
    dispatch(setMethod(''))
    dispatch(setMaterial(''))
    dispatch(setRequests(data))
  }
  return (
    <Container>
      <Button onClick={reset}>
        <FontAwesomeIcon icon={faRedo} color="#2196F3" />
        <Text>필터링 리셋</Text>
      </Button>
    </Container>
  )
};

export default Reset;
