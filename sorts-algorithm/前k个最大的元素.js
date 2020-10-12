/**
 *  暴力全排
 * 
*/


let findk=function(arr,k){
    arr=arr.sort((a,b)=>{
        return b-a;
    });
    return arr[k-1];
}

/**
 * 
 * 冒泡半排；k;
 * 
*/

let findk=function(arr,k){
    for(let i=0;i<k;i++){ // 比较趟数
        for(let j=0;j<arr.length-1-i;j++){ // 冒泡比较，获取每次冒泡的最大值；
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
            }
        }
    }
    return arr[arr.length-k]
}

