//eval()的作用：
//把字符串参数解析成js代码并运行，并返回执行结果；

eval('2+3') // 执行加运算，并返回结果；
eval('varage=10');  // 声明一个age 变量；

// eval的作用域 :只在定义范围内有效；

function a(){
    eval('var x=1');
    console.log(x); // 1
}
a();
console.log(x);// not defined;

function a(){
    window.eval('var x=1');
    console.log(x); // 1
}
a();
console.log(x);// 1;

// 应该避免使用eval，不安全，非常耗性能（2次，一次解析成js语句，一次执行）。

// 由JSON字符串转换为JSON对象的时候可以用eval，例如

varjson="{name:'Mr.CAO',age:30}";
varjsonObj=eval("("+json+")");
