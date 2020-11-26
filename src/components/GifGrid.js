import React from 'react';
import PropTypes from 'prop-types';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem, Spinner } from './';

const GifGrid = ({ nameCategory }) => {

    const { data:images, loading } = useFetchGifs( nameCategory );

    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{ nameCategory }</h3>

            { loading && <Spinner /> }

            <div className="card-grid">
                {
                    images.map( img => (
                        <GifGridItem
                            key={ img.id }
                            nameCategory={ nameCategory }
                            { ...img }
                        />
                    ))
                }
            </div>
        </>
    );
};

GifGrid.propTypes = {
    nameCategory: PropTypes.string.isRequired
};

export default GifGrid;