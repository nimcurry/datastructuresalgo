def reverse_string(str):    
    """ Method 1:  using for loop """
    output_str=''
    for i  in  str:
        output_str =  i + output_str
    #print(output_str)
    
    """ Method 2: converting string to list """
    output_str1=''.join(list(str[::-1]))
    """ the above line roughly translates to the below:
    output_str1 = list(str)
    finalOutputStr = ''.join(output_str1[::-1]) 
    """
    #print(output_str1)

    """ Method 3: using  reversed function. reversed() function  is returns
    a reversed iterator. join function is used to join back strings using empty separator """
    output_str2=''.join(reversed(str))
    #print(output_str2)
    """ Method 4: using recursive functions """
    
    def recursive_function(str1=str):

        if len(str1) ==  0:
            return str1
        else:
             
            return  recursive_function(str1[1:]) + str1[0]
    output = recursive_function()
    print(output)
#print(reverse_string('hello world'))

def main():
    reverse_string('hello world')

if __name__ == '__main__':
    main()

