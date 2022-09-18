import React, {useEffect} from 'react';
import Manchkin from "../../images/order/manchkin.png";
import WarHammer from "../../images/order/warhammer.png";
import {FaTrashAlt} from 'react-icons/fa'
import {AiOutlineCheck} from 'react-icons/ai'
import {useDispatch, useSelector} from "react-redux";
import {getAllCards} from "../../redux/cards";
import {RemoveProduct, RemoveAllProducts} from "../../redux/basket";

const Basket = () => {
    const basket = useSelector(state => state.reducer.basket.order);

    const {cards} = useSelector(s => s.reducer.cards)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllCards())
    }, [])
    return (
        <div className="basket">
            {
                basket.length ?
                    <div className="container">
                    <div className="basket__top">
                        <p className="basket__top">Главная > Козина</p>
                    </div>
                    <h2 className="basket__title">Корзина</h2>
                    <div className="basket__content">
                        <div className="basket__left">
                            {
                                basket && basket.map(item => (
                                    <div className="basket__card">
                                        <img className="basket__card-img" src={item.images} alt=""/>
                                        <h3 className="basket__card-title">{item.title}</h3>
                                        <div className="basket__card-discount-block">
                                            <p className="basket__card-discount">{item.price} </p>
                                            <p className="basket__card-price">{item.priceSale} сом</p>
                                        </div>
                                        {/*<p className="basket__card-count"><span>-</span> 1 шт <span>+</span></p>*/}
                                        <button onClick={() => dispatch(RemoveProduct(item._id))} className="basket__icon">
                                            <FaTrashAlt/></button>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="basket__right">
                            <p className="basket__right-price">Сумма: {basket.reduce((acc, rec) => acc + rec.price , 0)} сом <span
                                className="ordering__total-price"></span></p>
                            <p className="basket__right-price">Сумма со скидкой: <span className="ordering__total-price">{basket.reduce((acc, rec) => acc + rec.priceSale , 0)} сомиков</span></p>
                            <p className="basket__right-text">Промокод:</p>
                            <div className="basket__right-inp">
                                <input className="basket__right-input" type="text"/>
                                <div style={{background: '#CACACA', color: '#2A2A2A'}} className="basket__right-icon">
                                    <AiOutlineCheck/></div>
                            </div>
                            <button className="basket__right-btn">Оформить</button>
                            <button className="basket__right-btn2">Купить в 1 клик</button>
                            <button onClick={() => dispatch(RemoveAllProducts())} className="basket__right-btn2">Удалить все</button>
                        </div>
                    </div>
                </div>
                    : <h2>Ваша корзина пуста!!!</h2>
            }
        </div>
    );
};

export default Basket;