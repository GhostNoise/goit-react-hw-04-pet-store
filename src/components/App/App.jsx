import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import HeaderNav from '../HeaderNav/HeaderNav';

import HomePage from '../../pages/HomePage/HomePage';
import AboutPage from '../../pages/AboutPage/AboutPage';
import PetsPage from '../../pages/PetsPage/PetsPage';
import PetPage from '../../pages/PetPage/PetPage';

import styles from './App.module.css';

const App = () => {
  return (
    <div className={styles.app}>
      <HeaderNav />
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/about" component={AboutPage} />
        <Route path="/pets/:id" component={PetPage} />
        <Route path="/pets" component={PetsPage} />
        <Redirect to="/" component={HomePage} />
      </Switch>
    </div>
  );
};

export default App;
