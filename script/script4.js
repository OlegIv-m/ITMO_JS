// 
//1. Дана строка, изображающая целое число. Вывести сумму цифр этого числа.//
/*
let numString = "13245"
let sum = 0;

for ( let i = 0; i < numString.length; i++ ) {
	sum += parseInt(numString[i]);
}
console.log(sum);*/

//Задача №2
// Дана строка и символ. Удвоить каждое вхождение заданного символа в строку.
/*
let symb = "@";
const REPEAT_SYMBOL = 2;
let testString = "oleg-ivannikov@mail.ru";
let replaceString = symb.repeat(REPEAT_SYMBOL);

console.log(testString.replaceAll(symb,replaceString));
*/

//Задача №2.1
// Дана строка и символ. Удвоить каждое вхождение заданного символа в строку.
/*
let symb = "@";
const REPEAT_SYMBOL = 2;
let testString = "oleg-ivannikov@mail.ru";
console.log(testString.replaceAll(/(?<rep>@)/,('$<rep>').repeat(2)));
*/
//Задача №2.1.1
// Дана строка и символ. Удвоить каждое вхождение заданного символа в строку.
/*
let symb = "@";
const REPEAT_SYMBOL = 2;
let testString = "oleg-ivannikov@mail.ru";
let reg = new RegExp(`(?<rep>${symb})`, 'gi');
console.log(testString.replaceAll( reg, '$<rep>$<rep>'));
*/
//Задача №3
// Проверить что введенный пароль удовлетворяет 
// следующим условиям сложности:
// - длинна от 9 символов;
// - содержит обязательно английские буквы верхнего и нижнего регистра;
// - содержит более двух цифр;
// - содержит обязательно один из неалфавитных символов (например, !, $, #, %).

let str = "13asd12a!#!asa!F";
let testAlpha = /(\d.*\d)/g;
// symbols ([!$#%]{1,})
console.log(str,'\n',str.replaceAll(/\d/g,''));
console.log(str,'\n',str.replaceAll(/[!#$%]/g,''));
// if ( str.length < 9 ) {
	// console.log("\u041c\u0435\u043d\u044c\u0448\u0435 \u0447\u0435\u043c 9 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432!");	
// } else {
	// if ( testAlpha.test(str)){
		// console.log("\u0415\u0441\u0442\u044c \u0431\u0443\u043a\u0432\u044b \u0432 \u043d\u0438\u0436\u043d\u0435\u043c \u0438 \u0432\u0435\u0440\u0445\u043d\u0435\u043c \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0435");
		// console.log(str.match(testAlpha));	
	// } else {
		// console.log("\u041d\u0435\u0442 \u0431\u0443\u043a\u0432 \u0432 \u043d\u0438\u0436\u043d\u0435\u043c \u0438 \u0432\u0435\u0440\u0445\u043d\u0435\u043c \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0435");
		// console.log(str.match(testAlpha));	
	// }
// }


//\u0417\u0430\u0434\u0430\u0447\u0430 \u21164
/*
\u0414\u0430\u043d\u0430 \u0441\u0442\u0440\u043e\u043a\u0430-\u0441\u043b\u043e\u0432\u0430\u0440\u044c, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440: "\u041f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a \u0412\u0442\u043e\u0440\u043d\u0438\u043a \u0421\u0440\u0435\u0434\u0430 \u0427\u0435\u0442\u0432\u0435\u0440\u0433 \u041f\u044f\u0442\u043d\u0438\u0446\u0430 
\u0421\u0443\u0431\u0431\u043e\u0442\u0430 \u0412\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435". \u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0432\u0432\u043e\u0434\u0438\u0442 \u0441\u043b\u043e\u0432\u043e \u0438\u0437 \u0441\u043b\u043e\u0432\u0430\u0440\u044f \u0441 \u043e\u0434\u043d\u043e\u0439 
\u043f\u0435\u0440\u0435\u043f\u0443\u0442\u0430\u043d\u043d\u043e\u0439 \u0431\u0443\u043a\u0432\u043e\u0439, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440: "\u0421\u0440\u0438\u0434\u0430". \u041d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0443, \u043a\u043e\u0442\u043e\u0440\u0430\u044f 
\u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0441 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u043c \u0440\u0435\u0433\u0443\u043b\u044f\u0440\u043d\u043e\u0433\u043e \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u043d\u0430\u0439\u0442\u0438 \u0432 \u0441\u0442\u0440\u043e\u043a\u0435-\u0441\u043b\u043e\u0432\u0430\u0440\u0435 
\u0432\u0432\u0435\u0434\u0451\u043d\u043d\u043e\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u043c \u0441\u043b\u043e\u0432\u043e (\u043d\u0435 \u0441\u043c\u043e\u0442\u0440\u044f \u043d\u0430 \u043e\u0434\u043d\u0443 \u043e\u0448\u0438\u0431\u043a\u0443 \u0432 \u0441\u043b\u043e\u0432\u0435) \u0438 
\u0432\u044b\u0432\u0435\u0441\u0442\u0438 \u0438\u0441\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043d\u043e\u0435 \u0441\u043b\u043e\u0432\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044e, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440: "\u0421\u0440\u0435\u0434\u0430".

let dictionary = "\u041f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a \u0412\u0442\u043e\u0440\u043d\u0438\u043a \u0421\u0440\u0435\u0434\u0430 \u0427\u0435\u0442\u0432\u0435\u0440\u0433 \u041f\u044f\u0442\u043d\u0438\u0446\u0430 \u0421\u0443\u0431\u0431\u043e\u0442\u0430 \u0412\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435";
let word = "\u0421\u0440\u0435\u0434\u0430";
//let wordToFind = new RegExp(...word);
//let template = /[\u0441\u0440\u0435\u0434\u0430]/g;

for (let i in word){
	console.log(i);
}*/