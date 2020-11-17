//Задача №1

let A = [ 12, 4, 3, 10, 1, 20 ]; 
let B = [-3, -7, -100, -33];

let C = Array(...B, ...A);

console.log(C);

//or

 // C = B.concat(A);
 
 // console.log(C);
 
//Задача №2

var area = [ 0, 1, null, null, null, null, null, null, null ];
let length = area.length;

let grid = "<div style=' border = 3px solid black ; display = grid ; grid-template-columns = 50px 50px 50px; grid-template-rows = 50px 50px 50px >";

let child = "";

ticTacToe.style.cssText = `border: 3px solid black; 
				display: grid; 
				grid-template-columns: 50px 50px 50px; 
				grid-template-rows: 50px 50px 50px; 
				width: 90%; 
				height: 90 %;`;

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

//Задача №3

let arr = [12,4,3,-10,1,20];

let min = arr[0], max = arr[0];
let length = arr.length;
	
for( let i = 0; i < length ; i++ ) {
	if ( min > arr[i] ) {
		min = arr[i];
	}
	if ( max < arr[i]) {
		max = arr[i];	
	}
}
arr.splice( arr.indexOf(min), 1);
arr.splice( arr.indexOf(max), 1);


console.log( arr );

//Задача №4

let countNum = 0;

for ( let left = 1; left <= 999; left++) {
	let temp = parseInt(left / 100) + ( parseInt(left / 10 ) % 10 ) + left % 10;
	for ( let right = 1 ; right <= 999; right++){
		if ( temp == ( parseInt( right / 100 ) + ( parseInt( right / 10 ) % 10 ) + right % 10 ) ) {
			countNum++;
		}
	}
}

console.log("count= " + countNum);

//Задача №5

let arr  = [2,2,7,4,1,8,1,15];

while ( arr.length < 1) {
	arr.push(prompt("Добавьте элементы",10));
}

while ( true ) {
	let max1 = arr[0], max2 = arr[1];
	let length = arr.length;
	
	// find first and second max in arr
	
	for( let i = 0; i < length ; i++ ) {
		if ( max1 < arr[i] ) {
			max1 = arr[i];
		}
		if ( max2 < arr[i] && max1 != arr[i]) {
			max2 = arr[i];	
		}
	}
	//annigilate
	if ( ( max1 - max2) >= 0 ) {
		arr.splice( arr.indexOf(max1), 1, max1 - max2);
		arr.splice( arr.indexOf(max2), 1);
	} else {
		arr.splice( arr.indexOf(max1), 1);
		arr.splice( arr.indexOf(max2), 1);
	}
	if ( arr.length <= 1) {
		break;	
	}
}
console.log(arr);

