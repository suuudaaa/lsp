// 阶乘算法
var f = function (x) {
  if (x === 1) {
      return 1;
  } else {
      return x * f(x - 1);
  }
};
function fn(n) {
  if(n === 1) {
      return 1;
  }else{
      return n*fn(n-1);
  }
}

console.log(fn(10));
console.log(f(10));
// 阶乘算法2
var growRabbit = function(n) {
  if(n<2) {
      return n;
  }else{
      return growRabbit(n-1) + growRabbit(n-2);
  }
};
var start1 = new Date().getTime();
console.log(growRabbit(10));
var end1 = new Date().getTime();
console.log("===="+(end1-start1)+ "====");

// 斐波拉契数列扩展
var growRabbit2 = function(n) {
  var arr = [];
  for(var i = 0;i <= n;i++) {
      arr[i] = 0;
  }
  if(n == 1 || n ==2 ) {
      return 1;
  }else{
      arr[1] = 1;
      arr[2] = 2;
      for(var j = 3;j <= n;j++) {//循环将会从3到输入的参数之间进行遍历，将数组的每个元素赋值为前两个元素之和， 循环结束， 数组的最后一个元素值即为最终计算得到的斐波那契数值
          arr[j] = arr[j-1] + arr[j-2];
      }
      return arr[n-1];
  }
  //return arr[n-1];
};
var start2 = new Date().getTime();
console.log(growRabbit2(1000000));
var end2 = new Date().getTime();
console.log("===="+(end2-start2)+ "====");


// 迭代版本的斐波拉契
var growRabbit3 = function(n){
  var firstStep = 1;
  var secondStep = 1;
  var thirdStep = 1;

  for(var i = 2; i < n; i++){
      thirdStep = firstStep + secondStep;
      firstStep = secondStep;
      secondStep = thirdStep;
  }
  return thirdStep;
};
var start3 = new Date().getTime();
console.log(growRabbit3(1000000));
var end3 = new Date().getTime();
console.log("===="+(end3-start3)+ "====");//此种动态规划迭代版本的算法更加具有效率，同样第一百万的项数大概只有10毫秒的时间。来描述一下这种算法，大概想台阶一样，把所求的数比作一种台阶，前两个数之和就是第三个数依次迭代


