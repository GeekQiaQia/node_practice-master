/**
 * 模拟 实现 new 
 * 
*/

function newOperation(ctor){
 if(typeof ctor !=='function'){
    thorw `ASDF`
 }
 newOperation.target=ctor;

 let newObj=Object.create(ctor.prototype);
 let newArgs=[].prototype.slice.call(arguments,1);

 let result=ctor.apply(newObj,newArgs);
 let isFunction=typeof result=='function';
 let isObject=typeof result =='object';
 if(isFunction|| isObject){
    return result;
 }
 return newObj;
}