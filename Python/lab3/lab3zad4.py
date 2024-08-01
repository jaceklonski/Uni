wynik = 4
o = 0

for a in range (0,3):
    while True:
        x = int(input("2+2= "))
        if x == 4:
            o += 1
            print(f"dobra odpowiedź rozwiąż zadanie jeszcze raz:{o}/3")
            break
        else:
            print("zła odpowiedź, spróbuj jeszcze raz")
print("Dobra robota!")
    

