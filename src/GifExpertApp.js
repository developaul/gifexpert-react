import React, { useState } from 'react';

import shortid from 'shortid';

import { AddCategory, GifGrid } from './components';

const GifExpertApp = () => {

	const [ categories, setCategory ] = useState([{ 
		nameCategory: 'One Punch',
		id: shortid.generate()
	}]);

	return (
		<>
			<h2>GifExpertApp</h2>
			
			<AddCategory
				categories={ categories }
				setCategory={ setCategory }
			/>

			<hr />

			<ol>
				{
					categories.map( category => (
						<GifGrid
							key={ category.id }
							{ ...category }		
						/>
					))
				}
			</ol>
		</>
	);
};

export default GifExpertApp;