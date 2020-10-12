/**
 * 
*/
function mergeSort(arr){
    let len=arr.length;
    if(len<2){
        return arr;
    }
    let middle=Math.floor(len/2);
    let left=arr.slice(0,middle);
    let right=arr.slice(middle);
    return merge(mergeSort(left),mergeSort(right));
}


function merge(left,right){
    let result=[];
    while(left.length&&right.length){
        if(left[0]<=right[0]){
            result.push(left.shift());
        }else{
            result.push(right.shift());
        }
    }
    while(left.length){
        result.push(left.shift());
    }
    while(right.length){
        result.push(right.shift());
    }
    return result;
}

function mergeArr(arr1,arr2){
    let i=0,j=0;
    const result=[];
    const len1=arr1.length;
    const len2=arr2.length;
    while(i<len1&&j<len2){
        if(arr1[i]<arr2[j]){
            result.push(arr1[i]);
            i++
        }else{
            result.push(arr2[j]);
            j++
        }
    }
    if(i<len1){
       return  result.concat(arr1.slice(i));
    }else{
       return  result.concat(arr2.slice(j));
    }
   
}

let result=mergeSort([9,23,33,21,66,78,98,32,45]);
console.log(result);//[ 9, 21, 23, 32, 33, 45, 66, 78, 98 ]

function flatten(arr){
    return arr.reduce((pre,cur) =>{
        return pre.concat(Array.isArray(cur)?flatten(cur):cur); 
    },[]);
}

let arr2=[[1,2,4],[2,3,7],[3,5,7],[4,5,8]]

let flattenArr=flatten(arr2);
let result2=mergeSort(flattenArr);
console.log(result2);

// arr2.flat(); es6;
