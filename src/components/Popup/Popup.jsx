import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {changeStatus, closePopup} from "../../redux/popup";

const Popup = () => {
    const dispatch = useDispatch()
    const {active, status} = useSelector((s) => s.popup )
    return (
        <div className="overlay" style={{display: active ? 'flex' : 'none'}} >
            <div className="popup">

                {
                    status === 'login'
                        ? <form action="#" className="popup__form-login">
                        <h2 className="popup__title">Войдите или зарегистрируйтесь</h2>
                        <div className="popup__logins">
                            <p onClick={() => dispatch(changeStatus('login'))} className="popup__login">Вход</p>
                            <p onClick={() => dispatch(changeStatus('register'))} className="popup__register">Регистрация</p>
                        </div>

                        <label>
                            E-mail
                            <input className="popup__input" required placeholder="E-mail" type="email"/>
                        </label>

                        <label>
                            Пароль
                            <input className="popup__input" required placeholder="Пароль" type="password"/>
                        </label>

                        <a href="" className="form__password">Забыли пароль?</a>

                        <a href="" className="form__login-sms">Войти с помщью SMS подтверждения</a>
                        <hr className="popup__hr"/>
                        <a href="" className="form__login-public">Войти через аккаунт социальной сети</a>

                        <div className="form__icons">
                            <div className="form__facebook">
                                <svg width="23" height="23" viewBox="0 0 23 23" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M9.72939 20.6998H13.0989V12.3048H15.9164L16.3419 9.0388H13.0989V6.9458C13.0989 6.0028 13.3634 5.3588 14.7204 5.3588H16.4569V2.4263C16.1579 2.3918 15.1344 2.2998 13.9384 2.2998C11.4314 2.2998 9.72939 3.8293 9.72939 6.62381V9.0388H6.90039V12.3048H9.72939V20.6998Z"
                                        fill="#2A2A2A"/>
                                </svg>
                            </div>
                            <div className="form__vk">
                                <svg width="31" height="31" viewBox="0 0 31 31" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M15.5615 22.2585H16.8015C16.8015 22.2585 17.1735 22.1965 17.3595 22.0105C17.5455 21.8245 17.5455 21.4525 17.5455 21.4525C17.5455 21.4525 17.5455 19.8405 18.2895 19.5925C19.0335 19.3445 20.0255 21.2045 21.0175 21.8865C21.7615 22.4445 22.3195 22.3205 22.3195 22.3205L25.0475 22.2585C25.0475 22.2585 26.4735 22.1965 25.7915 21.0185C25.7295 20.9565 25.4195 20.2125 23.7455 18.6625C22.0095 17.0505 22.2575 17.3605 24.3035 14.5705C25.5435 12.8965 26.0395 11.9045 25.9155 11.4085C25.7915 10.9745 24.8615 11.0985 24.8615 11.0985H21.7615C21.7615 11.0985 21.5135 11.0365 21.3895 11.1605C21.2035 11.2845 21.1415 11.4705 21.1415 11.4705C21.1415 11.4705 20.6455 12.7725 20.0255 13.8885C18.6615 16.1825 18.1035 16.3065 17.9175 16.1825C17.4215 15.8725 17.5455 14.8185 17.5455 14.1365C17.5455 11.9045 17.9175 10.9745 16.8635 10.7265C16.5535 10.6645 16.3055 10.6025 15.4375 10.6025C14.3215 10.6025 13.3915 10.6025 12.8955 10.8505C12.5235 11.0365 12.2755 11.4085 12.4615 11.4085C12.6475 11.4085 13.1435 11.5325 13.3915 11.8425C13.6395 12.4005 13.6395 13.3305 13.6395 13.3305C13.6395 13.3305 13.8255 15.9965 13.2055 16.3065C12.7715 16.5545 12.2135 16.0585 10.9735 13.9505C10.3535 12.8965 9.85753 11.6565 9.85753 11.6565C9.85753 11.6565 9.79553 11.4085 9.60953 11.2845C9.42353 11.1605 9.11353 11.0985 9.11353 11.0985H6.19953C6.19953 11.0985 5.76553 11.0985 5.57953 11.2845C5.45553 11.4705 5.57953 11.7805 5.57953 11.7805C5.57953 11.7805 7.87353 17.1125 10.4775 19.8405C12.8955 22.4445 15.5615 22.2585 15.5615 22.2585Z"
                                        fill="#2A2A2A"/>
                                </svg>
                            </div>
                        </div>
                        <button className="popup__btn">Войти</button>
                    </form>
                        : <form action="#" className="popup__form-register">
                            <h2 className="popup__title">Войдите или зарегистрируйтесь</h2>

                            <div className="popup__logins">
                                <p onClick={() => dispatch(changeStatus('login'))} className="popup__login">Вход</p>
                                <p onClick={() => dispatch(changeStatus('register'))} className="popup__register">Регистрация</p>
                            </div>

                            <label>
                                Имя:
                                <input className="popup__input" required placeholder="Имя" type="text"/>
                            </label>

                            <label>
                                Фамилия:
                                <input className="popup__input" required placeholder="Фамилия" type="text"/>
                            </label>

                            <label>
                                Телефон:
                                <input id="telefon" className="popup__input" required placeholder="+996(___) - __ - __ - __"
                                       type="tel"/>
                            </label>

                            <label>
                                <span className="label__password-before">Пароль:</span>
                                <input minLength="6" className="popup__input" required placeholder="******" type="password"/>
                            </label>

                            <a href="" className="form__password">Забыли пароль?</a>

                            <label className="checkbox-block">
                                <input required type="checkbox"/>
                                <span>Я согласен с <a href="">политикой конфиденциальности</a>
и с <a href="">обработкой персональных данных</a></span>
                            </label>

                            <label className="checkbox-block">
                                <input required type="checkbox"/>
                                <span>Я хочу получать новости и узнавать об
акциях первым</span>
                            </label>

                            <button className="popup__btn">Зарегистрироваться</button>

                        </form>

                }




                <span onClick={() => dispatch(closePopup())} className="popup__close">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path
      d="M1.77617 0.304743C1.36985 -0.101581 0.711067 -0.101581 0.304743 0.304743C-0.101581 0.711067 -0.101581 1.36985 0.304743 1.77617L14.5286 16L0.304752 30.2238C-0.101572 30.6302 -0.101572 31.2889 0.304752 31.6953C0.711076 32.1016 1.36986 32.1016 1.77618 31.6953L16 17.4714L30.2238 31.6953C30.6301 32.1016 31.2889 32.1016 31.6953 31.6953C32.1016 31.2889 32.1016 30.6301 31.6953 30.2238L17.4714 16L31.6953 1.77618C32.1016 1.36985 32.1016 0.71107 31.6953 0.304746C31.2889 -0.101578 30.6302 -0.101578 30.2238 0.304746L16 14.5286L1.77617 0.304743Z"
      fill="white"/>
</svg>
        </span>
            </div>
        </div>
    );
};

export default Popup;