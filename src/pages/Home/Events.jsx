import React from 'react';

const Events = () => {
    return (
        <section id="evens" className="evens">
            <div className="container">
                <div className="title">Ближайшие мероприятия</div>
                <div className="evens__row">
                    <div className="evens__card evens__card-halloween">
                        <div className="evens__card-block">
                            <div className="evens__card-titles">
                                <h2 className="evens__card-title">Halloween c GoldFish</h2>
                                <p className="evens__card-time">31 октября 2021 г. 19:00</p>
                            </div>
                            <p className="evens__card-info">Мы соберемся,чтобы узнать,кто же все-таки был Мафией и
                                что <br/>
                                    будет с тем,кого убили..</p>
                        </div>
                    </div>
                    <div className="evens__card evens__card-war">
                        <div className="evens__card-block">
                            <div className="evens__card-titles">
                                <h2 className="evens__card-title">Турнир Warhammer</h2>
                                <p className="evens__card-time">9 ноября 2021 г. 18:30</p>
                            </div>
                            <p className="evens__card-info">Готов сразиться в ожесточенной битве Warhammer? Нет? Мы тебя
                                обязтально научим!</p>
                        </div>
                    </div>
                    <div className="evens__card evens__card-halloween evens__card-hide ">
                        <div className="evens__card-block">
                            <div className="evens__card-titles">
                                <h2 className="evens__card-title">Halloween c GoldFish</h2>
                                <p className="evens__card-time">31 октября 2021 г. 19:00</p>
                            </div>
                            <p className="evens__card-info">Мы соберемся,чтобы узнать,кто же все-таки был Мафией и
                                что <br/>
                                    будет с тем,кого убили..</p>
                        </div>
                    </div>
                    <div className="evens__card evens__card-halloween evens__card-hide ">
                        <div className="evens__card-block">
                            <div className="evens__card-titles">
                                <h2 className="evens__card-title">Halloween c GoldFish</h2>
                                <p className="evens__card-time">31 октября 2021 г. 19:00</p>
                            </div>
                            <p className="evens__card-info">Мы соберемся,чтобы узнать,кто же все-таки был Мафией и
                                что <br/>
                                    будет с тем,кого убили..</p>
                        </div>
                    </div>
                    <div className="evens__card evens__card-halloween evens__card-hide ">
                        <div className="evens__card-block">
                            <div className="evens__card-titles">
                                <h2 className="evens__card-title">Halloween c GoldFish</h2>
                                <p className="evens__card-time">31 октября 2021 г. 19:00</p>
                            </div>
                            <p className="evens__card-info">Мы соберемся,чтобы узнать,кто же все-таки был Мафией и
                                что <br/>
                                    будет с тем,кого убили..</p>
                        </div>
                    </div>
                    <div className="evens__card evens__card-halloween evens__card-hide ">
                        <div className="evens__card-block">
                            <div className="evens__card-titles">
                                <h2 className="evens__card-title">Halloween c GoldFish</h2>
                                <p className="evens__card-time">31 октября 2021 г. 19:00</p>
                            </div>
                            <p className="evens__card-info">Мы соберемся,чтобы узнать,кто же все-таки был Мафией и
                                что <br/>
                                    будет с тем,кого убили..</p>
                        </div>
                    </div>
                    <button className="evens__btn">Показать еще</button>
                </div>
            </div>
        </section>
    );
};

export default Events;