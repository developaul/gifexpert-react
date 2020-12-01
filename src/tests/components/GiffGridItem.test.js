import React from 'react';

import { shallow } from 'enzyme';

import { GifGridItem } from '../../components';

describe( 'Pruebas en GifGridItem', () => {
    
    const nameCategory  = 'Name Category Gif',
          title         = 'Un titulo',
          url           = 'htpps://localhost/algo.jpg';
        
    const wrapper = shallow( 
        <GifGridItem  
            nameCategory={ nameCategory } 
            title={ title }
            url={ url }
        />
    );

    test( 'Debe de mostrar correctamente el componente', () => {

        expect( wrapper ).toMatchSnapshot();

    });

    test( 'Debe de tener un párrafo con el title', () => {

        const p = wrapper.find( 'p' );
        
        expect( p.text() ).toBe( title );

    });

    test( 'Debe de tener la imagen igual al url y alt de los props', () => {

        const img = wrapper.find( 'img' );

        const { src, alt } =  img.props();

        expect( src ).toBe( url );
        expect( alt ).toBe( alt );

    });

    test( 'Debe de tener animate__fadeIn', () => {
        
        const div = wrapper.find( 'div' );

        expect( div.hasClass( 'animate__fadeIn' ) ).toBe( true );

    });
    
});