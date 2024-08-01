import numpy as np
import matplotlib.pyplot as plt

x = np.arange(-2 * np.pi, 2 * np.pi, np.pi/16)
wartosci_osix = np.arange(-2 * np.pi, 2 * np.pi + np.pi/2, np.pi/2)

y_sin = np.sin(x)
y_cos = np.cos(x)

plt.plot(x, y_sin, label='sin(x)', color='blue')
plt.plot(x, y_cos, label='cos(x)', color='red')


plt.xticks(wartosci_osix, ['-2π', '-3π/2', '-π', '-π/2', '0', 'π/2', 'π', '3π/2', '2π'])
plt.yticks([-1, 0, 1])
plt.xlabel('x')
plt.ylabel('y')

plt.show()