import styled from 'styled-components'

export const NavbarContainer = styled.nav`
  background-color: ${props => (props.darkTheme ? '#231f20' : '#ffffff')};
  width: 100vw;
  height: 12vh;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 767px) {
    height: 10vh;
  }
`
export const LogoImage = styled.img`
  margin-left: 40px;
  height: 35px;
  width: 150px;
  @media screen and (max-width: 767px) {
    margin-left: 10px;
    height: 25px;
    width: 120px;
  }
`
export const UnorderedListContainer = styled.ul`
  width: 220px;
  display: flex;
  padding-left: 0px;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 767px) {
    padding-right: 10px;
    width: 120px;
  }
`
export const ListContainer = styled.li`
  list-style: none;
`
export const ThemeButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
`
export const DesktopThemeContainer = styled.div`
  height: auto;
  width: auto;
  @media screen and (max-width: 767px) {
    display: none;
  }
`
export const MobileThemeContainer = styled.div`
  height: auto;
  width: auto;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const ProfileImage = styled.img`
  height: 30px;
  width: 30px;
  @media screen and (max-width: 767px) {
    width: 25px;
    height: 25px;
  }
`

export const LogoutButton = styled.button`
  background-color: transparent;
  border: 2px solid ${props => (props.darkTheme ? '#f1f5f9' : '#3b82f6')};
  color: ${props => (props.darkTheme ? '#f1f5f9' : '#3b82f6')};
  border-radius: 3px;
  padding: 7px;
  font-size: 16px;
  font-weight: 500;
  font-family: Roboto;
  width: 100px;
  cursor: pointer;
  @media screen and (max-width: 767px) {
    display: none;
  }
`
export const LogoutIconContainer = styled.div`
  margin-left: 10px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const PopupContainer = styled.div`
  background-color: ${props => (props.darkTheme ? '#212121' : '#f1f5f9')};
  color: ${props => (props.darkTheme ? '#ebebeb' : '#64748b')};
  width: 100%;
  border-radius: 10px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 500;
  font-family: Roboto;
`
export const PopupButtonsContainer = styled.div`
  background-color: transparent;
  margin-top: 20px;
  width: 250px;
  display: flex;
  justify-content: space-evenly;
`
export const PopupCancelButton = styled.button`
  border: 2px solid ${props => (props.darkTheme ? ' #909090' : ' #94a3b8')};
  color: ${props => (props.darkTheme ? ' #909090' : ' #94a3b8')};
  background-color: transparent;
  padding: 10px;
  padding-left: 15px;
  padding-right: 15px;
  font-weight: 500;
  font-size: 14px;
  font-family: Roboto;
  border-radius: 2px;
  cursor: pointer;
`
export const PopupConfirmButton = styled.button`
  cursor: pointer;
  border-radius: 2px;
  background-color: #3b82f6;
  color: #f1f1f1;
  border: none;
  padding: 10px;
  padding-left: 15px;
  padding-right: 15px;
  font-size: 14px;
  font-weight: 500;
  font-family: Roboto;
`
