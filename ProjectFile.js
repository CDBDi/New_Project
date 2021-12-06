//console.log("Hello World!");

//const rand1 = "hello";
const rand1 = ['Lions', 'Tigers', 'Bears'];
//const rand2 = "world";
const rand2 = ['love', 'hate', 'tolerate']
//const rand3 = "!";
const rand3 = ['eating', 'mating', 'fighting']
//const rand4 = ["test", "trial", "experiment"];

const numGen = (arr) => {
  return Math.floor(Math.random()*arr.length);
}
//console.log(rand4[numGen(rand4)]);

console.log(rand1[numGen(rand1)] + ' ' + rand2[numGen(rand2)] + ' ' + rand3[numGen(rand3)]) // Animals in the Zoo,
//Rand1 is one of the animals in the Zoo
//Rand2 is an adjective
//Rand3 is a verb
//An example might be "The Lions/Tigers/Bears - Love/Hate/Tolerate - Eating/Mating/Fighting"
