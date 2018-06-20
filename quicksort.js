/*
 * @Author: Blink 
 * @Date: 2018-06-17 15:52:35 
 * @Last Modified by: lihongliang
 * @Last Modified time: 2018-06-20 13:59:52
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
//使用高阶函数的效率小明显低于普通for循环，在写基础算法时
function quickSort(array) {
  if (array.length < 2) {
    return array; //基础条件：为空或只包含一个元素的数组是有序的；
  } else {
    let flag = array[0]; //递归条件
    array.splice(0, 1);//数组循环的时候需要去掉递归条件 否则会内存溢出 这个地方我在phython语言中没有注意到
    let smallArray = array.filter(x => {
      return x < flag;
      // console.log(x);
    });
    let largeArray = array.filter(x => {
      return x > flag;
    });
    // console.log(smallArray,largeArray);
    return quickSort(smallArray) + [flag] + quickSort(largeArray);//最终结果没有做处理
  }
}

console.log(quickSort([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 11, 12, 13, 14, 12, 4, 5, 6, 7, 7, 2]));
/** 
 * 本章总结（摘录）
 * 1.D&C问题是将问题逐步分解，使用D&C处理列表时，基线条件很可能是一个空数组或者只包含一个元素的数组
 * 2.选择快速排序时，请随机的选择用作基准值的元素，快速排序平均运行时间为O(nlogn)
 * 3.大O表示法中的常量有时事关重大，这就是快速排序比选择排序快的原因所在
 * 4.比较简单查找和二分法查找时，常量几乎无关紧要，因为列表很长时，O(logn)的速度比O(n)快得多
 * 个人想法：
 * 1.快速排序是的速度是一个平均值，
 * 2.这个随机作为基准值如何随机才能做到随机（阮一峰直接取值为length/2,网上有些人不合理）；
 * 3.有机会需要把算法图解看3遍  对于前端来说 搞得清基础算法还是相对困难些的
 * 
*/
