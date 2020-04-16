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
  let str = facts[i];
  
  while (array.length < facts.length) {
    
    array.push(str + `!!!`);
    
  } 
  
  return array;
}




