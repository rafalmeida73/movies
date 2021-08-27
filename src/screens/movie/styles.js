import styled from 'styled-components'
import { Avatar } from 'react-native-paper'

export const Container = styled.ScrollView`
  flex: 1;
  background-color: #15141F;
  padding-top: ${props => `${props.statusBarHeight}px`};
`

export const Content = styled.View`
  padding: 0 30px;
`

export const Title = styled.Text`
  font-style: normal;
  font-weight: 500;
  font-size: 23px;
  line-height: 35px;
  letter-spacing: 0.02px;
  text-align: center;

  color: #FFFFFF;
`

export const Line = styled.View`
 border-width: 0.240887px;
 border-color: #515151;
 margin: 15px 0;
`

export const Info = styled.View`
  flex-direction: row;
`

export const Release = styled.View`
  flex-direction: row;
  justify-content: space-around;
`

export const ReleaseTitle = styled.Text`
  font-style: normal;
  font-weight: 500;
  font-size: 19.2709px;
  line-height: 23px;
  letter-spacing: 0.02px;

  color: #FFFFFF;
`
export const ReleaseText = styled.Text`
  font-style: normal;
  font-weight: normal;
  font-size: 14.4532px;
  line-height: 17px;
  letter-spacing: 0.02px;
  margin: 5% 0;

  color: #BCBCBC;
`

export const InfoText = styled.Text`
  font-style: normal;
  font-weight: normal;
  font-size: 14.4532px;
  line-height: 17px;
  letter-spacing: 0.02px;
  margin: 5% 0;
  margin-left: 3%;

  color: #BCBCBC;
`

export const Icon = styled(Avatar.Icon)`
  background-color: ${props => `${props.bgColor}`};
`

export const Synopsis = styled.View`
  margin-bottom: 20%;
`

export const SynopsisTitle = styled.Text`
  font-style: normal;
  font-weight: 500;
  font-size: 19.2709px;
  line-height: 23px;
  letter-spacing: 0.02px;
  margin-top: 5%;
  margin-bottom: 5%;

  color: #FFFFFF;
`

export const SynopsisDesc = styled.Text`
  font-style: normal;
  font-weight: normal;
  font-size: 14.4532px;
  line-height: 22px;
  letter-spacing: 0.02px;
  text-align: justify;

  color: #BCBCBC;
`

export const Production = styled.View`
  margin-bottom: 30%;
`

export const ProductionTitle = styled.Text`
  font-style: normal;
  font-weight: 500;
  font-size: 19.2709px;
  line-height: 23px;
  letter-spacing: 0.02px;
  margin-top: 5%;
  margin-bottom: 10%;

  color: #FFFFFF;
`

export const ProductionCard = styled.View`
  flex-direction: row;
  align-items: center;
`

export const ProductionCardImage = styled.Image`
  height: 100px;
  width: 100px;
  background-color: #fff;
  justify-content: center;
  align-items: center;
  margin-bottom: 10%;
  border-radius: 50px;
`

export const ProductionName = styled.Text`
  font-style: normal;
  font-weight: 500;
  font-size: 19.2709px;
  letter-spacing: 0.02px;
  margin-left: 5%;

  color: #FFFFFF;
`