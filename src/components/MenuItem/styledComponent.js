import styled from 'styled-components'

export const MenuListContainer = styled.li`
  background-color: ${props => {
    if (props.menuActiveStatus) {
      if (props.darkTheme) {
        return '#383838'
      }
      return '#cbd5e1'
    }
    return 'transparent'
  }};

  cursor: pointer;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 10px;
  height: 40px;
  color: ${props => (props.darkTheme ? '#e2e8f0' : '#606060')};
  @media screen and (max-width: 767px) {
    border-radius: 10px;
    height: 100%;
  }
`
export const MenuIconContainer = styled.div`
  padding: 0px;
  margin: 0px;
  color: ${props => (props.menuActiveStatus ? '#ff0000' : '')};
`
export const MenuText = styled.p`
  font-size: 14px;
  font-weight: 500;
  padding-left: 20px;
  @media screen and (max-width: 767px) {
    display: none;
  }
`
