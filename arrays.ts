import chalk from "chalk";

let fruitsName: string[] ;

fruitsName = ['apple','orange','banana','mango','strawberry'];

// console.log(fruitsName);

for (let i in fruitsName ){

    console.log(chalk.blue(fruitsName[i]));
}