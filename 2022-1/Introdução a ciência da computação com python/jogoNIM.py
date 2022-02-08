def partida():
    print("Boas vindas ao jogo NIM!")
    n = int(input("Quantas peças terá o jogo? "))
    m = int(input("Qual será a jogada máxima? "))

    if (n % m + 1 == 0):
        print("Pode jogar primeiro! ")
        usuario_escolhe_jogada(n, m)

    win = False
    while not win:

        n = computador_escolhe_jogada(n, m)
        n = usuario_escolhe_jogada(n, m)
        

def computador_escolhe_jogada(n, m):
    print("Vez do computador! \n")
    if n == 0:
        return "lose"

    else:
        pecas_removidas = n % m + 1
        pecas_restantes = n - (n % m + 1)
        print(f'Peças removidas pelo computador: {pecas_removidas} \n Peças restantes: {pecas_restantes} \n')
        return pecas_restantes

def usuario_escolhe_jogada(n, m):
    print("Sua vez! \n")
    pecas_removidas =  int(input("Quantas peças quer retirar? "))
