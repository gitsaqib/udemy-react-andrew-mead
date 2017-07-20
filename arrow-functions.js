var names = ["aa","bb", "cc"];


names.forEach(function (name) {
  console.log("name is ",name);
});

names.forEach( (name) => {
  console.log("Arraw name is ",name);
});


names.forEach( (name) =>  console.log("One Liner ",name));

var Person = {
  name : "Goe",
  greet : function (){
    names.forEach( function (name){
      console.log(this.name+" greets ",name);
    });

  }
}
Person.greet();
var Person1 = {
  name : "Goe",
  greet : function (){
    names.forEach( (name) => {
      console.log(this.name+" greets ",name);
    });

  }
}
Person1.greet();
var add1 = (a,b) =>console.log((a+b));
add1 (1,2);
var add2 = (a,b) => {
  console.log((a+b));
}
