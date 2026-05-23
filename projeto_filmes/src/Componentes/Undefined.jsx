import React from 'react';
import { Link } from 'react-router-dom';

export default function Undefined() {
  return (
    <div className="main-content-empty-state">
      <h1>404</h1>
      <h2>Página não encontrada</h2>
      <p>
        Ops! O filme ou a página que você procura não existe no nosso catálogo.
      </p>
      <Link to="/" className="btn btn-primary">Voltar para o Início</Link>
    </div>
  );
}