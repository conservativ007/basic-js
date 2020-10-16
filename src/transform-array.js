const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {


		if(!arr) throw Error('Error');
		if(arr.length == 0) return [];

		let newArr3 = [];

	for(i = 0; i < arr.length; i++){
		if(arr[i] == "--discard-next"){
			i += 2;
		}else if(arr[i] == "--discard-prev"){
			newArr3.pop();
		}else if(arr[i] == "--double-prev" && i == 0){
			continue;
		}
		else if(arr[i] == "--double-prev"){
			newArr3.push(arr[i-1]);
		}
		else if(arr[i] == "--double-next" && i == arr.length - 1){
			continue;
		}
		else if(arr[i] == "--double-next"){
			newArr3.push(arr[i+1]);
		}else{
			newArr3.push(arr[i]);
		}	
		// console.log(arr[i]);	
	}

	return newArr3;
		
	}



