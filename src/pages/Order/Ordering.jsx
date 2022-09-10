import React, {useState} from 'react';
import {BsShop, BsTruck, BsCreditCard} from 'react-icons/bs'
import {IoCubeOutline} from 'react-icons/io5'
import {IoBus} from 'react-icons/io5'
import {FaRegMoneyBillAlt} from 'react-icons/fa'
import {useDispatch, useSelector} from "react-redux";
import {openPopup} from "../../redux/popup";
import {AiOutlineCheck} from 'react-icons/ai'


const Ordering = () => {
    const {popup} = useSelector(store => store.popup);
    const dispatch = useDispatch();
    const [check, setCheck] = useState(false);
    return (
        <div className="ordering">
            <div className="container">
                <form className="ordering__form">
                    <div className="basket__top">
                        <p className="order__top">Главная > Козина > Оформление заказа</p>
                    </div>
                    <h2 className="basket__title">Оформление заказа</h2>
                    <div className="ordering__content-top">
                        <div className="ordering__left">
                            <h3 className="ordering__subtitle">Адрес доставки</h3>
                            <label className="ordering__select">
                                <p className="ordering__select-text">Страна*</p>
                                <input placeholder="Страна" className="ordering__select-input" type="text"/>
                            </label>
                            <label className="ordering__select">
                                <p className="ordering__select-text">Город*</p>
                                <input placeholder="Город" className="ordering__select-input" type="text"/>
                            </label>
                            <label className="ordering__select">
                                <p className="ordering__select-text">Улица*</p>
                                <input placeholder="Улица" className="ordering__select-input" type="text"/>
                            </label>
                            <label className="ordering__select">
                                <p className="ordering__select-text">Дом*</p>
                                <input placeholder="Дом" className="ordering__select-input" type="text"/>
                            </label>
                            <label className="ordering__select">
                                <p className="ordering__select-text">Квартира*</p>
                                <input placeholder="Квартира" className="ordering__select-input" type="text"/>
                            </label>
                            <p className="ordering__text">*Поля обязательные для заполнения</p>
                        </div>
                        <div className="ordering__right">
                            <h3 className="ordering__right-title">В корзине 3 товара на сумму 7476₽ : </h3>
                            <div className="ordering__right-products">
                                <p className="ordering__right-product">Вампирский Манчкин <br/>
                                    1шт     743₽</p>
                                <p className="ordering__right-product">Warhammer 40,000:Craftworlds Farseer <br/>
                                    2 шт    5990₽</p>
                            </div>
                        </div>
                    </div>
                    <div className="ordering__center" >
                        <h2 className="ordering__delivery-title">Способ доставки</h2>
                        <div className="ordering__delivery">
                            <div className="ordering__delivery-card">
                                <div className="ordering__delivery-icon"><BsShop/></div>
                                <div className="ordering__delivery-info">
                                    <h4 className="ordering__delivery-subtitle">Самовывоз из магазина</h4>
                                    <p className="ordering__delivery-price">Бесплатно,сегодня</p>
                                </div>
                                    <input className="ordering__checkbox" type="checkbox"/>
                            </div>
                            <div className="ordering__delivery-card">
                                <div className="ordering__delivery-icon"><IoBus/></div>
                                <div className="ordering__delivery-info">
                                    <h4 className="ordering__delivery-subtitle">Самовывоз из 761 пункта</h4>
                                    <p className="ordering__delivery-price">От 150₽, 1 день</p>
                                </div>
                                <input className="ordering__checkbox" type="checkbox"/>
                            </div>
                            <div className="ordering__delivery-card">
                                <div className="ordering__delivery-icon"><BsTruck/></div>
                                <div className="ordering__delivery-info">
                                    <h4 className="ordering__delivery-subtitle">Курьерская доставка</h4>
                                    <p className="ordering__delivery-price">От 180₽, 1-3 дня</p>
                                </div>
                                <input className="ordering__checkbox" type="checkbox"/>
                            </div>
                            <div className="ordering__delivery-card">
                                <div className="ordering__delivery-icon"><IoCubeOutline/></div>
                                <div className="ordering__delivery-info">
                                    <h4 className="ordering__delivery-subtitle">Доставка почтой</h4>
                                    <p className="ordering__delivery-price">От 180₽, от 3 дней</p>
                                </div>
                                <input className="ordering__checkbox" type="checkbox"/>
                            </div>
                        </div>
                        <h2 className="ordering__delivery-title">Способ оплаты</h2>
                        <div className="ordering__pay">
                            <div className="ordering__delivery-card">
                                <div className="ordering__delivery-icon"><BsCreditCard/></div>
                                <div className="ordering__delivery-info">
                                    <h4 className="ordering__delivery-subtitle">Оплата картой</h4>
                                    <p className="ordering__delivery-price">карта,Apple pay,Google pay</p>
                                </div>
                                <input className="ordering__checkbox" type="checkbox"/>
                            </div>
                            <div className="ordering__delivery-card">
                                <div className="ordering__delivery-icon"><FaRegMoneyBillAlt/></div>
                                <div className="ordering__delivery-info">
                                    <h4 className="ordering__delivery-subtitle">Оплата наличными</h4>
                                    <p className="ordering__delivery-price">курьеру при получении</p>
                                </div>
                                <input className="ordering__checkbox" type="checkbox"/>
                            </div>
                        </div>
                    </div >
                    <h2 className="ordering__delivery-title">Контактные данные</h2>
                    <div className="ordering__selects">
                        <label className="ordering__select">
                            <p className="ordering__select-text2">Фамилия*</p>
                            <input placeholder="Фамилия" className="ordering__select-input" type="text"/>
                        </label>
                        <label className="ordering__select">
                            <p className="ordering__select-text2">Имя*</p>
                            <input placeholder="Имя" className="ordering__select-input" type="text"/>
                        </label>
                        <label className="ordering__select">
                            <p className="ordering__select-text2">E-mail*</p>
                            <input placeholder="E-mail" className="ordering__select-input" type="text"/>
                        </label>
                        <label className="ordering__select">
                            <p className="ordering__select-text2">Телефон*</p>
                            <input placeholder="+7 ___ _______" className="ordering__select-input" type="number"/>
                        </label>
                    </div>
                    <div className="ordering__bottom">
                        <p style={{marginTop: '10px'}} className="ordering__text">*Поля обязательные для заполнения</p>
                        <div className="ordering__block" >
                            <input required className="ordering__checkbox" type="checkbox"/>
                            <div className="ordering__delivery-block">
                                <p className="ordering__block-agree">Создать учетную запись</p>
                            </div>
                        </div>
                        <p className="ordering__block-agree">Нажимая кнопку «Далее», Вы принимаете условия Публичной оферты и даете <br/>
                            согласие на обработку персональных данных.</p>
                        <div className="ordering__block">
                            <input required className="ordering__checkbox" type="checkbox"/>
                           <div className="ordering__delivery-block">
                               <p className=" ordering__block-agree_active">С положениями Публичной оферты ознакомлен и согласен</p>
                           </div>
                        </div>
                        <div className="ordering__block">
                            <input required className="ordering__checkbox" type="checkbox"/>
                            <div className="ordering__delivery-block">
                                <p className=" ordering__block-agree_active">Даю согласие на обработку персональных данных</p>
                            </div>
                        </div>

                        <p className="ordering__block-login">Уже зарегистрированы? <span className="ordering__login" onClick={() => dispatch(openPopup())}>Войдите</span></p>
                        <h4 className="ordering__total">Итог</h4>
                        <div className="ordering__sums">
                            <p className="ordering__sum">Сумма заказа ...................................................................7476 ₽</p>
                            <p className="ordering__sum">Стоимость доставки............................................................ 350 ₽</p>
                            <p className="ordering__sum">Размер скидки...................................................................... 0 ₽</p>
                            <p className="ordering__sum">Сумма к оплате........................................................... <span className="ordering__total-price">7826 ₽</span></p>
                        </div>
                        <div className="ordering__btn-block"> <button type="submit" className="ordering__btn">Оплатить</button></div>
                    </div>
            </form>

            </div>
        </div>
    );
};

export default Ordering;