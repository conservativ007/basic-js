const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  let counter = 0;
  for(let arr of backyard){
    for(let subArr of arr){
      if(subArr == '^^') counter += 1;
    }
  }
  return counter;
};
