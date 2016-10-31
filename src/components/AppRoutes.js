import React from 'react';
import { Route, browserHistory } from 'react-router';
import routes from '../routes';

class AppRoutes extends React.Component {
    render() {
        return(
            <Route history={browserHistory} routes={routes} onUpdate={()=> window.scrollTo(0,0)}/>
        );
    }
}

export default AppRoutes;