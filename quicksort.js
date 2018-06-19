/*
 * @Author: Blink 
 * @Date: 2018-06-17 15:52:35 
 * @Last Modified by: Blink
 * @Last Modified time: 2018-06-19 23:07:24
 */
/**
 * @description     快速排序
 */

/**
 *
 *
 * @param {Array} params
 * @description  分而治之思想下的求和实现
 *  1.基线条件：数组长度为0
 *  2.循环条件：数组不为0
 *
 */
function sum(params) {
  if (params.length === 0) {
    return 0;
  } else {
    return params.pop() + sum(params);
  }
}
console.time(); //2s左右
console.log(
  sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 11, 12, 13, 14, 12, 4, 5, 6, 7, 7, 2])
);
console.timeEnd();

console.time("1");
var sum1 = 0; //0.03s左右 for循环效率很高啊
var params = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  0,
  11,
  12,
  13,
  14,
  12,
  4,
  5,
  6,
  7,
  7,
  2
];
for (var i = 0; i < params.length; i++) {
  sum1 += params[i];
}

console.timeEnd("1");

console.time("map"); //时间在0。04ms左右 map效率要略低于基础for循环
var sum2 = 0;
params.map(x => {
  sum2 += x;
});
console.timeEnd("map");

//快速排序 大O为n^2
//默认数组第一个为基准值
function quickSort(array) {
  if (array.length < 2) {
    return array; //基础条件：为空或只包含一个元素的数组是有序的；
  } else {
    let flag = array[0]; //递归条件
    array.splice(0,1);//数组循环的时候需要去掉递归条件 否则会内存溢出 这个地方我在phython语言中没有注意到
    let smallArray = array.filter(x => {
      return x < flag;
      // console.log(x);
    });
    let largeArray = array.filter(x => {
      return x > flag;
    });
    // console.log(smallArray,largeArray);
    return quickSort(smallArray) +[flag]+ quickSort(largeArray);//最终结果没有做处理
  }
}

console.log(quickSort([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 11, 12, 13, 14, 12, 4, 5, 6, 7, 7, 2]));
