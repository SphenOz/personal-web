import React, {useState} from 'react'
import "./TopBanner.css"
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import { Outlet, Link } from 'react-router-dom';

export default function TopBanner({navlist}) {
    return(
        <>
        <header className='bar'>
            <nav className='nav main-nav'>
                <ul>
                    <li>
                        <Link to={'/' + navlist.p1} style={{textDecoration: 'none'}}>{navlist.p1}</Link>
                    </li>
                    <li>
                        <Link to={'/' + navlist.p2} style={{textDecoration: 'none'}}>{navlist.p2}</Link>
                    </li>
                </ul>
            </nav>
            <h1 className='title'>PlaceHolder: </h1>
        </header>
        </>
    )
}