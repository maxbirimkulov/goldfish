import React from 'react';
import wargame from '../../images/catalog/wargame.png'
import kraski from '../../images/catalog/kracki.png'
import magic from '../../images/catalog/magic.png'
import allCatalog from '../../images/catalog/all_catalog.png'

const Catalog = () => {
    return (
        <section id="catalog" className="catalog">
            <div className="container">
                <div className="catalog__content">
                    <h2 className="title__white">Каталог</h2>
                    <div className="catalog__row">
                        <div className="catalog__game">
                            <div>
                                <iframe className="catalog__video"
                                        src="https://www.youtube.com/embed/QlpujI-nKrE?&autoplay=1&loop=1&rel=0"
                                        title="YouTube video player" frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen></iframe>
                            </div>
                            <p className="catalog__game-title">Настольные игры</p>
                        </div>
                        <div className="catalog__allgame-row">
                            <div className="catalog__card">
                                <img src={wargame} alt=""/>
                                    <p className="catalog__card-title">Варгеймы</p>
                            </div>

                            <div className="catalog__card">
                                <img src={kraski} alt=""/>
                                    <p className="catalog__card-title">Краски</p>
                            </div>

                            <div className="catalog__card">
                                <img src={magic} alt=""/>
                                    <p className="catalog__card-title">Magic:the Cathering</p>
                            </div>

                            <div className="catalog__card">
                                <img src={allCatalog} alt=""/>
                                    <p className="catalog__card-title">Весь каталог</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Catalog;