import React from 'react'
import img1 from '../assets/images/product1.jpg'
import img2 from '../assets/images/product2.jpg'
import img3 from '../assets/images/product3.jpg'
import ProductCards from '../layouts/ProductCards'

const Product = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center lg:px-32 px-5 bg-backgroundColor'>
        <h1 className='font-semibold text-center text-4xl lg-mt-14 mt-024 mb-8'>Our Products</h1>
        <div className='flex lg:flex-row justify-center gap-10'>
        <ProductCards img={img1} title="Nespresso"/>
        <ProductCards img={img2} title="AeroPress"/>
        <ProductCards img={img3} title="Chemex"/>
        </div>
    </div>
  )
}

export default Product