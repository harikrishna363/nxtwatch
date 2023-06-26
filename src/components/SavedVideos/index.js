import {BiListPlus} from 'react-icons/bi'

import AppContext from '../../Context/AppContext'
import SavedVideoItem from '../SavedVideoItem'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import {
  DesktopSidebarContainer,
  MobileSidebarContainer,
  SavedVideosBgContainer,
  SavedVideosContainer,
  SavedVideosBannerContainer,
  SaveIconContainer,
  UnorderedListContainer,
  NoSavedVideosContainer,
  NoSavedVideosImage,
  NoSavedVideosHeading,
  NoSavedVideosText,
} from './styledComponent'

const SavedVideos = () => (
  <AppContext.Consumer>
    {value => {
      const {isDarkTheme, savedVideos} = value
      let noSavedVideos = false
      if (savedVideos.length === 0) {
        noSavedVideos = true
      }
      console.log(savedVideos)

      const renderBanner = () => (
        <SavedVideosBannerContainer
          darkTheme={isDarkTheme}
          data-testid="banner"
        >
          <SaveIconContainer>
            <BiListPlus size="30" color="#ff0000" />
          </SaveIconContainer>
          <h1>Saved Videos</h1>
        </SavedVideosBannerContainer>
      )

      const renderNoSavedVideos = () => (
        <NoSavedVideosContainer>
          <NoSavedVideosImage
            alt="no saved videos"
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
          />
          <NoSavedVideosHeading darkTheme={isDarkTheme}>
            No saved videos found
          </NoSavedVideosHeading>
          <NoSavedVideosText darkTheme={isDarkTheme}>
            You can save your videos while watching them
          </NoSavedVideosText>
        </NoSavedVideosContainer>
      )

      const renderExistedSavedVideos = () => (
        <UnorderedListContainer>
          {savedVideos.map(eachItem => (
            <SavedVideoItem key={eachItem.id} videoDetails={eachItem} />
          ))}
        </UnorderedListContainer>
      )

      return (
        <>
          <Navbar />
          <SavedVideosBgContainer>
            <DesktopSidebarContainer>
              <Sidebar />
            </DesktopSidebarContainer>
            <MobileSidebarContainer>
              <Sidebar />
            </MobileSidebarContainer>
            <SavedVideosContainer
              darkTheme={isDarkTheme}
              data-testid="savedVideos"
            >
              {renderBanner()}
              {noSavedVideos && renderNoSavedVideos()}
              {!noSavedVideos && renderExistedSavedVideos()}
            </SavedVideosContainer>
          </SavedVideosBgContainer>
        </>
      )
    }}
  </AppContext.Consumer>
)

export default SavedVideos
