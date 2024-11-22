import React, { useEffect, useState } from 'react'
import classes from './ProductDetail.module.css'
import Layout from '../../Layout/Layout'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { productUrl } from '../../../Api/endPoints'
import ProductCard from '../../Product/ProductCard'
import Loader from '../../Loader/Loader'

function ProductDetail() {

  const [product, setProducts] = useState({})
  const [isLoading, setIsLoading] = useState(false)
    const { productId } = useParams();
  console.log(productId)
  useEffect(() => {
    setIsLoading(true)
    axios.get(`${productUrl}/products/${productId}`)
      .then((res) => {
        setProducts(res.data)
        setIsLoading (false)
       
      }).catch((err) => {
        console.log(err)
        setIsLoading(false)
  
})
  },[])
  return (

    <Layout>
      {isLoading ? (<Loader />) : (<ProductCard product={product}
        flex={true}
        renderDesc={true}
        renderAdd={true}
      />)}
      
    </Layout>
  );
}

export default ProductDetail
