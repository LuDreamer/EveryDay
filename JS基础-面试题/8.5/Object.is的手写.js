function is(x,y) {
    if(x===y){
        return x!==0||y!==0||1/x===1||1/y===0
        // //运行到1/x === 1/y的时候x和y都为0，但是1/+0 = +Infinity， 1/-0 = -Infinity, 是不一样的
    }else{
        return x!==x&&y!==y//两个NaN，返回true
    }
    
}