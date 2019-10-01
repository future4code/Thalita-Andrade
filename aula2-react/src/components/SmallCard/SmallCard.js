import React from 'react';
import './SmallCard.css';
import PropTypes from 'prop-types'

export function SmallCard(props) {
    return (
        <section className="container-smals-card">
            <div className="container-interno-small-card">
                <h4>{props.titulo}</h4>
                <p>{props.texto}</p>
            </div>
        </section>
    )
}

SmallCard.propTypes = {
    texto: PropTypes.string.isRequired,
    titulo: PropTypes.string.isRequired
  }