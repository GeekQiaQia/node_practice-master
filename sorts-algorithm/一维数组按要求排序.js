/**
 * @description 根据传入的参数n，重新对一维数组进行按距离n最近的顺序排序
 * 
*/

let arr=[7,28,-1,0,7,33]
function sort(arr,n){
    return arr.sort((a,b)=>{
        return Math.abs(a-n)-Math.abs(b-n);
    });
}