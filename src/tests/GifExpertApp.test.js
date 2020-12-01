import React from 'react';

import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import shortid from 'shortid';

import GifExpertApp from '../GifExpertApp';

describe( 'Pruebas en <GifExpertApp />', () => {
    
    test( 'Debe de renderizar correctamente el componente', () => {

        const wrapper = shallow( <GifExpertApp /> );

        expect( wrapper ).toMatchSnapshot();

    });

    test( 'Debe de mostrar una lista de categorias', () => {

        const categories = [{
    	  	nameCategory: 'One Punch',
    	  	id: shortid.generate()
        }]

        const wrapper = shallow( <GifExpertApp  /> );

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find( 'GifGrid' ).length ).toBe( categories.length );
    });

});