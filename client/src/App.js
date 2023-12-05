//libraries
/* import axios from 'axios'; */
import { Routes, Route } from 'react-router-dom';
//hook
//Pages
import Landing from './views/Landing/Landing.jsx';
import Home from './views/Home/Home.jsx';
import Form from './views/Form/Form.jsx';
import Detail from './views/Detail/Detail.jsx';
//styled
import './App.css';

function App() {


  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/home' element={<Home />} />
        <Route path='/form' element={<Form />} />
        <Route path='/detail/:id' element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
