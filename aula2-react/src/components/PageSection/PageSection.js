import React from 'react';
import './PageSection.css';
import PropTypes from 'prop-types';

export function PageSection(props) {
    return (
        <div className="page-section-container">
            <h2>{props.titulo}</h2>
        </div>
    )
}

PageSection.propTypes = {
    imagem: PropTypes.string.isRequired,
    titulo: PropTypes.string.isRequired,
  }