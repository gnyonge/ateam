import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px 0;
  @media screen and (max-width: 900px) {
    margin: 30px 0;
}
`
export const BoardBox = styled.div`
  width: 1130px;
  @media screen and (max-width: 1200px) {
    width: 748px;
}
  @media screen and (max-width: 900px) {
    width: 320px;
}
`
export const InfoTitle = styled.div`
  font-weight: 600;
  font-size: 20px;
`
export const InfoDesc = styled.div`
  font-size: 16px;
  margin-top: 3px;
`
export const FilterBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 35px 0;
  @media screen and (max-width: 900px) {
    flex-direction: column;
}
`
export const DropdownBox = styled.div`
  display: flex;
`
