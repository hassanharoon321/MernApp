import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import MainHeader from './MainHeader';
import "./MainNavigation.css";
import NavLinks from './NavLinks';
import Backdrop from "../UiElements/Backdrop";
import SideDrawer from './SideDrawer';

function MainNavigation(props) {
    const [drawerIsOpen, setDrawerIsOpen] = useState(false)

    const openDrawer = () => {
        setDrawerIsOpen(true)
    }

    const closeDrawer = () => {
        setDrawerIsOpen(false)
    }

    return (
        <>
            {drawerIsOpen ? <Backdrop onClick={closeDrawer} /> : null}
            <SideDrawer show={drawerIsOpen} onClick={closeDrawer}>
                <nav className="main-navigation__drawer-btn">
                    <NavLinks />
                </nav>
            </SideDrawer>

            <MainHeader>
                <button className="main-navigation__menu-btn" onClick={openDrawer}>
                    <span />
                    <span />
                    <span />
                </button>
                <Link to="/">
                    <h1 className="main-navigation__title">
                        Your Places
                    </h1>
                </Link>
                <nav className="main-navigation__header-nav">
                    <NavLinks />
                </nav>
            </MainHeader>
        </>
    )
}

export default MainNavigation
