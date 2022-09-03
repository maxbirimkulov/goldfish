import React from 'react';

const MoreInfo = () => {
    return (
        <section className="info">
            <div className="container">
                <div className="info__content">
                    <h2 className="title info__title">Больше интересной информации</h2>

                    <div className="info__row">

                        <div className="info__card info__card-dragon">
                            <div className="info__card-block">
                                <h2 className="info__card-title">Аэронавтика Империалис: <br/>
                                    введение в игру</h2>
                                <p className="info__card-subtitle">Детально ознакомимся с правилами игры </p>
                            </div>
                        </div>

                        <div className="info__card info__card-steam">
                            <div className="info__card-block">
                                <h2 className="info__card-title">Лучшие настолки в Steam для <br/>
                                    игры с друзьми на карантине</h2>
                                <p className="info__card-subtitle">По рейтингу 2021</p>
                            </div>
                        </div>

                        <div className="info__card info__card-reales">
                            <div className="info__card-block">
                                <h2 className="info__card-title">Желанные, но маловероятные <br/>
                                    релизы</h2>
                                <p className="info__card-subtitle">Небольшой список «а вот бы...»</p>
                            </div>
                        </div>
                    </div>

                    <button className="info__btn">Узнать больше</button>
                </div>
            </div>
        </section>
    );
};

export default MoreInfo;