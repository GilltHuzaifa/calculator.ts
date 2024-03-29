#! /usr/bin/env node
import inquirer from "inquirer"
import chalk from "chalk"

console.log( chalk.blue('lets start calculation')); 

function main(){
   

    inquirer
      .prompt([
        {
            type:"number",
            name:"num1",
            message:"Enter a first number:"


        },
        {
            type:"number",
            name:"num2",
            message:"Enter a second number:"
        },
        {
            type:"list",
            name:"operator",
            message:"Choose your operation you want to perform?",
            choices:["+","-","*","/","%"]

        },
      ])
      .then((answers) => {
        
        if(answers.operator =="+"){
            console.log(`${answers.num1} + ${answers.num2} = ${answers.num1 + answers.num2}`);
        }else if(answers.operator== "-"){
            console.log(`${answers.num1} - ${answers.num2} = ${answers.num1 - answers.num2}`);
        }else if(answers.operator== "*"){
            console.log(`${answers.num1} * ${answers.num2} = ${answers.num1 * answers.num2}`);
        }else if(answers.operator== "/"){
            console.log(`${answers.num1} / ${answers.num2} = ${answers.num1 / answers.num2}`);
        }else if(answers.operator== "%"){
            console.log(`${answers.num1} % ${answers.num2} = ${answers.num1 % answers.num2}`);
        }
        
      })
      .catch((error) => {
        if (error.isTtyError) {
          // Prompt couldn't be rendered in the current environment
        } else {
          // Something else went wrong
        }
      });

}

main()



