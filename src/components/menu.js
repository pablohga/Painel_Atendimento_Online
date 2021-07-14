import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { logout } from '../services/auth'
import {  Switch, Route,Redirect, Link } from 'react-router-dom';
import { toast } from "react-toastify";
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import ThreeDRotation from '@material-ui/icons/ThreeDRotation';
import iconUser from '../assets/images/person-24px.png';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import {Router} from 'react-router';
//import SideBar from '../SideBar'
import {Header, App} from '../pages/App/index'
import SideBar from '../components/SideBar/index'



export default function SimpleMenu({ page, changePage }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

 
	function handleLogout () {
	  logout();
	  
	  toast.error("Logout Realizado, realize login para continuar.");
	  window.location.reload(false);
	}


  return (
    <div>


      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
	  <img src={iconUser} width='25' alt='iconUser' />
	  <i data-feather="map-pin"></i>
		<p>Menu</p>
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        
			
		{/* Aqui vai o menu lateral para menu hamburguer */}
			
		<MenuItem 
        className={page === 'Orders' ? 'active' : ''}
        onClick={() => changePage('Orders')}
      >
        Pedidos
      </MenuItem>

	  <MenuItem
        className={page === 'Pratosdodia' ? 'active' : ''}
        onClick={() => changePage('Pratosdodia')}
      >
        Pratos do Dia
      </MenuItem>

      <MenuItem
        className={page === 'Categories' ? 'active' : ''}
        onClick={() => changePage('Categories')}
      >
        Categorias
      </MenuItem>
      <MenuItem
        className={page === 'Sizes' ? 'active' : ''}
        onClick={() => changePage('Sizes')}
      >
        Tipos de Entregas
      </MenuItem>
      <MenuItem
        className={page === 'Products' ? 'active' : ''}
        onClick={() => changePage('Products')}
      >
        Produtos
      </MenuItem>
      <MenuItem
        className={page === 'Images' ? 'active' : ''}
        onClick={() => changePage('Images')}
      >
        Imagens
      </MenuItem>

<MenuItem  onClick={handleLogout}>Logout</MenuItem>
		
      </Menu>
    </div>
  );
}

SideBar.propTypes = {
	page: PropTypes.string,
	changePage: PropTypes.func.isRequired
  }
  
  SideBar.defaultProps = {
	page: 'Orders'
  }

//export default SimpleMenu 