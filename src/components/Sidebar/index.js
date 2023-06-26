import {Component} from 'react'

import AppContext from '../../Context/AppContext'
import MenuItem from '../MenuItem'
import {
  SidebarContainer,
  MenuUnorderdListContainer,
  ContactDetailsContainer,
  ContactUsHeading,
  SocialMediaAppsContainer,
  SocialMediaAppImage,
  ContactText,
} from './styledComponent'

const menuItemsList = [
  {
    id: 'HOME',
    displayText: 'Home',
    path: '/',
  },
  {
    id: 'TRENDING',
    displayText: 'Trending',
    path: '/trending',
  },
  {
    id: 'GAMING',
    displayText: 'Gaming',
    path: '/gaming',
  },
  {
    id: 'SAVED VIDEOS',
    displayText: 'Saved Videos',
    path: '/saved-videos',
  },
]

class Sidebar extends Component {
  state = {activeMenuId: 'HOME'}

  updateActiveMenuId = id => this.setState({activeMenuId: id})

  render() {
    const {activeMenuId} = this.state

    return (
      <AppContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          return (
            <SidebarContainer darkTheme={isDarkTheme}>
              <MenuUnorderdListContainer>
                {menuItemsList.map(eachItem => (
                  <MenuItem
                    key={eachItem.id}
                    menu={eachItem}
                    activeMenuId={activeMenuId}
                    updateActiveMenuId={this.updateActiveMenuId}
                  />
                ))}
              </MenuUnorderdListContainer>
              <ContactDetailsContainer>
                <ContactUsHeading darkTheme={isDarkTheme}>
                  CONTACT US
                </ContactUsHeading>
                <SocialMediaAppsContainer>
                  <SocialMediaAppImage
                    alt="facebook logo"
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                  />
                  <SocialMediaAppImage
                    alt="twitter logo"
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                  />
                  <SocialMediaAppImage
                    alt="linked in logo"
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                  />
                </SocialMediaAppsContainer>
                <ContactText darkTheme={isDarkTheme}>
                  Enjoy! Now to see your channels and recommendations!
                </ContactText>
              </ContactDetailsContainer>
            </SidebarContainer>
          )
        }}
      </AppContext.Consumer>
    )
  }
}

export default Sidebar
