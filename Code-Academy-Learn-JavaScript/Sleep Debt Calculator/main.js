const getSleepHours = day => {
  switch(day){
    case 'monday':
      return 6;
    case 'tuesday':
      return 7;
    case 'wednesday':
      return 6.3;
    case 'thursday':
      return 6.7;
    case 'friday':
      return 7.1;
    case 'saturday':
      return 7.4;
    case 'sunday':
      return 7.6;
  }
}

const getActualSleepHours = () => {
  return getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + 
  getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') +
  getSleepHours('sunday');
}

const getIdealSleepHours = () => {
  let idealHours = 6;
  return idealHours*7;
}

const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours();
  let sleepDiff = Math.round(idealSleepHours - actualSleepHours);
  
  if(actualSleepHours === idealSleepHours){
    console.log('You got the exact correct amount of sleep');
  } else if(actualSleepHours > idealSleepHours) {
    console.log(`You got more sleep than intended. You were ${sleepDiff} hours over the intended level`)
  } else {
      console.log(`You get less sleep than intended. You were ${sleepDiff} hours under the intended
      level`)
    }
  }

calculateSleepDebt();