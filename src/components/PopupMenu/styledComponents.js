import styled from 'styled-components'

export const PopupButtonContainer = styled.div`
  border: none;
  background-color: ${props => (props.bgColor ? '#181818' : '#f9f9f9')};
`
export const PopupMenuButton = styled.button`
  border: none;
  background-color: ${props => (props.bgColor ? '#181818' : '#f9f9f9')};
`
export const CloseButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
`
export const PopupContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100%;
  border: 1px solid red;
`
export const CloseButton = styled.button`
  border: none;
  background-color: transparent;
`
export const LinksContainer = styled.ul`
  list-style-type: none;
  background-color: transparent;
`

export const LinkContainer = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  text-decoration: none;
`
export const LinkName = styled.h1`
  font-family: 'Roboto';
  font-size: 10px;
  text-decoration: none;
  color: ${props => (props.color ? 'red' : 'blue')};
`
export const IconContainer = styled.div`
  margin-right: 10px;
`
