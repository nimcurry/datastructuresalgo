def str_reverse(x):
    lst=[]
    a=""
    for i in range(0, len(x))  :
        lst.append(x[i])
    print(lst[::-1])
    a=a.join(lst[::-1])
    print(a)


def main():
    str_reverse('abc')

if __name__ == "__main__":
    main()

""" number reversal function """
class Solution:
    def reverse(self, x: int) -> int:
        if x > 0: 
            a = int(str(x)[::-1])
        if x <= 0:
            a = -1 * int(str(x*-1)[::-1])
        if a not in range (-2**31, 2**31-1):
            return 0
        else:
            return a``
        
