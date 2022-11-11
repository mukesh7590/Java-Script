// ********************************************* for each loop example
// index = 0;
// array = [1, 2, 3, 4, 5, 6];
// var newArray = [];
// array.forEach(myFunction);
// function myFunction(item, index) {
//    let mul = 6;  
//    newArray.push(item * mul);
// }
// console.log(newArray);


// ********************************************* MAP function in use in JS *********************************************
index = 0;
array = [ 10, 45, 33, 42, 56, 566 ];
 
square = x => Math.pow(x, 2);
squares = array.map((item, index)=>{
    console.log(index)
    return item*index
});
console.log(array);
console.log(squares);


// ********************************************* REDUCE function in use in JS *********************************************


