function arrayChunk(arr, size){
    array_new = [];
    let i;

    if(array_new.length == size){
        console.log(array_new);
    } else {
        for (i of arr){
            //console.log(array_new.length);
            const lastElement= array_new[array_new.length-1];
            //console.log(lastElement, array_new, array_new.length);

            if(!lastElement || lastElement.length ===size){
                console.log('1st element being pushed: ',i, lastElement);
                array_new.push([i]);
            }else {
                //console.log(`element pushed: ${lastElement}`); 
                lastElement.push(i);
                console.log(`i:${i}, lastElement: ${lastElement} and array_new: ${array_new}`)  
 
            }
        }

    }

console.log(`${array_new}`);
}



function arrayChunk1 (arr, size) {

    chunked=[];
    let index=0;

    while(index<arr.length){
        //const element = arr.slice(index,size+index);
        chunked.push(arr.slice(index,size+index));
        index=index+size;
    }

    console.log(`new arrays is: ${chunked}`);
}


arrayChunk([1,2,3,4],2)

arrayChunk1([1,2,3,4],2)