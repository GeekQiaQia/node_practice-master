/**
 * * 打印函数时自动调用toString();方法；
 * 
*/


function add(a){

  function sum(b){
      a=a+b;
      return sum;
  }
  sum.toString=function(){ 
      return a;
  }
  return sum;
}
let re=add(1)(2)(3)(4);
console.log(re.toString()); // 10;


// 柯里化函数；
function currrying(fn,length){
  lenght=fn.length||length;
  return function(...args){
    return args.length>=length?fn.bind(this,args):currrying(fn.bind(this,...args),length-args.length)
  }
}


//  手写call

Function.prototype.call=function(context,...args){
    context=context===null?window:context;

    //  b保证context是一个对象；!/^(object|function)$/
    let contextType=typeof context;
    if(!/^(object|function)$/i.test(contextType)){
        context=Object(context)
    }
    // 
    context['fn']=this;
    let result=context['fn'](...args);
    delete context['fn'];
    return fn;
}