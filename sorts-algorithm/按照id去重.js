/**
 * 2.[ { id : 1, w : 2}, { id: 2, w : 4 }, { id: 2, w:5 }]
 *  按照id去重，保留w最大值，而且不能改变相对顺序。 用了很笨的方法，面试官提示可以用字典。
 *
*/



 function filter (arrItem){
    let result=[];
    let map= new Map();
     for(let item of arrItem){
        if(!map.has(item.id)){
            map.set(item.id,item.w);
        }else{
            let max=Math.max(item.w,map.get(item.id));
            map.set(item.id,max);
        }
     }
     console.log(map);
     map.forEach((value,index)=>{
        result.push({id:index,w:value});
     });

    console.log(result); // [ { id: 1, w: 2 }, { id: 2, w: 5 } ]
    return result;
 }

 let arr=[ { id : 1, w : 2}, { id: 2, w : 4 }, { id: 2, w:5 }];
 filter(arr);