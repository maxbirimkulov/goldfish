import React, {useEffect,useState} from 'react';
import {Link,NavLink, useParams,Navigate} from "react-router-dom";
import img from "../Catalog/card.png";
import {FaUsers} from "react-icons/fa"
import {BiTimeFive} from "react-icons/bi"
import {IoIosArrowDown,IoIosArrowUp} from "react-icons/io"
import {getProduct} from "../../redux/product";
import {useDispatch, useSelector} from "react-redux";
import NotFound from "../NotFound/NotFound";
import {getAllCards} from "../../redux/cards";
import Cards from "./Cards";





const Product = () => {
    const params = useParams()
    const dispatch = useDispatch()
    const {product,status,error} = useSelector(s => s.product)
    const [open, setOpen] = useState(false)
    const [open2, setOpen2] = useState(false)
    const {cards} = useSelector(s => s.cards)

    const [info, setInfo] = useState('description')

    useEffect(() => {
        dispatch(getAllCards())
    }, [])

    useEffect(()=>{
        dispatch(getProduct(params.id))
        },[])

    if (status === 'loading') {
        return 'Loading...'
    }
    if(error){
        return <Navigate to='*' />
    }
    console.log(product)
    return (
        <div className='oneProduct'>
            <div className="container">
                <div className="oneProduct__content">
                    <p className='oneProduct__crumbs'>Главная   >   Каталог   >   Настольные игры   >  Классические игры  >  Дженга     </p>

                    <h2 className="oneProduct__title">{product.title}</h2>

                    <div className="oneProduct__row">

                        <div className="oneProduct__left">
                            <div className='oneProduct__left-img-block'>
                                <img className='oneProduct__left-img' src={product.images} alt=""/>
                            </div>

                            <div className="oneProduct__info">
                               <div className='oneProduct__nav'>
                                   <span onClick={()=>setInfo('description')} className={`oneProduct__nav-item ${info === 'description' ? 'active' :''}`}>Описание</span>
                                   <span onClick={()=>setInfo('characteristic')} className={`oneProduct__nav-item ${info === 'characteristic' ? 'active' :''}`}>Характеристики</span>
                                   <span onClick={()=>setInfo('regulations')} className={`oneProduct__nav-item ${info === 'regulations' ? 'active' :''}`}>Правила</span>
                                   <span onClick={()=>setInfo('response')} className={`oneProduct__nav-item ${info === 'response' ? 'active' :''}`}>Вопрос-ответ</span>
                               </div>
                            </div>

                        </div>

                        <div className="oneProduct__right">
                            <div className="oneProduct__right-block">
                                <p className='oneProduct__right-code'>Код товара:{product._id}</p>

                                <div className='oneProduct__right-row'>
                                    <div className='oneProduct__right-item'>
                                        <FaUsers/>
                                        {product.playCount}
                                    </div>


                                    <div className='oneProduct__right-item'>
                                        <BiTimeFive/>
                                        {product.time}
                                    </div>


                                    <div className='oneProduct__right-item'>
                                        {product.age}+
                                    </div>
                                </div>

                                <div className="oneProduct__right-block__price">
                                    <span className='oneProduct__right-sale'>{product.priceSale} ₽</span>

                                    <p className='oneProduct__right-price'>{product.price} ₽</p>
                                </div>

                                <div className='oneProduct__right-btns'>
                                    <button className='oneProduct__right-btn oneProduct__right-btn-orange'>В корзину</button>
                                    <button className='oneProduct__right-btn '>Купить в 1 клик</button>
                                </div>

                                <div className="oneProduct__delivery">
                                    <div className='oneProduct__delivery-time'>
                                        <p onClick={()=> setOpen(!open)} className="oneProduct__delivery-title">Доставка {open ? <IoIosArrowUp/> : <IoIosArrowDown/>} </p>
                                        {
                                            open &&  <ul className="oneProduct__delivery-list">
                                                <li className="oneProduct__delivery-item">Самовывоз из магазина: сегодня</li>
                                                <li className="oneProduct__delivery-item">Самовывоз из 761 пункта: 1-3 дня</li>
                                                <li className="oneProduct__delivery-item">Курьерская доставка: 1-3 дня</li>
                                                <li className="oneProduct__delivery-item">Доставка почтой: от 3 дней</li>
                                            </ul>
                                        }
                                    </div>

                                    <div className="oneProduct__delivery-pay">
                                        <p onClick={()=> setOpen2(!open2)} className="oneProduct__delivery-title">Оплата {open2 ? <IoIosArrowUp/> : <IoIosArrowDown/>} </p>
                                        {
                                            open2 && <ul className="oneProduct__delivery-list">
                                                <li className="oneProduct__delivery-item">Наличкой</li>
                                                <li className="oneProduct__delivery-item">Картой</li>
                                            </ul>
                                        }
                                    </div>

                                    <input className="oneProduct__delivery-input" placeholder='Задать вопрос' type="text"/>
                                </div>
                            </div>

                            <div className="oneProduct__right-rowCards">
                                <p className="oneProduct__right-rowCards-title">С этим товаром покупают</p>

                                <div className="oneProduct__right-rowCards-block">
                                    {
                                        cards.filter((item,idx)=> idx < 2).map(card => (
                                            <Cards card={card}/>
                                        ) )
                                    }
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;