import {Component} from 'react'
import {FaGamepad} from 'react-icons/fa'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import AppContext from '../../Context/AppContext'
import GamingVideoItem from '../GamingVideoItem'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import {
  DesktopSidebarContainer,
  MobileSidebarContainer,
  GamingBgContainer,
  GamingContainer,
  GamingBannerContainer,
  GameIconContainer,
  LoaderContainer,
  UnorderedListContainer,
  FailureViewContainer,
  FailureImage,
  FailureHeading,
  FailureText,
  FailureRetryButton,
} from './styledComponent'

const apiStatusConstants = {
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Gaming extends Component {
  state = {apiStatus: apiStatusConstants.loading, gamingVideos: {}}

  componentDidMount() {
    this.getGamingVideos()
  }

  getGamingVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.loading})
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const apiUrl = 'https://apis.ccbp.in/videos/gaming'
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      const formattedData = {
        total: data.total,
        videos: data.videos.map(eachItem => ({
          id: eachItem.id,
          title: eachItem.title,
          thumbnailUrl: eachItem.thumbnail_url,
          viewCount: eachItem.view_count,
        })),
      }
      this.setState({
        gamingVideos: formattedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderBanner = isDarkTheme => (
    <GamingBannerContainer darkTheme={isDarkTheme} data-testid="banner">
      <GameIconContainer>
        <FaGamepad size="30" color="#ff0000" />
      </GameIconContainer>
      <h1>Gaming</h1>
    </GamingBannerContainer>
  )

  renderTrendingVideos = isDarkTheme => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.loading:
        return this.renderLoadingView(isDarkTheme)
      case apiStatusConstants.success:
        return this.renderSuccessView()
      case apiStatusConstants.failure:
        return this.renderFailureView(isDarkTheme)
      default:
        return null
    }
  }

  renderLoadingView = isDarkTheme => (
    <LoaderContainer
      className="loader-container"
      data-testid="loader"
      darkTheme={isDarkTheme}
    >
      <Loader
        type="ThreeDots"
        color={isDarkTheme ? '#ebebeb' : '#00306e'}
        height="50"
        width="50"
      />
    </LoaderContainer>
  )

  renderSuccessView = () => {
    const {gamingVideos} = this.state
    return (
      <UnorderedListContainer>
        {gamingVideos.videos.map(eachItem => (
          <GamingVideoItem key={eachItem.id} videoDetails={eachItem} />
        ))}
      </UnorderedListContainer>
    )
  }

  renderFailureView = isDarkTheme => (
    <FailureViewContainer>
      <FailureImage
        alt="failure view"
        src={
          isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        }
      />
      <FailureHeading darkTheme={isDarkTheme}>
        Oops! Something Went Wrong
      </FailureHeading>
      <FailureText darkTheme={isDarkTheme}>
        We are having some trouble to complete your request.
        <br />
        Please try again.
      </FailureText>
      <FailureRetryButton type="button" onClick={this.getGamingVideos}>
        Retry
      </FailureRetryButton>
    </FailureViewContainer>
  )

  render() {
    return (
      <AppContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          return (
            <>
              <Navbar />
              <GamingBgContainer>
                <DesktopSidebarContainer>
                  <Sidebar />
                </DesktopSidebarContainer>
                <MobileSidebarContainer>
                  <Sidebar />
                </MobileSidebarContainer>
                <GamingContainer darkTheme={isDarkTheme} data-testid="gaming">
                  {this.renderBanner(isDarkTheme)}
                  {this.renderTrendingVideos(isDarkTheme)}
                </GamingContainer>
              </GamingBgContainer>
            </>
          )
        }}
      </AppContext.Consumer>
    )
  }
}

export default Gaming
