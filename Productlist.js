import React from 'react'

function Productlist(props) {
    const {products}=props;
    
  return (
    <div>
        {products.map((product)=>(
        <div>
            <ul>
                {product.no}
                <li>Name:{product.name}</li>
                <li>Price:{product.price}</li>
                <li><img src={product.imageUrl} alt={product.name}></img></li>
            </ul>
        </div>  ))}
    </div>
  )
}

export default Productlist