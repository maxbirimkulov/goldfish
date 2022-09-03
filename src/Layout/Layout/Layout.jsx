import React from 'react';
import Header from "../Header/Header";
import {Outlet} from 'react-router-dom'
import Popup from "../../components/Popup/Popup";

const Layout = () => {
    return (
        <>
            <Header/>
            <Outlet/>
            <Popup/>
        </>
    );
};

export default Layout;