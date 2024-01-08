import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { ProductLists } from './ProductLists'
import { ProductDetailsPage } from './ProductDetails'
import { Carts } from './Carts'

function Product() {
  const [productLists, setProductLists] = useState([])
  const [cartLists, setCartLists] = useState([])
  const [ProductDetails, setProductDetails] = useState({})
  const [pageView, setPageView] = useState('allProducts')
  const [loader, setLoader] = useState(false)
  const [errState, setErrState] = useState('')

  useEffect(() => {
    getProducts()
  }, [])

  const getProducts = async () => {
    setLoader(true)
    await fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => {
        setProductLists(json)
        setLoader(false)
      }).catch((err) => {
        console.log('Fetch products API failed', err)
        setLoader(false)
      })
  }
  const addCardFun = (val) => {
    setCartLists([...cartLists, val])
  }
  return (
    <>
      {loader && (
        <div>Loading ...</div>
      )}
      {pageView === 'allProducts' && (
        <ProductLists
          setAddCart={setCartLists}
          setPageView={setPageView}
          productLists={productLists}
          setProductDetails={setProductDetails}
        />
      )}
      {pageView === 'showProductDetails' && (
        <ProductDetailsPage
          setPageView={setPageView}
          addCardFun={addCardFun}
          ProductDetails={ProductDetails}
        />
      )}
      {pageView === 'showCarts' && (
        <Carts
          cartLists={cartLists}
          setPageView={setPageView}
        />
      )}
    </>
  );
}

export default Product;
