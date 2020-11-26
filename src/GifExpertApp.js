import React, { useState } from 'react';
import { AddCategory } from './components';
import shortid from 'shortid';

const GifExpertApp = () => {

	const [ category, setCategory ] = useState([{ 
		name: 'One Punch',
		id: shortid.generate()
	}]);

	return (
		<>
			<h2>GifExpertApp</h2>
			
			<AddCategory
				category={ category }
				setCategory={ setCategory }
			/>

			<hr />
		</>
	);
};

export default GifExpertApp;