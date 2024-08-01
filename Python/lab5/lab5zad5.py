lista = []
naukowcy = ['Albert', 'Niels', 'Robert', 'Isaac', 'Alan']
[Einstein , Bohr , Oppenheimer , Newton , Turing] = naukowcy
nazwiska = {'Einstein': Einstein, 'Bohr': Bohr, 'Oppenheimer': Oppenheimer, 'Newton': Newton, 'Turing': Turing}
x = input('podaj nazwisko naukowca: ')
print(f'Imie {x}a to {nazwiska[x]}')