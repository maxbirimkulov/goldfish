import React, {useState} from 'react';

const CatalogLeft = () => {
    const [active, setActive] = useState(false)
    const [open, setOpen] = useState(false)
    const [open2, setOpen2] = useState(false)
    const [open3, setOpen3] = useState(false)
    const [open4, setOpen4] = useState(false)
    const [open5, setOpen5] = useState(false)

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
                        <li className='games__left-item'>Вечериночные игры</li>
                        <li className='games__left-item'>Вечериночные игры</li>
                        <li className='games__left-item'>Вечериночные игры</li>
                        <li className='games__left-item'>Вечериночные игры</li>
                        <li className='games__left-item'>Вечериночные игры</li>
                        <li className='games__left-item'>Вечериночные игры</li>
                        <li className='games__left-item'>Вечериночные игры</li>
                        <li className='games__left-item'>Вечериночные игры</li>
                        <li className='games__left-item'>Вечериночные игры</li>
                        <li className='games__left-item'>Вечериночные игры</li>
                        <li className='games__left-item'>Вечериночные игры</li>
                    </ul>
                    <p className='games__left-title'>Warhammer 40000</p>
                    <p className='games__left-title'>Warhammer 40000</p>
                    <p className='games__left-title'>Warhammer 40000</p>
                    <p className='games__left-title'>Warhammer 40000</p>
                    <p className='games__left-title'>Warhammer 40000</p>
                    <p className='games__left-title'>Warhammer 40000</p>
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
                        <li className='games__left-item2'>Любое</li>
                        <li className='games__left-item2'>1</li>
                        <li className='games__left-item2'>2</li>
                        <li className='games__left-item2'>3</li>
                        <li className='games__left-item2'>4</li>
                        <li className='games__left-item2'>5</li>
                        <li className='games__left-item2'>6</li>
                        <li className='games__left-item2'>Больше</li>
                    </ul>
                </>
            }
            <button className='games__btn'>Сбросить фильтр</button>
        </div>
    );
};

export default CatalogLeft;