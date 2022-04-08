document.write("Hello, world!");

function sayHello(){
  var response=prompt("what's your name?");
  alert("Hello "+response+",have a good day!");
}

function add(a,b){
  return a + b;
}
console.log(add(20,30));
console.log(add(1,2));

function showTopic(){
  var x =document.getElementById('demo');
  x.style.fontSize="25px";
  x.style.color="blue";
}
