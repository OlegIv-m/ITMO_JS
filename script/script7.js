'use strict';
//Задача №1
// 1. Создать функцию которая выводит время 
// в html и обновляет значения каждую секунду. 
// Время выводить в формате чч:мм:cc, при этом
// часы, минуты и секунды отобразить разными цветами.

function trim(timer){
	return ( timer < 10 ) ? `*${timer}` : timer;
}

function insertTimer(idHours, idMinutes, idSeconds){
	let htmlTimerHour = document.getElementById(idHours);
	let htmlTimerMinutes = document.getElementById(idMinutes);
	let htmlTimerSeconds = document.getElementById(idSeconds);
	
	let date = new Date();
	htmlTimerHour.innerHTML = trim(date.getHours());
	htmlTimerMinutes.innerHTML = trim(date.getMinutes());
	htmlTimerSeconds.innerHTML = trim(date.getSeconds());
}

let hours = "hour", minutes = "minute", seconds = "second";

setInterval(function() {insertTimer(hours, minutes, seconds)}, 1000);


//Задача №2
// 2. Дан массив с объектами, где каждый объект 
// описывает товар: фото, артикул, описание и т.п.
// Сформировать функцию, которой передаётся массив 
// товаров, и которая создаст и внесёт все 
// необходимые html элементы, стили, и содержание 
// для отображения всей информации о товарах.


let objs = [
	{img: "../images/image1.jpeg",
	 articul: 1,
	 description: "good1",
		},
	{img: "../images/image2.jpg",
	 articul: 2,
	 description: "good2",
	 },
	 {img: "../images/image3.jpg",
	 articul: 3,
	 description: "good3",
	 },
	 {img: "../images/image4.jpg",
	 articul: 4,
	 description: "good4",
	 },
]

function addGoods(goods){
	let divContainer = document.createElement("div");
	divContainer.style.display = "grid";
	divContainer.style.gridTemplateColumns = "auto auto";
	divContainer.style.justifyContent = "space-evenly"
	divContainer.style.textAlign = "center";
	let div = "";
	for ( let i = 0; i < goods.length; i++){
		div = document.createElement("div");
		let image = document.createElement("img");
		image.srcset = goods[i].img;
		image.width = 300;
		image.height = 300;
		let artic = document.createElement("p");
		artic.innerText = goods[i].articul;
		let desc = document.createElement("span");
		desc.innerText = goods[i].description;
		desc.style.display = "block";
		div.append(artic, image, desc);
		divContainer.append(div);
	}
	
	let sibling = document.getElementById("timer");
	sibling.after(divContainer);
}

addGoods(objs);


//Задача №3
/*
3. Создать светофор (красный, желтый, 
зелёный). Переключать цвет у светофора 
через каждые 2 сек сверху вниз и снизу вверх.

*/

let semaphorLights = [{light: "red", number: 0}, {light: "yellow", number: 1}, {light: "green", number: 2}, {light: "yellow", number: 1} ];

//Замыкание для переключения по светофору
function switchLight(){
	let currentLightOn = 0;
	return function() {
		( currentLightOn < 3 ) ? currentLightOn++ : currentLightOn = 0;  
		return semaphorLights[currentLightOn];
	}
}
let createLightSwitcher = switchLight();
//переключение света
function switchSemaphor(){
	let result = createLightSwitcher();
	let currentLight = document.getElementsByClassName('semaphorBox')[0].children;
	currentLight[0].className = "";
	currentLight[1].className = "";
	currentLight[2].className = "";
	currentLight[result["number"]].className = result["light"]; 
}

function createSemaphor(){
	let container = document.createElement("div");
	container.style.display = "grid";
	container.style.gridTemplateColumns = "70%";
	container.style.justifyContent = "space-evenly";
	
	let semaphor = document.createElement("div");
	semaphor.style.display = "grid";
	semaphor.style.gridTemplateColumns = "50%";
	semaphor.style.justifyContent = "space-evenly";
	semaphor.style.ali
	semaphor.style.border = "3px solid black"
	semaphor.style.width = "80px"
	semaphor.style.height = "auto";
	semaphor.style.justifyItems = "center"
	semaphor.className = "semaphorBox";
	
	let light1 = document.createElement("div");
	let light2 = document.createElement("div");
	let light3 = document.createElement("div");
	light1.style.borderRadius = "50%";
	light2.style.borderRadius = "50%";
	light3.style.borderRadius = "50%";
	// light1.className = "red";
	// light2.className = "yellow";
	// light3.className = "green";
	light1.style.height = "50px";
	light2.style.height = "50px";
	light3.style.height = "50px";
	light1.style.width = "50px";
	light2.style.width = "50px";
	light3.style.width = "50px";
	light1.style.border = "5px solid red";
	light2.style.border = "5px solid red";
	light3.style.border = "5px solid red";
	
	semaphor.append(light1);
	semaphor.append(light2);
	semaphor.append(light3);
	
	container.append(semaphor);
	
	document.getElementById('semaphor').append(container);
	let styleSemaphor = document.createElement('style');
	document.head.appendChild(styleSemaphor);
	let styleSheetSemaphor = styleSemaphor.sheet;
	styleSheetSemaphor.insertRule('.red { background-color: red; }',0);
	styleSheetSemaphor.insertRule('.yellow { background-color: yellow; }',0);
	styleSheetSemaphor.insertRule('.green { background-color: green; }',0);
	console.log(document.styleSheets);
}


createSemaphor();
window.setInterval(switchSemaphor, 2000);

//Задача №4

// 4*. Создать функцию которая выводит в html количество дней, 
// часов и минут до нового года и обновляет значения каждую минуту. 
// Датой наступления нового года считается 1 января. Функция выводит в html 
// строку вида: "14 дней 21 час 46 минут". Нужно реализовать корректные 
// окончания слов, например: 1 день, 2 дня, 5 дней. 
// Функция должна корректно работать при запуске в любом году, 
// т. е. грядущий год должен вычисляться программно.
function selectDayWord(day){
	switch (day) {
		case 1: return "день";
		case 2: 
		case 3:
		case 4: return "дня";
		//case 5,6,7,8,9,10,11,12,13,14,15,16,17,18,19: return "дней";
		default: 
			if( day <20) return "дней";
			switch (day % 10) {
				case 1: return "день";
				case 2: 
				case 3:
				case 4: return "дня";
				default: return "дней";
			};
	}
}

function selectHoursWord(hour){
	switch (hour) {
		case 1: return "час";
		case 2: 
		case 3:
		case 4: return "часа";
		default: 
			if( hour <20) return "часов";
			switch (hour % 10) {
				case 1: return "час";
				case 2: 
				case 3:
				case 4: return "часа";
				default: return "часов";
			};
	}
}

function selectMinutesWord(minute){
	switch (minute) {
		case 1: return "минута";
		case 2: 
		case 3:
		case 4: return "минуты";
		default: 
			if( minute <20) return "минут";
			switch (minute % 10) {
				case 1: return "минута";
				case 2: 
				case 3:
				case 4: return "минуты";
				default: return "минуты";
			};
	}
}

function dateTimer(){
	let now = new Date();
	let newYear = now.getFullYear() + 1;
	let newYearDate = new Date(newYear,0,1,0,0,0,0);
	let timeRemain = newYearDate - now;
	return function (tag){
		timeRemain -= 1000;
		let days = parseInt(timeRemain /1000/60/60/24);
		let hours = parseInt(timeRemain /1000/60/60%24);
		let minutes = parseInt(timeRemain /1000/60%60);
		let seconds = parseInt(timeRemain /1000%60);
		tag.innerHTML = `${days} ${selectDayWord(days)}: ${hours} ${selectHoursWord(hours)}: ${minutes} ${selectMinutesWord(minutes)}: ${seconds}` ;
	}
}

let newYearTimer = dateTimer();

let timerTag = document.getElementById('newYearTimer');
globalThis.setInterval( newYearTimer, 1000,timerTag);