slowo = input("podaj słowo: ")
znak = input("podaj znak: ")
for x in slowo:
    if x == znak:
        print (f"w słowie {slowo}, znak: {znak}, występuje {slowo.count(znak)} razy")
        break
else:
    print("znak nie występuje")