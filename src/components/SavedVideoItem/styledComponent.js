import styled from 'styled-components'

export const ListContainer = styled.li`
  margin: 20px;
  width: 90%;
  display: flex;
  @media screen and (max-width: 767px) {
    margin: 0px;
    width: 100%;
    flex-direction: column;
  }
`
export const ThumbnailImage = styled.img`
  width: 400px;
  height: 240px;
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`
export const VideoDescriptionContainer = styled.div`
  padding: 10px;
  padding-left: 20px;
  font-family: Roboto;
  display: flex;
  flex-direction: column;
  height: 100%;
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
