import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './HeaderNav.module.css';

const HeaderNav = () => (
  <ul className={styles.nav}>
    <li className={styles.nav__item}>
      <NavLink
        to="/"
        activeClassName={styles.active}
        className={styles.link}
        exact
      >
        Home
      </NavLink>
    </li>
    <li className={styles.nav__item}>
      <NavLink
        to="/pets"
        activeClassName={styles.active}
        className={styles.link}
      >
        Pets
      </NavLink>
    </li>
    <li className={styles.nav__item}>
      <NavLink
        to="/about"
        activeClassName={styles.active}
        className={styles.link}
      >
        About
      </NavLink>
    </li>
  </ul>
);

export default HeaderNav;
