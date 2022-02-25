def imprime_matriz(matrix):
    line_count = 0
    for line in matrix:
        column_count = 0
        for column in range(len(line)):
            column_count += 1
        line_count += 1

    print(f'{line_count}x{column_count}')
    
def sao_multiplicaveis(matrix1, matrix2):
    if imprime_matriz(matrix1) != imprime_matriz(matrix2):
        return False
    
    result_matrix = []
    for line_num, line in enumerate(matrix1):
        result_line = []
        for col_num, col in enumerate(line):
            result_col = matrix1[line_num][col_num] * matrix2[line_num][col_num]
            result_line.append(result_col)
        result_matrix.append(result_line)

    return True