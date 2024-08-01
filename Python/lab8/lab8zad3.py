        
def odw(slowo):
    if 0 == len(slowo):
        return ""
    else:
        return slowo[-1] + odw(slowo[:-1])

slowo = input('podaj slowo')
print(odw(slowo))