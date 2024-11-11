
function getDivisorsCount(number) {
    if (typeof number !== 'number' || !Number.isInteger(number) || number <= 0) {
      alert('число должно быть целым и больше нуля!');
      return NaN;
    }
  
    let count = 0;
    for (let i = 1; i <= number; i++) {
      if (number % i === 0) {
        count++;
      }
    }
    return count;
  }

  console.log(getDivisorsCount())
