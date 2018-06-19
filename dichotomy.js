// 二分法查找
// 二分法使用的前提是数组的有序
function getLocation(target, arr, start1, end1) {
  let start = start1 || 0;
  let end = end1 || arr.length - 1;
  let mid = parseInt((start + end) / 2);
  console.log(1);
  if (target === arr[mid]) {
    return mid;
  } else if (target > arr[mid]) {
    return getLocation(target, arr, mid + 1, end);
  } else if (target < arr[mid]) {
    return getLocation(target, arr, start, mid - 1);
  }

  return null;
}
console.log(getLocation(7, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))