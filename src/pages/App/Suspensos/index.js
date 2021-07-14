import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify'

import api from '../../../services/api'
import { convertToBRL } from '../../../services/currency'

import NoImage from '../../../assets/images/no-image.jpg'
import ProductModal from '../../../components/ProductModal'
//import Switch from "../../../components/Switch"

import {
  Container,
  ProductCard,
  ProductTop,
  ProductImage,
  ProductInfo,
  ProductDetails,
  ProductBottom
} from './styles'

import {
  EditDeleteOptions,
  EditButton,
  DeleteButton,
  AddButton,
  YesButton,
  NoButton
} from '../../../styles/buttons'

function Suspensos () {
  const [products, setProducts] = useState([])
  const [editProduct, setEditProduct] = useState(null)
  const [modalOpen, setModalOpen] = useState(false)
  const [deleteToast, setDeleteToast] = useState(null)

  useEffect(() => {
    loadProducts()
  }, [])

  useEffect(() => {
    if (editProduct) {
      setModalOpen(true)
    }
  }, [editProduct])

  useEffect(() => {
    if (!modalOpen) {
      setEditProduct(null)
      loadProducts()
    }
  }, [modalOpen])

  async function handleUpdateProduct(esgotado,id, name, category_id, base_price,) {
    try {

      await api.put(`admin/products/${id}`, {
        esgotado,
        name,
        category_id,
        base_price
        //sizes: product_sizes.map(size => ({
        //  size_id: size
		//})
		//)
      });

      toast.success("Produto atualizado!");
	  window.location.reload(false);
    } catch (err) {
      toast.error("Erro ao editar o produto, confira os dados preenchidos");
	  window.location.reload(false);
    } finally {

    }
  }

  async function loadProducts () {
    try {
      const { data } = await api.get('admin/products')

      setProducts(
        data.map(product => ({
          ...product,
          base_price_formatted: convertToBRL(Number(product.base_price))
        }))
      )
    } catch (err) {
      toast.error('Erro ao buscar produtos')
    }
  }

  function deleteToastNotification (id) {
    if (!toast.isActive(deleteToast)) {
      const toastToDelete = toast.info(
        'Clique aqui para confirmar a operação',
        {
          onClick: () => deleteProduct(id),
          autoClose: 5000
        }
      )

      setDeleteToast(toastToDelete)
    }
  }

  async function deleteProduct (id) {
    try {
      await api.delete(`admin/products/${id}`)

      loadProducts()
      toast.success('Produto deletado!')
    } catch (err) {
      toast.error('Não foi possível deletar o produto')
    }
  }

  function renderEsgotado(product,esgotado){
	  if (product.esgotado==0){
		  return (
			  <font color="red">Esgotado</font>
		  );
	  }else{
		  return (
			  <font color="green">Não Esgotado</font>
		  );
	  }


  }



  function renderProduct (product) {
	  
	  if (product.esgotado==0){
		  
		  
		  return;

	  }else{
		  return (
		
      <ProductCard key={product.id}>
        <ProductTop>
          <ProductInfo>
            <ProductImage
              imageUrl={product.image ? product.image.url : NoImage}
            />
            <ProductDetails>
              <strong>{product.name}</strong>
              <p>
                <span>Categoria: </span>
                {product.category.name}
              </p>
              <p>
                <span>Preço: </span>
                {product.base_price_formatted}
              </p>
            </ProductDetails>
          </ProductInfo>
          <EditDeleteOptions>
            <ProductDetails>
              <strong>Produto Esgotado?</strong>
			  
			  <p><br/><b><font color="red">Esgotado</font></b></p>
            </ProductDetails>
           {/* <YesButton onClick={() => handleUpdateProduct(1, product.id, product.name, product.category_id, product.base_price)} />
            <br/><br/>
			<NoButton
                onClick={() => handleUpdateProduct(0, product.id, product.name, product.category_id, product.base_price)}
            />*/}
          </EditDeleteOptions>
        </ProductTop>
      </ProductCard>
    )

	  }


    
  }

  return (
    <Container>
     
      {products.map(product => renderProduct(product))}
	  
    </Container>
  )
}

export default Suspensos
