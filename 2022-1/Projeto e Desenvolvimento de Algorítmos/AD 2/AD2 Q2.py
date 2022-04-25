def definir_media(media):
    media = media.strip().split(" ")
    
    if(len(media) <= 3 or len(media) >= 6):
        raise Exception("Média deve conter 4 ou 5 notas")

    AD1 = float(media[0])
    AP1 = float(media[1])
    AD2 = float(media[2])
    AP2 = float(media[3])

    N1 = ((AD1 * 2) + (AP1 * 8) )/ 10
    N2 = ((AD2 * 2) + (AP2 * 8) )/ 10

    if len(media) == 4:
        nota_final = (N1 + N2) / 2
    else:
        AP3 = float(media[4])

        if N1 >= N2:
            nota_final = (N1 + AP3) / 2
        else:
            nota_final = (N2 + AP3) / 2
    return(nota_final)
    

if __name__ == "__main__":
    medias = input("Insira as médias, separadas por vírgula: \n").split(",")
    for media in medias:
        print(definir_media(media))