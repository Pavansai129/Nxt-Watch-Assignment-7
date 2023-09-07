import styled from 'styled-components'

export const NotFoundImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: ${props => (props.bgColor ? '#000000' : '#ffffff')};
`

export const NotFoundImage = styled.img`
  height: 300px;
  width: 300px;
`
export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 500;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
  text-align: center;
`
export const Caption = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 500;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
  text-align: center;
`
