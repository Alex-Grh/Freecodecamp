/*
Catch Misspelled Variable and Function Names
The console.log() and typeof methods are the two primary ways to check intermediate values and types of program output. Now it's time to get into the common forms that bugs take. One syntax-level issue that fast typers can commiserate with is the humble spelling error.

Transposed, missing, or mis-capitalized characters in a variable or function name will have the browser looking for an object that doesn't exist - and complain in the form of a reference error. JavaScript variable and function names are case-sensitive.

Fix the two spelling errors in the code so the netWorkingCapital calculation works.

Tests
Waiting:Check the spelling of the two variables used in the netWorkingCapital calculation, the console output should show that "Net working capital is: 2".
Waiting:There should be no instances of mis-spelled variables in the code.
Waiting:The receivables variable should be declared and used properly in the code.
Waiting:There should be no instances of mis-spelled variables in the code.
Waiting:The payables variable should be declared and used properly in the code.
*/

let receivables = 10;
let payables = 8;
let netWorkingCapital = receivables - payables;
console.log(`Net working capital is: ${netWorkingCapital}`);