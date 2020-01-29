function scream(words) {
  words = words + '!!!!';
  return;
  console.log(words);
}

scream('Yipeee'); /* I think it will log nothing to the screen because we have explicitly defined return inside the function.When 
the program evaluates upto return it exits immediately */