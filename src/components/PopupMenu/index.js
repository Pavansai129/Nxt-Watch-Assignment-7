import Popup from 'reactjs-popup'
// import 'reactjs-popup/dist/index.css'
import {Link} from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import {
  AiOutlineHome,
  AiFillHome,
  AiOutlineClose,
  AiFillCloseCircle,
} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {BiListPlus} from 'react-icons/bi'
import NxtWatchContext from '../../context/NxtWatchContext'
import {
  PopupButtonContainer,
  PopupMenuButton,
  PopupContainer,
  CloseButton,
  LinksContainer,
  LinkContainer,
  LinkName,
  CloseButtonContainer,
  IconContainer,
} from './styledComponents'
import './index.css'

const PopupMenu = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const menuIconColor = isDarkTheme ? '#ffffff' : '#000000'
      return (
        <PopupButtonContainer bgColor={isDarkTheme}>
          <Popup
            modal
            trigger={
              <PopupMenuButton type="button" bgColor={isDarkTheme}>
                <GiHamburgerMenu color={menuIconColor} width="100px" />
              </PopupMenuButton>
            }
          >
            {close => (
              <PopupContainer>
                <CloseButtonContainer>
                  <CloseButton
                    type="button"
                    onClick={() => close()}
                    data-testid="close"
                  >
                    {isDarkTheme ? <AiFillCloseCircle /> : <AiOutlineClose />}
                  </CloseButton>
                </CloseButtonContainer>
                <LinksContainer>
                  <Link to="/" className="link">
                    <LinkContainer>
                      <IconContainer>
                        {isDarkTheme ? (
                          <AiFillHome
                            color={isDarkTheme ? '#ffffff' : '#000000'}
                          />
                        ) : (
                          <AiOutlineHome
                            color={isDarkTheme ? '#ffffff' : '#000000'}
                          />
                        )}
                      </IconContainer>
                      <LinkName color={isDarkTheme}>Home</LinkName>
                    </LinkContainer>
                  </Link>
                  <Link to="/trending" className="link">
                    <LinkContainer>
                      <IconContainer>
                        {isDarkTheme ? (
                          <HiFire color={isDarkTheme ? '#ffffff' : '#000000'} />
                        ) : (
                          <HiFire color={isDarkTheme ? '#ffffff' : '#000000'} />
                        )}
                      </IconContainer>
                      <LinkName color={isDarkTheme}>Trending</LinkName>
                    </LinkContainer>
                  </Link>
                  <Link to="/gaming" className="link">
                    <LinkContainer>
                      <IconContainer>
                        {isDarkTheme ? (
                          <SiYoutubegaming
                            color={isDarkTheme ? '#ffffff' : '#000000'}
                          />
                        ) : (
                          <SiYoutubegaming
                            color={isDarkTheme ? '#ffffff' : '#000000'}
                          />
                        )}
                      </IconContainer>
                      <LinkName color={isDarkTheme}>Gaming</LinkName>
                    </LinkContainer>
                  </Link>
                  <Link to="/saved-videos" className="link">
                    <LinkContainer>
                      <IconContainer>
                        {isDarkTheme ? (
                          <BiListPlus
                            color={isDarkTheme ? '#ffffff' : '#000000'}
                          />
                        ) : (
                          <BiListPlus
                            color={isDarkTheme ? '#ffffff' : '#000000'}
                          />
                        )}
                      </IconContainer>
                      <LinkName color={isDarkTheme}>Saved Videos</LinkName>
                    </LinkContainer>
                  </Link>
                </LinksContainer>
              </PopupContainer>
            )}
          </Popup>
        </PopupButtonContainer>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default PopupMenu
