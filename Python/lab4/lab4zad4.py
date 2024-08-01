word = input('podaj słowo: ')
s = ['a' , 'e' , 'i' , 'o' , 'u' , 'y']
for x in s:
    ile = word.count(x)
    print(f'{x} występuje {ile} razy')