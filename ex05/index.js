const {EventEmitter} = require('events')
module.exports = class Connection {
    // ##BEGIN## 代码已加密
    constructor(){
    this.emmiter = new EventEmitter();
    
    
    }
    connection(arg){
        this.emmiter.emit('connection',arg)
        
    }
    onConn(callback) {
        this.emmiter.on('connection',function(arg){
            callback(arg)
        })
        
    }
    
    // ##END##
}
