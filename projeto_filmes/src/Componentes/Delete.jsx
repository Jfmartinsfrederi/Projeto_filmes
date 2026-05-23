import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import CaixaPesquisaId from './CaixaPesquisaId';

export default function Delete() {
   const [data, setData] = useState(null);
  const [searchId, setSearchId] = useState("");
  const [loading, setLoading] = useState(false);
    
  const {id}=useParams();
  const navigate = useNavigate(); 

  const handleSearch = () => {
    if (searchId) {
      navigate(`/delete/${searchId}`); 
    }
  }


   useEffect(() => {
    if (!id) return;
    const fetchData= async () =>{
      try {
        setLoading(true);
        const res=await axios.get(`https://69f90bb470da2edb3e9bff90.mockapi.io/filmes/${id}`);
        setData(res.data);
      } catch(err){
        setData(null);
      }
      finally {
        setLoading(false);
      }
    };
     
    fetchData(); 
  }, [id]); 
  
  const handleDelete = async (event) =>{
    event.preventDefault();
    if (!id) return;
    try {
      const res = await axios.delete(`https://69f90bb470da2edb3e9bff90.mockapi.io/filmes/${id}`);
      setData( prevData => prevData.filter(data => data.id !== id) );
      navigate("/")
    } catch (err){
      console.log(err);
    }

  }

  return (
    <div className='main-content'>
      <h2>Deletar</h2>
      <div>
        <CaixaPesquisaId
        value={searchId}
        onSearch={handleSearch}
        onChange={setSearchId}
        />
      </div>
      <div>
      {(loading) ? <p>Carregando...</p> : '' }
      <div className='movie-card'>
      {(data) ?
      
        <div className='movie-info'>
          <h3 className='movie-title'>{data.name}</h3>
          <div className="movie-meta">
            <span>ID: {data.id}</span>
            <span>Gênero: {data.gender}</span>
            <span>Ano: {data.year}</span>

          </div>
        <div className='movie-actions'>
          <button className='btn btn-delete' onClick={handleDelete}>Deletar</button>
        </div>
        </div>
      
       : (id) ? <p>Filme não encontrado</p> 
      : ''}
      </div>
      </div>
    </div>
  )
}
