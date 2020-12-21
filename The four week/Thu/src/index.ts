const  theacher :string = "jszhong"
console.log(theacher)
console.log('-----------------------------------------------------------------')

interface Student {
	study: boolean;
	say(): string;
}

interface Teacher {
	study:boolean;
	teach():string

}
class Student implements Student{
	study = true;
	say(): string {
		return 'i am a good student!'
	}

}

class Teacher implements Teacher{
	study = false;
	teach(): string {
		return 'i`m your teacher !'
	}

}

const  animal = new Student();
const  animal1 = new Teacher();

function judgeWho(animal:Student | Teacher){
	if(animal.study){
		console.log('judgeWho',(animal as Student).say());
	} else {
		console.log('judgeWho',(animal as Teacher).teach());
	}
}

function judge(animal1:Student | Teacher){
	if('say' in animal1){
		console.log('judge',animal1.say());
	} else {
		console.log('judge',animal1.teach());
		console.log('-----------------------------------------------------------------')
	}
}


function add(first: string | number, second: string | number){
	if(typeof first === 'string' || typeof  second === 'string'){
		return `${first}${second}`;
	}

	return first + second

}


console.log('add(1,2)',add(1,2))
console.log('add(a,b)',add('a','b'))
console.log('-----------------------------------------------------------------')


class NumberObj{
	count : number | undefined;
}

function addObj( first:object | NumberObj , second : object | NumberObj){
	if(first instanceof  NumberObj && second instanceof NumberObj){
		if ( typeof first.count === 'undefined' || typeof second.count === 'undefined'){
			return 0
		}
		return first.count + second.count
	}
	return 0
}

const  p1 = new  NumberObj();
p1.count =120;

const  p2 = new  NumberObj();
p2.count =120;

const  num = addObj(p1,p2);
console.log('addObj',num)