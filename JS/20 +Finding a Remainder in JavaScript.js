/* 
Finding a Remainder in JavaScript
The remainder operator % gives the remainder of the division of two numbers.

Example

5 % 2 = 1 because
Math.floor(5 / 2) = 2 (Quotient)
2 * 2 = 4
5 - 4 = 1 (Remainder)
Usage
In mathematics, a number can be checked to be even or odd by checking the remainder of the division of the number by 2.

17 % 2 = 1 (17 is Odd)
48 % 2 = 0 (48 is Even)
Note: The remainder operator is sometimes incorrectly referred to as the modulus operator. It is very similar to modulus, but does not work properly with negative numbers.

Set remainder equal to the remainder of 11 divided by 3 using the remainder (%) operator.

*/

const remainder = 11 % 3 ; //console.log(remainder); // 2
/*
11 % 3 = 2 because
Math.floor(11 / 3) = 3.66 (Quotient) Пишим целое число 3
3 * 3 = 9
11 - 9 = 2 (Remainder)
*/

// Разбор примера
/*
Вариант 1
17 % 2 = 1 (17 is Odd)
Math.floor(17 / 2) = 8 (Quotient) Пишим целое число 8
2 * 8 = 16
17 - 16 = 1 (Remainder)
Вариант 2
48 % 2 = 0 (48 is Even) 
Math.floor(48 / 2) = 24 (Quotient) Пишим целое число 24
2 * 24 = 48
48 - 48 = 0 (Remainder)
*/