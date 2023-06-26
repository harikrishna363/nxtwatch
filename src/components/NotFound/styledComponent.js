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
export const NotFoundBgContainer = styled.div`
  width: 100vw;
  height: 88vh;
  display: flex;
  @media screen and (max-width: 767px) {
    height: 90vh;
    flex-direction: column;
  }
`
export const NotFoundContainer = styled.div`
  overflow-y: auto;
  background-color: ${props => (props.darkTheme ? '#0f0f0f' : '#f9f9f9')};
  max-height: 90vh;
  width: 100%;
  display: flex;
  padding-top: 100px;
  flex-direction: column;
  @media screen and (max-width: 767px) {
    height: 87vh;
  }
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
