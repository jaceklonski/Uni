import random

pytania = []
odpowiedzi = []
klucz =[]


with open('data.txt', "r") as plik:
    for linia in plik:
     a = linia.split(';')
     pytania.append(a[0])
     odpowiedzi.append(a[1].split(','))
     klucz.append(a[2])

def ask_q(lista, lista_odp, lista_key):
    anwsers = []
    losowanie_pytania = random.randint(0, len(lista)-1)
    pytanie = lista[losowanie_pytania]
    anwsers = lista_odp[losowanie_pytania]
    slownik = {'a': anwsers[0], 'b': anwsers[1], 'c': anwsers[2], 'd': anwsers[3]}
    print(pytanie)
    print('a)', anwsers[0], '\nb)', anwsers[1], '\nc)', anwsers[2], '\nd)', anwsers[3],)
    a = input('Podaj odpwiedź: ')
    if slownik[a] == lista_key[losowanie_pytania]:
        lista.pop(losowanie_pytania)
        lista_odp.pop(losowanie_pytania)
        lista_key.pop(losowanie_pytania)
        return True 
    return False

punkty = 0
while ask_q(pytania, odpowiedzi, klucz):
        punkty += 100
        print('Twoje punkty' , punkty)

print('porażka')
