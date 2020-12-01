import React from 'react';

import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

import { AddCategory } from '../../components';

describe( 'Pruebas en <AddCategory />', () => {
   
    const categories    = [ { nameCategory: 'One Punch' } ],
          setCategory   = jest.fn();

    let wrapper = shallow( 
        <AddCategory 
            categories={ categories }
            setCategory={ setCategory }
        />
    );

    beforeEach( () => {
        jest.clearAllMocks();

        wrapper = shallow( 
            <AddCategory 
                categories={ categories }
                setCategory={ setCategory }
            />
        );
    });

    test( 'Debe de mostrar el componente correctamente', () => {
       
        expect( wrapper ).toMatchSnapshot();

    });

    test( 'Debe de cambiar la caja de texto', () => {

        const input = wrapper.find( 'input' );

        const value = 'Hola Mundo';

        input.simulate( 'change', {
            target: { value }
        });

        expect( wrapper.find( 'p' ).text() ).toBe( value );
 
    });

    test( 'No debe de postear la información con Submit', () => {
        
        wrapper.find( 'form' ).simulate( 'submit', { preventDefault(){} } );

        expect( setCategory ).not.toHaveBeenCalled();
    });
    
    test( 'Debe llamar el setCategories y limpiar la caja de texto', () => {

        const value = 'Hola Mundo';

        // Simular el Change
        const input = wrapper.find( 'input' );
        
        input.simulate( 'change', { 
            target: { value } 
        });

        // Simular Submit
        wrapper.find( 'form' ).simulate( 'submit', { preventDefault(){} } );
        
        expect( setCategory ).toHaveBeenCalled();
        expect( setCategory ).toHaveBeenCalledTimes( 1 );
        expect( setCategory ).toHaveBeenCalledWith( expect.any( Function ) );

        expect( input.prop( 'value' ) ).toBe('');
    });

});
