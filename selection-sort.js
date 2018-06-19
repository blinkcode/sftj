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
console.log(selectionSort([5, 4, 3, 6, 9, 11, 30, 22, 9, 11, 22, 33, 55, 15, 72, 81, 98, 91, 100, 43, 24, 54, 23, 65, 10, 1]))
// 大O为n^2 计算时间在14毫秒左右
console.timeEnd();


console.time();
var arr = [5, 4, 3, 6, 9, 11, 30, 22, 9, 11, 22, 33, 55, 15, 72, 81, 98, 91, 100, 43, 24, 54, 23, 65, 10, 1];
arr.sort((a, b) => {
  return a - b;
})
// 自带排序时间为7毫秒左右
console.timeEnd()
/** 
 * 第二章内容总结（抄录）：
 * 1.计算机内存犹如一个大抽屉
 * 2.需要存储多个元素时，可使用数组或链表
 * 3.数组的元素都要在一起
 * 4.链表的元素时分开的，其中每个元素都存储了下一个元素的地址
 * 5.数组的读取速度很快
 * 6.链表的插入和删除速度都很快
 * 7.在同一个数组中，所有元素的类型都必须相同，都为（init double类型）
 * 由于我不会写markdown 还是把东西写在这把
 * 算法图解第二章讲解了主要是数组和链表的区别和应用，但最后留题还有选择排序的关联到底是
 * 什么，为什么要把链表放在这个地方来讲 还是看不太明白
 * 
*/