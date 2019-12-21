let arr = [[12, 'AAA', 10], [12, 'BBB', 9], [12, 'CCC', 8], [28, 'DDD', 7], [18, 'CCC', 6], [12, 'DDD', 5], [18, 'CCC', 4], [28, 'CCC', 3], [28, 'DDD', 2], [58, 'BBB', 1], [68, 'BBB', 0]];
arr.sort(function (element_a, element_b) {
// sort on first column
  if (+element_a[0] === +element_b[0]) {
// sort on second column
    if (element_a[1] = element_b[1]) {
// sort on third column
      return element_a[2] - element_b[2];
    }
    return element_a[1].localeCompare(element_b[1]);
  }
  return element_a[0] - element_b[0];
});

console.log(arr);
