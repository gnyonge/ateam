import { Container, Title, Client, Due, DetailBox, DetailTitle, DetailContent, 
  DetailList, TitleBox, StatusButton, ButtonBox } from './styles';
import { IRequest } from '../RequestList';
import DetailButton from '../DetailButton';
import { RootState } from '../../reducers'
import { useSelector } from 'react-redux';


interface RequestProps {
  request: IRequest
}

const RequestItem = ({ request }: RequestProps) => {
  const all = useSelector((state: RootState) => state.request.requests)

  return (
    <Container len={all.length}>
      <TitleBox>
        <Title>
          {request.title}
        </Title>
        {
          request.status === '상담중'
          ?
          <StatusButton>
            상담중
          </StatusButton>
          :
          null
        }
      </TitleBox>
      <Client>{request.client}</Client>
      <Due>{request.due}까지 납기</Due>
      <DetailBox>
        <DetailTitle>
          <p>도면개수</p>
          <p>총 수량</p>
          <p>가공방식</p>
          <p>재료</p>
        </DetailTitle>
        <DetailContent>
          <p>{request.count ? request.count : request.docs}개</p>
          <p>{request.amount}개</p>
          <DetailList>
            {request.method.map((item, index) => (
              <p key={index}>{index !== 0 ? ',' : ''} {item}</p>
            ))}
          </DetailList>
          <DetailList>
            {request.material.map((item, index) => (
              <p key={index}>{index !== 0 ? ',' : ''} {item}</p>
            ))}
          </DetailList>
        </DetailContent>
      </DetailBox>
      <ButtonBox>
        <DetailButton title='요청 내역 보기' color='#FFFFFF' />
        <DetailButton title='채팅하기' color='#2196F3' />
      </ButtonBox>
    </Container>
  )
};

export default RequestItem;
