function min (a, b){
    if (a>b){
        console.log(b);
    }else{
        console.log(a);
    }
};

const test =(...param) => Math.min(...param);

console.log(test(5,5,3,5));

