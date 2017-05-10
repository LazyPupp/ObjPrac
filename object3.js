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
const arr = [
  {
    name:'Jamie',
    job_title:'professional gamer',
    boss: 'Iron Man'
  },
  {
    name:'Kyle',
    job_title:'bum league of Legend player',
    boss: 'Hulk'
  },
  {
    name:'Bum',
    job_title:'Coder',
    boss: 'Captain America'
  },
  {
    name: 'Richard',
    job_title: 'Founder'
  }
];

function workChart(arr) {

return arr.map(el => el.hasOwnProperty('boss') ? `${el.job_title} ${el.name} reports to ${el.boss}.` : `${el.job_title} ${el.name} doesn't report to anybody.`).join('\n');

}

console.log(workChart(arr));

//Problem 6
const cipher ={
	a: 2,
	b: 3,
	c: 4,
	d: 5
};
function decoder(str){

	return str.split(' ').map(el=>cipher.hasOwnProperty( el[0] ) ? el[cipher[el[0]]-1]: ` ` ).join('');  
}

//Problem 7

