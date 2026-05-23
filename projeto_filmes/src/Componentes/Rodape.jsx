import React from 'react';

export default function Rodape() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} MockBuster. Todos os direitos reservados.</p>
    </footer>
  );
}