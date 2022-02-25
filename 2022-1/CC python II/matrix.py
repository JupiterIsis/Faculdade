from multiprocessing.connection import wait


print("Create a matrix!")




def create_matrix(col_num, line_num):
    matrix = []

    # creates lines
    for i in range(line_num):
        line = []
        # creates columns
        for j in range(col_num):
            value = int(input(f'Digite o elemento em [{i}][{j}]: '))
            line.append(value)
        matrix.append(line)
    return matrix

def input_matrix():
    cols = int(input("Number of columns:"))
    lines = int(input("Number of lines:"))

    return create_matrix(cols, lines)

def read_dimensions(matrix):
    line_count = 0
    for line in matrix:
        column_count = 0
        for column in range(len(line)):
            column_count += 1
        line_count += 1

    print(f'{line_count}x{column_count}')


def matrix_sum(matrix1, matrix2):
    if read_dimensions(matrix1) != read_dimensions(matrix2):
        return False
    
    result_matrix = []
    for line_num, line in enumerate(matrix1):
        result_line = []
        for col_num, col in enumerate(line):
            result_col = matrix1[line_num][col_num] * matrix2[line_num][col_num]
            result_line.append(result_col)
        result_matrix.append(result_line)

    return True

matrix_sum([[2,3,4],[5,6,7],[8,9,10]],[[11,12,13],[14,15,16],[17,18,19]])





