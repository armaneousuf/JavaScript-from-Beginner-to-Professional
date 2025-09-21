/* Miles-to-kilometers converter
Create a variable that contains a value in miles, convert it to kilometers, and log the
value in kilometers in the following format:
* The distance of 130 kms is equal to 209.2142 miles *
For reference, 1 mile equals 1.60934 kilometers. */

let miles = 130;
let kilometers = miles * 1.60934;
console.log(`The distance of ${miles} miles is equal to ${kilometers.toFixed(2)} kilometers`);
