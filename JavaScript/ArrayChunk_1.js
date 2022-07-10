function arrayChunk (arr, size) {
    const result = [];
     
    for (let i=0;  i<arr.length;i+=size) {
        const chunk = arr.slice(i,size);
        result.push(chunk);
        
        console.log(i)
    }
    console.log(result);
}

function arrayChunk1 (arr, size) {
    const chunk =[];

    for (let i of arr) {

        const result1 = chunk[chunk.length - 1];
        if (!result1 || result1.length === size) {
            //console.log();
            //console.log(typeof(chunk));
            chunk.push([i]);
        } else {
            result1.push(i);
            //console.log(i);
        }
    }
    console.log(chunk);
        
}

arrayChunk([1,2,3,4,5], 3);
arrayChunk1([1,2,3,4,5], 3);