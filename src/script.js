// "use strict";

// TODO - write your code here.

// Declare an arrow function named randomDamage that has no parameters and returns a random integer between 1 and 10.

    const randomDamage = () => {
        min = Math.ceil(1);
        max = Math.floor(10);
        return Math.floor(Math.random() * (max - min + 1));
    };
    console.log(randomDamage(10));

// Declare an arrow function named chooseOption that has two parameters named opt1 and opt2. chooseOption does two things: 
// Declares and initializes a variable named randNum to either a 0 or 1, randomly.
// Returns opt1 if randNum is equal to 0 otherwise return opt2 . (Use a ternary operator)

    const chooseOption = (opt1, opt2) => {
        let randNum = Math.random() * 1;
        if (randNum < 0.5) {
            randNum = 0;
        } else {
            randNum = 1
        }
        return randNum === 0
        ? opt1
        : opt2;
    };
    console.log(chooseOption('opt1', 'opt2'));

    // Declare a function expression named attackPlayer that has one parameter named health which returns a number equal to health minus the result of the randomDamage function.

    function attackPlayer(health) {
        return health -= randomDamage();
    }
    console.log(attackPlayer(10));

// Declare an arrow function named logHealth that has two parameters named player and health which has a console.log method to state the following message: “player health: health”.

    const logHealth = (player, health) => {
        console.log(`${player} health: ${health}`);
    }
    logHealth('Briana', 100)

 // Declare an arrow function named logDeath that has two parameters named winner and loser which has a console.log method to state the following message: “winner defeated loser”

 const logDeath = (winner, loser) => {
     console.log(`${winner} defeated: ${loser}`);
 }
 logDeath('Briana', 'Auriel')

 // Declare an arrow function named isDead that has one parameter named health which returns a boolean value of true or false based on the following condition: health <= 0;

 const isDead = (health) => {
     return health <= 0 ? true : false
 }
 console.log(isDead(-4))