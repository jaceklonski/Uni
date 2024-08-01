def fibbonacci(a):
    if a < 3:
        return 1
    else:
       return fibbonacci(a-1) + fibbonacci(a-2)
    
a = int(input("podaj a:"))
print(fibbonacci(a))
