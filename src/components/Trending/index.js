import {Component} from 'react'
import {ImFire} from 'react-icons/im'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import AppContext from '../../Context/AppContext'
import TrendingVideoItem from '../TrendingVideoItem'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import {
  DesktopSidebarContainer,
  MobileSidebarContainer,
  TrendingBgContainer,
  TrendingContainer,
  TrendingBannerContainer,
  FireIconContainer,
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

class Trending extends Component {
  state = {apiStatus: apiStatusConstants.loading, trendingVideos: {}}

  componentDidMount() {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.loading})
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const apiUrl = 'https://apis.ccbp.in/videos/trending'
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
          publishedAt: eachItem.published_at,
          channel: {
            name: eachItem.channel.name,
            profileImageUrl: eachItem.channel.profile_image_url,
          },
        })),
      }
      this.setState({
        trendingVideos: formattedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderBanner = isDarkTheme => (
    <TrendingBannerContainer darkTheme={isDarkTheme} data-testid="banner">
      <FireIconContainer>
        <ImFire size="30" color="#ff0000" />
      </FireIconContainer>
      <h1>Trending</h1>
    </TrendingBannerContainer>
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
    const {trendingVideos} = this.state

    return (
      <UnorderedListContainer>
        {trendingVideos.videos.map(eachItem => (
          <TrendingVideoItem key={eachItem.id} videoDetails={eachItem} />
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
      <FailureRetryButton type="button" onClick={this.getTrendingVideos}>
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
              <TrendingBgContainer>
                <DesktopSidebarContainer>
                  <Sidebar />
                </DesktopSidebarContainer>
                <MobileSidebarContainer>
                  <Sidebar />
                </MobileSidebarContainer>
                <TrendingContainer
                  darkTheme={isDarkTheme}
                  data-testid="trending"
                >
                  {this.renderBanner(isDarkTheme)}
                  {this.renderTrendingVideos(isDarkTheme)}
                </TrendingContainer>
              </TrendingBgContainer>
            </>
          )
        }}
      </AppContext.Consumer>
    )
  }
}

export default Trending
