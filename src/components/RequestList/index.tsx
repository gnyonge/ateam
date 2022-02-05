import { useEffect, useState } from 'react';
import { Container, List } from './styles';
import RequestItem from '../RequestItem';
import axios from 'axios';

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
  
  const [requests, setRequests] = useState<IRequest[]>([])
  console.log(requests)
  useEffect(() => {
    axios.get<IRequest[]>('http://localhost:3001/requests')
    .then((res) => {
      setRequests(res.data)
    })
  }, [])
  return (
    <>
    {
      requests.length !== 0
      ? 
      <List>
        {
          requests.map(request => <RequestItem key={request.id} request={request}/>)
        }
      </List>
      :
      <Container>
        조건에 맞는 견적 요청이 없습니다.
      </Container>
    }
    </>
  )
};

export default RequestList;
