let getMax = (...arr) => {

    let i;
    let max = arr[0];

    for (i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return max;

}

console.log(getMax(22, 34, 45, 22));
