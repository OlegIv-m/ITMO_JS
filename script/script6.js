//Задача №1
/*1. Реализовать функцию foo:
// let a = {
    // name: 'static',
    // count: 0
// }
// console.log(foo(a, 'count', 10)); /* В консоль выведет: [{name:'static', count:0},
 // {name:'static', count:1}, ..., {name:'static', count:9}] */
 
let a = {
    name: 'static',
    count: 0
}

function foo(obj, propName, start){
	let arr = [];
	while( obj[propName]++ < start) {
		arr.push(Object.assign({}, obj));
	}
	return arr;
}

console.log(foo(a, 'count', 9));

//Задача №2

// 2. Сделайте функцию, каждый вызов который будет генерировать одно случайное число 
// от 1 до 100, но так, чтобы оно не повторялось, пока не будут перебраны все 
// числа из этого промежутка. Решите задачу через замыкания - в замыкании должен 
// хранится массив чисел, которые уже были сгенерированы функцией.

function genNum(){
	let arr = [];
	let min = 1, max = 100;
	let generate =  function () {
		let random = Number.parseInt( ( Math.random() * max + min ) );
		if( arr.includes(random) ) {
			generate();
		} else {
			arr.push ( random ) ;
			console.log ( random ) ;
		}
	}
	return generate;
}

let genHundred = genNum();
//Проверка стека и массива 
for ( let i = 0 ; i < 100; i++) {
	genHundred();
}


//Задача №3

// 3. Построить объект студент:
// - свойства: Имя, Фамилия, Возраст, Интересы (в виде массива), Место обучения.
// - метод объекта выводящий в консоль биографическую справку в виде, например: 
// «Иван Петров. 21 год. Интересы: программирование, музыка, аниме. Учится в ИТМО.


let stud = {
	name: "Oleg",
	surname: "Ivannikov",
	age: 32,
	hobbies: [
		"music",
		"science",
		"fantasy",
	],
	address: "Saint Petersburg",
	show: function(){
			console.log(`${this,name} ${this.surname}. ${this.age} год. Интересы: ${this.hobbies}. Учится в ${this.address}`);
	}
}

stud.show();



//Задача №4
// 4. Написать функцию вычисляющую факториал числа с использованием рекурсии.
// Факториал числа - это число, умноженное на себя минус один, затем на себя 
// минус два и так далее, до единицы. Обозначается n!
// Определение факториала можно записать как: n! = n * (n - 1) * (n - 2) * ...*1

function fact(n) {
	if(n >= 2 ) {
		return n * fact( ( --n) ) ;
	} else {
		return 1;
	}
}

console.log ( fact(5) );


//Задача №5
// 5. Отсортировать массив по полю 'price' используя метод sort и передаваемую ей функцию, 
// определяющую порядок сортировки. Массив для тестирования: 
// let arr = [ { 'price' : 10, 'count' : 2 }, { 'price' : 5, 'count' : 5}, 
// { 'price' : 8, 'count' : 5 }, { 'price' : 12, 'count' : 4 }, { 'price' : 8, 'count' : 4},];

let arr = [ { 'price' : 10, 'count' : 2 }, { 'price' : 5, 'count' : 5}, 
{ 'price' : 8, 'count' : 5 }, { 'price' : 12, 'count' : 4 }, { 'price' : 8, 'count' : 4},];

function sortArr(first,second){
	return first.price - second.price;
}

arr.sort(sortArr);
console.log(arr);