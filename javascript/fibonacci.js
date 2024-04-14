function fibonacci(num) {
  const fibo = [0, 1];
  if (num === 0) {
    console.log(fibo[0]);
    return fibo[0];
  } else if (num === 1) {
    console.log(fibo[1]);
    return fibo[1];
  } else {
    for (let i = 2; i < num + 1; i++) {
      let number = fibo[i - 1] + fibo[i - 2];
      fibo.push(number);
    }
    console.log(fibo);
    console.log(fibo[num]);
    return fibo[num];
  }
}


//explanation:
//set the first 2 digits as they are constant already
//perform a for loop and start at index 2. the logic of the for loop is to add fibo[i-1] and fibo[i-2], which are the last two digits of the array basically. Push the sum to the array (on the last part of the array). and then return fibo[num], which is the number we are looking for; num being the input index. 

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));

}

module.exports = fibonacci;

// Please add your pseudocode to this file
// And a written explanation of your solution
