/**
 * @description 从无序，不重复的数组data中，取出n个数，使其相加和为sum；
 * 时间：O(N)
 * 空间：O(N)
 * 
*/

function getCombin(array,n,sum,temp){
    if(temp.length==n){
        if(temp.reduce((prev,cur)=>prev+cur)==sum){
            return temp;
        }
        return false;
    }
    for(let i=0;i<array.length;i++){
        const current=array.shift();
        temp.push(current);
        let result=getCombin(array,n,sum,temp);
        if(result){
            return result;
        }
        temp.pop();
        array.push(current);
    }
}