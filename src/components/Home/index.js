import {Component} from 'react'
import Cookies from 'js-cookie'
import {RiCloseLine} from 'react-icons/ri'
import {AiOutlineSearch} from 'react-icons/ai'
import Loader from 'react-loader-spinner'

import AppContext from '../../Context/AppContext'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import HomeVideoItem from '../HomeVideoItem'
import {
  DesktopSidebarContainer,
  MobileSidebarContainer,
  HomeBgContainer,
  HomeContainer,
  HomeVideosContainer,
  BannerContainer,
  BannerCloseButton,
  BannerContentContainer,
  BannerLogo,
  GetItNowButton,
  DesktopSearchContainer,
  MobileSearchContainer,
  SearchContainer,
  SearchInput,
  SearchButton,
  UnorderedListContainer,
  LoaderContainer,
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
  noVideos: 'NOVIDEOS',
}

class Home extends Component {
  state = {
    showBanner: true,
    searchInput: '',
    homeVideos: {},
    apiStatus: apiStatusConstants.loading,
  }

  componentDidMount() {
    this.getHomeVideos()
  }

  getHomeVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.loading})
    const {searchInput} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
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
        homeVideos: formattedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderBanner = isDarkTheme => (
    <BannerContainer data-testid="banner">
      <BannerCloseButton
        onClick={this.closeBanner}
        data-testid="close"
        darkTheme={isDarkTheme}
      >
        <RiCloseLine size="20" />
      </BannerCloseButton>
      <BannerContentContainer>
        <BannerLogo
          alt="nxt watch logo"
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
        />
        <p>Buy Nxt Watch Premium prepaid plans with UPI</p>
        <GetItNowButton type="button">GET IT NOW</GetItNowButton>
      </BannerContentContainer>
    </BannerContainer>
  )

  closeBanner = () => this.setState({showBanner: false})

  updateSearchInput = event => this.setState({searchInput: event.target.value})

  onSearchButton = () => this.getHomeVideos()

  renderSearchInput = isDarkTheme => {
    const {searchInput} = this.state
    return (
      <SearchContainer>
        <SearchInput
          type="search"
          placeholder="Search"
          value={searchInput}
          onChange={this.updateSearchInput}
          darkTheme={isDarkTheme}
          onKeyPress={this.getHomeVideos}
        />
        <SearchButton
          type="button"
          darkTheme={isDarkTheme}
          onClick={this.onSearchButton}
          data-testid="searchButton"
        >
          <AiOutlineSearch size="20" />
        </SearchButton>
      </SearchContainer>
    )
  }

  renderHomeVideos = isDarkTheme => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.loading:
        return this.renderLoadingView(isDarkTheme)
      case apiStatusConstants.success:
        return this.renderSuccessView(isDarkTheme)
      case apiStatusConstants.failure:
        return this.renderFailureView(isDarkTheme)
      case apiStatusConstants.noVideos:
        return this.renderNoVideos(isDarkTheme)
      default:
        return null
    }
  }

  renderNoVideos = isDarkTheme => (
    <FailureViewContainer darkTheme={isDarkTheme}>
      <FailureImage
        alt="no videos"
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
      />
      <FailureHeading darkTheme={isDarkTheme}>
        No Search results found
      </FailureHeading>
      <FailureText darkTheme={isDarkTheme}>
        Try different key words or remove search filter
      </FailureText>
      <FailureRetryButton onClick={this.getHomeVideos}>
        Retry
      </FailureRetryButton>
    </FailureViewContainer>
  )

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
    const {homeVideos} = this.state
    if (homeVideos.videos.length === 0) {
      this.setState({apiStatus: apiStatusConstants.noVideos})
    }

    return (
      <UnorderedListContainer>
        {homeVideos.videos.map(eachItem => (
          <HomeVideoItem key={eachItem.id} videoDetails={eachItem} />
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
      <FailureRetryButton type="button" onClick={this.getHomeVideos}>
        Retry
      </FailureRetryButton>
    </FailureViewContainer>
  )

  render() {
    const {showBanner} = this.state

    return (
      <AppContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          return (
            <>
              <Navbar />
              <HomeBgContainer>
                <DesktopSidebarContainer>
                  <Sidebar />
                </DesktopSidebarContainer>
                <MobileSidebarContainer>
                  <Sidebar />
                </MobileSidebarContainer>
                <MobileSearchContainer darkTheme={isDarkTheme}>
                  {this.renderSearchInput(isDarkTheme)}
                </MobileSearchContainer>
                <HomeContainer darkTheme={isDarkTheme} data-testid="home">
                  {showBanner && this.renderBanner(isDarkTheme)}
                  <HomeVideosContainer>
                    <DesktopSearchContainer>
                      {this.renderSearchInput(isDarkTheme)}
                    </DesktopSearchContainer>
                    {this.renderHomeVideos(isDarkTheme)}
                  </HomeVideosContainer>
                </HomeContainer>
              </HomeBgContainer>
            </>
          )
        }}
      </AppContext.Consumer>
    )
  }
}

export default Home
