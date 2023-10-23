import { Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './Component1/Nav';
import One from './Component1/One'; 
import Two from './Component1/Two';
import Three from './Component1/Three';
import Four from './Component1/Four';
import Five from './Component1/Five';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/' element={<One />} />
        <Route path='/two' element={<Two />} />
        <Route path='/three' element={<Three />} />
        <Route path='/four' element={<Four />} />
        <Route path='/five' element={<Five />} />
      </Routes>
    </div>
  );
}

export default App;
