import React from "react";
import { Link } from "react-router-dom";


const CaixaPesquisaId = ({value, onSearch,onChange}) => {
    return (
        <div className="search-conteiner">
        <input className="search-bar"
        required
          type="text"
          placeholder='Digite o ID do filme'
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") onSearch();
          }}
        />
        <button className="btn btn-primary" onClick={onSearch}>Procurar</button>
        <button className="btn btn-delete"> <Link to='/'  >Cancelar</Link></button>
      </div>
    )

}

export default CaixaPesquisaId;

{/* <div>
        <input 
        required
          type="text"
          placeholder='Digite o ID do filme'
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSearch();
          }}
        />
        <button onClick={handleSearch}>Procurar</button>
        <button> <Link to='/'>Cancelar</Link></button>
      </div> */}