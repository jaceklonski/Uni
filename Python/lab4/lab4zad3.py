zdanie = input("podaj palindrom:")
z = zdanie.replace(" ","")
z_lower = z.lower()

if z_lower.endswith("."):
    z_bk = z_lower[0 : -1]
else:
    z_bk = z_lower

n = len(z_bk)
n_2 = n//2

p=0
q=0

for i in range (0,n_2):
    print(z_bk[p] + z_bk[q])
    if z_bk[p] == z_bk[q]:
        p = i
        q = -i-1
    else:
        print('nie jest to palindrom')
        break
else:
    print('jest to palindrom')
