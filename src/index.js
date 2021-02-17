
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let str = [];
  matrix === undefined ? str :

  matrix.forEach(function(e,index){
    if(index % 2 != 0){
      str.push(e.reverse());
    } else {
      str.push(e);
    }
    
  })
  return str.flat()
}
