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
export const HomeBgContainer = styled.div`
  width: 100vw;
  height: 88vh;
  display: flex;
  @media screen and (max-width: 767px) {
    height: 90vh;
    flex-direction: column;
    justify-content: space-between;
  }
`
export const HomeContainer = styled.div`
  overflow-y: auto;
  background-color: ${props => (props.darkTheme ? '#181818' : '#f9f9f9')};
  max-height: 90vh;
  width: 100%;
  @media screen and (max-width: 767px) {
    padding: 10px;
    height: 87vh;
  }
`
export const HomeVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 20px;
  @media screen and (max-width: 767px) {
    padding: 0px;
  }
`
export const BannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  height: 250px;
  width: 100%;
  padding: 30px;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 767px) {
    box-shadow: 0px 4px 16px 0px
      ${props => (props.darkTheme ? 'black' : '#bfbfbf')};
    padding: 15px;
    height: 220px;
  }
`
export const BannerCloseButton = styled.button`
  align-self: flex-end;
  cursor: pointer;
  border: none;
  background-color: transparent;
`
export const BannerContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  font-size: 18px;
  font-weight: 500;
  color: #424242;
  @media screen and (max-width: 767px) {
    width: 90%;
  }
`
export const BannerLogo = styled.img`
  width: 200px;
  height: 40px;
  @media screen and (max-width: 767px) {
    height: 30px;
    width: 150px;
  }
`
export const GetItNowButton = styled.div`
  font-size: 16px;
  align-self: flex-start;
  border: 2px solid #424242;
  border-radius: 3px;
  padding: 10px;
`
export const DesktopSearchContainer = styled.div`
  width: 100%;
  @media screen and (max-width: 767px) {
    display: none;
  }
`
export const MobileSearchContainer = styled.div`
  width: 100%;
  background-color: ${props => (props.darkTheme ? '#181818' : '#f9f9f9')};
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const SearchContainer = styled.div`
  align-self: flex-start;
  display: flex;
  @media screen and (max-width: 767px) {
    width: 100%;
    margin-top: 5px;
    padding: 10px;
  }
`
export const SearchInput = styled.input`
  background-color: transparent;
  color: ${props => (props.darkTheme ? '#ebebeb' : '#212121')};
  height: 35px;
  width: 400px;
  padding: 10px;
  border: 2px solid ${props => (props.darkTheme ? '#424242' : '#909090')};
`
export const SearchButton = styled.button`
  background-color: ${props => (props.darkTheme ? '#606060' : '#cccccc')};
  color: ${props => (props.darkTheme ? '#cccccc' : '#424242')};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  height: 35px;
  width: 60px;
  border: 2px solid ${props => (props.darkTheme ? '#424242' : '#909090')};
`
export const UnorderedListContainer = styled.ul`
  padding-left: 0px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  @media screen and (max-width: 767px) {
    flex-direction: column;
    flex-wrap: nowrap;
  }
`
export const LoaderContainer = styled.div`
  margin-top: 50px;
`
export const FailureViewContainer = styled.div`
  background-color: ${props => (props.darkTheme ? '#0f0f0f' : '#f9f9f9')};
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
  @media screen and (max-width: 767px) {
    width: 50%;
  }
`
export const FailureHeading = styled.h1`
  color: ${props => (props.darkTheme ? '#ebebeb' : '#231f20')};
  font-size: 28px;
  @media screen and (max-width: 767px) {
    font-size: 20px;
  }
`
export const FailureText = styled.p`
  color: ${props => (props.darkTheme ? '#64748b' : '#64748b')};
  font-size: 18px;
  font-weight: 400;
  @media screen and (max-width: 767px) {
    font-size: 16px;
  }
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
export const Footer = styled.div`
  height: 3vh;
  color: black;
`
