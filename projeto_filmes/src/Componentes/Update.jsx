import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import CaixaPesquisaId from './CaixaPesquisaId';

export default function Update() {
  const [values,setValues]= useState({
    name:'',
    gender:'',
    year:''
  })
  const [searchId, setSearchId] = useState("");
    const [loading, setLoading] = useState(false);
    
  const {id}=useParams();
  const navigate = useNavigate(); 

  const handleSearch = () => {
    if (searchId) {
      navigate(`/update/${searchId}`); 
    }
  }


   useEffect(() => {
    if (!id) return;
    const fetchData= async () =>{
      try {
        setLoading(true);
        const res=await axios.get(`https://69f90bb470da2edb3e9bff90.mockapi.io/filmes/${id}`);
        setValues({...res.data,year: res.data.year.split("T")[0]}); // removendo a hora da data, api retorna data e hora
      } catch(err){
        setValues(null);
      }
      finally {
        setLoading(false);
      }
    };
     
    fetchData(); 
  }, [id]); 

  const handleUpdate = async (event) =>{
    event.preventDefault();
    if (!id) return;
    try {
      const res = await axios.put(`https://69f90bb470da2edb3e9bff90.mockapi.io/filmes/${id}`,values);
      navigate("/")
    } catch (err){
      console.log(err);
    }
  }



  return (

    <div className='main-content'>
      <h1>Alterar</h1>
      <div>
        <CaixaPesquisaId
        value={searchId}
        onSearch={handleSearch}
        onChange={setSearchId}
        />
      </div>
      
      <div>
        {(loading) ? <p>Carregando...</p> : '' }
        { (values && values.name) ? <div className='form-container'> 
          <form onSubmit={handleUpdate}>
          <div >
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
          <button className='btn btn-primary'>Alterar</button>
        </form> </div> : (!values) ? 
        <div className='movie-card'>
        <div className="movie-info">
          <div className="movie-meta">
          
            <span>Filme não encontrado :(</span>

          </div>
        </div>
        </div>  : '' }
        


      </div>



    </div>
    





  ) 
}
