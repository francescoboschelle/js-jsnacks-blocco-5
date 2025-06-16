const nums = [2, 8, 4, 7, 12, 87];

// Crea un array a partire dall'array nums, che abbia solo i numeri pari
// Risultato: [2, 8, 4, 12]

const evenNumsArr = [];
nums.forEach((num) => {
  if (num % 2 === 0) {
    evenNumsArr.push(num);
  }
});

console.log(evenNumsArr);

const evenNumsMap = nums
  .map((num) => {
    if (num % 2 === 0) {
      return num;
    }
  })
  .filter((num) => num !== undefined);

console.log(evenNumsMap);

const evenNumsFilter = nums.filter((num) => num % 2 === 0);

console.log(evenNumsFilter);
