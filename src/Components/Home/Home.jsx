import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Home.css'
import {  useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart, setMealDetails } from '../Redux/Redux'

function Home() {

    let [categories,setCategories] = useState([])
    let navigate = useNavigate();
    let dispatch = useDispatch()

    useEffect(()=>{
        axios.get("https://www.themealdb.com/api/json/v1/1/categories.php")
        .then((result)=>{
            console.log(result);
            setCategories(result.data.categories)
        }).catch((err)=>{
            console.log(err);
            
        })
    },[])

    function handleClick(category){
        dispatch(setMealDetails(category))
        navigate('/CategoryDetails')
    }

    function handleAddToCart(category){
      dispatch(addToCart(category))
      navigate('/Cart')
    }

    return (
        <>
          <div className='menu-body'>
            <div className='h-body'>
            <h1>Hey!!! Have a look at our specials...</h1>
            </div>
            <div className='categories-container'>
              {categories.map((category) => {
                return (
                <div>
                  <div key={category.idCategory} onClick={()=>{handleClick(category)}}  className='categories-box'>
                    <img src={category.strCategoryThumb} alt=""/>
                    <h2>{category.strCategory}</h2>
                    
                  </div>
                  <div onClick={() => handleAddToCart(category)}>
                  <button className='category-btn'>Add</button>
                  </div>
                  </div>
                  
                );
              })}
            </div>
          </div>
        </>
      );
      
}

export default Home
