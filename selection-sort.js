/** 
 * 选择排序
 * @description 返回数组最小项索引
 * @returns {number} 返回数组最小项的索引 
*/
function getSmallest(arr) {
  let small = arr[0];
  let smallIndex = 0;
  arr.map((item, index) => {
    if (small > item) {
      small = item;
      smallIndex = index;
    }
  })
  return smallIndex
}

/**
 *
 *
 * @param {Array} arr 需要排序的数组
 * @returns 返回排序后的数组
 */
function selectionSort(arr) {
  let newArr = [];
  let sortArr = [...arr];
  arr.map(() => {
    let small = getSmallest(sortArr);
    // 每确定最小一项 则删除一项 可以降低到 n/2 ?
    newArr.push(sortArr.splice(small, 1).pop());
  })

  return newArr;
}
console.time();
console.log(selectionSort([5,4,3,6,9,11,30,22,9,11,22,33,55,15,72,81,98,91,100,43,24,54,23,65,10,1]))
// 大O为n^2 计算时间在14毫秒左右
console.timeEnd();


console.time();
var arr = [5,4,3,6,9,11,30,22,9,11,22,33,55,15,72,81,98,91,100,43,24,54,23,65,10,1];
arr.sort((a,b) => {
  return a-b;
})
// 自带排序时间为7毫秒左右
console.timeEnd()
/** 
 * 由于我不会写markdown 还是把东西写在这把
 * 算法图解第二章讲解了主要是数组和链表的区别和应用，但最后留题还有选择排序的关联到底是
 * 什么，为什么要把链表放在这个地方来讲 还是看不太明白
 * 
*/