
function interSect(arr1,arr2){
    let temp1=[...new Set(arr1.slice(0))]
    let temp2=[...new Set(arr2.slice(0))];

    return temp1.filter((item)=>{
       return temp2.includes(item) 
    });

}

let result=interSect([1,2,3,4,5],[5,4,3,6,7]);
console.log(result);


function interSect2(arr1,arr2){
    let temp1=new Set(arr1.slice(0));
    let temp2=new Set(arr2.slice(0));
    
   let result= [...temp1].filter((item)=>{
       return temp2.has(item) 
    });

    return [...result]

}


let result2=interSect2([1,2,3,4,5],[5,4,3,6,7]);
console.log(result2);