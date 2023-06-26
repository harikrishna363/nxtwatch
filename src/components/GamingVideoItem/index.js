import {Link} from 'react-router-dom'

import AppContext from '../../Context/AppContext'
import {
  ListContainer,
  ThumbnailImage,
  VideoDescriptionContainer,
  DescriptionTitle,
  Text,
} from './styledComponent'

const GamingVideoItem = props => {
  const {videoDetails} = props

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
              <Text darkTheme={isDarkTheme}>
                {videoDetails.viewCount} Watching Worldwide
              </Text>
            </VideoDescriptionContainer>
          </ListContainer>
        )
      }}
    </AppContext.Consumer>
  )
}

export default GamingVideoItem
