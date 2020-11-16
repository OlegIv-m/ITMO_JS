//Задача №1
// let A = [ 12, 4, 3, 10, 1, 20 ]; 
// let B = [-3, -7, -100, -33];

// let C = Array(...B, ...A);

// console.log(C);

//or

 // C = B.concat(A);
 
 // console.log(C);
 
//Задача №2
// <div style=' border = 3px solid black ; display = grid ; grid-template-columns = 50px 50px 50px; grid-template-rows = 50px 50px 50px > </div>
var area = [ 0, 1, null, null, null, null, null, null, null ];
let length = area.length;

let grid = "<div style=' border = 3px solid black ; display = grid ; grid-template-columns = 50px 50px 50px; grid-template-rows = 50px 50px 50px >";

let child = "";

ticTacToe.style.cssText = `border: 3px solid black; display: grid ; grid-template-columns: 50px 50px 50px; 
						grid-template-rows: 50px 50px 50px; width: 90% ; height: 90 %;`;


for ( let i = 0 ; i < length ; i++ ){
	child = document.createElement("div");
	if( i % 2 ) {
		child.setAttribute("style", "background-color: grey");
	} else {
		child.setAttribute("style", "background-color: lightblue");
	}
	if ( area[i] === 1 ) {
		child.innerHTML = "X";
	} else if ( area[i] === 0)  {
		child.innerHTML = "O";
	}
	ticTacToe.append(child);
}

