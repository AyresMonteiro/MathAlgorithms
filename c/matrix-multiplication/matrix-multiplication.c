#include <time.h>
#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

void handleRandSeed() {
    static bool isSeeded = false;

    if(!isSeeded) {
        srand(time(NULL));

        isSeeded = true;
    }
}

double generateRandomDouble(double min, double max) {
    handleRandSeed();

    double range = max - min;
    double proportion = RAND_MAX / range;
    double generated = rand() / proportion + min;

    return generated;
}

double * generateDoubleVector(int size) {
    double * newVector = calloc(size, sizeof(double));

    return newVector;
}

double ** generateDoubleMatrix(int lines, int columns) {
    double ** newMatrix = calloc(lines, sizeof(double *));

    for (int i = 0; i < lines; i++) {
        newMatrix[i] = generateDoubleVector(columns);
    }

    return newMatrix;
}

double ** generateDoubleUnitMatrix(int order) {
    double ** newUnitMatrix = generateDoubleMatrix(order, order);

    for (int i = 0; i < order; i++) {
        newUnitMatrix[i][i] = 1;
    }

    return newUnitMatrix;
}

double ** generateRandomDoubleMatrix(int lines, int columns, double min, double max) {
    double ** newRandomMatrix = generateDoubleMatrix(lines, columns);

    for(int i = 0; i < lines; i++) {
        for(int j = 0; j < columns; j++) {
            newRandomMatrix[i][j] = generateRandomDouble(min, max);
        }
    }

    return newRandomMatrix;
}

double multiplyLineByColumn (
    double ** matrix0, double ** matrix1,
    int dimension, int line, int column
) {
    double total = 0.0;

    for (int i = 0; i < dimension; i++) {
        total += matrix0[line][i] * matrix1[i][column];
    }

    return total;
}

double ** multiplyDoubleMatrixes(
    double ** matrix0, double ** matrix1,
    int lines0, int columns0,
    int lines1, int columns1
) {
        if(columns0 != lines1) {
            return NULL;
        }

        double ** resultMatrix = generateDoubleMatrix(lines0, columns1);

        for (int i = 0; i < lines0; i++) {
            for (int j = 0; j < columns1; j++) {
                resultMatrix[i][j] = multiplyLineByColumn(matrix0, matrix1, columns0, i, j);
            }
        }

        return resultMatrix;
}

void printDoubleMatrix(double ** matrix, int lines, int columns) {
    for (int i = 0; i < lines; i++) {
        for (int j = 0; j < columns; j++) {
            printf("%f\t", matrix[i][j]);
        }

        putchar('\n');
    }
}

void freeDoubleMatrix(double ** matrix, int lines) {
    for (int i = 0; i < lines; i++) {
        free(matrix[i]);
    }

    free(matrix);
}
