function fibonacciArray(n) {
    var fibArr = [0,1];
    for(var i=0;i<n-2;i++){
    fibArr.push(fibArr[i]+ fibArr[i+1])
    } 
    return fibArr;
}
var result = fibonacciArray(10);
console.log(result); 

// MY CODE ABOVE

function fibonacciArray(n) {
    var fibArr = [0,1];
    for(i=2;i<n;i++){
    fibArr.push(fibArr[i-2]+ fibArr[i-1])
    } 
    return fibArr;
}
var result = fibonacciArray(10);
console.log(result); 

// THE INTERWEBS RESPONSE ABOVE
//I AM CONFUSION