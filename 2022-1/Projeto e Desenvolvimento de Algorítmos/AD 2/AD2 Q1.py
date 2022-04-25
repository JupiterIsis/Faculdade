
model_entry = [
"R 12 1",
"R 23 3",
"R 45 6",
"E 45 7",
"R 45 8",
"E 23 9",
"R 23 10",
"E 23 12",
"R 34 13",
"E 12 14",
"E 34 15"]

def pedidos_pizzaria(entries):
    pedidos = {}
    for entry in entries:
        entry = entry.strip()
        classifier, orderN, time = entry.split(" ")[0], entry.split(" ")[1], int(entry.split(" ")[2])

        if orderN not in pedidos: 
            pedidos[orderN] = []
        pedidos[orderN].append([classifier, time])
    
    pedidos = dict(sorted(pedidos.items()))

    for num_pedido, lista_pedidos in pedidos.items():
        R = 0
        E = 0
        if lista_pedidos[-1][0] == "R":
            print(num_pedido, "-1")
            continue
        for pedido in lista_pedidos:    
            if pedido[0] == "R":
                R += pedido[1] 
            else: 
                E += pedido[1]
        print(num_pedido, (E - R))


if __name__ == "__main__":
    entrada = input("Insira os seus pedidos, separados por vírgula: \n").split(",")
    pedidos_pizzaria(entrada)