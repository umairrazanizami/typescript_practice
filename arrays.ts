import chalk from "chalk";
import { collapseTextChangeRangesAcrossMultipleVersions } from "typescript";

let fruitsName: string[] ;

fruitsName = ['apple','orange','banana','mango','strawberry'];

// console.log(fruitsName);

for (let i in fruitsName ){

    console.log(chalk.blue(fruitsName[i]));
}

// let a :any[] = [1,"2",3,'4',5]

// for (let i in a ){

//     console.log(chalk.red(a[i]));
// }

console.log(chalk.bgCyan.bold(`The Length of Fruits array is ${fruitsName.length}`));

fruitsName[5] = 'guava';

for (let i in fruitsName ){

    console.log(chalk.red(fruitsName[i]));
}

console.log(chalk.bgCyan.bold(`The Length of Fruits array is ${fruitsName.length}`));
console.log('Last Fruit is poping........')
console.log(fruitsName.pop())
for (let i in fruitsName ){

    console.log(chalk.red(fruitsName[i]));
}

console.log(chalk.bgCyan.bold(`The Length of Fruits array is ${fruitsName.length}`));