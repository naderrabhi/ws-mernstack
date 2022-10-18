import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {getAllProducts} from './JS/actions/actionProducts/actionProducts'
import { Route, Routes } from 'react-router-dom';
import './App.css';
import ProductsList from './Components/Products/ProductsList';

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllProducts())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<ProductsList />}/>
      </Routes>
    </div>
  );
}

export default App;
