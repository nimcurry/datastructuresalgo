function maxChar(str) {
  let everyChar = {};
  let max=0;
  let max1=0;
  let charMax='';
  let charMax1='';
  str.split('').forEach((item) => {
/*     if(!everyChar[item]) {
      everyChar[item]=1;
    } else {
      everyChar[item]++;
    } */
    //shortest way to implement the if else
    everyChar[item] =  everyChar[item]  + 1  || 1;
    

    if (everyChar[item] > max) {
      max = everyChar[item];
      charMax = Object.keys(everyChar).find(key => everyChar[key] === max);
    }
  })

  for (let str in everyChar) {
    console.log('str: '+ str + ' everyChar[str]: '+everyChar[str]);
    if(everyChar[str] >= max1) {
      max1 = everyChar[str];
      charMax1 += str;
    }
  }
  console.log(`The maximum character for given string is ${charMax} with ${max} or ${charMax1} number of characters`);

}

maxChar('helooo nimisshh!!');