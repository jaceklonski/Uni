import random
from timeit import default_timer as timer


def partition1(A,p,r):
    x=A[r] # element wyznaczajacy podział
    i=p-1
    for j in range (p, r+1):
        if A[j]<=x :
            i=i+1
            A[i], A[j] = A[j], A[i]
        
    if i<r :
        return i
    else:
        return i-1

def quickSort1(A,p,r): #A = arr q = pivot p = początek przedziału r = koniec przedziału
    if p<r :
        q = partition1(A,p,r)
        quickSort1(A,p,q)
        quickSort1(A,q+1,r)
    return A


arr = [0,5,33,45,21,6,61,23,51]
#####################################################


def bubble_sort(arr, p, r,):
    n = r-p+1
    for i in range(p, r+1):
        for j in range(p, r-p+1-i):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
    return arr

def partition(A,p,r):
    
    x=A[r] # element wyznaczajacy podział
    i=p-1
    for j in range (p, r+1):
        if A[j]<=x :
            i=i+1
            A[i], A[j] = A[j], A[i]
        
    if i<r :
        return i
    else:
        return i-1

def quickSort(A,p,r,c): #A = arr q = pivot p = początek przedziału r = koniec przedziału
    
    if p<r :
        if r-p+1 < c:
            bubble_sort(A,p,r)
        else:
            q = partition(A, p, r)
            quickSort(A, p, q, c)
            quickSort(A, q+1, r, c)
    return A


arr = [0,5,33,45,21,6,61,23,51]
c = 80


nn = [100, 1000, 1500, 3000, 10000]

print('==================Dane Losowe=================')
for n in nn:
  test_arr = [random.randint(0, 10000) for _ in range(n)]  
  start = timer()
  quickSort(test_arr, 0, len(arr) -1, c)
  stop = timer()
  Tn=stop-start
  print(f'moded   {n}   {Tn}')
  start1 = timer()
  quickSort1(test_arr, 0, len(arr) -1)
  stop1 = timer()
  Tn1=stop1-start1
  print(f'og   {n}   {Tn1}')

print('==================Skrajnie Niekorzystne=================')

for n in nn:
  test_arr = []
  for a in range(0,n):
      test_arr.append(a)
  start = timer()
  quickSort(test_arr, 0, len(arr) -1, c)
  stop = timer()
  Tn=stop-start
  print(f'moded   {n}   {Tn}')
  start1 = timer()
  quickSort1(test_arr, 0, len(arr) -1)
  stop1 = timer()
  Tn1=stop1-start1
  print(f'og   {n}   {Tn1}')

# ==================Dane Losowe=================
# moded   100   0.0003316999936942011
#    og   100   1.610000617802143e-05
# moded   1000   0.0713246000232175
#    og   1000   1.300001167692244e-05
# moded   1500   0.09414599998854101
#    og   1500   1.1199997970834374e-05
# moded   3000   0.5931646000244655
#    og   3000   2.120001590810716e-05
# moded   10000   7.334554400003981
#    og   10000   1.3699987903237343e-05
# ==================Skrajnie Niekorzystne=================
# moded   100   0.0003038999857380986
#    og   100   1.8200022168457508e-05
# moded   1000   0.024031899985857308
#    og   1000   3.0499999411404133e-05
# moded   1500   0.0563043000001926
#    og   1500   1.829999382607639e-05
# moded   3000   0.2284405000100378
#    og   3000   2.2899999748915434e-05
# moded   10000   2.480664300004719
#    og   10000   1.3900018529966474e-05