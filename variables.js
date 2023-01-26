// Activity: 1
//let myName = "Maria";
//let myAge = 23;
//let favColor = "green";
//console.log (`My name is ${myName}.My age is ${myAge}and my favourite color is ${favColor}`)
//myName = "Tom";
//myAge  = 31;
//favColor = "blue";
//console.log (`My name is ${myName}.My age is ${myAge}and my favourite color is ${favColor}`)

// Activity: 2

//let Breakfast = "Sandwich";
//let Lunch = "Fish curry";
//let Dinner = "pizza";
//console.log (`Today I have eaten ${Breakfast} in breakfast.${Lunch} in lunch and ${Dinner} in dinner`)
//Breakfast = "baked Potatoes";
//Lunch = "Broast";
//Dinner = "steak";
//console.log (`Tomorrow I will eat ${Breakfast} in breakfast.${Lunch} in lunch and ${Dinner} in dinner`)

// Activity: 3


//let todaysDate = new Date().getTime() // gets todays date and turns it into a milliseconds format
//let birthday = new Date(`05 January ${new Date().getFullYear()}`).getTime() // gets Birthday from current year and turns it into a milliseconds format

// finds the difference between todays date and birthday and converts it from milliseconds to days
//let dateDifference = Math.ceil((birthday - todaysDate)/(1000 * 60 * 60 * 24))

// checks to see if birthday this year has passed
//if(dateDifference < 0){
    // update birthday to next year and calculate difference again
   // birthday = new Date(`05 January ${new Date().getFullYear() + 1}`).getTime()
   // dateDifference = Math.ceil((birthday - todaysDate)/(1000 * 60 * 60 * 24))  
//}
// console.log how many days until next birthday
//console.log(`My birthday is in ${dateDifference} days`)