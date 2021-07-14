import React from 'react'

import logo from '../../assets/images/logo2x.png'

import SimpleMenu from '../menu'

import { logout } from '../../services/auth'

import { Container, LogoContainer, LogoutContainer } from './styles'

function Header ({ history }) {
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
      <LogoutContainer>
        <div>
          <h3></h3>
          <SimpleMenu></SimpleMenu>
        </div>
      </LogoutContainer>
    </Container>
  )
}

export default Header
