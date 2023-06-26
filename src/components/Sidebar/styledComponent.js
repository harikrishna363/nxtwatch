import styled from 'styled-components'

export const SidebarContainer = styled.div`
  background-color: ${props => (props.darkTheme ? '#231f20' : '#ffffff')};
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (max-width: 767px) {
    background-color: ${props => (props.darkTheme ? '#212121' : '#ffffff')};
  }
`
export const MenuUnorderdListContainer = styled.ul`
  padding-left: 0px;
  width: 100%;
  height: 100%;
  list-style: none;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 767px) {
    justify-content: space-evenly;
    flex-direction: row;
    align-items: center;
    height: 22px;
    padding: 0px;
  }
`
export const ContactDetailsContainer = styled.div`
  padding: 20px;
  padding-bottom: 0px;
  width: 100%;
  display: flex;
  flex-direction: column;
  font-weight: 500;
  @media screen and (max-width: 767px) {
    display: none;
  }
`
export const ContactUsHeading = styled.p`
  color: ${props => (props.darkTheme ? '#f1f1f1' : '#231f20')};
  font-size: 16px;
`
export const SocialMediaAppsContainer = styled.div`
  display: flex;
  align-items: center;
`
export const SocialMediaAppImage = styled.img`
  margin: 10px;
  margin-left: 0px;
  height: 30px;
  width: 30px;
`
export const ContactText = styled.p`
  color: ${props => (props.darkTheme ? '#d7dfe9' : '#383838')};
  font-size: 16px;
`
