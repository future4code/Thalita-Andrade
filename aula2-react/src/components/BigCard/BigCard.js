import React from 'react';
import './BigCard.css';
import PropTypes from 'prop-types'

export function BigCard(props) {
    return (
        
    <section className="container-big-card">
           <div className="title-container">
                <h3>{props.titulo}</h3>
                <p>{props.texto}</p>
            </div>
    </section>
    )
}

BigCard.propTypes = {
    texto: PropTypes.string.isRequired,
    titulo: PropTypes.string.isRequired
  }