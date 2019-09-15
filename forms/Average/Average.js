/*
Create a new project named fixIt6ExtraXPYourNames for this work.  You can do this yourself or with your partner from Fixit 6. 

Create a new form named Average. Store these ten numbers in an array: 
           34, 56, 117, 324, 183, 231, 72, 111, -10, 207. 

Let the user chose whether they want to sum up or average the numbers. Have the program output their answer to a popup. 
The popup should use this format: 
      The sum of the 10 numbers is X. 

Use GH to store the original master, then do your work on a new branch. 
Save the branch to GH.com and when the program is complete, merge the branch with the master. 

*/

var numbers = new Array (34, 56, 117, 324, 183, 231, 72, 111, -10, 207);
var count = numbers.length;
var choice = prompt('Enter sum or average');
var sum = numbers[0]+numbers[1]+numbers[2]+numbers[3]+numbers[4]+numbers[5]+numbers[6]+numbers[7]+numbers[8]+numbers[9]

if (choice == 'sum'){
  message = 1;

} else if (choice == 'average') {
  message = 2;
  
} else {
  message = 3;
}
  
switch (message) {
case 1:
  alert(`The sum of the ${count} numbers is ${sum}`);
  break;
case 2:
  alert(`The average of the ${count} number is ${sum/count}`);
  break;
case 3:
  alert('Error');
  break;
}
