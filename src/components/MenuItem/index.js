import {AiFillHome} from 'react-icons/ai'
import {ImFire} from 'react-icons/im'
import {FaGamepad} from 'react-icons/fa'
import {BiListPlus} from 'react-icons/bi'
import {Link} from 'react-router-dom'

import {MenuListContainer, MenuText, MenuIconContainer} from './styledComponent'

import AppContext from '../../Context/AppContext'

const MenuItem = props => {
  const {menu} = props
  let icon
  switch (menu.id) {
    case 'HOME':
      icon = <AiFillHome size="20" />
      break
    case 'TRENDING':
      icon = <ImFire size="20" />
      break
    case 'GAMING':
      icon = <FaGamepad size="22" />
      break
    case 'SAVED VIDEOS':
      icon = <BiListPlus size="25" />
      break
    default:
      icon = null
  }

  return (
    <AppContext.Consumer>
      {value => {
        const {isDarkTheme, activeMenuId, updateActiveMenuId} = value

        const onMenuId = () => updateActiveMenuId(menu.id)

        const menuActiveStatus = menu.id === activeMenuId

        return (
          <Link to={menu.path} style={{textDecoration: 'none'}}>
            <MenuListContainer
              darkTheme={isDarkTheme}
              menuActiveStatus={menuActiveStatus}
              onClick={onMenuId}
            >
              <MenuIconContainer menuActiveStatus={menuActiveStatus}>
                {icon}
              </MenuIconContainer>

              <MenuText>{menu.displayText}</MenuText>
            </MenuListContainer>
          </Link>
        )
      }}
    </AppContext.Consumer>
  )
}

export default MenuItem
