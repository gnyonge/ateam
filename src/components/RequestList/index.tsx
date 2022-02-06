import { useEffect, useState } from 'react';
import { Container, List } from './styles';
import RequestItem from '../RequestItem';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setData, setRequests } from '../../reducers/request';
import { RootState } from '../../reducers'

export interface IRequest {
  id: number;
  title: string;
  client: string;
  due: string;
  count?: number;
  amount: number;
  method: string[];
  material: string[];
  status: string;
  docs?: number;
}
const RequestList = () => {
  
  const all = useSelector((state: RootState) => state.request.requests)
  const toggled = useSelector((state: RootState) => state.request.toggled)

  const dispatch = useDispatch();

  const fetchData = async () => {
    const fetchedData = await axios.get<IRequest[]>('http://localhost:3001/requests')
    if (toggled) {
      dispatch(setRequests(all))
    } else {
      dispatch(setData(fetchedData.data)) 
    }
  }
  useEffect(() => {
    fetchData()
  }, [])
  return (
    <>
    {
      all === undefined || all.length === 0
      ? 
      <Container>
        조건에 맞는 견적 요청이 없습니다.
      </Container>
      :
      <List len={all.length}>
        {
          all.map(request => <RequestItem key={request.id} request={request}/>)
        }
      </List>
    }
    </>
  )
};

export default RequestList;
