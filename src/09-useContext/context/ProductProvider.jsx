import {useState} from "react";
import {ProductContext} from './ProductContext.jsx'


export const ProductProvider = ({children})=>{
  const [products, setProducts] =useState([
    {
      id:1,
      name:'bicycle MTB',
      size:'M',
      brand:'Scoot',
      price:12000
    },
    {
      id:2,
      name:'bicycle Road',
      size:'L',
      brand:'Specialized',
      price:112000
    }
  ])

  return(
      <ProductContext.Provider value={{products}}>
        {children}
      </ProductContext.Provider>
  )
}