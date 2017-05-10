//Problem 1
const loaf = {
  flour: 300,
  water: 210,
  hydration: function() {
    return (this.water / this.flour) * 100;
  }
}

console.log(`${loaf.flour}, ${loaf.water}`);
console.log(loaf.hydration());

//Problem 2
const myObj={
	foo:"foo",
	bar:"bar",
	fum:100,
	quux:"WHAT IS THIS WORD?",
	spam: function(){
		return [];
	}
}
function loopy(obj){
	for(let key in obj){
		console.log(`${key}: ${obj[key]}\n`);
	}
}
loopy(myObj);

//Problem 3
const food = {
  meals: ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper']
}

console.log(food.meals[3]);


//Problem 4
let arr = [{
		name:'Jamie',
		job_title:'professional gamer'
	},
	{
		name:'Kyle',
		job_title:'bum league of Legend player'
	},
	{
		name:'Bum',
		job_title:'Coder'
	}];
console.log(arr.map(el=>`${el.job_title} ${el.name}`).join('\n'));
//Problem 5
//Problem 6
//Problem 7

