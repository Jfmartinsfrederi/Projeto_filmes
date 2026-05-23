import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Componentes/Header';
import Home from './Componentes/Home';
import Create from './Componentes/Create';
import Update from './Componentes/Update';
import Read from './Componentes/Read';
import Delete from './Componentes/Delete';
import Rodape from './Componentes/Rodape';
import Undefined from './Componentes/Undefined';

function App(){
  return(
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/create' element={<Create />} />
      <Route path='/update' element={<Update />} />
      <Route path='/update/:id' element={<Update />} />
      <Route path='/read/:id' element={<Read />} />
      <Route path="/read" element={<Read />} />
      <Route path='/delete' element={<Delete />} />
      <Route path='/delete/:id' element={<Delete />} />
      <Route path="*" element={<Undefined/>} />
      
      

      
    </Routes>
    <Rodape/>
    </BrowserRouter>

  )
}
export default App;