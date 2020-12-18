import React from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

export default function NavBar() {
    return(
        <div>
            <ul>
                <Router>
                <Link to='/'>Home</Link>
                </Router>
            </ul>
        </div>
    )
}