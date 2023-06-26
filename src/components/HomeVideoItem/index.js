import {Link} from 'react-router-dom'
import {BsDot} from 'react-icons/bs'
import {formatDistanceToNow} from 'date-fns'

import AppContext from '../../Context/AppContext'
import {
  ListContainer,
  ThumbnailImage,
  VideoDescriptionContainer,
  ChannelProfileImage,
  DescriptionContentContainer,
  DescriptionTitle,
  ViewsCountPublishedTimeContainer,
  Text,
  PublishedDateContainer,
} from './styledComponent'

const HomeVideoItem = props => {
  const {videoDetails} = props
  const publishedDate = formatDistanceToNow(new Date(videoDetails.publishedAt))
  let formattedPublishedDate
  for (let i = 0; i <= publishedDate.length; i += 1) {
    if (publishedDate[i] === ' ') {
      formattedPublishedDate = `${publishedDate.slice(i)} ago`
      break
    }
  }

  return (
    <AppContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <ListContainer>
            <Link to={`/videos/${videoDetails.id}`}>
              <ThumbnailImage
                alt="video thumbnail"
                src={videoDetails.thumbnailUrl}
              />
            </Link>
            <VideoDescriptionContainer>
              <ChannelProfileImage
                alt="channel logo"
                src={videoDetails.channel.profileImageUrl}
              />
              <DescriptionContentContainer>
                <DescriptionTitle darkTheme={isDarkTheme}>
                  {videoDetails.title}
                </DescriptionTitle>
                <Text darkTheme={isDarkTheme}>{videoDetails.channel.name}</Text>
                <ViewsCountPublishedTimeContainer>
                  <Text darkTheme={isDarkTheme}>{videoDetails.viewCount}</Text>
                  <PublishedDateContainer>
                    <BsDot size="20" />
                    <Text darkTheme={isDarkTheme}>
                      {formattedPublishedDate}
                    </Text>
                  </PublishedDateContainer>
                </ViewsCountPublishedTimeContainer>
              </DescriptionContentContainer>
            </VideoDescriptionContainer>
          </ListContainer>
        )
      }}
    </AppContext.Consumer>
  )
}

export default HomeVideoItem
