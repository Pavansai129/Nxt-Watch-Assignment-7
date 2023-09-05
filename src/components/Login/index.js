import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import {
  AppContainer,
  LoginFormContainer,
  LogoContainer,
  NxtWatchLogo,
  Container,
  Label,
  UserInput,
  ShowPasswordContainer,
  CheckBox,
  LoginButton,
  ErrorMsgContainer,
  ErrorMsg,
} from './styledComponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
    isDarkTheme: false,
    showErrorMsg: false,
    errorMsg: '',
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeShowPassword = event => {
    this.setState({showPassword: event.target.checked})
  }

  renderLoginSuccessView = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 3})
    history.replace('/')
  }

  renderLoginFailureView = errorMsg => {
    this.setState({showErrorMsg: true, errorMsg})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {method: 'POST', body: JSON.stringify(userDetails)}
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.renderLoginSuccessView(data.jwt_token)
    } else {
      this.renderLoginFailureView(data.error_msg)
    }
  }

  render() {
    const {
      username,
      password,
      showPassword,
      isDarkTheme,
      showErrorMsg,
      errorMsg,
    } = this.state
    const accessToken = Cookies.get('jwt_token')
    if (accessToken !== undefined) {
      return <Redirect to="/" />
    }
    const appBgColor = isDarkTheme ? '#0f0f0f' : '##f9f9f9'
    const formBgColor = isDarkTheme ? '#0f0f0f' : '##f9f9f9'
    const textColor = isDarkTheme ? '#f9f9f9' : '#475569'
    const passwordText = showPassword ? 'text' : 'password'
    const appLogo = isDarkTheme
      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
    return (
      <>
        <AppContainer bgColor={appBgColor}>
          <LoginFormContainer
            bgColor={formBgColor}
            onSubmit={this.onSubmitForm}
          >
            <LogoContainer>
              <NxtWatchLogo src={appLogo} alt="Nxt Watch logo" />
            </LogoContainer>
            <Container>
              <Label id="username" color={textColor}>
                USERNAME
              </Label>
              <UserInput
                id="username"
                type="text"
                value={username}
                placeholder="Username"
                onChange={this.onChangeUsername}
              />
            </Container>
            <Container>
              <Label id="password" color={textColor}>
                PASSWORD
              </Label>
              <UserInput
                id="password"
                type={passwordText}
                value={password}
                placeholder="Password"
                onChange={this.onChangePassword}
              />
            </Container>
            <ShowPasswordContainer>
              <CheckBox type="checkbox" onChange={this.onChangeShowPassword} />
              <Label color={textColor}>Show Password</Label>
            </ShowPasswordContainer>
            <LoginButton type="submit">Login</LoginButton>
            <ErrorMsgContainer>
              {showErrorMsg && <ErrorMsg>*{errorMsg}</ErrorMsg>}
            </ErrorMsgContainer>
          </LoginFormContainer>
        </AppContainer>
      </>
    )
  }
}

export default Login
