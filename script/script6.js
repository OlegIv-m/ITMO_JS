//Задача №1
/*1. Реализовать функцию foo:
let a = {
    name: 'static',
    count: 0
}
console.log(foo(a, 'count', 10)); /* В консоль выведет: [{name:'static', count:0},
 {name:'static', count:1}, ..., {name:'static', count:9}] */
 
// let a = {
    // name: 'static',
    // count: 0
// }

// function foo(obj, propName, start){
	// let arr = [];
	// while( obj[propName]++ < start) {
		// arr.push(Object.assign({}, obj));
	// }
	// return arr;
// }

// console.log(foo(a, 'count', 9));

//Задача №2

// 2. Сделайте функцию, каждый вызов который будет генерировать одно случайное число 
// от 1 до 100, но так, чтобы оно не повторялось, пока не будут перебраны все 
// числа из этого промежутка. Решите задачу через замыкания - в замыкании должен 
// хранится массив чисел, которые уже были сгенерированы функцией.

function genNum(){
	let arr [];
	let min = 1, max = 100;
	return function () {
		arr.push
	}
}

