def fibionacci(n):
    assert n>=0 and  int(n)==n, 'Only positive numbers allowed'
    if (n==0 or n==1):
        return n
    else:
        return fibionacci(n-2) + fibionacci(n-1)

answer = fibionacci(7)

print(answer)


def fibionacciloop(n):
    i=0
    for i in range(n):
        i=i+(i+1)
    return i


answer = fibionacciloop(7)

print(answer)    