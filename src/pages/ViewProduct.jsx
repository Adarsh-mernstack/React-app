import React from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useState } from "react"

function ViewProduct(){



     const [products,setProducts]=useState({})  
         
    const{id}=useParams()
     console.log(id);
     
      // define url
      let baseurl =`https://fakestoreapi.com/products {id}`
        //  create a function to fetch product details
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

    return(
        <div>
        
        </div>
    )
}

export default  ViewProduct