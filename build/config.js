var path=require('path')

var rootPath = path.resolve(__dirname, '..'), // 项目根目录
    src = path.join(rootPath, 'src'); // 开发源码目录
    
var commonPath = {
  src,
  rootPath,
  dist: path.join(rootPath, 'dist'), // build 后输出目录
  indexHTML: path.join(src, 'index.html'), // 入口基页
  staticDir: path.join(rootPath, 'static'), // 无需处理的静态资源目录
  build:path.join(rootPath,'build')//config目录(自己)
};

/*module.exports={
  commonPath
}*/
module.exports=commonPath
