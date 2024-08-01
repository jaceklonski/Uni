while True:
    zdanie = input("Napisz zdanie: ")
    a = zdanie[0].isupper()
    b = zdanie[-1]

    if a:
        print("Twoje zdanie zaczyna się od wielkiej litery,")
        if b == ".":
            print("a kończy się kropką, więc jest poprawne")
            break
        else:
            print("a gdzie kropka?")
    else:
        print("Zdania zaczynają się od wielkiej litery!")
