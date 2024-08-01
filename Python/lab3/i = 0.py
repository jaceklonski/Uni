x = input('podaj słowo: ')
o = ''
length = len(x)
for a in range (0,length):
    z = 1 + a
    o += x[-z]
print(o)
