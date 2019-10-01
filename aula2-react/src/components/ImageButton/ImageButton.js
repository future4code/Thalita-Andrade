import React from 'react';
import './ImageButton.css';
import PropTypes from 'prop-types'

export function ImageButton(props) {
    return (
        <section className="container-image-button">
            <img src={props.img} alt=""/>
            <h1>{props.titulo}</h1>
        </section>
    )
}

ImageButton.propTypes = {
    img: PropTypes.string.isRequired,
    titulo: PropTypes.string.isRequired
  }


