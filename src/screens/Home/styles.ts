import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  background-color: #4e455410;
`;

export const Header = styled.View`
  width: 100%;
  height: 21%;
  background-color: brown;
`

export const Content = styled.View`
  width: 100%;
  height: 100%;
  flex-direction: row;
`

export const BoxInfo = styled.View`
  width: 60%;
  height: 100%;
`
export const BoxIcons = styled.View`
  width: 40%;
  height: 100%;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
  margin: 10px 10px 0px 0px;
`
export const NameUser = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 18px;
  margin: 10px;
  font-family: 'Inter-Bold';
`

export const ImageUser = styled.Image`
  width: 35px;
  height: 35px;
  border-radius: 35px;
  margin: 10px;
`

export const BoxSales = styled.View`
  width: 90%;
  height: 60%;
  background-color: #fff;
  margin: -40px 10px 0px 10px;
  align-self: center;
  border-radius: 10px;
  padding: 10px;
`

export const TitleSales = styled.Text`
  color: #121212;
`

export const SalesValue = styled.Text`
  font-size: 20px;
  color: #000;
  font-weight: bold;
`

export const ActionSales = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  border-radius: 5px;
  background-color: brown;
  align-self: flex-end;
  align-items: center;
  justify-content: center;
`

export const ListScroll = styled.ScrollView`
  width: 100%;
  height: 50%;
  /* background-color: #fff; */
  margin-top: 60px;
  /* padding-right: 10px; */

`