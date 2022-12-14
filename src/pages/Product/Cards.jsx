import React from 'react';
import {Link} from "react-router-dom";
import img from "../Catalog/card.png";

const Cards = ({card}) => {
    return (
        <div className='games__cards'>
            <Link to={`/product/${card._id}`}>
                <img className='games__card-img' src={card.images} alt=""/>
            </Link>

            <div className='games__card-info'>
                <p><span>+</span>{card.playCount}</p>
                <p><span><svg width="12" height="13" viewBox="0 0 12 13" fill="none"
                              xmlns="http://www.w3.org/2000/svg">
<path
    d="M7.75 0.583008H4.25V1.74967H7.75V0.583008ZM5.41667 8.16634H6.58333V4.66634H5.41667V8.16634ZM10.1008 4.31051L10.9292 3.48217C10.6783 3.18467 10.4042 2.90467 10.1067 2.65967L9.27833 3.48801C8.34928 2.74036 7.19253 2.33283 6 2.33301C3.10083 2.33301 0.75 4.68384 0.75 7.58301C0.75 10.4822 3.095 12.833 6 12.833C6.98835 12.8335 7.95674 12.5549 8.79366 12.0292C9.63057 11.5034 10.302 10.752 10.7305 9.86135C11.159 8.97075 11.3273 7.9772 11.2159 6.99515C11.1045 6.01311 10.718 5.0825 10.1008 4.31051ZM6 11.6663C3.7425 11.6663 1.91667 9.84051 1.91667 7.58301C1.91667 5.32551 3.7425 3.49967 6 3.49967C8.2575 3.49967 10.0833 5.32551 10.0833 7.58301C10.0833 9.84051 8.2575 11.6663 6 11.6663Z"
    fill="#2A2A2A"/>
</svg>
</span> {card.time}
                </p>
                <p>{card.age}</p>
            </div>
            <p className='games__card-descr'>{card.title}</p>
            <p className='games__card-price'>{card.price} ₽</p>
            <div className='games__card-btns'>
                <button className='games__card-btns1'>В корзину</button>
                <button className='games__card-btns2'>Купить в 1 клик</button>
            </div>
        </div>
    );
};

export default Cards;