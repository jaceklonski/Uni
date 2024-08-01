class HashEntry:
    def __init__(self, surname, numer):
        self.surname = surname
        self.numer = numer

def convert_surname_to_number(surname):
        return sum(ord(char) * 111 ** i for i, char in enumerate(surname))

def calculate_hash(surname, attempt, table_size):
    return (surname + 7 ** attempt + 11* attempt ** 2) % table_size

def insert_into_table(table, surname, numer):
    attempt_number = 0
    entry = HashEntry(surname, numer)
    max_attempts = len(table)  # Ograniczenie prób do wielkości tablicy
    hash_surname = convert_surname_to_number(surname)
    while attempt_number < max_attempts:
        index = calculate_hash(hash_surname, attempt_number, len(table))
        if table[index] is None:
            table[index] = entry
            return index
        attempt_number += 1
    print("Chyba się nie uda już")
    return None



def search_in_table(table, surname):
    attempt_number = 0
    max_attempts = len(table)  # Ograniczenie prób do wielkości tablicy
    surname_hash = convert_surname_to_number(surname)
    while attempt_number < max_attempts:
        index = calculate_hash(surname_hash, attempt_number, len(table))
        if table[index] is not None and table[index].surname == surname:
            return index, attempt_number + 1
        if table[index] is None:
            return None, attempt_number + 1
        attempt_number += 1
    print("wszystko sprawdzone i nie ma")
    return None, attempt_number


def calculate_fill_percentage(table):
    filled_slots = sum(1 for item in table if item is not None)
    return round(100 * filled_slots / len(table), 2)

# Załadowanie danych
with open('nazwiska.txt', 'r') as file:
    entries = [line.strip().split(" ", 1) for line in file.readlines()]
    entries = [(int(numer), surname) for numer, surname in entries]

print("Wczytane wpisy:", entries[:5])  # Wyświetl pierwsze 5 wczytanych wpisów do weryfikacji

small_table = [None] * 11
proper_table = [None] * 7043

# Wstawianie do małej tablicy z kontrolnym drukiem
for numer, surname in entries[:11]:
    if calculate_fill_percentage(small_table) < 80:
        index = insert_into_table(small_table, surname, numer)
        print(f"Indeks: {index} \tzapełniono: {calculate_fill_percentage(small_table)}%")
    else:
        print("80% zapełnione.")
        break
    
# Wyszukiwanie i drukowanie ilości prób
for numer, surname in entries[5:]:
    index, attempts = search_in_table(small_table, surname)
    print(f"Nazwisko: {surname}, Indeks: {index}, Próba: {attempts}")

for numer, surname in entries:
    if calculate_fill_percentage(small_table) < 80:
        index = insert_into_table(small_table, surname, numer)
        print(f"Indeks: {index} \tzapełniono: {calculate_fill_percentage(small_table)}%")
    else:
        print("80% zapełnione.")
        break

for numer, surname in entries[-20:]:
    index, attempts = search_in_table(small_table, surname)
    print(f"Nazwisko: {surname}, Indeks: {index}, Próba: {attempts}")

    #SOK
    #SOK
    #SOK

