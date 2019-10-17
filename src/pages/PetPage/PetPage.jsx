import React, { Component } from 'react';
import PropTypes from 'prop-types';
import petsAssets from '../../assets/pets.json';
import Pet from '../../components/Pet/Pet';

export default class PetPage extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  };

  state = {
    pet: {},
  };

  componentDidMount() {
    const { match } = this.props;
    this.setState({ pet: petsAssets.find(pet => pet.id === match.params.id) });
  }

  handleBack = () => {
    const { history } = this.props;
    history.push('/pets');
  };

  render() {
    const { pet } = this.state;
    return (
      <Pet
        name={pet.name}
        age={pet.age}
        breed={pet.breed}
        gender={pet.gender}
        color={pet.color}
        image={pet.image}
        description={pet.description}
        handleBack={this.handleBack}
      />
    );
  }
}
