let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

let allMatches = (wordArr, reg) => {
 return wordArr.filter(word => (reg.test(word) === true)); 
   
}

allMatches(words, /lab/);