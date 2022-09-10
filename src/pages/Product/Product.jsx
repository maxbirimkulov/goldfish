import React, {useEffect,useState} from 'react';
import {Link,NavLink, useParams,Navigate} from "react-router-dom";
import img from "../Catalog/card.png";
import {FaUsers} from "react-icons/fa"
import {BiTimeFive} from "react-icons/bi"
import {IoIosArrowDown,IoIosArrowUp} from "react-icons/io"
import {getProduct} from "../../redux/product";
import {useDispatch, useSelector} from "react-redux";
import NotFound from "../NotFound/NotFound";
import {getAllCards} from "../../redux/cards";
import Cards from "./Cards";
import Story from "./Story";






const Product = () => {
    const params = useParams()
    const dispatch = useDispatch()
    const {product,status,error} = useSelector(s => s.product)
    const [open, setOpen] = useState(false)
    const [open2, setOpen2] = useState(false)
    const {cards} = useSelector(s => s.cards)

    const [tab, setTab] = useState(false)
    const [tab2, setTab2] = useState(false)
    const [tab3, setTab3] = useState(false)

    const [info, setInfo] = useState('description')

    useEffect(() => {
        dispatch(getAllCards())
    }, [])

    useEffect(()=>{
        dispatch(getProduct(params.id))
        },[])

    if (status === 'loading') {
        return 'Loading...'
    }
    if(error){
        return <Navigate to='*' />
    }
    console.log(product)
    return (
        <div className='oneProduct'>
            <div className="container">
                <div className="oneProduct__content">
                    <p className='oneProduct__crumbs'><Link to='/'>Главная</Link>  >  <Link to='/catalog'>Каталог</Link>  >   {product.title}   </p>

                    <h2 className="oneProduct__title">{product.title}</h2>

                    <div className="oneProduct__row">

                        <div className="oneProduct__left">
                            <div className='oneProduct__left-img-block'>
                                <img className='oneProduct__left-img' src={product.images} alt=""/>
                            </div>

                            <div className="oneProduct__info">
                               <div className='oneProduct__nav'>
                                   <span onClick={()=>setInfo('description')} className={`oneProduct__nav-item ${info === 'description' ? 'active' :''}`}>Описание</span>
                                   <span onClick={()=>setInfo('characteristic')} className={`oneProduct__nav-item ${info === 'characteristic' ? 'active' :''}`}>Характеристики</span>
                                   <span onClick={()=>setInfo('regulations')} className={`oneProduct__nav-item ${info === 'regulations' ? 'active' :''}`}>Правила</span>
                                   <span onClick={()=>setInfo('response')} className={`oneProduct__nav-item ${info === 'response' ? 'active' :''}`}>Вопрос-ответ</span>
                               </div>

                                {
                                    info === 'description' ? <ul className='oneProduct__left-nav-list'>
                                        <li className='oneProduct__left-nav-item'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet consequuntur culpa dignissimos ea error fugit harum id illo inventore magnam, molestias odio officia quia, reiciendis rerum sed ullam vero? Consectetur consequuntur dolore ex, fugit, harum illum incidunt iste iure provident recusandae sapiente soluta vel veritatis. Animi assumenda beatae dolor ducimus eum excepturi facilis hic illo ipsam labore, molestiae praesentium quas, qui repellat repudiandae saepe suscipit tempore tenetur veritatis voluptatem! Animi atque dignissimos fugiat ipsam modi reiciendis repellendus? A accusantium assumenda aut consectetur consequatur, dolorem eveniet ex exercitationem expedita facilis ipsum, iusto minus, molestias numquam quo voluptas voluptates? Officia, pariatur, quaerat.</li>
                                    </ul> : info === 'characteristic' ? <ul className='oneProduct__left-nav-list'>
                                        <li className='oneProduct__left-nav-item oneProduct__left-nav-title'>Время игры</li>
                                        <li className='oneProduct__left-nav-item'>{product.time}</li>

                                        <li className='oneProduct__left-nav-item oneProduct__left-nav-title'>Кол-во игроков</li>
                                        <li className='oneProduct__left-nav-item'>{product.playCount}</li>
                                    </ul> : info === 'regulations' ? <ul className='oneProduct__left-nav-list'>
                                        <li className="oneProduct__left-nav-title">Правила</li>
                                        <li className='oneProduct__left-nav-item'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquid amet architecto beatae cumque cupiditate dicta dignissimos dolor doloremque dolores dolorum eius eligendi esse et explicabo fuga fugit harum inventore ipsa iusto laudantium necessitatibus odio omnis placeat, porro quas qui quibusdam quidem quos ratione repellendus rerum sequi tenetur voluptas voluptate?</li>
                                    </ul> :  <div>

                                        <div onClick={()=> setTab(!tab)} className='oneProduct__left-nav-tab'>
                                            <p className={`oneProduct__left-nav-tab-title ${tab ? '' : 'active'}`}>Как оформить заказ?</p>
                                            {
                                                tab ? <IoIosArrowUp/> : <IoIosArrowDown/>
                                            }
                                        </div>
                                        {
                                            tab && <p className="oneProduct__left-nav-tab-item">
                                                Если в настольной игре собирается принять участие компания, нужно учитывать средний возраст игроков.

                                                Есть игры, которые не требуют активности и вряд ли понравятся молодёжи, а подвижные не придутся по душе пожилым людям.

                                                Многие игры предназначены только для большого количества участников, а другие — строго для двоих. Бывают и индивидуальные варианты, но чаще всего количество участников — от двух до четырёх.Количество игроков, на которое рассчитана игра, написано на её упаковке.
                                                Важно сразу решить, сколько человек примут участие в игре. Некоторые настольные игры могут быть скучны только для двоих. Если чаще будут играть именно двое, не стоит покупать игры, которые рассчитаны на большую компанию.
                                            </p>
                                        }

                                        <div onClick={()=> setTab2(!tab2)} className='oneProduct__left-nav-tab'>
                                            <p className={`oneProduct__left-nav-tab-title ${tab2 ? '' : 'active'}`}>Как вернуть товар?</p>
                                            {
                                                tab2 ? <IoIosArrowUp/> : <IoIosArrowDown/>
                                            }
                                        </div>
                                        {
                                            tab2 && <p className="oneProduct__left-nav-tab-item">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad blanditiis commodi, culpa deleniti distinctio eius, eveniet exercitationem incidunt inventore iure magni mollitia omnis possimus quae sed temporibus veniam veritatis voluptatem!
                                            </p>
                                        }



                                            </div>
                                }


                            </div>

                        </div>

                        <div className="oneProduct__right">
                            <div className="oneProduct__right-block">
                                <p className='oneProduct__right-code'>Код товара:{product._id}</p>

                                <div className='oneProduct__right-row'>
                                    <div className='oneProduct__right-item'>
                                        <FaUsers/>
                                        {product.playCount}
                                    </div>


                                    <div className='oneProduct__right-item'>
                                        <BiTimeFive/>
                                        {product.time}
                                    </div>


                                    <div className='oneProduct__right-item'>
                                        {product.age}+
                                    </div>
                                </div>

                                <div className="oneProduct__right-block__price">
                                    <span className='oneProduct__right-sale'>{product.priceSale} ₽</span>

                                    <p className='oneProduct__right-price'>{product.price} ₽</p>
                                </div>

                                <div className='oneProduct__right-btns'>
                                    <button className='oneProduct__right-btn oneProduct__right-btn-orange'>В корзину</button>
                                    <button className='oneProduct__right-btn '>Купить в 1 клик</button>
                                </div>

                                <div className="oneProduct__delivery">
                                    <div className='oneProduct__delivery-time'>
                                        <p onClick={()=> setOpen(!open)} className="oneProduct__delivery-title">Доставка {open ? <IoIosArrowUp/> : <IoIosArrowDown/>} </p>
                                        {
                                            open &&  <ul className="oneProduct__delivery-list">
                                                <li className="oneProduct__delivery-item">Самовывоз из магазина: сегодня</li>
                                                <li className="oneProduct__delivery-item">Самовывоз из 761 пункта: 1-3 дня</li>
                                                <li className="oneProduct__delivery-item">Курьерская доставка: 1-3 дня</li>
                                                <li className="oneProduct__delivery-item">Доставка почтой: от 3 дней</li>
                                            </ul>
                                        }
                                    </div>

                                    <div className="oneProduct__delivery-pay">
                                        <p onClick={()=> setOpen2(!open2)} className="oneProduct__delivery-title">Оплата {open2 ? <IoIosArrowUp/> : <IoIosArrowDown/>} </p>
                                        {
                                            open2 && <ul className="oneProduct__delivery-list">
                                                <li className="oneProduct__delivery-item">Наличкой</li>
                                                <li className="oneProduct__delivery-item">Картой</li>
                                            </ul>
                                        }
                                    </div>

                                    <input className="oneProduct__delivery-input" placeholder='Задать вопрос' type="text"/>
                                </div>
                            </div>

                            <div className="oneProduct__right-rowCards">
                                <p className="oneProduct__right-rowCards-title">С этим товаром покупают</p>

                                <div className="oneProduct__right-rowCards-block">
                                    {
                                        cards.filter((item,idx)=> idx < 2).map(card => (
                                            <Cards card={card}/>
                                        ) )
                                    }
                                </div>

                            </div>
                        </div>
                    </div>

                    <p className="oneProduct__title">Вы недавно смотрели</p>
                    <div className='oneProduct__story-row'>
                        {
                            cards.filter((item,idx)=> idx < 4).map(card => (
                                <Story card={card}/>
                            ) )
                        }
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Product;