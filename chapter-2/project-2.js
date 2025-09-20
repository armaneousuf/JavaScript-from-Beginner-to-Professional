/* BMI calculator
Set values for height in inches and weight in pounds, then convert the values to
centimeters and kilos, outputting the results to the console:
* 1 inch is equal to 2.54 cm
* 2.2046 pounds is equal to 1 kilo
Output the results. Then, calculate and log the BMI: this is equal to weight (in kilos)
divided by squared height (in meters). Output the results to the console. */

const heightInches = 70;
const weightPounds = 150;

const heightCm = heightInches * 2.54;
const weightKg = weightPounds / 2.2046;

console.log(heightCm, weightKg);

const heightMeters = heightCm / 100; 

const BMI = weightKg / (heightMeters * heightMeters);
console.log(BMI);
