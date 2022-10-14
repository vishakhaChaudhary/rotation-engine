#### 1. Setting up your environment and Dependencies

Please install the NODE on the device. Also, NPM will be used to run any command from terminal to run the code.

To begin with, the following steps needs to followed:

1. Clone the code from the git repository, and open in any of the code editor

2. Run the command, to install all the dependencies
    ```
    npm install
    
    ```
3. For running the project, execute the command
   ```
   npm run start
   
   ```

4. To run the test script, execute the command
    ```
    npm run test

    ```

#### 2. Project Overview
Given a CSV file representing a series of tables, implement a rotation engine that parses, verifies and rotates each table, and finally outputs a CSV file with all valid and rotated tables

1. ### Input
The input will be a CSV file with the columns id and json. You can assume id to be a string and json to be a string (JSON encoded data).

```
id,json
1,"[1, 2, 3, 4, 5, 6, 7, 8, 9]"
2,"[40, 20, 90, 10]"
3,"[-5]"
9,"[2, -0]"
5,"[2, -5, -5]"
8,"[1, 1, 1, 1, 1]”

```

2. ### Output
The output should be a CSV-encoded series of rotated tables with the columns id, json and is_valid. The latter is an indicator of whether or not a given table is valid, if it is not, json should be an empty array.

```
id,json,is_valid
1,"[4, 1, 2, 7, 5, 3, 8, 9, 6]",true
2,"[90, 40, 10, 20]",true
3,"[-5]",true
9,"[]",false
5,"[]",false
8,”[]",false

```

#### 3. Files Overview
This project is created using node, npm, babel and jest during implementation of this solution.

 1. `index.js` - Main file which will execute the code with the csv data i.e. (input.csv) data.
 2. `utils.js` - The helper file which contains logic and generates the expected result.
 3. `savefile.js` - The file which saves the resulted response to the CSV file i.e. (output.csv)
 4. `utils.spec.js` - Executes test cases
 5. `mockdata.js` - Consist of mock valid and invalid rows
 6. `output.csv` - It stores the final output.
 7. `package.json` - Contains the installed dependencies
 8. `.babelrc` - Babel configuration file
 9. `jest.config.js`- Jest configuration file

