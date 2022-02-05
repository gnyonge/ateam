import styled from "styled-components";
export const Container = styled.div`
  border: #E5E5E5 solid 1px;
  border-radius: 4px;
  font-size: 14px;
  width: 366px;
  height: 356px;
  padding: 24px 16px;
  margin-bottom: 16px;
  :hover {
    outline: 2px solid #2196F3;
    outline-offset: -3px;
    border: #FFFFFF solid 1px;;
  }
  @media screen and (max-width: 900px) {
    width: 320px;
}
`
export const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
`
export const Title = styled.div`
  font-size: 16px;
  font-weight: bold;
`
export const StatusButton = styled.button`
  background-color: white;
  border: solid 1px #FFA000;
  border-radius: 12px;
  color: #FFA000;
  font-size: 12px;
  width: 50px;
  height: 24px;
`
export const Client = styled.div`
  font-weight: bold;
  margin-top: 5px;
`
export const Due = styled.div`
  margin-top: 16px;
  padding-bottom: 16px;
  color: #939FA5;
  border-bottom: solid 1px #E5E5E5;
`
export const DetailBox = styled.div`
  margin: 32px 0;
  display: flex;
`
export const DetailTitle = styled.div`
  display: flex;
  flex-direction: column;
  width: 100px;
  p {
    padding-top: 7px;
    color: #323D45;
  }
`
export const DetailContent = styled(DetailTitle)`
  p {
    font-weight: bold;
  }
`
export const DetailList = styled.div`
  p {
    display: inline-block;
  }
`
export const ButtonBox = styled.div`
  display: flex;
`