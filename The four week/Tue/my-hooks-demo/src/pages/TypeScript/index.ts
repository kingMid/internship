// function TS (){
const num: number = 10;
const arr: Array<number> = [1, 22, 2, 22, 2];
const arr2: string[] = ['g', 'h', 'j'];
const person: { name: string, age: number } = {name: 'zhangzhong', age: 18};

class Person {
}

const boy: Person = new Person();
console.log('num,arr,arr2,person,boy  ', num, arr, arr2, person, boy)


function getRes(a: number, b: number): number {
	return a + b;
}

console.log('计算两数之和2，3，getRes(2,3)  ', getRes(2, 3))


function getObj({name, age}: { name: string, age: number }): object {
	return {name, age}
}

const lisi = getObj({name: 'lisi', age: 25});
console.log('getObj  ', lisi)


const arr3: (number | string)[] = ['s', 10]
console.log("arr3 : (number | string)[]", arr3);

type User = { name: string, age: number }
const users: User[] = [{name: 'zz', age: 121}];
console.log('type-->users:User[]    ', users);


interface Boy {
	name: string;
	age: number;
	height: number;
	weight?: number;
}

const boyz = {
	name: 'zhangzhong',
	age: 18,
	height: 180,
	weight: 70
}
const select = (boyz: Boy) => {
	boyz.age < 30 && console.log(boyz.age)
	boyz.age >= 30 && console.log("30是老男孩了")
}
const getres = (boyz: Boy) => {
	console.log('interface--->the boy`s name is' + boyz.name);
	console.log('interface--->the boy`s age is' + boyz.age);
	boyz.weight ? console.log('interface--->? the boy`s weight is' + boyz.weight) : '';
}
select(boyz);
getres(boyz);

// }