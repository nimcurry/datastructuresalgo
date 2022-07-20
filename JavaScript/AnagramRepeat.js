/* Using Character Maps*/

function checkAnagrams (str1, str2) {
    let prepStr1=stringPreparation(str1);
    let prepStr2=stringPreparation(str2);

    if (Object.keys(prepStr1).length !==  Object.keys(prepStr2).length) {
        console.log("not anagrams");
        return false;

    }
        /* for(let a in prepStr1) : basically when iterating, it iterates over
        object's key and not indices. hence there is no need to sort
        comparing aCharMap[char] with bCharMap[char] is we are comparing the index of char in both objects - like comparing  
        indices of an array!, but what I understood from the answer is we are actually ignoring indices and comparing 
        the current *key* in aCharMap with its equivalent in bCharMap.
        */
        for(let a in prepStr1) {
            //console.log(prepStr1[a] +' and ' + prepStr2[a]);
            if (prepStr1[a] !== prepStr2[a]) {
                console.log( "not anagrams");
                return false;
            }
        }
        console.log( "anagrams!!!");

}

function stringPreparation (str) {
    let charMap = {};
    str1 = str.replace(/[^\w*]/g,'').toLowerCase();  //check this on regular expression pattern 
    for  (let i of str1)  {
        charMap[i] = charMap[i]+1 || 1;
    }
    return charMap;
    //console.log(charMap);
}


checkAnagrams('rail safetYyy!!!#@$%!   ', 'fairy tales')