def max_chars(inp):
    chars={}
    max=0
    value1=0
    maxval1=''
    for x in inp:
        chars[x]=inp.count(x)
    print(chars)

    for key,value in chars.items():
        if value > max:
            max=value
            #maxval = key
    for key,value1 in chars.items():
        if value1 == max:
            maxval1 += key
    print(f'max of chars is: {maxval1},{max}')
        #if x in chars:
"""         chars[x]=x
        print(x,chars[x]) """
        #chars[x]=count+1
        #else:
        #    chars[x]=count


def main():
    max_chars("helllo worrrrrlld")

if __name__ == "__main__":
    main()