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



// 手动实现bind函数；
/**
 * 借用call; bind 返回一个函数；
 * 
*/
Function.prototype.bind=function(context,...args){
 
    let _this=this;
    return function anonymous(...params){
        _this.call(context,...args.concat(params));
    }
}
// 手动实现call();
/**
 * Object 构造函数创建一个对象包装器  r
 * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object
 * 
*/
Function.prototype.call=function(context,...args){

    context=context==null?window:context;
    
    //保证context是一个对象类型；
    let contextType=typeof context;
    if(!/^(object|function)$/i.test(contextType)){
      context=Object(context);
    }
    context['fn']=this;
    let result=context['fn'](...args)
    delete context['fn']
    return result;
  }

//手动实现一个apply函数；返回一个执行结果；
Function.prototype.apply=function(context,...args){
  
    context=context==null?window:context
    // 
    if(/^(object|function)$/i.test(contextType)){
        context=Object(context);
    }
    context['fn']=this;// this指向当前函数，把函数作为对象的某个成员值；
    let result=context['fn'](...args)  // 执行函数返回执行结果；
    delete context['fn']
    return result;
}



//  es5实现数组扁平化flat的方法；
/**
 * 
 * @description flat；
 * *思路：

    *循环数组里的每一个元素
    * 判断该元素是否为数组
    *是数组的话，继续循环遍历这个元素——数组
    *不是数组的话，把元素添加到新的数组中
 * 
*/
let arr = [
    [1, 2, 2],
    [3, 4, 5, 5],
    [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10
];

function myFlat(){
    _this=this;
    let newArray=[];
    let cycleArray=(arr)=>{
        for(let i=0;i<arr.length;i++){
            let item=arr[i];
            if(Array.isArray(item)){
                cycleArray(item);
                continue;
            }else{
                newArray.push(item);
            }
        }
    }
    cycleArray(_this)
    return newArray
}


Array.prototype.myFlat=myFlat;
// es6实现数组扁平化；

arr=arr.myFlat();

// 函数表达式写法；
const myFlat=(arr)=>{
    let newArray=[];
    let cycleArray=(arr)=>{
        for(let i=0;i<arr.length;i++){
            if(Array.isArray(arr[i])){
                cycleArray(arr[i])
            }else{
                newArray.push(arr[i]);
            }
        }
    }
    cycleArray(arr);
    return newArray;
}

// 使用reduce手动实现扁平化flat的方法；
const myFlat=(arr)=>{
    return arr.reduce((pre,cur) =>{
        return pre.concat(Array.isArray(cur)?myFlat(cur):cur); 
    },[]);
}


// 用三种不同的方法，实现数组去重；
/**
 * @description
 * 
*/

// way1:使用new Set();
let arr = [12, 23, 12, 15, 25, 23, 16, 25, 16];
newArray=[...new Set(arr)]

// way2:数组中的最后一项替换到当前元素，并删除最后 一项；
const filterArray=(arr)=>{
    for(let i=0;i<arr.length;i++){
        let item=arr[i];
        let remainArr=arr.slice(i+1);
        if(remainArr.indexOf(item)>-1){  // 数组剩余的元素中包含当前元素；
            arr[i]=arr[arr.length-1]  // 用数组最后一项替换当前项；
            arr.length--;  // 删除数组的最后一项；
            i-- // 仍然从当前项开始比较；

        }
    }
}

//way3:利用Map 哈希； or array.splice(index,howmany,items...);
const mapFilterArray=(arr)=>{
    let map =new Map();
    for(let i=0;i<arr.length;i++){
        if(map.has(arr[i])){
             // 删除当前项；
            //  arr[i]=arr[arr.length-1]
            //  arr.length--;
            //  i--;
            arr.splice(i,1);  // 更加优雅
            i--;
        }else{
            map.set(arr[i],arr[i]);
        }
    }
     
}

// 基于 Generator 函数实现async/await原理；
/**
 * @description 
 *  传递一个Generator 函数；
 *  把函数中的内容，基于迭代器Iterator的特点有一步步执行下去；
 * 
 * 
*/
function asyncFun(generator){
    const iterator =generator();
    // data 为第一次执行之后返回的结果， 用于第二次执行；
    const next=(data)=>{
        // 第二次执行，并接受data;
        let {value,done}=iterator.next(data);
        if(done){
            // 如果之心完毕，则直接返回(到第三次)
            return 
        }
        value.then(data=>{
            next(data);// 当第一次value 执行完毕且成功时，执行下一步(并把第一次的结果传递下一步)
        });
0    }
next();
}



// 基于promise 封装Ajax;
/**
 *   使用Promsie 包装一个xhr ;
 *   创建XMLHttpRequest()；异步对象；
 *   调用xhr.open(url,method) 与服务器建立连接；
 *   监听Ajax状态信息； xhr.readyStatus===4;
 *    xhr.status===200 resolve();
 *    xhr.status==404  reject();
 * 
*/
function ajax(url,method){
    return new Promise((resolve,reject)=>{
        const xhr = new XMLHttpRequest();
        xhr.open(url,method,true);
        xhr.onreadystatechange=function(){
            if(xhr.readyState===4){
                if(xhr.status==200){
                    resolve(xhr.responseText);
                }else if(xhr.status===404){
                    reject(new Error('404'));
                }
            }else{
                reject('请求数据失败');
            }
        }
        xhr.send(null)
    });
}

// 手动实现JSOP跨域；
/**
 * 思路：

创建script标签
设置script标签的src属性，以问号传递参数，设置好回调函数callback名称
插入到html文本中
调用回调函数，res参数就是获取的数据
 * 
*/

let script = document.createElement('script');

script.src = 'http://www.baidu.cn/login?username=JasonShu&callback=callback';

document.body.appendChild(script);

function callback (res) {
    console.log(res);
}

// 手动实现sleep 

/**
 * @description 
 * 某个时间过后，去执行某个函数
 * 基于Promise封装异步函数； 
 * 
*/

function sleep(fn,wait){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(fn);
        },wait||500);
    });
}


// ES5 手动实现数组array.reduce(pre,cur,index,array)

/**
 * 
    初始值不传时的特殊处理：会默认使用数组中的第一个元素

    函数的返回结果会作为下一次循环的prev
    回调函数一共接受四个参数（arr.reduce(prev, next, currentIndex, array))）
    prev：上一次调用回调时返回的值
    正在处理的元素
    正在处理的元素的索引
    正在遍历的集合对象
 * 
 * 
*/

Array.prototype.myReduce=function(fn,prev){
    for(let i=0;i<this.length;i++){
        if(typeof prev=='undefined'){
            prev=fn(this[i],this[i+1],i+1,this)
            ++i;
        }else{
            prev=fn(prev,this[i],i,this);
        }
    }
    return prev;
}


let sum = [1, 2, 3].myReduce((prev, next) => {
    return prev + next
  });
  
  console.log(sum); // 6
  


  // 手动实现柯里化函数；
  /**
   * @description 柯里化函数；
   *  * 函数分步传递参数；
   *  * 每次传递部分参数；并返回 一个更具体的函数接受剩下的参数；
   *  * 中间可嵌套多层这样的接收参数的函数，
   *  * 直至返回最后的结果；
   *  https://juejin.im/post/6870319532955828231#heading-33
   * 
  */


