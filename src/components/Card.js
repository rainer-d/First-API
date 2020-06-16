import React from 'react';

const Card = ({ pass, duration, risetime }) => {
	// Months array
	 var months_arr = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

	 // Convert timestamp to milliseconds
	 var date = new Date(risetime*1000);

	 // Year
	 var year = date.getFullYear();

	 // Month
	 var month = months_arr[date.getMonth()];

	 // Day
	 var day = date.getDate();

	 // Hours
	 var hours = date.getHours();

	 // Minutes
	 var minutes = "0" + date.getMinutes();

	 // Seconds
	 var seconds = "0" + date.getSeconds();

	 // Display date in MM-dd-yyyy h:m:s format
	 var convDate = month+'-'+day+'-'+year;
	 // and time in h:m:s format
	 var convTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
 
	return (
		<div className='tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5'>
			<div>
			   <h2>Pass: {pass}</h2>
			   <p>Date: {convDate}</p>
			   <p>Rise Time: {convTime}</p>
			   <p>Duration: {duration} seconds</p>
			</div>
		</div>
	);
}

export default Card;