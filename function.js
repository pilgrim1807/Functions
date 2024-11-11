
function getSumOfNumbers (number, type = "odd") {
    if (typeof number !== "number") {
      return NaN;
    }
  
    let sum = 0;
    for (let i = 0; i <= number; i++) {
      const thisIsEven = i % 2 === 0;
      const thisIsOdd = !thisIsEven;
      if (type === "") {
        sum += i;
      }  else if (thisIsOdd && type === "odd") {
        sum += i;
      } else if (thisIsEven && type === "even") {
        sum += i;
      }
  
    }
  
    return sum;
}
    console.log(getSumOfNumbers(65784, ""))
