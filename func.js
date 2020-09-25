let sum_express = () => {
  console.log(this);
};

let sum_arrow = function () {
  console.log(this);
};

sum_express(2, 4);
sum_arrow(2, 8);

function dataTransformToArray(){
    console.log(book.content);
}