let unique=function(arr){
    let res=[];
    for(let i=0;i<arr.length;i++){
        if(!res.includes(arr[i])){ // indexOf();
            res.push(arr[i]);
        }
    }
    return res;
}


//es6 ; new Set();
let unique=function(arr){
    return Array.from(new Set(arr));// [...new Set(arr)]
}


let unique=function(arr){
    let seen=new Map();
    let result=arr.filter(a=>!seen.has(a)&&seen.set(a,1));
    return result;
}