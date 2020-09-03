const fs = require('fs')
module.exports.createLoader = config => {
    const loader = (scanFolder, cb) => {
        const files = fs.readdirSync(scanFolder);
        files.forEach(filename => {
			// 去掉后缀，获取到文件名
            filename = filename.replace(".js", "");
			// 通过require导入文件对象；
            const file = require(scanFolder + "/" + filename);
			// file;在callback中读取文件对象；
            cb(filename, file);
        })
    }

    return {
        initFunction: scanFolder => {
            const ret = {}
            // ##BEGIN## 代码已加密
			// scanFlolder 文件夹名；
			loader(scanFolder,(filename,file)=>{
				ret[filename]=file(config);
			})
            // ##END##
            return ret
        }
    }
}

