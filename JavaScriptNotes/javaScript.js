const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14]
  ];
  
  const subarray = arr[3];
  console.log(subarray);
  const nestedSubarray = arr[3][0];
  console.log(nestedSubarray);
  const element = arr[3][0][1];
  console.log(element);

  