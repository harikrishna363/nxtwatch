import styled from 'styled-components'

export const DesktopSidebarContainer = styled.div`
  width: 18%;
  @media screen and (max-width: 767px) {
    display: none;
  }
`
export const MobileSidebarContainer = styled.div`
  width: 100%;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const VideoItemDetailsBgContainer = styled.div`
  background-color: ${props => (props.darkTheme ? '#0f0f0f' : '#f9f9f9')};
  width: 100vw;
  height: 88vh;
  display: flex;
  @media screen and (max-width: 767px) {
    height: 90vh;
    flex-direction: column;
  }
`
export const VideoItemDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  background-color: ${props => (props.darkTheme ? '#0f0f0f' : '#f9f9f9')};
  max-height: 90vh;
  width: 100%;
  padding: 20px;
  @media screen and (max-width: 767px) {
    padding: 10px;
    height: 87vh;
  }
`
export const VideoPlayerContainer = styled.div`
  align-self: flex-start;
  width: 70%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 767px) {
    height: 100%;
    width: 100%;
  }
`
export const VideoTitle = styled.p`
  color: ${props => (props.darkTheme ? '#f8fafc' : '#231f20')};
  font-weight: 500;
  font-size: 16px;
`
export const LoaderContainer = styled.div`
  margin-top: 80px;
`
export const VideoInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`
export const VideoInfoLeftContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 130px;
`
export const VideoInfoRightContainer = styled.div`
  display: flex;
  @media screen and (max-width: 767px) {
    align-self: flex-end;
  }
`
export const VideoInfoText = styled.p`
  color: ${props => (props.darkTheme ? '#616e7c' : '#64748b')};
  font-size: 15px;
`
export const Button = styled.div`
  border: none;
  background-color: transparent;
  margin-left: 10px;
  margin-right: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`
export const ButtonText = styled.p`
  font-size: 15px;
  font-weight: 500;
  color: ${props => {
    if (props.isVideoSaved || props.isVideoLiked || props.isVideoDisliked) {
      return '#2563eb'
    }
    return '#64748b'
  }};
`
export const IconContainer = styled.div`
  color: ${props => {
    if (props.isVideoSaved || props.isVideoLiked || props.isVideoDisliked) {
      return '#2563eb'
    }
    return '#64748b'
  }};
  margin-top: 7px;
  margin-right: 4px;
`
export const HorizontalLine = styled.hr`
  width: 100%;
  margin-bottom: 30px;
`
export const DescriptionContainer = styled.div`
  display: flex;
  margin-bottom: 30px;
`
export const ChannelProfileImage = styled.img`
  margin-right: 10px;
  height: 50px;
  width: 50px;
  @media screen and (max-width: 767px) {
    height: 35px;
    width: 35px;
  }
`
export const DescriptionContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const ChannelInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const ChannelName = styled.p`
  color: ${props => (props.darkTheme ? '#f8fafc' : '#231f20')};
  font-weight: 500;
  margin: 0px;
  font-size: 16px;
`
export const ChannelSubscribersCount = styled.p`
  color: ${props => (props.darkTheme ? '#616e7c' : '#64748b')};
  margin: 5px;
  margin-left: 0px;
  font-size: 14px;
`
export const DescriptionText = styled.p`
  font-size: 15px;
  color: ${props => (props.darkTheme ? '#d7dfe9' : '#383838')};
`
export const PublishedDateContainer = styled.div`
  color: ${props => (props.darkTheme ? '#616e7c' : '#64748b')};
  display: flex;
  align-items: center;
`
export const FailureViewContainer = styled.div`
  font-family: Roboto;
  padding: 30px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`
export const FailureImage = styled.img`
  width: 30%;
`
export const FailureHeading = styled.h1`
  color: ${props => (props.darkTheme ? '#ebebeb' : '#231f20')};
  font-size: 28px;
`
export const FailureText = styled.p`
  color: ${props => (props.darkTheme ? '#64748b' : '#64748b')};
  font-size: 18px;
  font-weight: 400;
`
export const FailureRetryButton = styled.button`
  width: 100px;
  padding: 10px;
  background-color: #4f46e5;
  color: #f1f1f1;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`
