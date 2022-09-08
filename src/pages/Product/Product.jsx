import React, {useEffect} from 'react';
import {Link, useParams,Navigate} from "react-router-dom";
import img from "../Catalog/card.png";
import {FaUsers} from "react-icons/fa"
import {BiTimeFive} from "react-icons/bi"
import {getProduct} from "../../redux/product";
import {useDispatch, useSelector} from "react-redux";
import NotFound from "../NotFound/NotFound";


const Product = () => {
    const params = useParams()
    const dispatch = useDispatch()
    const {product,status,error} = useSelector(s => s.product)

    useEffect(()=>{
        dispatch(getProduct(params.id))
        },[])

    if (status === 'loading') {
        return 'Loading...'
    }
    if(error){
        return <Navigate to='*' />
    }
    return (
        <div className='oneProduct'>
            <div className="container">
                <div className="oneProduct__content">
                    <p>Главная   >   Каталог   >   Настольные игры   >  Классические игры  >  Дженга     </p>
                    <h2 className="oneProduct__title">{product.title}</h2>

                    <div className="oneProduct__row">

                        <div className="oneProduct__left">
                            <img className='oneProduct__left-img' src={product.images} alt=""/>
                        </div>

                        <div className="oneProduct__right">
                            <p>Код товара:{product._id}</p>

                            <div>
                                <div>
                                    <FaUsers/>
                                    {product.playCount}
                                </div>


                                <div>
                                    <BiTimeFive/>
                                    {product.time}
                                </div>


                                <div>
                                    {product.age}+
                                </div>
                            </div>

                            <p>{product.priceSale} ₽</p>

                            <p>{product.price} ₽</p>

                            <div className='games__card-btns'>
                                <button className='games__card-btns1'>В корзину</button>
                                <button className='games__card-btns2'>Купить в 1 клик</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;