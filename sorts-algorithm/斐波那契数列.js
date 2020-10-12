/**
 * 
 *  F(n)=F(n-1)+F(n-2)
 *  f(0)=0;
 *  f(1)=1;
 *  f(2)=f(0)+f(1)=1;
 *   n >1;
 * 
*/

function fabonacci(n){
    let dp=[0,1,1]
    for(let i=3;i<=n;i++){
        dp[i]=dp[i-1]+dp[i-2];
    }
    return dp[n]
}
// 
function fib(n){
    if(n==0){
        return 0;
    }
    if(n==1){
        return 1;
    }
    return fib(n-1)+fib(n-2);
}


// generator;
function * fib(n){
    let a=1,b=1,i=0;
    while(i<n){
        yield a;
        [a,b]=[b,a+b];
        i++
    }
    
}