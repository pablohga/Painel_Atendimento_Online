import React from 'react'

import logo from '../../assets/images/logo2x.png'

import menu from '../menu'
import PropTypes from 'prop-types'
import { logout } from '../../services/auth'

import { Container, LogoContainer, LogoutContainer } from './styles'
import { Menu, Button } from '@material-ui/core'

function Header ({ history, page, changePage}) {
  function handleLogout () {
    logout()
    history.push('/')
  }
  


  return (
    <Container>
		
      <LogoContainer>
        <img src={logo} alt='logo' />
        <h1>Fumeiro na Brasa</h1>
      </LogoContainer>
	  
<div>

<Button onClick={() => changePage('Categories')}>açlskdçalskdçals</Button>

<li
        className={page === 'Images' ? 'active' : ''}
        onClick={() => changePage('Images')}
      >
        Imagens{print=page}
      </li>

</div>


      <LogoutContainer>
        <div>
          <h3>Admin</h3>
          <button type='button' onClick={handleLogout}>
            Sair do app
          </button>
        </div>
      </LogoutContainer>
	  
    </Container>
  )
}

Header.propTypes = {
	page: PropTypes.string,
	changePage: PropTypes.func.isRequired
  }
  
  Header.defaultProps = {
	page: 'Orders'
  }


export default Header
