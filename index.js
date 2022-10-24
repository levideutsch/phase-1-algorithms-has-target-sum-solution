function hasTargetSum(array, target) {
  // Create an object to keep track of number we have already seen
  const seenNumbers = {}

  for (const number of array) {
    const compliment = target - number

    // Check if any key in our object is the compliment
    if (compliment in seenNumbers) return true 

    // Otherwise add add that number to our object
    seenNumbers[number] = true
  }
  // If we reach to the end of the array and found no mathcing numbers then..
  return false 


  // // Itirate through each number of the array 
  // for (let i = 0; i < array.length; i++) { // n steps
  // // For the current number, identify a compliment that adds to the targeted number 
  //   const compliment = target - array[i]
  // // Itirate through the rest of the array 
  // for (let j = i + 1; j < array.length; j++) { // n * n steps 
  // // Check if any number is our compliment. if so return true
  // if (array[j] === compliment) return true 

  //   }
  // }
  // // If not, then return false 
  // return false 
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
