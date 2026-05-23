import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

export default function Update() {
  const [values,setValues]= useState({
    name:'',
    gender:'',
    year:''
  })
  const navigate = useNavigate(); 


  const handleSubmit = async (event) =>{
    event.preventDefault();
    try {
      const res = await axios.post(`https://69f90bb470da2edb3e9bff90.mockapi.io/filmes`,values);
      navigate("/")
    } catch (err){
      console.log(err);
    }
  }



  return (

    <div className='main-content'>
      
      
      
      <div className='form-container'>
        <h2>Criar</h2>
       <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Nome do Filme:</label>
          <input type="text" name='name' placeholder='Digite o nome do filme'
          value={values.name}
          required
          onChange={e=> setValues({...values, name: e.target.value})}/>
          </div>
          
          <div>
            <label htmlFor="gender">Genero do Filme:</label>
          <input type="text" name='gender' placeholder='Digite o Genero do filme'
          value={values.gender}
          required
          onChange={e=> setValues({...values, gender: e.target.value})}/>
          </div>
          
          <div>
            <label htmlFor="year">Ano do Filme:</label>
          <input type="date" name='year' placeholder='Digite o ano do filme'
          value={values.year}
          required
          onChange={e=> setValues({...values, year: e.target.value})}/>
          

          </div>
          <button className='btn btn-primary'>Criar</button>
        </form>


      </div>



    </div>
    





  )
}
