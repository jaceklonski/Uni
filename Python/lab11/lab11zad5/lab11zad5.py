import matplotlib.pyplot as plt

numery = []
teksty = []

with open('wynikikolokwium.txt', 'r') as file:
    for line in file:
        parts = line.split(' ')
        ocena_str = ''
        for n in range (len(parts)):
            try:
                numery.append(int(parts[n]))
            except:
                if ocena_str != '':
                    ocena_str += ' '

                ocena_str += parts[n]
        teksty.append(ocena_str)

plt.pie(numery, labels=teksty, autopct='%1.1f%%', startangle=90, colors=['red', 'orange', 'yellow', 'green', 'blue', 'purple'])
plt.title('Rozkład procentowy')
plt.show()
