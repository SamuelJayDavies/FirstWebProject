let input = 'turpentine and turtles';

const vowels = ['a', 'e', 'i', 'o', 'u'];

let resultArray = [];

for(let i = 0; i < input.length; i++){
  if(input[i]==='e' || input[i]==='u'){
    resultArray.push(input[i]);
  }
  // console.log(`i is `+ i);
  for(let j = 0; j < vowels.length; j++){
    //console.log(j);
    if(input[i] === vowels[j]){
      resultArray.push(input[i]);
    }
  }
}

console.log(resultArray)

let resultString = resultArray.join('');
resultString = resultString.toUpperCase();

console.log(resultString);