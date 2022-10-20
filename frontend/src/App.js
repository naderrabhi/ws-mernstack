import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {getAllProducts} from './JS/actions/actionProducts/actionProducts'
import { Route, Routes } from 'react-router-dom';
import './App.css';
import ProductDetails from './Components/Products/ProductDetails';
import AddProduct from './Pages/AddProduct/AddProducts';
import EditProduct from './Components/Products/EditProduct';
import Home from './Pages/Home/Home';

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllProducts())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/:id' element={<ProductDetails />}/>
        <Route path='/add' element={<AddProduct />}/>
        <Route path='/edit/:id' element={<EditProduct />}/>
      </Routes>
    </div>
  );
}

export default App;
