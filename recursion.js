/*
 * @Author: lihongliang 
 * @Date: 2018-06-15 17:09:40 
 * @Last Modified by: Blink
 * @Last Modified time: 2018-06-17 13:00:41
 * @description:  递归算法
 */
/**
 *
 * @param {Array}
 */
// function getBox(params) {
//   var
// }

/**
 *
 * @description 简单计数器
 * @param {number} num //传入的数字
 * @returns 回调自己
 */
function countDown(num) {
  if (num <= 0) {
    return;
  } else {
    return countDown(num - 1);
  }
}
console.log(countDown(10));

// 阶乘（递归的经典用法）
function factorial(num) {
  if (num === 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}
console.log(factorial(3));
/** 
 * 第三章小结（摘录）
 * 1.递归指的是调用自己的函数
 * 2.每每个递归函数都有两个条件：基线条件和递归条件
 * 3.栈有两种操作，压入和弹出
 * 4.所有的函数调用都进入调用栈
 * 5.调用栈可能很长，这将调用大量的内存
 * 心得：
 * 1、关于栈的理解还是不到位，js中并没有栈这个概念
 * 2、可以直接理解为函数执行顺序的上下文
 * 3、递归的简单用法会使用，但是遇到相应的问题，对递归的理解并不是很深入
*/