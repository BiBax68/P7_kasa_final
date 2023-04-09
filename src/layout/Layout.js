import React from 'react';
import '@/layout/Layout.css'
import { Outlet } from 'react-router-dom';

import Header from '@/layout/Header/Header';
import Footer from '@/layout/Footer/Footer';


const Layout = () => {
    return (
        <div className='Layout'>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;