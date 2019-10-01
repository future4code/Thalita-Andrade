import React from 'react';
import './PageSection.css';
import PropTypes from 'prop-types'

export function PageSection(props) {
    return (
        <div className="page-section-container">
            <div className="title-container">
                <h1>{props.titulo}</h1>
            </div>
        </div>
    )
}

PageSection.propTypes = {
    imagem: PropTypes.string.isRequired,
    titulo: PropTypes.string.isRequired
  }