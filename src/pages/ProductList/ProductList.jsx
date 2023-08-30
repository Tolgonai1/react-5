import "./ProductList.css"
import {useState} from "react";
import products from '../Data/products.json';
import {useDispatch} from "react-redux";
import {increaseCounter} from "../../store/counterReducer.js";

export function ProductList(){
    const [productList,setProductList] = useState(products)
    const dispatch = useDispatch()
    const handleIncrease=()=>{
        dispatch(increaseCounter())
        setProductList(products)
    }
    return (
        <div className="product-wrapper">
            <ol className="product-list">
                {productList.map((product) => (
                    <li key={product._id} className="product-item">
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <p>Price: <b>{product.price}</b></p>
                        <div>
                            <button onClick={handleIncrease}>Купить</button>
                        </div>
                    </li>
                ))}
            </ol>
        </div>
    )
}