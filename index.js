let theBeatlesPlay = (musicians, instruments) => {
  let array = [];
  for (let i = 0; i < musicians.length; i++) {
    let person = musicians[i];
    array.push(person + ' plays' + ' ' + instruments[i]);
  }
  
  return array;
}


let johnLennonFacts = facts => {
  let array = [];
  let i = 0
 
  while (i < facts.length) {
    let str = facts[i];
    array.push(str + `!!!`);
    
  } i++;
  
  return array;
}
