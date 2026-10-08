
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { data, Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';


function Dashboard() {

  const [products,setProducts]=useState([])  
     

  // 1 define url
  let baseurl ='https://fakestoreapi.com/products'
    // 2 create a function to fetch product details
  const getProducts=async()=>{
    try{
      const res = await fetch(baseurl)
      // return json data
      let data = await res.json()
      // => js
      console.log(data);
      setProducts(data)
      
    }catch(err){
      console.log(err);
      
    }
  }
//  3 define a useEffect handling side effect of API fetching
  useEffect(()=>{
    getProducts()
  } , [])
    
  const handleData=(data)=>{
    console.log(data);
    
  }

  return (
    <div>
   <ProductCard products = {products} sendData={handleData}/>
    </div>
  )
}

export default Dashboard
