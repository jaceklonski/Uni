import random
import os
import ast
import re


def Clear_terminal():
    os.system('cls')

players_grid = [['-','-','-','-','-','-','-','-','-','-'],['-','-','-','-','-','-','-','-','-','-'],['-','-','-','-','-','-','-','-','-','-'],['-','-','-','-','-','-','-','-','-','-'],['-','-','-','-','-','-','-','-','-','-'],['-','-','-','-','-','-','-','-','-','-'],['-','-','-','-','-','-','-','-','-','-'],['-','-','-','-','-','-','-','-','-','-'],['-','-','-','-','-','-','-','-','-','-'],['-','-','-','-','-','-','-','-','-','-'],]

players2_grid = [['-','-','-','-','-','-','-','-','-','-'],['-','-','-','-','-','-','-','-','-','-'],['-','-','-','-','-','-','-','-','-','-'],['-','-','-','-','-','-','-','-','-','-'],['-','-','-','-','-','-','-','-','-','-'],['-','-','-','-','-','-','-','-','-','-'],['-','-','-','-','-','-','-','-','-','-'],['-','-','-','-','-','-','-','-','-','-'],['-','-','-','-','-','-','-','-','-','-'],['-','-','-','-','-','-','-','-','-','-'],]

oponents_grid = [['-','-','-','-','-','-','-','-','-','-'],['-','-','-','-','-','-','-','-','-','-'],['-','-','-','-','-','-','-','-','-','-'],['-','-','-','-','-','-','-','-','-','-'],['-','-','-','-','-','-','-','-','-','-'],['-','-','-','-','-','-','-','-','-','-'],['-','-','-','-','-','-','-','-','-','-'],['-','-','-','-','-','-','-','-','-','-'],['-','-','-','-','-','-','-','-','-','-'],['-','-','-','-','-','-','-','-','-','-'],]

oponents2_grid = [['-','-','-','-','-','-','-','-','-','-'],['-','-','-','-','-','-','-','-','-','-'],['-','-','-','-','-','-','-','-','-','-'],['-','-','-','-','-','-','-','-','-','-'],['-','-','-','-','-','-','-','-','-','-'],['-','-','-','-','-','-','-','-','-','-'],['-','-','-','-','-','-','-','-','-','-'],['-','-','-','-','-','-','-','-','-','-'],['-','-','-','-','-','-','-','-','-','-'],['-','-','-','-','-','-','-','-','-','-'],]

###players_ships
carrier = [[]]
battleships = [[],[]]
cruisers = [[],[],[]]
destroyers = [[],[],[],[]]
ships = [carrier, 5 , battleships, 4 , cruisers , 3 , destroyers, 2]

###oponents_ships
o_carrier = [[]]
o_battleships = [[],[]]
o_cruisers = [[],[],[]]
o_destroyers = [[],[],[],[]]
o_ships = [o_carrier, 5 , o_battleships, 4 , o_cruisers , 3 , o_destroyers, 2]

shots = []
o_shots = []

def Convert_to_indices(coordinates):
    column_letter, row_number = coordinates[0], int(coordinates[1:])
    column_index = ord(column_letter.upper()) - ord('A')
    row_index = row_number - 1
    
    return [row_index, column_index]

def Printgrid(grid):
    print(f'    A   B   C   D   E   F   G   H   I   J')
    for a in range(10):
        if a == 9:
             print(f'{a + 1} | ', end='')
             for b in range(10):
                print(grid[a][b] + ' | ', end='')
        else:
            print(f'{a + 1}  | ', end='')
            for b in range(10):
                print(grid[a][b] + ' | ', end='')
        print()

def Update_grid(grid, ship_list):
    for i in range(0, len(ship_list), 2):
        for a in ship_list[i]:
            for f in range (len(a)):
                grid[a[f][0]][a[f][1]] = '#'

def Coliding(check, ships):
     for i in range(0, len(ships), 2):
                                for y in ships[i]:
                                    for z in y:
                                        for x in check:
                                            if x == z:
                                                return True
     return False

def Place_ship(ship_list, grid):
        Clear_terminal()
        Printgrid(grid)
        for ship_type_index in range(0, len(ship_list), 2):
            ship_type = ship_list[ship_type_index]
            ship_length = ship_list[ship_type_index + 1]
            
            for a in range(0,len(ship_type)):
                while True:
                    temporary_list = []
                    ship_index1 = input(f'Place the nose of a ship with {ship_length} length:\n>>>')
                    ship_index2 = input(f'Place the stern of a ship with {ship_length} length:\n>>>')

                    temporary_list.append(Convert_to_indices(ship_index1))
                    temporary_list.append(Convert_to_indices(ship_index2))
                    if temporary_list[0][0] != temporary_list[1][0] and temporary_list[0][1] == temporary_list[1][1]:
                            
                            if temporary_list[0][0] > temporary_list[1][0]:
                                temporary_list[0][0], temporary_list[1][0] = temporary_list[1][0], temporary_list[0][0]
                            
                            if temporary_list[1][0] - temporary_list[0][0] == ship_length-1:
                                for row in range(temporary_list[0][0]+1, temporary_list[1][0]):           #row index is different
                                    column_index = temporary_list[0][1]
                                    pair = [ row , column_index ]
                                    temporary_list.append(pair)
                            
                            if Coliding(temporary_list, ship_list) == False:
                                for index in temporary_list:
                                    ship_type[a].append(index)
                                print('Ship placed successfuly')
                                print(ship_type[a])
                                Update_grid(grid, ship_list)
                                Clear_terminal()
                                Printgrid(grid)
                                break

                    if temporary_list[0][1] != temporary_list[1][1] and temporary_list[0][0] == temporary_list[1][0]:
                        if temporary_list[0][1] > temporary_list[1][1]:
                                temporary_list[0][1], temporary_list[1][1] = temporary_list[1][1], temporary_list[0][1]
                        if temporary_list[1][1] - temporary_list[0][1] == ship_length-1:
                            for column in range(temporary_list[0][1]+1, temporary_list[1][1]):           #column index is different
                                    row_index = temporary_list[1][0]
                                    pair = [ row_index , column ]
                                    temporary_list.append(pair)
                            
                            if Coliding(temporary_list, ship_list) == False:
                                for index in temporary_list:
                                    ship_type[a].append(index)
                                print('Ship placed successfuly')
                                print(ship_type[a])
                                Update_grid(grid, ship_list)
                                Clear_terminal()
                                Printgrid(grid)
                                break
                    else:
                            print('Invalid ship lenght or ships are coliding. Try again')
                    
def Generate_ships(ship_list):
    for i in range(0, len(ship_list), 2):
        for a in range(len(ship_list[i])):

            while True:
                while True:
                    temporary_list = []
                    ship_index1 =[]
                    ship_index2 = [0,0]
                    ship_index1 = [random.randint(0,9), random.randint(0,9)]
                    randomizer = random.randint(0,1)
                    if randomizer > 0:
                        ship_index2[0] = ship_index1[0] + ship_list[i+1] - 1
                        
                        if ship_index2[0] >= 9:
                            ship_index2[0] = ship_index1[0] - ship_list[i+1] + 1
                        
                        ship_index2[1] = ship_index1[1]
                        break
                    else:
                        ship_index2[1] = ship_index1[1] + ship_list[i+1] - 1
                        
                        if ship_index2[1] >= 9:
                            ship_index2[1] = ship_index1[1] - ship_list[i+1] + 1

                        ship_index2[0] = ship_index1[0]
                        break
                
                temporary_list.append(ship_index1)
                temporary_list.append(ship_index2)

                if temporary_list[0][0] != temporary_list[1][0] and temporary_list[0][1] == temporary_list[1][1]:
                                
                    if temporary_list[0][0] > temporary_list[1][0]:
                        temporary_list[0][0], temporary_list[1][0] = temporary_list[1][0], temporary_list[0][0]
                                
                    if temporary_list[1][0] - temporary_list[0][0] == ship_list[i+1]-1:
                        for row in range(temporary_list[0][0]+1, temporary_list[1][0]):           #row index is different
                            column_index = temporary_list[0][1]
                            pair = [ row , column_index ]
                            temporary_list.append(pair)
                                

                if temporary_list[0][1] != temporary_list[1][1] and temporary_list[0][0] == temporary_list[1][0]:
                    if temporary_list[0][1] > temporary_list[1][1]:
                        temporary_list[0][1], temporary_list[1][1] = temporary_list[1][1], temporary_list[0][1]
                    if temporary_list[1][1] - temporary_list[0][1] == ship_list[i+1]-1:
                        for column in range(temporary_list[0][1]+1, temporary_list[1][1]):           #column index is different
                            row_index = temporary_list[1][0]
                            pair = [ row_index , column ]
                            temporary_list.append(pair)
                                        
                if Coliding(temporary_list, ship_list) == False:
                    for z in temporary_list:
                        ship_list[i][a].append(z)
                    break

def Shoot(ship_list, grid):
    while True:
        shot = input('Shoot your shot [A-J][1-10] >>> ')
        if re.compile(r'[a-jA-J]([0-9]|10)').match(shot):
            break
        else:
            print('Invalid coordinate, Try again')
        
    i_shot = Convert_to_indices(shot)
    if Check_hit(ship_list, grid, i_shot) == True:
            print('check działa')
            return True

def Check_hit(ship_list, grid, i_shot):
    global oponents_grid
    for i in range(0, len(ship_list), 2):
            for a in ship_list[i]:
                for f in range (len(a)):
                    if a[f] == i_shot:
                        grid[i_shot[0]][i_shot[1]] = 'X'
                        Clear_terminal()
                        print('SHOOTING GRID')
                        Printgrid(oponents_grid)
                        print('\n\nYOUR GRID')
                        Printgrid(players_grid)
                        print('HIT!')
                        
                        enemy_health = 0

                        for a in oponents_grid:
                            for b in a:
                                if b == 'X':
                                    enemy_health += 1
                        if enemy_health > 1:
                            return True 

                        return Shoot(ship_list, grid)
                    
    grid[i_shot[0]][i_shot[1]] = 'O'
    Clear_terminal()
    print('SHOOTING GRID')
    Printgrid(oponents_grid)
    print('\n\nYOUR GRID')
    Printgrid(players_grid)
    print('MISS!')
    return False

def Oponent_Shoots(ship_list, grid, shots_fired):
     while True:
        counter = 0
        i_shot = [random.randint(0,9), random.randint(0,9)]
        for a in shots_fired:
            if a == i_shot:
                counter += 1
        if counter == 0:
            shots_fired.append(i_shot)
            break
     
     if O_check_hit(ship_list, grid, i_shot) == True:
          return True
     
def O_check_hit(ship_list, grid, i_shot):
    global players_grid
    for i in range(0, len(ship_list), 2):
            for a in ship_list[i]:
                for f in range (len(a)):
                    if a[f] == i_shot:
                        Clear_terminal()
                        print('SHOOTING GRID')
                        Printgrid(oponents_grid)
                        print('\n\nYOUR GRID')
                        Printgrid(players_grid)
                        print('You got HIT!')
                        grid[i_shot[0]][i_shot[1]] = 'X'
                        players_health = 0
        
                        for a in players_grid:
                            for b in a:
                                if b == 'X':
                                    players_health += 1
                        
                        if players_health > 29:
                            return True

                        return False

    
    grid[i_shot[0]][i_shot[1]] = 'O'
    Clear_terminal()
    print('SHOOTING GRID')
    Printgrid(oponents_grid)
    print('\n\nYOUR GRID')
    Printgrid(players_grid)
    print('Oponent misses!')

def PrintLOGO():
    print('\n\n')
    print('##########      #####   ######################  ###########                ########  ##      ##  ## ######### #######')
    print('##       ##    ##   ##       ##      ##         ##                       ####    #### #      ##  ##  ##     ## #    ####')         
    print('##        #   ##     ##      ##      ##    ##   ##                       ##          ##      ##  ##  ##      ##')    
    print('##       ##  ##       ##     ##      ##    ##   ##                       ##          ##      ##  ##  ##      ##')               
    print('#########    ##        ##    ##      ##    ##   ##                        ###        ##      ##  ##  ##     ## ##')
    print('##       ##    ###########   ##      ##    ##   #######  ################  ######    ####### ##  ##  #######   ####  #########')
    print('##        ##            ##   ##      ##    ##   ##                           ######  ##      ##  ##  ##          #####')
    print('##        ##             ##  ##      ##    ##   ##                               ### ##      ##  ##  ##             ####')         
    print('##       ##               ##  #      ##    ##   ##                    ###       ###  ##      ##  ##  ##    ##       ###')       
    print('##########                 ##        ##    ####################          ########    ##      ##  ##  ##      ########')        
    print('\n')

def Menu():
    PrintLOGO()
    print('MENU\n1.QUICKPLAY\n2.HOTSEAT\n')
        
    while True:
        x = (input('Choose(1-2):\n>>>'))
        if re.compile(r'[12]').match(x):
            return x
        print('Invalid input')
    
def QUICKPLAY():
     
    global ships
    global o_ships
    global players_grid
    global oponents_grid

     
    Generate_ships(o_ships)
    while True:
        generate = input('DO YOU WANT YOUR SHIPS TO BE AUTOMATICLLY GENERATED (Y/N)?\n>>>')

        if generate.upper() == 'Y':
            Generate_ships(ships)
            Update_grid(players_grid, ships)
            break
        if generate.upper() == 'N':
            Place_ship(ships, players_grid)
            break
        Clear_terminal()
        print('invalid anwser. try again')
  
    enemy_hits = 0
    while True:
        Clear_terminal()
        print(enemy_hits)
        print('SHOOTING GRID')
        Printgrid(oponents_grid)
        print('\n\n\nYOUR GRID')
        Printgrid(players_grid)
        if Shoot(o_ships, oponents_grid) == True:
             Clear_terminal()
             print('YOU WON!!!')
             break
        if Oponent_Shoots(ships, players_grid, o_shots) == True:
             Clear_terminal()
             print('YOU LOST THE BATTLE...')
             break


        


    return

def PVP():
    
    global ships
    global o_ships
    global players_grid
    global oponents_grid
    global players2_grid
    global oponents2_grid

    while True:
        generate = input('PLAYER 1:\nDO YOU WANT YOUR SHIPS TO BE AUTOMATICLLY GENERATED (Y/N)?\n>>>')

        if generate.upper() == 'Y':
            Generate_ships(ships)
            Update_grid(players_grid, ships)
            break
        if generate.upper() == 'N':
            Place_ship(ships, players_grid)
            break
        Clear_terminal()
        print('invalid anwser. try again')

    while True:
        generate = input('PLAYER 2:\nDO YOU WANT YOUR SHIPS TO BE AUTOMATICLLY GENERATED (Y/N)?\n>>>')

        if generate.upper() == 'Y':
            Generate_ships(o_ships)
            Update_grid(players2_grid, o_ships)
            break
        if generate.upper() == 'N':
            Place_ship(o_ships, players2_grid)
            break
        Clear_terminal()
        print('invalid anwser. try again')

    while True:
        
        for i in range(0, len(oponents2_grid)):
            for y in range(0, len(oponents2_grid[i])):
                if oponents2_grid[i][y] == 'X' or oponents2_grid[i][y] == 'O':
                    players_grid[i][y] = oponents2_grid[i][y]
        Clear_terminal()
        input('PLAYER 1:\npress enter key to unlock')
        print('SHOOTING GRID')
        Printgrid(oponents_grid)
        print('\n\n\nYOUR GRID')
        Printgrid(players_grid)
        if Shoot(o_ships, oponents_grid) == True:
             Clear_terminal()
             print('PLAYER1 WINS!!!')
             break

        for i in range(0, len(oponents_grid)):
            for y in range(0, len(oponents_grid[i])):
                if oponents_grid[i][y] == 'X' or oponents_grid[i][y] == 'O':
                    players2_grid[i][y] = oponents_grid[i][y]
        Clear_terminal()
        input('PLAYER 2:\npress any key to unlock')
        print('SHOOTING GRID')
        Printgrid(oponents2_grid)
        print('\n\n\nYOUR GRID')
        Printgrid(players2_grid)
        if Shoot(ships, oponents2_grid) == True:
             Clear_terminal()
             print('PLAYER2 WINS!!!')
             break

'''def Save():
    global save_list
    
    while True:
        want_save = input('DO YOU WANT TO SAVE (Y/N)?\n>>>')
        
        if want_save.upper() == 'Y':
            with open('save.txt', "w") as plik:
                for lista_wewnetrzna in save_list:
                    for lista in lista_wewnetrzna:
                        for a in lista:
                            plik.write(a)
                        plik.write('\n')
            break
        if want_save.upper() == 'N':
            break
        Clear_terminal()
        print('invalid anwser. try again')'''



while True:
    Clear_terminal()
    x = int(Menu())
    if x == 1:
        QUICKPLAY()
        break
    if x == 2:
        PVP()
        break