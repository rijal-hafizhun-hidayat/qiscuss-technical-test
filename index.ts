const countDivisors = (valueN: number): Array<[]> => {
  let divisors = new Array(valueN + 1).fill(0);

  for (let i = 1; i <= valueN; i++) {
    for (let j = i; j <= valueN; j += i) {
      divisors[j]++;
    }
  }

  return divisors.slice(1);
};

const n: number = 8;
const result: Array<[]> = countDivisors(n);

console.log(result);
