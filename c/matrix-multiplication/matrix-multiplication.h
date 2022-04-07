void handleRandSeed();

double generateRandomDouble(double min, double max);

double * generateDoubleVector(int size);

double ** generateDoubleMatrix(int lines, int columns);

double ** generateDoubleUnitMatrix(int order);

double ** generateRandomDoubleMatrix(int lines, int columns, double min, double max);

double multiplyLineByColumn (
    double ** matrix0,
    double ** matrix1,
    int dimension,
    int line,
    int column
);

double ** multiplyDoubleMatrixes(
    double ** matrix0,
    double ** matrix1,
    int lines0,
    int columns0,
    int lines1,
    int columns1
);

void printDoubleMatrix(double ** matrix, int lines, int columns);

void freeDoubleMatrix(double ** matrix, int lines);
