import React, { useState } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

const AddCategory = ({ category, setCategory }) => {
    
    const [ inputValue, setInputValue ] = useState( '' );

    const handleInputChange = e => setInputValue( e.target.value );
    
    const handleSubmit = e => {
        e.preventDefault();
    
        const [{ name }] = category;

        if( inputValue.trim().length > 2 && inputValue.trim() !== name ) {

            setCategory( cats => [{
                name: inputValue.trim(),
                id: shortid.generate()
            }, ...cats ] );

            setInputValue( '' );
        }
    };

    return (
        <form
            onSubmit={ handleSubmit }
        >
            <input
                type="text"
                value={ inputValue }
                onChange={ handleInputChange }
            />
        </form>
    );
};

AddCategory.propTypes = {
    category: PropTypes.array.isRequired,
    setCategory: PropTypes.func.isRequired
};

export default AddCategory;