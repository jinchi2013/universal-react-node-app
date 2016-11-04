import React from 'react';
import { Link } from 'react-router';

class NotFoundPage extends React.Component {
    render() {
        return(
            <div className="not-found">
                <h1>404</h1>
                <h2>Page not found !!!</h2>
                <p>
                    <Link to="/">Go Back to the main page!</Link>
                </p>
            </div>
        );
    }
}

export default NotFoundPage;
