/*引入greeter.js文件后main.js就可以访问greeter中的方法或属性了*/
var greeter=require('./greeter.js');
let add=document.getElementById('root');
add.appendChild(greeter());