import React from 'react';
import PropTypes from 'prop-types';

const GifGridItem = ({ title, url, nameCategory }) => {

    title = ( title.trim() === '' ) ? `${ nameCategory } GIF` : title;

    return (
        <div className="card">
            <img src={ url } alt={ title } />
            <p>{ title }</p>
        </div>
    );
};

GifGridItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    nameCategory: PropTypes.string.isRequired
};

export default GifGridItem;