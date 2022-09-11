import React from 'react';
import {BsArrowRight} from "react-icons/bs"
import {BsFillArrowRightCircleFill} from "react-icons/bs"
import {BsFillArrowLeftCircleFill} from "react-icons/bs"
import {IoIosArrowBack} from "react-icons/io"
import {IoIosArrowForward} from "react-icons/io"
import halloween from "./../../images/events/halloween.png"
import warhammer from "./../../images/events/warhammer.png"
import fireWoman from "./../../images/events/fireWoman.png"
import wolf from "./../../images/events/wolf.png"
import woman from "./../../images/events/woman.png"
import girl from "./../../images/events/girl.png"
import {Link} from "react-router-dom"
const Event = () => {
    return (
        <section className="event">
            <div className="container">
                <div className="event__content">
                    <div className="event__left">
                        <div className="event__crumbs">
                            <Link to="/" className="event__crumbs-text">Главная</Link>
                            <span className="event__crumbs-arrow"> > </span>
                            <span className="event__crumbs-text event__crumbs-text_grey">Мероприятия</span>
                        </div>
                        <h2 className="event__title">Мероприятия</h2>
                        <div className="event__events">
                            <div className="event__row">
                                <Link to="" className="event__card">
                                    <img className="event__card-img" src={halloween} alt="Halloween"/>
                                    <div className="event__card-block">
                                        <div className="event__card-top">
                                            <span className="event__card-title">Halloween c GoldFish</span>
                                            <span className="event__card-date">31.10.2022 19:00</span>
                                            <p className="event__card-price event__card-price_1">350₽</p>
                                        </div>
                                        <div className="event__card-bottom">
                                    <span className="event__card-description">
                                        Мы соберемся,чтобы узнать,кто же <br/>
                                        все-таки был Мафией и что будет <br/>
                                        с тем,кого убили..
                                    </span>
                                            <button type="button" className="event__card-btn">
                                                <BsArrowRight/>
                                            </button>
                                        </div>
                                    </div>
                                </Link>
                                <Link to="" className="event__card">
                                    <img className="event__card-img" src={warhammer} alt="warhammer"/>
                                    <div className="event__card-block">
                                        <div className="event__card-top">
                                            <span className="event__card-title">Вечер настольных игр</span>
                                            <span className="event__card-date">10.12.2021 18:00</span>
                                            <p className="event__card-price">270₽</p>
                                        </div>
                                        <div className="event__card-bottom">
                                    <span className="event__card-description">
                                        Еженедельные настольные игротеки в <br/>
                                        различные игры.Встречи проходят в <br/>
                                        антикафе, в кафе и библиотеках.
                                    </span>
                                            <button type="button" className="event__card-btn">
                                                <BsArrowRight/>
                                            </button>
                                        </div>
                                    </div>
                                </Link>
                                <Link to="" className="event__card">
                                    <img className="event__card-img" src={fireWoman} alt="FireWoman"/>
                                    <div className="event__card-block">
                                        <div className="event__card-top">
                                            <span className="event__card-title">Halloween c GoldFish</span>
                                            <span className="event__card-date">31.10.2022 19:00</span>
                                            <p className="event__card-price event__card-price_1">350₽</p>
                                        </div>
                                        <div className="event__card-bottom">
                                    <span className="event__card-description">
                                        Мы соберемся,чтобы узнать,кто же <br/>
                                        все-таки был Мафией и что будет <br/>
                                        с тем,кого убили..
                                    </span>
                                            <button type="button" className="event__card-btn">
                                                <BsArrowRight/>
                                            </button>
                                        </div>
                                    </div>
                                </Link>
                                <Link to="" className="event__card">
                                    <img className="event__card-img" src={wolf} alt="Wolf"/>
                                    <div className="event__card-block">
                                        <div className="event__card-top">
                                            <span className="event__card-title">Вечер настольных игр</span>
                                            <span className="event__card-date">10.12.2021 18:00</span>
                                            <p className="event__card-price">270₽</p>
                                        </div>
                                        <div className="event__card-bottom">
                                     <span className="event__card-description">
                                        Еженедельные настольные игротеки в <br/>
                                        различные игры.Встречи проходят в <br/>
                                        антикафе, в кафе и библиотеках.
                                    </span>
                                            <button type="button" className="event__card-btn">
                                                <BsArrowRight/>
                                            </button>
                                        </div>
                                    </div>
                                </Link>
                                <Link to="" className="event__card">
                                    <img className="event__card-img" src={woman} alt="Woman"/>
                                    <div className="event__card-block">
                                        <div className="event__card-top">
                                            <span className="event__card-title">Halloween c GoldFish</span>
                                            <span className="event__card-date">31.10.2022 19:00</span>
                                            <p className="event__card-price event__card-price_1">350₽</p>
                                        </div>
                                        <div className="event__card-bottom">
                                    <span className="event__card-description">
                                        Мы соберемся,чтобы узнать,кто же <br/>
                                        все-таки был Мафией и что будет <br/>
                                        с тем,кого убили..
                                    </span>
                                            <button type="button" className="event__card-btn">
                                                <BsArrowRight/>
                                            </button>
                                        </div>
                                    </div>
                                </Link>
                                <Link to="" className="event__card">
                                    <img className="event__card-img" src={girl} alt="Girl"/>
                                    <div className="event__card-block">
                                        <div className="event__card-top">
                                            <span className="event__card-title">Вечер настольных игр</span>
                                            <span className="event__card-date">10.12.2021 18:00</span>
                                            <p className="event__card-price">270₽</p>
                                        </div>
                                        <div className="event__card-bottom">
                                     <span className="event__card-description">
                                        Еженедельные настольные игротеки в <br/>
                                        различные игры.Встречи проходят в <br/>
                                        антикафе, в кафе и библиотеках.
                                    </span>
                                            <button type="button" className="event__card-btn">
                                                <BsArrowRight/>
                                            </button>
                                        </div>
                                    </div>
                                </Link>
                                <Link to="" className="event__card">
                                    <img className="event__card-img" src={halloween} alt="Halloween"/>
                                    <div className="event__card-block">
                                        <div className="event__card-top">
                                            <span className="event__card-title">Halloween c GoldFish</span>
                                            <span className="event__card-date">31.10.2022 19:00</span>
                                            <p className="event__card-price event__card-price_1">350₽</p>
                                        </div>
                                        <div className="event__card-bottom">
                                    <span className="event__card-description">
                                        Мы соберемся,чтобы узнать,кто же <br/>
                                        все-таки был Мафией и что будет <br/>
                                        с тем,кого убили..
                                    </span>
                                            <button type="button" className="event__card-btn">
                                                <BsArrowRight/>
                                            </button>
                                        </div>
                                    </div>
                                </Link>
                                <Link to="" className="event__card">
                                    <img className="event__card-img" src={warhammer} alt="Warhammer"/>
                                    <div className="event__card-block">
                                        <div className="event__card-top">
                                            <span className="event__card-title">Вечер настольных игр</span>
                                            <span className="event__card-date">10.12.2021 18:00</span>
                                            <p className="event__card-price">270₽</p>
                                        </div>
                                        <div className="event__card-bottom">
                                     <span className="event__card-description">
                                        Еженедельные настольные игротеки в <br/>
                                        различные игры.Встречи проходят в <br/>
                                        антикафе, в кафе и библиотеках.
                                    </span>
                                            <button type="button" className="event__card-btn">
                                                <BsArrowRight/>
                                            </button>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="event__pagination">
                                <span className="event__pagination-prev"><BsFillArrowLeftCircleFill/></span>
                                <div className="event__pagination-numbers">
                                    <span className="event__pagination-text">1</span>
                                    <span className="event__pagination-text">2</span>
                                    <span className="event__pagination-text">3</span>
                                    <span className="event__pagination-text">4</span>
                                    <span className="event__pagination-text">5</span>
                                    <span className="event__pagination-text">...</span>
                                    <span className="event__pagination-text">10</span>
                                </div>
                                <span className="event__pagination-next"><BsFillArrowRightCircleFill/></span>
                            </div>
                        </div>
                    </div>
                    <div className="event__right">
                        <div className="event__date">
                            <div className="event__date-months">
                                <span className="event__date-prev"><IoIosArrowBack/></span>
                                <span className="event__date-month">Ноябрь</span>
                                <span className="event__date-next"><IoIosArrowForward/></span>
                            </div>
                            <div className="event__date-weekends">
                                <span className="event__date-weekend">Пн</span>
                                <span className="event__date-weekend">Вт</span>
                                <span className="event__date-weekend">Ср</span>
                                <span className="event__date-weekend">Чт</span>
                                <span className="event__date-weekend">Пт</span>
                                <span className="event__date-weekend">Сб</span>
                                <span className="event__date-weekend">Вс</span>
                            </div>
                            <div className="event__date-days">
                                <span className="event__date-day">1</span>
                                <span className="event__date-day">2</span>
                                <span className="event__date-day">3</span>
                                <span className="event__date-day">4</span>
                                <span className="event__date-day">5</span>
                                <span className="event__date-day">6</span>
                                <span className="event__date-day">7</span>
                                <span className="event__date-day">8</span>
                                <span className="event__date-day">9</span>
                                <span className="event__date-day">10</span>
                                <span className="event__date-day">11</span>
                                <span className="event__date-day">12</span>
                                <span className="event__date-day">13</span>
                                <span className="event__date-day">14</span>
                                <span className="event__date-day">15</span>
                                <span className="event__date-day">16</span>
                                <span className="event__date-day">17</span>
                                <span className="event__date-day">18</span>
                                <span className="event__date-day">19</span>
                                <span className="event__date-day">20</span>
                                <span className="event__date-day">21</span>
                                <span className="event__date-day">22</span>
                                <span className="event__date-day">22</span>
                                <span className="event__date-day">23</span>
                                <span className="event__date-day">24</span>
                                <span className="event__date-day">25</span>
                                <span className="event__date-day">26</span>
                                <span className="event__date-day">27</span>
                                <span className="event__date-day">28</span>
                                <span className="event__date-day">29</span>
                                <span className="event__date-day">30</span>
                                <span className="event__date-day">31</span>
                            </div>
                        </div>
                        <div className="event__subject">
                            <span className="event__subject-title">Тематика</span>
                            <div className="event__subject-row">
                                <div className="event__subject-card">
                                    <input className="event__subject-field" type="checkbox"/>
                                    <span className="event__subject-text">Magic: the Cathering</span>
                                </div>
                                <div className="event__subject-card">
                                    <input className="event__subject-field" type="checkbox"/>
                                    <span className="event__subject-text">Warhammer 40000</span>
                                </div>
                                <div className="event__subject-card">
                                    <input className="event__subject-field" type="checkbox"/>
                                    <span className="event__subject-text">Игровые вечера</span>
                                </div>
                                <div className="event__subject-card">
                                    <input className="event__subject-field" type="checkbox"/>
                                    <span className="event__subject-text">Командные сражения</span>
                                </div>
                                <div className="event__subject-card">
                                    <input className="event__subject-field" type="checkbox"/>
                                    <span className="event__subject-text">Обучение</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Event;