let name = "Francys G.";
const PI = 3.14;

console.log(name);

function showName(condition){

	const PI = 3.12;
	console.log(PI);

	if(condition){
		let fullName = name + "arcia";

		return fullName;
	}else{

		return ("12079777");

	}


}

console.log(showName(true));
console.log(showName(false));
console.log(PI);

const Person = {
	firstName : "Francys",
	lasnName : "Garcia"
}

console.log(Person);
Person.firstName = "Francys Moises";
console.log(Person);

var funcs = [];

/*for(var i = 0; i < 10; i++){
	funcs.push((function(value){
		return function(){
			console.log(value);
		}
	}(i)));
}*/

for(let i = 0; i < 10; i++){
	funcs.push(function(){
		console.log(i);
	})
}

funcs.forEach(function(func){
	func();
});

var funcs2 = [],
	object = {
		a:true,
		b:true,
		c:true
	};

for(const key in object){
	funcs2.push(function(){
		console.log(key);
	});
}

console.log("*****************************");
funcs2.forEach(function(func){
	func();
});

let result = "A";
let level = 10;
let newResult = result.repeat(++level);
console.log(newResult);


let values = [1000, 20,25,30,100];
let a2 = [1000, 20,25,30,100];
console.log(Math.max(...values));
console.log(Math.min(...values));

let reflect = value => value;
let sum = (s1, s2) => s1 + s2;
let rValues = () => values[2];
let fValues = val => {
	let value = values[val];

	if(value > 30){
		return "Mayor";
	}else{
		return value;
	}
};

let literal = id => ({id:id, temp:"temp"});

console.log(reflect("Valor IN"));
console.log("suma "+sum(2,3));
console.log("values "+ rValues());
console.log("values "+ fValues(4));
console.log("literal "+ JSON.stringify(literal(15)));

let sortArray = values.sort(function(a, b){
	return a - b;
});

let sortArrayArrow = a2.sort((a,b) => a < b);

console.log(sortArray);
console.log(sortArrayArrow);