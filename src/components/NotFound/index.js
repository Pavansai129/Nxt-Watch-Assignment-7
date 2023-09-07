import {
  NotFoundImageContainer,
  NotFoundImage,
  Heading,
  Caption,
} from './styledComponents'
import NxtWatchContext from '../../context/NxtWatchContext'

const NotFound = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      console.log(isDarkTheme)
      const notFoundImage = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
      return (
        <NotFoundImageContainer bgColor={isDarkTheme}>
          <NotFoundImage src={notFoundImage} />
          <Heading isDarkTheme>Page Not Found</Heading>
          <Caption isDarkTheme>
            We are sorry, the page you requested could not be found
          </Caption>
          <Caption>
            We are sorry, the page you requested could not be found
          </Caption>
        </NotFoundImageContainer>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default NotFound
