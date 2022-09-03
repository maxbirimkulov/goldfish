import React from 'react';
import Header from "../Header/Header";
import {Outlet} from 'react-router-dom'
import Popup from "../../components/Popup/Popup";
import Footer from "../Footer/Footer";

const Layout = () => {
    return (
        <>
            <Header/>
            <Outlet/>
            <Popup/>
            <Footer/>
        </>
    );
};

export default Layout;