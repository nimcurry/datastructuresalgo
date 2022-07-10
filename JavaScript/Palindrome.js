function Palindrome(str) {
    //method 1 to check palindrome
    const arr = str.split('');
    arr.reverse();
    const newStr = arr.join('');
    console.log(newStr);
    result =  str.localeCompare(newStr);
    if (result === 0) {
        console.log('string is a plaindrome')
    }else {
        console.log('not a plaindrome');
    }
    
    //2nd way to check if the string is palindrome
    //"every" method tests whether  all elements in the array
    //pass the test implemented by the provided  function. 
    //it returns boolean value
    const arr1 = str.split('').every((char,i) => {
        char === str[str.length - i - 1];
    });
    console.log(arr1);
}

Palindrome('nimish');

module.exports = Palindrome;