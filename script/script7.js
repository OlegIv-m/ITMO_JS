'use strict';
//Задача №1
// 1. Создать функцию которая выводит время 
// в html и обновляет значения каждую секунду. 
// Время выводить в формате чч:мм:cc, при этом
// часы, минуты и секунды отобразить разными цветами.
/*
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
*/

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
	for ( let i = 0; i < goods.length; i++){
		let div = document.createElement("div");
		div.style.display = "inline";
		let image = document.createElement("img");
		image.srcset = goods[i].img;
		image.width = 300;
		image.height = 300;
		let artic = document.createElement("p");
		artic.innerText = goods[i].articul;
		let desc = document.createElement("span");
		desc.innerText = goods[i].description;
		
		div.append(artic, image, desc);
		
		let sibling = document.getElementById("timer");
		sibling.after(div);
	}
}

addGoods(objs);