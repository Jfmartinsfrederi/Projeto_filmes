import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function Home() {
   const [data,setData]= useState([]);
   const [loading, setLoading] = useState(true);

   useEffect(()=>{
    const fetchData= async () =>{
      try {
        setLoading(true);
        const res=await axios.get(`https://69f90bb470da2edb3e9bff90.mockapi.io/filmes`);
        setData(res.data);
      } catch(err){
        setData(null);
      }
      finally {
        setLoading(false);
      }
    };
     
    fetchData();
   },[])

  return (
    <div className="main-content">
  <h2>Lista de Filmes</h2>

  {loading ? (
    <p>Carregando...</p>
  ) : (
    <div className="movie-grid">
      {data.map((movie) => (
         <Link
                to={`/read/${movie.id}`}
                className="btn btn-primary"
              >
        <div className="movie-card" key={movie.id}>

          <div className="movie-info">
            <h3 className="movie-title">{movie.name}</h3>

            <div className="movie-meta">
              <span>Gênero: {movie.gender}</span>
              <span>Ano: {movie.year.split("T")[0]}</span>
            </div>

            <div className="movie-actions">
             
              
            </div>
          </div>
        </div>
        </Link>
      ))}
    </div>
  )}
</div>
  )
}
