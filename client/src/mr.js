const nums = [1, 3, 192, 384, 29, 2903, 4820, 6];

const meetCriteria = (arr, test) => {
  return arr
    .map((elem) => (test(elem) ? 1 : 0))
    .reduce((prev, curr) => prev + curr);
};

const biggerThan = (x) => (val) => val > x;

console.log(meetCriteria(nums, biggerThan(2000)));
