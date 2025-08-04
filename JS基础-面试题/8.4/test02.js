const instanceOf=function(lf,rg){
    if (
        lf === null || 
        typeof lf !== 'object' && typeof lf !== 'function'
      ) {
        return false;
      }
    let proto=Object.getPrototypeOf(lf)//获取原型对象
    while(proto){//遍历lf原型链
        if(proto===rg.prototype){
            return true
        }
        proto=Object.getPrototypeOf(proto)
    }
    return false
}