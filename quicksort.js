/*
 * @Author: Blink 
 * @Date: 2018-06-17 15:52:35 
 * @Last Modified by: Blink
 * @Last Modified time: 2018-06-17 18:03:11
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
    return params.pop()+sum(params);
  }
}
console.time();//2s左右
console.log(sum([1, 2, 3,4,5,6,7,8,9,0,11,12,13,14,12,4,5,6,7,7,2]));
console.timeEnd();

console.time('1');
var sum1 = 0;//0.03s左右 for循环效率很高啊
var params =[1, 2, 3,4,5,6,7,8,9,0,11,12,13,14,12,4,5,6,7,7,2]; 
for (let i = 0; i < params.length; i++) {
  sum1 += params[i];
}

console.timeEnd('1');

console.time('map')//时间在0。04ms左右 map效率要略低于基础for循环
var sum2 = 0;
params.map((x) => {
    sum2+=x;
})
console.timeEnd('map');


//快速排序
//默认数组第一个为基准值
function name(params) {
    
}