import math

def delta(a, b, c):
    return b ** 2 - 4 * a * c

def calcular_raízes(a, b, c):
    if delta(a, b, c) == 0:
        raiz1 = -b /2 * a
        return(f'A única raíz é {raiz1}')
    if delta(a, b, c) < 0:
        return "Não há raízes"
    else:
        raiz1 = (-b + math.sqrt(delta(a, b, c))) / (2 * a)
        raiz2 = (-b - math.sqrt(delta(a, b, c))) / (2 * a)
        return f'As raízes encontradas foram {raiz1} e {raiz2}'
        
def main():
    a = float(input("digite o valor de a: "))
    b = float(input("digite o valor de b: "))
    c = float(input("digite o valot de c: "))

    print(calcular_raízes(a,b,c))
    input("Enter to close")

if __name__ == '__main__':
    main()

