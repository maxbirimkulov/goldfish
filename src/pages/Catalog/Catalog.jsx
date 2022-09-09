import React, {useEffect, useState} from 'react';
import CatalogLeft from "../../components/CatalogLeft";
import Card from "./Card";
import {getAllCards} from "../../redux/cards";
import {useDispatch, useSelector} from "react-redux";


const Catalog = () => {
    const dispatch = useDispatch()
    const [product, setProduct] = useState([])
    const {cards} = useSelector(s => s.cards)
    console.log(cards)
    useEffect(() => {
        dispatch(getAllCards())
    }, [])
    return (
        <div className='games'>
            <div className='games__banner'>
                <h2 className='games__banner-title'>Октябрьский турнир Warhammer 40000</h2>
                <p className='games__banner-descr'>У тебя есть команда и вы готовы принять
                    участие в турнире Warhammer 40000? </p>
            </div>
            <div className="container">
                <h2 className='games__title'>Дуэльные настольные игры</h2>
                <div className='games__content'>
                    <CatalogLeft/>
                    <div className='games__right'>
                        {
                            cards.map(card => (
                                <Card card={card}/>
                            ) )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Catalog;