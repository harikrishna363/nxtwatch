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
export const SavedVideosBgContainer = styled.div`
  width: 100vw;
  height: 88vh;
  display: flex;
  @media screen and (max-width: 767px) {
    height: 90vh;
    flex-direction: column;
  }
`
export const SavedVideosContainer = styled.div`
  overflow-y: auto;
  background-color: ${props => (props.darkTheme ? '#0f0f0f' : '#f9f9f9')};
  max-height: 90vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 767px) {
    padding: 10px;
    height: 87vh;
  }
`
export const SavedVideosBannerContainer = styled.div`
  background-color: ${props => (props.darkTheme ? '#424242' : '#e2e8f0')};
  color: ${props => (props.darkTheme ? '#f1f5f9' : '#212121')};
  padding: 70px;
  padding-left: 70px;
  width: 100%;
  height: 150px;
  display: flex;
  align-items: center;
  font-family: Roboto;
  @media screen and (max-width: 767px) {
    padding: 30px;
    height: 100px;
    width: 100%;
    font-size: 12px;
  }
`
export const SaveIconContainer = styled.div`
  background-color: ${props => (props.darkTheme ? '#000000' : '#cbd5e1')};
  border-radius: 47px;
  margin-right: 20px;
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 767px) {
    height: 50px;
    width: 50px;
    border-radius: 50px;
  }
`
export const UnorderedListContainer = styled.ul`
  padding-left: 0px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  list-style: none;
  @media screen and (max-width: 767px) {
    flex-direction: column;
    flex-wrap: nowrap;
  }
`
export const NoSavedVideosContainer = styled.div`
  font-family: Roboto;
  padding: 30px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`
export const NoSavedVideosImage = styled.img`
  width: 30%;
  @media screen and (max-width: 767px) {
    width: 70%;
  }
`
export const NoSavedVideosHeading = styled.h1`
  color: ${props => (props.darkTheme ? '#ebebeb' : '#231f20')};
  font-size: 28px;
`
export const NoSavedVideosText = styled.p`
  color: ${props => (props.darkTheme ? '#64748b' : '#64748b')};
  font-size: 18px;
  font-weight: 400;
`
