import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDetail = () => {
  const { id } = useParams(); //params는 객체를 갖고있음
  // console.log('ppp', params)
  return (
    <div>
      <h3>{id} 카테고리 입니다.</h3>
      <h1>Show Product Detail</h1>
    </div>
  )
}

export default ProductDetail
