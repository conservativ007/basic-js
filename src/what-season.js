const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if(!date) return 'Unable to determine the time of year!';
	if(Date.prototype.toString.call(date) == "Invalid Date") return Error('Error');
  
  let arr = [
			'winter', 'winter', 'spring', 
			'spring', 'spring', 'summer', 
			'summer', 'summer', 'autumn', 
			'autumn', 'autumn', 'winter',
		];

		let month = date.getMonth();
	  
	  return arr[month];
};
