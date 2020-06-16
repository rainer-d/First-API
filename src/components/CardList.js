import React from 'react';
import Card from './Card';

const CardList = ({ passData }) => {
	return (
		<div>
		{
			passData.map((pass, i) => {
				return (
					<Card						 
						key={i}
						pass={i+1}
						duration={passData[i].duration} 
						risetime={passData[i].risetime}
						/>
					);
			})
		}
		</div>
	);
}

export default CardList;