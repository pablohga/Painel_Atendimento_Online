import React, { useState, useEffect, useReducer } from 'react'
import { distanceInWordsToNow } from 'date-fns'
import pt from 'date-fns/locale/pt'
import { toast } from 'react-toastify'

import { convertToBRL } from '../../../services/currency'
import api from '../../../services/api'

import NoImage from '../../../assets/images/no-image.jpg'
import { HeaderMain,SubMenu } from '../../../pages/App/styles'
import $ from "jquery";
import jsPDF from 'jspdf'
import {
  Container,
  OrderCard,
  ItemsContainer,
  ItemCard,
  ItemImage,
  Filters
} from './styles'

const INITIAL_STATE = {
  pendente: false,
  cancelado: true,
  pago: false,
  enviado: false,
  finalizado: false,
  Suspenso: false
}


function filterReducer (state, action) {
  switch (action.type) {
    case 'pendente':
      return { ...state, pendente: !state.pendente }
    case 'cancelado':
      return { ...state, cancelado: !state.cancelado }
    case 'pago':
      return { ...state, pago: !state.pago }
    case 'enviado':
      return { ...state, enviado: !state.enviado }
    case 'finalizado':
      return { ...state, finalizado: !state.finalizado }
    default:
      return state
  }
}

function Cancelados () {
  const [orders, setOrders] = useState([])
  const [filters, dispatch] = useReducer(filterReducer, INITIAL_STATE)

  useEffect(() => {
    loadOrders()
  }, [])

  async function loadOrders () {
    try {
      const { data } = await api.get('admin/orders')

      setOrders(data)
    } catch (err) {
      toast.error('Erro ao buscar os pedidos')
    }
  }

  async function updateOrderStatus (id, status) {
    try {
      await api.put(`admin/orders/${id}`, { status })

      await loadOrders()

      toast.success('Pedido atualizado!')
    } catch (err) {
      toast.error('Não foi possível atualizar o pedido')
    }
  }
  function refreshPage() {
    window.location.reload(false);
  }

  function dinheiro(condition) {
    if (condition === 'Dinheiro') {
      return (
          <strong>Dinheiro </strong>
     )
    } else {
      return (
          <strong>MbWay </strong>
      )
    }
  }


	   
  function imprimir() { 
	 
	var divContents = document.getElementById("CardPedidos").innerHTML; 
	var a = window.open('', '', 'height=500, width=500'); 
	a.document.write('<html><style>#select1 {display: none; }#button1{display: none; }</style>'); 
	a.document.write(`<body ><br>`); 
	a.document.write(divContents); 
	a.document.write('</body></html>'); 
	a.document.close(); 
	a.print();
	  
} 


  function renderFilters () {
    return (
		<Filters>
		{/*<h1>Cancelados</h1>
	  {Object.keys(filters).map(filter => (
		<div
		  key={filter}
		  onClick={() => dispatch({ type: filter })}
		  className={filters[filter] ? 'active' : ''}
		>
		  {filter}
		</div>
	  ))}*/}
	</Filters>
    )
  }

  


  function renderOrder (order) {

	function imprimir() { 
	 
		var divContents = document.getElementById(order.id).innerHTML; 
		var a = window.open('', '', 'height=500, width=500'); 
		a.document.write('<html><style>body{ font-size: 10px;} h1{font-size:12px;} p{font-size:10px;} #select1 {display: none; }#button1{display: none; }</style>'); 
		a.document.write(`<body ><br>`); 
		a.document.write(divContents); 
		a.document.write('</body></html>');  
		a.document.close(); 
		a.print();
		  
	} 

    return filters[order.status] ? (
      <OrderCard id={order.id}  key={order.id} status={order.status}>
		  
		
		
		 
		  
        <div id="pedido" className='orderHeader'>
			

          <h2>
            Pedido <strong>#{order.id}</strong> - {order.user.name}
          </h2>
		  
		  
		  <div><button id="button1" name="status" onClick={imprimir}>IMPRIMIR</button></div>
		 
          <select id="select1"
            name='status'
            value={order.status}
            onChange={e => updateOrderStatus(order.id, e.target.value)}
          >
			  
            <option value='pendente'>pendente</option>
            <option value='cancelado'>cancelado</option>
            <option value='enviado'>enviado</option>
            <option value='pago'>pago</option>
            <option value='finalizado'>finalizado</option>

            
          </select>
        </div>
        <p>
		<strong>{order.created_at}</strong>
        </p>
        <strong>{convertToBRL(Number(order.total))}</strong>
        <ItemsContainer>
		
          {order.items.map(item => renderItem(item))}
        </ItemsContainer>

         {/*Adicionando os dados que faltavam no painél do administrador*/}


		 <span>
          <strong>Observações: </strong>
          {order.observations}<br></br>
        </span>
		<span>
		<strong>Forma de Entrega: </strong>
          {order.type}<br></br>
        </span>
		<span>
		<strong>Valor da Entrega:</strong> € 
          {order.entrega}<br></br>
        </span>
        <span>
          <strong>Endereço: </strong>
          {order.street + ' ' + order.number}<br></br>
        </span>
        
        <span>
          <strong>Concelho: </strong>
          {order.district}<br></br>
        </span>

        <span>
          <strong>Código Postal: </strong>
          {order.zip_code}<br></br>
        </span>

        <span>
		<strong>Forma de Pagamento: </strong>
          {order.pagamento}<br></br>
        </span>

		<span>
		<strong>Telemóvel: </strong>
          {order.cel}<br></br>
        </span>

      </OrderCard>
    ) : null
  }

  function renderItem (item) {
    return (
      <ItemCard key={item.id}>
        <ItemImage
          imageUrl={
            item.product.image
              ? item.product.image.url
              : NoImage
          }
        />
        <div>
          <span>{item.product.name}</span>
          <p>Preço: {item.subtotal}</p>
          <p>Quantidade: {item.quantity}</p>
        </div>
      </ItemCard>
    )
  }
  

  return (
    <Container>
      {renderFilters()}
      {orders.map(order => renderOrder(order))}
      <button onClick={refreshPage}>Click to reload!</button>
    </Container>
   
  )
}

export default Cancelados
