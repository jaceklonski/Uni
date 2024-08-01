n = 8        
arr = [15, 13, 14, 10, 2, 7, 3, 60]
i = 8 // 2 - 1
while True:
        largest = i
        l = 2 * i + 1
        r = 2 * i + 2

        if l < n and arr[l] > arr[largest]:
            largest = l

        if r < n and arr[r] > arr[largest]:
            largest = r

        if largest != i:
            arr[i], arr[largest] = arr[largest], arr[i]
            i = largest
        else:
            break
print(largest)