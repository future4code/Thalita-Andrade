import React from 'react';
import './BigCard.css';
import PropTypes from 'prop-types';

export function BigCard(props) {
    return (
        
        <section className="container-big-card">   

            <h3>{props.titulo}</h3>

            <div className="paragrafo-container">
                <img src={props.image} alt=""/>
                <p>{props.texto}</p>
            </div>

        </section>

    )
}

BigCard.propTypes = {
    texto: PropTypes.string.isRequired,
    titulo: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  }