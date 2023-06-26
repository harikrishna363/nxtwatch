import AppContext from '../../Context/AppContext'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import {
  DesktopSidebarContainer,
  MobileSidebarContainer,
  NotFoundBgContainer,
  NotFoundContainer,
  FailureViewContainer,
  FailureImage,
  FailureHeading,
  FailureText,
} from './styledComponent'

const NotFound = () => (
  <AppContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <>
          <Navbar />
          <NotFoundBgContainer>
            <DesktopSidebarContainer>
              <Sidebar />
            </DesktopSidebarContainer>
            <MobileSidebarContainer>
              <Sidebar />
            </MobileSidebarContainer>
            <NotFoundContainer darkTheme={isDarkTheme}>
              <FailureViewContainer>
                <FailureImage
                  alt="not found"
                  src={
                    isDarkTheme
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
                  }
                />
                <FailureHeading darkTheme={isDarkTheme}>
                  Page Not Found
                </FailureHeading>
                <FailureText darkTheme={isDarkTheme}>
                  We are sorry, the page you requested could not be found.
                </FailureText>
              </FailureViewContainer>
            </NotFoundContainer>
          </NotFoundBgContainer>
        </>
      )
    }}
  </AppContext.Consumer>
)

export default NotFound
