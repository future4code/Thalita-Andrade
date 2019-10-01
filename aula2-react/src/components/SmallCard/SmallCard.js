import React from 'react';
import './SmallCard.css';
import PropTypes from 'prop-types';

export function SmallCard(props) {
    return (
        <section className="container-smals-card">
            <img src={props.image} alt=""/>
            <h4>{props.titulo}</h4>
            <p>{props.texto}</p>
        </section>
    )
}

SmallCard.propTypes = {
    texto: PropTypes.string.isRequired,
    titulo: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }