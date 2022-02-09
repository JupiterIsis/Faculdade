def partida():
    n = int(input("Quantas peças terá o jogo? "))
    m = int(input("Qual será a jogada máxima? "))

    if (n % (m + 1) == 0):
        print("Pode jogar primeiro! ")
        usuario_escolhe_jogada(n, m)
        if n == 0:
            win = True
            print("Parabéns! Você ganhou!")
            return("u")


    win = False
    while not win:

        n = computador_escolhe_jogada(n, m)
        if n == 0:
            win = True
            print("Aww! Você perdeu!")
            return("c")
            

        n = usuario_escolhe_jogada(n, m)
        if n == 0:
            win = True
            print("Parabéns! Você ganhou!")
            return("u")
            
        

def computador_escolhe_jogada(n, m):
    print("Vez do computador! \n")
    if n == 0:
        return "lose"

    else:
        pecas_removidas = n % (m + 1)
        pecas_restantes = n - (n % (m + 1))
        print(f'Peças removidas pelo computador: {pecas_removidas} \nPeças restantes: {pecas_restantes} \n')
        return pecas_restantes

def usuario_escolhe_jogada(n, m):
    print("Sua vez! \n")
    pecas_removidas =  int(input("Quantas peças quer retirar? "))
    if pecas_removidas > 1 and pecas_removidas <= m:
        print("Removendo!")
        pecas_restantes = n - pecas_removidas
        print(f'Peças removidas por você: {pecas_removidas} \nPeças restantes: {pecas_restantes} \n')
        return(pecas_restantes)
    else:
        print("Opa! Escolha um valor entre 1 e a jogada máxima, por favor. \n")
        return usuario_escolhe_jogada(n, m)


def main():
    escolha = int(input("Boas vindas ao jogo NIM! Escolha:\n1 - para jogar uma partida isolada\n2 - para jogar um campeonato\n"))
    if escolha == 1: 
        partida()
    if escolha == 2:
        comp = 0
        human = 0

        print("***Rodada 1***")
        if partida() == "c":
            comp += 1
        else:
            human += 1

        print("***Rodada 2***")
        if partida() == "c":
            comp += 1
        else:
            human += 1

        print("***Rodada 3***")
        if partida() == "c":
            comp += 1
        else:
            human += 1

        input(f'Placar final: Jogador {human} vs Computador {comp}')



if __name__ == '__main__':
    main()
