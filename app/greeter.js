/*// Greeter.js
module.exports = function() {
  var greet = document.createElement('div');
  greet.textContent = "Hi there and greetings!";
  return greet;
};*/

module.exports=function(){
	let h1=document.createElement('h1');
    h1.innerHTML='我是webpack打包练习呢';
    return h1;
}