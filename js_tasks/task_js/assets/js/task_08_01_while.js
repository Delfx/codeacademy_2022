function laugh(numberHa) {
    let i = 0;
    text = '';

    if (Number.isInteger(numberHa)) {

        while (i < numberHa) {
            i++
            text += 'ha'
        } console.log('while: ' + text + '!');

        i = 0;
        text = '';

        do {
            i++
            text += 'ha'
        } while (i < numberHa);
        console.log('doWhile: ' + text + '!');

        i = 0;
        text = '';

        for (; i < numberHa; i++) {
            text += 'ha'
        } console.log('for: ' + text + '!');

    }

    return 404;

}


laugh(5)
