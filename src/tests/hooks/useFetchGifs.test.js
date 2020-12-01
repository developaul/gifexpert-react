import '@testing-library/jest-dom';

import { renderHook } from '@testing-library/react-hooks';

import { useFetchGifs } from '../../hooks/useFetchGifs';

describe( 'Pruebas en el hook useFetchGifs', () => {
   
    test( 'Debe de retornar el estado inicial', async () => {

        const nameCategory = 'One Punch';

        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( nameCategory ) );
        const { data, loading } = result.current;

        await waitForNextUpdate();

        
        expect( data ).toEqual( [] );
        expect( loading ).toBeTruthy();

    });
    
    test( 'Debe de retornar un arreglo de imagenes y el loading en false', async () => {

        const nameCategory = 'One Punch';

        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( nameCategory ) );

        await waitForNextUpdate();

        const { data, loading } = result.current;
        
        expect( data.length ).toBe( 10 );
        expect( loading ).toBeFalsy();

    });

});