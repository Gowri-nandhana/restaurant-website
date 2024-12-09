import React from 'react'
import './CategoryDetails.css'
import { useSelector } from 'react-redux'


function CategoryDetails() {

   
   
    let list=useSelector((state)=>{return state.meals.value})
   
   
  return (
    
       <div className='details'>
      <h1>{list?.strCategory}</h1>
      <img src={list?.strCategoryThumb} />
      <p>{list?.strCategoryDescription}</p>
    </div>
    
  )
}

export default CategoryDetails
