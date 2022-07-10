
def fizz_buzz(num):
    num_result=["fizzbuzz" if (x%3 == 0 and x%5 == 0)  else "fizz" if (x%3==0) else "buzz" if (x%5==0) else x  for x in range(1,num) ]
    print(num_result)
"""     for i in range(1,num+1):
        if (i%3 == 0  and i%5==0):
            print('fizzbuzz')
        elif(i%3 == 0):
            print('fizz')
        elif(i%5 == 0):
            print('buzz')
        else:
            print(i) """

def main():
    fizz_buzz(78)

if __name__ == '__main__':
    main()