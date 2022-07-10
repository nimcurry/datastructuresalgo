
function reverseString(inputstring) {
    let  i =0;
    let outputString = '';
    let outputString1 = '';
    //let outputString2;

    /* method1: use of for loop*/
    for (i=inputstring.length-1; i>=0; i--){
        //outputString.push(inputstring[i]);
        outputString += inputstring[i];

    }
    console.log(outputString);

    /*Method 2: using split, reverse and join methods  */
    const arr = inputstring.split('');
    arr.reverse();
    arr.join('');
    console.log(arr);

    //Method 3: using for loop for a string 
    
    for (let output of inputstring) {   
        outputString1 = output+outputString1;
    }
    console.log(outputString1);

    //Method 4: 
    let arr1 = inputstring.split('');
    
    let stringFinalOutput = arr1.reduce( 
        (el,outputString2) => {
            return outputString2+el;
        } ,'');
    console.log(stringFinalOutput);

}

//module.exports =  reverseString;

reverseString('Hello World');