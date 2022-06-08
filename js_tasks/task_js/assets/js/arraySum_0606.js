// let arr = [];


function getMaxSubSum(arr){
    let sum = 0;

    arr.forEach(element => {
        if(element > 0){
            sum += element 
        }
    });

    return sum;
}


let arr2 = [15, -2, 34, 45, 19, 6];


console.log(getMaxSubSum(arr2));
// console.assert(getMaxSubSum(arr2) == 115);
// console.log(getMaxSubSum(22, -1, 13));