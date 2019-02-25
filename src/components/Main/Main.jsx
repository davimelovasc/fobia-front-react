import './Main.css'
import React from 'react'
import Header from '../Layout/Header'
import Login from '../Login/Login';

export default props =>
    <React.Fragment>
        <Header />
        <main className="content container-fluid">
            <div className="p-3 mt-3">
               <Login /> {/* component routes */}
            </div>
        </main>
    </React.Fragment>