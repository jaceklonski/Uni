a = input("podaj słowo a: ")
b = input("podaj słowo b: ")
a_len = len(a)
b_len = len(b)
if a_len > b_len:
    print(f"słowo {a} jest dłuższe")
elif a_len < b_len:
    print(f"słowo {b} jest dłuższe")
else:
    print("słowa są równej długości")

