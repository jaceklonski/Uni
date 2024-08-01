def newton(n,k):
    if k == 0 or k==n:
        return 1
    return newton(n-1, k-1) + newton(n-1, k)

m = int(input('podaj orly: '))
n = int(input('podaj rzuty: '))

prop = (newton(n, m) / float(2 ** n))*100
prop_str = round(prop,1)
print(f"prawdopodobieństwo wynosi {prop_str}%")