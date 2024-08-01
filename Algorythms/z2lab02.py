def heapify(arr, n, i):
    while True:
        largest = i
        l = 2 * i + 1
        r = 2 * i + 2

        #jeśli index nie przekracza listy i wartość jest większa niż largest
        if l < n and arr[l] > arr[largest]:
            largest = l

        if r < n and arr[r] > arr[largest]:
            largest = r

        if largest != i: #zamienia elementy w liście
            arr[i], arr[largest] = arr[largest], arr[i]
            i = largest
        else:
            break


def buildHeap(arr):
    n = len(arr)
    for i in range(n // 2 - 1, -1, -1):
        heapify(arr, n, i)

def heapSort(arr):
    buildHeap(arr)
    heapSize = len(arr)
    for i in range(len(arr) - 1, 0, -1):
        arr[0], arr[i] = arr[i], arr[0] #zamienia pierwszy z ostatnim elementem listy
        heapSize -= 1 #ostatni element listy jest już posortowany
        heapify(arr, heapSize, 0)
    return arr

with open('input.txt', 'r') as file:
    lines = file.readlines()
    A = [int(line.strip()) for line in lines]

sorted_A = heapSort(A)

with open('output.txt', 'w') as file:
    for num in sorted_A:
        file.write(str(num) + '\n')