/**
 * @description  获取一个对象的原型并判断一个对象的原型是否一致；
 * https://www.cnblogs.com/loveyaxin/p/11151586.html
 * 原型与原型链；
 * 
*/
function Person() {

}

var person = new Person();

console.log(person.__proto__ == Person.prototype) // true
console.log(Person.prototype.constructor == Person) // true
// 顺便学习一个ES5的方法,可以获得对象的原型
console.log(Object.getPrototypeOf(person) === Person.prototype) // true

// api  isPrototypeOf  getPrototypeOf():

/**
 * @description 寿司代码系列；
 * https://juejin.im/post/6870319532955828231#heading-16
 * 
*/
/***
 * @description 手动实现instanceOf的机制；
 * 
*/


function _instanceof (instanceObj,classFunc){
    let prototype=classFunc.prototype; // 获取当前类的原型；
    let proto=instanceObj.__proto__;  // 获取的那边实例对象的原型链对象；
    while(true){
        if(proto==null){
            return false;
        }else if(proto==prototype){  // 如果当前实例对象的原型链上，找到了当前构造函数的原型对象；
            return true;
        }

        proto=proto.__proto__  // 沿着原型链向上查找原型对象；
    }
}

// more better;

function _instanceof (instanceObj,classFunc){
    let prototype=classFunc.prototype; // 获取当前类的原型；
    let proto=Object.getPrototypeOf(instanceObj);  // 获取的那边实例对象的原型链对象；
    while(true){
        if(proto==null){
            return false;
        }else if(proto==prototype){  // 如果当前实例对象的原型链上，找到了当前构造函数的原型对象；
            return true;
        }

        proto=Object.getPrototypeOf(proto); // 沿着原型链向上查找原型对象；
    }
}


/**
 * @description 手动实现debounce function
 * 
*/
/**
 * 实现函数的防抖（目的是频繁触发中只执行一次）
 * @param {*} func 需要执行的函数
 * @param {*} wait 检测防抖的间隔频率
 * @param {*} immediate 是否是立即执行 True：第一次，默认False：最后一次
 * @return {可被调用执行的函数}
 */

// 以最后一次触发为准；
function debounce(fn,wait){
    let timer=null;
    return function(...params){
        clearTimeout(timer);
        let _this=this;
        timer=setTimeout(function(){
            fn.call(_this,...params); // fn.apply(_this,params)
        },wait||500);
    }
}


// 以第一次触发为准；

function debounce(fn,wait,immediate=true){
    let timer=null;
    return function(...params){
        let now=immediate&&!timer;
         clearTimeout(timer);
         let _this=this;
         timer=setTimeout(function(){
            timer=null;
            !immediate?fn.call(_this,...params):null;
         },wait||500);
         now?fn.call(this,...params):null
    }
}


// 手动实现Object.create();
/**
 * @description 实现Object.create(proto);
 * Object.create(proto[, propertiesObject])
 * Object.create()方法创建一个新对象，使用现有的对象来提供新创建的对象的__proto__。
 * 
*/

function create(prototype){
    if(prototype===null|| typeof prototype!=='object'){
        throw new TypeError(`Object prototype may only be an object:${prototype}`);
    }
    // 让空对象的原型对象，指向传入的prototype;
    function Con(){}
    Con.prototype=prototype;
    return Con;
}

// 手动实现new();
/**
 * @description Func 构造函数；
 * 
*/

function _new(Func,...arg){
    // 创建一个Func的实例对象；
    let obj=Object.create(Func.prototype);

    let result=Func.call(obj,...arg)
    if(result!==null&&/^(object|function)$/.test(typeof result)){
        return result;
    }
    return obj
}

// 手动实现call();
/**
 * Object 构造函数创建一个对象包装器
 * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object
 * 
*/
Function.prototype.call=function(context,...args){
  context=context==null?window:context;
  
  //保证context是一个对象类型；
  let contextType=typeof context;
  if(!/^(object|function)$/.text(contextType)){
    context=Object(context);
  }
  context['fn']=this;
  let result=context['fn'](...args)
  delete context['fn']
  return result;
}

