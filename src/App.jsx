
import './App.css'
import {Route, Routes} from "react-router-dom";
import {Layout} from "./components/Layout.jsx";
import {Cart} from "./pages/Cart/Cart.jsx";
import {ProductList} from "./pages/ProductList/ProductList.jsx";
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<ProductList/>}/>
          <Route path="cart" element={<Cart/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
