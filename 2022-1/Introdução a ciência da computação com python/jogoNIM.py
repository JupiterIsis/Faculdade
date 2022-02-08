def partida():
    print("Boas vindas ao jogo NIM!")
    n = int(input("Quantas peças terá o jogo? "))
    m = int(input("Qual será a jogada máxima? "))

    if (n % m + 1 == 0):
        print("Pode jogar primeiro! ")
        usuario_escolhe_jogada(n, m)

    placar_cmp = 0
    placar_user = 0

    win = False
    while not win:

        n = computador_escolhe_jogada(n, m)
        if n == 0:
            win = True
            print("Aww! Você perdeu!")

        n = usuario_escolhe_jogada(n, m)
        if n == 0:
            win = True
            print("Parabéns! Você ganhou!")
        

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
    if pecas_removidas > 1 and pecas_removidas < m:
        print("Removendo!")
        pecas_restantes = n - pecas_removidas
        print(f'Peças removidas por você: {pecas_removidas} \n Peças restantes: {pecas_restantes} \n')
        return(pecas_restantes)
    else:
        print("Opa! Escolha um valor entre 1 e a jogada máxima, por favor. \n")
        pecas_removidas = usuario_escolhe_jogada()
