import {withRouter, Link} from 'react-router-dom'
import {HiMoon, HiOutlineSun} from 'react-icons/hi'
import {FiLogOut} from 'react-icons/fi'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'

import AppContext from '../../Context/AppContext'
import {
  NavbarContainer,
  LogoImage,
  UnorderedListContainer,
  ListContainer,
  ThemeButton,
  DesktopThemeContainer,
  MobileThemeContainer,
  ProfileImage,
  LogoutButton,
  LogoutIconContainer,
  PopupContainer,
  PopupButtonsContainer,
  PopupCancelButton,
  PopupConfirmButton,
} from './styledComponent'

const Navbar = props => (
  <AppContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme, updateActiveMenuId} = value
      const onThemeButton = () => toggleTheme()
      const onLogoutButton = () => {
        Cookies.remove('jwt_token')
        const {history} = props
        history.replace('/login')
      }
      const onWebsiteLogo = () => updateActiveMenuId('HOME')

      return (
        <NavbarContainer darkTheme={isDarkTheme}>
          <Link to="/">
            <LogoImage
              onClick={onWebsiteLogo}
              alt="website logo"
              src={
                isDarkTheme
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
              }
            />
          </Link>
          <UnorderedListContainer>
            <ListContainer>
              <ThemeButton data-testid="theme" onClick={onThemeButton}>
                <DesktopThemeContainer>
                  {!isDarkTheme && <HiMoon color="#000000" size="30" />}
                  {isDarkTheme && <HiOutlineSun color="#ffffff" size="30" />}
                </DesktopThemeContainer>
                <MobileThemeContainer>
                  {!isDarkTheme && <HiMoon color="#000000" size="25" />}
                  {isDarkTheme && <HiOutlineSun color="#ffffff" size="25" />}
                </MobileThemeContainer>
              </ThemeButton>
            </ListContainer>
            <ListContainer>
              <ProfileImage
                alt="profile"
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              />
            </ListContainer>
            <Popup
              modal
              trigger={
                <ListContainer>
                  <LogoutButton type="button" darkTheme={isDarkTheme}>
                    Logout
                  </LogoutButton>
                  <LogoutIconContainer>
                    <FiLogOut
                      size="21"
                      color={isDarkTheme ? ' #f1f5f9' : '#1e293b'}
                    />
                  </LogoutIconContainer>
                </ListContainer>
              }
            >
              {close => (
                <PopupContainer darkTheme={isDarkTheme}>
                  <p>Are you sure, you want to logout?</p>
                  <PopupButtonsContainer>
                    <PopupCancelButton onClick={() => close()}>
                      Cancel
                    </PopupCancelButton>
                    <PopupConfirmButton onClick={onLogoutButton}>
                      Confirm
                    </PopupConfirmButton>
                  </PopupButtonsContainer>
                </PopupContainer>
              )}
            </Popup>
          </UnorderedListContainer>
        </NavbarContainer>
      )
    }}
  </AppContext.Consumer>
)

export default withRouter(Navbar)
