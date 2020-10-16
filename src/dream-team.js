const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let str = [];

  for(let name of members){
    if(typeof name == 'string'){
      str.push(name.slice(0, 1));
    }
  }

  str.sort();
  let newStr = str.join('').toUpperCase();

  return newStr;
};
