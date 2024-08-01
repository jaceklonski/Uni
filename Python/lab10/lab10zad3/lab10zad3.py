with open("inwokacja.txt", "r") as file:
    for line in file:
            if line.strip().startswith('D'):
                print(line.strip())
                