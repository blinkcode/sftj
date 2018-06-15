/*
 * @Author: lihongliang 
 * @Date: 2018-06-15 17:09:40 
 * @Last Modified by: lihongliang
 * @Last Modified time: 2018-06-15 18:00:01
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
  console.log(num);
  if(num<=0){
    return
  }else{
    return countDown(num-1);
  }
}
countDown(10)
