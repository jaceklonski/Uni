def newton(n,k):
    if k == 0 or k==n:
        return 1
    return newton(n-1, k-1) + newton(n-1, k)

n = int(input('podaj n: '))
k= int(input('podaj k: '))

print(newton(n,k))