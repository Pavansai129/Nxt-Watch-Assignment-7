import {
  NotFoundImageContainer,
  NotFoundImage,
  Heading,
  Caption,
} from './styledComponents'

const NotFound = () => {
  const isDarkTheme = true
  const textColor = isDarkTheme ? '#ffffff' : '#000000'
  const bgColor = isDarkTheme ? '#000000' : '#ffffff'
  const notFoundImage = isDarkTheme
    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
  return (
    <>
      <NotFoundImageContainer bgColor={bgColor}>
        <NotFoundImage src={notFoundImage} />
        <Heading color={textColor}>Page Not Found</Heading>
        <Caption color={textColor}>
          We are sorry, the page you requested could not be found
        </Caption>
      </NotFoundImageContainer>
    </>
  )
}

export default NotFound
