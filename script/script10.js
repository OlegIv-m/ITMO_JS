//JS Lesson 10 exercise 1
/*
1. Создать шаблон объектов «Товар».
Свойства товара «Имя» и «Цена».
Создать шаблон объектов «Корзина товаров». 
Приватные свойства объекта:
- Массив товаров;
- Количество товаров;
- Сумма товаров.
Методы объекта:
- Добавить товар;
- Вернуть сумму товара;
- Вернуть количество товара.
*/

let Good = function(name, price){
	this.name = name;
	this.price = price;
	return this;
}

let Basket = function () {
	this.goods = [];
	this.count = 0;
	this.sum = 0;
	this.addGoods = function(sample){
		this.goods.push(sample);
		this.count = this.goods.length;
		this.sum += sample.price;
	}
	this.getSum = function(i) {
		return this.sum;
	}
	this.getCount = function(){
		return this.count;
	}
	
	return this;
}

//JS Lesson 10 exercise 2
/*
2. Создать шаблон объектов «Человек».
Свойства «Имя», «Возраст», «Пол», «Интересы».
Метод преобразования к строке вида: «Человек: 
Иван. Возраст: 25 лет. Пол: м. Интересы: 
музыка, программирование.»
Создать шаблон объектов «Студент».
Свойства от наследованные от шаблона объектов 
«Человек» и добавить «Институт».
Переопределить метод преобразования к строке 
вида: «Студент: Иван. Возраст: 25 лет. Пол: м. 
Интересы: музыка, программирование. 
Обучается в ИТМО.»
*/

// функция шаблон Human
 function Human(name, age, sex, interests){
	this.name = name;
	this.age = age;
	this.sex = sex;
	this.interests = interests;
	return this;
}

Human.prototype.toString = function HumanString() {
	return `Человек: ${this.name}. Возвраст: ${this.age} лет. Пол: ${this.sex}. Интересы: ${this.interests}`;
}
// функция шаблон Student
function Student(name, age, sex, interests, institute){
	Human.call(this, name, age, sex, interests);
	this.institute = institute;
	return this;
}


//Student.prototype = Human;


Student.prototype.toString = function studentString() {
	return `Студент: ${this.name}. Возвраст: ${this.age} лет. Пол: ${this.sex}. Интересы: ${this.interests}. Обучается в ${this.institute}`;
}

let obj1 = new Student('oleg', 33, 'm', 'reading', 'ITMO')


//JS Lesson 10 exercise 3

/*
3. Создать шаблон объектов «Пользователь».
Метод преобразования к строке выводит имя пользователя.
Два фабричных метода:
- «Создать анонимного пользователя» не получает аргументов,
 в качества имя пользователя устанавливает «Аноним».
- «Создать пользователя из данных» в качества аргументов 
получает объект с именем и возрастом пользователя.
*/

function User(){
	
}

User.newNameUser = function(name, age) {
	let user = new User();
	user.name = name; 
	user.age = name;
	return user;
}
User.newAnonimUser = function() {
	let user = new User();
	user.name = "anonim"; 
	user.age = 18;
	return user;
}


//JS Lesson 10 exercise 4
/*
4. Выбрать 10 незнакомых (которые не разбирались на занятиях) 
шаблонов объектов (классов) доступных в глобальной области и 
привести информацию в виде комментариев в коде для чего 
они используются. Информацию можно найти в документации 
(справочные системы по js, статьи по программированию и т.п.).
*/
/*
#1
Symbol()
класс позволяет уникально идентифицировать объекты
ни один объект Symbol не равен другому объекту Symbol
*/

/*
#2
Set
коллекция с уникальными значениями 
значения хранятся в порядке вставки и может хрнаить значения любых типов
*/

/*
#3
Reflect
Объект со статическими функциями, некоторые функции дублируют методы Object
Например Reflect(target, property) проверка на наличие свойства
*/

/*
#4
Promise
Объект для работы с асинхронными операциями
*/

/*
#5
Iterator
метод возвращающий объект для итерации по свойствам объекта
*/

/*
#6
generator
класс обертка возвращаюшая итерируемый объект
*/

/*
#7
Atomics
обьект со стаитическими функциями для гарантии атомарности операции.
*/

/*
#8
Proxy 
класс для создания обертки над обьектом для перехвата функции
*/

/*
#9
Proxy 
класс для создания обертки над обьектом для перехвата функции
*/

/*
#10
WeakSet 
коллекция в которой могут храниться только обьекты
ссылки на обьекты слабые. т.е. если нет внешних ссылок на данные обьекты то они удаляются сборщиком мусором
*/

//JS Lesson 10 exercise 5
/*
5.* Перенести в ОО-код следующий пример из реального мира:
- есть курсы, учителя и ученики
- у каждого курса есть свой учитель
- у каждого учителя есть своя группа учеников
Определите какие объекты есть в этом примере, какие у них 
свойства и какие методы, как эти объекты будут между собой 
взаимодействовать, например, к курсу можно добавить учителя.
Создайте все необходимые шаблоны объектов (классы) и приведите 
пример их использования.
*/

function Student(name){
	this.name = name;
	this.teacher;
	this.course;
	this.getCourse = function () {
		return this.course;
	}
	this.setCourse = function (course) {
		this.course = course;
	}
	this.getTeacher = function () {
		return this.teacher;
	}
	this.setTeacher = function (teacher) {
		if( teacher instanceof Teacher) {
			this.teacher = teacher;
			return true;
		} else {
			return false;
		}
	}
	return this;
}


function Course(name){
	this.name = name;
	this.students = [];
	this.teacher;
	this.addStudent = function(stud) {
		this.students.push(stud);
	}
	this.getStudent = function(stud) {
		let found = this.students.find(stud);
		this.students = this.students.map( (current, index) => {
			if ( current == stud )
				return current;
		} );
		return found;
	}
	this.setTeacher = function (teacher) {
		if ( teacher instanceof Teacher) {
			this.teacher = teacher;
			return true;
		}
		else
			return false;
	}
	this.getTeacher = function () {
		return this.teacher;
	}
	return this;
}

function Teacher(name){
	this.course = [];
	this.teacher = name;
	this.addCourse  = function (course) {
		this.course.push (course);
	}
	this.getCourse = function(course) {
		let found = this.course.find(course);
		this.course = this.course.map( (current, index) => {
			if ( !current == course )
				return current;
		} );
		return found;
	}
	this.hasCourse  = function (course) {
		return this.course.includes (course);
	}
	return this;
}

let student1 = new Student('Олег');
let course1 = new Course('Node');
let teacher1 = new Teacher('Александр');

student1.setCourse(course1);
student1.setTeacher(teacher1);

course1.addStudent(student1);
course1.setTeacher(teacher1);

teacher1.addCourse(course1);


//Output
console.log ( student1.getTeacher() );
console.log ( student1.getCourse() );

console.log ( course1.getTeacher() );

console.log ( teacher1.hasCourse(course1) );