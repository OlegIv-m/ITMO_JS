//Задача№1
alert("Задача№1");
const SOTKA = 100;
var square = 10*SOTKA;
var row = 15, line = 25;
alert("Ответ на первую задачу: " + (square%row*line));

//Задача№2
alert("Задача№2");
const SQUARE_DECIMETER = 100;
let oval = 15*SQUARE_DECIMETER;
let oval_slice = 600;
alert("Ответ на  вторую задачу: " + (oval - oval_slice) + " m2");


//Задача№3
alert("Задача№3");
alert("Функция нахождения наименьшего из 3 чисел");
var x = prompt("Введите первое число x=", 10);
var y = prompt("Введите первое число y=", 20);
var z = prompt("Введите первое число z=", 30);
var min = ( x > y) ? y : x;
min = ( min > z ) ? z : min;
alert("Ответ на третью задачу:" + min);

//Задача№4
alert("Задача№4");
const BASE = 10;
var m,n;
m = prompt("Введите число m:", 8), n = prompt("Введите число n:", 11);
var first = BASE - m,
	second = BASE - n;
console.log("Задача №4: \n");
console.log("min " + ((Math.abs(first) < Math.abs(second)) ? "m="+m : "n="+n));

//Задача№5
alert("Задача№5");
var ax = 0,ay = 0,az = 0,
	bx = 0,by = 2,bz = 0,
	cx = 2,cy = 0,cz = 0;
var AB = ( ax - bx )**2 + ( ay - by )**2 + ( az - bz )**2;
var AC = ( ax - cx )**2 + ( ay - cy )**2 + ( az - cz )**2;
var BC = ( bx - cx )**2 + ( by - cy )**2 + ( bz - cz )**2;

var gipotenusa = ( AB > AC) ? AB : AC;
gipotenusa = ( gipotenusa > BC ) ? gipotenusa : BC;
(gipotenusa == AB) ? (catetA = AC, catetB = BC ) : (gipotenusa == AC ) ? (catetA = AB, catetB = BC ) : (catetA = AB, catetB = AC );
var triangle = (gipotenusa**2 == catetA**2 + catetB**2) | (catetA == catetB) ? "прямоугольный" : " не прямоугольный";
alert("Треугольник " + triangle);
