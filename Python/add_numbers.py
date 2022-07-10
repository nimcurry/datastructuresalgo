def add_numbers(n):
    if n==0:
        return 0
    else:
        return int(n)%10 + add_numbers(n/10)
print(add_numbers(4))