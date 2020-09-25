let str = " Мама мыла раму";
let str1 = 'Мама \'мыла\' раму';
let str2 = 1000;
let data = `info ${Math.pow(str2, 3)} предложение`;
for (let i = 0; i < data.length; i++) {
    console.log(data[i]);
}
data[0] = 's';
console.log(data);
