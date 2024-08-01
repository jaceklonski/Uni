# Zadanie z4.1 (4 pkt.) Zaimplementuj strukturę listy dowiązaniowej (jednokierunkowej lub dwukierunkowej) niecyklicznej, bez wartownika, której elementami są słowa (czyli ciągi znaków), oraz operacje

#     wstaw(s) - wstawia słowo s na początek listy !!

#     drukuj - wypisuje elementy listy

#     szukaj(s) - zwraca węzeł listy zawierający słowo s o ile takie słowo znajduje się na liście, a w przeciwnym wypadku zwraca None,

#     usuń(s) - usuwa z listy węzeł zawierający słowo s o ile takie słowo znajduje się na liście, !!

#     (ta grupa operacji: razem 2 punkty)

#     bezpowtorzeń(L) - tworzy kopię listy L, ale bez powtórzeń słów; zwraca utworzoną kopię. Lista L pozostaje bez zmiany. (1 pkt.)

#     scal(L1,L2) - tworzy listę L3 zawierającą wszystkie słowa z list L1 i L2 (również ze wszystkimi powtórzeniami); zwraca wskaźnik na utworzoną listę. Listy L1 i L2 przestają być używane, (można więc wykorzystać ich węzły do zbudowania listy L3.). Efektywne (pod względem złozoności czasowej) rozwiązanie doczepi po prostu jedną listę do drugiej. (1 pkt.)

# None - pusty wskaźnik
# l.head - początek listy l
# x.next - następny element po elemncie x
# x.prev - poprzedni element po elemencie x
# x.key - wartość (klucz) identyfikujący węzeł x
# l.none - wartownik listy l (jeżeli lista ma
# wartowników)

################################################################################

class Node:
    # tworzę listę jednokierunkową więc usunąłem prev
    def __init__(self,k):
        self.key = k
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    #iterujemy przez listę, zaczynając od head, aż do znalezienia k, lub dojścia do końca listy (None)
    def listSearch(self, k):
        x = self.head
        while x != None and x.key != k:
            x = x.next
        return x 


    # nie działa trzeba bardziej zmodyfikować
    # def listInsert(self, x):
    #     x.next = self.head << wstawiamy wartość a nie węzeł
    #     self.head = x 

    #     Traceback (most recent call last):
    # File "c:\Users\lonsk\Desktop\Z2\Zadanie z4.1.py", line 75, in <module>
    #     lista.listInsert('a')
    # File "c:\Users\lonsk\Desktop\Z2\Zadanie z4.1.py", line 45, in listInsert
    #     x.next = self.head
    #     ^^^^^^


    def listInsert(self, value):
        n_node = Node(value) #tworzymy nowy węzeł
        n_node.next = self.head #węzeł wskazuje dotychczasowy początek listy
        self.head = n_node #przypisujemy nowy node jako początek listy

    def listDelete(self, x):
        if self.head == x:
            self.head = x.next #jeśli usuwany element jest głową przypisujemy następny jako początek listy
            return
        current = self.head #akumulator dla poniższej pętli
        while current.next and current.next != x: #znajduje element bezpośrednio poprzedzający 'x'
            current = current.next
        if current.next is None:
            return
        current.next = x.next #element poprzedzający 'x' wskazuje element po 'x'

    def drukuj(self):
        #działa na podobnej zasadzie jak search - iteruje dopóki nie natrafi na wartość 'None'
        current = self.head
        while current is not None:
            print(current.key)
            current = current.next

    def bezpowtorzeń(self):
        n_lista = LinkedList()
        curr = self.head
        acc = []
        while curr:
            if curr.key not in acc:
                acc.append(curr.key)
                n_lista.listInsert(curr.key)
            curr = curr.next
        return n_lista

    

L1 = LinkedList()

L1.listInsert('a')
L1.listInsert('b')
L1.listInsert('c')
L1.listInsert('c')
L1.listInsert('d')

L2 = LinkedList()

L2.listInsert('e')
L2.listInsert('s')
L2.listInsert('s')
L2.listInsert('a')
L2.listInsert('a')

print("Lista po wstawieniu elementów:")
L1.drukuj() #działa

szukany = L1.listSearch('d') 


if szukany:
    print(f"Znaleziono element: {szukany.key}")
else:
    print("Element nie został znaleziony.")

if szukany:
    L1.listDelete(szukany)
    print("Lista po usunięciu elementu d:")
    L1.drukuj()

L1.drukuj()

l1bp = L1.bezpowtorzeń()
print("L1 bez powtórzeń:")
l1bp.drukuj()

# reszta działa

def scal(L1, L2):
    L3 = LinkedList()
    L3.head = L1.head
    current = L1.head
    while current.next: #szukamy ostatniego elementu L1
        current = current.next
    current.next = L2.head #ostatni element przyczepiamy do pierwszego z L2 (przypomina mi to ludzką stonogę [żałuję że widziałem ten film])
    return L3

L3 = scal(L1, L2)

print("Scalenie L1 i L2:")
L3.drukuj()