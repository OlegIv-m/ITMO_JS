'use script'

//Задача №1

// let arr1 = [1,2,3];
// let arr2 = [2,2,3,1];

// function sortArray(arr1, arr2) {
	// let length = Math.min( arr1.length, arr2.length);
	// for( let index = 0; index < length; index++) {
		// if( compareEqual(arr1[index], arr2[index]) ) {
			// ;
		// } else {
			// return false;
		// }
	// }
	// return ( arr1.length != arr2.length  ) ? false : true;
// }

// function compareEqual(x, y){
	// return ( x === y ) ? true : false;
// }

// console.log(sortArray ( arr1, arr2));

//Задача №2
// 2. Напишите функцию range, принимающую три аргумента, два обязательных: начало и конец диапазона, 
// третий аргумент - необязательный (если он не задан, шаг равен единице) – шаг для построения массива.
// Функция возвращает массив, который содержит все числа из него, включая начальное и конечное. 
// Например, вызов функции range(1, 10, 2) должен будет вернуть [1, 3, 5, 7, 9].


// function range(start, end, pace = 12){
	// let arr = [start];
	// while ( !( (arr[arr.length - 1] + pace)  >= end ) ) {
		// arr.push( arr[arr.length - 1] + pace );
	// }
	// return arr;
// }

// console.log( range( 1, 10, 21));

//Задача №3
// 3. Построить объект студент со свойствами:
// Имя, Фамилия, Возраст, Интересы (в виде массива), Место обучения.
// Написать отдельную функцию, которой передается объект студент, 
// а она выводит его содержимое.

let student = {
	name: "oleg",
	surname: "ivannikov",
	age: 32,
	hobby: ["reading", "programming", "english"],
	address: "Petersburg",
}

function showStudent(stud){
	for(let i in stud) {
		console.log(stud[i]);
	}
}

showStudent(student);