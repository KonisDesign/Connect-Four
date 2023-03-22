import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './Style.scss';
import Board from './views/Board';
import Home from './views/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/play/:who/:id' element={<Board />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
