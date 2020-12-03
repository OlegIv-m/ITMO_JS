//Задача №1
/*
1. Даны несколько div элементов на html.
По первому нажатию на каждый div 
он перекрашивается зеленым цветом, 
при повторном нажатии перекрашивается 
обратно и так далее каждый клик 
происходит чередование цвета.
*/

let eventName = 'click';
let classTag = 'divContainer';
let nameTag = 'div';
//init function
function addEventOnDiv(elem){
	for( let el of elem){
		el.addEventListener(eventName,divHandler);
	}
}
//handler to paint green
function divHandler(event){
	event.target.classList.toggle("greenColor");
}

document.styleSheets[0].insertRule(".greenColor {color: green}");
addEventOnDiv(document.querySelector(`#${classTag}`).querySelectorAll(nameTag));


//Задача №2
/*
2. Реализовать счётчик нажатий на 
кнопку: Дана кнопка внутри неё 
записана цифра. При клике на 
кнопку – её значение должно 
увеличиваться на единицу.
*/

let buttonName = "countClick";

function countClickHandler(event){
	event.target.innerText++;
}
document.getElementById(buttonName).style.height = "30px";
document.getElementById(buttonName).style.width = "50px";
document.getElementById(buttonName).addEventListener('click',countClickHandler);


//Задача №3
/*
3. Реализовать возможность добавления комментариев. 
Комментарий вводится в textarea.
Комментарий добавляется по нажатию на кнопку Комментировать.
При добавлении комменария отображаются: аватар автора (пока у всех комментарие одинаковый), 
имя автора (пока у всех комментарие одинаковое), дата добавления комментария (текущая дата), 
текст комментария (тот, что был введен в textarea).
*/

function addComment(comment){
	let date = new Date();
	let commentTag = document.createComment(comment);
	document.body.append(date);
	document.body.append(document.createElement("p"));
	document.body.append(commentTag);
}

function commentHandler(event){
	let comment = document.querySelector("#commentArea").value;
	addComment(comment);
}


document.querySelector("#commentAccept").addEventListener('click',commentHandler);


//Задача №4
/*
4. Дан массив с объектами, где каждый объект 
описывает книгу: артикул, автор, название, описание.
Сформировать функцию, которой передаётся массив 
книг, и которая создаст и внесёт все 
необходимые html элементы, стили, и содержание 
для отображения всей информации о книгах в виду таблицы.
*/

let books = [
	{art: 101, auth: "author1", title: "book1", description: "someting interesting1"},
	{art: 102, auth: "author2", title: "book2", description: "someting interesting2"},
	{art: 103, auth: "author3", title: "book3", description: "someting interesting3"},
];

function createTable(container,objs){
	let table = document.createElement("table");
	table.createCaption().innerText = "Goods";
	for( let i = 0; i < objs.length; i++){
		let row = table.insertRow(i);
		for ( let j in objs[i]){
			row.insertCell().innerText = objs[i][j];
		}
		
	}
	container.append(table);
}

createTable(document.body,books);
