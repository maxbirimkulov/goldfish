import React, {useEffect, useState} from 'react';
import {age, categories, count} from '../utils/localdata'
import {useDispatch, useSelector} from "react-redux";
import {
    getCountPlayers,
    changeCategory,
    getAgePlayers,
    sortPricePlayers,
    getOnlySale,
    changeCountplayersFrom,
    changeCountplayersTo,
    changeAgeplayersTo,
    changeAgeplayersFrom
} from "../redux/cards";
import {NavLink} from "react-router-dom";
import MinimumDistanceSlider from "./Ranges/RangePlayers";
import RangeSlider from "./Ranges/RangePlayers";
import CountPlayer from "./Ranges/RangePlayers";
import RangeAges from "./Ranges/RangeAges";
import AgePlayer from "./Ranges/RangeAges";


const CatalogLeft = () => {
    const {filter} = useSelector(state => state.cards)
    const {priceSale} = useSelector(state => state.cards.filter)
    const [active, setActive] = useState(false)
    const [active2, setActive2] = useState(false)
    const [open, setOpen] = useState(false)
    const [open2, setOpen2] = useState(false)
    const [open3, setOpen3] = useState(false)
    const [open4, setOpen4] = useState(false)
    const [open5, setOpen5] = useState(false)
    const [from, setFrom] = useState(0
    )
    const [to, setTo] = useState({to: 0})



    const [valueFromPlayer, setValueFromPlayer] = useState(filter.countPlayer.from || 1)
    const [valueToPlayer, setValueToPlayer] = useState(filter.countPlayer.to || 10)

    const [valueFromAge, setValueFromAge] = useState(filter.age.from || 6)
    const [valueToAge, setValueToAge] = useState(filter.age.to || 20)


    useEffect(() => {
        dispatch(changeCountplayersFrom(valueFromPlayer))
    }, [valueFromPlayer])

    useEffect(() => {
        dispatch(changeCountplayersTo(valueToPlayer))
    }, [valueToPlayer])

    useEffect(() => {
        dispatch(changeAgeplayersFrom(valueFromAge))
    }, [valueFromAge])

    useEffect(() => {
        dispatch(changeAgeplayersTo(valueToAge))
    }, [valueToAge])

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
                            <input value={from} onChange={(e) => dispatch(sortPricePlayers(setFrom(e.target.value)))} className='games__left-input' type="text"/>

                        </div>
                        <div className='games__left-price'>
                            <p>До</p>
                            <input onChange={(e) => dispatch(sortPricePlayers(setTo(setTo({from: e.target.value}))))} className='games__left-input' type="number"/>

                        </div>
                    </div>
                    {/*<RangeSlider/>*/}
                    {/*<div className='games__left-price2'>*/}
                    {/*    <label htmlFor="">*/}
                    {/*        <input onChange={() => dispatch(getOnlySale('sale=true'))} value={'sale=true'} type="checkbox"/>*/}
                    {/*        только со скидкой*/}
                    {/*    </label>*/}
                    {/*</div>*/}
                </div>
            }
            {
                active && <p onClick={() => setOpen3(!open3)} className='games__left-title'>Возрасты <span><svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 0L7 5L12 0L14 1L7 8L0 1L2 0Z" fill="#2A2A2A"/>
</svg>
</span></p>
            }

            {
                open3 &&
                <div>
                    <div className='games__left-price' >
                        <div className='games__left-price'>
                            <p>От</p>
                            <input min={6} max={19} value={valueFromAge} onChange={(e) => setValueFromAge(e.target.value)} className='games__left-input' type="number"/>

                        </div>
                        <div className='games__left-price'>
                            <p>До</p>
                            <input max={20} min={7} value={valueToAge} onChange={(e) => setValueToAge(e.target.value)} className='games__left-input' type="number"/>

                        </div>
                    </div>
                  <AgePlayer setValueFromAge={setValueFromAge} setValueToAge={setValueToAge}/>
                    {/*<div className='games__left-price2'>*/}
                    {/*    <label htmlFor="">*/}
                    {/*        <input onChange={() => dispatch(getOnlySale('sale=true'))} value={'sale=true'} type="checkbox"/>*/}
                    {/*        только со скидкой*/}
                    {/*    </label>*/}
                    {/*</div>*/}
                </div>
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
                open5 && <div>
                    <div className='games__left-price' >
                        <div className='games__left-price'>
                            <p>От</p>
                            <input min={1} max={9} value={valueFromPlayer} onChange={(e) => setValueFromPlayer(e.target.value)} className='games__left-input' type="number"/>

                        </div>
                        <div className='games__left-price'>
                            <p>До</p>
                            <input min={2} max={10}  value={valueToPlayer} onChange={(e) => setValueToPlayer(e.target.value)} className='games__left-input' type="number"/>

                        </div>
                    </div>
                    <CountPlayer setValueFromPlayer={setValueFromPlayer} setValueToPlayer={setValueToPlayer}/>
                    {/*<div className='games__left-price2'>*/}
                    {/*    <label htmlFor="">*/}
                    {/*        <input onChange={() => dispatch(getOnlySale('sale=true'))} value={'sale=true'} type="checkbox"/>*/}
                    {/*        только со скидкой*/}
                    {/*    </label>*/}
                    {/*</div>*/}
                </div>
            }
            <button className='games__btn'>Сбросить фильтр</button>
        </div>
    );
};

export default CatalogLeft;