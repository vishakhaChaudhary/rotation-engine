/**
 * Class BaseHelper to calculate the final output
 */
class BaseHelper {
  constructor() {}

  /**
   * Method to convert the array into 2D Array
   * @param {Array} originalArr array
   * @param {Number} n size of the array
   * @returns {Array} twoDArray Two Dimensional Array
   */
  convertArrayInto2D = (originalArr, n) => {
    let k = 0;
    let twoDArray = new Array(n);

    for (let i = 0; i < n; i++) {
      twoDArray[i] = [];
      for (let j = 0; j < n; j++) {
        twoDArray[i][j] = originalArr[k];
        k++;
      }
    }
    return twoDArray;
  };

  /**
   * Method to check the valid or invalid array
   * @param {Number} n length of the array
   * @returns {Boolean} true/false
   */
  isSquare = (n) => n > 0 && Math.sqrt(n) % 1 === 0;

  /**
   * Method to return the rotated array/tabels
   * @param {Array} matrix 2D Array
   * @param {Number} size length of the matrix
   * @returns {Array} newArray Rotated tables
   */
  finalOutput = (matrix, size) => {
    let newArray = [];
    for (let i = 0; i < size; i++) {
      newArray = [...newArray, ...matrix[i]];
    }

    return newArray;
  };

  /**
   * Method to rotate the matrix
   * @param {Array} matrix 2D Array
   * @param {Number} size size of the 2D array
   */
  rotateMatrix = (matrix, size) => {
    let rowSize = size,
      colSize = size;
    let row = 0,
      col = 0;
    let prev, curr;

    while (row < rowSize && col < colSize) {
      if (row + 1 == rowSize || col + 1 == colSize) break;

      /* Store the first element of next row, this element will replace first element of current row */
      prev = matrix[row + 1][col];

      /* Move elements of first row from the remaining rows */
      for (let i = col; i < colSize; i++) {
        curr = matrix[row][i];
        matrix[row][i] = prev;
        prev = curr;
      }
      row++;

      /* Move elements of last column from the remaining columns */
      for (let i = row; i < rowSize; i++) {
        curr = matrix[i][colSize - 1];
        matrix[i][colSize - 1] = prev;
        prev = curr;
      }
      colSize--;

      /* Move elements of last row from the remaining rows */
      if (row < rowSize) {
        for (let i = colSize - 1; i >= col; i--) {
          curr = matrix[rowSize - 1][i];
          matrix[rowSize - 1][i] = prev;
          prev = curr;
        }
      }
      rowSize--;

      /* Move elements of first column from the remaining rows */
      if (col < colSize) {
        for (let i = rowSize - 1; i >= row; i--) {
          curr = matrix[i][col];
          matrix[i][col] = prev;
          prev = curr;
        }
      }
      col++;
    }

    return this.finalOutput(matrix, size);
  };

  /**
   * Method to calculate the valid and rotated tabels
   * @param {Array} array
   * @param {String} id
   * @returns {Object} the final result
   */
  rotationEngine = (id, array) => {
    let isValid = true;
    let finalOutput = [];

    if (!this.isSquare(array.length)) {
      return {
        isValid: false,
        json: finalOutput,
        id,
      };
    }

    const arrSqrt = Math.sqrt(array.length);

    const twoDArray = this.convertArrayInto2D(array, arrSqrt);

    finalOutput = this.rotateMatrix(twoDArray, arrSqrt);

    return {
      id,
      json: finalOutput,
      isValid,
    };
  };
}

export default new BaseHelper();
