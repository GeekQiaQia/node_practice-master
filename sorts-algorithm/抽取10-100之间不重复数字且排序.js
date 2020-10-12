/**
 * 
 * @description ：随机抽取10-100之间的10个且不重复的数字，存入一个数组；且排序；
 * 
 *  1、获取不重复的随机数的方法；
 *  2、获取数组；
 *  3、 排序；
 * 
*/

//way1:

function getRandomInter(){

const getRandom=(first,end)=>{
    return Math.floor(Math.random()*(end-first+1)+first);// [0,90]+10 加1 为了取到100；
}
let set =new Set(); // 私用Set(); 为了保证不重复；

while(set.size<10){
    set.add(getRandom(10,100));
}
let arr=[...set];
arr.sort((a,b)=>{
    return a-b;
});
}