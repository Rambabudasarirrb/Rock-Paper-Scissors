import {
  HeaderContainer,
  ScoreNameContainer,
  ScoreName,
  Score,
  ScoreHeading,
  ScoreResult,
} from './styledComponents'

const Header = props => {
  const {score} = props
  return (
    <HeaderContainer>
      <ScoreNameContainer>
        <ScoreName>
          ROCK <br /> PAPER <br /> SCISSORS
        </ScoreName>
      </ScoreNameContainer>
      <Score>
        <ScoreHeading>Score</ScoreHeading>
        <ScoreResult>{score}</ScoreResult>
      </Score>
    </HeaderContainer>
  )
}
export default Header
