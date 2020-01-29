let evenOrodd = (number) => {
  if (Number.isInteger(number)) {     // Best way to define(!Number.isInteger(number)) console.log('Number is not integer');
    if (number % 2 === 0) {           
      console.log('even');
    } else {
      console.log('odd');
    };
  } else {
console.log('Number is not even');
return;
  };
};

evenOrodd(8);

