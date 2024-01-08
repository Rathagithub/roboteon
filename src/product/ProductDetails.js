import React from "react";

export const ProductDetailsPage = (props) => {
 const { id, name, price, image, category, description } = props.ProductDetails

 return (
  <>
   <div key={id}>
    <h3>Name: {name || ''}</h3>
    <p>Price: {price || 0}</p>
    <p>category : {category}</p>
    <pre>description: {description}</pre>
    <img src={image} width={150} height={150} />
   </div>
   <div>
    <button onClick={() => props.setPageView('allProducts')}>Back </button>
    <button onClick={() => props.addCardFun(props.ProductDetails)}>Add to Cart </button>
   </div>
  </>

 )
}
