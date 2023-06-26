import styled from 'styled-components'

export const ListContainer = styled.li`
  margin: 10px;
  width: 250px;
  height: 400px;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 767px) {
    margin: 0px;
    height: auto;
    width: 100%;
    flex-direction: column;
  }
`
export const ThumbnailImage = styled.img`
  width: 100%;
  height: 300px;
  @media screen and (max-width: 767px) {
    height: 410px;
  }
`
export const VideoDescriptionContainer = styled.div`
  padding: 10px;
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
export const Text = styled.p`
  color: ${props => (props.darkTheme ? ' #94a3b8' : '#64748b')};
  margin: 7px;
  margin-left: 0px;
  margin-right: 12px;
`
