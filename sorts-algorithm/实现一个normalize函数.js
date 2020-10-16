/**
 * 实现一个 normalize 函数，能将输入的特定的字符串转化为特定的结构化数据:

字符串仅由小写字母和 [] 组成，且字符串不会包含多余的空格。
示例一: 'abc' --> {value: 'abc'}
示例二：'[abc[bcd[def]]]' --> {value: 'abc', children: {value: 'bcd', children: {value: 'def'}}}
 * 
 * 
 * 
*/

function normaliz(str){
 let result ={};
 let curr=null;
// 字符串转换为数组；
 let arr=str.split(/[\[\]]/g).filter(Boolean);
 //生成结构化数据； 
 arr.forEach((element ,index)=> {
     if(index!==0){
        curr.children={};
        curr.children.value=element;
        curr=curr.children;
     }else{
        result.value=element;
        curr=result;
     }
 });
};

function normalize(str){
 let result={};
 str.splite(/[\[\]]/g).filter(Boolean).reduce((obj,item,index,arr)=>{
  obj.value=item;
  if(index!=arr.length-1){
   return (obj.children={})
  }
 },result)
}