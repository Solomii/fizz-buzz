function numbers() {
  let fizzBuzzString = "";
  for (let i = 1; i < 101; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      if (i % 3 == 0) {
        fizzBuzzString += "Fizz";
      }
      if (i % 5 == 0) {
        fizzBuzzString += "Buzz";
      }
      fizzBuzzString += " ";
    } else {
      fizzBuzzString += i + " ";
    }
  }
  document.write(fizzBuzzString);
}
numbers();
