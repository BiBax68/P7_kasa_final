import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home, Apropos, Logement, Error } from '@/pages/Public/Index'

import Layout from '@/layout/Layout'

const PublicRouter = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                {/* <Route index element={<Home />} /> */}
                <Route path="/" element={<Home />} />
                <Route path="/Apropos" element={<Apropos />} />
                <Route path="/logement/:id" element={<Logement />} />
                <Route path="*" element={<Error />} />
            </Route>
        </Routes >
    );
};

export default PublicRouter;