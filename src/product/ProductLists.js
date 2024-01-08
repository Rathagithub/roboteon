import React from "react";

export const ProductLists = (props) => {
 const { productLists, setProductDetails, setPageView } = props

 const onClickHandler = (e) => {
  setProductDetails(e)
  setPageView('showProductDetails')
 }

 return (
  <>
   <button onClick={() => setPageView('showCarts')}>Show Carts</button>
   {productLists.map(p => (
    <div key={p.id} onClick={() => onClickHandler(p)}>
     <h3>Name: {p.name || ''}</h3>
     <p>Price: {p.price || 0}</p>
     <img src={p.image} width={75} height={75} />
    </div>
   ))}
  </>
 )
}
