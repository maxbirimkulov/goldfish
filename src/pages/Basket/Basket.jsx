import React, {useEffect} from 'react';
import Manchkin from "../../images/order/manchkin.png";
import WarHammer from "../../images/order/warhammer.png";
import {FaTrashAlt} from 'react-icons/fa'
import {AiOutlineCheck} from 'react-icons/ai'
import {useDispatch, useSelector} from "react-redux";
import {getAllCards} from "../../redux/cards";

const Basket = () => {
    const {cards} = useSelector(s => s.cards)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllCards())
    }, [])
    console.log(cards)
    return (
        <div className="basket">
            <div className="container">
                <div className="basket__top">
                    <p className="basket__top">Главная > Козина</p>
                </div>
                <h2 className="basket__title">Корзина</h2>
                <div className="basket__content">
                    <div className="basket__left">
                        <div className="basket__card">
                            <img className="basket__card-img" src={Manchkin} alt=""/>
                            <h3 className="basket__card-title">Вампирский Манчкин</h3>
                            <p className="basket__card-price">743 ₽</p>
                            <p className="basket__card-count"><span>-</span> 2 шт <span>+</span></p>
                            <div className="basket__icon"><FaTrashAlt/></div>
                        </div>
                        <div className="basket__card">
                            <img className="basket__card-img" src={WarHammer} alt=""/>
                            <h3 className="basket__card-title">Warhammer 40,000: <br/>
                                Craftworlds Farseer</h3>
                            <div className="basket__card-discount-block">
                                <p className="basket__card-discount">6490 ₽</p>
                                <p className="basket__card-price">5990 ₽</p>
                            </div>
                            <p className="basket__card-count"><span>-</span> 1 шт <span>+</span></p>
                            <div className="basket__icon"><FaTrashAlt/></div>
                        </div>
                    </div>
                    <div className="basket__right">
                        <p className="basket__right-price">Сумма: <span className="ordering__total-price">7476 ₽</span></p>
                        <p className="basket__right-price">Сумма со скидкой: <span className="ordering__total-price">6476 ₽</span></p>
                        <p className="basket__right-text">Промокод:</p>
                        <div className="basket__right-inp">
                            <input className="basket__right-input" type="text"/>
                            <div style={{background: '#CACACA', color:'#2A2A2A'}} className="basket__right-icon"><AiOutlineCheck/></div>
                        </div>
                        <button className="basket__right-btn">Оформить</button>
                        <button className="basket__right-btn2">Купить в 1 клик</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Basket;