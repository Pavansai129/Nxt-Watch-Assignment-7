import styled from 'styled-components'

export const HeaderContainerMobile = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 10vh;
  padding: 20px;
  margin-bottom: 0px;
  border: 1px solid red;
  box-sizing: border-box;
  background-color: ${props => (props.bgColor ? '#181818' : '#f9f9f9')};

  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const NxtWatchLogo = styled.img`
  height: 20px;
`

export const IconContainer = styled.div`
  margin-right: 10px;
  margin-left: 10px;
`
export const HeaderContainerDesktop = styled.nav`
  @media screen and (min-width: 768px) {
    display: block;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`
