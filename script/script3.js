//Задача №1

// let A = [ 12, 4, 3, 10, 1, 20 ]; 
// let B = [-3, -7, -100, -33];

// let C = Array(...B, ...A);

// console.log(C);

// or

 // C = B.concat(A);
 
 // console.log(C);
 
//Задача №2

// var area = [ 0, 1, null, null, null, null, null, null, null ];
// let length = area.length;

// let grid = "<div style=' border = 3px solid black ; display = grid ; grid-template-columns = 50px 50px 50px; grid-template-rows = 50px 50px 50px >";

// let child = "";

// ticTacToe.style.cssText = `border: 3px solid black; 
				// display: grid; 
				// grid-template-columns: 50px 50px 50px; 
				// grid-template-rows: 50px 50px 50px; 
				// width: 90%; 
				// height: 90 %;`;

// for ( let i = 0 ; i < length ; i++ ){
	// child = document.createElement("div");
	// if( i % 2 ) {
		// child.setAttribute("style", "background-color: grey");
	// } else {
		// child.setAttribute("style", "background-color: lightblue");
	// }
	// if ( area[i] === 1 ) {
		// child.innerHTML = "X";
	// } else if ( area[i] === 0)  {
		// child.innerHTML = "O";
	// }
	// ticTacToe.append(child);
// }

//Задача №3

// let arr = [12,4,3,-10,1,20];

// let min = arr[0], max = arr[0];
// length = arr.length;
	
// for( let i = 0; i < length ; i++ ) {
	// if ( min > arr[i] ) {
		// min = arr[i];
	// }
	// if ( max < arr[i]) {
		// max = arr[i];	
	// }
// }
// arr.splice( arr.indexOf(min), 1);
// arr.splice( arr.indexOf(max), 1);


// console.log( arr );

//Задача №4

// let countNum = 0;

// for ( let left = 1; left <= 999; left++) {
	// let temp = parseInt(left / 100) + ( parseInt(left / 10 ) % 10 ) + left % 10;
	// for ( let right = 1 ; right <= 999; right++){
		// if ( temp == ( parseInt( right / 100 ) + ( parseInt( right / 10 ) % 10 ) + right % 10 ) ) {
			// countNum++;
		// }
	// }
// }

// console.log("count= " + countNum);

//Задача №5

let arr  = [2,2,7,4,1,8,1,15];

// while ( arr.length < 1) {
	// arr.push(prompt("Добавьте элементы",10));
// }
let max1, max2;
let index1, index2;
let length = arr.length;
let remnant;
let lengthOfArr = arr.length * 2;

while ( lengthOfArr ) {
	max1 = arr[0], max2 = arr[0];
	index1 = -1, index2 = -1;
	// length = arr.length;
	
	//find first and second max in arr
	
	for( let i = 0; i < length ; i++ ) {
		if ( max1 <= arr[i] ) {
			max2 = max1;
			index2 = index1;
			max1 = arr[i];
			index1 = i;
		}
		// if ( max2 < arr[i] && max1 != arr[i]) {
			// max2 = arr[i];	
		// }
	}
	//annigilate
	remnant = max1 - max2;
	if ( remnant ) {
		arr[index1] = remnant;
		arr[index2] = 0;
		lengthOfArr--;
	} else {
		arr[index1] = 0;
		arr[index2] = 0;
		lengthOfArr -= 2;
	}
	
}

console.log(arr.find(function(current){ if (current > 0)  { return true; }  else  return false; }) || "0");


//Задача №5 (version 2)

// let arr1  = [2,2,7,4,1,8,1,25];
// let max1 , max2;
// let i = 10;

// sort array and delete elements

// while ( (arr1.length > 1) && i ) {
	// arr1.sort(function(a, b) {  return b - a; } );
	// max1 = arr1[0], max2 = arr1[1];
	// if ( max1 > max2 ) {
		// arr1.push(max1 - max2);
		// arr1.shift();
		// arr1.shift();
	// } else {
		// arr1.shift();
		// arr1.shift();
	// }
	// i--;
// }
//output results
// if( arr1.length == 1){
	// console.log(arr1[0]);
// } else {
	// console.log("0");
// }

//Задача №5 (version 3)

// let arr1  = [2,2,7,4,1,8,1,25,300];
// let max1 , max2;
// let i = 10;

// sort array and delete elements

// while ( arr1.length > 1) {
	// max1 = arr1[0];
	// for ( let i = 0; i < arr1.length ; i++) {
		// if ( max1 < arr1[i] ) {
			// max1 = arr1[i];
		// } 
	// }
	// arr1.splice( arr1.indexOf(max1), 1 );
	// max2 = arr1[0];
	// for ( let j = 0; j < arr1.length ; j++) {
		// if ( max2 < arr1[j] ) {
			// max2 = arr1[j];
		// } 
	// }
	// arr1.splice( arr1.indexOf(max2), 1 );
	// if ( max1 - max2 ) {
		// arr1.push(max1 - max2);
	// }
// }
//output results
// if( arr1.length == 1){
	// console.log(arr1[0]);
// } else {
	// console.log("0");
// }


