import React from 'react';

const SearchForm = ({latLocal, longLocal, altLocal, numPass, buttonClick}) => {
	return (
		<div className='pa2 ba br2 b--orange bg-moon-gray'>
			<p>Please enter your position and the number of passes you want to see. (* Required)</p>
			<input  
				className='pa1 tc ba b--black'		
				type='search' 
				placeholder='*Latitude (degrees)'
				onChange={latLocal}
			/>
			<input  
				className='pa1 tc ba b--black'		
				type='search' 
				placeholder='*Longitude (degrees)'
				onChange={longLocal}
			/>
			<input  
				className='pa1 tc ba b--black'		
				type='number' 
				placeholder='Altitude (metres)'
				onChange={altLocal}
			/>
			<input  
				className='pa1 tc ba b--black'		
				type='number' 
				placeholder='Number of passes'
				onChange={numPass}
			/>
			<br></br>
			<div id='inputError' className='red'></div>
			<br></br>
			<button  
				className='pa1 tc b--blue'		 
				onClick={buttonClick}>
				SEARCH
			</button>
		</div>
	);
}

export default SearchForm;