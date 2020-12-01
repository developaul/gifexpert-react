import React from 'react';

import { shallow } from 'enzyme';
import '@testing-library/jest-dom';

import GifGrid from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';

jest.mock( '../../hooks/useFetchGifs' );

describe( 'Pruebas en el componente <GifGrid />', () => {

    test( 'Debe de renderizar correctamente el componente', () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true 
        });
            
        const wrapper = shallow( <GifGrid nameCategory='One Punch' /> );    
        expect( wrapper ).toMatchSnapshot();

    });
    
    test( 'Debe de mostrar items cuando se cargan imágenes useFetchGifs', () => {

        const gifs = [{
            id: 'ABC',
            url: 'https://localhost/testing.jpg',
            title: 'testing.jpg'
        },
        {
            id: 'ABCDE',
            url: 'https://localhost/testing.jpg',
            title: 'testing.jpg'
        },];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });
            
        const wrapper = shallow( <GifGrid nameCategory='One Punch' /> );    

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find( 'Spinner' ).exists() ).toBe( false );
        expect( wrapper.find( 'GifGridItem' ).length ).toBe( gifs.length );
    });

});