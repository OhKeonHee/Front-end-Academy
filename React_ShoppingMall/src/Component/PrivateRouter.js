import React from 'react'
import ProductDetail from './ProductDetail'
import ProductAll from './ProductAll'
import { Navigate } from 'react-router-dom'

const PrivateRouter = ({ authenticate }) => {
  return authenticate = true ? <ProductAll /> : <Navigate to='./login'/>
}

export default PrivateRouter