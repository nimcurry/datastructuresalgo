""" def array_chunks(arr, size):
    new_arr=[]
    i=0
    while(i<len(arr)):
        new_arr.append(arr[i:i+size])
        i+=size
    print(new_arr) """

def array_chunks(arr,size):
    new_arr=[]
    lastElement=[]
    if len(arr) == size:
        new_arr.append(arr)
    else:
        for i in range(0,len(arr),size):
            print(arr[i])
            yield arr[i:i+size]



def main():
    x=list(array_chunks([1,9,7,4,5], 2))
    print(x)

if __name__ == '__main__':
    main()