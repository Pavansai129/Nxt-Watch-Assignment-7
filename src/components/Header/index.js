import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import {HiMoon} from 'react-icons/hi'
import {FiLogOut} from 'react-icons/fi'
import {SiYoutubegaming} from 'react-icons/si'
import {FaSun} from 'react-icons/fa'
import {AiFillHome, AiFillFire} from 'react-icons/ai'
import {RiCloseFill} from 'react-icons/ri'
import {BiListPlus} from 'react-icons/bi'
import PopupMenu from '../PopupMenu'
import NxtWatchContext from '../../context/NxtWatchContext'
import {
  HeaderContainerMobile,
  Container,
  NxtWatchLogo,
  IconContainer,
  HeaderContainerDesktop,
} from './styledComponents'
import './index.css'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme, changeTheme} = value
        const appLogo = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
        const onClickTheme = () => {
          changeTheme()
        }
        return (
          <>
            <HeaderContainerMobile bgColor={isDarkTheme}>
              <Container>
                <NxtWatchLogo src={appLogo} alt="nxt watch logo" />
              </Container>
              <Container>
                <IconContainer onClick={onClickTheme}>
                  {isDarkTheme ? (
                    <FaSun className="light-theme-icon" />
                  ) : (
                    <HiMoon />
                  )}
                </IconContainer>
                <IconContainer>
                  <PopupMenu />
                </IconContainer>
                <IconContainer onClick={onClickLogout}>
                  {isDarkTheme ? (
                    <FiLogOut className="light-theme-icon" />
                  ) : (
                    <FiLogOut />
                  )}
                </IconContainer>
              </Container>
            </HeaderContainerMobile>
            <HeaderContainerDesktop>
              <Container>
                <NxtWatchLogo src={appLogo} />
              </Container>
            </HeaderContainerDesktop>
          </>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}
export default withRouter(Header)
