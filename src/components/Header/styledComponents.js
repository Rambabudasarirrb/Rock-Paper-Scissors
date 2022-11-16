import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 2px solid #ffffff;
  border-radius: 10px;
  background-color: transparent;
  width: 80%;
`
export const ScoreNameContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const ScoreName = styled.h1`
  font-family: 'Bree Serif';
  font-size: 15px;
  font-weight: 500;
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`
export const Score = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  width: 15%;
  height: 100%;
  border-radius: 10px;
`
export const ScoreHeading = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  color: #223a5f;
  @media screen and (min-width: 768px) {
    font-size: 25px;
  }
`
export const ScoreResult = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  color: #223a5f;
  @media screen and (min-width: 768px) {
    font-size: 25px;
  }
`
