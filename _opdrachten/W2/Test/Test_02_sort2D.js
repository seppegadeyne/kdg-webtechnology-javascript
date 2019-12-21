let arr = [[12, 'AAA'], [12, 'BBB'], [12, 'CCC'],[28, 'DDD'], [18, 'CCC'],[12, 'DDD'],[18, 'CCC'],[28, 'CCC'],[28, 'DDD'],[58, 'BBB'],[68, 'BBB'],[78, 'BBB']];
arr.sort(function (element_a, element_b) {
// sort on first column
    if ( +element_a[0] === +element_b[0] ) {
// sort on second column
        return element_a[1].localeCompare(element_b[1]);
    }
    return element_a[0] - element_b[0];
});

console.log(arr);
