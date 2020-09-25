let input = document.getElementById("input");
let data = document.getElementById("data");

data.onclick = () => {
let n = parseFloat(input.value);
let result = 10 / n;
//NaN не равен самому себе
//NaN еще является числом
  if(isNaN(result) || !isFinite(result)){
      alert("Вы чего-то не то забиваете");
      return;
  }
  alert(result);
};
