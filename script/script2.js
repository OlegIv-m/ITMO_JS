//Задача №1

let month = Number(prompt("Введите номер месяца"));

switch ( month ) {
	case 2:
	case 3:
	case 4:
		alert("Весна");
		break;
	case 5:
	case 6:
	case 7:
		alert("Лето");
		break;
	case 8:
	case 9:
	case 10:
		alert("Осень");
		break;
	case 1:
	case 11:
	case 12:
		alert("Зима");
		break;
	default:
		alert("Вы ввели не число месяца!");
}

//Задача №2

let lengthType = +prompt("Введите единицу длины." + 
						 "1 — дециметр, 2 — километр, 3 — метр, 4 — миллиметр, 5 — сантиметр", 3);
let L = +prompt("Введите длину", 100);

switch ( lengthType ) {
	//дециметр
	case 1:
		alert(L * 0.1 + " метров");
		break;
	//километр
	case 2:
		alert(L * 1000 + " метров");
		break;
	//метр
	case 3:
		alert( L + " метров");
		break;
	//миллиметр
	case 4:
		alert(L * 0.001 + " метров");
		break;
	//сантиметр
	case 5:
		alert(L * 0.01 + " метров");
		break;
	default :
		alert("Вы ввели неверную единицу измерения!");
}


//Задача №3

let num = +prompt("Введите число  в диапазоне от -999 до 999", 555);
let message = "";
const lowRange = -999, highRange = 999;
// положительное или отрицательное
if( num > 0 ) {
	message += "положительное ";
} else if ( num < 0 ) {
	message += "отрицательное ";
} else {

}
// разряд числа
if ( Math.abs( num ) >= 100 ) {
	message += "трехзначное ";
} else if ( Math.abs( num ) >= 10 ) {
	message += "двузначное ";
} else {
	message += "однозначное ";
}

message += "число";
// нулевое число
if ( num == 0 ) {
	message = "нулевое число";
}

console.log(message);


//Задача №4

for (let i = 1 ; i <=100; i++){
	if( !( i % 3 ) && !( i % 5 ) ){
		console.log("ThreeFive");
		continue;
	}
	if ( !( i % 3 ) ) {
		console.log("Three");
		continue;
	}
	if ( !( i % 5 ) ) {
		console.log("Five");
		continue;
	}
	console.log(i);
 }
 
 //Задача №5
 
 let year = prompt("Введите год", 2020);
 
 if (  year % 4  ) {
	 console.log("Не высокосный год");
 } else if ( year % 400 )  {
	 console.log("Не высокосный год");
 } else {
	 console.log("Высокосный год");
 }
 
//Задача №6

let plates = prompt("Количество тарелок", 10);
let gel = prompt("Количество моющего средства", 10);
const COEFF = 0.5;

while ( plates > 0 && gel > 0 ) {
	plates--;
	gel -= 0.5;
}

console.log( "Количество непомытых тарелок: " + plates + " " + "Количество оставшегося моющего средства: " + gel );