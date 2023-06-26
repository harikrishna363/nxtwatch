import {Component} from 'react'
import ReactPlayer from 'react-player'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {BiLike, BiDislike, BiListPlus} from 'react-icons/bi'
import {BsDot} from 'react-icons/bs'
import {formatDistanceToNow} from 'date-fns'

import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import AppContext from '../../Context/AppContext'
import {
  DesktopSidebarContainer,
  MobileSidebarContainer,
  VideoItemDetailsBgContainer,
  VideoItemDetailsContainer,
  VideoPlayerContainer,
  LoaderContainer,
  VideoTitle,
  VideoInfoContainer,
  VideoInfoLeftContainer,
  VideoInfoRightContainer,
  VideoInfoText,
  Button,
  ButtonText,
  IconContainer,
  HorizontalLine,
  DescriptionContainer,
  ChannelProfileImage,
  DescriptionContentContainer,
  ChannelInfoContainer,
  ChannelName,
  ChannelSubscribersCount,
  DescriptionText,
  PublishedDateContainer,
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

class VideoItemDetails extends Component {
  state = {
    apiStatus: apiStatusConstants.loading,
    videoItemDetails: {},
    isVideoSaved: false,
    isVideoLiked: false,
    isVideoDisliked: false,
  }

  componentDidMount() {
    const {match} = this.props
    const {params} = match
    const {id} = params
    this.getVideoItemDetails(id)
  }

  updateToSavedVideo = () => this.setState({isVideoSaved: true})

  getVideoItemDetails = async id => {
    this.setState({apiStatus: apiStatusConstants.loading})

    const apiUrl = `https://apis.ccbp.in/videos/${id}`
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      const formattedData = {
        videoDetails: {
          id: data.video_details.id,
          title: data.video_details.title,
          videoUrl: data.video_details.video_url,
          thumbnailUrl: data.video_details.thumbnail_url,
          channel: {
            name: data.video_details.channel.name,
            profileImageUrl: data.video_details.channel.profile_image_url,
            subscriberCount: data.video_details.channel.subscriber_count,
          },
          viewCount: data.video_details.view_count,
          publishedAt: data.video_details.published_at,
          description: data.video_details.description,
        },
      }

      this.setState({
        videoItemDetails: formattedData.videoDetails,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderVideoItemDetails = (
    isDarkTheme,
    addToSavedVideos,
    removeFromSavedVideos,
  ) => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.loading:
        return this.renderLoadingView(isDarkTheme)
      case apiStatusConstants.success:
        return this.renderSuccessView(
          isDarkTheme,
          addToSavedVideos,
          removeFromSavedVideos,
        )
      case apiStatusConstants.failure:
        return this.renderFailureView(isDarkTheme)
      default:
        return null
    }
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
      <FailureRetryButton type="button" onClick={this.getVideoItemDetails}>
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

  renderSuccessView = (
    isDarkTheme,
    addToSavedVideos,
    removeFromSavedVideos,
  ) => {
    const {
      videoItemDetails,
      isVideoLiked,
      isVideoDisliked,
      isVideoSaved,
    } = this.state
    const publishedDate = formatDistanceToNow(
      new Date(videoItemDetails.publishedAt),
    )
    let formattedPublishedDate
    for (let i = 0; i <= publishedDate.length; i += 1) {
      if (publishedDate[i] === ' ') {
        formattedPublishedDate = `${publishedDate.slice(i)} ago`
        break
      }
    }

    const updateSavedVideos = () => {
      if (!isVideoSaved) {
        addToSavedVideos(videoItemDetails)
      } else {
        removeFromSavedVideos(videoItemDetails)
      }
    }

    const onSaveButton = () =>
      this.setState(
        prevState => ({isVideoSaved: !prevState.isVideoSaved}),
        updateSavedVideos,
      )

    const onLikeButton = () =>
      this.setState(prevState => ({
        isVideoLiked: !prevState.isVideoLiked,
        isVideoDisliked: false,
      }))

    const onDisikeButton = () =>
      this.setState(prevState => ({
        isVideoLiked: false,
        isVideoDisliked: !prevState.isVideoDisliked,
      }))

    return (
      <>
        <VideoPlayerContainer>
          <ReactPlayer
            url={videoItemDetails.videoUrl}
            controls
            width="100%"
            height="450px"
          />
          <VideoTitle darkTheme={isDarkTheme}>
            {videoItemDetails.title}
          </VideoTitle>
          <VideoInfoContainer>
            <VideoInfoLeftContainer>
              <VideoInfoText darkTheme={isDarkTheme}>
                {videoItemDetails.viewCount}
              </VideoInfoText>
              <PublishedDateContainer>
                <BsDot size="20" />
                <VideoInfoText darkTheme={isDarkTheme}>
                  {formattedPublishedDate}
                </VideoInfoText>
              </PublishedDateContainer>
            </VideoInfoLeftContainer>
            <VideoInfoRightContainer>
              <Button type="button" onClick={onLikeButton}>
                <IconContainer
                  darkTheme={isDarkTheme}
                  isVideoLiked={isVideoLiked}
                >
                  <BiLike size="20" />
                </IconContainer>
                <ButtonText darkTheme={isDarkTheme} isVideoLiked={isVideoLiked}>
                  {isVideoLiked ? 'Liked' : 'Like'}
                </ButtonText>
              </Button>
              <Button type="button" onClick={onDisikeButton}>
                <IconContainer
                  darkTheme={isDarkTheme}
                  isVideoDisliked={isVideoDisliked}
                >
                  <BiDislike size="20" />
                </IconContainer>
                <ButtonText
                  darkTheme={isDarkTheme}
                  isVideoDisliked={isVideoDisliked}
                >
                  {isVideoDisliked ? 'Disliked' : 'Dislike'}
                </ButtonText>
              </Button>
              <Button type="button" onClick={onSaveButton}>
                <IconContainer
                  darkTheme={isDarkTheme}
                  isVideoSaved={isVideoSaved}
                >
                  <BiListPlus size="20" />
                </IconContainer>
                <ButtonText darkTheme={isDarkTheme} isVideoSaved={isVideoSaved}>
                  {isVideoSaved ? 'Saved' : 'Save'}
                </ButtonText>
              </Button>
            </VideoInfoRightContainer>
          </VideoInfoContainer>
          <HorizontalLine />
          <DescriptionContainer>
            <ChannelProfileImage
              alt="profile"
              src={videoItemDetails.channel.profileImageUrl}
            />
            <DescriptionContentContainer>
              <ChannelInfoContainer>
                <ChannelName darkTheme={isDarkTheme}>
                  {videoItemDetails.channel.name}
                </ChannelName>
                <ChannelSubscribersCount darkTheme={isDarkTheme}>
                  {videoItemDetails.channel.subscriberCount} subscribers
                </ChannelSubscribersCount>
              </ChannelInfoContainer>
              <DescriptionText darkTheme={isDarkTheme}>
                {videoItemDetails.description}
              </DescriptionText>
            </DescriptionContentContainer>
          </DescriptionContainer>
        </VideoPlayerContainer>
      </>
    )
  }

  render() {
    return (
      <AppContext.Consumer>
        {value => {
          const {isDarkTheme, addToSavedVideos, removeFromSavedVideos} = value

          return (
            <>
              <Navbar />
              <VideoItemDetailsBgContainer>
                <DesktopSidebarContainer>
                  <Sidebar />
                </DesktopSidebarContainer>
                <MobileSidebarContainer>
                  <Sidebar />
                </MobileSidebarContainer>
                <VideoItemDetailsContainer
                  darkTheme={isDarkTheme}
                  data-testid="videoItemDetails"
                >
                  {this.renderVideoItemDetails(
                    isDarkTheme,
                    addToSavedVideos,
                    removeFromSavedVideos,
                  )}
                </VideoItemDetailsContainer>
              </VideoItemDetailsBgContainer>
            </>
          )
        }}
      </AppContext.Consumer>
    )
  }
}

export default VideoItemDetails
