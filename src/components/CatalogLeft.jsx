import React, {useState} from 'react';
import {categories, count} from '../utils/localdata'
import {useDispatch, useSelector} from "react-redux";
import {amountCount, cards, changeCategory} from "../redux/cards";
import {NavLink} from "react-router-dom";


const CatalogLeft = () => {
    const {filter} = useSelector(state => state.cards)
    const [active, setActive] = useState(false)
    const [active2, setActive2] = useState(false)
    const [open, setOpen] = useState(false)
    const [open2, setOpen2] = useState(false)
    const [open3, setOpen3] = useState(false)
    const [open4, setOpen4] = useState(false)
    const [open5, setOpen5] = useState(false)
    const dispatch = useDispatch()
    return (
        <div className='games__left'>
            <p className='games__left-title'>Все Категории <span onClick={() => {
                setActive(!active)
                setOpen(false)
                setOpen2(false)
                setOpen3(false)
                setOpen4(false)
                setOpen5(false)
            }}><svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 0L7 5L12 0L14 1L7 8L0 1L2 0Z" fill="#2A2A2A"/>
</svg>
</span></p>

            {
                active && <p onClick={() => setOpen(!open)} className='games__left-title'>Настольные игры <span><svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 0L7 5L12 0L14 1L7 8L0 1L2 0Z" fill="#2A2A2A"/>
</svg>
</span></p>
            }
            {
                open && <>
                    <ul className='games__left-list'>
                        {
                            categories.map((item)=>(
                                    <li className={`games__left-item ${filter.category === item ? 'games__left-item_active' : ''}`}   onClick={()=> {
                                        dispatch(changeCategory(item))
                                    }} >{item}</li>
                            ))
                        }
                    </ul>

                    <p className='games__left-title'>Warhammer 40000</p>
                </>
            }

            {
                active && <p onClick={() => setOpen2(!open2)} className='games__left-title'>Цена <span><svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 0L7 5L12 0L14 1L7 8L0 1L2 0Z" fill="#2A2A2A"/>
</svg>
</span></p>
            }
            {
                open2 && <div>
                    <div className='games__left-price' >
                        <div className='games__left-price'>
                            <p>От</p>
                            <input className='games__left-input' type="number"/>

                        </div>
                        <div className='games__left-price'>
                            <p>До</p>
                            <input className='games__left-input' type="number"/>

                        </div>
                    </div>
                    <input className='games__left-range' type="range"/>
                    <div className='games__left-price2'>
                        <input type="checkbox"/>
                        <p>Только со скидкой</p>
                    </div>
                </div>
            }
            {
                active && <p onClick={() => setOpen3(!open3)} className='games__left-title'>Возрасты <span><svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 0L7 5L12 0L14 1L7 8L0 1L2 0Z" fill="#2A2A2A"/>
</svg>
</span></p>
            }
            {
                open3 && <ul className='games__left-list'>
                    <li className='games__left-item3'><input type="checkbox"/>3-5 лет</li>
                    <li className='games__left-item3'><input type="checkbox"/>3-5 лет</li>
                    <li className='games__left-item3'><input type="checkbox"/>3-5 лет</li>
                    <li className='games__left-item3'><input type="checkbox"/>3-5 лет</li>
                    <li className='games__left-item3'><input type="checkbox"/>3-5 лет</li>
                    <li className='games__left-item3'><input type="checkbox"/>3-5 лет</li>
                </ul>
            }
            {
                active && <p onClick={() => setOpen4(!open4)} className='games__left-title'>Наличие<span><svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 0L7 5L12 0L14 1L7 8L0 1L2 0Z" fill="#2A2A2A"/>
</svg>
</span></p>

            }
            {
                open4 && <ul className='games__left-list'>
                    <li className='games__left-item3'><input type="checkbox"/>в наличии</li>
                    <li className='games__left-item3'><input type="checkbox"/>в наличии</li>
                    <li className='games__left-item3'><input type="checkbox"/>в наличии</li>
                    <li className='games__left-item3'><input type="checkbox"/>в наличии</li>
                    <li className='games__left-item3'><input type="checkbox"/>в наличии</li>
                </ul>
            }

            {
                active && <p onClick={() => setOpen5(!open5)} className='games__left-title'>Количество игроков <span><svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 0L7 5L12 0L14 1L7 8L0 1L2 0Z" fill="#2A2A2A"/>
</svg>
</span></p>
            }
            {
                open5 && <>
                    <input className='games__left-range' type="range"/>
                    <ul className='games__left-list2'>
                        {
                            count.map((item) => (
                                <li onClick={() => dispatch(amountCount(item))} className='games__left-item2'>{item} лет</li>
                            ))

                        }

                    </ul>
                </>
            }
            <button className='games__btn'>Сбросить фильтр</button>
        </div>
    );
};

export default CatalogLeft;