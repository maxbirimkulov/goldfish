import React from 'react';
import center from '../../images/center_info.png'

const GoldFish = () => {
    return (
        <section id="goldfish" className="goldfish">
            <div className="container">
                <div className="goldfish__content">
                    <div className="goldfish__info">
                        <div className="godlfish__info-flex">
                            <div className="goldfish__info-center">
                                <h2 className="goldfish__info-title">Об игровом центре «GoldFish»</h2>
                                «GoldFish»- магазин, в котором Вы можете купить отличный подарок
                                как для себя, так и для своих близких.
                                <p><br/></p>
                                В ассортименте нашего магазина представлены тысячи настольных игр
                                на любой вкус: простые и посложнее, семейные и только
                                для взрослых, для двоих и для больших компаний, детективные и
                                логические, ролевые и стратегические настолки. «GoldFish» также
                                регулярно проводит собственные игротеки:турниры по Magic: the
                                Gathering (от компании Wizards of the coast) и Warhammer (от Games
                                Workshop).
                                <p><br/></p>
                                В нашем магазине можно найти нужные аксессуары для любимых игр
                                (протекторы для карт и коллекций), инструменты для
                                самостоятельного оформления и покраски фигурок (кейсы, подставки,
                                краски Vallejo и др.) и многое другое.
                                <p><br/></p>
                                «GoldFish» - это не только магазин настольных игр, но и полноценный
                                хобби-центр. Здесь можно арендовать столы для игр с друзьями,
                                проходить обучение и мастер-классы по интересующим тебя играм,
                                заводить новые знакомства и приобщаться к игровому комьюнити!
                            </div>
                            <div className="goldfish__img">
                                <img className="goldfish__image" src={center} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GoldFish;