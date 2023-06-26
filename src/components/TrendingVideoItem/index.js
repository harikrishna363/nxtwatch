import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'
import {BsDot} from 'react-icons/bs'

import AppContext from '../../Context/AppContext'
import {
  ListContainer,
  ThumbnailImage,
  VideoDescriptionContainer,
  DescriptionTitle,
  ViewsCountPublishedTimeContainer,
  Text,
  PublishedDateContainer,
} from './styledComponent'

const TrendingVideoItem = props => {
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
              <DescriptionTitle darkTheme={isDarkTheme}>
                {videoDetails.title}
              </DescriptionTitle>
              <Text darkTheme={isDarkTheme}>{videoDetails.channel.name}</Text>
              <ViewsCountPublishedTimeContainer>
                <Text darkTheme={isDarkTheme}>{videoDetails.viewCount}</Text>
                <PublishedDateContainer>
                  <BsDot size="20" />
                  <Text darkTheme={isDarkTheme}>{formattedPublishedDate}</Text>
                </PublishedDateContainer>
              </ViewsCountPublishedTimeContainer>
            </VideoDescriptionContainer>
          </ListContainer>
        )
      }}
    </AppContext.Consumer>
  )
}

export default TrendingVideoItem
