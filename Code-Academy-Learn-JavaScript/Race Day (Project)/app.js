let raceNumber = Math.floor(Math.random() * 1000);

let regEarly = true;
let runnerAge = 19;

if (runnerAge>18 && regEarly){
  raceNumber += 1000;
}

if (runnerAge>18 && regEarly){
  console.log(`You will race at 9:30am. Your race number is ${raceNumber}.`);
} else if (runnerAge>18 && !regEarly){
  console.log(`You will race at 11:00am. Your race number is ${raceNumber}.`);
} else if (runnerAge<18) {
  console.log(`You will race at 12:30pm. Your race number is ${raceNumber}.`);
} else {
  console.log('Please see the registration desk.');
}
