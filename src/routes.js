'use strict';

import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Layout from './components/Layout';
import IndexPage from './components/IndexPage';
// <IndexRoute/> allows you to provide a default "child" to a parent route when visitor is at the URL of the parent.
import AthletePage from './components/AthletePage';
import NotFoundPage from './components/NotFoundPage';

const routes = (
    <Route path="/" component={Layout}>
        <IndexRoute component={IndexPage}/>
        <Route path="athlete/:id" component={AthletePage}/>
        <Route path="*" component={NotFoundPage}/>
    </Route>
);

export default routes;
