interface Person {
	name: string;
	age: number;
	height: number;
	weight?: number;

	[propname: string]: any;

	say(): string;
}

const boy = {
	name: 'zhangzhong',
	age: 18,
	height: 180,
	weight: 70,
	sex: '男',
	say(): string {
		return "i am good boy!"
	}
}

class AoTeMan implements Person {

	name = '迪迦';
	age = 18;
	height = 1800;
	weight = 70;

	say(): string {
		return "是男人就要相信光!"
	}

}
let oneAoteman = new AoTeMan();

console.log(oneAoteman.name, oneAoteman.age+'岁', oneAoteman.height+'cm', oneAoteman.weight+'kg');
console.log(oneAoteman.say())


const select = (boy: Person) => {
	boy.age < 30 && console.log("hi,小鲜肉！")
	boy.age >= 30 && console.log("30是老男孩了")
}
const getres = (boy: Person) => {
	console.log('interface--->the boy`s name is ', boy.name);
	console.log('interface--->the boy`s age is  ', boy.age);
	boy.weight && console.log('interface--->? the boy`s weight is ', boy.weight);
	boy.sex && console.log('interface--->? the boy`s weight is  ', boy.sex);
	console.log("the person say: ", boy.say())
}
select(boy);
getres(boy);