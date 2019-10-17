import React from 'react';
import PropTypes from 'prop-types';
import styles from './Pet.module.css';

const Pet = ({
  name,
  age,
  breed,
  gender,
  color,
  image,
  description,
  handleBack,
}) => (
  <div className={styles.pet}>
    <button type="button" onClick={handleBack} className={styles.button}>
      &#9668; Return
    </button>
    <h1 className={styles.title}>{`All about ${name}`}</h1>
    <div className={styles.info}>
      <img src={image} alt="Pet foto" className={styles.image} />
      <p className={styles.details}>
        <font>Age: </font>
        {age}
      </p>
      <p className={styles.details}>
        <font>Gender: </font> {gender}
      </p>
      <p className={styles.details}>
        <font>Color: </font>
        {color}
      </p>
      <p className={styles.details}>
        <font>Breed: </font> {breed}
      </p>
    </div>
    <p className={styles.descr}>{description}</p>
  </div>
);

Pet.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  breed: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  handleBack: PropTypes.func.isRequired,
};

export default Pet;
