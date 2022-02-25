def imprime_matriz(matrix):
    line_count = 0
    for line in matrix:
        column_count = 0
        for column in range(len(line)):
            column_count += 1
        line_count += 1

    print(f'{line_count}x{column_count}')