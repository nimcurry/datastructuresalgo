function ReverseInteger(number)  {
    let outputNumber;
    if (number < 0) {
    outputNumber = -1 * parseInt(number.toString().split('').reverse().join(''));
    } else {
        outputNumber = parseInt(number.toString().split('').reverse().join(''));
    }
    let outputNumber1;
    outputNumber1 = parseFloat(number.toString().split('').reverse().join('')) * Math.sign(number);
    console.log(outputNumber);
    console.log(outputNumber1);

    //using  division methodlogy
    let outputNumber2, result=0;
    while(number) {
        outputNumber2=number%10;
        result =   (result*10)+outputNumber2;
        number = number/10|0
    }
    console.log(outputNumber2);
}

ReverseInteger(-200);

module.exports  = ReverseInteger;