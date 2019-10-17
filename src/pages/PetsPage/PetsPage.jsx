import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './PetsPage.module.css';
import petsAssets from '../../assets/pets.json';
import Pets from '../../components/Pets/Pets';

export default class PetsPage extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
  };

  state = {
    pets: [],
  };

  componentDidMount() {
    this.setState({ pets: petsAssets });
  }

  render() {
    const { pets } = this.state;
    const { match } = this.props;
    return (
      <div className={styles.pets}>
        <h2 className={styles.title}>Available pets</h2>
        <div className={styles.body}>
          {pets.map(pet => (
            <Pets
              key={pet.id}
              name={pet.name}
              image={pet.image}
              id={pet.id}
              match={match}
            />
          ))}
        </div>
      </div>
    );
  }
}
