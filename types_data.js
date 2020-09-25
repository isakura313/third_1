let x = "stroka";

let obj = {
  x: 15,
  y: 17,
  z: () =>{
    console.log("hello");
  }
};

obj.z();
obj.x;


let obj3 = {
  x: 15,
  y: 17,
};

if( obj == obj3){
    console.log('hello');
}

let obj2 = obj;

obj2.x = 18;
obj2.z = 21;

console.log(obj.x);
console.log(obj2.x);
console.log(obj.z);

let y = x;
y = "stroka 12";
console.log(x);
console.log(y);
