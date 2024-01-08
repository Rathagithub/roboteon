import React from "react";

export const Carts = (props) => {
 const { setPageView, cartLists } = props
 console.log('cartLists', cartLists)
 return (
  <>
   <button onClick={() => setPageView('allProducts')} >Back</button>
   {(cartLists || []).map(p => (
    <div key={p.id}>
     <h3>Name: {p.name || ''}</h3>
     <p>Price: {p.price || 0}</p>
     <img src={p.image} width={75} height={75} />
    </div>
   ))}

  </>
 )
}
