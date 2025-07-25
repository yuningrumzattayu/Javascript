/* const age = 24;
const name = 'Yuningrum';
console.log(`Aku ${name}, umurku ${age} tahun`);*/

/*let username = "arum";

console.log(`variabel sebelum :`, username);

username = "ningrum";
console.log(`variabel sesudah :`, username);*/

// mengubah tipe data menjadi string
/*const number = 123;
const boolean = true;

const strNumber = String(number);
const strBoolean = boolean.toString();

console.log(strNumber);
console.log(strBoolean);*/

// mengubah tipe data menjadi number 
/*const strNumber = "123";
const strFloat = "3.14";
const strBoolean = true;

const numFromString = Number(strNumber);
const numFromFloat = Number (strFloat);
const numForBoolean = Number (strBoolean);

console.log(numFromString);
console.log(numFromFloat);
console.log(numForBoolean);*/

//menggunakan parseInt dan parseFloat,
/*const cm = "20cm";
const px = "120px";

const intFromCm = parseInt(cm);
const intFromPx = parseInt(px);

console.log(intFromCm);
console.log(intFromPx);*/

// mengubah ke boolean
/*const number = 123;
const string = "arum";
const empty = null;

const boolFromNumber = Boolean(number);
const boolFromString = Boolean(string);
const boolFromEmpty = Boolean(empty);

console.log(boolFromNumber);
console.log(boolFromString);
console.log(boolFromEmpty);*/

//KONVERSI IMPLIST
/*const number = 24;
const message = `umurku : ` + number;

console.log(message);*/

/*const bool = 1;
const result = bool + 1;

console.log(result);*/

/*const currency = "IDR";
let value = 10000;
value = value + 5000;


const money = currency + " " + value;
console.log(money); */

/*function convertCelsiusToFahrenheit(temperature) {
    const temperatureInFahrenheit = (9 / 5) * temperature + 32;
  
    console.log('Hasil konversi:', temperatureInFahrenheit);
  }
  
  const temperatureInCelsius = 90;
  
  // Hanya menampilkan nilai function
  console.log(convertCelsiusToFahrenheit);
  // Output => [Function: convertCelciusToFahrenheit]
  
  // Akan menjalankan isi function
  convertCelsiusToFahrenheit(temperatureInCelsius);
  // Output => Hasil konversi: 194*/

  /*function hitungLuasPersegiPanjang (panjang,lebar) {
    const luasPersegiPanjang = panjang * lebar;

    console.log(`Hasilnya adalah :`, luasPersegiPanjang);
  }

  hitungLuasPersegiPanjang(10,20);*/

  // menggunakan return

 /* function hitungLuasPersegiPanjang (panjang, lebar) {
    return panjang * lebar;
  }

  console.log(`hasilnya adalah : ${hitungLuasPersegiPanjang(10,20)}`);*/

  // // penggunaan function 
  // function convertCelciusToFahrenheit (temperature = 50){
  //   const temperatureInFahrenhait = 9/5 * temperature + 32;

  //   console.log(`Hasil Konversi : `, temperatureInFahrenhait)
  // }

  // //menggunakan nilai default
  // convertCelciusToFahrenheit();

  // //mengganti nilai default
  // convertCelciusToFahrenheit(90);

// menggunakan return 

/*function sumNumbers (a, b){
  const result = a + b;
  return result;
}

const result = sumNumbers(2,4);
console.log(`2 + 4 :`, result); */

// function expression 
/*const convertCelciusToFahrenheit = function(temperature) {
  const result = 9/5 * temperature + 32;
  return result;
}

const temperatureInFahrenhait = convertCelciusToFahrenheit(90);
console.log(temperatureInFahrenhait);*/

// function expression 
// function multiplier (x) {
//   return function (num) { 
//     return x * num; 
//   } ;
// }

// const double = multiplier(2);
// const triple = multiplier(3);

// console.log(double(2));
// console.log(triple(3));

// function regular 
// let temperatureInFahrenhait = null;
// const convertCelciusToFahrenheitUsingRegularFunction = function (temperature) {
//   const result = 9 / 5 * temperature + 32;
//   return result;
// };

// temperatureInFahrenhait = convertCelciusToFahrenheitUsingRegularFunction(90);
// console.log(temperatureInFahrenhait);

//arrow function 
// const convertCelciusToFahrenheitUsingArrowFunction = (temperature) => {
//   const result = 9 / 5 * temperature + 32;
//   return result;
// };

// const convertCelciusToFahrenheitUsingArrowFunction = (temperature) => 9 / 5 * temperature + 32;

// temperatureInFahrenhait = convertCelciusToFahrenheitUsingArrowFunction(90);
// console.log(temperatureInFahrenhait);

const origin = "Bandung"

function hello (name, origin) {
   return {name, origin};
 }

const results = hello ("arum", " ");
console.log(`Halo! Nama saya ${results.name}. Saya tinggal di ${results.origin}`);










