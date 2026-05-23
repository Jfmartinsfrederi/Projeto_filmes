import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, useNavigate ,Link } from 'react-router-dom'
import CaixaPesquisaId from './CaixaPesquisaId';


export default function Read() {
  
  const [data, setData] = useState(null);
  const [searchId, setSearchId] = useState("");
  const [loading, setLoading] = useState(false);
  
  const { id } = useParams();
  const navigate = useNavigate(); 

  const handleSearch = () => {
    if (searchId) {
      navigate(`/read/${searchId}`); 
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

  

  return (
    <div className="main-content">
      <h1>Ler</h1>
      <div>
        <CaixaPesquisaId
        value={searchId}
        onSearch={handleSearch}
        onChange={setSearchId}
        />
      </div>

      
      <div>
      {(loading) ? <p>Carregando...</p> : '' }
      <div className="movie-card">
        {(data) ?
      
        <div className="movie-info">
          <h3 clasName="movie-title">{data.name}</h3>
          <div className="movie-meta">
            <span>ID: {data.id}</span>
            <span>Gênero: {data.gender}</span>
            <span>Ano: {data.year}</span>

          </div>
        </div>
      
       : (id) ?  <div className="movie-info">
          <div className="movie-meta">
          
            <span>Filme não encontrado :(</span>

          </div>
        </div> 
      : ''}
      </div>
      </div>
      

      

      
    </div>
  );
}