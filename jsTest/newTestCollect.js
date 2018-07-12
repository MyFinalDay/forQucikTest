const collect = require('../dependence/collect');
const c = console.log;

console.log("collect: ", collect);
console.log(
    collect([1, 3, 3, 7]).avg()
);
const collection = collect(['name', 'number']);

const combine = collection.combine(['Steven Gerrard', 8]);

c(combine.all());

// https://chancejs.com/usage/node.html
const Chance = require('../dependence/chance');

const chance = new Chance();

c(chance.phone());
c(chance.street());

c(chance.floating({min: 0, max: 100, fixed: 8}));

// https://vocajs.com/#
const v = require('../dependence/voca');

c(v.slugify('new a job'));
c(v.snakeCase('new a job'));

c(v.camelCase('BirdFlight'));
c(v.kebabCase('goodbye blue sky'));

c(v.countWords('gravity can cross dimensions'));


