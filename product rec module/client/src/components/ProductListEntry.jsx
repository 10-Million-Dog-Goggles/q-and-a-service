import React from 'react';

var ProductListEntry = ({ product }) => {
  return (
    <div className='ct2-product'>
      <img id='ct2-img' src='https://fec-rei-product-img.s3-us-west-1.amazonaws.com/(OllyDog)+OllyBottle+Water+Bottle+-+34+fl.+oz..png'/>
      <div className='ct2-ratings'>
          <div className='ct2-avg-stars-row'>
            <div>
              <span className='ct2-avg-stars-blank'>★★★★★</span>
              <span className='ct2-avg-stars-fill' style={{ width: 75 + '%' }}>★★★★★</span>
            </div>
            <div className='ct2-num-of-reviews'>(16)</div>
          </div>
        </div>
      <div className='ct2-brand-and-name'>
        <div id='ct2-brand'>{product.brand}</div>
        <div id='ct2-name'>{product.name}</div>
      </div>
      <div id='ct2-price'>${product.price}</div>
    </div>
  )
}

export default ProductListEntry;