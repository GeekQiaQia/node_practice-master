/**
 * 快速排序  基准点  递归；
 * 
*/

function quickSort(arr){
    if(arr.length<2){
        return arr;
    }
    let middleIndex=Math.floor(arr.length/2);
    let middleArr=arr.splice(middleIndex,1);
    let middleVal=middleArr[0];
    const left=[];
    const right=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i]<=middleVal){
            left.push(arr[i]);
        }else{
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat(middleVal,quickSort(right));
}
nlogn


/**
 * 
 * 冒泡排序；
 * 
*/

Array.prototype.bubbleSort=function(){
    let arr=this;
    let len=arr.length;
    for(let outer=len;outer>=2;outer--){
        for(let inner=0;inner<outer-1;i++){
            if(arr[inner]>arr[inner+1]){
                [arr[inner],arr[inner+1]]=[arr[inner+1],arr[inner]]
            }
        }
    }
    return arr;
}

// better version;
function bubbleSort(arr){
let low=0;
let heigh=arr.length-1;
let j=null;
while(low<heigh){
    for(j=low;j<heigh;j++){
        if(arr[j]>arr[j+1]){
            [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
        }

    }
    --heigh;
    for(j=height;j>low;j--){
        if(arr[j]<arr[j-1]){
            [arr[j],arr[j-1]]=[arr[j-1],arr[j]]
        }
    }
    ++low;
}
return arr;
}

// function bubbleSort(arr){
//     let low=0;
//     let height=arr.length;
//     let j=null;
//     while(low<height){
//         for(j=low;j<height;j++){
//             if(arr[j]>arr[j+1]){
//                 [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
//             }
//         }
//         --height;
//         for(j=height;j>low;j--){
//             if(arr[j]<arr[j-1]){
//               [arr[j],arr[j-1]]=[arr[j-1],arr[j]]
//             }
//         }
//     }
// }

/**
 * 
 *  选择排序
 * 
*/

Array.prototype.selectSort=function(){
    let arr=this,len=arr.length;
    for(let outer=0;outer<len;outer++){
        for(let inner=outer;inner<len;inner++){
            if(arr[outer]>arr[inner]){
                [arr[outer],arr[inner]]=[arr[inner],arr[outer]]
            }

        }
    }
    return arr;
}