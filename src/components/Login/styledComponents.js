import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: ${props => (props.isDarkTheme ? '#000000' : '#f0f0f0')};
`

export const LoginFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: ${props => props.bgColor};
  padding: 20px;
  width: 500px;
  height: 500px;
  max-width: 700px;
  border-radius: 15px;
  box-shadow: 2px 2px 15px #e2e8f0;
  padding-top: 50px;
  padding-bottom: 50px;

  @media screen and (max-width: 768px) {
    width: 90%;
  }
`

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
`

export const NxtWatchLogo = styled.img`
  height: 50px;
`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
`
export const Label = styled.label`
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 500;
  color: ${props => props.color};
`
export const UserInput = styled.input`
  border-radius: 2px;
  height: 40px;
  background-color: '#f8fafc';
  width: 100%;
  padding: 25px;
  border-radius: 5px;
`
export const ShowPasswordContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`

export const CheckBox = styled(UserInput)`
  height: 20px;
  width: 10%;
  border: 1px solid #0f0f0f;
`
export const LoginButton = styled.button`
  width: 100%;
  height: 40px;
  background-color: #3b82f6;
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 500;
  border: none;
  border-radius: 10px;
  outline: none;
  cursor: pointer;
  margin-bottom: 0px;
`
export const ErrorMsgContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding: 0px;
  margin: 0px;
`

export const ErrorMsg = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 500;
  border: none;
  color: red;
  margin: 0px;
`
