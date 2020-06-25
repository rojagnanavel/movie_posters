import React from 'react';
import {NavLink} from 'react-router-dom';
import classes from './Topnav.module.scss';

//component to show top nav
const TopNav =()=>{
    return(
    <nav className={classes.navHeader}>
    <NavLink
      activeClassName={classes.navbarLinkActive}
      className={classes.navLink}
      to="/"
    >
      Movies
    </NavLink>
  </nav>
    );
}
export default TopNav;