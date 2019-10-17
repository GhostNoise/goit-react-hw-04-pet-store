import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './Pets.module.css';

const Pets = ({ match, id, image, name }) => (
  <NavLink to={`${match.url}/${id}`}>
    <div className={styles.card}>
      <img src={image} alt="pets" className={styles.image} />
      <h2 className={styles.title}>{name}</h2>
    </div>
  </NavLink>
);

Pets.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }).isRequired,
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Pets;
