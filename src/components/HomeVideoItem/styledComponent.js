import styled from 'styled-components'

export const ListContainer = styled.li`
  margin: 10px;
  margin-left: 0px;
  margin-right: 20px;
  width: 380px;
  height: auto;
  @media screen and (max-width: 767px) {
    width: 100%;
    margin: 0px;
    margin-right: 0px;
  }
`
export const ThumbnailImage = styled.img`
  width: 100%;
  height: 200px;
  margin-bottom: 15px;
`
export const VideoDescriptionContainer = styled.div`
  font-family: Roboto;
  display: flex;
  width: 100%;
  height: 100%;
`
export const ChannelProfileImage = styled.img`
  margin: 10px;
  margin-top: 0px;
  margin-left: 0px;
  height: 30px;
  width: 30px;
`
export const DescriptionContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  padding-top: 0px;
`
export const DescriptionTitle = styled.p`
  color: ${props => (props.darkTheme ? '#f1f1f1' : '#212121')};
  margin: 0px;
  margin-bottom: 7px;
  font-size: 16px;
`
export const ViewsCountPublishedTimeContainer = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media screen and (max-width: 767px) {
    margin-bottom: 0px;
  }
`
export const Text = styled.p`
  color: ${props => (props.darkTheme ? ' #94a3b8' : '#64748b')};
  margin: 7px;
  margin-left: 0px;
  margin-right: 12px;
`
export const PublishedDateContainer = styled.div`
  color: ${props => (props.darkTheme ? '#616e7c' : '#64748b')};
  display: flex;
  align-items: center;
`
