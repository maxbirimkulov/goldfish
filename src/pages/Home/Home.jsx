import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {addOneForTest, addOneArtem, deleteOneArtem, changeName, getAllPosts} from "../../redux/product";
import Catalog from "./Catalog";
import Events from "./Events";
import MoreInfo from "./MoreInfo";
import GoldFish from "./GoldFish";
import Contact from "./Contact";

const Home = () => {



    return (
        <main>
            <Catalog/>
            <Events/>
            <MoreInfo/>
            <GoldFish/>
            <Contact/>
        </main>
    );
};

export default Home;