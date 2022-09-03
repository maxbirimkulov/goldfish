import './scss/style.scss'
import {Routes, Route} from 'react-router-dom'
import Home from "./pages/Home/Home";
import Catalog from "./pages/Catalog/Catalog";
import Product from "./pages/Product/Product";
import NotFound from "./pages/NotFound/NotFound";
import Layout from "./Layout/Layout/Layout";


function App() {

  return (
    <div className="App">
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route path='' element={<Home/>}/>
                <Route path='catalog' element={<Catalog />}/>
                <Route path='product/:id' element={<Product/>}/>
                <Route path='*' element={<NotFound/>}/>
            </Route>

        </Routes>
    </div>
  );
}

export default App;
