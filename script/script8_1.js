//Задача №5
/*
5*. Реализовать одну 
страничку HTML о знаменитом человеке с 
использованием панели с вкладками (табы). 
Например, в качестве знаменитого человека 
возьмём Пушкина А.С., из википедии возьмём 
наполнение странички, в качестве вкладок 
можно указать: биография, творчество и т.п. 
Переключение между вкладками страницы и 
изменение содержимого реализовать с 
использованием JS.
*/

let tabsClassName = "tabs";
//let tabContentClass = "

function tabSwitcher(event){
	console.log(event.target);
	let index = event.target.dataset['index']
	let panel = document.body.querySelector(`div[data-index="${index}"]`);
	let panels = document.body.querySelectorAll('.tabs-panel');
	for( let item of panels)
		item.classList.remove('active');
	panel.classList.add('active');
}

function tabEventReg(tagArr, funcHandler){
	for ( let item of tagArr){
		item.addEventListener('click',funcHandler);
	}
}

let tabsArr = document.getElementsByClassName(tabsClassName);
tabEventReg(tabsArr[0].children, tabSwitcher);

