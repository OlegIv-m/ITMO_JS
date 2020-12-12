//Задача №1
/*
1. Написать свою подключаемую js библиотеку для работы с массивом, хранящим целые числа.
Библиотека должна обладать следующими методами:
- поиск минимального элемента в переданном массиве;
- поиск максимально элемента в переданном массиве;
- расчет среднего арифметического значения элементов переданного массива;
- создание копии (клонирование) переданного массива.
*/

/*
(function(){
	window._math = {
		max : function(arrInt){
			return Math.max(...arrInt);
		},
		min : function(arrInt){
			return Math.min(...arrInt);
		},
		average : function(arrInt){
			let sum = 0;
			for ( let i = 0; i < arrInt.length; i++) {
				sum += arrInt[i];
			}
			return sum;
		},
		clone : function(arrInt){
			let newArr = [];
			for ( let i = 0; i < arrInt.length; i++) {
				newArr.push(arrInt[i]);
			}
			return newArr;
		}
	}
})();
*/
//Задача №2
/*
2. Подключить стороннюю библиотеку для построения графиков.
Построить график функции y = f(x):
y = 5/x, при x>=1;
y = x*x – 4*x, при x<1.
Шаг варьирования x равен 0.01 и интервал варьирования -5 < x < 5.
Расчёт функции y = f(x) реализовать в виде отдельной функции.
*/
/*
let TESTER = document.getElementById('tester');

function funcYfX( x, f ){
	let result=0;
	( x >= 1) ? result = f/x : result = x*x - 4*x;;
	return result.toFixed(2);
}

function createArrayXY( bottom, top, pace, func){
	let arr = [];
	if ( arguments.length > 3 ) {
		for ( let i = bottom; i <= top; i+=pace) {
			arr.push(funcYfX( i, func));
		}
		return arr;
	} else {
		for ( let i = bottom; i <= top; i+=pace) {
			arr.push(i.toFixed(2));
		}
		return arr;
	}
}

let xArr = createArrayXY (-5, 5, 0.01);
let yArr = createArrayXY ( -5, 5, 0.01, 5 );

Plotly.newPlot(TESTER, [{
	x:  xArr,
	y:  yArr}], {
	margin: {t: 0},
	title: "Function for exercise #2"
	} );

console.log(xArr.length);
console.log(yArr.length);
*/

//Задача №3
/*
3. Подключить стороннюю библиотеку для юнит тестирования.
Написать несколько тестов для функции, рассчитывающей y = 1/x + sqrt(x).
*/
/*
function myFunc01(x){
	return 1/x + Math.sqrt(x);
}

describe("ITMO Lesson 10", function(){
	it("test function y = 1/x + sqrt(x)", function(){
		for( let i = -100; i < 100; i++) { 
			console.log(myFunc01(i));
			expect(myFunc01(i)).toBeNaN();
		}
	});
});
*/
//Задача №4
/*
4. Написать функцию генерации поля n x n (значение n - аргумент функции), 
в ячейки рандомно спрятать несколько призов. 
Пользователю дается 3 попытки найти их - по нажатию на ячейку либо открывается приз 
(иконка, изменения цвета и тд), либо иконка, сообщающая, что приза нет. 
Количество оставшихся попыток выводим рядом с игровым полем.
*/

let prizeCount = 2;
let countTry = 3;
let size = 3;

function genField(n){
	let container = document.createElement("div");
	container.style.display = "grid";
	container.setAttribute('class','guess');
	container.style.gridTemplateColumns = `repeat(${n}, 200px)`;
	n *= n;
	for ( let i = 0; i < n; i++) {
		let field = document.createElement("div");
		field.style.width = "auto";
		field.style.height = "auto";
		field.style.minHeight = "200px";
		field.addEventListener('click', prizeHandler);
		field.style.border = "2px solid black";
		field.classList.add('field');
		container.append(field);
	}
	let prizePosition = [];
	for ( let i = 0; i < prizeCount;) {
		let position = genPrize(n);
		if( prizePosition.includes(position) ) {
			continue
		}
		i++;
		prizePosition.push(position);
	}
	document.body.append(container);
	addPrize(prizePosition);
	return true;
}

function genPrize(p){
	return Math.round(Math.random() * (p-1));
}

function prizeHandler(event){	
	let target = event.target;
	target.classList.add('enabled');
	countTry--;
	document.querySelector('.guessLabel').innerText = 'Количество попыток: ' + countTry;
	if ( target.classList.contains('prize') ) {
		setTimeout( ()=> {
			alert('Вы победили!');
			openFields(document.querySelectorAll('.field'));
			
		}, 0);
		return 0;
	}
	console.log(target);
	setTimeout( () => {
		if ( !countTry  ) {
		alert("Вы проиграли!");
		openFields(document.querySelectorAll('.field'));
		return 1;
	}
	return 0;
	},0);
}

function openFields(arrField){
	arrField.forEach( (i) => {
		i.classList.toggle('enabled', true);
	});
}

function addPrize(arrIndexPrise){
	let fields = document.querySelectorAll('.field');
	for ( let i = 0; i < arrIndexPrise.length; i++) {
		fields[arrIndexPrise[i]].classList.add('prize');
	}
}

!function (){
	genField(3);
	let style = document.createElement('style');
	style.type = 'text/css';
	style.innerText = `div { background-color: lightgreen} .field{ background-color: yellow }  .enabled { background-color: red } .enabled.prize { background-color: green }
			.guessLabel { font-size: 30px }`;
	document.head.append(style);

}();

let resetButton = document.createElement('button');
let countLabel = document.createElement('label');
countLabel.innerText = 'Количество попыток: ' + countTry;
countLabel.setAttribute('class', 'guessLabel');
document.body.prepend(countLabel);
resetButton.addEventListener('click', resetHandler);
resetButton.style.width = '140px';
resetButton.style.height = '40px';
resetButton.innerText = 'Заново';
document.body.append(resetButton);

function resetHandler(event){
	countTry = 3;
	document.querySelector('.guessLabel').innerText = 'Количество попыток: ' + countTry;
    let fields = document.querySelectorAll('.field');
	for ( let i = 0; i < fields.length; i++) {
		fields[i].classList = 'field';
	}
}
