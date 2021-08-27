import styled from 'styled-components'
import { Avatar } from 'react-native-paper'

export const Container = styled.View`
  flex: 1;
  background-color: #15141F;
`

export const Title = styled.Text`
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 29px;
  letter-spacing: 0.02px;
  margin: 40px;

  color: #fff;
`
export const ImageCard = styled.ImageBackground`
  width: 75%;
  height: 30%;
  align-self: center;
`

export const ImageCarrousel = styled.ImageBackground`
  width: 100%;
  height: 60%;
  align-self: center;
`

export const CardContent = styled.View`
  position: absolute;
  top: 70%;
  left: 0;
  right: 70%;
  bottom: 5%;
  justify-content: center;
  align-items: center;
  background: rgba(218, 218, 218, 0.3);
  border-radius: 20px;
  margin-left: 3%;
  flex-direction: row;
  width: 80%;
`

export const CardContentCarrousel = styled.TouchableOpacity`
  position: absolute;
  top: 70%;
  left: 0;
  right: 70%;
  bottom: 10px;
  justify-content: center;
  align-items: center;
  background: rgba(218, 218, 218, 0.3);
  border-radius: 20px;
  margin-left: 10%;
  margin-right: 10%;
  flex-direction: row;
  width: 80%;
`

export const MovieVote = styled.View`
  position: absolute;
  top: 5%;
  left: 50%;
  right: 0;
  bottom: 80%;
  justify-content: center;
  align-items: center;
  background: rgba(218, 218, 218, 0.3);
  border-radius: 15px;
  margin-left: 10%;
  margin-right: 10%;
  flex-direction: row;
  width: 20%;
`

export const Icon = styled(Avatar.Icon)`
  background-color: ${props => `${props.bgColor}`};
`

export const Vote = styled.Text`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.02px;

  color: #FFFFFF;
`

export const CardTitle = styled.Text`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.02px;
  font-weight: bold;
  margin-left: 10%;
  color: #FFFFFF;
  width: 100%;
`

export const Play = styled.TouchableOpacity`
  margin-left: 30%;
`

export const CardTitleCarrousel = styled.Text`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.02px;
  font-weight: bold;
  color: #FFFFFF;
  text-align: center;
`

export const CardPopular = styled.View`
  flex-direction: row;
`

export const Note = styled.Text`
  flex-direction: row;
`