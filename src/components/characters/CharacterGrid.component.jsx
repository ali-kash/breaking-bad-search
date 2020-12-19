import React from 'react';
import CharacterItem from './CharacterItem.component';
import Spinner from '../header/Spinner.component';

const CharacterGrid = ({ items, isLoading }) => {
	return isLoading ? (
		<Spinner />
	) : (
		<section className='cards'>
			{items.map((item, index) => (
				<CharacterItem key={index} item={item}></CharacterItem>
			))}
		</section>
	);
};

export default CharacterGrid;
