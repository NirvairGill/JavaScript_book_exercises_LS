let counter = 0;

while (counter = 1) {             // On line 3: The counter is getting reassigned value 1 every time JavaScript re-evaluates the conditional expression.  
  console.log(counter);
  counter += 1;

  if (counter > 2) {
    break;
  }
}