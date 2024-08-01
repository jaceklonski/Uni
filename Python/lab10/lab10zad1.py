try:
    x = 15/0
except NameError:
    print('NameError')
except ZeroDivisionError:
    print('ZeroDivisionError')
except ValueError:
    print('ValueError')
except IndexError:
    print('IndexError')
except FileNotFoundError:
    print('FileNotFoundError')
except FileExistsError:
    print('FileExistsError')
except TypeError:
    print('TypeError')
except AttributeError:
    print('AttributeError')
except KeyError:
    print('KeyError')
finally:
    print('pozdrawiam')
    